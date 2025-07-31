"use client"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TextRevealCard } from "@/components/ui/text-reveal-card"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-white py-20 lg:py-32">
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
            Our <span className="text-[#A9111D] font-normal">Portfolio</span>
          </h2>
          <div className="w-24 h-px bg-[#A9111D] mx-auto mb-8"></div>
          <p className="text-xl text-[#0C141F]/80 max-w-4xl mx-auto leading-relaxed font-light">
            Showcasing our commitment to excellence through landmark developments, innovative construction projects, and
            comprehensive property management solutions across multiple markets.
          </p>
        </motion.div>

        {/* Text Reveal Card */}
        <div className="flex items-center justify-center mb-20">
          <TextRevealCard
            text="Premium Developments"
            revealText="Award-Winning Projects"
            className="border border-[#A9111D]/10 bg-white text-[#0C141F]"
          />
        </div>

        {/* Bento Grid Projects */}
        <BentoGrid className="max-w-7xl mx-auto mb-20">
          <BentoGridItem
            title="Hill East Mixed-Use Development"
            description="$564 million comprehensive development featuring 1,120 apartments, hotel, retail space, and townhomes in Washington, DC."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%2019%2C%201_page-0001%20%281%29.jpg-fLbxKE13eh7VGINMYuSrd63R9GHWn0.jpeg"
                  alt="Hill East Development"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            }
            className="md:col-span-2"
          />

          <BentoGridItem
            title="TRIBECA Luxury Condominiums"
            description="High-end mixed-use condominium project in NoMa with premium finishes and urban amenities."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%2015.pdf.jpg-CdD2witf91dqK9pBjKC6ZcD8r7lrh6.jpeg"
                  alt="TRIBECA Condos"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            }
            className="md:col-span-1"
          />

          <BentoGridItem
            title="U Street Corridor Development"
            description="Revitalizing Washington DC's historic U Street with modern mixed-use developments while preserving cultural heritage."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%206_page-0001.jpg-jnkhxV1u07oxMcAh5zPGeaKavaqflU.jpeg"
                  alt="U Street Development"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            }
            className="md:col-span-1"
          />

          <BentoGridItem
            title="Airport Operations Management"
            description="Comprehensive parking and facility management at major international airports including Dulles, JFK, LaGuardia, and Addis Ababa Bole International."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%2028.pdf.jpg-3IavmfCnrRlWJfOB6MkHme1A5pCrEe.jpeg"
                  alt="Airport Operations"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            }
            className="md:col-span-2"
          />
        </BentoGrid>

        {/* Enhanced Project Statistics with Background Gradient */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "$564M", label: "Largest Single Project", desc: "Hill East Mixed-Use Development" },
            { number: "1,120", label: "Residential Units", desc: "Across Multiple Developments" },
            { number: "Global", label: "Airport Operations", desc: "US & International Markets" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="rounded-[22px] p-1 bg-white dark:bg-zinc-900">
                <div className="bg-white rounded-[20px] p-8 text-center border border-[#A9111D]/10">
                  <div className="text-4xl font-light text-[#A9111D] mb-2">{stat.number}</div>
                  <div className="text-[#0C141F]/90 font-medium mb-1">{stat.label}</div>
                  <div className="text-[#0C141F]/60 text-sm">{stat.desc}</div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
