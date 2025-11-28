"use client"

import { useAuth } from "@/lib/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, BookOpen, BarChart3, Settings, HelpCircle } from "lucide-react"
import UserManagement from "@/components/admin/user-management"
import ContentManagement from "@/components/admin/content-management"
import Analytics from "@/components/admin/analytics"
import AdminSettings from "@/components/admin/admin-settings"
import QuizManagement from "@/components/admin/quiz-management"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AdminPage() {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen bg-background">Loading...</div>
  }

  if (!user || (user.role !== "admin" && user.role !== "super_admin")) {
    router.push("/dashboard")
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Mobile: Logo and Back Button Row */}
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">Ⅲ</span>
                </div>
                <span className="font-bold text-lg text-foreground">Ituwa</span>
              </Link>
              <div className="flex items-center gap-2">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden xs:inline">Back to Dashboard</span>
                    <span className="xs:hidden">Back</span>
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
            {/* Mobile: Title and Description Row */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1 text-sm">Manage users, content, and platform settings</p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Ⅲ</span>
              </div>
              <span className="font-bold text-lg text-foreground">Ituwa</span>
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage users, content, and platform settings</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-5 sm:grid-cols-5 overflow-x-auto">
            <TabsTrigger value="users" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <Users className="w-4 h-4" />
              <span className="hidden xs:inline sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <BookOpen className="w-4 h-4" />
              <span className="hidden xs:inline sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger value="quizzes" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden xs:inline sm:inline">Quizzes</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden xs:inline sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <Settings className="w-4 h-4" />
              <span className="hidden xs:inline sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="mt-6">
            <UserManagement />
          </TabsContent>

          <TabsContent value="content" className="mt-6">
            <ContentManagement />
          </TabsContent>

          <TabsContent value="quizzes" className="mt-6">
            <QuizManagement />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <Analytics />
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
