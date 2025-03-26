"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Lottie from 'lottie-react'
import successAnimation from '@/animations/success-animation.json'
import loanApplicationAnimation from '@/animations/loan-application.json'
import { submitLoanInquiry } from '@/services/api'

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

export default function LoanInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError('')
    
    try {
      await submitLoanInquiry(data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to submit loan inquiry');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-10">
        <div className="w-64 mx-auto mb-6">
          <Lottie animationData={successAnimation} loop={false} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Thank you for your application!
        </h2>
        <p className="text-gray-600">
          We have received your loan inquiry. Our team will review your application
          and contact you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Lottie animationData={loanApplicationAnimation} loop={true} />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quick Loan Application
          </h2>
          <p className="text-gray-600">
            Fill out the form below to apply for a loan. We&apos;ll review your
            application and get back to you shortly.
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register('fullName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              id="loanAmount"
              {...register('loanAmount')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
            {errors.loanAmount && (
              <p className="mt-1 text-sm text-red-600">{errors.loanAmount.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="loanType" className="block text-sm font-medium text-gray-700">
              Loan Type
            </label>
            <select
              id="loanType"
              {...register('loanType')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              <option value="">Select loan type</option>
              <option value="personal">Personal Loan</option>
              <option value="business">Business Loan</option>
              <option value="home">Home Loan</option>
            </select>
            {errors.loanType && (
              <p className="mt-1 text-sm text-red-600">{errors.loanType.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
              Employment Type
            </label>
            <select
              id="employmentType"
              {...register('employmentType')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              <option value="">Select employment type</option>
              <option value="salaried">Salaried</option>
              <option value="business">Business Owner</option>
            </select>
            {errors.employmentType && (
              <p className="mt-1 text-sm text-red-600">{errors.employmentType.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700">
              Monthly Income (₹)
            </label>
            <input
              type="number"
              id="monthlyIncome"
              {...register('monthlyIncome')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
            {errors.monthlyIncome && (
              <p className="mt-1 text-sm text-red-600">{errors.monthlyIncome.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  )
}
