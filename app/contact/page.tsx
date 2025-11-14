import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ComplianceBanner from "@/components/ComplianceBanner"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0C10]">
      <ComplianceBanner />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF2EC8]">Contact Us</h1>
        <div className="space-y-6 text-[#F5F6F7] leading-relaxed">
          <p>Have questions or feedback? We'd love to hear from you. Please reach out using the information below.</p>

          <div className="bg-[#16181F] p-6 rounded-lg border border-[#3B3E47] mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#18FFFF]">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#FFD93D] mb-2">Email</h3>
                <p>support@bestcasinosdk.com</p>
              </div>
              <div className="pt-4 border-t border-[#3B3E47]">
                <h3 className="font-semibold text-[#FFD93D] mb-2">Publisher type</h3>
                <p className="text-sm leading-relaxed">
                  Independent media/affiliate publisher. We do not provide gambling services. For account or withdrawal issues, contact the relevant operator's support. 18+. Play responsibly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#16181F] p-6 rounded-lg border border-[#3B3E47] mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#18FFFF]">Responsible Gambling Support</h2>
            <p className="mb-4">If you need help with gambling-related issues, please contact:</p>
            <ul className="space-y-2">
              <li>
                <strong>StopSpillet:</strong>{" "}
                <a href="https://www.stopspillet.dk" className="text-[#18FFFF] hover:underline">
                  www.stopspillet.dk
                </a>
              </li>
              <li>
                <strong>ROFUS:</strong>{" "}
                <a href="https://www.rofus.dk" className="text-[#18FFFF] hover:underline">
                  www.rofus.dk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
