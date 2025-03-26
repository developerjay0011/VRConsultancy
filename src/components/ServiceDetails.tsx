"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Lottie from 'lottie-react'
import successAnimation from '@/animations/success-animation.json'
import { submitLoanInquiry, LoanInquiryData } from '@/services/api'

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

const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  loanAmount: yup.number().required('Loan amount is required').positive('Must be a positive number'),
  loanType: yup.string().oneOf(['personal', 'business', 'home']).required('Loan type is required'),
  employmentType: yup.string().oneOf(['salaried', 'business']).required('Employment type is required'),
  monthlyIncome: yup.number().required('Monthly income is required').positive('Must be a positive number'),
}).required()

type FormData = yup.InferType<typeof schema>

export default function ServiceDetails() {
  const [employmentType, setEmploymentType] = useState<'salaried' | 'business'>('salaried')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  
  const pathname = usePathname()
  const loanType = pathname.split('/').pop() || 'personal-loan'
  const loanDetails = loanTypes[loanType as keyof typeof loanTypes] || loanTypes['personal-loan']

  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      loanType: loanType.replace('-loan', '') as 'personal' | 'business' | 'home',
      employmentType: 'salaried'
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError('')
    
    try {
      await submitLoanInquiry(data)
      setIsSuccess(true)
      reset()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to submit loan inquiry')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-12 pt-20">
        <div className="max-w-md mx-auto text-center">
          <Lottie animationData={successAnimation} className="w-48 h-48 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Thank You!</h2>
          <p className="text-gray-600 mt-2">Your loan inquiry has been submitted successfully. Our team will contact you shortly.</p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 pt-20">
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
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Apply Now</h3>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                {...register('fullName')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                id="loanAmount"
                {...register('loanAmount', { valueAsNumber: true })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter loan amount"
              />
              {errors.loanAmount && (
                <p className="mt-1 text-sm text-red-600">{errors.loanAmount.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employment Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setEmploymentType('salaried')
                    reset({ ...getValues(), employmentType: 'salaried' })
                  }}
                  className={`p-4 text-center rounded-lg border transition-colors ${
                    employmentType === 'salaried'
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                >
                  <Image
                    src="/salary.svg"
                    alt="Salaried"
                    width={24}
                    height={24}
                    className={`mx-auto ${employmentType === 'salaried' ? 'brightness-200' : ''}`}
                  />
                  <span className="block mt-2 text-sm">Salaried</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEmploymentType('business')
                    reset({ ...getValues(), employmentType: 'business' })
                  }}
                  className={`p-4 text-center rounded-lg border transition-colors ${
                    employmentType === 'business'
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                >
                  <Image
                    src="/business.svg"
                    alt="Business"
                    width={24}
                    height={24}
                    className={`mx-auto ${employmentType === 'business' ? 'brightness-200' : ''}`}
                  />
                  <span className="block mt-2 text-sm">Business</span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Income (₹)
              </label>
              <input
                type="number"
                id="monthlyIncome"
                {...register('monthlyIncome', { valueAsNumber: true })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your monthly income"
              />
              {errors.monthlyIncome && (
                <p className="mt-1 text-sm text-red-600">{errors.monthlyIncome.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-primary text-white rounded-lg font-medium transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
