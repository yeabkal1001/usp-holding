"use client"
import { motion } from "framer-motion"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

export function LeadershipSection() {
  return (
    <section id="leadership" className="relative bg-white py-20 lg:py-32">
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
            Executive <span className="text-[#A9111D] font-normal">Leadership</span>
          </h2>
          <div className="w-24 h-px bg-[#A9111D] mx-auto mb-8"></div>
          <p className="text-xl text-[#0C141F]/80 max-w-4xl mx-auto leading-relaxed font-light">
            Visionary leaders who have built USP Holdings from a single parking facility into a multi-industry
            powerhouse managing over $100 million in premium developments.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Dr. Henok Tesfaye */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CardContainer className="inter-var w-full max-w-sm">
              <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-[#A9111D]/[0.1] border-[#0C141F]/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-[#0C141F]">
                  Dr. Henok Tesfaye
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-[#A9111D] text-sm max-w-sm mt-2">
                  Chairman & Chief Executive Officer
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-4">
                  <div className="h-60 w-full rounded-xl overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%204.pdf.jpg-Q2NlWgqhwtsbWvMEu2NmW2nI1DlWkF.jpeg"
                      className="h-full w-full object-cover object-center group-hover/card:shadow-xl transition-all duration-300"
                      alt="Dr. Henok Tesfaye"
                    />
                  </div>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-[#0C141F]/70 text-sm mt-4">
                  Began as a parking attendant and expanded USP into a premier parking management firm. Under his
                  leadership, USP now operates parking at major airports including Dulles, JFK, and LaGuardia.
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem translateZ={20} className="px-4 py-2 rounded-xl text-xs font-normal text-[#0C141F]">
                    Founded 1998
                  </CardItem>
                  <CardItem translateZ={20} className="px-4 py-2 rounded-xl bg-[#A9111D] text-white text-xs font-bold">
                    CEO & Chairman
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>

          {/* Yared Tesfaye */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CardContainer className="inter-var w-full max-w-sm">
              <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-[#A9111D]/[0.1] border-[#0C141F]/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-[#0C141F]">
                  Yared Tesfaye
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-[#A9111D] text-sm max-w-sm mt-2">
                  Vice President & Chief Financial Officer
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-4">
                  <div className="h-60 w-full rounded-xl overflow-hidden">
                    <img
                      src="/image-016.jpg"
                      className="h-full w-full object-cover object-center group-hover/card:shadow-xl transition-all duration-300"
                      alt="Yared Tesfaye"
                    />
                  </div>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-[#0C141F]/70 text-sm mt-4">
                  Co-founded U Street Parking, Inc. in 1998 and helped scale USP Holdings. In 2005 he co-founded United
                  Investments and led its expansion into Ethiopia.
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem translateZ={20} className="px-4 py-2 rounded-xl text-xs font-normal text-[#0C141F]">
                    Co-Founder
                  </CardItem>
                  <CardItem translateZ={20} className="px-4 py-2 rounded-xl bg-[#A9111D] text-white text-xs font-bold">
                    VP & CFO
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>

          {/* Ben Tesfaye */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CardContainer className="inter-var w-full max-w-sm">
              <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-[#A9111D]/[0.1] border-[#0C141F]/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-[#0C141F]">
                  Ben Tesfaye
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-[#A9111D] text-sm max-w-sm mt-2">
                  Managing Partner
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-4">
                  <div className="h-60 w-full rounded-xl overflow-hidden">
                    <img
                      src="/image-020.jpg"
                      className="h-full w-full object-cover object-center group-hover/card:shadow-xl transition-all duration-300"
                      alt="Ben Tesfaye"
                    />
                  </div>
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-[#0C141F]/70 text-sm mt-4">
                  Oversees operations and strategy for all USP Holdings units. He co-founded United Investments, DCGCC,
                  and helped establish Potomac Management Group.
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem translateZ={20} className="px-4 py-2 rounded-xl text-xs font-normal text-[#0C141F]">
                    Operations
                  </CardItem>
                  <CardItem translateZ={20} className="px-4 py-2 rounded-xl bg-[#A9111D] text-white text-xs font-bold">
                    Managing Partner
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
