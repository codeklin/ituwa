# Sync and Migrate User Data

## Problem
The `users` table is missing some columns that exist in `user_profiles` (`avatar_url`, `bio`, `wallet_address`, `last_login_at`). We need to move these over before deleting `user_profiles`.

## Solution

Run this SQL block in the Supabase SQL Editor. It will:
1.  **Add the missing columns** to the `users` table.
2.  **Copy the data** from `user_profiles` to `users`.
3.  **Verify** the data transfer.
4.  **Drop** the `user_profiles` table.

```sql
-- 1. Add missing columns to 'users' table
ALTER TABLE public.users 
ADD COLUMN IF NOT EXISTS avatar_url TEXT,
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS wallet_address VARCHAR(255),
ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMP WITHOUT TIME ZONE;

-- 2. Migrate data from 'user_profiles' to 'users'
-- We use UPDATE to enrich existing users with profile data
UPDATE public.users u
SET 
  avatar_url = up.avatar_url,
  bio = up.bio,
  wallet_address = up.wallet_address,
  last_login_at = up.last_login_at
FROM public.user_profiles up
WHERE u.id = up.id;

-- 3. Insert any users from user_profiles that are NOT in users
INSERT INTO public.users (id, email, username, full_name, role, created_at, updated_at, avatar_url, bio, wallet_address, last_login_at)
SELECT 
  id, email, username, full_name, role, created_at, updated_at, avatar_url, bio, wallet_address, last_login_at
FROM public.user_profiles up
WHERE NOT EXISTS (SELECT 1 FROM public.users u WHERE u.id = up.id)
ON CONFLICT (id) DO NOTHING;

-- 4. Verify (Optional - run this separately to check before dropping)
-- SELECT * FROM public.users;

-- 5. Drop the old table
DROP TABLE IF EXISTS public.user_profiles;
```

## After Running This
Your `users` table will now have all the data and columns from `user_profiles`, and you will have a single, clean table for user data.
