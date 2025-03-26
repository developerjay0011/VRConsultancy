"use client"

import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const ServiceDetails = dynamic(() => import('@/components/ServiceDetails'), { ssr: false })
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false })

export default function HomeLoanPage() {
  return (
    <main>
      <Navigation />
      <ServiceDetails />
      <CTASection />
    </main>
  )
}
