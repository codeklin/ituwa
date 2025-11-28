"use client"

import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LEARNING_CATEGORIES } from "@/lib/constants/learning-content"
import { Blocks, Coins, TrendingUp, Globe, Code, Shield } from "lucide-react"
import { useScrollToTop } from "@/lib/hooks/use-scroll-to-top"

const ICON_MAP: Record<string, React.ReactNode> = {
  Blocks: <Blocks className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
}

const COLOR_CLASSES = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
}

export default function CoursesPage() {
  useScrollToTop()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Learning Courses</h1>
              <p className="text-muted-foreground mt-1">Master blockchain, crypto, and Web3 fundamentals</p>
            </div>
            <Link href="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_CATEGORIES.map((category) => (
            <Card key={category.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${COLOR_CLASSES[category.color as keyof typeof COLOR_CLASSES]}`}>
                    {ICON_MAP[category.icon]}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {category.lessons.length} lessons
                  </span>
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/courses/${category.id}`} className="block w-full">
                  <Button className="w-full">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
