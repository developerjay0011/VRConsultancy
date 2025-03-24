"use client"

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const values = [
  {
    title: 'Trust & Transparency',
    description: 'We believe in complete transparency in our loan processes and terms.',
  },
  {
    title: 'Customer First',
    description: 'Your financial success is our priority. We\'re here to help you achieve your goals.',
  },
  {
    title: 'Innovation',
    description: 'We leverage technology to make loan processes simpler and more efficient.',
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and integrity.',
  },
]

const stats = [
  { number: '10K+', label: 'Happy Customers' },
  { number: '₹500Cr+', label: 'Loans Disbursed' },
  { number: '15+', label: 'Banking Partners' },
  { number: '4.8/5', label: 'Customer Rating' },
]

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white  h-[40vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About VR Consultancy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Your trusted partner in financial solutions. We make loan processes simple, transparent, and accessible to everyone.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <p className="text-gray-600">
                At VR Consultancy, we&apos;re committed to revolutionizing the lending industry by making financial services more accessible, transparent, and efficient. Our mission is to empower individuals and businesses with the financial tools they need to succeed.
              </p>
              <div className="space-y-4">
                {[
                  'Digital-first approach for faster processing',
                  'Transparent and competitive rates',
                  'Personalized financial solutions',
                  'Expert guidance at every step',
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/why-choose-img.png"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600"
            >
              These core values guide everything we do at VR Consultancy
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Leadership Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600"
            >
              We&apos;re proud to have helped thousands of individuals and businesses achieve their financial goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={`/team-member-${index + 1}.jpg`}
                    alt={`Team Member ${index + 1}`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Name</h3>
                <p className="text-gray-600">Position</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
