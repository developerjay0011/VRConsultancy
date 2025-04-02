"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  CheckBadgeIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'
import apply from '../assets/howitworks/apply-online.jpg'
import approval from '../assets/howitworks/instant-approval.webp'
import disbursement from '../assets/howitworks/disbrust.webp'
gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Apply Online',
    description: 'Fill out our simple online application form with your basic details',
    icon: ClipboardDocumentCheckIcon,
    image: apply,
  },
  {
    title: 'Document Verification',
    description: 'Quick verification of your documents through our digital process',
    icon: DocumentMagnifyingGlassIcon,
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Instant Approval',
    description: 'Get instant approval based on your eligibility criteria',
    icon: CheckBadgeIcon,
    image: approval,
  },
  {
    title: 'Quick Disbursement',
    description: 'Receive funds directly in your bank account within 24 hours',
    icon: BanknotesIcon,
    image: disbursement,
  },
]

export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    stepsRef.current.forEach((step) => {
      if (step) {
        gsap.fromTo(
          step,
          { 
            opacity: 0,
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: step,
              start: 'top center+=100',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-light overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your loan in four simple steps
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-blue-300 to-indigo-200 transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.title}
                ref={(el) => {
                  if (el) stepsRef.current.push(el)
                }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: steps.indexOf(step) * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-bold">
                    {steps.indexOf(step) + 1}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg  transition-colors"
          >
            Start Your Application
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  )
}
