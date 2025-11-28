"use client"

import { BookOpen, Code2, Settings, Users, Zap, BarChart3, X, LogOut } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/hooks/use-auth"
import { useRouter } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { logout, user } = useAuth()
  const router = useRouter()

  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/dashboard" },
    { icon: BookOpen, label: "My Courses", href: "/courses" },
    { icon: Code2, label: "Sandbox", href: "/sandbox" },
    { icon: Zap, label: "Simulations", href: "/swap-simulator" },
  ]

  const adminItems =
    user?.role === "super_admin" || user?.role === "admin"
      ? [{ icon: Users, label: "Admin Panel", href: "/admin" }]
      : []

  const handleLogout = () => {
    logout()
    onClose()
    router.push("/")
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-sidebar border-r border-sidebar-border">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-bold text-sm">Ⅲ</span>
            </div>
            <span className="font-bold text-sidebar-foreground">Ituwa</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition text-sm">
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            </Link>
          ))}
          {adminItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition text-sm">
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border space-y-2">
          <Link href="/profile">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition text-sm">
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition text-sm"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border flex flex-col md:hidden">
          <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-bold text-sm">Ⅲ</span>
              </div>
              <span className="font-bold text-sidebar-foreground">Ituwa</span>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-sidebar-accent rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose}>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition text-sm">
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              </Link>
            ))}
            {adminItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose}>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition text-sm">
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-sidebar-border space-y-2">
            <Link href="/profile" onClick={onClose}>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition text-sm">
                <Settings className="w-5 h-5" />
                Settings
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition text-sm"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>
      )}
    </>
  )
}
