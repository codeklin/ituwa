"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react"
import type { Quiz } from "@/lib/constants/quiz-data"

interface QuizSectionProps {
  quiz: Quiz
  onComplete: (score: number) => void
}

export function QuizSection({ quiz, onComplete }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const question = quiz.questions[currentQuestion]
  const answered = selectedAnswers[currentQuestion] !== undefined

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = optionIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setShowResults(false)
      setCurrentQuestion(currentQuestion + 1)
    } else {
      finishQuiz()
    }
  }

  const handleShowResult = () => {
    setShowResults(true)
  }

  const finishQuiz = () => {
    const score = calculateScore()
    setQuizCompleted(true)
    onComplete(score)
  }

  const calculateScore = () => {
    const correct = selectedAnswers.filter((answer, idx) => answer === quiz.questions[idx].correctAnswer).length
    return Math.round((correct / quiz.questions.length) * 100)
  }

  if (quizCompleted) {
    const score = calculateScore()
    const passed = score >= 70

    return (
      <Card className="border-primary/20">
        <CardHeader className="bg-primary/5">
          <CardTitle>Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center">
            {passed ? (
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            ) : (
              <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            )}
            <h3 className="text-3xl font-bold text-foreground mb-2">{score}%</h3>
            <p className="text-lg font-semibold text-foreground mb-4">
              {passed ? "Great Job! You passed! 🎉" : "Good effort! Try reviewing and taking the quiz again."}
            </p>
            <p className="text-muted-foreground mb-6">
              You answered{" "}
              {selectedAnswers.filter((answer, idx) => answer === quiz.questions[idx].correctAnswer).length} out of{" "}
              {quiz.questions.length} questions correctly.
            </p>
            <Button onClick={() => window.location.reload()}>Retake Quiz</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const isCorrect = selectedAnswers[currentQuestion] === question.correctAnswer

  return (
    <Card className="border-primary/20">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center justify-between">
          <CardTitle>
            {quiz.title} - Question {currentQuestion + 1}/{quiz.questions.length}
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            Progress: {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%
          </div>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-4">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={showResults}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                  selectedAnswers[currentQuestion] === idx
                    ? showResults
                      ? idx === question.correctAnswer
                        ? "border-green-500 bg-green-50 dark:bg-green-950"
                        : "border-red-500 bg-red-50 dark:bg-red-950"
                      : "border-primary bg-primary/5"
                    : showResults && idx === question.correctAnswer
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === idx
                        ? showResults
                          ? idx === question.correctAnswer
                            ? "border-green-500 bg-green-500"
                            : "border-red-500 bg-red-500"
                          : "border-primary bg-primary"
                        : "border-border"
                    }`}
                  >
                    {selectedAnswers[currentQuestion] === idx && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className="font-medium text-foreground">{option}</span>
                  {showResults && idx === question.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />
                  )}
                  {showResults && selectedAnswers[currentQuestion] === idx && idx !== question.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showResults && (
          <div
            className={`p-4 rounded-lg mb-6 ${isCorrect ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800" : "bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800"}`}
          >
            <p
              className={`font-semibold mb-2 ${isCorrect ? "text-green-900 dark:text-green-100" : "text-orange-900 dark:text-orange-100"}`}
            >
              {isCorrect ? "✓ Correct!" : "✗ Not quite right"}
            </p>
            <p className={isCorrect ? "text-green-800 dark:text-green-200" : "text-orange-800 dark:text-orange-200"}>
              {question.explanation}
            </p>
          </div>
        )}

        <div className="flex gap-3">
          {!showResults ? (
            <Button onClick={handleShowResult} disabled={!answered} className="flex-1">
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNext} className="flex-1">
              {currentQuestion === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
