"use client"

import Navigation from '@/components/Navigation'
import LoanInquiryForm from '@/components/LoanInquiry/LoanInquiryForm'
import LoanOffers from '@/components/LoanInquiry/LoanOffers'
import CTASection from '@/components/CTASection'

export default function LoanInquiryPage() {
  return (
    <main>
      <Navigation />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Apply for a Loan
          </h1>
          <div className="max-w-4xl mx-auto">
            <LoanInquiryForm />
            <LoanOffers />
          </div>
        </div>
      </div>
      <CTASection />
    </main>
  )
}
