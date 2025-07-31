"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building, Mail, Phone, MapPin, Globe, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-[#0C141F] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25Yrs-USP_new_logo.png-uWfFbZRTZfTh8cPNWi7J542JpcfYv8.png"
                alt="USP Holdings Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="text-xl font-light text-[#0C141F]">USP</div>
                <div className="text-[#A9111D] font-normal">HOLDINGS</div>
              </div>
            </div>

            <p className="text-[#0C141F]/70 leading-relaxed">
              Building tomorrow's infrastructure today. 25+ years of excellence in real estate development,
              construction, and property management.
            </p>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#A9111D] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#A9111D] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Portfolio", href: "/projects" },
                { name: "Leadership", href: "/leadership" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#0C141F]/70 hover:text-[#A9111D] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-[#A9111D] rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                "Real Estate Development",
                "Construction Services",
                "Property Management",
                "Airport Operations",
                "International Projects",
              ].map((service) => (
                <li key={service}>
                  <div className="text-[#0C141F]/70 flex items-center space-x-2">
                    <Building className="w-3 h-3 text-[#A9111D]" />
                    <span>{service}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#A9111D] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#0C141F]/90 font-medium">Headquarters</div>
                  <div className="text-[#0C141F]/70 text-sm">Washington, DC, USA</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-[#A9111D] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#0C141F]/90 font-medium">International</div>
                  <div className="text-[#0C141F]/70 text-sm">Addis Ababa, Ethiopia</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#A9111D]" />
                <span className="text-[#0C141F]/70">+1 (202) 555-0100</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#A9111D]" />
                <span className="text-[#0C141F]/70">info@uspholdings.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-[#0C141F]/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#0C141F]/60 text-sm">
              © 2024 USP Holdings. All rights reserved. | 25 Years of Excellence
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-[#0C141F]/60 hover:text-[#A9111D] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#0C141F]/60 hover:text-[#A9111D] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-[#0C141F]/60 hover:text-[#A9111D] transition-colors duration-300">
                Careers
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
