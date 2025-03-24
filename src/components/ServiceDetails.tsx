"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const loanTypes = {
  'personal-loan': {
    title: 'Personal Loan',
    minAmount: '1 Lakh',
    maxAmount: '40 Lakhs',
    tenure: '96 months',
    requiredDocuments: [
      'KYC documents & Aadhaar/ passport/ voter\'s ID/ driving license/ letter from NPR/ NREGA job card',
      'PAN card',
      'Employee ID card',
      'Salary slips of the last 3 months',
      'Bank account statements of the previous 3 months',
    ]
  },
  'home-loan': {
    title: 'Home Loan',
    minAmount: '5 Lakhs',
    maxAmount: '10 Crores',
    tenure: '360 months',
    requiredDocuments: [
      'KYC documents & Aadhaar',
      'PAN card',
      'Income proof documents',
      'Property documents',
      'Bank statements of last 6 months',
    ]
  },
  'business-loan': {
    title: 'Business Loan',
    minAmount: '2 Lakhs',
    maxAmount: '50 Lakhs',
    tenure: '60 months',
    requiredDocuments: [
      'KYC documents & Aadhaar',
      'PAN card & GST registration',
      'Business registration documents',
      'Income tax returns - 2 years',
      'Bank statements of last 12 months',
    ]
  },
  'project-loan': {
    title: 'Project Loan',
    minAmount: '50 Lakhs',
    maxAmount: '25 Crores',
    tenure: '180 months',
    requiredDocuments: [
      'Project proposal & DPR',
      'Company registration documents',
      'Past project details',
      'Financial statements - 3 years',
      'Collateral documents',
    ]
  }
}

const loanSteps = [
  { step: 1, label: 'Register' },
  { step: 2, label: 'Personal Details' },
  { step: 3, label: 'Loan Sanction' },
]

export default function ServiceDetails() {
  const [employmentType, setEmploymentType] = useState<'salaried' | 'business'>('salaried')
  const pathname = usePathname()
  const loanType = pathname.split('/').pop() || 'personal-loan'
  const loanDetails = loanTypes[loanType as keyof typeof loanTypes] || loanTypes['personal-loan']

  return (
    <div className="container mx-auto px-4 py-12  pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Service Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{loanDetails.title}</h2>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/chart-line.svg"
                  alt="Available Funds"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 uppercase text-sm">Available Funds in 3 Steps</h3>
                <div className="flex items-center gap-4 mt-2">
                  {loanSteps.map((step, index) => (
                    <div key={step.step} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                          {step.step}
                        </div>
                        <span className="text-xs mt-1 text-gray-600">{step.label}</span>
                      </div>
                      {index < loanSteps.length - 1 && (
                        <div className="w-8 h-px bg-gray-300 mx-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Minimal Paperwork */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/document.svg"
                  alt="Minimal Paperwork"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 uppercase text-sm">Minimal Paperwork</h3>
                <p className="text-sm text-gray-600">Step away from tedious documentation</p>
              </div>
            </div>

            {/* Loan Amount */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/money.svg"
                  alt="Loan Amount"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 uppercase text-sm">Loan Amount</h3>
                <p className="text-sm text-gray-600">Min. {loanDetails.minAmount} And Max. {loanDetails.maxAmount}*</p>
              </div>
            </div>

            {/* Documents Required */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/document-check.svg"
                    alt="Documents Required"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 uppercase text-sm">Documents May Required</h3>
                </div>
              </div>
              <ul className="space-y-2 pl-14">
                {loanDetails.requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-500 italic">
              {loanDetails.title}s come with flexible repayment tenures that range up to {loanDetails.tenure}.*
            </p>
          </div>
        </div>

        {/* Right Column - Application Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-primary mb-6">
            Find the best {loanDetails.title} for you
          </h3>

          <div className="space-y-6">
            {/* Employment Type Selection */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEmploymentType('salaried')}
                className={`p-4 rounded-lg border-2 ${
                  employmentType === 'salaried'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                } transition-colors`}
              >
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/salary.svg"
                    alt="Salaried"
                    width={32}
                    height={32}
                  />
                  <span className="text-sm font-medium text-gray-900">Salaried</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEmploymentType('business')}
                className={`p-4 rounded-lg border-2 ${
                  employmentType === 'business'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                } transition-colors`}
              >
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/business.svg"
                    alt="Self Employed Business"
                    width={32}
                    height={32}
                  />
                  <span className="text-sm font-medium text-gray-900">
                    Self Employed Business
                  </span>
                </div>
              </motion.button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Mobile"
                    />
                    <div className="text-xs text-red-500 mt-1">
                      The Phone field is required
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    OTP <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="OTP"
                    />
                    <div className="text-xs text-red-500 mt-1">
                      Please verify your phone number
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="PAN"
                  />
                </div>
              </div>
              {
                employmentType == "salaried" ? 
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Salary <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Monthly Salary"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Organization Name"
                    />
                  </div>
                </div>:
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Yearly Revenue <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                          placeholder="Yearly Revenue"
                        />
                      </div>
      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
              }
            
          
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pin Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="Pin Code"
                />
              </div>

              

              <div className="flex items-start gap-2 mt-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 text-primary focus:ring-primary rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  By submitting information I authorize Gruhfin to call/sms/email/whatsapp me about its products and I accept all{' '}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms of Use
                  </a>
                  ,{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy & Security Policy
                  </a>{' '}
                  of Gruhfin. I Also, authorize and expressly consent Gruhfin to share my Personal Information with third parties including but not limited to CIC
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Next
              </motion.button>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  )
}
