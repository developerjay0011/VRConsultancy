"use client"

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import CTASection from '@/components/CTASection'

export default function PrivacyPolicy() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white h-[40vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Your privacy is important to us. Learn how we protect and manage your information.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 mb-4">
                  This Privacy Policy outlines how VR Consultancy (referred to as &quot;We,&quot; &quot;Our,&quot; or &quot;Us&quot; as appropriate) manages the collection, use, processing, storage, retrieval, disclosure, or transfer of your information.
                </p>
                <p className="text-gray-600">
                  This includes personal information and sensitive personal data or information that VR Consultancy may receive when you access, interact with, or use our website, associated Android and iOS mobile applications, mobile site, or any other medium, including our call-center facility, through which we offer Our Services.
                </p>
              </motion.div>

              {/* Information We Collect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  To provide you with our Services, VR Consultancy and authorized third parties need to collect various data and information from you with your prior explicit consent. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Personal identification information (Name, email address, phone number, etc.)</li>
                  <li>Financial information (Income details, bank statements, etc.)</li>
                  <li>Employment information</li>
                  <li>KYC documents</li>
                  <li>Device and usage information when you use our website or mobile apps</li>
                </ul>
              </motion.div>

              {/* How We Use Your Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Process your loan applications</li>
                  <li>Verify your identity and eligibility</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our products and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </motion.div>

              {/* Data Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-gray-600">
                  However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Receive your data in a structured format</li>
                  <li>Object to certain data processing activities</li>
                </ul>
              </motion.div>

              {/* Contact Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>VR Consultancy</strong><br />
                    Email: info@vrconsultancy.com<br />
                    Phone: +91 98797 99109<br />
                    Address: 123 Main Street, City, State, PIN Code
                  </p>
                </div>
              </motion.div>

              {/* Updates to Privacy Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date and the updated version will be effective as soon as it is accessible.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
