"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import testimonial1 from '../assets/testimonials/testimonial1.jpg'
import testimonial2 from '../assets/testimonials/testimonial2.jpg'
import testimonial3 from '../assets/testimonials/testimonial3.jpg'

import axis from '../assets/partners/axis.png'
import birla from '../assets/partners/birla.png'
import bob from '../assets/partners/bob.png'
import faircent from '../assets/partners/faircent.png'
import hdfc from '../assets/partners/hdfc.png'
import hero from '../assets/partners/hero.png'
import icici from '../assets/partners/icici.png'
import idfc from '../assets/partners/idfc.jpg'
import iifl from '../assets/partners/iifl.png'
import incred from '../assets/partners/incred.png'
import indus from '../assets/partners/indus.png'
import kotak from '../assets/partners/kotak.jpg'
import landt from '../assets/partners/landt.png'
import lendingkart from '../assets/partners/lendingkart.png'
import moneyview from '../assets/partners/moneyview.png'
import pnb from '../assets/partners/pnb.jpg'
import sbi from '../assets/partners/sbi.png'
import tata from '../assets/partners/tata.png'
import yes from '../assets/partners/yes.png'

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Restaurant Owner',
    content: 'VR Consultancy helped me secure a business loan for my restaurant expansion in just 7 days. Their professional approach and transparent process made everything smooth.',
    image: testimonial1
  },
  {
    name: 'Anita Sharma',
    role: 'Software Engineer',
    content: 'I got my home loan approved through VR Consultancy at a very competitive interest rate. Their team guided me through every step and made the process hassle-free.',
    image: testimonial2
  },
  {
    name: 'Sunil Patel',
    role: 'Small Business Owner',
    content: 'The MSME loan I received through VR Consultancy helped me modernize my manufacturing unit. Their expert advice on documentation saved me a lot of time.',
    image: testimonial3
  }
]

const partnerLogos = [
  axis,
  birla,
  bob,
  faircent,
  hdfc,
  hero,
  icici,
  idfc,
  iifl,
  incred,
  indus,
  kotak,
  landt,
  lendingkart,
  moneyview,
  pnb,
  sbi,
  tata,
  yes,
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced seamless loan services with VR Consultancy.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="flex items-start mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4 pt-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className="absolute -top-3 -left-2 w-8 h-8 text-primary/10"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 leading-relaxed pl-4">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-xl font-semibold text-gray-900 mb-8 mt-10">
            Trusted by Leading Banks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-16 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt="Partner Bank"
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm mt-8">
              &quot;Join thousands of satisfied customers who trust us with their financial needs&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
