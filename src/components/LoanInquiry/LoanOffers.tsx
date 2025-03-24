"use client"

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const mockOffers = [
  {
    bankName: 'ABC Bank',
    interestRate: 8.5,
    maxAmount: 5000000,
    processingFee: 0.5,
    features: [
      'Zero prepayment charges',
      'Approval within 24 hours',
      'Minimal documentation'
    ]
  },
  {
    bankName: 'XYZ Bank',
    interestRate: 9.0,
    maxAmount: 4000000,
    processingFee: 0.25,
    features: [
      'No hidden charges',
      'Flexible repayment options',
      'Special rates for premium customers'
    ]
  },
  {
    bankName: 'PQR Bank',
    interestRate: 8.75,
    maxAmount: 3000000,
    processingFee: 0.75,
    features: [
      'Doorstep document collection',
      'Online account management',
      'Special offers for existing customers'
    ]
  }
]

export default function LoanOffers() {
  return (
    <section className="mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Best Loan Offers for You
        </h2>
        <p className="text-gray-600">
          Compare and choose from our partner banks
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockOffers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {offer.bankName}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Interest Rate</p>
                  <p className="text-2xl font-bold text-primary">
                    {offer.interestRate}% p.a.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Maximum Amount</p>
                  <p className="text-lg font-semibold">
                    Up to ₹{(offer.maxAmount / 100000).toFixed(1)} Lakhs
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Processing Fee</p>
                  <p className="text-lg font-semibold">
                    {offer.processingFee}%
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 mb-2">Key Features</p>
                  <ul className="space-y-2">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
