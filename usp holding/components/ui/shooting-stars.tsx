"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useEffect, useState } from "react"

interface ShootingStarsProps {
  minSpeed?: number
  maxSpeed?: number
  minDelay?: number
  maxDelay?: number
  starColor?: string
  trailColor?: string
  starWidth?: number
  starHeight?: number
  className?: string
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [stars, setStars] = useState<any[]>([])

  useEffect(() => {
    const createStar = () => {
      const star = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: 0,
        angle: Math.random() * 90 + 45,
        scale: Math.random() * 1 + 0.3,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: Math.random() * window.innerWidth + window.innerWidth,
      }
      return star
    }

    const animateStar = (star: any) => {
      const toX = star.x + Math.cos((star.angle * Math.PI) / 180) * star.distance
      const toY = star.y + Math.sin((star.angle * Math.PI) / 180) * star.distance

      star.element.style.setProperty("--x", `${toX}px`)
      star.element.style.setProperty("--y", `${toY}px`)
    }

    const createStarElement = (star: any) => {
      const starEl = document.createElement("div")
      starEl.className = "absolute z-[2]"
      starEl.style.left = star.x + "px"
      starEl.style.top = star.y + "px"
      starEl.style.opacity = "1"
      starEl.style.transform = `rotate(${star.angle}deg) translateX(0px) translateY(0px) scale(${star.scale})`

      const tailEl = document.createElement("div")
      tailEl.className = "absolute top-1/2 right-0 h-[2px] bg-gradient-to-l from-white to-transparent rounded-full"
      tailEl.style.width = starWidth + "px"
      tailEl.style.height = starHeight + "px"
      tailEl.style.background = `linear-gradient(to left, ${starColor}, transparent)`

      starEl.appendChild(tailEl)

      const shootingAnimation = starEl.animate(
        [
          {
            transform: `rotate(${star.angle}deg) translateX(0px) translateY(0px) scale(${star.scale})`,
            opacity: 0,
          },
          {
            transform: `rotate(${star.angle}deg) translateX(${star.distance / 10}px) translateY(${
              star.distance / 10
            }px) scale(${star.scale})`,
            opacity: 1,
          },
          {
            transform: `rotate(${star.angle}deg) translateX(${star.distance}px) translateY(${star.distance}px) scale(0)`,
            opacity: 0,
          },
        ],
        {
          duration: (star.distance / star.speed) * 1000,
          easing: "linear",
        },
      )

      shootingAnimation.onfinish = () => {
        starEl.remove()
      }

      return starEl
    }

    const spawnStar = () => {
      const star = createStar()
      const starElement = createStarElement(star)
      document.body.appendChild(starElement)

      const nextSpawnDelay = Math.random() * (maxDelay - minDelay) + minDelay
      setTimeout(spawnStar, nextSpawnDelay)
    }

    spawnStar()
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starColor, trailColor, starWidth, starHeight])

  return <div className={cn("fixed inset-0 pointer-events-none", className)} />
}
