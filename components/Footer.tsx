import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#16181F] border-t border-[#3B3E47] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#FFD93D] mb-4">bestcasinosdk.com</h3>
            <p className="text-sm text-[#F5F6F7] leading-relaxed">
              Your trusted guide to the best DK online casinos with exclusive bonuses and expert reviews.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#18FFFF] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#F5F6F7] hover:text-[#18FFFF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#F5F6F7] hover:text-[#18FFFF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F5F6F7] hover:text-[#18FFFF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#18FFFF] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-[#F5F6F7] hover:text-[#18FFFF] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#F5F6F7] hover:text-[#18FFFF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#18FFFF] mb-4">Responsible Gambling</h4>
            <ul className="space-y-2 text-sm text-[#F5F6F7]">
              <li>
                <a
                  href="https://www.stopspillet.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#18FFFF] transition-colors"
                >
                  StopSpillet.dk
                </a>
              </li>
              <li>
                <a
                  href="https://www.rofus.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#18FFFF] transition-colors"
                >
                  ROFUS.dk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3B3E47] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">18+</span>
              <p className="text-sm text-[#8B8E97]">Gambling can be addictive. Play responsibly.</p>
            </div>

            <p className="text-sm text-[#8B8E97]">© 2025 bestcasinosdk.com. All rights reserved.</p>
          </div>

          <div className="mt-6 text-xs text-[#8B8E97] leading-relaxed">
            <p className="font-semibold text-[#F5F6F7] mb-2">Advertising Disclosure</p>
            <p>
              bestcasinosdk.com is an independent comparison publisher. We do not operate an online casino. We partner with DK-licensed operators and may receive a commission if you click a link and create an account/deposit. This never affects the ranking or the information we publish. Offers are subject to change—always read the operator's T&Cs and significant terms before registering. 18+. StopSpillet.dk. ROFUS.dk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
