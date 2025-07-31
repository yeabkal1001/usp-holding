"use client"

import { ServicesSection } from "@/components/services-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"
import { FlipWords } from "@/components/ui/flip-words"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const words = ["Development", "Construction", "Management", "Excellence"]

export default function ServicesPage() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Hero Section for Services */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-center text-4xl font-medium tracking-tight md:text-7xl"
        >
          <span className="text-[#0C141F]">Our </span>
          <FlipWords words={words} className="text-[#0C141F] inline-block" />
          <br />
          <span className="text-[#0C141F]">Services</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-xl text-[#0C141F]/80 max-w-4xl mx-auto mt-8 leading-relaxed font-light"
        >
          Three specialized divisions working in perfect harmony to deliver comprehensive solutions across real estate
          development, construction excellence, and property management.
        </motion.p>
      </LampContainer>

      {/* Enhanced Services Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-[#0C141F] mb-6">Service Excellence</h2>
            <div className="w-24 h-px bg-[#A9111D] mx-auto mb-8"></div>
          </motion.div>

          <BentoGrid className="max-w-7xl mx-auto">
            <BentoGridItem
              title="Real Estate Development"
              description="Premium luxury developments with sustainable design principles and innovative architectural solutions."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#A9111D]/20 to-[#0C141F]/20 items-center justify-center">
                  <div className="text-6xl">🏢</div>
                </div>
              }
              className="md:col-span-2"
            />

            <BentoGridItem
              title="Construction Excellence"
              description="Full-service construction with LEED certification and on-time delivery guarantee."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#0C141F]/20 to-[#A9111D]/20 items-center justify-center">
                  <div className="text-6xl">🏗️</div>
                </div>
              }
              className="md:col-span-1"
            />

            <BentoGridItem
              title="Property Management"
              description="Comprehensive facility management including airport operations and security services."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#A9111D]/20 to-[#0C141F]/20 items-center justify-center">
                  <div className="text-6xl">🏨</div>
                </div>
              }
              className="md:col-span-1"
            />

            <BentoGridItem
              title="Global Operations"
              description="International presence with operations in the United States and Ethiopia."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#A9111D]/20 to-[#0C141F]/20 items-center justify-center">
                  <div className="text-6xl">🌍</div>
                </div>
              }
              className="md:col-span-2"
            />
          </BentoGrid>
        </div>
      </section>

      <ServicesSection />

      {/* Service Statistics */}
      <section className="bg-[#0C141F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "100+", label: "Projects Completed", desc: "Across All Divisions" },
              { number: "25+", label: "Years Experience", desc: "Industry Leadership" },
              { number: "Global", label: "Market Presence", desc: "US & International" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BackgroundGradient className="rounded-[22px] p-1">
                  <div className="bg-[#0C141F] rounded-[20px] p-8 text-center">
                    <div className="text-4xl font-light text-[#A9111D] mb-2">{stat.number}</div>
                    <div className="text-white/90 font-medium mb-1">{stat.label}</div>
                    <div className="text-white/60 text-sm">{stat.desc}</div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Breadcrumb />

      <ScrollToTop />
    </div>
  )
}
