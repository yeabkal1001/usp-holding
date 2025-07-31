"use client"
import { motion } from "framer-motion"

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-light text-[#0C141F] mb-6">
            Our <span className="text-[#A9111D] font-normal">Business Divisions</span>
          </h2>
          <div className="w-24 h-px bg-[#A9111D] mx-auto mb-8"></div>
          <p className="text-xl text-[#0C141F]/80 max-w-4xl mx-auto leading-relaxed font-light">
            Three specialized companies operating in perfect synergy to deliver comprehensive, integrated solutions
            across real estate development, construction, and property management.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {/* United Investments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-2">
                  Real Estate Development
                </div>
                <h3 className="text-4xl font-light text-[#0C141F] mb-4">United Investments</h3>
                <div className="w-16 h-px bg-[#A9111D] mb-6"></div>
              </div>

              <p className="text-lg text-[#0C141F]/80 leading-relaxed mb-8 font-light">
                Premier real estate development company managing over $100 million in luxury projects including Class-A
                office buildings, upscale condominiums, and innovative mixed-use communities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">Hill East Mixed-Use Development</div>
                    <div className="text-[#0C141F]/60 text-sm">$564M comprehensive development project</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">TRIBECA Luxury Condominiums</div>
                    <div className="text-[#0C141F]/60 text-sm">High-end residential development in NoMa</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">International Expansion</div>
                    <div className="text-[#0C141F]/60 text-sm">100+ unit development project in Ethiopia</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Luxury Development", "Mixed-Use Projects", "International Markets", "Sustainable Design"].map(
                  (tag) => (
                    <span key={tag} className="px-4 py-2 bg-[#0C141F]/5 text-[#0C141F] text-sm font-medium rounded">
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-80 bg-gradient-to-br from-[#A9111D]/10 to-[#0C141F]/5 rounded-lg flex items-center justify-center">
                <img
                  src="/usp-investment.png"
                  alt="United Investments Logo"
                  className="w-32 h-32 object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* DC General Construction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="h-80 bg-gradient-to-br from-[#0C141F]/10 to-[#A9111D]/5 rounded-lg flex items-center justify-center">
                <img
                  src="/dcgcc.png"
                  alt="DC General Construction Logo"
                  className="w-32 h-32 object-contain drop-shadow-xl"
                />
              </div>
            </div>

            <div>
              <div className="mb-6">
                <div className="text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-2">
                  Construction Services
                </div>
                <h3 className="text-4xl font-light text-[#0C141F] mb-4">DC General Construction</h3>
                <div className="w-16 h-px bg-[#A9111D] mb-6"></div>
              </div>

              <p className="text-lg text-[#0C141F]/80 leading-relaxed mb-8 font-light">
                Full-service construction company delivering exceptional quality projects on time and within budget,
                with a strong commitment to sustainable building practices and innovative construction methodologies.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">The Westin BWI Airport Hotel</div>
                    <div className="text-[#0C141F]/60 text-sm">260-room upper-upscale hotel project</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">LEED Certified Projects</div>
                    <div className="text-[#0C141F]/60 text-sm">Sustainable construction practices</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">Commercial & Residential</div>
                    <div className="text-[#0C141F]/60 text-sm">Diverse project portfolio</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Quality Assurance", "On-Time Delivery", "LEED Certified", "Innovation"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#0C141F]/5 text-[#0C141F] text-sm font-medium rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Potomac Management Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-2">
                  Property Management
                </div>
                <h3 className="text-4xl font-light text-[#0C141F] mb-4">Potomac Management Group</h3>
                <div className="w-16 h-px bg-[#A9111D] mb-6"></div>
              </div>

              <p className="text-lg text-[#0C141F]/80 leading-relaxed mb-8 font-light">
                Comprehensive property management services including parking operations at major international airports,
                transportation logistics, security services, and complete facility management solutions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">Major Airport Operations</div>
                    <div className="text-[#0C141F]/60 text-sm">Dulles, JFK, LaGuardia, BWI management</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">International Presence</div>
                    <div className="text-[#0C141F]/60 text-sm">Addis Ababa Bole International Airport</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F]">Comprehensive Services</div>
                    <div className="text-[#0C141F]/60 text-sm">Transportation, security, janitorial solutions</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Global Operations", "Airport Management", "Security Services", "Logistics"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#0C141F]/5 text-[#0C141F] text-sm font-medium rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-80 bg-gradient-to-br from-[#A9111D]/10 to-[#0C141F]/5 rounded-lg flex items-center justify-center">
                <img
                  src="/potomac.png"
                  alt="Potomac Management Group Logo"
                  className="w-32 h-32 object-contain drop-shadow-xl"
                  onError={(e) => { e.currentTarget.src = '/8.png'; }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
