"use client"

import { motion } from 'framer-motion'
// import { HomeIcon, BuildingOffice2Icon, BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SecurityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17V15M12 17V13M15 17V11M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21ZM13 7H16M13 7V10M13 7L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MSMEIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 13.2554C18.2207 14.3805 15.1827 15 12 15C8.8173 15 5.7793 14.3805 3 13.2554M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6M12 12H12.01M5 20H19C20.1046 20 21 19.1046 21 18V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V18C3 19.1046 3.89543 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const EducationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14L21 9L12 4L3 9L12 14ZM12 14L18.1591 10.5783M12 14V21M15.7253 15.6203L18.1591 17L21 15.5L18.1591 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const NRIIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const AffordableIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 14L4 9M4 9L9 4M4 9H16C17.0609 9 18.0783 9.42143 18.8284 10.1716C19.5786 10.9217 20 11.9391 20 13C20 14.0609 19.5786 15.0783 18.8284 15.8284C18.0783 16.5786 17.0609 17 16 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TransferIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16M12 12V16M12 16L15 13M12 16L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PropertyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14V17M12 14V17M16 14V17M3 21H21M3 10H21M3 7L12 3L21 7M4 10V21H20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ProjectIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17V15M12 17V13M15 17V11M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21ZM13 7H16M13 7V10M13 7L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const WorkingCapitalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C12 8 12 8.5 12 9.5C12 10.5 11.5 11 10.5 11.5C9.5 12 8 13 8 15C8 17 10 18 12 18C14 18 15.5 17 15.5 15.5M12 6V8M12 18V20M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BusinessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 13.2554C18.2207 14.3805 15.1827 15 12 15C8.8173 15 5.7793 14.3805 3 13.2554M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6M12 12H12.01M5 20H19C20.1046 20 21 19.1046 21 18V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V18C3 19.1046 3.89543 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const PersonalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const services = [
  {
    title: 'Home Loan',
    description: 'Make your dream home a reality with our flexible home loan options. Low interest rates, quick approval, and minimal documentation.',
    Icon: HomeIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Personal Loan',
    description: 'Quick personal loans with minimal documentation. Get instant approval for your immediate financial needs with competitive interest rates.',
    Icon: PersonalIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Business Loan',
    description: 'Empower your business growth with our hassle-free business loans. Quick disbursement and flexible repayment options available.',
    Icon: BusinessIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Project Loan',
    description: 'Fund your large-scale projects with our tailored financing solutions. Competitive rates and extended tenure options for project completion.',
    Icon: ProjectIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Loan Against Securities',
    description: 'Unlock the value of your investments. Get quick loans against shares, mutual funds, and other securities with attractive interest rates.',
    Icon: SecurityIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'MSME Loan',
    description: 'Special loan schemes for Micro, Small & Medium Enterprises. Get collateral-free business loans with government-backed support.',
    Icon: MSMEIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Education Loan',
    description: 'Invest in your future with our education loans. Cover tuition fees, living expenses, and study materials with flexible repayment terms.',
    Icon: EducationIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'NRI Home Loan',
    description: 'Special home loan options for NRIs. Buy your dream property in India with simplified documentation and competitive interest rates.',
    Icon: NRIIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Affordable Home Loan',
    description: 'Make affordable housing accessible with our special home loan schemes. Lower interest rates and extended tenure for budget-friendly EMIs.',
    Icon: AffordableIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Home Loan Transfer',
    description: 'Switch your existing home loan to us for better rates. Save money with lower EMIs and get a top-up loan if needed.',
    Icon: TransferIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Loan Against Property',
    description: 'Leverage your property value with our LAP options. Get higher loan amounts with longer repayment tenure at attractive interest rates.',
    Icon: PropertyIcon,
    href: '/services/Inquiry'
  },
  {
    title: 'Working Capital CC/OD',
    description: 'Maintain healthy cash flow with our working capital solutions. Access funds as needed with flexible Cash Credit and Overdraft facilities.',
    Icon: WorkingCapitalIcon,
    href: '/services/Inquiry'
  }
]

export default function OurServices() {
  const router = useRouter()

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Choose from our range of financial solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.button
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => router.push(`/services/Inquiry?type=${encodeURIComponent(service.title)}`)}
              className="group relative bg-white rounded-lg border border-gray-100 hover:border-primary/10 hover:shadow transition-all duration-300 cursor-pointer"
            >
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center text-primary">
                  <service.Icon />
                </div>
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors pr-6">
                  {service.title}
                </h3>
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <motion.div
                    whileHover={{ x: 2 }}
                    className="w-6 h-6 flex items-center justify-center text-primary"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
