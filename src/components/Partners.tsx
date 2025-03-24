"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'HDFC Bank',
    logo: require('../../public/partners/HDFC_Bank_logo_PNG1.png'),
  },
  {
    name: 'ICICI Bank',
    logo: require('../../public/partners/icici.png'),
  },
  {
    name: 'Axis Bank',
    logo: require('../../public/partners/axis.png'),
  },
  {
    name: 'SBI Bank',
    logo: require('../../public/partners/sbi.png'),
  },
  {
    name: 'Kotak Bank',
    logo: require('../../public/partners/kotak.png'),
  },
]

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Banking Partners
          </h2>
          <p className="text-lg text-gray-600">
            We work with India's leading banks to get you the best deals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-40 h-16"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
