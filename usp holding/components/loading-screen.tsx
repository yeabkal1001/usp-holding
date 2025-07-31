"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-[#0C141F] flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25Yrs-USP_new_logo.png-uWfFbZRTZfTh8cPNWi7J542JpcfYv8.png"
                alt="USP Holdings Logo"
                className="h-24 w-auto object-contain mx-auto"
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-light text-white mb-2">USP</h1>
              <div className="text-2xl font-normal text-[#A9111D]">HOLDINGS</div>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                  }}
                  className="w-3 h-3 bg-[#A9111D] rounded-full"
                />
              ))}
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-white/60 text-sm mt-6"
            >
              Building Excellence Since 1998
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
