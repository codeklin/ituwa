"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Analytics() {
  const stats = [
    { label: "Total Enrollments", value: "284", trend: "+12%" },
    { label: "Avg Completion Rate", value: "68%", trend: "+5%" },
    { label: "Active Learners", value: "156", trend: "+8%" },
    { label: "Total Lessons Completed", value: "1,240", trend: "+23%" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-primary">{stat.trend}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
