# 🎯 VERCEL DEPLOYMENT - ENVIRONMENT VARIABLES LIST

## ✅ REQUIRED ENVIRONMENT VARIABLES (MUST HAVE)

These are the **ONLY 2 variables** you need to deploy your app to Vercel:

### 1. NEXT_PUBLIC_SUPABASE_URL
- **Value**: Your Supabase project URL
- **Example**: `https://abcdefghijklmnop.supabase.co`
- **Where to find**: Supabase Dashboard → Settings → API → Project URL
- **Environment**: Production, Preview, Development

### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Value**: Your Supabase anonymous/public key
- **Example**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6...` (very long string)
- **Where to find**: Supabase Dashboard → Settings → API → Project API keys → `anon` `public`
- **Environment**: Production, Preview, Development

---

## ⚠️ RECOMMENDED ENVIRONMENT VARIABLES

### 3. NEXT_PUBLIC_APP_URL
- **Value**: Your production URL
- **Example**: `https://ituwa.vercel.app` or `https://yourdomain.com`
- **When to set**: After first deployment (update with your actual Vercel URL)
- **Environment**: Production

### 4. NEXT_PUBLIC_APP_NAME
- **Value**: Your application name
- **Example**: `iTuwa`
- **Environment**: Production, Preview, Development

---

## 🔐 OPTIONAL (Advanced Use Only)

### 5. SUPABASE_SERVICE_ROLE_KEY
- **Value**: Your Supabase service role key (admin key)
- **Where to find**: Supabase Dashboard → Settings → API → `service_role` key
- **⚠️ WARNING**: This bypasses Row Level Security! Only use for server-side admin operations
- **When to use**: Only if you have backend admin operations that need to bypass RLS
- **Environment**: Production only
- **Security**: NEVER expose this to the client!

---

## 📝 COPY-PASTE FORMAT FOR VERCEL

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_APP_NAME=iTuwa
```

---

## 🚀 DEPLOYMENT STEPS

### Step 1: Get Supabase Credentials
1. Go to https://app.supabase.com
2. Select your project
3. Click Settings → API
4. Copy the values for the 2 required variables above

### Step 2: Deploy to Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. In "Environment Variables" section, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click "Deploy"

### Step 3: Update Supabase (CRITICAL!)
After deployment, you MUST add your Vercel URL to Supabase:

1. Go to Supabase Dashboard → Authentication → URL Configuration
2. Add to "Redirect URLs":
   ```
   https://your-project.vercel.app/auth/callback
   https://your-project.vercel.app/*
   ```
3. Update "Site URL" to: `https://your-project.vercel.app`

**Without this step, authentication will fail!**

---

## ✅ VERIFICATION

After deployment, test:
- [ ] App loads without errors
- [ ] Can sign up/login
- [ ] Database queries work
- [ ] Images load correctly
- [ ] No Supabase errors in console

---

## 📚 DOCUMENTATION FILES CREATED

1. **VERCEL_DEPLOYMENT.md** - Complete deployment guide
2. **VERCEL_ENV_QUICK_REFERENCE.md** - Quick reference for environment variables
3. **ENV_SETUP.md** - Local development environment setup
4. **.env.example** - Template for all environment variables
5. **vercel.json** - Vercel configuration with security headers

---

## 🎉 THAT'S IT!

With just 2 environment variables, your app is ready for production on Vercel!

**Minimum to deploy:**
1. `NEXT_PUBLIC_SUPABASE_URL`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Everything else can be added later as needed.
