"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "stagger"
  delay?: number
}

const animations = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export function AnimatedSection({ children, className = "", animation = "fade", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function AnimatedDiv({ children, className = "", animation = "fade", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  )
}

