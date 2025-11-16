"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"

export function BlissBelleHeroSection() {
  const [showHeroContent, setShowHeroContent] = useState(false)
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroContent(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      ref={heroRef} 
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/bliss belle.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: 'blur(0px)' }}
      />
      <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
      <div 
        className={`relative mx-auto max-w-4xl px-4 py-16 transition-all duration-1000 md:py-24 ${
          showHeroContent 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mx-auto inline-block rounded-lg bg-black/30 px-6 py-6 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            New Arrivals
          </p>
          <h2 className="mb-6 text-5xl font-serif font-light leading-snug drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)] md:text-6xl">
            Introducing Our <br />
            Revitalizing <span className="italic font-normal">Beauty Collection</span>
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
            Ayurveda-inspired essentials for skin, hair and body — crafted for daily ritual and radiant wellness.
          </p>
          <Link 
            href="/products"
            className="inline-block px-6 py-2 text-sm font-medium uppercase tracking-widest rounded border border-white text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            Discover Now
          </Link>
        </div>
      </div>
    </section>
  )
}


