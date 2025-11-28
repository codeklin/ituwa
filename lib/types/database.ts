export type UserRole = "user" | "admin" | "super_admin"

export interface User {
  id: string
  email: string
  username: string
  role: UserRole
  full_name: string
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  color: string
  order: number
  created_at: string
}

export interface Course {
  id: string
  category_id: string
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  duration_minutes: number
  lessons_count: number
  created_at: string
}

export interface Lesson {
  id: string
  course_id: string
  title: string
  description: string
  content_html: string
  video_url: string | null
  order: number
  duration_minutes: number
  created_at: string
}

export interface UserProgress {
  id: string
  user_id: string
  lesson_id: string
  completed: boolean
  progress_percentage: number
  completed_at: string | null
  created_at: string
}

export interface Quiz {
  id: string
  lesson_id: string
  title: string
  questions: QuizQuestion[]
  passing_score: number
  created_at: string
}

export interface QuizQuestion {
  id: string
  question_text: string
  options: string[]
  correct_answer_index: number
  explanation: string
}
