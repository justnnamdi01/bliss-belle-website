"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-WLIUV5EcJw2O209n7ccXcPvILbuQET.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Large background text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1 className="text-[20vw] font-serif text-white leading-none">Belle</h1>
      </motion.div>

      {/* Hero content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <motion.p
            className="text-white text-sm tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            NEW ARRIVALS
          </motion.p>

          <motion.h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Introducing Our
            <br />
            Revitalizing <em className="font-serif italic">Beauty Collection</em>
          </motion.h1>

          <motion.p
            className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Ayurveda-inspired essentials for skin, hair and body — crafted for daily ritual and radiant wellness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/products"
              className="inline-block border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm tracking-wider"
            >
              DISCOVER NOW
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

