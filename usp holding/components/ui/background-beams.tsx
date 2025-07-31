"use client"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(circle_at_center,white,transparent)]",
        className,
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="beams" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10,0 L 0,10 M 0,0 L 10,10" stroke="#A9111D" strokeOpacity="0.1" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#beams)" />
      </svg>
    </div>
  )
}
