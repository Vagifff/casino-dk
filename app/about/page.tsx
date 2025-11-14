import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ComplianceBanner from "@/components/ComplianceBanner"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0C10]">
      <ComplianceBanner />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF2EC8]">About Us</h1>
        <div className="space-y-6 text-[#F5F6F7] leading-relaxed">
          <p>
            Welcome to Denmark's most trusted casino comparison platform. We're dedicated to helping players find the
            best online casino with exclusive bonuses, fast withdrawals, and certified gaming experiences.
          </p>
          <p>
            Our team of experts reviews and tests the casino on our platform to ensure it meets the highest standards
            of safety, fairness, and entertainment value. We only recommend licensed and regulated operators that comply
            with Danish gambling laws.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Our Mission</h2>
          <p>
            To provide transparent, unbiased casino reviews and help Danish players make informed decisions about where to
            play online. We believe in responsible gambling and player protection above all else. 18+. Play responsibly.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Why Trust Us?</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Independent reviews with no bias</li>
            <li>Expert analysis of bonuses and terms</li>
            <li>Regular updates on casino performance</li>
            <li>Commitment to responsible gambling</li>
            <li>DK-focused recommendations</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
