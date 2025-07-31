"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "USP Holdings transformed our vision into reality. Their attention to detail and commitment to excellence is unmatched in the industry.",
    name: "Sarah Chen",
    designation: "CEO, Metropolitan Development",
    src: "/image-023.jpg",
  },
  {
    quote:
      "Working with USP Holdings on our airport operations has been exceptional. Their expertise and reliability are second to none.",
    name: "Michael Rodriguez",
    designation: "Director of Operations, International Airport Authority",
    src: "/image-022.jpg",
  },
  {
    quote:
      "The team at USP Holdings doesn't just build structures; they build communities. Their sustainable approach is exactly what we needed.",
    name: "Emily Johnson",
    designation: "Urban Planning Director, City Council",
    src: "/image-023.jpg",
  },
  {
    quote:
      "From concept to completion, USP Holdings delivered beyond our expectations. Their innovative solutions saved us time and money.",
    name: "David Park",
    designation: "Project Manager, Global Construction Corp",
    src: "/image-022.jpg",
  },
]

const movingTestimonials = [
  {
    quote: "Exceptional quality and professional service delivery.",
    name: "Jennifer Walsh",
    title: "Development Director",
  },
  {
    quote: "USP Holdings sets the standard for excellence in construction.",
    name: "Robert Kim",
    title: "Project Manager",
  },
  {
    quote: "Their attention to detail is remarkable.",
    name: "Maria Santos",
    title: "Architect",
  },
  {
    quote: "Professional, reliable, and innovative solutions.",
    name: "James Wilson",
    title: "Real Estate Executive",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#0C141F] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-6">
            Client <span className="text-[#A9111D] font-normal">Testimonials</span>
          </h2>
          <div className="w-24 h-px bg-[#A9111D] mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Don't just take our word for it. Here's what industry leaders say about working with USP Holdings.
          </p>
        </motion.div>

        {/* Animated Testimonials */}
        <div className="mb-20">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>

        {/* Infinite Moving Cards */}
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={movingTestimonials} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  )
}
