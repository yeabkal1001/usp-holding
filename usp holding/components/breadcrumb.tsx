"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  const breadcrumbItems = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const name = segment.charAt(0).toUpperCase() + segment.slice(1)
      return { name, href }
    }),
  ]

  if (pathname === "/") return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-sm border-b border-white/10 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 text-white/40 mx-2" />}

              {index === breadcrumbItems.length - 1 ? (
                <span className="text-[#A9111D] font-medium flex items-center space-x-1">
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.name}</span>
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center space-x-1"
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  )
}
