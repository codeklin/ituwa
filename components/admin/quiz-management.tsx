"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Upload, Copy, Trash2, Eye } from "lucide-react"
import { LESSON_QUIZZES } from "@/lib/constants/quiz-data"
import { parseCSV, parseJSON, validateQuiz, type ParsedQuiz } from "@/lib/utils/quiz-parser"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface QuizData {
  lessonId: string
  title: string
  description: string
  questions: Array<{
    id: string
    type: "multiple-choice" | "true-false"
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }>
}

export default function QuizManagement() {
  const [quizzes, setQuizzes] = useState<Record<string, QuizData>>(LESSON_QUIZZES)
  const [uploadInput, setUploadInput] = useState("")
  const [uploadFormat, setUploadFormat] = useState<"json" | "csv" | "paste">("json")
  const [uploadError, setUploadError] = useState("")
  const [uploadSuccess, setUploadSuccess] = useState("")
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null)
  const [editingQuiz, setEditingQuiz] = useState<QuizData | null>(null)

  const handleUpload = () => {
    setUploadError("")
    setUploadSuccess("")

    try {
      let parsedQuizzes: ParsedQuiz[] = []

      if (uploadFormat === "json") {
        parsedQuizzes = parseJSON(uploadInput)
      } else if (uploadFormat === "csv") {
        parsedQuizzes = parseCSV(uploadInput)
      } else {
        // Try to auto-detect format
        try {
          parsedQuizzes = parseJSON(uploadInput)
        } catch {
          parsedQuizzes = parseCSV(uploadInput)
        }
      }

      const newQuizzes = { ...quizzes }
      let addedCount = 0

      for (const quiz of parsedQuizzes) {
        const validation = validateQuiz(quiz)
        if (!validation.valid) {
          throw new Error(`Quiz "${quiz.title}": ${validation.errors.join(", ")}`)
        }
        newQuizzes[quiz.lessonId] = quiz
        addedCount++
      }

      setQuizzes(newQuizzes)
      setUploadInput("")
      setUploadSuccess(`Successfully imported ${addedCount} quiz(zes)!`)

      setTimeout(() => setUploadSuccess(""), 3000)
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "Import failed")
    }
  }

  const handleDownload = (format: "json" | "csv") => {
    let content = ""
    let filename = ""

    if (format === "json") {
      content = JSON.stringify(Object.values(quizzes), null, 2)
      filename = "quizzes.json"
    } else if (format === "csv") {
      const lines: string[] = []
      Object.values(quizzes).forEach((quiz) => {
        lines.push(`QUIZ:${quiz.lessonId}|${quiz.title}|${quiz.description}`)
        quiz.questions.forEach((q) => {
          lines.push(`Q:${q.question}|${q.type}`)
          q.options.forEach((opt, idx) => {
            lines.push(`O:${opt}${idx === q.correctAnswer ? "|CORRECT" : ""}`)
          })
          lines.push(`E:${q.explanation}`)
        })
      })
      content = lines.join("\n")
      filename = "quizzes.csv"
    }

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
  }

  const handleDeleteQuiz = (lessonId: string) => {
    const newQuizzes = { ...quizzes }
    delete newQuizzes[lessonId]
    setQuizzes(newQuizzes)
    if (selectedQuiz === lessonId) setSelectedQuiz(null)
  }

  const handleCopyExample = (format: "json" | "csv") => {
    let example = ""

    if (format === "json") {
      example = JSON.stringify(
        [
          {
            lessonId: "lesson-id",
            title: "Quiz Title",
            description: "Quiz Description",
            questions: [
              {
                id: "q1",
                type: "multiple-choice",
                question: "Question text?",
                options: ["Option A", "Option B", "Option C"],
                correctAnswer: 1,
                explanation: "Explanation of correct answer",
              },
            ],
          },
        ],
        null,
        2,
      )
    } else {
      example = `QUIZ:lesson-id|Quiz Title|Quiz Description
Q:Question text?|multiple-choice
O:Option A
O:Option B|CORRECT
O:Option C
E:Explanation of correct answer`
    }

    navigator.clipboard.writeText(example)
    alert("Example copied to clipboard!")
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-1">Total Quizzes</p>
            <p className="text-3xl font-bold text-primary">{Object.keys(quizzes).length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-1">Total Questions</p>
            <p className="text-3xl font-bold text-secondary">
              {Object.values(quizzes).reduce((sum, q) => sum + q.questions.length, 0)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-1">Avg Questions</p>
            <p className="text-3xl font-bold text-accent">
              {Math.round(
                Object.values(quizzes).reduce((sum, q) => sum + q.questions.length, 0) / Object.keys(quizzes).length ||
                  0,
              )}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Import Quizzes
          </CardTitle>
          <CardDescription>Upload quizzes in JSON, CSV format or paste directly</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={uploadFormat} onValueChange={(v) => setUploadFormat(v as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="json">JSON</TabsTrigger>
              <TabsTrigger value="csv">CSV</TabsTrigger>
              <TabsTrigger value="paste">Paste Text</TabsTrigger>
            </TabsList>

            <TabsContent value="json" className="space-y-4 mt-4">
              <div>
                <Label>JSON Format</Label>
                <Textarea
                  placeholder='[{"lessonId": "...", "title": "...", ...}]'
                  value={uploadInput}
                  onChange={(e) => setUploadInput(e.target.value)}
                  rows={8}
                  className="font-mono text-sm"
                />
                <Button
                  variant="outline"
                  className="mt-2 gap-2 bg-transparent"
                  onClick={() => handleCopyExample("json")}
                >
                  <Copy className="w-4 h-4" />
                  Copy Example
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="csv" className="space-y-4 mt-4">
              <div>
                <Label>CSV Format</Label>
                <Textarea
                  placeholder={`QUIZ:lesson-id|Title|Description
Q:Question?|multiple-choice
O:Option A
O:Option B|CORRECT
E:Explanation`}
                  value={uploadInput}
                  onChange={(e) => setUploadInput(e.target.value)}
                  rows={8}
                  className="font-mono text-sm"
                />
                <Button
                  variant="outline"
                  className="mt-2 gap-2 bg-transparent"
                  onClick={() => handleCopyExample("csv")}
                >
                  <Copy className="w-4 h-4" />
                  Copy Example
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="paste" className="space-y-4 mt-4">
              <div>
                <Label>Paste Content (Auto-detect)</Label>
                <Textarea
                  placeholder="Paste JSON or CSV content here..."
                  value={uploadInput}
                  onChange={(e) => setUploadInput(e.target.value)}
                  rows={8}
                />
              </div>
            </TabsContent>
          </Tabs>

          {uploadError && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{uploadError}</AlertDescription>
            </Alert>
          )}

          {uploadSuccess && (
            <Alert className="mt-4 border-green-200 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-200">
              <AlertDescription>{uploadSuccess}</AlertDescription>
            </Alert>
          )}

          <div className="flex gap-2 mt-6">
            <Button onClick={handleUpload} className="gap-2">
              <Upload className="w-4 h-4" />
              Import Quizzes
            </Button>
            <Button variant="outline" onClick={() => handleDownload("json")} className="gap-2">
              <Download className="w-4 h-4" />
              Export JSON
            </Button>
            <Button variant="outline" onClick={() => handleDownload("csv")} className="gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Existing Quizzes */}
      <Card>
        <CardHeader>
          <CardTitle>Existing Quizzes</CardTitle>
          <CardDescription>Manage and view all uploaded quizzes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(quizzes).length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No quizzes yet. Import some to get started!</p>
            ) : (
              Object.entries(quizzes).map(([lessonId, quiz]) => (
                <div
                  key={lessonId}
                  className="flex items-start justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{quiz.title}</h3>
                    <p className="text-sm text-muted-foreground">{quiz.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Lesson ID: <code className="bg-muted px-2 py-1 rounded">{lessonId}</code>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{quiz.questions.length} questions</p>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{quiz.title}</DialogTitle>
                          <DialogDescription>{quiz.description}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          {quiz.questions.map((q, idx) => (
                            <div key={q.id} className="border-l-4 border-primary pl-4">
                              <p className="font-medium text-sm mb-2">
                                Q{idx + 1}: {q.question}
                              </p>
                              <div className="space-y-1 ml-2">
                                {q.options.map((opt, optIdx) => (
                                  <p
                                    key={optIdx}
                                    className={`text-sm ${
                                      optIdx === q.correctAnswer
                                        ? "text-green-600 font-medium"
                                        : "text-muted-foreground"
                                    }`}
                                  >
                                    {String.fromCharCode(65 + optIdx)}) {opt}
                                    {optIdx === q.correctAnswer && " ✓"}
                                  </p>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground mt-2 italic">{q.explanation}</p>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-destructive"
                      onClick={() => handleDeleteQuiz(lessonId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
