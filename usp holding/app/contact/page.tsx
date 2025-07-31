"use client"

import type React from "react"

import { ContactSection } from "@/components/contact-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import { WavyBackground } from "@/components/ui/wavy-background"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { Meteors } from "@/components/ui/meteors"
import { useState } from "react"

const placeholders = [
  "What's your project vision?",
  "Tell us about your development needs",
  "How can we help you succeed?",
  "What's your timeline for the project?",
  "Describe your ideal partnership",
]

export default function ContactPage() {
  const [input, setInput] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Hero Section with Wavy Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <WavyBackground
          className="max-w-4xl mx-auto pb-40"
          colors={["#A9111D", "#FFFFFF", "#A9111D", "#FFFFFF"]}
          waveWidth={50}
          backgroundFill="#FFFFFF"
          blur={10}
          speed="slow"
          waveOpacity={0.5}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-6xl lg:text-8xl font-light text-[#0C141F] mb-8">
              Let's Build
              <span className="text-[#A9111D] font-normal block">Together</span>
            </h1>

            <p className="text-xl lg:text-2xl text-[#0C141F]/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Ready to transform your vision into reality? Connect with USP Holdings' executive team to discuss your
              next premium development project.
            </p>

            <div className="max-w-xl mx-auto mb-8">
              <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white text-[#0C141F] flex items-center space-x-2"
              >
                <span>📞 Schedule a Call</span>
              </HoverBorderGradient>

              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white text-[#0C141F] flex items-center space-x-2"
              >
                <span>📧 Send Message</span>
              </HoverBorderGradient>
            </div>
          </motion.div>
        </WavyBackground>
      </section>

      <Breadcrumb />

      {/* Contact Methods */}
      <section className="bg-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-[#0C141F] mb-6">
              Multiple Ways to <span className="text-[#A9111D] font-normal">Connect</span>
            </h2>
            <div className="w-24 h-px bg-[#A9111D] mx-auto mb-8"></div>
            <p className="text-xl text-[#0C141F]/80 max-w-3xl mx-auto leading-relaxed font-light">
              Choose the communication method that works best for you. Our team is ready to discuss your project needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Executive Office",
                method: "Direct Phone",
                contact: "+1 (202) 555-0100",
                description: "Speak directly with our leadership team",
                icon: "📞",
                color: "from-[#A9111D] to-[#8B0E18]",
              },
              {
                title: "Business Development",
                method: "Email",
                contact: "partnerships@uspholdings.com",
                description: "New partnerships and collaborations",
                icon: "📧",
                color: "from-[#0C141F] to-[#1A2332]",
              },
              {
                title: "Project Inquiries",
                method: "Online Form",
                contact: "Submit Details",
                description: "Detailed project consultation requests",
                icon: "📋",
                color: "from-[#A9111D] to-[#8B0E18]",
              },
              {
                title: "Media Relations",
                method: "Press Contact",
                contact: "media@uspholdings.com",
                description: "Press inquiries and media requests",
                icon: "📰",
                color: "from-[#0C141F] to-[#1A2332]",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden bg-white border border-[#0C141F]/10 rounded-xl p-6 hover:border-[#A9111D]/30 hover:shadow-xl transition-all duration-300">
                  <Meteors number={20} />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-xl">{contact.icon}</span>
                    </div>

                    <h3 className="text-lg font-medium text-[#0C141F] mb-2">{contact.title}</h3>
                    <div className="text-sm text-[#A9111D] font-medium mb-2">{contact.method}</div>
                    <div className="text-[#0C141F] font-medium mb-3">{contact.contact}</div>
                    <p className="text-[#0C141F]/70 text-sm">{contact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Office Locations */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-[#0C141F] mb-6">Global Presence</h2>
            <div className="w-24 h-px bg-[#A9111D] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Corporate Headquarters",
                location: "Washington, DC",
                address: "United States",
                description: "Main operations center overseeing all US-based projects and strategic initiatives.",
                timezone: "EST (UTC-5)",
                services: ["Executive Leadership", "Strategic Planning", "US Operations"],
              },
              {
                title: "International Office",
                location: "Addis Ababa",
                address: "Ethiopia",
                description: "Regional headquarters managing African operations and international expansion.",
                timezone: "EAT (UTC+3)",
                services: ["International Projects", "Regional Development", "Global Partnerships"],
              },
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-[#0C141F]/10 rounded-xl p-8 hover:border-[#A9111D]/30 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-medium text-[#0C141F] mb-2">{office.title}</h3>
                      <div className="text-[#A9111D] font-medium text-lg">{office.location}</div>
                      <div className="text-[#0C141F]/70">{office.address}</div>
                    </div>
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {index === 0 ? "🏢" : "🌍"}
                    </div>
                  </div>

                  <p className="text-[#0C141F]/80 mb-6 leading-relaxed">{office.description}</p>

                  <div className="mb-6">
                    <div className="text-sm text-[#A9111D] font-medium mb-1">Business Hours</div>
                    <div className="text-[#0C141F]/70 text-sm">{office.timezone}</div>
                  </div>

                  <div>
                    <div className="text-sm text-[#A9111D] font-medium mb-3">Key Services</div>
                    <div className="flex flex-wrap gap-2">
                      {office.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1 bg-[#A9111D]/10 text-[#A9111D] text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
