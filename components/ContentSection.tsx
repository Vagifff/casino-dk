export default function ContentSection() {
  return (
    <section className="py-16 px-4 bg-[#16181F]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FFD93D]">Why Choose Our Recommended Casinos?</h2>

        <div className="space-y-6 text-[#F5F6F7] leading-relaxed">
          <p>
            Finding the right online casino can be overwhelming with so many options available. That's why we've done
            the hard work for you, carefully reviewing and testing each casino to ensure they meet our strict standards
            for safety, fairness, and entertainment value.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#0B0C10] p-6 rounded-lg border border-[#3B3E47]">
              <h3 className="text-xl font-bold mb-3 text-[#18FFFF]">🔒 Licensed & Secure</h3>
              <p className="text-sm">
                All our recommended casinos are licensed by Spillemyndigheden, ensuring your safety and fair
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
