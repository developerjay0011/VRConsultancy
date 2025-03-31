"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const eligibilityCriteria = [
  {
    icon: '/icons/cibil.svg',
    title: 'CIBIL',
    value: '700+'
  },
  {
    icon: '/icons/age.svg',
    title: 'Age',
    value: '21+ years'
  },
  {
    icon: '/icons/income.svg',
    title: 'Income',
    value: '₹18,000+'
  }
]

const requiredDocuments = [
  {
    icon: '/icons/selfie.svg',
    title: 'Photo check',
    subtitle: 'Selfie',
    optional: false
  },
  {
    icon: '/icons/pan.svg',
    title: 'Identity check',
    subtitle: 'PAN',
    optional: false
  },
  {
    icon: '/icons/aadhar.svg',
    title: 'KYC check',
    subtitle: 'Aadhar',
    optional: false
  },
  {
    icon: '/icons/bank.svg',
    title: 'Income check',
    subtitle: 'Bank Statement',
    optional: true
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function EligibilitySection() {
  return (
    <div className="h-full">
      {/* Eligibility Criteria */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Eligibility <span className="text-[#5A0028]">criteria</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {eligibilityCriteria.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 relative flex-shrink-0 mr-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-gray-600">{item.title}</h3>
                <p className="text-lg font-semibold text-[#5A0028]">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Required Documents */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Documents <span className="text-[#5A0028]">required</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {requiredDocuments.map((doc) => (
            <motion.div
              key={doc.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-start p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 relative flex-shrink-0 mr-4">
                <Image
                  src={doc.icon}
                  alt={doc.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-[#5A0028] mb-1">
                  {doc.title}
                </h3>
                <p className="text-gray-500">{doc.subtitle}</p>
              </div>
              {doc.optional && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f28fbc] text-[#5A0028]">
                  Optional
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
