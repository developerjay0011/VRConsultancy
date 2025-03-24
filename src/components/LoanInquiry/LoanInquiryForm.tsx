"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import submitAnimation from '@/animations/submit-animation.json'
import successAnimation from '@/animations/success-animation.json'

const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  loanAmount: yup.number().required('Loan amount is required').min(10000, 'Minimum loan amount is ₹10,000'),
  loanPurpose: yup.string().required('Loan purpose is required'),
  employmentType: yup.string().required('Employment type is required'),
  monthlyIncome: yup.number().required('Monthly income is required').min(15000, 'Minimum monthly income should be ₹15,000'),
}).required()

type FormData = yup.InferType<typeof schema>

export default function LoanInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl">
        <div className="w-64 h-64">
          <Lottie animationData={successAnimation} loop={false} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Application Submitted!</h3>
        <p className="text-gray-600 text-center mb-6">
          Our team will review your application and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            {...register('fullName')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₹)</label>
          <input
            type="number"
            {...register('loanAmount')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="500000"
          />
          {errors.loanAmount && (
            <p className="mt-1 text-sm text-red-600">{errors.loanAmount.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Purpose</label>
          <select
            {...register('loanPurpose')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Purpose</option>
            <option value="personal">Personal Loan</option>
            <option value="business">Business Loan</option>
            <option value="education">Education Loan</option>
            <option value="home">Home Loan</option>
            <option value="vehicle">Vehicle Loan</option>
          </select>
          {errors.loanPurpose && (
            <p className="mt-1 text-sm text-red-600">{errors.loanPurpose.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
          <select
            {...register('employmentType')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Type</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self Employed</option>
            <option value="business">Business Owner</option>
          </select>
          {errors.employmentType && (
            <p className="mt-1 text-sm text-red-600">{errors.employmentType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income (₹)</label>
          <input
            type="number"
            {...register('monthlyIncome')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="50000"
          />
          {errors.monthlyIncome && (
            <p className="mt-1 text-sm text-red-600">{errors.monthlyIncome.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="w-24 h-24">
              <Lottie animationData={submitAnimation} loop={true} />
            </div>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
    </form>
  )
}
