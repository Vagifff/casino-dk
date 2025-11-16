"use client"

import type { Gametype } from "@/lib/mockDev"

interface HeroProps {
  gametype: Gametype
}

export default function Hero({ gametype }: HeroProps) {
  const badges = [
    { icon: "🛡️", text: "Spillemyndigheden-licensed operators only" },
    { icon: "📋", text: "Transparent key terms on every offer" },
    { icon: "✅", text: "Standard DK KYC applies" },
    { icon: "⚡", text: "Fast withdrawals where available (varies by operator)" },
  ]

  return (
    <>
      <section className="md:hidden bg-gradient-to-b from-[#0B0C10] to-[#0B0C10] pt-2 pb-0.5 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-xl font-bold mb-1.5 text-[#E0E0E0] leading-tight">{gametype.headText}</h1>
          <p className="text-[10px] text-[#A0A0A0] mb-0.5 leading-relaxed max-w-md mx-auto">{gametype.headParagraph}</p>

          <div className="overflow-x-auto pb-0.5 -mx-4 px-3 mt-0.5 scrollbar-hide">
            <div className="flex gap-1 min-w-max">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-0.5 bg-[#0B0C10] border border-[#3B3E47] rounded-full px-1.5 py-0.5 whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-[9px] flex-shrink-0">{badge.icon}</span>
                  <span className="text-[8px] text-[#A0A0A0] leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:block bg-gradient-to-b from-[#0B0C10] to-[#0B0C10] pt-8 pb-4 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-[#E0E0E0] leading-tight">{gametype.headText}</h1>
          <p className="text-base md:text-lg lg:text-xl text-[#A0A0A0] mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">{gametype.headParagraph}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 bg-[#0B0C10] border border-[#3B3E47] rounded-lg p-4 hover:border-[#3B3E47] transition-colors"
              >
                <span className="text-3xl">{badge.icon}</span>
                <span className="text-sm text-[#A0A0A0] text-center">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
