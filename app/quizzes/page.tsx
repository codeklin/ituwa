"use client"
import { LESSON_QUIZZES } from "@/lib/constants/quiz-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Clock } from "lucide-react"
import { useScrollToTop } from "@/lib/hooks/use-scroll-to-top"

export default function QuizzesPage() {
  useScrollToTop()

  const quizzes = Object.values(LESSON_QUIZZES)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Available Quizzes</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-2">Test Your Knowledge</h2>
          <p className="text-muted-foreground">
            Choose a quiz below to test your understanding of blockchain and Web3 concepts. Each quiz features carefully
            crafted questions with detailed explanations.
          </p>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz, idx) => (
            <Link
              key={quiz.lessonId}
              href={`/lesson/${quiz.lessonId}`}
              className="group animate-fade-in-up hover:no-underline"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-full p-6 border border-border rounded-lg bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group-hover:bg-card/50">
                {/* Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">Quiz</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {quiz.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{quiz.description}</p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{quiz.questions.length} Questions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{Math.ceil(quiz.questions.length * 1.5)} mins</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mt-6 bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300"
                  size="sm"
                >
                  Start Quiz
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State (shouldn't happen but just in case) */}
        {quizzes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No quizzes available yet.</p>
            <Link href="/courses">
              <Button variant="outline">Browse Courses Instead</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
