"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Trash2, Edit2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase/client"
import { toast } from "sonner"

const ROLE_COLORS = {
  super_admin: "bg-destructive text-destructive-foreground",
  admin: "bg-primary text-primary-foreground",
  user: "bg-secondary text-secondary-foreground",
}

type User = {
  id: string
  email: string
  username: string
  full_name: string
  role: "user" | "admin" | "super_admin"
  created_at: string
  // Add other fields if they exist in your DB, or map them
  lessons_completed?: number
  total_score?: number
}

export default function UserManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [selectedRole, setSelectedRole] = useState<string>("")


  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      console.log("Fetching users...")

      // First, let's try a simple count query to test permissions
      const { count, error: countError } = await supabase
        .from("users")
        .select("*", { count: "exact", head: true })

      if (countError) {
        console.error("Count query error:", countError)
        throw countError
      }

      console.log("User count:", count)

      // Now fetch the actual data
      const { data, error } = await supabase
        .from("users")
        .select("id, email, username, full_name, role, created_at")
        .order("created_at", { ascending: false })
        .limit(100) // Limit for performance

      if (error) {
        console.error("Data fetch error:", error)
        throw error
      }

      console.log("Fetched users:", data?.length || 0)
      setUsers(data || [])
    } catch (error: any) {
      console.error("Error fetching users:", error)
      toast.error(`Failed to load users: ${error.message || "Unknown error"}`)
      setUsers([]) // Set empty array on error
    } finally {
      setIsLoading(false)
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDeleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return

    try {
      // Note: Deleting from auth.users requires service role or a specific function
      // For now, we'll try deleting from the public table which might cascade or fail depending on RLS
      const { error } = await supabase.from("users").delete().eq("id", id)

      if (error) throw error

      setUsers(users.filter((u) => u.id !== id))
      toast.success("User deleted successfully")
    } catch (error) {
      console.error("Error deleting user:", error)
      toast.error("Failed to delete user. You may need Super Admin privileges.")
    }
  }

  const handleUpdateRole = async () => {
    if (selectedUser && selectedRole) {
      try {
        const { error } = await supabase
          .from("users")
          .update({ role: selectedRole })
          .eq("id", selectedUser.id)

        if (error) throw error

        setUsers(users.map((u) => (u.id === selectedUser.id ? { ...u, role: selectedRole as any } : u)))
        setSelectedUser(null)
        setSelectedRole("")
        toast.success("User role updated successfully")
      } catch (error) {
        console.error("Error updating role:", error)
        toast.error("Failed to update user role")
      }
    }
  }

  const stats = {
    total: users.length,
    active: users.length, // Assuming all fetched are active for now
    superAdmin: users.filter((u) => u.role === "super_admin").length,
    admin: users.filter((u) => u.role === "admin").length,
    avgScore: 0, // Placeholder until we have real score data
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Total Users</p>
            <p className="text-2xl font-bold text-primary">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Active</p>
            <p className="text-2xl font-bold text-green-600">{stats.active}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Super Admins</p>
            <p className="text-2xl font-bold text-destructive">{stats.superAdmin}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Admins</p>
            <p className="text-2xl font-bold text-blue-600">{stats.admin}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Avg Score</p>
            <p className="text-2xl font-bold text-accent">{stats.avgScore}%</p>
          </CardContent>
        </Card>
      </div>

      {/* User Management Card */}
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Manage platform users, roles, and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by email or username..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">User</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Role</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Joined</th>
                    <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-muted-foreground">
                        Loading users...
                      </td>
                    </tr>
                  ) : filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-muted-foreground">
                        No users found
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-border hover:bg-muted/50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-foreground">{user.full_name || "N/A"}</p>
                            <p className="text-xs text-muted-foreground">@{user.username || "user"}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-foreground text-sm">{user.email}</td>
                        <td className="py-4 px-4">
                          <Badge className={`${ROLE_COLORS[user.role as keyof typeof ROLE_COLORS]} capitalize`}>
                            {user.role?.replace("_", " ") || "User"}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-foreground">
                          {new Date(user.created_at).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    setSelectedUser(user)
                                    setSelectedRole(user.role)
                                  }}
                                >
                                  <Edit2 className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Update User Role</DialogTitle>
                                  <DialogDescription>Change the role for {user.full_name}</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label>Current Role: {user.role?.replace("_", " ")}</Label>
                                    <Select value={selectedRole} onValueChange={setSelectedRole}>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select new role" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="user">User</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="super_admin">Super Admin</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <Button onClick={handleUpdateRole} className="w-full">
                                    Update Role
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-destructive hover:text-destructive"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
