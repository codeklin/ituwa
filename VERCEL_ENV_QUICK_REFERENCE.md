# ⚡ VERCEL ENVIRONMENT VARIABLES - QUICK REFERENCE

## 🎯 Copy-Paste Ready for Vercel Dashboard

### **REQUIRED (Minimum to Deploy)**

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📍 Where to Find Your Supabase Credentials

1. **Go to**: [Supabase Dashboard](https://app.supabase.com)
2. **Select** your project
3. **Navigate to**: Settings → API
4. **Copy**:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 📋 Complete List for Production

| Variable | Required? | Value | Environment |
|----------|-----------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ **YES** | `https://xxxxx.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ **YES** | `eyJhbGci...` (long string) | Production, Preview, Development |
| `NEXT_PUBLIC_APP_URL` | ⚠️ Recommended | `https://yourdomain.vercel.app` | Production only |
| `NEXT_PUBLIC_APP_NAME` | ⚪ Optional | `iTuwa` | All |
| `SUPABASE_SERVICE_ROLE_KEY` | ⚪ Optional* | `eyJhbGci...` (admin key) | Production only |

**Only needed if you have server-side admin operations*

---

## 🚀 How to Add in Vercel (Step-by-Step)

### **During Initial Deployment:**

1. In the import screen, expand **"Environment Variables"**
2. Add each variable:
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: Your actual Supabase URL
   - **Environment**: Select all (Production, Preview, Development)
3. Click **"Add"**
4. Repeat for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **"Deploy"**

### **After Deployment:**

1. Go to: **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**
2. Click **"Add New"**
3. Enter Key, Value, and select Environment
4. Click **"Save"**
5. **Important**: Go to **Deployments** → Click **"..."** → **"Redeploy"** to apply changes

---

## ⚠️ CRITICAL: Post-Deployment Supabase Configuration

After your first deployment, you **MUST** update Supabase:

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Navigate to: **Authentication** → **URL Configuration**
3. Add to **Redirect URLs**:
   ```
   https://your-project.vercel.app/auth/callback
   https://your-project.vercel.app/*
   ```
4. Update **Site URL** to:
   ```
   https://your-project.vercel.app
   ```

**Without this, authentication will NOT work!**

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] App loads without errors
- [ ] Can sign up/login
- [ ] Database operations work
- [ ] No console errors related to Supabase
- [ ] Images and assets load correctly

---

## 🔧 Troubleshooting

**"Failed to fetch" or "Supabase client not initialized"**
- ✅ Check environment variables are set correctly
- ✅ No extra spaces or quotes in values
- ✅ Redeploy after adding variables

**"Invalid redirect URL" during login**
- ✅ Add your Vercel URL to Supabase redirect URLs
- ✅ Format: `https://yourdomain.com/auth/callback`

**Changes not reflecting**
- ✅ Redeploy after changing environment variables
- ✅ Clear browser cache
- ✅ Check you're viewing the latest deployment

---

## 📱 Quick Commands

```bash
# Push to deploy (if auto-deploy is enabled)
git add .
git commit -m "Deploy to production"
git push origin main

# Or use Vercel CLI
npx vercel --prod
```

---

## 🎉 That's It!

With just these 2 required environment variables, your app will be live on Vercel!

**Minimum Required:**
1. `NEXT_PUBLIC_SUPABASE_URL`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Everything else is optional and can be added later as needed.
