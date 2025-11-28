"use client"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/hooks/use-auth"
import { ArrowRight, BookOpen, Code2, TrendingUp, Shield, Rocket, Zap, Brain, Target, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  if (isLoading) {
    return <div className="min-h-screen bg-background" />
  }

  function AnimatedStat({ end, label }: { end: number; label: string }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let start = 0
      const increment = end / 60 // Animate over 60 frames (~1 second at 60fps)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, [end])

    return (
      <div className="text-center animate-scale-in">
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{count}+</div>
        <p className="text-muted-foreground text-sm md:text-base">{label}</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Ituwa Logo"
              width={62}
              height={62}
              className="w-8 h-8 object-contain"
            />

          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-primary transition duration-200">
              Features
            </a>
            <a href="#audience" className="text-muted-foreground hover:text-primary transition duration-200">
              For You
            </a>
            <Link href="/courses" className="text-muted-foreground hover:text-primary transition duration-200">
              Courses
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {user ? (
              <Link href="/dashboard">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-32 px-4 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-primary/5 opacity-30">
            <Rocket className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20 text-accent/5 opacity-20">
            <Code2 className="w-40 h-40" />
          </div>
          <div className="absolute top-1/2 right-1/4 text-secondary/5 opacity-25">
            <Brain className="w-36 h-36" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col gap-6 order-2 md:order-1 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-primary/10 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <Rocket className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary">Master Web3 from Zero to Hero</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-balance text-foreground leading-tight">
                Blockchain Made Simple for Africa
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                Learn Web3, crypto trading, and smart contract development through hands-on practice. No prior
                experience needed. Built by Africans, for Africans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/courses" className="flex-shrink-0 animate-fade-in-up animation-delay-1">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    Start Free Learning <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/quizzes" className="flex-shrink-0 animate-fade-in-up animation-delay-2">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 bg-transparent font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    Take a Quick Quiz
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                {["Lifetime access to all courses", "Learn at your own pace", "Hands-on projects and quizzes"].map(
                  (benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up"
                      style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                    >
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {benefit}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center order-1 md:order-2 animate-float">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl animate-pulse-glow" />
                <img
                  src="/blockchain-technology-interface.jpg"
                  alt="Blockchain Technology"
                  className="w-full h-auto rounded-2xl shadow-2xl relative z-10 hover:shadow-3xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            <AnimatedStat end={10} label="Learning Categories" />
            <AnimatedStat end={60} label="Expert-Crafted Lessons" />
            <AnimatedStat end={100} label="Free & Open" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="w-full py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Learn the Right Way</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured learning with real-world practice, designed by blockchain experts for complete beginners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Multi-Format Content",
                description:
                  "Learn through text, images, and illustrations. Minimal videos linked to external sources for deeper learning.",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Code2,
                title: "Hands-On Practice",
                description:
                  "Code in sandboxes, deploy smart contracts, and simulate DEX trades. Learn by doing in safe testnet environments.",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                icon: TrendingUp,
                title: "Track Progress",
                description:
                  "Complete quizzes, earn badges, and track your learning journey. Stay motivated with achievement milestones.",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div
                  className={`p-8 border border-border rounded-lg ${feature.bgColor} hover:border-primary/30 transition-all duration-300 group cursor-pointer`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="w-full py-16 md:py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-10 text-accent/5 opacity-25">
            <Zap className="w-40 h-40" />
          </div>
          <div className="absolute bottom-1/4 left-20 text-secondary/5 opacity-20">
            <Users className="w-36 h-36" />
          </div>
          <div className="absolute top-1/2 left-1/3 text-primary/5 opacity-30">
            <Target className="w-32 h-32" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">For Everyone in Web3</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a developer, trader, or crypto enthusiast, Ituwa has the perfect learning path for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Developers",
                description:
                  "Build smart contracts in our in-browser sandbox. Deploy to testnets and see your code come to life instantly.",
                borderColor: "border-primary/30",
                bgColor: "bg-primary/5",
                accentColor: "text-primary",
              },
              {
                icon: TrendingUp,
                title: "Traders",
                description:
                  "Master DeFi with our token swap simulator. Practice strategies and understand market dynamics risk-free.",
                borderColor: "border-accent/30",
                bgColor: "bg-accent/5",
                accentColor: "text-accent",
              },
              {
                icon: Shield,
                title: "Crypto Curious",
                description:
                  "Understand blockchain basics, security, and wallets. Build your Web3 literacy from the ground up.",
                borderColor: "border-secondary/30",
                bgColor: "bg-secondary/5",
                accentColor: "text-secondary",
              },
            ].map((audience, idx) => (
              <div
                key={idx}
                className={`p-8 border ${audience.borderColor} ${audience.bgColor} rounded-lg hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up group`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${audience.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-120 transition-transform duration-300`}
                  >
                    <audience.icon className={`w-6 h-6 ${audience.accentColor}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-foreground">{audience.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full py-16 md:py-24 px-4 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trusted by Learners Across Africa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Amara K.",
                role: "Developer from Lagos",
                quote: "Ituwa made blockchain concepts click for me. The hands-on approach is game-changing.",
                avatar: "🚀",
              },
              {
                name: "Kwesi O.",
                role: "Trader from Accra",
                quote:
                  "I went from zero to deploying contracts in weeks. Highly recommended for anyone curious about crypto.",
                avatar: "💡",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-lg hover:shadow-lg hover:border-primary/20 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="w-full py-16 md:py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Web3 Journey?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-balance max-w-2xl mx-auto">
            Join thousands of learners building their blockchain future, completely free. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="flex-shrink-0 animate-fade-in-up animation-delay-1">
              <Button
                size="lg"
                variant="secondary"
                className="bg-card text-primary hover:bg-muted font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Start Learning Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/auth/login" className="flex-shrink-0 animate-fade-in-up animation-delay-2">
              <Button
                size="lg"
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Ituwa Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <span className="font-bold text-foreground">Ituwa</span>
              </div>
              <p className="text-sm text-muted-foreground">Web3 learning platform built for Africa</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-foreground transition">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-foreground transition">
                    Learning Paths
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Ituwa. Built for learners across Africa. | Made with ❤️ for Web3 education
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
