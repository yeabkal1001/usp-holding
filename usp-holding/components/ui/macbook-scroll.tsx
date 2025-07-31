"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

import { type MotionValue, motion, useScroll, useTransform } from "framer-motion"

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string
  showGradient?: boolean
  title?: string | React.ReactNode
  badge?: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5])
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5])
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500])
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0])
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div
      ref={ref}
      className="min-h-[200vh] flex flex-col items-center py-0 md:py-80 justify-start shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="dark:text-white text-neutral-800 text-3xl lg:text-7xl font-bold text-center mb-20"
      >
        {title || `Built for Creators`}
      </motion.h2>
      {/* Lid */}
      <Lid src={src} scaleX={scaleX} scaleY={scaleY} rotate={rotate} translate={translate} />
      {/* Base area */}
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
        {/* above keyboard bar */}
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-80 h-4 bg-[#050505] rounded-full" />
        </div>
        <div className="flex relative">
          <div className="mx-auto w-[20rem] h-full">
            <Keypad />
          </div>
          <div className="mx-auto w-[8rem] h-full">
            <Trackpad />
          </div>
        </div>
        {badge && <div className="absolute top-4 right-4">{badge}</div>}
      </div>
    </div>
  )
}

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>
  scaleY: MotionValue<number>
  rotate: MotionValue<number>
  translate: MotionValue<number>
  src?: string
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
          <span className="text-white">
            {src ? (
              <img
                src={src || "/placeholder.svg"}
                alt="aceternity logo"
                fill
                className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
              />
            ) : (
              <AceternityLogo />
            )}
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <img
          src={src || "/placeholder.svg"}
          alt="aceternity logo"
          fill
          className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
        />
      </motion.div>
    </div>
  )
}

