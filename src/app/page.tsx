"use client"

import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false })
const LoanCalculator = dynamic(() => import('@/components/LoanCalculator'), { ssr: false })
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), { ssr: false })
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: false })
const OurServices = dynamic(() => import('@/components/OurServices'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false })
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <OurServices />
      <LoanCalculator />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </main>
  )
}
