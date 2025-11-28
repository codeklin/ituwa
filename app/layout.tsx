import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import dynamic from "next/dynamic"
import "./globals.css"

// Dynamically import MobileFooterNav with no SSR to prevent hydration mismatches
const MobileFooterNav = dynamic(() => import("@/components/navigation/mobile-footer-nav").then(mod => ({ default: mod.MobileFooterNav })), {
  ssr: false,
  loading: () => null
})

const _geistSans = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ituwa - Learn Web3 for Africa",
  description:
    "The simplest way to learn blockchain, trading, and development. Start your journey from zero to decentralized hero.",
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "any",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/logo.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${_geistSans.className} font-sans bg-background text-foreground`}>
        {/* Page Content */}
        <div className="pb-20 md:pb-0">{children}</div>

        <MobileFooterNav />
      </body>
    </html>
  )
}
