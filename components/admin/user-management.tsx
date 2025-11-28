"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Trash2, Edit2 } from "lucide-react"
import { MOCK_REGISTERED_USERS } from "@/lib/constants/mock-users"
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

const ROLE_COLORS = {
  super_admin: "bg-destructive text-destructive-foreground",
  admin: "bg-primary text-primary-foreground",
  user: "bg-secondary text-secondary-foreground",
}

export default function UserManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [users, setUsers] = useState(MOCK_REGISTERED_USERS)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [selectedRole, setSelectedRole] = useState<string>("")

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter((u) => u.id !== id))
  }

  const handleUpdateRole = () => {
    if (selectedUser && selectedRole) {
      setUsers(users.map((u) => (u.id === selectedUser.id ? { ...u, role: selectedRole as any } : u)))
      setSelectedUser(null)
      setSelectedRole("")
    }
  }

  const stats = {
    total: users.length,
    active: users.filter((u) => u.status === "active").length,
    superAdmin: users.filter((u) => u.role === "super_admin").length,
    admin: users.filter((u) => u.role === "admin").length,
    avgScore: Math.round(users.reduce((a, u) => a + u.totalScore, 0) / users.length),
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
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Lessons</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Score</th>
                    <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-muted/50">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-foreground">{user.fullName}</p>
                          <p className="text-xs text-muted-foreground">@{user.username}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-foreground text-sm">{user.email}</td>
                      <td className="py-4 px-4">
                        <Badge className={`${ROLE_COLORS[user.role as keyof typeof ROLE_COLORS]} capitalize`}>
                          {user.role.replace("_", " ")}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-foreground">{user.lessonsCompleted}</td>
                      <td className="py-4 px-4 text-foreground">{user.totalScore}</td>
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
                                <DialogDescription>Change the role for {user.fullName}</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label>Current Role: {user.role.replace("_", " ")}</Label>
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
