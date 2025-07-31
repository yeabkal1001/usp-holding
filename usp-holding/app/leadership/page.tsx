"use client"

import { LeadershipSection } from "@/components/leadership-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { CardStack } from "@/components/ui/card-stack"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import { Spotlight } from "@/components/ui/spotlight"

const leadershipTestimonials = [
  {
    quote: "Dr. Henok's vision and leadership have transformed USP Holdings into an industry powerhouse.",
    name: "Board of Directors",
    designation: "USP Holdings",
    src: "/image-023.jpg",
  },
  {
    quote: "Under Yared's financial stewardship, we've achieved unprecedented growth and stability.",
    name: "Investment Partners",
    designation: "Strategic Investors",
    src: "/image-022.jpg",
  },
  {
    quote: "Ben's operational excellence ensures every project exceeds client expectations.",
    name: "Project Stakeholders",
    designation: "Development Partners",
    src: "/image-023.jpg",
  },
]

const leadershipCards = [
  {
    id: 0,
    name: "Dr. Henok Tesfaye",
    designation: "Chairman & CEO",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-200">
          Visionary leader who built USP Holdings from a single parking facility into a multi-industry powerhouse.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-[#A9111D]/10 text-[#A9111D] text-xs rounded">Founder</span>
          <span className="px-2 py-1 bg-[#A9111D]/10 text-[#A9111D] text-xs rounded">25+ Years</span>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    name: "Yared Tesfaye",
    designation: "VP & CFO",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-200">
          Financial strategist who co-founded United Investments and led international expansion.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-[#A9111D]/10 text-[#A9111D] text-xs rounded">Co-Founder</span>
          <span className="px-2 py-1 bg-[#A9111D]/10 text-[#A9111D] text-xs rounded">Global Expansion</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Ben Tesfaye",
    designation: "Managing Partner",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-200">
          Operations expert overseeing strategy and execution across all USP Holdings divisions.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-[#A9111D]/10 text-[#A9111D] text-xs rounded">Operations</span>
          <span className="px-2 py-1 bg-[#A9111D]/10 text-[#A9111D] text-xs rounded">Strategy</span>
        </div>
      </div>
    ),
  },
]

export default function LeadershipPage() {
  return (
    <div className="relative w-full bg-[#0C141F] overflow-hidden">
      {/* Background Effects */}
      <ShootingStars />
      <StarsBackground />

      {/* Enhanced Hero Section for Leadership */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spotlight Effects */}
        <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#A9111D" />
        <Spotlight className="top-10 right-full h-[80vh] w-[50vw]" fill="white" />

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(169,17,29,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                {/* Leadership Team Image */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page%204.pdf.jpg-Q2NlWgqhwtsbWvMEu2NmW2nI1DlWkF.jpeg"
                  alt="USP Holdings Executive Leadership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C141F]/60 via-transparent to-transparent"></div>

                {/* Leadership Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#0C141F]/80 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                    <h3 className="text-white font-medium text-lg mb-2">Executive Leadership Team</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Decades of combined experience driving innovation and growth
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-[#A9111D] font-bold">75+</div>
                        <div className="text-white/60 text-xs">Years Combined</div>
                      </div>
                      <div>
                        <div className="text-[#A9111D] font-bold">3</div>
                        <div className="text-white/60 text-xs">Divisions</div>
                      </div>
                      <div>
                        <div className="text-[#A9111D] font-bold">Global</div>
                        <div className="text-white/60 text-xs">Vision</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Qualities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-8 grid grid-cols-3 gap-4"
              >
                <div className="text-center p-4 border border-white/20 rounded bg-white/5">
                  <div className="text-2xl text-[#A9111D] mb-2">🎯</div>
                  <div className="text-white/70 text-xs uppercase">Visionary</div>
                </div>
                <div className="text-center p-4 border border-white/20 rounded bg-white/5">
                  <div className="text-2xl text-[#A9111D] mb-2">🤝</div>
                  <div className="text-white/70 text-xs uppercase">Collaborative</div>
                </div>
                <div className="text-center p-4 border border-white/20 rounded bg-white/5">
                  <div className="text-2xl text-[#A9111D] mb-2">🌱</div>
                  <div className="text-white/70 text-xs uppercase">Sustainable</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8 order-1 lg:order-2"
            >
              {/* Page Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-4">Meet Our Team</div>
                <h1 className="text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                  Executive
                  <span className="text-[#A9111D] font-normal block">Leadership</span>
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
                  words="Meet the visionary leaders who transformed a single parking facility into a global multi-industry powerhouse. Our executive team combines decades of experience with innovative thinking to drive USP Holdings' continued success."
                  className="text-xl text-white leading-relaxed font-light mb-8"
                />
              </motion.div>

              {/* Leadership Principles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4"
              >
                {[
                  { principle: "Visionary Leadership", desc: "Anticipating market trends and future opportunities" },
                  { principle: "Collaborative Excellence", desc: "Working together to achieve collective success" },
                  { principle: "Sustainable Growth", desc: "Long-term value creation for all stakeholders" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium mb-1">{item.principle}</div>
                      <div className="text-white/60 text-sm">{item.desc}</div>
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
                  Meet Our Team
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-[#0C141F] transition-all duration-300">
                  Leadership Philosophy
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Breadcrumb />

      {/* Leadership Cards Stack */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-[#0C141F] mb-6">
                Leadership <span className="text-[#A9111D] font-normal">Excellence</span>
              </h2>
              <div className="w-24 h-px bg-[#A9111D] mb-8"></div>
              <p className="text-xl text-[#0C141F]/80 leading-relaxed font-light mb-8">
                Our executive team combines decades of industry experience with innovative vision to drive USP Holdings'
                continued growth and success.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Proven Track Record", desc: "25+ years of consistent growth and industry leadership" },
                  { title: "Global Vision", desc: "International expansion and strategic market positioning" },
                  { title: "Innovation Focus", desc: "Sustainable development and cutting-edge solutions" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-[#0C141F] mb-1">{item.title}</div>
                      <div className="text-[#0C141F]/70 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <CardStack items={leadershipCards} />
            </motion.div>
          </div>
        </div>
      </section>

      <LeadershipSection />

      {/* Leadership Testimonials */}
      <section className="bg-[#0C141F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-white mb-6">
              Leadership <span className="text-[#A9111D] font-normal">Recognition</span>
            </h2>
            <div className="w-24 h-px bg-[#A9111D] mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              What industry leaders and partners say about our executive team's vision and leadership.
            </p>
          </motion.div>

          <AnimatedTestimonials testimonials={leadershipTestimonials} />
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-[#0C141F] mb-6">Our Leadership Philosophy</h2>
            <div className="w-24 h-px bg-[#A9111D] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Visionary Thinking",
                description:
                  "We anticipate market trends and position USP Holdings for future opportunities while maintaining our core values.",
                icon: "🎯",
              },
              {
                title: "Collaborative Leadership",
                description:
                  "Our leadership team works in synergy, leveraging individual strengths to achieve collective success.",
                icon: "🤝",
              },
              {
                title: "Sustainable Growth",
                description:
                  "We prioritize long-term value creation over short-term gains, ensuring lasting impact for all stakeholders.",
                icon: "🌱",
              },
            ].map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white border border-[#0C141F]/10 rounded-xl p-8 hover:border-[#A9111D]/30 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {philosophy.icon}
                  </div>
                  <h3 className="text-xl font-medium text-[#0C141F] mb-4">{philosophy.title}</h3>
                  <p className="text-[#0C141F]/70 leading-relaxed">{philosophy.description}</p>
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
