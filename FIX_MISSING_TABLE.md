# Fix Missing Table Error

## Problem
The error `PGRST205: Could not find the table 'public.users'` means the `users` table does not exist in your database, or the API cannot see it.

## Solution

Run this SQL block in the Supabase SQL Editor. It will:
1.  **Create the `users` table** if it's missing.
2.  **Enable Row Level Security (RLS)**.
3.  **Add Policies** so the API can read/write to it.
4.  **Insert the Admin User** correctly.

```sql
-- 1. Create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  username VARCHAR(100),
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user' CHECK (role IN ('user', 'admin', 'super_admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- 3. Create Policies (Drop existing ones first to avoid errors)
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.users;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.users;

-- Allow public read access (needed for login checks sometimes, or restrict to authenticated)
CREATE POLICY "Public profiles are viewable by everyone" 
ON public.users FOR SELECT 
USING (true);

-- Allow users to insert their own profile
CREATE POLICY "Users can insert their own profile" 
ON public.users FOR INSERT 
WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile" 
ON public.users FOR UPDATE 
USING (auth.uid() = id);

-- 4. Insert/Update the Super Admin
INSERT INTO public.users (id, email, username, full_name, role)
SELECT 
  id,
  'gigsdev007@gmail.com',
  'gigsdev007',
  'Super Admin',
  'super_admin'
FROM auth.users 
WHERE email = 'gigsdev007@gmail.com'
ON CONFLICT (id) DO UPDATE 
SET 
  role = 'super_admin',
  username = 'gigsdev007',
  full_name = 'Super Admin';

-- 5. Grant permissions to the API role
GRANT SELECT, INSERT, UPDATE, DELETE ON public.users TO anon, authenticated, service_role;
```

## Important Last Step
After running this SQL:
1.  Go to **Settings > API** in Supabase.
2.  Click **"Reload Schema Cache"** (this is critical for the `PGRST205` error).
