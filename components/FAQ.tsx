"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Are these casinos safe and licensed?",
    answer:
      "Yes, all casinos featured on our site are licensed by Spillemyndigheden and meet strict safety and fairness standards.",
  },
  {
    question: "How do I claim a welcome bonus?",
    answer:
      "Simply click the 'Get Bonus' button on any casino card, register an account, and make your first deposit. The bonus will be automatically credited to your account.",
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "Most casinos on our list have a minimum deposit of 100 DKK. Check each casino's specific requirements before signing up.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Withdrawal times vary by casino and payment method. Many of our recommended casinos offer same-day withdrawals for e-wallets, while bank transfers may take 3-5 business days.",
  },
  {
    question: "Do I need to verify my account?",
    answer:
      "Yes, Danish casinos are required by law to verify your identity before processing withdrawals. This typically involves providing ID and proof of address.",
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
