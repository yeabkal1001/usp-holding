"use client"
import { useEffect, useState, useRef } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const [mounted, setMounted] = useState(false)
  const [animationDone, setAnimationDone] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const wordsArray = words.split(" ")

  useEffect(() => {
    setMounted(true)
    setAnimationDone(false)
  }, [words])

  useEffect(() => {
    if (!mounted || !scope.current) return

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
        onComplete: () => setAnimationDone(true),
      },
    )
    // Fallback: ensure text is visible after 2s
    timeoutRef.current = setTimeout(() => setAnimationDone(true), 2000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [scope.current, mounted, animate, filter, duration])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn("text-white", className, animationDone ? "opacity-100" : "opacity-0")}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  if (!mounted) {
    return (
      <div className={cn("font-bold text-white", className)}>
        <div className="mt-4">
          <div className="text-2xl leading-snug tracking-wide">{words}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("font-bold text-white", className)}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  )
}
