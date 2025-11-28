import { Card } from "@/components/ui/card"
import { MessageSquare, Award, BookOpen } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "post",
      user: "Sarah M.",
      action: "posted in the community",
      content: "Just deployed my first contract! Thanks to everyone for the help.",
      timestamp: "2 hours ago",
      icon: MessageSquare,
      color: "text-primary",
    },
    {
      id: 2,
      type: "badge",
      user: "Mentor Alex",
      action: "announced",
      content: "New workshop: Advanced DeFi Strategies - This Friday at 6 PM UTC",
      timestamp: "4 hours ago",
      icon: Award,
      color: "text-secondary",
    },
    {
      id: 3,
      type: "lesson",
      user: "Platform Update",
      action: "new content",
      content: "Module 5: Security Best Practices is now available for all learners.",
      timestamp: "1 day ago",
      icon: BookOpen,
      color: "text-accent",
    },
  ]

  return (
    <section className="pb-8">
      <h3 className="text-xl font-bold mb-6 text-foreground">Latest Community Activity</h3>
      <Card className="p-6 border-border">
        <div className="space-y-6 max-h-96 overflow-y-auto">
          {activities.map((activity) => {
            const IconComponent = activity.icon
            return (
              <div key={activity.id} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center ${activity.color}`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    {activity.user} {activity.action}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{activity.content}</p>
                  <p className="text-xs text-muted-foreground mt-2">{activity.timestamp}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </section>
  )
}
