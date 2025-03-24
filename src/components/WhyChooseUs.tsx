"use client"

import { motion } from 'framer-motion'
import { 
  BoltIcon, 
  ShieldCheckIcon, 
  BanknotesIcon,
  DocumentCheckIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
  {
    title: 'Quick Approval',
    description: 'Get your loan approved within 24 hours with minimal documentation',
    icon: BoltIcon,
    bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Secure Process',
    description: 'Your data is protected with bank-level security measures',
    icon: ShieldCheckIcon,
    bgImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Competitive Rates',
    description: 'Enjoy interest rates starting from just 8% per annum',
    icon: BanknotesIcon,
    bgImage: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Minimal Documents',
    description: 'Simple documentation process with digital verification',
    icon: DocumentCheckIcon,
    bgImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=500&q=60'
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated team is always here to help you',
    icon: ClockIcon,
    bgImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Trusted by Many',
    description: 'Join thousands of satisfied customers across India',
    icon: UserGroupIcon,
    bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=60'
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Loans?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of speed, security, and simplicity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-blue-600/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={feature.bgImage}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary">₹500Cr+</h4>
            <p className="text-gray-600">Loans Disbursed</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary">50k+</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary">4.8/5</h4>
            <p className="text-gray-600">Customer Rating</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary">24hrs</h4>
            <p className="text-gray-600">Quick Processing</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
