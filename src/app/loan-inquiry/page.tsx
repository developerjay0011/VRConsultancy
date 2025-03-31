"use client"

// import ServiceDetails from '@/components/ServiceDetails'
import dynamic from 'next/dynamic'
import EligibilitySection from '@/components/EligibilitySection'

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const LoanInquiryForm = dynamic(() => import('@/components/LoanInquiry/LoanInquiryForm'), { ssr: false })
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false })

export default function LoanInquiryPage() {
  return (
    <main>
      <Navigation />
      <div className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-5/12">
              <EligibilitySection />
            </div>
            <div className="w-full lg:w-7/12">
              <LoanInquiryForm />
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </main>
  )
}
