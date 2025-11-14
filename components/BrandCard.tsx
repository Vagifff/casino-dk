import type { Partner } from "@/lib/mockDev"
import { calculateRating, calculateStars } from "@/lib/calculate-rating"
import Image from "next/image"
import KeyTerms from "./KeyTerms"

interface BrandCardProps {
  partner: Partner
  gclid: string
  isMobile: boolean
  showPopularBadge?: boolean
}

export default function BrandCard({ partner, gclid, isMobile, showPopularBadge }: BrandCardProps) {
  const rating = calculateRating(partner.order)
  const stars = calculateStars(partner.order)
  const votes = Math.floor((partner.id * 2341 + 10000) % 30000) + 10000

  const partnerUrl = gclid ? `${partner.partnerUrl}${gclid}` : partner.partnerUrl

  const fullStars = Math.floor(stars)
  const hasHalfStar = stars % 1 !== 0
  const emptyStars = 5 - Math.ceil(stars)
  
  const StarIcon = ({ filled = false, half = false, size = "lg", index = 0 }: { filled?: boolean; half?: boolean; size?: "sm" | "lg" | "xl"; index?: number }) => {
    const sizeClass = size === "sm" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-5 h-5"
    const uniqueId = `star-${partner.id}-${index}`
    
    if (half) {
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id={`clip-${uniqueId}`}>
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
          </defs>
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FFD93D"
            clipPath={`url(#clip-${uniqueId})`}
            stroke="#FFD93D"
            strokeWidth="1"
          />
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="none"
            stroke="#FFD93D"
            strokeWidth="1"
          />
        </svg>
      )
    }
    return (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill={filled ? "#FFD93D" : "none"}
          stroke="#FFD93D"
          strokeWidth="1"
        />
      </svg>
    )
  }

  if (isMobile) {
    return (
      <a
        href={partnerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-br from-[#1a1d26] to-[#16181F] border-2 border-[#FFD93D]/30 rounded-xl overflow-hidden hover:border-[#FFD93D] hover:shadow-[0_0_25px_rgba(255,217,61,0.4)] transition-all transform hover:scale-[1.02]"
      >
        {showPopularBadge && (
          <div className="bg-gradient-to-r from-[#FFD93D] to-[#FFA500] text-[#0B0C10] text-[10px] font-bold px-3 py-1 inline-block rounded-b-lg shadow-lg">⭐ MOST POPULAR</div>
        )}

        <div className="p-2">
          <div className="flex items-center justify-center gap-6 mb-2">
                <div className="flex-shrink-0">
                  <div className="relative w-44 h-28">
                    <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain brightness-110 contrast-110" />
                  </div>
                </div>

            <div className="flex flex-col items-center justify-center flex-shrink-0">
              <div className="text-xl font-bold text-[#FFD93D] mb-0.5 leading-none">{rating}</div>
              <div className="flex gap-0.5 mb-0.5 items-center">
                {[...Array(fullStars)].map((_, i) => (
                  <StarIcon key={`full-${i}`} filled={true} size="sm" index={i} />
                ))}
                {hasHalfStar && <StarIcon key="half" half={true} size="sm" index={fullStars} />}
                {[...Array(emptyStars)].map((_, i) => (
                  <StarIcon key={`empty-${i}`} filled={false} size="sm" index={fullStars + (hasHalfStar ? 1 : 0) + i} />
                ))}
              </div>
              <div className="text-[#F5F6F7] text-[9px] whitespace-nowrap">{votes.toLocaleString()} Votes</div>
            </div>
          </div>
        </div>
            {partner.operatorName && (
              <div className="px-2 pt-1 pb-1 border-t border-[#3B3E47]/50">
                <div className="text-[8px] text-[#8B8E97] leading-relaxed">
                  <strong className="text-[#F5F6F7]">{partner.name}</strong> — Operated in Denmark by {partner.operatorName}. Licensed by Spillemyndigheden{partner.licenseCode ? ` (${partner.licenseCode})` : ''}.
                  <br />
                  <span className="text-[#8B8E97]">Source: </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      window.open('https://www.spillemyndigheden.dk', '_blank', 'noopener,noreferrer')
                    }}
                    className="text-[#18FFFF] hover:underline cursor-pointer bg-transparent border-none p-0 text-[8px] inline font-inherit"
                  >
                    Spillemyndigheden
                  </button>
                </div>
              </div>
            )}

        <div className="px-2 pb-2">
          <div className="bg-gradient-to-r from-[#FFD93D] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD93D] text-[#0B0C10] font-bold py-1.5 px-3 rounded-xl text-center transition-all mb-1.5 shadow-lg shadow-[#FFD93D]/30 text-sm">
            GET BONUS ⚡
          </div>
          
          <div className="mt-1 pt-1 border-t border-[#3B3E47]/50">
            <KeyTerms
              keyTerms={partner.keyTerms}
              minDeposit={partner.minDeposit}
              defaultText={
                <>
                  Min dep: {partner.minDeposit || "100 DKK"}. Wagering requirements apply. Max bet limits may apply. Bonus terms vary by offer. Payment method restrictions may apply. Eligibility/geo restrictions apply. See operator site for full terms.{" "}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      window.open('https://www.stopspillet.dk', '_blank', 'noopener,noreferrer')
                    }}
                    className="text-[#18FFFF] hover:underline cursor-pointer bg-transparent border-none p-0 inline font-inherit"
                  >
                    StopSpillet.dk
                  </button>{" "}
                  |{" "}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      window.open('https://www.rofus.dk', '_blank', 'noopener,noreferrer')
                    }}
                    className="text-[#18FFFF] hover:underline cursor-pointer bg-transparent border-none p-0 inline font-inherit"
                  >
                    ROFUS.dk
                  </button>{" "}
                  | T&Cs apply.
                </>
              }
            />
          </div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={partnerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-br from-[#1a1d26] to-[#16181F] border-2 border-[#FFD93D]/30 rounded-xl overflow-hidden hover:border-[#FFD93D] hover:shadow-[0_0_30px_rgba(255,217,61,0.5)] transition-all transform hover:scale-[1.01]"
    >
      {showPopularBadge && (
        <div className="bg-gradient-to-r from-[#FFD93D] to-[#FFA500] text-[#0B0C10] text-xs font-bold px-5 py-1.5 inline-block rounded-b-lg shadow-lg">⭐ MOST POPULAR</div>
      )}

      <div className="p-6 flex items-center gap-4">
            <div className="relative w-60 h-60 flex-shrink-0">
              <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain brightness-110 contrast-110" />
            </div>

        <div className="flex-1 min-w-0">
          {partner.highlights && partner.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {partner.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight.id}
                  className="text-xs bg-[#FFD93D]/10 text-[#18FFFF] px-3 py-1 rounded-full border border-[#18FFFF]/30"
                >
                  {highlight.name}
                </span>
              ))}
            </div>
          )}

          {partner.paymentMethods && partner.paymentMethods.length > 0 && (
            <div className="flex gap-2 items-center">
              {partner.paymentMethods.slice(0, 5).map((method) => (
                <div key={method.id} className="text-xs text-[#3B3E47]">
                  {method.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4 flex-shrink-0">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FFD93D] mb-2">{rating}</div>
            <div className="flex gap-1 mb-2 items-center">
              {[...Array(fullStars)].map((_, i) => (
                <StarIcon key={`full-${i}`} filled={true} size="xl" index={i} />
              ))}
              {hasHalfStar && <StarIcon key="half" half={true} size="xl" index={fullStars} />}
              {[...Array(emptyStars)].map((_, i) => (
                <StarIcon key={`empty-${i}`} filled={false} size="xl" index={fullStars + (hasHalfStar ? 1 : 0) + i} />
              ))}
            </div>
            <div className="text-[#F5F6F7] text-sm">{votes.toLocaleString()} Votes</div>
          </div>

          <div className="w-full">
            <div className="bg-gradient-to-r from-[#FFD93D] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD93D] text-[#0B0C10] font-bold py-4 px-10 rounded-xl text-center transition-all mb-2 whitespace-nowrap shadow-lg shadow-[#FFD93D]/30 text-lg transform hover:scale-105">
              GET BONUS 🎁
            </div>
            <div className="text-center text-xs text-[#8B8E97]">Min. Deposit - {partner.minDeposit || "100 DKK"}</div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-[#3B3E47]">
        <KeyTerms
          keyTerms={partner.keyTerms}
          minDeposit={partner.minDeposit}
          defaultText={
            <>
              Min dep: {partner.minDeposit || "100 DKK"}. Wagering requirements apply. Payment method restrictions may apply. Eligibility/geo restrictions apply.{" "}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  window.open('https://www.stopspillet.dk', '_blank', 'noopener,noreferrer')
                }}
                className="text-[#18FFFF] hover:underline cursor-pointer bg-transparent border-none p-0"
              >
                StopSpillet.dk
              </button>{" "}
              |{" "}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  window.open('https://www.rofus.dk', '_blank', 'noopener,noreferrer')
                }}
                className="text-[#18FFFF] hover:underline cursor-pointer bg-transparent border-none p-0"
              >
                ROFUS.dk
              </button>{" "}
              | T&Cs apply.
            </>
          }
        />
      </div>

          {partner.operatorName && (
            <div className="px-6 py-4 border-t border-[#3B3E47] bg-[#0B0C10]">
              <div className="text-xs text-[#8B8E97] leading-relaxed">
                <strong className="text-[#F5F6F7]">{partner.name}</strong> — Operated in Denmark by {partner.operatorName}. Licensed by Spillemyndigheden{partner.licenseCode ? ` (${partner.licenseCode})` : ''}.
                <br />
                <span className="text-[#8B8E97]">Source: </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    window.open('https://www.spillemyndigheden.dk', '_blank', 'noopener,noreferrer')
                  }}
                  className="text-[#18FFFF] hover:underline cursor-pointer bg-transparent border-none p-0 text-xs"
                >
                  Spillemyndigheden
                </button>
              </div>
            </div>
          )}
    </a>
  )
}
