"use client"

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from 'react-hot-toast'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  mobile: yup.string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')
    .required('Mobile number is required'),
  email: yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  dob: yup.string()
    .required('Date of Birth is required')
    .test('age', 'You must be at least 21 years old', (value) => {
      if (!value) return false
      const dob = new Date(value)
      const today = new Date()
      const age = today.getFullYear() - dob.getFullYear()
      const monthDiff = today.getMonth() - dob.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        return age - 1 >= 21
      }
      return age >= 21
    }),
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
  loanPurpose: yup.string().required('Loan purpose is required'),
  termsAccepted: yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions')
}).required()

type FormData = yup.InferType<typeof schema>


export default function LoanInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedIncomeType, setSelectedIncomeType] = useState<'salary' | 'business'>('salary')
  const [sliderValue, setSliderValue] = useState(50000)
  const [isLoadingPincode, setIsLoadingPincode] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      loanAmount: 50000
    }
  })

  const pincode = watch('pincode')

  useEffect(() => {
    const fetchPincodeDetails = async () => {
      if (pincode?.length === 6) {
        setIsLoadingPincode(true)
        try {
          const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          const data = await response.json()
          
          if (data[0].Status === 'Success') {
            const postOffice = data[0].PostOffice[0]
            setValue('state', postOffice.State)
            setValue('city', postOffice.District)
          }
        } catch (error) {
          console.error('Error fetching pincode details:', error)
        } finally {
          setIsLoadingPincode(false)
        }
      }
    }

    fetchPincodeDetails()
  }, [pincode, setValue])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      console.log("data", data)
      const response = await fetch('http://localhost:5001/api/loans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
          ...data,
          monthlyIncome: parseFloat(data.monthlyIncome.toString()),
          loanAmount: sliderValue
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit loan application')
      }

      // Show success message
      toast.success('Application submitted successfully!', {
        position: 'top-right',
        duration: 5000
      })

      // Reset form
      reset()
      setSliderValue(50000)
      setSelectedIncomeType('salary')
    } catch (error) {
      console.error('Error submitting loan application:', error)
      toast.error('Failed to submit loan application. Please try again.', {
        position: 'top-right',
        duration: 5000
      })
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

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input
                type="date"
                {...register('dob')}
                max={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
              />
              {errors.dob && <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>}
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

            {/* Pincode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
              <div className="relative">
                <input
                  type="text"
                  {...register('pincode')}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent"
                  placeholder="Enter 6-digit pincode"
                  maxLength={6}
                />
                {isLoadingPincode && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#5A0028] border-t-transparent"></div>
                  </div>
                )}
              </div>
              {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                {...register('state')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent bg-gray-50"
                placeholder="State will auto-fill"
                readOnly
              />
              {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                {...register('city')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0028] focus:border-transparent bg-gray-50"
                placeholder="City will auto-fill"
                readOnly
              />
              {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
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

          {/* Terms and Conditions */}
          <div className="mt-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                {...register('termsAccepted')}
                className="mt-1 h-4 w-4 text-[#5A0028] border-gray-300 rounded focus:ring-[#5A0028]"
              />
              <span className="ml-3 text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-[#5A0028] hover:underline">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#5A0028] hover:underline">
                  Privacy Policy
                </a>
                . I understand that my data will be used in accordance with the privacy policy.
              </span>
            </label>
            {errors.termsAccepted && (
              <p className="mt-1 text-sm text-red-600">{errors.termsAccepted.message}</p>
            )}
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
