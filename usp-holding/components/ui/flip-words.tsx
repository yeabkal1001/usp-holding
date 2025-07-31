"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[]
  duration?: number
  className?: string
}) => {
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, duration)
    return () => clearTimeout(timer)
  }, [index, duration, mounted, words.length])

  if (!mounted) {
    return (
      <span className={cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className)}>
        {words[0]}
      </span>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={words[index]}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(8px)" }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className={cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className)}
      >
        {words[index]}
      </motion.div>
    </AnimatePresence>
  )
}
