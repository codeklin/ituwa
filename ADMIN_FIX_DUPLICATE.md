# Fix Duplicate User Error

## Problem
You received a "duplicate key value" error because the user `gigsdev007@gmail.com` already exists in your `users` table, but the script tried to insert it again.

## Solution
Run this SQL block in the Supabase SQL Editor. It will:
1.  Find the correct Auth ID for the user.
2.  **Delete** any "zombie" profile records that have the wrong ID.
3.  **Update** the existing profile to be a Super Admin.
4.  **Reset** the password to `demo123` to ensure you can log in.

```sql
DO $$
DECLARE
  v_auth_id uuid;
BEGIN
  -- 1. Get the Auth ID from auth.users
  SELECT id INTO v_auth_id FROM auth.users WHERE email = 'gigsdev007@gmail.com';

  -- If the user exists in Auth...
  IF v_auth_id IS NOT NULL THEN
    
    -- 2. Delete any profile with this email but WRONG ID (fixes ID mismatch)
    DELETE FROM users 
    WHERE email = 'gigsdev007@gmail.com' AND id != v_auth_id;

    -- 3. Insert or Update the correct profile
    INSERT INTO users (id, email, username, full_name, role)
    VALUES (v_auth_id, 'gigsdev007@gmail.com', 'gigsdev007', 'Super Admin', 'super_admin')
    ON CONFLICT (id) DO UPDATE
    SET 
      role = 'super_admin',
      username = 'gigsdev007',
      full_name = 'Super Admin';
      
    -- 4. Reset Password to 'demo123'
    UPDATE auth.users
    SET encrypted_password = crypt('demo123', gen_salt('bf'))
    WHERE id = v_auth_id;
    
    RAISE NOTICE 'Fixed Super Admin user: %', v_auth_id;
    
  ELSE
    RAISE NOTICE 'User gigsdev007@gmail.com not found in auth.users. Please create it first.';
  END IF;
END $$;
```

## After Running This
1.  Go back to your app login page.
2.  Login with:
    *   **Email:** `gigsdev007@gmail.com`
    *   **Password:** `demo123`
