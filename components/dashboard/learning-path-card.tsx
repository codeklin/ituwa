import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface LearningPathCardProps {
  title: string
  description: string
  progress: number
  lessons: number
  icon: ReactNode
  color: "primary" | "secondary" | "accent"
}

const colorMap = {
  primary: {
    borderClass: "border-primary/30",
    bgClass: "bg-primary/5",
    textClass: "text-primary",
  },
  secondary: {
    borderClass: "border-secondary/30",
    bgClass: "bg-secondary/5",
    textClass: "text-secondary",
  },
  accent: {
    borderClass: "border-accent/30",
    bgClass: "bg-accent/5",
    textClass: "text-accent",
  },
}

export function LearningPathCard({ title, description, progress, lessons, icon, color }: LearningPathCardProps) {
  const colors = colorMap[color]

  return (
    <Card className={`p-6 border ${colors.borderClass} ${colors.bgClass} hover:shadow-lg transition cursor-pointer`}>
      <div className="space-y-4">
        <div className={`w-10 h-10 rounded-lg ${colors.bgClass} flex items-center justify-center ${colors.textClass}`}>
          {icon}
        </div>

        <div>
          <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{progress}% Complete</span>
            <span className="text-muted-foreground">{lessons} lessons</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${colors.textClass === "text-primary" ? "bg-primary" : colors.textClass === "text-secondary" ? "bg-secondary" : "bg-accent"}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
