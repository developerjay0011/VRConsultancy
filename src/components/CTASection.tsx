"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

const contactInfo = {
  address: '109,110 SHYAM ARCADE NEAR MODI HOSPITAL, KADODARA, SURAT - 394327',
  phone: '+91 98797 99109',
  email: 'info@vrconsultancy.com'
}

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
]

const loanTypes = {
  primary: [
    { name: 'Business Loan', href: '/services/business-loan' },
    { name: 'Personal Loan', href: '/services/personal-loan' },
    { name: 'Home Loan', href: '/services/home-loan' },
    { name: 'Loan Against Property', href: '/services/loan-against-property' },
  ],
  secondary: [
  ]
}

export default function CTASection() {
  return (
    <div>
      <section id="contact" className="relative py-10 bg-primary text-white">
        {/* <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Apply now and get your loan approved within 24 hours
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors"
                >
                  Apply Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.hash = '#loans'}
                  className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Calculate EMI
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div> */}
  <footer >
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase text-white-900">Contact Us</h3>
              <div className="space-y-3 text-sm text-white-200">
                <div className="flex items-start gap-2">
               
                  <p>{contactInfo.address}</p>
                </div>
                <div className="flex items-center gap-2">
             
                  <p>{contactInfo.phone}</p>
                </div>
                <div className="flex items-center gap-2">
              
                  <p>{contactInfo.email}</p>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644-.069-4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold uppercase text-white-900 mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Loan Types */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold uppercase text-white-900 mb-4">Loans</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  {loanTypes.primary.map((loan) => (
                    <Link
                      key={loan.name}
                      href={loan.href}
                      className="block text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {loan.name}
                    </Link>
                  ))}
                </div>
                
                {/* <div className="space-y-2"> */}
                  
                  {/* {loanTypes.secondary.map((loan) => (
                    <Link
                      key={loan.name}
                      href={loan.href}
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {loan.name}
                    </Link>
                  ))} */}
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* Partners */}
          {/* <div className="mt-16 pt-8 border-t">
            
            <div className="flex flex-wrap items-center justify-between gap-8">
              {[
                { name: 'Startup India', width: 120 },
                { name: 'IAS', width: 100 },
                { name: 'Amazon', width: 80 },
                { name: 'Bucket', width: 80 },
                { name: 'MSME', width: 100 }
              ].map((partner) => (
                <motion.div key={partner.name} whileHover={{ scale: 1.05 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p> 2025 VR Consultancy – All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy & Security Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                General Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
        {/* Floating Chat Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="flex flex-col gap-4">
            <motion.a
              href="https://wa.me/98797 99109"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              <ChatBubbleLeftRightIcon className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="tel:9879799109"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              <PhoneIcon className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </section>

    
    </div>
  )
}
