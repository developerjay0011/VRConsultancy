"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

import hdfcBankLogo from '../../public/partners/HDFC_Bank_logo_PNG1.png'
import iciciBankLogo from '../../public/partners/icici.png'
import axisBankLogo from '../../public/partners/axis.png'
import sbiBankLogo from '../../public/partners/sbi.png'
import kotakBankLogo from '../../public/partners/kotak.png'

const partners = [
  {
    name: 'HDFC Bank',
    logo: hdfcBankLogo,
  },
  {
    name: 'ICICI Bank',
    logo: iciciBankLogo,
  },
  {
    name: 'Axis Bank',
    logo: axisBankLogo,
  },
  {
    name: 'SBI Bank',
    logo: sbiBankLogo,
  },
  {
    name: 'Kotak Bank',
    logo: kotakBankLogo,
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
          <p className="text-lg text-gray-600 text-center">
            We&apos;ve partnered with India&apos;s leading banks to provide you with the best loan options.
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
