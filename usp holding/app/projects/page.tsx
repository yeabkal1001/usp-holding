"use client"

import { ProjectsSection } from "@/components/projects-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import { ImagesSlider } from "@/components/ui/images-slider"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

const projectImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%2019%2C%201_page-0001%20%281%29.jpg-fLbxKE13eh7VGINMYuSrd63R9GHWn0.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%2015.pdf.jpg-CdD2witf91dqK9pBjKC6ZcD8r7lrh6.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%206_page-0001.jpg-jnkhxV1u07oxMcAh5zPGeaKavaqflU.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%2028.pdf.jpg-3IavmfCnrRlWJfOB6MkHme1A5pCrEe.jpeg",
]

export default function ProjectsPage() {
  return (
    <div className="relative w-full bg-[#0C141F] overflow-hidden">
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen">
        <ImagesSlider className="h-full" images={projectImages}>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"
            >
              Our Portfolio <br /> of Excellence
            </motion.p>

            <TextGenerateEffect
              words="Discover our landmark developments, innovative construction projects, and comprehensive property management solutions that define industry standards."
              className="text-center text-white max-w-3xl mx-auto text-lg"
            />

            <button className="px-8 py-4 bg-[#A9111D] text-white font-medium tracking-wide uppercase text-sm hover:bg-[#A9111D]/90 transition-all duration-300 mt-8">
              Explore Projects
            </button>
          </motion.div>
        </ImagesSlider>
      </section>

      <Breadcrumb />

      {/* MacBook Scroll Section */}
      <section className="bg-white">
        <ContainerScroll
          titleComponent={
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-light text-[#0C141F] mb-6">
                Project <span className="text-[#A9111D] font-normal">Showcase</span>
              </h1>
              <p className="text-xl text-[#0C141F]/80 max-w-3xl mx-auto leading-relaxed font-light">
                Experience our premium developments through immersive presentations and detailed project insights.
              </p>
            </div>
          }
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%2019%2C%201_page-0001%20%281%29.jpg-fLbxKE13eh7VGINMYuSrd63R9GHWn0.jpeg"
            alt="Hill East Development"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      <ProjectsSection />

      {/* Project Categories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-[#0C141F] mb-6">Project Categories</h2>
            <div className="w-24 h-px bg-[#A9111D] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mixed-Use Developments",
                description: "Comprehensive urban developments combining residential, commercial, and retail spaces.",
                projects: "15+ Projects",
                value: "$564M+",
              },
              {
                title: "Luxury Residential",
                description: "High-end condominiums and residential complexes with premium amenities.",
                projects: "8+ Projects",
                value: "$200M+",
              },
              {
                title: "Commercial Properties",
                description: "Class-A office buildings and commercial spaces designed for modern business needs.",
                projects: "12+ Projects",
                value: "$150M+",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-[#0C141F]/10 rounded-xl p-8 hover:border-[#A9111D]/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-medium text-[#0C141F] mb-4">{category.title}</h3>
                  <p className="text-[#0C141F]/70 mb-6 leading-relaxed">{category.description}</p>

                  <div className="flex justify-between items-center pt-4 border-t border-[#0C141F]/10">
                    <div>
                      <div className="text-sm text-[#A9111D] font-medium">{category.projects}</div>
                      <div className="text-xs text-[#0C141F]/60">Completed</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#A9111D] font-medium">{category.value}</div>
                      <div className="text-xs text-[#0C141F]/60">Total Value</div>
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
