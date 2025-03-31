"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

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
    name: 'Nagendra Reddy',
    image: '/customer1.jpg',
    rating: 5,
    type: 'Instant Loan',
    review: 'Awesome service provided by Prefr. Loan disbursements in just one day. Overall fast process. Executives are very responsive and managed entire process well.'
  },
  {
    name: 'Rajesh Kumar',
    image: '/customer2.jpg',
    rating: 5,
    type: 'Personal Loan',
    review: 'Great experience with VR Consultancy. The team helped me get a personal loan at the best interest rate. Very professional service.'
  },
  {
    name: 'Priya Sharma',
    image: '/customer3.jpg',
    rating: 5,
    type: 'Business Loan',
    review: 'Excellent support throughout the loan process. Quick approval and disbursement. Highly recommend their services to everyone.'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div> */}
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <span className="mr-1.5">✓</span>
                  {testimonial.type}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {testimonial.review}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-xl font-semibold text-gray-900 mb-8">
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
