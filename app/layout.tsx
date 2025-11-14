import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { headers } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const revalidate = 0

export const metadata: Metadata = {
  title: "Casino Bonus Expert DK | bestcasinosdk.com",
  description: "Compare DK-licensed online casinos. Find welcome bonuses, withdrawal information, and certified gaming. 18+. Play responsibly.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.png",
  },
  generator: 'v0.app'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const userAgent = headersList.get("user-agent") || ""
  const isMobileServer = /mobile|android|iphone|ipad|phone/i.test(userAgent)

  return (
    <html lang="en">
      <body className={inter.className} data-mobile={isMobileServer}>
        {children}
      </body>
    </html>
  )
}
