import Header from "@/components/Header"
import Hero from "@/components/Hero"
import BrandList from "@/components/BrandList"
import ContentSection from "@/components/ContentSection"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import ComplianceBanner from "@/components/ComplianceBanner"
import { getGametype, getPartners } from "@/lib/mockDev"
import { headers } from "next/headers"
import { getPersonalizedContent } from "@/lib/utils/content-personalization"

export const dynamic = 'force-dynamic'

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: HomeProps) {
  const headersList = await headers()
  const userAgent = headersList.get("user-agent") || ""
  const isMobileServer = /mobile|android|iphone|ipad|phone/i.test(userAgent)

  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams
  const gclid = typeof resolvedSearchParams.gclid === "string" ? resolvedSearchParams.gclid : ""

  const headerMap: Record<string, string | null> = {}
  headersList.forEach((value, key) => {
    headerMap[key] = value
  })

  const personalization = getPersonalizedContent(headerMap, gclid)

  const gametype = getGametype()
  const partners = getPartners()

  return (
    <div className="min-h-screen">
      <ComplianceBanner />
      <Header />
      <main>
        <Hero gametype={gametype} isMobile={isMobileServer} />
        <BrandList 
          partners={partners} 
          isMobile={isMobileServer} 
          gametype={gametype} 
          gclid={gclid}
          enableExtendedView={personalization.showExtended}
        />
        <ContentSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
