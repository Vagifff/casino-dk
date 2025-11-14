import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ComplianceBanner from "@/components/ComplianceBanner"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0C10]">
      <ComplianceBanner />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF2EC8]">Privacy Policy (GDPR)</h1>
        <div className="space-y-6 text-[#F5F6F7] leading-relaxed">
          <p className="text-sm text-[#3B3E47]">Effective date: 2 November 2025</p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Who we are</h2>
            <p>
              bestcasinosdk.com ("we", "us") is a comparison publisher. Contact: support@bestcasinosdk.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">What data we process</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact data (e.g., email if you write to us).</li>
              <li>Usage data and device data (pages viewed, referrer, approximate location, IP, user agent).</li>
              <li>Cookie/ID data from analytics and affiliate-tracking partners.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Why (lawful bases)</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Site operation, security, fraud prevention (legitimate interests).</li>
              <li>Measuring and improving content (legitimate interests/consent, where required).</li>
              <li>Responding to enquiries (legitimate interests).</li>
              <li>Storing/reading non-essential cookies (consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Cookies & tracking</h2>
            <p>
              We use first-party cookies and third-party services (e.g., analytics and affiliate-tracking networks) that place cookies or similar IDs to attribute clicks and measure performance. You can manage non-essential cookies via our banner and your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Sharing</h2>
            <p>
              We share limited data with processors (hosting, analytics, affiliate-tracking). We do not sell personal data. Processors may be located outside the EU/EEA; where applicable we rely on adequacy decisions or Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Retention</h2>
            <p>
              Contact emails: up to 24 months after last contact. Analytics/attribution data: per partner default windows (typically 13 months or less).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Your rights</h2>
            <p>
              Access, rectification, erasure, restriction, portability, objection, and withdrawal of consent at any time (where processing is based on consent). To exercise rights, email support@bestcasinosdk.com. You can lodge a complaint with the Danish Data Protection Agency (Datatilsynet).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Children</h2>
            <p>
              Our content is for adults 18+ only. We do not knowingly collect data from minors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Updates</h2>
            <p>
              We'll post any changes on this page with a new effective date.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
