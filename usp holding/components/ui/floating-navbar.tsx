"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItem {
  name: string
  link: string
  icon: React.ReactNode
}

interface FloatingNavProps {
  navItems: NavItem[]
  className?: string
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)

      // Hide/show based on scroll direction
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={cn("fixed top-1/2 transform -translate-y-1/2 right-6 z-50 lg:block hidden", className)}
        >
          <div className="bg-[#0C141F]/90 backdrop-blur-md rounded-full border border-white/10 p-2">
            <nav className="flex flex-col items-center space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.link
                return (
                  <Link key={item.name} href={item.link}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "p-3 rounded-full transition-all duration-300 group relative",
                        isActive ? "bg-[#A9111D] text-white" : "hover:bg-white/10 text-white/70 hover:text-white",
                      )}
                    >
                      {item.icon}

                      {/* Tooltip */}
                      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-[#0C141F] text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap border border-white/10">
                          {item.name}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
