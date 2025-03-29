"use client"

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const ServiceDetails = dynamic(() => import('@/components/ServiceDetails'), { ssr: false })
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false })

const validLoanTypes = ['Personal Loan', 'Home Loan', 'Business Loan'] as const
type LoanType = typeof validLoanTypes[number]

export default function InquiryPage() {
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
