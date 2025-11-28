import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContinueCard() {
  return (
    <Card className="p-8 border-primary/30 bg-primary/5 hover:shadow-lg transition">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-foreground">Continue Your Learning</h3>
          <p className="text-muted-foreground">
            Lesson 3: Understanding Gas Fees - Learn how transaction costs work on the blockchain
          </p>
          <div className="text-sm text-muted-foreground">Last accessed: 2 hours ago</div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
          Resume Lesson <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  )
}
