"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiscountNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Check if user has previously closed the notification
    const dismissed = localStorage.getItem("discount-notification-dismissed")

    if (!dismissed) {
      // Show notification after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setHasInteracted(true)
    localStorage.setItem("discount-notification-dismissed", "true")
  }

  const handleClaim = () => {
    // Navigate to products or show promo code
    console.log("[v0] Discount claimed")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="fixed bottom-6 right-6 z-[9999] w-[320px] md:w-[360px]"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 10px 30px rgba(218, 165, 32, 0.2)",
                "0 15px 40px rgba(218, 165, 32, 0.35)",
                "0 10px 30px rgba(218, 165, 32, 0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative bg-gradient-to-br from-[#5FACCE] via-[#A0522D] to-[#CD853F] rounded-xl p-3 text-white overflow-hidden shadow-2xl"
          >
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "15px 15px",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors z-20"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content - Horizontal iPhone-style layout */}
            <div className="relative z-10 flex items-center gap-3">
              {/* Icon */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
                className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-white/20 rounded-full"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </motion.div>

              {/* Text content */}
              <div className="flex-1 min-w-0 pr-6">
                <h3 className="text-sm font-serif font-bold mb-0.5">Special Offer!</h3>
                <p className="text-white/90 text-xs leading-snug mb-1.5">
                  20% off first order + free shipping over $50
                </p>
                <p className="text-[10px] text-yellow-300 font-mono font-bold">Code: WELCOME20</p>
              </div>

              {/* CTA Button - Compact */}
              <Button
                onClick={handleClaim}
                size="sm"
                className="flex-shrink-0 bg-white text-[#5FACCE] hover:bg-white/90 font-semibold text-xs px-3 py-1 h-auto shadow-lg"
              >
                Claim
              </Button>
            </div>

            {/* Decorative elements - smaller */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

