# Cleanup Database Schema

## Problem
You have two tables for the same purpose: `users` and `user_profiles`. This causes confusion and bugs (e.g., updating one but reading from the other).

## Solution
Since your application code is now wired to use the `users` table, we should remove `user_profiles` to prevent future confusion.

### Step 1: Migrate Data (Optional)
If you have data in `user_profiles` that isn't in `users`, run this to copy it over.
*Note: If you just started, you probably don't need this, but it's safe to run.*

```sql
INSERT INTO users (id, email, username, full_name, role, created_at, updated_at)
SELECT 
  id, 
  email, 
  username, 
  full_name, 
  role, 
  created_at, 
  updated_at
FROM user_profiles
ON CONFLICT (id) DO NOTHING;
```

### Step 2: Drop the Redundant Table
Run this to remove the confusing table.

```sql
DROP TABLE IF EXISTS public.user_profiles;
```

### Step 3: Verify
Run this to check your tables. You should only see `users` now.

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('users', 'user_profiles');
```
