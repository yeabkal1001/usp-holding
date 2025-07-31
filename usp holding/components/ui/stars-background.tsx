"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useEffect, useRef } from "react"

interface StarsBackgroundProps {
  starDensity?: number
  allStarsTwinkle?: boolean
  twinkleProbability?: number
  minTwinkleSpeed?: number
  maxTwinkleSpeed?: number
  className?: string
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const generateStars = (width: number, height: number) => {
      const area = width * height
      const numStars = Math.floor(area * starDensity)
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) : null,
        }
      })
    }

    let stars = generateStars(canvas.width, canvas.height)
    let animationId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const currentTime = Date.now() * 0.001

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${
          star.twinkleSpeed ? 0.5 + Math.abs(Math.sin(currentTime * star.twinkleSpeed)) * 0.5 : star.opacity
        })`
        ctx.fill()
      })

      animationId = requestAnimationFrame(render)
    }

    const handleResize = () => {
      resizeCanvas()
      stars = generateStars(canvas.width, canvas.height)
    }

    resizeCanvas()
    render()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed])

  return <canvas ref={canvasRef} className={cn("fixed inset-0 pointer-events-none", className)} />
}
