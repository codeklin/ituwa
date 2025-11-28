"use client"

import type React from "react"
import { use } from "react"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LEARNING_CATEGORIES } from "@/lib/constants/learning-content"
import { Clock, CheckCircle2, Play, ArrowLeft } from "lucide-react"
import { Blocks, Coins, TrendingUp, Globe, Code, Shield } from "lucide-react"
import { notFound } from "next/navigation"

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

export default function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = use(params)
  const category = LEARNING_CATEGORIES.find((c) => c.id === categoryId)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/courses" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          <div className="flex items-start gap-4">
            <div className={`p-4 rounded-lg ${COLOR_CLASSES[category.color as keyof typeof COLOR_CLASSES]}`}>
              {ICON_MAP[category.icon]}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">{category.name}</h1>
              <p className="text-muted-foreground mt-2">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {category.lessons.map((lesson, index) => (
            <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center font-semibold text-muted-foreground">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{lesson.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{lesson.description}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {lesson.duration_minutes} min
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4" />
                          Beginner
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
