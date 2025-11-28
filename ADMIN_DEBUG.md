# Debugging Admin User Creation

## Problem
The query `SELECT ... WHERE role = 'super_admin'` returned "Success" but no rows. This means either:
1. The user wasn't created in `auth.users`
2. The profile wasn't created in `user_profiles`
3. The role is not set to 'super_admin' (it might be 'user')

## Diagnostic Steps

Run these queries one by one to find where the data is missing.

### 1. Check if the user exists in Auth (The Source of Truth)
```sql
SELECT id, email, created_at 
FROM auth.users 
WHERE email = 'gigsdev007@gmail.com';
```
> **If this returns no rows:** The user was never created. Go back to Step 2 of the previous guide and run the `INSERT INTO auth.users` command.

### 2. Check if a profile exists (ignoring the role)
```sql
SELECT id, email, role 
FROM user_profiles 
WHERE email = 'gigsdev007@gmail.com';
```
> **If this returns a row but role is 'user':** The profile exists but has the wrong role. Run the "Force Update" command below.
> **If this returns no rows:** The profile is missing. Run the "Force Insert" command below.

---

## Fix Commands

### Force Update (If profile exists but has wrong role)
```sql
UPDATE user_profiles
SET role = 'super_admin', username = 'gigsdev007', full_name = 'Super Admin'
WHERE email = 'gigsdev007@gmail.com';
```

### Force Insert (If profile is completely missing)
```sql
INSERT INTO user_profiles (id, email, username, full_name, role)
SELECT 
  id,
  'gigsdev007@gmail.com',
  'gigsdev007',
  'Super Admin',
  'super_admin'
FROM auth.users 
WHERE email = 'gigsdev007@gmail.com'
ON CONFLICT (id) DO UPDATE 
SET role = 'super_admin';
```

### 3. Check RLS (Row Level Security)
If you still see nothing, RLS might be hiding the data. Try running this to see if you can see count of users:
```sql
SELECT count(*) FROM user_profiles;
```
