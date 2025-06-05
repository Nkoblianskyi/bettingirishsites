import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { DelayedModal } from "@/components/delayed-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Betting Irish Sites - Smart Betting Starts Here 🇮🇪",
  description:
    "Real offers. Real trust. For Irish punters. Discover the best betting sites in Ireland with bonuses, reviews, and responsible gambling resources.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <DelayedModal />
      </body>
    </html>
  )
}
