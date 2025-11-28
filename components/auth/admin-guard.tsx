"use client"

import type React from "react"

import ProtectedRoute from "./protected-route"

interface AdminGuardProps {
  children: React.ReactNode
  superAdminOnly?: boolean
}

export default function AdminGuard({ children, superAdminOnly = false }: AdminGuardProps) {
  const requiredRole = superAdminOnly ? "super_admin" : (["admin", "super_admin"] as const)

  return <ProtectedRoute requiredRole={requiredRole}>{children}</ProtectedRoute>
}
