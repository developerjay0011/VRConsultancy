"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const ServiceDetails = dynamic(() => import('@/components/ServiceDetails'), { ssr: false })
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false })

const validLoanTypes = ['Personal Loan', 'Home Loan', 'Business Loan'] as const
type LoanType = typeof validLoanTypes[number]

function InquiryContent() {
  const searchParams = useSearchParams()
  const rawLoanType = searchParams.get('type') || 'Personal Loan'
  const loanType = validLoanTypes.includes(rawLoanType as LoanType) ? rawLoanType as LoanType : 'Personal Loan'

  return (
    <main>
      <Navigation />
      <ServiceDetails loanType={loanType} />
      <CTASection />
    </main>
  )
}

export default function InquiryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <InquiryContent />
    </Suspense>
  )
}
