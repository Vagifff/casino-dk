"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useGclid } from "@/hooks/use-gclid"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const gclid = useGclid()

  const getLinkWithGclid = (href: string) => {
    if (!gclid || typeof window === 'undefined') return href
    try {
      const url = new URL(href, window.location.origin)
      url.searchParams.set('gclid', gclid)
      return url.pathname + url.search
    } catch {
      return href + (href.includes('?') ? '&' : '?') + `gclid=${gclid}`
    }
  }

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-28 md:bottom-32 left-0 right-0 z-[100] bg-[#0B0C10] border border-[#3B3E47] rounded-lg shadow-lg mx-4 md:mx-6">
      <div className="container mx-auto px-3 py-3 md:px-4 md:py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs md:text-sm text-[#F5F6F7] leading-relaxed">
              We use cookies and similar technologies to improve your experience, analyze site traffic, and for affiliate tracking. 
              By clicking "Accept", you consent to our use of cookies. You can manage preferences in your browser settings.{" "}
              <Link href={getLinkWithGclid("/privacy")} className="text-[#18FFFF] hover:underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-2 md:gap-3 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={handleReject}
              className="px-3 md:px-4 py-2 text-xs md:text-sm text-[#F5F6F7] hover:text-[#18FFFF] transition-colors flex-1 md:flex-initial"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-3 md:px-4 py-2 text-xs md:text-sm bg-[#FFD93D] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#FFA500] transition-colors flex-1 md:flex-initial"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

