export default function ContentSection() {
  return (
    <section className="py-16 px-4 bg-[#16181F]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FFD93D]">Why Choose Our Recommended Casino?</h2>

        <div className="space-y-6 text-[#F5F6F7] leading-relaxed">
          <p>
            Finding the right online casino can be overwhelming with so many options available. That's why we've done
            the hard work for you, carefully reviewing and testing the casino to ensure it meets our strict standards
            for safety, fairness, and entertainment value.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#0B0C10] p-6 rounded-lg border border-[#3B3E47]">
              <h3 className="text-xl font-bold mb-3 text-[#18FFFF]">🔒 Licensed & Secure</h3>
              <p className="text-sm">
                Our recommended casino is licensed by Spillemyndigheden, ensuring your safety and fair
                play.
              </p>
            </div>

            <div className="bg-[#0B0C10] p-6 rounded-lg border border-[#3B3E47]">
              <h3 className="text-xl font-bold mb-3 text-[#18FFFF]">⚡ Withdrawals</h3>
              <p className="text-sm">
                Withdrawal options available. Processing times vary by operator and payment method. See operator site for details.
              </p>
            </div>

            <div className="bg-[#0B0C10] p-6 rounded-lg border border-[#3B3E47]">
              <h3 className="text-xl font-bold mb-3 text-[#18FFFF]">🎁 Welcome Bonuses</h3>
              <p className="text-sm">
                Access welcome bonuses and promotions. Terms and conditions apply. See operator site for current offers.
              </p>
            </div>

            <div className="bg-[#0B0C10] p-6 rounded-lg border border-[#3B3E47]">
              <h3 className="text-xl font-bold mb-3 text-[#18FFFF]">🎮 Game Selection</h3>
              <p className="text-sm">
                Enjoy slots, table games, and live dealer options. Game availability varies by operator.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-4 text-[#18FFFF]">Understanding Danish Casino Regulations</h3>
          <p>
            All casinos featured on our platform are licensed and regulated by Spillemyndigheden, Denmark's gambling authority. This ensures:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
            <li>Fair play and game integrity through RNG certification</li>
            <li>Player fund protection and segregation</li>
            <li>Responsible gambling tools and resources</li>
            <li>Compliance with Danish data protection laws (GDPR)</li>
            <li>Regular audits and regulatory oversight</li>
          </ul>

          <h3 className="text-2xl font-bold mt-12 mb-4 text-[#18FFFF]">Payment Methods Available in Denmark</h3>
          <p>
            Danish players have access to various payment methods when playing at licensed casinos:
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-[#0B0C10] p-4 rounded-lg border border-[#3B3E47]">
              <h4 className="font-semibold text-[#18FFFF] mb-2">Bank Transfers</h4>
              <p className="text-sm">Direct bank transfers (Dankort, MobilePay) - typically 1-3 business days</p>
            </div>
            <div className="bg-[#0B0C10] p-4 rounded-lg border border-[#3B3E47]">
              <h4 className="font-semibold text-[#18FFFF] mb-2">E-Wallets</h4>
              <p className="text-sm">PayPal, Skrill, Neteller - usually instant deposits and fast withdrawals</p>
            </div>
            <div className="bg-[#0B0C10] p-4 rounded-lg border border-[#3B3E47]">
              <h4 className="font-semibold text-[#18FFFF] mb-2">Credit/Debit Cards</h4>
              <p className="text-sm">Visa, Mastercard - widely accepted, processing times vary</p>
            </div>
            <div className="bg-[#0B0C10] p-4 rounded-lg border border-[#3B3E47]">
              <h4 className="font-semibold text-[#18FFFF] mb-2">Cryptocurrency</h4>
              <p className="text-sm">Some operators accept Bitcoin and other cryptocurrencies</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-4 text-[#18FFFF]">Understanding Casino Bonuses</h3>
          <p>
            Welcome bonuses and promotions can enhance your gaming experience, but it's important to understand the terms:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
            <li><strong>Wagering Requirements:</strong> Typically 35x the bonus amount - you must bet the bonus a certain number of times before withdrawal</li>
            <li><strong>Maximum Bet Limits:</strong> Usually 50 DKK per spin/round when playing with bonus funds</li>
            <li><strong>Game Restrictions:</strong> Some games may contribute less (or not at all) to wagering requirements</li>
            <li><strong>Time Limits:</strong> Bonuses often expire after 30 days if wagering isn't completed</li>
            <li><strong>Payment Method Exclusions:</strong> Some payment methods may be excluded from bonus eligibility</li>
          </ul>
          <p className="mt-4">
            Always read the full terms and conditions on the operator's website before claiming any bonus.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-4 text-[#18FFFF]">Play Safe (18+)</h3>
          <p>
            Gambling is entertainment, not a way to make money. If you're worried about your play, visit{" "}
            <a
              href="https://www.stopspillet.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#18FFFF] hover:underline"
            >
              StopSpillet.dk
            </a>
            , or self-exclude at{" "}
            <a
              href="https://www.rofus.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#18FFFF] hover:underline"
            >
              ROFUS.dk
            </a>
            . Set deposit limits, take breaks, and never chase losses.
          </p>

          <div className="bg-[#FF1744] bg-opacity-10 border border-[#FF1744] p-6 rounded-lg mt-6">
            <p className="text-white font-semibold">
              If you feel you may have a gambling problem, please seek help immediately. Visit{" "}
              <a
                href="https://www.stopspillet.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#18FFFF] hover:underline"
              >
                StopSpillet.dk
              </a>
              , or self-exclude at{" "}
              <a
                href="https://www.rofus.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#18FFFF] hover:underline"
              >
                ROFUS.dk
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
