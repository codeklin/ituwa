"use client"

import Link from "next/link"
import { useAuth } from "@/lib/hooks/use-auth"
import { BookOpen, Code2, BarChart3, Settings, Users } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function MobileFooterNav() {
  const { user } = useAuth()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything during SSR to prevent hydration mismatches
  if (!mounted) {
    return null
  }

  if (pathname?.startsWith("/auth") || pathname?.startsWith("/admin") || pathname === "/") {
    return null
  }

  const navItems = [
    {
      icon: BookOpen,
      label: "Courses",
      href: "/courses",
      active: pathname?.includes("/courses") || pathname?.includes("/lesson"),
    },
    { icon: Code2, label: "Sandbox", href: "/sandbox", active: pathname?.includes("/sandbox") },
    { icon: BarChart3, label: "Dashboard", href: "/dashboard", active: pathname === "/dashboard" },
  ]

  if (user?.role === "super_admin" || user?.role === "admin") {
    navItems.push({
      icon: Users,
      label: "Admin",
      href: "/admin",
      active: pathname?.includes("/admin"),
    })
  }

  navItems.push({
    icon: Settings,
    label: "Profile",
    href: "/profile",
    active: pathname?.includes("/profile"),
  })

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t border-border z-40">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link key={item.href} href={item.href}>
              <button
                className={`flex flex-col items-center gap-1 px-4 py-3 transition-colors ${
                  item.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
