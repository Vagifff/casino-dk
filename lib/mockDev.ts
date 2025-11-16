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
    pageTitle: "DK Casino Site (2025) | dkcasino.net",
  }
}
export function getPartners(): Partner[] {
  return [
    {
      id: 1,
      name: "",
      logo: "/expekt-logo.svg",
      paymentMethods: [
        { id: "visa", name: "Visa", logo: "/visa-logo-generic.png" },
        { id: "mastercard", name: "Mastercard", logo: "/mastercard-logo.png" },
        { id: "mobilepay", name: "MobilePay", logo: "/mobilepay-logo.png" },
        { id: "skrill", name: "Skrill", logo: "/skrill-logo.png" },
        { id: "trustly", name: "Trustly", logo: "/trustly-logo.png" },
        { id: "applepay", name: "Apple Pay", logo: "/applepay-logo.png" },
      ],
      highlights: [
        { id: "mobile-optimized", name: "Mobile Optimized" },
        { id: "fast-withdrawal", name: "Fast Withdrawals" },
        { id: "live-chat", name: "24/7 Live Chat" },
        { id: "sports-betting", name: "Sports Betting" },
        { id: "live-casino", name: "Live Casino" },
      ],
      partnerUrl: "https://www.expekt.dk/",
      isMobile: true,
      votes: 4800,
      votesCount: 750,
      minDeposit: "100 DKK",
      order: 1,
      operatorName: "LeoVegas Gaming plc",
      licenseCode: "21-70665",
      neutralDescription: "DK-licensed casino. Licensed by Spillemyndigheden. See site for current welcome offer and T&Cs. 18+",
      keyTerms: "New customers only (18+). Min deposit 100 DKK. Deposit exactly 100 DKK, wager 500 DKK and get 50 freespins. Wagering requirements apply (x5 wagering on all slots). Freespins are for Gold Blitz game. Freespins value 2 DKK per spin. You have 14 days to activate the offer. Max bet limits may apply. Payment method restrictions may apply. Eligibility/geo restrictions apply. See operator site for full terms. StopSpillet.dk | ROFUS.dk | T&Cs apply.",
    },
  ]
}
