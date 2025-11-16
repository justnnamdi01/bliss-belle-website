"use client"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedWrapperProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "rotate"
  delay?: number
  duration?: number
}

/**
 * Reusable animated wrapper component with optimized performance
 * Uses intersection observer to trigger animations only when visible
 */
export function AnimatedWrapper({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 0.6,
}: AnimatedWrapperProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    "slide-up": {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    rotate: {
      initial: { opacity: 0, rotate: -10 },
      animate: { opacity: 1, rotate: 0 },
    },
  }

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={hasIntersected ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth animation
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

