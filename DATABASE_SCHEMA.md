# Ituwa Database Schema

This document outlines the database schema for the Ituwa Web3 learning platform using Supabase.

## Tables

### users
Stores user account information and authentication data.

\`\`\`sql
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  avatar_url TEXT,
  role VARCHAR(50) DEFAULT 'user' CHECK (role IN ('user', 'admin', 'super_admin')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own data" 
ON users FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can update their own data" 
ON users FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Super admins can view all users" 
ON users FOR SELECT 
USING (
  (SELECT role FROM users WHERE id = auth.uid()) = 'super_admin'
);
\`\`\`

### categories
Stores learning categories (Blockchain Basics, Crypto Fundamentals, etc.)

\`\`\`sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(100),
  color VARCHAR(50),
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories" 
ON categories FOR SELECT 
USING (true);
\`\`\`

### courses
Stores individual courses within categories.

\`\`\`sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  difficulty VARCHAR(50) CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  duration_minutes INTEGER,
  lessons_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view courses" 
ON courses FOR SELECT 
USING (true);
\`\`\`

### lessons
Stores individual lessons within courses.

\`\`\`sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content_html TEXT,
  video_url TEXT,
  order_index INTEGER,
  duration_minutes INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view lessons" 
ON lessons FOR SELECT 
USING (true);
\`\`\`

### user_progress
Tracks user progress through lessons.

\`\`\`sql
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  progress_percentage INTEGER DEFAULT 0,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progress" 
ON user_progress FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" 
ON user_progress FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress" 
ON user_progress FOR INSERT 
WITH CHECK (auth.uid() = user_id);
\`\`\`

### quizzes
Stores quiz information for lessons.

\`\`\`sql
CREATE TABLE quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  questions JSONB NOT NULL,
  passing_score INTEGER DEFAULT 70,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view quizzes" 
ON quizzes FOR SELECT 
USING (true);
\`\`\`

### quiz_attempts
Stores user quiz attempts and scores.

\`\`\`sql
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
  score INTEGER,
  passed BOOLEAN,
  answers JSONB,
  attempted_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own attempts" 
ON quiz_attempts FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own attempts" 
ON quiz_attempts FOR INSERT 
WITH CHECK (auth.uid() = user_id);
\`\`\`

## Super Admin Setup

The super admin user (`gigsdev007@gmail.com`) should be created directly in Supabase Auth and then have their role set to `super_admin` in the users table.

\`\`\`sql
-- After creating user in Supabase Auth
UPDATE users 
SET role = 'super_admin' 
WHERE email = 'gigsdev007@gmail.com';
\`\`\`

## Indexes

Create indexes for better query performance:

\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_courses_category_id ON courses(category_id);
CREATE INDEX idx_lessons_course_id ON lessons(course_id);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_lesson_id ON user_progress(lesson_id);
CREATE INDEX idx_quiz_attempts_user_id ON quiz_attempts(user_id);
