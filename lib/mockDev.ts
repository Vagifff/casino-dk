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
  licenseCode?: string
}

export function getGametype(): Gametype {
  return {
    id: 1,
    order: 1,
    headText: "DK Casino Site (2025) – Licensed, Safe & DK-Focused",
    headParagraph:
      "Find trusted DK-licensed casino. Detailed reviews, transparent terms, and safer gambling information. 18+. StopSpillet.dk",
    pageTitle: "DK Casino Site (2025) | bestcasinosdk.com",
  }
}
export function getPartners(): Partner[] {
  return [
    {
      id: 1,
      name: "NetBet",
      logo: "/NetBet.png",
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
      partnerUrl: "https://netbet.livepartners.com/view.php?z=178753&subid=NetBet-DK02VG&cid=",
      isMobile: true,
      votes: 4500,
      votesCount: 700,
      minDeposit: "100 DKK",
      order: 1,
      operatorName: "NetBet Enterprise Limited",
      licenseCode: "DK-licensed",
      neutralDescription: "DK-licensed casino by NetBet. Licensed by Spillemyndigheden. See site for current welcome offer and T&Cs. 18+",
      keyTerms: "New customers only (18+). Min deposit 100 DKK. Wagering requirements apply (typically 35x bonus). Max bet limits may apply (typically 50 DKK per spin/round). Bonus terms vary by offer. Payment method restrictions may apply. Eligibility/geo restrictions apply. See operator site for full terms. StopSpillet.dk | ROFUS.dk | T&Cs apply.",
    },
  ]
}
