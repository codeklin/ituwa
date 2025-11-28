"use client"

import { useAuth } from "@/lib/hooks/use-auth"
import { useRouter } from "next/navigation"
import { BarChart3, BookOpen, Code2, LogOut, Menu, Settings, Users, Zap } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Sidebar } from "@/components/dashboard/sidebar"
import { ProgressCard } from "@/components/dashboard/progress-card"
import { ContinueCard } from "@/components/dashboard/continue-card"
import { LearningPathCard } from "@/components/dashboard/learning-path-card"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { Button } from "@/components/ui/button"
import { useScrollToTop } from "@/lib/hooks/use-scroll-to-top"

export default function DashboardPage() {
  useScrollToTop()
  const { user, logout, isLoading } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen bg-background">Loading...</div>
  }

  if (!user) {
    router.push("/auth/login")
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card border-b border-border px-4 py-4 flex items-center justify-between sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1 md:flex-none">
            <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link href="/profile">
              <Button variant="ghost" size="icon" title="Profile">
                <Settings className="w-5 h-5 text-muted-foreground" />
              </Button>
            </Link>
            {user.role === "super_admin" && (
              <Link href="/admin">
                <Button variant="ghost" size="icon" title="Admin Panel">
                  <Users className="w-5 h-5 text-muted-foreground" />
                </Button>
              </Link>
            )}
            <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout">
              <LogOut className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto">
          <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            {/* Progress Overview */}
            <ProgressCard />

            {/* Continue Learning */}
            <ContinueCard />

            {/* Learning Paths */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-foreground">My Learning Paths</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LearningPathCard
                  title="Developer Path"
                  description="Master smart contract development with Solidity"
                  progress={45}
                  lessons={12}
                  icon={<Code2 className="w-5 h-5" />}
                  color="primary"
                />
                <LearningPathCard
                  title="Trader Path"
                  description="Learn DeFi strategies and token trading"
                  progress={28}
                  lessons={10}
                  icon={<BarChart3 className="w-5 h-5" />}
                  color="secondary"
                />
                <LearningPathCard
                  title="Beginner Path"
                  description="Blockchain fundamentals and Web3 basics"
                  progress={72}
                  lessons={8}
                  icon={<BookOpen className="w-5 h-5" />}
                  color="accent"
                />
              </div>
            </section>

            {/* Quick Links */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/courses">
                  <Card className="p-6 text-center hover:shadow-lg transition cursor-pointer border-primary/30 bg-primary/5">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="font-semibold text-sm text-foreground">Courses</p>
                  </Card>
                </Link>
                <Link href="/sandbox">
                  <Card className="p-6 text-center hover:shadow-lg transition cursor-pointer border-secondary/30 bg-secondary/5">
                    <Code2 className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <p className="font-semibold text-sm text-foreground">Sandbox</p>
                  </Card>
                </Link>
                <Link href="/swap-simulator">
                  <Card className="p-6 text-center hover:shadow-lg transition cursor-pointer border-accent/30 bg-accent/5">
                    <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-semibold text-sm text-foreground">Swap Simulator</p>
                  </Card>
                </Link>
                <Card className="p-6 text-center hover:shadow-lg transition cursor-pointer border-muted/30 bg-muted/5">
                  <BarChart3 className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="font-semibold text-sm text-foreground">Badges</p>
                </Card>
              </div>
            </section>

            {/* Community Activity Feed */}
            <ActivityFeed />
          </main>
        </div>
      </div>
    </div>
  )
}
