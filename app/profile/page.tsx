"use client"

import { useAuth } from "@/lib/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, LogOut } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Please log in to view your profile</p>
          <Link href="/auth/login">
            <Button>Go to Login</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <Button variant="outline" onClick={handleLogout} className="gap-2 bg-transparent">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-foreground mt-4">Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Your profile and account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Full Name</label>
                  <p className="text-lg font-medium text-foreground">{user.fullName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Username</label>
                  <p className="text-lg font-medium text-foreground">@{user.username}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Email</label>
                  <p className="text-lg font-medium text-foreground">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Role</label>
                  <Badge className="capitalize">{user.role.replace("_", " ")}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Lessons Completed</p>
                <p className="text-3xl font-bold text-foreground">0</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Current Streak</p>
                <p className="text-3xl font-bold text-primary">0 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Member Since</p>
                <p className="text-sm font-medium text-foreground">Today</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
