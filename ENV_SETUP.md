# Environment Variables Setup Guide

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Update the values in `.env.local` with your actual credentials**

3. **Never commit `.env.local` to Git** - it's already in `.gitignore`

## Required Variables (Minimum Setup)

For the app to work, you **must** configure these:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Where to find Supabase credentials:

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (only if needed for admin operations)

## Optional Variables

Configure these based on your needs:

- **Payment Integration**: Stripe or Paystack keys
- **Email Service**: SendGrid, Mailgun, etc.
- **Analytics**: Google Analytics, Vercel Analytics
- **Storage**: AWS S3, Cloudinary
- **Social Auth**: Google, Facebook OAuth credentials

## Important Security Notes

⚠️ **NEVER expose these to the browser:**
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `JWT_SECRET`
- Any `*_SECRET` or `*_SECRET_KEY` variables

✅ **Safe to expose (NEXT_PUBLIC_* prefix):**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_APP_URL`

## Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Don't upload `.env.local`**
2. Set environment variables in your hosting platform's dashboard
3. Use production credentials (not test/development keys)

### Vercel Deployment:
- Go to Project Settings → Environment Variables
- Add each variable from `.env.example`
- Set appropriate environment (Production, Preview, Development)

## Troubleshooting

**App not connecting to Supabase?**
- Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set correctly
- Restart your development server after changing `.env.local`

**Environment variables not updating?**
- Restart the Next.js dev server (`npm run dev`)
- Clear `.next` folder: `rm -rf .next` (or `rmdir /s .next` on Windows)

## File Structure

```
.env.example          # Template file (committed to Git)
.env.local           # Your local config (NOT committed - in .gitignore)
.env.development     # Development-specific (optional)
.env.production      # Production-specific (optional)
```

## Generating Secrets

For `JWT_SECRET` and `SESSION_SECRET`, generate strong random strings:

**Using OpenSSL:**
```bash
openssl rand -base64 32
```

**Using Node.js:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Online Generator:**
- [Random.org](https://www.random.org/strings/)
- [1Password Generator](https://1password.com/password-generator/)
