"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
  require('../../public/partners/axis.png'),
  require('../../public/partners/birla.png'),
  require('../../public/partners/bob.png'),
  require('../../public/partners/faircent.png'),
  require('../../public/partners/hdfc.png'),
  require('../../public/partners/hero.png'),
  require('../../public/partners/icici.png'),
  require('../../public/partners/idfc.jpg'),
  require('../../public/partners/iifl.png'),
  require('../../public/partners/incred.png'),
  require('../../public/partners/indus.png'),
  require('../../public/partners/kotak.jpg'),
  require('../../public/partners/landt.png'),
  require('../../public/partners/lendingkart.png'),
  require('../../public/partners/moneyview.png'),
  require('../../public/partners/pnb.jpg'),
  require('../../public/partners/sbi.png'),
  require('../../public/partners/tata.png'),
  require('../../public/partners/yes.png'),
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their financial needs
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
                      "{testimonial.content}"
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
        </div>
      </div>
    </section>
  )
}
