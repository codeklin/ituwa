import { Card } from "@/components/ui/card"

export function ProgressCard() {
  const progress = 45

  return (
    <Card className="p-8 bg-card border-border">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your Learning Progress</h2>
          <p className="text-muted-foreground">Keep up the momentum! You're on track with your learning journey.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-foreground">{progress}% Complete</span>
            <span className="text-muted-foreground">Keep going!</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">18</p>
              <p className="text-sm text-muted-foreground">Lessons Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">7</p>
              <p className="text-sm text-muted-foreground">Days Streak</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">12</p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
