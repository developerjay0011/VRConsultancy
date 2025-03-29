"use client"

import Lottie from "lottie-react"
import spinnerAnimation from "@/assets/spinner.json"

interface LoadingSpinnerProps {
  className?: string
  size?: number
}

export default function LoadingSpinner({ className = "", size = 50 }: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Lottie
        animationData={spinnerAnimation}
        loop={true}
        style={{
          width: size,
          height: size
        }}
      />
    </div>
  )
}
