"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
    name: 'Rahul Sharma',
    role: 'Business Owner',
    content: 'The loan process was incredibly smooth. Got approved within 24 hours!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    name: 'Priya Patel',
    role: 'IT Professional',
    content: 'Best interest rates in the market. Very happy with the service.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
  {
    name: 'Amit Kumar',
    role: 'Entrepreneur',
    content: 'Minimal documentation and fast approval. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
  },
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
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
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
          <p className="text-gray-600 mb-8">
            Hear what our clients say about their experience with VR Consultancy&apos;s loan services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${
                  currentIndex === index ? 'relative' : 'pointer-events-none'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-lg">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-600 text-lg mb-4 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-16  transition-all duration-300"
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
            <p className="text-gray-600 text-sm">
              &quot;Join thousands of satisfied customers who trust us with their financial needs&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
