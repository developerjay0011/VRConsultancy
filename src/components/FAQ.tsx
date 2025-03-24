"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is the maximum loan amount I can get?",
    answer: "You can apply for a loan up to ₹50 Lakhs, depending on your income, credit score, and other eligibility criteria."
  },
  {
    question: "What documents do I need to apply?",
    answer: "You will need your PAN card, Aadhaar card, latest salary slips or ITR (for self-employed), and bank statements for the last 3 months."
  },
  {
    question: "How long does the approval process take?",
    answer: "Most applications are approved within 24 hours. Once approved, the amount is disbursed within the next business day."
  },
  {
    question: "What are the interest rates?",
    answer: "Our interest rates start from 8% per annum and vary based on your credit score, loan amount, and tenure."
  },
  {
    question: "Is there any prepayment penalty?",
    answer: "No, we do not charge any prepayment penalties. You can repay your loan partially or fully at any time."
  },
  {
    question: "How can I check my loan status?",
    answer: "You can check your loan status through our online portal or mobile app. You will receive regular updates via SMS and email as well."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our loan process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-left transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
