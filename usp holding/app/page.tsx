"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { GrowthTimelineSection } from "@/components/growth-timeline-section"
import { ProjectsSection } from "@/components/projects-section"
import { LeadershipSection } from "@/components/leadership-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

export default function Home() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background Effects */}
      <ShootingStars />
      <StarsBackground />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GrowthTimelineSection />
      <ProjectsSection />
      <LeadershipSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
