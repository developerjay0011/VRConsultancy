"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [tenure, setTenure] = useState(24)
  const [interestRate, setInterestRate] = useState(10.5)
  const [emi, setEmi] = useState(0)
  const [isCalculating, setIsCalculating] = useState(false)

  useEffect(() => {
    calculateEMI()
  }, [loanAmount, tenure, interestRate])

  const calculateEMI = () => {
    setIsCalculating(true)
    setTimeout(() => {
      const p = loanAmount
      const r = interestRate / 12 / 100
      const n = tenure
      const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
      setEmi(Math.round(emi))
      setIsCalculating(false)
    }, 500)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="loans" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your EMI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use our EMI calculator to estimate your monthly payments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sliders Section */}
              <div className="space-y-8">
                {/* Loan Amount Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-700 font-medium">Loan Amount</label>
                    <motion.span
                      key={loanAmount}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-primary font-semibold"
                    >
                      {formatCurrency(loanAmount)}
                    </motion.span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="100000"
                      max="10000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-primary"
                    />
                  </div>
                </div>

                {/* Tenure Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-700 font-medium">Tenure (Months)</label>
                    <motion.span
                      key={tenure}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-primary font-semibold"
                    >
                      {tenure} months
                    </motion.span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="12"
                      max="84"
                      step="12"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-700 font-medium">Interest Rate</label>
                    <motion.span
                      key={interestRate}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-primary font-semibold"
                    >
                      {interestRate}%
                    </motion.span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="8"
                      max="16"
                      step="0.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 text-center">
                  <p className="text-gray-600 mb-2">Your Monthly EMI</p>
                  <AnimatePresence mode="wait">
                    {isCalculating ? (
                      <motion.div
                        key="calculating"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-3xl font-bold text-gray-400"
                      >
                        Calculating...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="text-3xl font-bold text-primary"
                      >
                        {formatCurrency(emi)}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Additional Details */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <p className="text-sm text-gray-600">Total Interest</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {formatCurrency(emi * tenure - loanAmount)}
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {formatCurrency(emi * tenure)}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Apply Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Apply for This Loan
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  
    </section>
  )
}
