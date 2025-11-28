import type React from "react"
import AdminGuard from "@/components/auth/admin-guard"

export const metadata = {
  title: "Admin Dashboard - Ituwa",
  description: "Platform administration and management",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminGuard>{children}</AdminGuard>
}
