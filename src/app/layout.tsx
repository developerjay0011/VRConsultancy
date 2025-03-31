import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import Navigation from '@/components/Navigation'
import FloatingButtons from '@/components/FloatingButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VR Consultancy - Your Trusted Loan Partner',
  description: 'Get hassle-free loans with VR Consultancy. Personal loans, business loans, and more with quick approval and competitive rates.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <FloatingButtons />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              style: {
                background: '#059669',
              },
            },
            error: {
              style: {
                background: '#DC2626',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
