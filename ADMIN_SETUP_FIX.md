# Admin User Setup Fix

## Problem
You ran the Supabase sync trigger before creating the admin users. This means the database schema and triggers are in place, but you don't have admin credentials to access the system.

## Solution

Follow these steps to create the admin users in your Supabase database:

---

## Step 1: Access Supabase SQL Editor

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to **SQL Editor** in the left sidebar
4. Click **New Query**

---

## Step 2: Create Admin Users in Auth

Run this SQL to create the admin users in Supabase Auth:

```sql
-- Create Super Admin (gigsdev007@gmail.com)
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'gigsdev007@gmail.com',
  crypt('demo123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{"full_name":"Super Admin"}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);

-- Create Regular Admin (admin@ituwa.com)
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@ituwa.com',
  crypt('admin123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{"full_name":"Admin User"}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);
```

> [!IMPORTANT]
> After running this, you should see a success message. If you get an error about duplicate emails, it means these users already exist in auth.users.

---

## Step 3: Create User Profiles

Now create the corresponding user profiles in the `users` table (or `user_profiles` if that's what your table is called):

### Option A: If your table is called `users`

```sql
-- Insert Super Admin profile
INSERT INTO users (id, email, username, full_name, role, created_at, updated_at)
SELECT 
  id,
  'gigsdev007@gmail.com',
  'gigsdev007',
  'Super Admin',
  'super_admin',
  NOW(),
  NOW()
FROM auth.users 
WHERE email = 'gigsdev007@gmail.com'
ON CONFLICT (id) DO UPDATE 
SET role = 'super_admin', username = 'gigsdev007', full_name = 'Super Admin';

-- Insert Regular Admin profile
INSERT INTO users (id, email, username, full_name, role, created_at, updated_at)
SELECT 
  id,
  'admin@ituwa.com',
  'admin',
  'Admin User',
  'admin',
  NOW(),
  NOW()
FROM auth.users 
WHERE email = 'admin@ituwa.com'
ON CONFLICT (id) DO UPDATE 
SET role = 'admin', username = 'admin', full_name = 'Admin User';
```

### Option B: If your table is called `user_profiles`

```sql
-- Insert Super Admin profile
INSERT INTO user_profiles (id, email, username, full_name, role, created_at, updated_at)
SELECT 
  id,
  'gigsdev007@gmail.com',
  'gigsdev007',
  'Super Admin',
  'super_admin',
  NOW(),
  NOW()
FROM auth.users 
WHERE email = 'gigsdev007@gmail.com'
ON CONFLICT (id) DO UPDATE 
SET role = 'super_admin', username = 'gigsdev007', full_name = 'Super Admin';

-- Insert Regular Admin profile
INSERT INTO user_profiles (id, email, username, full_name, role, created_at, updated_at)
SELECT 
  id,
  'admin@ituwa.com',
  'admin',
  'Admin User',
  'admin',
  NOW(),
  NOW()
FROM auth.users 
WHERE email = 'admin@ituwa.com'
ON CONFLICT (id) DO UPDATE 
SET role = 'admin', username = 'admin', full_name = 'Admin User';
```

---

## Step 4: Verify the Setup

Run this query to verify everything is set up correctly:

```sql
-- Check auth.users
SELECT id, email, email_confirmed_at, created_at 
FROM auth.users 
WHERE email IN ('gigsdev007@gmail.com', 'admin@ituwa.com');

-- Check user profiles (adjust table name if needed)
SELECT id, email, username, role, created_at 
FROM users 
WHERE email IN ('gigsdev007@gmail.com', 'admin@ituwa.com');
```

You should see both users in both tables with matching IDs.

---

## Step 5: Test Login

1. Go to your app's login page
2. Try logging in with:
   - **Super Admin**: `gigsdev007@gmail.com` / `demo123`
   - **Regular Admin**: `admin@ituwa.com` / `admin123`

---

## Troubleshooting

### Error: "duplicate key value violates unique constraint"

This means the user already exists. Instead of INSERT, use UPDATE:

```sql
-- Update existing super admin
UPDATE users 
SET role = 'super_admin', username = 'gigsdev007', full_name = 'Super Admin'
WHERE email = 'gigsdev007@gmail.com';

-- Update existing admin
UPDATE users 
SET role = 'admin', username = 'admin', full_name = 'Admin User'
WHERE email = 'admin@ituwa.com';
```

### Can't find the users table?

Check what tables exist:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_type = 'BASE TABLE';
```

Look for a table like `users`, `user_profiles`, or `profiles`.

### Login still not working?

1. Check if email is confirmed:
   ```sql
   UPDATE auth.users 
   SET email_confirmed_at = NOW() 
   WHERE email IN ('gigsdev007@gmail.com', 'admin@ituwa.com');
   ```

2. Check Row Level Security (RLS) policies - they might be blocking access

---

## Admin Credentials Reference

| Email | Password | Role | Username |
|-------|----------|------|----------|
| gigsdev007@gmail.com | demo123 | super_admin | gigsdev007 |
| admin@ituwa.com | admin123 | admin | admin |

> [!WARNING]
> **Change these passwords in production!** These are development credentials only.

---

## Next Steps

After successfully logging in as admin:

1. ✅ Verify you can access the admin dashboard
2. ✅ Change the default passwords
3. ✅ Set up any additional admin users if needed
4. ✅ Configure Row Level Security policies if needed
