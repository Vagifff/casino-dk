export interface Gametype {
  id: number
  order: number
  headText: string
  headParagraph: string
  pageTitle: string
}

export interface PaymentMethod {
  id: string
  name: string
  logo: string
}

export interface Highlight {
  id: string
  name: string
}

export interface Partner {
  id: number
  name: string
  logo: string
  paymentMethods: PaymentMethod[]
  highlights: Highlight[]
  partnerUrl: string
  isMobile: boolean
  order: number
  minDeposit: string
  votes: number
  votesCount: number
  operatorName?: string
  neutralDescription?: string
  keyTerms?: string
  requiresGclid?: boolean
}

export function getGametype(): Gametype {
  return {
    id: 1,
    order: 1,
    headText: "DK Casino Sites (2025) – Licensed, Safe & DK-Focused",
    headParagraph:
      "Compare trusted DK-licensed casinos. Find detailed reviews, transparent terms, and safer gambling information. 18+. StopSpillet.dk",
    pageTitle: "DK Casino Sites (2025) | bestcasinosdk.com",
  }
}
export function getPartners(): Partner[] {
  return [
    {
      id: 1,
      name: "Expekt",
      logo: "/placeholder-logo.svg",
      paymentMethods: [
        { id: "visa", name: "Visa", logo: "/visa-logo-generic.png" },
        { id: "mastercard", name: "Mastercard", logo: "/mastercard-logo.png" },
        { id: "paypal", name: "PayPal", logo: "/paypal-logo.png" },
      ],
      highlights: [
        { id: "mobile-optimized", name: "Mobile Optimized" },
        { id: "fast-withdrawal", name: "Fast Withdrawals" },
        { id: "live-chat", name: "24/7 Live Chat" },
      ],
      partnerUrl: "https://www.expekt.com",
      isMobile: true,
      votes: 4500,
      votesCount: 700,
      minDeposit: "100 DKK",
      order: 1,
      operatorName: "Expekt",
      neutralDescription: "DK-licensed casino by Expekt. See site for current welcome offer and T&Cs. 18+",
      keyTerms: "New customers only (18+). Min deposit 100 DKK. Wagering requirements apply. Max bet limits may apply. Bonus terms vary by offer. Payment method restrictions may apply. Eligibility/geo restrictions apply. See operator site for full terms. StopSpillet.dk | ROFUS.dk | T&Cs apply.",
      requiresGclid: false,
    },
  ]
}
