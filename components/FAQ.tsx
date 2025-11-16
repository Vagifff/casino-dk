"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Is this casino safe and licensed?",
    answer:
      "Yes, all casinos featured on our site are licensed by Spillemyndigheden (Danish Gambling Authority) and meet strict safety and fairness standards. We only recommend operators that hold valid DK licenses and comply with Danish gambling regulations.",
  },
  {
    question: "How do I claim a welcome bonus?",
    answer:
      "Simply click the 'Get Bonus' button on the casino card, register an account, and make your first deposit. The bonus will be automatically credited to your account. Make sure to read the terms and conditions, including wagering requirements, maximum bet limits, and game restrictions, before claiming any bonus.",
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "Most casinos have a minimum deposit of 100 DKK. However, this can vary by operator and payment method. Always check the casino's specific requirements before signing up. Some payment methods may have different minimum deposit amounts.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Withdrawal times vary by payment method and operator. E-wallets (PayPal, Skrill, Neteller) typically process within 24 hours, while bank transfers may take 3-5 business days. Credit/debit card withdrawals usually take 1-3 business days. Always check the operator's site for current processing times.",
  },
  {
    question: "Do I need to verify my account?",
    answer:
      "Yes, Danish casino operators are required by law to verify your identity before processing withdrawals. This typically involves providing a valid ID (passport or driver's license) and proof of address (utility bill or bank statement). Some operators may require verification before your first withdrawal, while others allow it after.",
  },
  {
    question: "What are wagering requirements?",
    answer:
      "Wagering requirements (also called playthrough requirements) specify how many times you must bet the bonus amount before you can withdraw winnings. For example, if you receive a 1000 DKK bonus with 35x wagering, you must bet 35,000 DKK before withdrawing. These requirements typically range from 30x to 50x the bonus amount.",
  },
  {
    question: "Are there maximum bet limits with bonuses?",
    answer:
      "Yes, most bonuses have maximum bet limits, typically 50 DKK per spin or round when playing with bonus funds. Exceeding this limit may result in bonus forfeiture and winnings being voided. Always check the specific terms for each bonus offer.",
  },
  {
    question: "Which games contribute to wagering requirements?",
    answer:
      "Different games contribute differently to wagering requirements. Slots usually contribute 100%, while table games like blackjack and roulette may contribute only 10-20%. Some games may be excluded entirely. Always check the game contribution percentages in the bonus terms before playing.",
  },
  {
    question: "Can I use any payment method with bonuses?",
    answer:
      "Some payment methods may be excluded from bonus eligibility. For example, Skrill and Neteller deposits are often excluded from welcome bonuses. Always check the bonus terms to see which payment methods are eligible before making a deposit.",
  },
  {
    question: "What is responsible gambling?",
    answer:
      "Responsible gambling means playing within your means and recognizing that gambling is entertainment, not a way to make money. Set deposit limits, take regular breaks, and never chase losses. If you're concerned about your gambling, visit StopSpillet.dk or register with ROFUS.dk for self-exclusion. 18+. Play responsibly.",
  },
  {
    question: "How do I set deposit limits?",
    answer:
      "Most DK-licensed casinos offer deposit limit tools in your account settings. You can set daily, weekly, or monthly limits. These limits help you control your spending and play responsibly. Once set, limits typically cannot be increased immediately and may require a cooling-off period.",
  },
  {
    question: "What is self-exclusion?",
    answer:
      "Self-exclusion allows you to voluntarily ban yourself from gambling sites for a set period (usually 6 months, 1 year, or permanently). In Denmark, you can register with StopSpillet.dk (national register) or ROFUS.dk (voluntary register). Once registered, licensed operators must prevent you from accessing their services.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 bg-[#0B0C10]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#FFD93D]">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#16181F] border border-[#3B3E47] rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-[#0B0C10] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#F5F6F7] pr-4">{faq.question}</span>
                <span className="text-[#18FFFF] text-2xl flex-shrink-0">{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && <div className="px-6 pb-6 text-[#F5F6F7] leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
