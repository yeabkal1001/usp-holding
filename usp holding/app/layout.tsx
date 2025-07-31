import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { PageTransition } from "@/components/page-transition"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "USP Holdings - Building Tomorrow's Infrastructure Today",
  description:
    "Premier multi-industry corporation with 25+ years of excellence in real estate development, construction, and property management. Trusted by Fortune 500 companies worldwide.",
  keywords:
    "real estate development, construction, property management, USP Holdings, Washington DC, Ethiopia, airport operations",
  authors: [{ name: "USP Holdings" }],
  openGraph: {
    title: "USP Holdings - Building Tomorrow's Infrastructure Today",
    description: "25+ years of excellence in real estate development, construction, and property management.",
    url: "https://uspholdings.com",
    siteName: "USP Holdings",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "USP Holdings - Premium Development Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "USP Holdings - Building Tomorrow's Infrastructure Today",
    description: "25+ years of excellence in real estate development, construction, and property management.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LoadingScreen />
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  )
}
