"use client"

import { useState, useCallback, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export interface AuthUser {
  id: string
  email: string
  username: string
  role: "user" | "admin" | "super_admin"
  fullName: string
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Fetch user profile from database
  const fetchUserProfile = useCallback(async (userId: string, email: string) => {
    try {
      const { data, error } = await supabase
        .from("users") // Adjust table name if needed (e.g. 'user_profiles')
        .select("*")
        .eq("id", userId)
        .single()

      if (error) {
        console.error("Error fetching user profile:", error)
        // If profile doesn't exist, we might want to create one or just return basic info
        return null
      }

      return {
        id: userId,
        email: email,
        username: data.username || email.split("@")[0],
        role: data.role || "user",
        fullName: data.full_name || data.username || "User",
      } as AuthUser
    } catch (err) {
      console.error("Unexpected error fetching profile:", err)
      return null
    }
  }, [])

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check current session
        const { data: { session } } = await supabase.auth.getSession()

        if (session?.user) {
          const profile = await fetchUserProfile(session.user.id, session.user.email!)
          if (profile) {
            setUser(profile)
          } else {
            // Fallback if no profile found but auth exists
            setUser({
              id: session.user.id,
              email: session.user.email!,
              username: session.user.email!.split("@")[0],
              role: "user",
              fullName: "User"
            })
          }
        }
      } catch (e) {
        console.error("Auth initialization error:", e)
      } finally {
        setIsLoading(false)
      }
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const profile = await fetchUserProfile(session.user.id, session.user.email!)
        if (profile) {
          setUser(profile)
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
        router.push("/auth/login")
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [fetchUserProfile, router])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (data.user) {
        const profile = await fetchUserProfile(data.user.id, data.user.email!)
        if (profile) {
          setUser(profile)
        }
        toast.success("Logged in successfully")
        return profile
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed"
      setError(message)
      toast.error(message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [fetchUserProfile])

  const signup = useCallback(async (email: string, username: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            full_name: username, // Default full name
          }
        }
      })

      if (error) throw error

      if (data.user) {
        // We might need to manually create the profile record here if triggers aren't set up
        // But usually triggers handle this. For now, we assume triggers or subsequent login handles it.
        toast.success("Account created! Please check your email.")
        return data.user
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Signup failed"
      setError(message)
      toast.error(message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      toast.success("Logged out successfully")
    } catch (err) {
      console.error("Logout error:", err)
    }
  }, [])

  return {
    user,
    isLoading,
    error,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin" || user?.role === "super_admin",
    isSuperAdmin: user?.role === "super_admin",
  }
}
