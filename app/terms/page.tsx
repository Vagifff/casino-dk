import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ComplianceBanner from "@/components/ComplianceBanner"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0C10]">
      <ComplianceBanner />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF2EC8]">Terms of Use</h1>
        <div className="space-y-6 text-[#F5F6F7] leading-relaxed">
          <p className="text-sm text-[#3B3E47]">Updated: 2 November 2025</p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">About us</h2>
            <p>
              bestcasinosdk.com is an independent comparison publisher. We do not provide gambling services or handle customer accounts or withdrawals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Age restriction</h2>
            <p>
              Content is intended for 18+ in Denmark. Do not use this site if you are under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Responsible gambling</h2>
            <p>
              Gambling carries risk. Resources:{" "}
              <a
                href="https://www.stopspillet.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#18FFFF] hover:underline"
              >
                StopSpillet.dk
              </a>{" "}
              and{" "}
              <a
                href="https://www.rofus.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#18FFFF] hover:underline"
              >
                ROFUS.dk
              </a>
              . Consider deposit limits and time-outs with operators.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Affiliate disclosure</h2>
            <p>
              Our pages contain affiliate links to DK-licensed operators. We may earn a commission if you click and register/deposit. This does not influence our editorial content or rankings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Promotions and accuracy</h2>
            <p>
              Operator promotions change frequently. We strive to keep information current but the operator's page controls. Significant terms (min deposit, wagering, game restrictions, time limits, max bet/win, payment exclusions) must be read on the operator's site before you join.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Liability</h2>
            <p>
              We are not liable for losses arising from gambling. Use our information at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#18FFFF]">Contact</h2>
            <p>
              support@bestcasinosdk.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
