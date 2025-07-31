"use client"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"

export function AboutSection() {
  return (
    <section id="about" className="relative">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 py-4 text-center text-4xl font-medium tracking-tight text-[#0C141F] md:text-7xl"
        >
          About USP Holdings
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-xl text-[#0C141F]/80 max-w-4xl mx-auto mt-8 leading-relaxed font-light"
        >
          Established in 1998, USP Holdings has evolved from a single parking facility into a diversified corporation
          managing over $100 million in premium real estate developments, construction projects, and property management
          operations across the United States and internationally.
        </motion.p>
      </LampContainer>

      {/* Corporate Overview with Real Images */}
      <div className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 border border-[#0C141F]/10 hover:border-[#A9111D]/30 transition-all duration-300">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#A9111D]/10 rounded flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-[#A9111D] rounded"></div>
                  </div>
                  <h3 className="text-2xl font-normal text-[#0C141F] mb-4">Mission Statement</h3>
                </div>

                <blockquote className="text-[#0C141F] font-medium text-lg mb-6 italic border-l-4 border-[#A9111D] pl-4">
                  "To be the leading company delivering services and products with an unwavering commitment to quality
                  and integrity across all industries we serve."
                </blockquote>

                <div className="space-y-3 text-[#0C141F]/70">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Excellence in project execution and client service</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Integrity as our foundational business principle</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Innovation driving sustainable industry solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 border border-[#0C141F]/10 hover:border-[#A9111D]/30 transition-all duration-300">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#A9111D]/10 rounded flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-[#A9111D] rounded"></div>
                  </div>
                  <h3 className="text-2xl font-normal text-[#0C141F] mb-4">Vision Statement</h3>
                </div>

                <blockquote className="text-[#0C141F] font-medium text-lg mb-6 italic border-l-4 border-[#A9111D] pl-4">
                  "To create and build a lasting legacy of empowered communities while leaving environments that are
                  resilient, sustainable, and thriving for future generations."
                </blockquote>

                <div className="space-y-3 text-[#0C141F]/70">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Sustainable development and environmental stewardship</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Community empowerment and economic development</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Legacy building for future generations</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 border border-[#0C141F]/10 hover:border-[#A9111D]/30 transition-all duration-300">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#A9111D]/10 rounded flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-[#A9111D] rounded"></div>
                  </div>
                  <h3 className="text-2xl font-normal text-[#0C141F] mb-4">Core Values</h3>
                </div>

                <div className="space-y-4">
                  {[
                    "Excellence in Execution",
                    "Unwavering Integrity",
                    "Continuous Innovation",
                    "Sustainable Practices",
                    "Community Focus",
                    "Global Perspective",
                  ].map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#A9111D] rounded-full flex-shrink-0"></div>
                      <span className="text-[#0C141F] font-medium text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Corporate Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#0C141F] rounded-lg p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-light text-[#A9111D] mb-2">25+</div>
                <div className="text-white/90 font-medium mb-1">Years of Excellence</div>
                <div className="text-white/60 text-sm">Since 1998</div>
              </div>
              <div>
                <div className="text-4xl font-light text-[#A9111D] mb-2">$100M+</div>
                <div className="text-white/90 font-medium mb-1">Portfolio Value</div>
                <div className="text-white/60 text-sm">Active Projects</div>
              </div>
              <div>
                <div className="text-4xl font-light text-[#A9111D] mb-2">3</div>
                <div className="text-white/90 font-medium mb-1">Business Divisions</div>
                <div className="text-white/60 text-sm">Integrated Solutions</div>
              </div>
              <div>
                <div className="text-4xl font-light text-[#A9111D] mb-2">2</div>
                <div className="text-white/90 font-medium mb-1">Countries</div>
                <div className="text-white/60 text-sm">US & Ethiopia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
