// Utility functions for parsing quiz data from different formats

export interface ParsedQuiz {
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

export function parseCSV(csvText: string): ParsedQuiz[] {
  try {
    const lines = csvText.trim().split("\n")
    const quizzes: ParsedQuiz[] = []
    let currentQuiz: ParsedQuiz | null = null
    let currentQuestion: any = null

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue

      // Header line for new quiz
      if (line.startsWith("QUIZ:")) {
        if (currentQuiz) quizzes.push(currentQuiz)
        const parts = line.substring(5).split("|")
        currentQuiz = {
          lessonId: parts[0]?.trim() || "",
          title: parts[1]?.trim() || "",
          description: parts[2]?.trim() || "",
          questions: [],
        }
      }
      // Question line
      else if (line.startsWith("Q:")) {
        if (currentQuestion && currentQuiz) {
          currentQuiz.questions.push(currentQuestion)
        }
        const parts = line.substring(2).split("|")
        currentQuestion = {
          id: `q${currentQuiz?.questions.length || 0 + 1}`,
          type: (parts[1]?.trim() as "multiple-choice" | "true-false") || "multiple-choice",
          question: parts[0]?.trim() || "",
          options: [],
          correctAnswer: 0,
          explanation: "",
        }
      }
      // Options
      else if (line.startsWith("O:")) {
        const parts = line.substring(2).split("|")
        if (currentQuestion && parts.length >= 2) {
          currentQuestion.options.push(parts[0]?.trim() || "")
          if (parts[1]?.trim() === "CORRECT") {
            currentQuestion.correctAnswer = currentQuestion.options.length - 1
          }
        }
      }
      // Explanation
      else if (line.startsWith("E:")) {
        if (currentQuestion) {
          currentQuestion.explanation = line.substring(2).trim()
        }
      }
    }

    if (currentQuestion && currentQuiz) {
      currentQuiz.questions.push(currentQuestion)
    }
    if (currentQuiz) {
      quizzes.push(currentQuiz)
    }

    return quizzes
  } catch (error) {
    throw new Error("Invalid CSV format")
  }
}

export function parseJSON(jsonText: string): ParsedQuiz[] {
  try {
    const data = JSON.parse(jsonText)
    return Array.isArray(data) ? data : [data]
  } catch (error) {
    throw new Error("Invalid JSON format")
  }
}

export function validateQuiz(quiz: ParsedQuiz): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!quiz.lessonId) errors.push("Missing lesson ID")
  if (!quiz.title) errors.push("Missing quiz title")
  if (!quiz.questions || quiz.questions.length === 0) errors.push("No questions found")

  quiz.questions.forEach((q, idx) => {
    if (!q.question) errors.push(`Question ${idx + 1}: Missing question text`)
    if (!q.options || q.options.length < 2) errors.push(`Question ${idx + 1}: Need at least 2 options`)
    if (q.correctAnswer === undefined || q.correctAnswer >= q.options.length) {
      errors.push(`Question ${idx + 1}: Invalid correct answer index`)
    }
    if (!q.explanation) errors.push(`Question ${idx + 1}: Missing explanation`)
  })

  return { valid: errors.length === 0, errors }
}
