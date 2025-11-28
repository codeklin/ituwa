import { supabase } from "@/lib/supabase/client"
import type { UserRole } from "@/lib/types/database"

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data: userData } = await supabase.from("users").select("*").eq("id", user.id).single()

  return userData
}

export async function getUserRole(): Promise<UserRole | null> {
  const user = await getCurrentUser()
  return user?.role || null
}

export function isAdmin(role: UserRole | null): boolean {
  return role === "admin" || role === "super_admin"
}

export function isSuperAdmin(role: UserRole | null): boolean {
  return role === "super_admin"
}

export async function signOut() {
  return await supabase.auth.signOut()
}
