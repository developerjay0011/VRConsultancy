"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import Image from 'next/image'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  mobile: yup.string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')
    .required('Mobile number is required'),
  email: yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  pan: yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Enter a valid PAN number')
    .required('PAN number is required'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
  pincode: yup.string()
    .matches(/^[1-9][0-9]{5}$/, 'Enter a valid 6-digit pincode')
    .required('Pincode is required'),
  incomeType: yup.string().required('Income type is required'),
  monthlyIncome: yup.number()
    .min(10000, 'Monthly income must be at least ₹10,000')
    .required('Monthly income is required'),
  companyName: yup.string().required('Company/Business name is required'),
  loanAmount: yup.number()
    .min(50000, 'Loan amount must be at least ₹50,000')
    .max(500000, 'Loan amount cannot exceed ₹5,00,000')
    .required('Loan amount is required'),
  loanPurpose: yup.string().required('Loan purpose is required')
}).required()

type FormData = yup.InferType<typeof schema>

export default function LoanInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedIncomeType, setSelectedIncomeType] = useState<'salary' | 'business'>('salary')
  const [sliderValue, setSliderValue] = useState(50000)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      loanAmount: 50000
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      console.log(data)
      // Add your form submission logic here
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setSliderValue(value)
    setValue('loanAmount', value)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-[#5A0028] mb-6">Apply for Personal Loan</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                {...register('name')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                {...register('mobile')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
                placeholder="Enter 10-digit mobile number"
              />
              {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
                placeholder="Enter your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            {/* PAN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
              <input
                type="text"
                {...register('pan')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent uppercase"
                placeholder="Enter PAN number"
                maxLength={10}
              />
              {errors.pan && <p className="mt-1 text-sm text-red-600">{errors.pan.message}</p>}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <select
                {...register('state')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
              >
                <option value="">Select State</option>
                <option value="Gujarat">Gujarat</option>
                {/* Add more states */}
              </select>
              {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                {...register('city')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
                placeholder="Enter your city"
              />
              {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
              <input
                type="text"
                {...register('pincode')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
                placeholder="Enter 6-digit pincode"
                maxLength={6}
              />
              {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>}
            </div>

            {/* Income Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Income Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedIncomeType('salary')
                    setValue('incomeType', 'salary')
                  }}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedIncomeType === 'salary'
                      ? 'bg-[#5A0028] text-white border-[#5A0028]'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  Salaried
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedIncomeType('business')
                    setValue('incomeType', 'business')
                  }}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedIncomeType === 'business'
                      ? 'bg-[#5A0028] text-white border-[#5A0028]'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  Business
                </button>
              </div>
              {errors.incomeType && <p className="mt-1 text-sm text-red-600">{errors.incomeType.message}</p>}
            </div>

            {/* Monthly Income */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
              <input
                type="number"
                {...register('monthlyIncome')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
                placeholder="Enter monthly income"
              />
              {errors.monthlyIncome && <p className="mt-1 text-sm text-red-600">{errors.monthlyIncome.message}</p>}
            </div>

            {/* Company/Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {selectedIncomeType === 'salary' ? 'Company Name' : 'Business Name'}
              </label>
              <input
                type="text"
                {...register('companyName')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
                placeholder={`Enter ${selectedIncomeType === 'salary' ? 'company' : 'business'} name`}
              />
              {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
            </div>

            {/* Loan Purpose */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Purpose</label>
              <select
                {...register('loanPurpose')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
              >
                <option value="">Select Purpose</option>
                <option value="education">Education</option>
                <option value="medical">Medical</option>
                <option value="business">Business</option>
                <option value="wedding">Wedding</option>
                <option value="home-renovation">Home Renovation</option>
                <option value="other">Other</option>
              </select>
              {errors.loanPurpose && <p className="mt-1 text-sm text-red-600">{errors.loanPurpose.message}</p>}
            </div>
          </div>

          {/* Loan Amount Slider */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Loan Amount: ₹{sliderValue.toLocaleString()}
            </label>
            <input
              type="range"
              min={50000}
              max={500000}
              step={10000}
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full h-2 bg-[#f28fbc] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#5A0028]"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>₹50,000</span>
              <span>₹5,00,000</span>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5A0028] text-white py-3 px-6 rounded-lg hover:bg-[#5A0028]/90 transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
