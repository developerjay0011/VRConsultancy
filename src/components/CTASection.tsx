"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const contactInfo = {
  address: '109,110 SHYAM ARCADE NEAR MODI HOSPITAL, KADODARA, SURAT - 394327',
  phone: '+91 98797 99109',
  email: 'support@myvrloan.com'
}

const faqQuestions = [
  {
    question: 'What are the interest rates for different loans?',
    answer: 'Interest rates vary based on loan type and your profile. Personal loans start from 10.49%, Home loans from 8.50%, and Business loans from 11.00% per annum.'
  },
  {
    question: 'How long does the loan approval take?',
    answer: 'Most loans are approved within 24-48 hours after document verification. Some loans may have instant approval based on eligibility.'
  },
  {
    question: 'What documents are required for loan application?',
    answer: 'Basic documents include ID proof, address proof, income documents, and bank statements. Additional documents may be required based on loan type.'
  },
  {
    question: 'Is there any processing fee?',
    answer: 'Processing fees vary by loan type, typically ranging from 0.5% to 2% of the loan amount. Some special offers may have zero processing fees.'
  },
  {
    question: 'Can I get a loan with a low CIBIL score?',
    answer: 'Yes, we have special loan options for customers with low CIBIL scores. However, interest rates may be slightly higher.'
  },
  
  
]

export default function CTASection() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('https://api.myvrloan.com/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Error submitting form')
      }

      setSubmitStatus({
        type: 'success',
        message: data.message || 'Thank you for contacting us. We will get back to you soon.',
      })

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      })
      toast.success(data.message || 'Thank you for contacting us. We will get back to you soon.')
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Error submitting form. Please try again.'
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      })
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-900 to-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Contact Information */}
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase text-white">Contact Us</h3>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-1" />
                  <p>{contactInfo.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  <p>{contactInfo.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5" />
                  <p>{contactInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase text-white">Quick Links</h3>
              <div className="space-y-2 text-sm text-white/80">
                <a href="/about" className="block hover:text-white transition-colors">
                  About Us
                </a>
                <a href="/services" className="block hover:text-white transition-colors">
                  Our Services
                </a>
                <a href="/privacy-policy" className="block hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="block hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqQuestions.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                  <button
                    onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-white/10"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="ml-6">
                      <svg
                        className={`w-6 h-6 transform transition-transform ${
                          selectedQuestion === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {selectedQuestion === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 text-gray-300 border-t border-white/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact" className="md:col-span-5 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/10 text-green-100'
                    : 'bg-red-500/10 text-red-100'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/20 resize-none"
                  placeholder="Please write your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-white text-primary font-semibold py-2 px-6 rounded-lg transition-all ${
                  loading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-white/90'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
