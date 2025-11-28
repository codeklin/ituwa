# iTuwa - Web3 Learning Platform for Africa

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

## 🌍 Overview

iTuwa is a comprehensive Web3 learning platform designed specifically for Africa. It provides the simplest way to learn blockchain technology, cryptocurrency trading, and decentralized application development. Start your journey from zero to decentralized hero!

## ✨ Features

- 📚 **Interactive Courses**: Learn blockchain fundamentals, trading strategies, and Web3 development
- 🎯 **Quizzes & Assessments**: Test your knowledge with interactive quizzes
- 💱 **Swap Simulator**: Practice cryptocurrency trading in a safe environment
- 👤 **User Profiles**: Track your learning progress and achievements
- 📱 **Mobile-First Design**: Optimized for mobile devices with PWA support
- 🔐 **Secure Authentication**: Powered by Supabase authentication
- 🎨 **Modern UI**: Built with Next.js, React, and Tailwind CSS

## 🚀 Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Database & Auth**: Supabase
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics
- **Language**: TypeScript

## 📦 Getting Started

### Prerequisites

- Node.js 18+ or pnpm
- Supabase account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ituwa.git
   cd ituwa
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

See [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md) for detailed database schema and setup instructions.

## 📱 Deployment

### Vercel Deployment

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for comprehensive deployment instructions.

**Quick Deploy:**

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables (see [VERCEL_ENV_LIST.md](./VERCEL_ENV_LIST.md))
4. Deploy!

## 📚 Documentation

- [Environment Setup Guide](./ENV_SETUP.md)
- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)
- [Database Schema](./DATABASE_SCHEMA.md)
- [Environment Variables Reference](./VERCEL_ENV_QUICK_REFERENCE.md)

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Build
pnpm build        # Build for production

# Production
pnpm start        # Start production server

# Linting
pnpm lint         # Run ESLint
```

### Project Structure

```
ituwa/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard
│   ├── auth/              # Authentication pages
│   ├── courses/           # Course pages
│   ├── dashboard/         # User dashboard
│   └── ...
├── components/            # React components
│   ├── navigation/        # Navigation components
│   ├── ui/               # UI components (Radix)
│   └── ...
├── lib/                   # Utility functions
│   ├── supabase/         # Supabase client
│   ├── utils/            # Helper functions
│   └── constants/        # Constants and configs
├── public/               # Static assets
└── styles/               # Global styles
```

## 🔐 Security

- All sensitive data is protected via `.gitignore`
- Environment variables are never committed
- Supabase Row Level Security (RLS) enabled
- Secure authentication flow

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📧 Contact

For questions or support, please contact the development team.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Backend powered by [Supabase](https://supabase.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ for Africa's Web3 Future**
