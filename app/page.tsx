import Header from "@/components/Header"
import Hero from "@/components/Hero"
import BrandList from "@/components/BrandList"
import ContentSection from "@/components/ContentSection"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import ComplianceBanner from "@/components/ComplianceBanner"
import { getGametype, getPartners } from "@/lib/mockDev"

export default function Home() {
  const gametype = getGametype()
  const partners = getPartners()

  return (
    <div className="min-h-screen">
      <ComplianceBanner />
      <Header />
      <main>
        <Hero gametype={gametype} />
        <BrandList 
          partners={partners} 
          gametype={gametype} 
        />
        <ContentSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
