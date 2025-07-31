"use client"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

interface VortexProps {
  children?: any
  className?: string
  containerClassName?: string
  particleCount?: number
  rangeY?: number
  baseHue?: number
  rangeHue?: number
  baseSpeed?: number
  rangeSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particleCount = props.particleCount || 700
  const particlePropCount = 9
  const particlePropsLength = particleCount * particlePropCount
  const rangeY = props.rangeY || 100
  const baseTTL = 50
  const rangeTTL = 150
  const baseSpeed = props.baseSpeed || 0.1
  const rangeSpeed = props.rangeSpeed || 2
  const baseRadius = props.baseRadius || 1
  const rangeRadius = props.rangeRadius || 4
  const baseHue = props.baseHue || 220
  const rangeHue = props.rangeHue || 100
  const backgroundColor = props.backgroundColor || "#000000"

  let tick = 0
  const particleProps = new Float32Array(particlePropsLength)

  const TAU = 2 * Math.PI

  const rand = (n: number) => n * Math.random()
  const randRange = (n: number) => n - rand(2 * n)
  const fadeInOut = (t: number, m: number) => {
    const hm = 0.5 * m
    return Math.abs(((t + hm) % m) - hm) / hm
  }

  const setup = () => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (canvas && container) {
      const ctx = canvas.getContext("2d")

      if (ctx) {
        resize(canvas, ctx)
        initParticles()
        draw(canvas, ctx)
      }
    }
  }

  const initParticles = () => {
    tick = 0
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i)
    }
  }

  const initParticle = (i: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    let x, y, vx, vy, life, ttl, speed, radius, hue

    x = rand(canvas.width)
    y = canvas.height + rand(rangeY)
    vx = 0
    vy = 0
    life = 0
    ttl = baseTTL + rand(rangeTTL)
    speed = baseSpeed + rand(rangeSpeed)
    radius = baseRadius + rand(rangeRadius)
    hue = baseHue + rand(rangeHue)

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
  }

  const updateParticles = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current
    if (!canvas) return

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx)
    }
  }

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i
    let x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue

    x = particleProps[i]
    y = particleProps[i2]
    vx = particleProps[i3]
    vy = particleProps[i4]
    life = particleProps[i5]
    ttl = particleProps[i6]
    speed = particleProps[i7]
    radius = particleProps[i8]
    hue = particleProps[i9]

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx)

    life++

    particleProps[i] = x
    particleProps[i2] = y
    particleProps[i3] = vx
    particleProps[i4] = vy
    particleProps[i5] = life

    life > ttl && initParticle(i)
  }

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.save()
    ctx.lineCap = "round"
    ctx.lineWidth = radius
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, TAU)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }

  const resize = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const { innerWidth, innerHeight } = window

    canvas.width = innerWidth
    canvas.height = innerHeight

    ctx.drawImage(canvas, 0, 0)
  }

  const render = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.restore()

    updateParticles(ctx)
    renderGlow(canvas, ctx)
    renderToScreen(canvas, ctx)

    tick++
  }

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save()
    ctx.filter = "blur(8px) brightness(200%)"
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()

    ctx.save()
    ctx.filter = "blur(4px) brightness(200%)"
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()
  }

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save()
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()
  }

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    render(canvas, ctx)
    requestAnimationFrame(() => draw(canvas, ctx))
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <canvas ref={canvasRef} className={cn("absolute inset-0 z-0", props.className)}></canvas>
      <div className={cn("relative z-10", props.className)} ref={containerRef}>
        {props.children}
      </div>
    </div>
  )
}
