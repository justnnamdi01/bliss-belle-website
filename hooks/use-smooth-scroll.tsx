"use client"

import { useEffect } from "react"

/**
 * Custom hook to enable smooth scrolling behavior
 * and optimize scroll performance
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Optimize scroll performance with passive listeners
    const handleScroll = () => {
      // Throttle scroll events for better performance
      window.requestAnimationFrame(() => {
        // Custom scroll logic can be added here
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])
}
