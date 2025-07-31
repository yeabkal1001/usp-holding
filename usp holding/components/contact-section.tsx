"use client"
import { motion } from "framer-motion"
import { Globe } from "@/components/ui/globe"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen bg-white py-20 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(169,17,29,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-light text-[#0C141F] mb-6">
            Partner with <span className="text-[#A9111D] font-normal">Excellence</span>
          </h2>
          <div className="w-24 h-px bg-[#A9111D] mx-auto mb-8"></div>
          <TextGenerateEffect
            words="Transform your vision into reality with USP Holdings' 25+ years of proven expertise in premium development, construction excellence, and comprehensive property management solutions."
            className="text-xl text-[#0C141F] max-w-4xl mx-auto leading-relaxed font-light"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Global Presence & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Globe Component */}
            <div className="h-80 w-full mb-12 rounded-2xl overflow-hidden border border-[#A9111D]/20">
              <Globe className="w-full h-full" />
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-6">
              {[
                {
                  title: "Corporate Headquarters",
                  primary: "Washington, DC",
                  secondary: "United States",
                  icon: "🏢",
                },
                {
                  title: "International Operations",
                  primary: "Addis Ababa, Ethiopia",
                  secondary: "Global Expansion",
                  icon: "🌍",
                },
                {
                  title: "Business Development",
                  primary: "info@uspholdings.com",
                  secondary: "New Partnerships",
                  icon: "📧",
                },
                {
                  title: "Executive Office",
                  primary: "+1 (202) 555-0100",
                  secondary: "Direct Communication",
                  icon: "📞",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white border border-[#A9111D]/20 rounded-xl p-6 hover:border-[#A9111D]/40 transition-all duration-300 group-hover:bg-[#A9111D]/5">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{contact.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-1">
                          {contact.title}
                        </div>
                        <div className="text-lg font-medium text-[#0C141F] mb-1">{contact.primary}</div>
                        <div className="text-[#0C141F]/60 text-sm">{contact.secondary}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Professional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white border border-[#A9111D]/20 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-[#0C141F] mb-2">Initiate Partnership</h3>
                <p className="text-[#0C141F]/70 text-sm">
                  Connect with our executive team to discuss your next premium development project.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#0C141F]/90 text-sm font-medium mb-3">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#A9111D]/5 border border-[#A9111D]/30 rounded-lg text-[#0C141F] placeholder-[#0C141F]/40 focus:outline-none focus:border-[#A9111D] focus:bg-[#A9111D]/10 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0C141F]/90 text-sm font-medium mb-3">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#A9111D]/5 border border-[#A9111D]/30 rounded-lg text-[#0C141F] placeholder-[#0C141F]/40 focus:outline-none focus:border-[#A9111D] focus:bg-[#A9111D]/10 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0C141F]/90 text-sm font-medium mb-3">Corporate Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#A9111D]/5 border border-[#A9111D]/30 rounded-lg text-[#0C141F] placeholder-[#0C141F]/40 focus:outline-none focus:border-[#A9111D] focus:bg-[#A9111D]/10 transition-all duration-300"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div>
                  <label className="block text-[#0C141F]/90 text-sm font-medium mb-3">Organization *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#A9111D]/5 border border-[#A9111D]/30 rounded-lg text-[#0C141F] placeholder-[#0C141F]/40 focus:outline-none focus:border-[#A9111D] focus:bg-[#A9111D]/10 transition-all duration-300"
                    placeholder="Your Organization"
                  />
                </div>

                <div>
                  <label className="block text-[#0C141F]/90 text-sm font-medium mb-3">Service Interest *</label>
                  <select className="w-full px-4 py-3 bg-[#A9111D]/5 border border-[#A9111D]/30 rounded-lg text-[#0C141F] focus:outline-none focus:border-[#A9111D] focus:bg-[#A9111D]/10 transition-all duration-300">
                    <option value="" className="bg-white text-[#0C141F]">
                      Select Service Area
                    </option>
                    <option value="real-estate" className="bg-white text-[#0C141F]">
                      Real Estate Development
                    </option>
                    <option value="construction" className="bg-white text-[#0C141F]">
                      Construction Services
                    </option>
                    <option value="property-management" className="bg-white text-[#0C141F]">
                      Property Management
                    </option>
                    <option value="consultation" className="bg-white text-[#0C141F]">
                      Strategic Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#0C141F]/90 text-sm font-medium mb-3">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-[#A9111D]/5 border border-[#A9111D]/30 rounded-lg text-[#0C141F] placeholder-[#0C141F]/40 focus:outline-none focus:border-[#A9111D] focus:bg-[#A9111D]/10 transition-all duration-300 resize-none"
                    placeholder="Describe your project scope, timeline, and specific requirements..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#A9111D] hover:bg-[#A9111D]/90 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Submit Partnership Inquiry</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-[#A9111D]/30 hover:border-[#A9111D] text-[#0C141F] py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>📞</span>
                <span className="text-sm font-medium">Direct Call</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-[#A9111D]/30 hover:border-[#A9111D] text-[#0C141F] py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>📧</span>
                <span className="text-sm font-medium">Email Direct</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Professional Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white border border-[#A9111D]/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-[#0C141F] mb-4">Ready to Begin Your Next Project?</h3>
            <p className="text-[#0C141F]/70 mb-6">
              Join Fortune 500 companies and government agencies who trust USP Holdings for their most critical
              developments.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#A9111D] hover:bg-[#A9111D]/90 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-3 mx-auto"
            >
              <span>🚀 Schedule Executive Consultation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
