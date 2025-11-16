"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function InteractiveHeroSection() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  const hotspots = [
    { id: 1, top: "22%", left: "49%", label: "Radiant Forehead" },
    { id: 2, top: "48%", right: "35%", label: "Glowing Cheeks" },
    { id: 3, top: "73%", left: "25%", label: "Smooth Skin" },
  ]

  return (
    <section className="bg-[#cdbaa8] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[#2c2420] mb-12">Nourish. Restore. Glow.</h2>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img
            src="https://www.ashpveda.com/cdn/shop/files/Pointers_Desktop_1.webp?v=1741619519&width=2000"
            alt="Nourish. Restore. Glow. - Ayurvedic beauty products"
            className="w-full h-auto"
          />

          {hotspots.map((hotspot) => (
            <button
              key={hotspot.id}
              className="absolute group"
              style={{
                top: hotspot.top,
                left: hotspot.left,
                right: hotspot.right,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setActiveHotspot(hotspot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
              aria-label={hotspot.label}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-[#2c2420] rounded-full" />
                </div>

                {activeHotspot === hotspot.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    <p className="text-sm font-medium text-[#2c2420]">{hotspot.label}</p>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/products">
            <Button className="bg-[#87CEEB] hover:bg-[#c4a882] text-[#2c2420] px-12 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              VIEW ALL PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

