"use client"

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import loanHeroAnimation from '../../public/animations/Animation.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([])
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight - 64) // subtract 64 for fixed navigation

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight - 64) // subtract 64 for fixed navigation
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, () => ({
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
      }))
    )
  }, [windowWidth, windowHeight])

  return (
    <section id="hero" className="relative pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-light overflow-hidden flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=2000&q=80"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              x: [
                particle.x,
                Math.random() * windowWidth,
                Math.random() * windowWidth,
              ],
              y: [
                particle.y,
                Math.random() * windowHeight,
                Math.random() * windowHeight,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get Your Dream Loan{" "}
                <span className="text-primary">Instantly</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Quick approvals, competitive rates, and a seamless digital experience
                designed just for you.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Apply Now</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-primary rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Calculate EMI</span>
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">10k+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24hrs</p>
                  <p className="text-sm text-gray-600">Quick Approval</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Lottie Animation Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-center justify-center top-10"
          >
            <div className="relative w-full h-full bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-blue-600/5 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lottie
                  animationData={loanHeroAnimation}
                  loop={true}
                  className="w-full h-full"
                  style={{
                    filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'
                  }}
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-4 left-4 w-24 h-24 bg-indigo-100 rounded-full opacity-20 blur-xl" />
                <div className="absolute bottom-4 right-4 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-100 rounded-full opacity-10 blur-2xl" />
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Loan Amount</p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-xl font-bold text-gray-900"
                    >
                      ₹8.5L
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Success Card */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -right-6 z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="text-lg font-bold text-gray-900"
                    >
                      98%
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
