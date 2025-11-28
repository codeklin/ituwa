"use client"

import { useState, useCallback, useEffect } from "react"
import { MOCK_USERS } from "@/lib/constants/mock-users"

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

  // Check if user is logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse stored user:", e)
      }
    }
    setIsLoading(false)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const foundUser = MOCK_USERS.find((u) => u.email === email && u.password === password)
      if (!foundUser) {
        throw new Error("Invalid email or password")
      }
      const authUser: AuthUser = {
        id: foundUser.id,
        email: foundUser.email,
        username: foundUser.username,
        role: foundUser.role,
        fullName: foundUser.fullName,
      }
      setUser(authUser)
      localStorage.setItem("auth_user", JSON.stringify(authUser))
      return authUser
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed"
      setError(message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signup = useCallback(async (email: string, username: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const existingUser = MOCK_USERS.find((u) => u.email === email)
      if (existingUser) {
        throw new Error("Email already exists")
      }
      const newUser: AuthUser = {
        id: String(Date.now()),
        email,
        username,
        role: "user",
        fullName: username,
      }
      setUser(newUser)
      localStorage.setItem("auth_user", JSON.stringify(newUser))
      return newUser
    } catch (err) {
      const message = err instanceof Error ? err.message : "Signup failed"
      setError(message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem("auth_user")
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
