"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { Spotlight } from "@/components/ui/spotlight"
import CompanyCircle from "@/components/company-circle"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const words = [
    { text: "Building", className: "text-black" },
    { text: "Tomorrow's", className: "text-black" },
    { text: "Infrastructure", className: "text-[#A9111D]" },
    { text: "Today", className: "text-[#A9111D]" },
  ]

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-white">
      {/* Spotlight Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#A9111D" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="white" />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(169,17,29,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Enhanced Company Logo/Name with Actual Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center space-x-6"
              >
                {/* Logo Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex-shrink-0"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25Yrs-USP_new_logo.png-uWfFbZRTZfTh8cPNWi7J542JpcfYv8.png"
                    alt="USP Holdings 25 Years Logo"
                    className="h-24 lg:h-32 w-auto object-contain"
                  />
                </motion.div>

                {/* Text Logo */}
                <div>
                  <h1 className="text-6xl lg:text-7xl font-light text-[#0C141F] mb-2 tracking-tight">USP</h1>
                  <div className="text-3xl lg:text-4xl font-normal text-[#A9111D] tracking-wider">HOLDINGS</div>
                  {/* 25 Years Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-2"
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#A9111D]/20 text-[#A9111D] border border-[#A9111D]/30">
                      <span className="w-2 h-2 bg-[#A9111D] rounded-full mr-2"></span>
                      25 Years of Excellence
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Typewriter Effect */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
                <TypewriterEffectSmooth words={words} className="text-xl lg:text-2xl" />
              </motion.div>

              {/* Professional Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-xl text-[#0C141F]/90 leading-relaxed max-w-2xl font-light">
                  A premier multi-industry corporation with over 25 years of excellence in real estate development,
                  construction, and property management. Trusted by Fortune 500 companies and government agencies
                  worldwide.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-8 pt-6">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-[#A9111D]">$100M+</div>
                    <div className="text-sm text-[#0C141F]/70 uppercase tracking-wide">Portfolio Value</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-[#A9111D]">25+</div>
                    <div className="text-sm text-[#0C141F]/70 uppercase tracking-wide">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-[#A9111D]">Global</div>
                    <div className="text-sm text-[#0C141F]/70 uppercase tracking-wide">Operations</div>
                  </div>
                </div>
              </motion.div>

              {/* Professional CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <button className="group relative px-8 py-4 bg-[#A9111D] text-white font-medium tracking-wide uppercase text-sm hover:bg-[#A9111D]/90 transition-all duration-300">
                  <span className="relative z-10">Explore Our Portfolio</span>
                  <div className="absolute inset-0 bg-[#A9111D]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#A9111D] text-[#0C141F] font-medium tracking-wide uppercase text-sm hover:bg-[#A9111D] hover:text-white transition-all duration-300">
                  Contact Our Team
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive CompanyCircle Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative flex items-center justify-center"
            >
              <CompanyCircle />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <div className="text-[#0C141F]/60 text-xs uppercase tracking-widest mb-4">Scroll to Explore</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-px h-12 bg-gradient-to-b from-[#A9111D] to-transparent"
          />
        </div>
      </motion.div>

      {/* Professional Accreditations/Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 z-20"
      >
        <div className="text-center p-4 rounded-lg border border-[#A9111D]/30 bg-white/80 backdrop-blur-md min-w-[140px] max-w-[180px] flex flex-col justify-center items-center">
          <div className="text-sm text-[#0C141F]/70 uppercase tracking-wide break-words">Certified</div>
          <div className="text-[#A9111D] font-medium break-words">LEED Projects</div>
        </div>
        <div className="text-center p-4 rounded-lg border border-[#A9111D]/30 bg-white/80 backdrop-blur-md min-w-[140px] max-w-[180px] flex flex-col justify-center items-center">
          <div className="text-sm text-[#0C141F]/70 uppercase tracking-wide break-words">ISO</div>
          <div className="text-[#A9111D] font-medium break-words">Quality Standards</div>
        </div>
      </motion.div>
    </section>
  )
}
