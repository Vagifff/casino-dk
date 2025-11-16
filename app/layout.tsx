import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CookieConsent from "@/components/CookieConsent"

const inter = Inter({ subsets: ["latin"] })

export const revalidate = 0

export const metadata: Metadata = {
  title: "DK Casino Site (2025) | dkcasino.net",
  description: "Find trusted DK-licensed casino. Detailed reviews, transparent terms, and safer gambling information. 18+. Play responsibly. StopSpillet.dk | ROFUS.dk",
  metadataBase: new URL('https://dkcasino.net'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
