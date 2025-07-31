"use client"

import { AboutSection } from "@/components/about-section"
import { GrowthTimelineSection } from "@/components/growth-timeline-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import { Spotlight } from "@/components/ui/spotlight"

export default function AboutPage() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background Effects */}
      <ShootingStars />
      <StarsBackground />

      {/* Enhanced Hero Section for About Page */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spotlight Effects */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#A9111D" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="white" />

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(169,17,29,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Page Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-4">Our Story</div>
                <h1 className="text-6xl lg:text-7xl font-light text-[#0C141F] mb-6 leading-tight">
                  About
                  <span className="text-[#A9111D] font-normal block">USP Holdings</span>
                </h1>
                <div className="w-24 h-px bg-[#A9111D] mb-8"></div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <TextGenerateEffect
                  words="From humble beginnings in 1998 with a single 30-space parking facility, USP Holdings has grown into a premier multi-industry corporation managing over $100 million in developments across the United States and internationally."
                  className="text-xl font-light mb-8 text-[#0C141F]"
                  filter={true}
                  duration={0.5}
                />
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4"
              >
                {[
                  { label: "Founded", value: "1998", desc: "Started with vision and determination" },
                  { label: "Portfolio", value: "$100M+", desc: "Premium developments worldwide" },
                  { label: "Experience", value: "25+ Years", desc: "Industry leadership and innovation" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-[#A9111D] rounded-full flex-shrink-0"></div>
                    <div>
                      <span className="text-[#A9111D] font-medium">{item.label}:</span>
                      <span className="text-[#0C141F] font-medium ml-2">{item.value}</span>
                      <span className="text-[#0C141F]/60 text-sm ml-2">- {item.desc}</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <button className="px-8 py-4 bg-[#A9111D] text-white font-medium tracking-wide uppercase text-sm hover:bg-[#A9111D]/90 transition-all duration-300">
                  Our Mission & Vision
                </button>
                <button className="px-8 py-4 border-2 border-[#A9111D] text-[#0C141F] font-medium tracking-wide uppercase text-sm hover:bg-[#A9111D] hover:text-white transition-all duration-300">
                  Growth Timeline
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                {/* Company History Image */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%204.pdf.jpg-Q2NlWgqhwtsbWvMEu2NmW2nI1DlWkF.jpeg"
                  alt="USP Holdings Leadership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C141F]/60 via-transparent to-transparent"></div>

                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#A9111D]/10 backdrop-blur-sm p-6 rounded-lg border border-[#A9111D]/20">
                    <h3 className="text-[#0C141F] font-medium text-lg mb-2">25 Years of Excellence</h3>
                    <p className="text-[#0C141F]/70 text-sm">
                      Building lasting relationships and creating sustainable communities
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="text-center p-4 border border-[#A9111D]/30 rounded bg-white">
                  <div className="text-2xl text-[#A9111D] mb-2">🏆</div>
                  <div className="text-sm text-[#A9111D] uppercase tracking-wide">Industry</div>
                  <div className="text-[#0C141F] font-medium">Leadership</div>
                </div>
                <div className="text-center p-4 border border-[#A9111D]/30 rounded bg-white">
                  <div className="text-2xl text-[#A9111D] mb-2">🌍</div>
                  <div className="text-sm text-[#A9111D] uppercase tracking-wide">Global</div>
                  <div className="text-[#0C141F] font-medium">Presence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Breadcrumb />

      <AboutSection />
      <GrowthTimelineSection />
      <ScrollToTop />
    </div>
  )
}
