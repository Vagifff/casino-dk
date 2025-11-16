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

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Our Review Process</h2>
          <p>
            We conduct thorough reviews of each casino operator featured on our platform. Our evaluation process includes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Licensing Verification:</strong> We verify that each operator holds a valid license from Spillemyndigheden (Danish Gambling Authority)</li>
            <li><strong>Security Assessment:</strong> We review SSL encryption, data protection measures, and payment security protocols</li>
            <li><strong>Game Fairness:</strong> We check for RNG (Random Number Generator) certification and game provider partnerships</li>
            <li><strong>Bonus Terms Analysis:</strong> We analyze wagering requirements, maximum bet limits, game restrictions, and withdrawal conditions</li>
            <li><strong>Payment Methods:</strong> We evaluate deposit and withdrawal options, processing times, and fees</li>
            <li><strong>Customer Support:</strong> We test response times, availability, and quality of customer service</li>
            <li><strong>User Experience:</strong> We assess website design, mobile compatibility, and overall usability</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">How We Rate Casinos</h2>
          <p>
            Our rating system is based on multiple factors that matter most to Danish players:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Safety & Licensing (25%):</strong> Valid DK license, security measures, and regulatory compliance</li>
            <li><strong>Game Selection (20%):</strong> Variety of slots, table games, live dealer options, and game providers</li>
            <li><strong>Bonuses & Promotions (15%):</strong> Welcome offers, ongoing promotions, and fairness of terms</li>
            <li><strong>Payment Options (15%):</strong> Deposit methods, withdrawal speed, fees, and limits</li>
            <li><strong>Customer Support (10%):</strong> Availability, response time, and quality of service</li>
            <li><strong>User Experience (10%):</strong> Website design, mobile optimization, and ease of navigation</li>
            <li><strong>Responsible Gambling (5%):</strong> Tools, resources, and commitment to player protection</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Transparency & Disclosure</h2>
          <p>
            We believe in complete transparency. As an independent comparison publisher, we may receive commissions from operators when you click our links and make a deposit. However, this never influences our reviews, ratings, or recommendations. Our editorial content remains independent and unbiased.
          </p>
          <p>
            All operators featured on our platform are DK-licensed and regulated by Spillemyndigheden. We only recommend operators that meet our strict safety and quality standards.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Responsible Gambling Commitment</h2>
          <p>
            We take responsible gambling seriously. All content on our site is intended for adults 18+ only. We provide resources and links to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>StopSpillet.dk:</strong> Denmark's national self-exclusion register</li>
            <li><strong>ROFUS.dk:</strong> Register of Voluntary Self-Exclusion</li>
            <li>Information about deposit limits, time-outs, and responsible gambling tools</li>
          </ul>
          <p>
            If you or someone you know has a gambling problem, please seek help immediately. Gambling should be entertainment, not a way to make money or escape problems.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Contact Information</h2>
          <p>
            For questions, feedback, or concerns, please contact us at: <strong className="text-[#18FFFF]">support@dkcasino.net</strong>
          </p>
          <p className="text-sm text-[#8B8E97] mt-4">
            <strong>Note:</strong> We are an independent media/affiliate publisher. We do not provide gambling services, handle customer accounts, or process withdrawals. For account or withdrawal issues, please contact the relevant operator's customer support directly.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
