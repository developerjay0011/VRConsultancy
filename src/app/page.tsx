"use client"

import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import LoanCalculator from '@/components/LoanCalculator'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import OurServices from '@/components/OurServices'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

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
