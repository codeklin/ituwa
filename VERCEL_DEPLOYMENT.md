# 🚀 Vercel Production Deployment Guide

## Prerequisites Checklist

Before deploying to Vercel, ensure you have:

- ✅ A [Vercel account](https://vercel.com/signup)
- ✅ Your Supabase project set up and running
- ✅ All environment variables ready (see below)
- ✅ Code pushed to GitHub/GitLab/Bitbucket

---

## 📋 Required Environment Variables for Vercel

### **CRITICAL: Supabase Configuration** (Required)

These are the **ONLY** required environment variables for your app to work:

| Variable Name | Where to Find | Example Value |
|--------------|---------------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard → Settings → API → Project URL | `https://xxxxxxxxxxxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Settings → API → Project API keys → `anon` `public` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

> **⚠️ IMPORTANT**: These must be set in Vercel for your app to connect to Supabase!

---

### **Optional: Application Configuration**

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `NEXT_PUBLIC_APP_URL` | Your production URL | `https://yourdomain.com` |
| `NEXT_PUBLIC_APP_NAME` | Your app name | `iTuwa` |

---

### **Optional: Supabase Service Role** (Only if using admin operations)

| Variable Name | Where to Find | When to Use |
|--------------|---------------|-------------|
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard → Settings → API → `service_role` key | Only if you have server-side admin operations that bypass RLS |

> **🔒 SECURITY WARNING**: This key has admin privileges. Only use it for server-side operations. NEVER expose it to the client!

---

### **Optional: Analytics** (Already included in your app)

Your app already has `@vercel/analytics` installed. It will automatically work on Vercel without any configuration!

---

## 🎯 Step-by-Step Deployment Instructions

### **Step 1: Push Your Code to Git**

```bash
# Initialize git if you haven't already
git init

# Add all files
git add .

# Commit
git commit -m "Prepare for Vercel deployment"

# Add your remote repository
git remote add origin https://github.com/yourusername/ituwa.git

# Push to GitHub
git push -u origin main
```

---

### **Step 2: Import Project to Vercel**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository
4. Vercel will auto-detect it's a Next.js project ✅

---

### **Step 3: Configure Environment Variables**

In the Vercel import screen:

1. **Expand "Environment Variables"** section
2. **Add the following variables:**

#### **Required Variables:**

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

#### **Recommended Variables:**

```
NEXT_PUBLIC_APP_URL=https://yourdomain.vercel.app
NEXT_PUBLIC_APP_NAME=iTuwa
```

3. **Select Environment**: Choose **"Production"**, **"Preview"**, and **"Development"** (or just Production for now)

---

### **Step 4: Deploy**

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-3 minutes)
3. Your app will be live at `https://your-project.vercel.app` 🎉

---

## 🔧 Post-Deployment Configuration

### **1. Update Supabase Redirect URLs**

After deployment, you need to add your Vercel URL to Supabase's allowed redirect URLs:

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Navigate to **Authentication** → **URL Configuration**
3. Add these URLs to **Redirect URLs**:
   ```
   https://your-project.vercel.app/auth/callback
   https://your-project.vercel.app/*
   ```
4. Add your domain to **Site URL**:
   ```
   https://your-project.vercel.app
   ```

### **2. Configure Custom Domain (Optional)**

1. In Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain (e.g., `ituwa.com`)
3. Follow Vercel's DNS configuration instructions
4. Update `NEXT_PUBLIC_APP_URL` to your custom domain

---

## 📝 Environment Variables Quick Copy

For easy copy-paste into Vercel, here's the minimal required setup:

```env
# REQUIRED - Get from Supabase Dashboard → Settings → API
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# RECOMMENDED - Update after deployment
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_APP_NAME=iTuwa
```

---

## 🔍 How to Add Environment Variables After Deployment

If you need to add or update environment variables later:

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Environment Variables**
3. Click **"Add New"**
4. Enter:
   - **Key**: Variable name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value**: Your actual value
   - **Environment**: Select Production, Preview, and/or Development
5. Click **"Save"**
6. **Redeploy** your app for changes to take effect:
   - Go to **Deployments** tab
   - Click **"..."** on the latest deployment
   - Click **"Redeploy"**

---

## ✅ Deployment Checklist

Before going live, verify:

- [ ] All required environment variables are set in Vercel
- [ ] Supabase redirect URLs include your Vercel domain
- [ ] App builds successfully without errors
- [ ] You can access your deployed site
- [ ] Authentication works (login/signup)
- [ ] Database operations work correctly
- [ ] Images and assets load properly

---

## 🐛 Troubleshooting

### **Build Fails with TypeScript Errors**

Your `next.config.mjs` already has `ignoreBuildErrors: true`, so this shouldn't be an issue. If it still fails:

```javascript
// next.config.mjs
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
```

### **"Supabase client not initialized" Error**

- Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set correctly
- Verify the values don't have extra spaces or quotes
- Redeploy after adding environment variables

### **Authentication Redirects Fail**

- Make sure you've added your Vercel URL to Supabase's allowed redirect URLs
- Check that the redirect URL format is correct: `https://yourdomain.com/auth/callback`

### **Images Not Loading**

Your config already has `images: { unoptimized: true }`, which is correct for Vercel. If images still don't load:
- Check that image paths are correct
- Verify images are in the `public` folder
- Check browser console for errors

---

## 🎉 Success!

Once deployed, your app will be live at:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain** (if configured): `https://yourdomain.com`

### **Automatic Deployments**

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or pull requests

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase with Vercel](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Environment Variables in Vercel](https://vercel.com/docs/concepts/projects/environment-variables)

---

## 🔐 Security Best Practices

1. **Never commit `.env.local`** to Git (already in `.gitignore` ✅)
2. **Use different Supabase projects** for development and production
3. **Rotate keys regularly** if they're ever exposed
4. **Use Supabase RLS** (Row Level Security) to protect your data
5. **Monitor your Vercel logs** for suspicious activity

---

## 💡 Pro Tips

1. **Enable Vercel Analytics**: Already installed via `@vercel/analytics` package ✅
2. **Set up preview deployments**: Test changes before merging to production
3. **Use environment-specific variables**: Different values for Production vs Preview
4. **Monitor build times**: Optimize if builds take too long
5. **Set up custom domain**: Makes your app look more professional

---

Need help? Check the [Vercel Support](https://vercel.com/support) or [Supabase Discord](https://discord.supabase.com/)!
