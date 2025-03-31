"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Fast Disbursal',
    description: 'Get your loan amount disbursed within 24-48 hours after approval. Our streamlined process ensures quick access to funds when you need them.',
    icon: '/icons/fast-disbursal.svg'
  },
  {
    name: 'Minimal Documentation',
    description: 'Simple documentation requirements with digital KYC process. Upload documents online and get quick verification.',
    icon: '/icons/document.svg'
  },
  {
    name: 'Competitive Interest Rates',
    description: 'Access loans at competitive interest rates starting from 10.75%* p.a. with flexible repayment options of up to 5 years.',
    icon: '/icons/percentage.svg'
  },
  {
    name: 'No Hidden Charges',
    description: 'Complete transparency in all our processes. No hidden charges or processing fees. What you see is what you pay.',
    icon: '/icons/shield.svg'
  },
  {
    name: 'Expert Guidance',
    description: 'Our experienced loan advisors help you choose the right loan product and guide you through the entire process.',
    icon: '/icons/customer-service.svg'
  },
  {
    name: 'Digital Process',
    description: '100% paperless process with end-to-end digital journey. Apply, upload documents, and track your application online.',
    icon: '/icons/digital.svg'
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white_logo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Our Loans?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experience hassle-free loans with competitive rates and quick processing
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.name}
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm text-gray-500 text-center mt-8"
        >
          *Terms and conditions apply. Interest rates may vary based on credit profile and loan amount.
        </motion.p>
      </div>
    </section>
  )
}