export const Trackpad = () => {
  return (
    <div
      className="w-[8rem] h-[5rem] bg-[#050505] mx-auto rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  )
}

export const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
      {/* First Row */}
      <Row>
        <KBtn className="w-10 items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconBrightnessUp className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconTable className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconSearch className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconMoon className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconVolumeX className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[6px] w-[6px]" />
        </KBtn>
        <KBtn>
          <IconPower className="h-[6px] w-[6px]" />
        </KBtn>
      </Row>

      {/* Second row */}
      <Row>
        <KBtn>
          <span className="block">~</span>
          <span className="block mt-1">`</span>
        </KBtn>

        <KBtn>
          <span className="block ">!</span>
          <span className="block">1</span>
        </KBtn>
        <KBtn>
          <span className="block">@</span>
          <span className="block">2</span>
        </KBtn>
        <KBtn>
          <span className="block">#</span>
          <span className="block">3</span>
        </KBtn>
        <KBtn>
          <span className="block">$</span>
          <span className="block">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&</span>
          <span className="block">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>
        <KBtn>
          <span className="block">_</span>
          <span className="block">-</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block">=</span>
        </KBtn>
        <KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
          delete
        </KBtn>
      </Row>

      {/* Third row */}
      <Row>
        <KBtn className="w-10 items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
          tab
        </KBtn>
        <KBtn>
          <span className="block">Q</span>
        </KBtn>

        <KBtn>
          <span className="block">W</span>
        </KBtn>
        <KBtn>
          <span className="block">E</span>
        </KBtn>
        <KBtn>
          <span className="block">R</span>
        </KBtn>
        <KBtn>
          <span className="block">T</span>
        </KBtn>
        <KBtn>
          <span className="block">Y</span>
        </KBtn>
        <KBtn>
          <span className="block">U</span>
        </KBtn>
        <KBtn>
          <span className="block">I</span>
        </KBtn>
        <KBtn>
          <span className="block">O</span>
        </KBtn>
        <KBtn>
          <span className="block">P</span>
        </KBtn>
        <KBtn>
          <span className="block">{"{"}</span>
          <span className="block">{"["}</span>
        </KBtn>
        <KBtn>
          <span className="block">{"}"}</span>
          <span className="block">{"]"}</span>
        </KBtn>
        <KBtn>
          <span className="block">|</span>
          <span className="block">\</span>
        </KBtn>
      </Row>

      {/* Fourth Row */}
      <Row>
        <KBtn className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
          caps lock
        </KBtn>
        <KBtn>
          <span className="block">A</span>
        </KBtn>

        <KBtn>
          <span className="block">S</span>
        </KBtn>
        <KBtn>
          <span className="block">D</span>
        </KBtn>
        <KBtn>
          <span className="block">F</span>
        </KBtn>
        <KBtn>
          <span className="block">G</span>
        </KBtn>
        <KBtn>
          <span className="block">H</span>
        </KBtn>
        <KBtn>
          <span className="block">J</span>
        </KBtn>
        <KBtn>
          <span className="block">K</span>
        </KBtn>
        <KBtn>
          <span className="block">L</span>
        </KBtn>
        <KBtn>
          <span className="block">:</span>
          <span className="block">;</span>
        </KBtn>
        <KBtn>
          <span className="block">&quot;</span>
          <span className="block">&apos;</span>
        </KBtn>
        <KBtn className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
          return
        </KBtn>
      </Row>

      {/* Fifth Row */}
      <Row>
        <KBtn className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
          shift
        </KBtn>
        <KBtn>
          <span className="block">Z</span>
        </KBtn>
        <KBtn>
          <span className="block">X</span>
        </KBtn>
        <KBtn>
          <span className="block">C</span>
        </KBtn>
        <KBtn>
          <span className="block">V</span>
        </KBtn>
        <KBtn>
          <span className="block">B</span>
        </KBtn>
        <KBtn>
          <span className="block">N</span>
        </KBtn>
        <KBtn>
          <span className="block">M</span>
        </KBtn>
        <KBtn>
          <span className="block">{"<"}</span>
          <span className="block">,</span>
        </KBtn>
        <KBtn>
          <span className="block">{">"}</span>
          <span className="block">.</span>
        </KBtn>
        <KBtn>
          <span className="block">?</span>
          <span className="block">/</span>
        </KBtn>
        <KBtn className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
          shift
        </KBtn>
      </Row>

      {/* sixth Row */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start">
            <span className="block">fn</span>
          </div>
          <div className="flex justify-start">
            <IconWorld className="h-[6px] w-[6px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start">
            <span className="block">^</span>
          </div>
          <div className="flex justify-start">
            <span className="block">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start">
            <IconChevronUp className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start">
            <span className="block">option</span>
          </div>
        </KBtn>
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="w-[8.2rem]"></KBtn>
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start">
            <IconChevronUp className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start">
            <span className="block">option</span>
          </div>
        </KBtn>
        <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
          <KBtn className="w-6 h-3">
            <IconCaretUp className="h-[6px] w-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="w-6 h-3">
              <IconCaretLeft className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="w-6 h-3">
              <IconCaretDown className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="w-6 h-3">
              <IconCaretRight className="h-[6px] w-[6px]" />
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  )
}
export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string
  children?: React.ReactNode
  childrenClassName?: string
  backlit?: boolean
}) => {
  return (
    <div className={cn("p-[0.5px] rounded-[4px]", backlit && "bg-white/[0.2] shadow-xl shadow-white/5")}>
      <div
        className={cn("h-6 w-6 bg-[#0A0A0B] rounded-[3.5px] flex items-center justify-center", className)}
        style={{
          boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-[2px] justify-center w-full flex-shrink-0">{children}</div>
}

export const SpeakerGrid = () => {
  return (
    <div
      className="flex px-[0.5px] gap-[2px] mt-2 h-40"
      style={{
        backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  )
}

export const AceternityLogo = () => {
  return (
    <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3">
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Tabler Icons (simplified versions)
const IconBrightnessDown = ({ className }: { className?: string }) => <div className={className}></div>
const IconBrightnessUp = ({ className }: { className?: string }) => <div className={className}></div>
const IconTable = ({ className }: { className?: string }) => <div className={className}></div>
const IconSearch = ({ className }: { className?: string }) => <div className={className}></div>
const IconMicrophone = ({ className }: { className?: string }) => <div className={className}></div>
const IconMoon = ({ className }: { className?: string }) => <div className={className}></div>
const IconPlayerTrackPrev = ({ className }: { className?: string }) => <div className={className}></div>
const IconPlayerSkipForward = ({ className }: { className?: string }) => <div className={className}></div>
const IconPlayerTrackNext = ({ className }: { className?: string }) => <div className={className}></div>
const IconVolume3 = ({ className }: { className?: string }) => <div className={className}></div>
const IconVolumeX = ({ className }: { className?: string }) => <div className={className}></div>
const IconVolume2 = ({ className }: { className?: string }) => <div className={className}></div>
const IconPower = ({ className }: { className?: string }) => <div className={className}></div>
const IconWorld = ({ className }: { className?: string }) => <div className={className}></div>
const IconChevronUp = ({ className }: { className?: string }) => <div className={className}></div>
const IconCommand = ({ className }: { className?: string }) => <div className={className}></div>
const IconCaretUp = ({ className }: { className?: string }) => <div className={className}></div>
const IconCaretLeft = ({ className }: { className?: string }) => <div className={className}></div>
const IconCaretDown = ({ className }: { className?: string }) => <div className={className}></div>
const IconCaretRight = ({ className }: { className?: string }) => <div className={className}></div>
