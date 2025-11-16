"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ChevronRight, Pause } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Nourishing & Restoring Night Cream",
    price: "425.00",
    image: "/purple-night-cream-product.jpg",
  },
  {
    id: 2,
    name: "Kashmiri Saffron & Neem Face Cleanser",
    price: "675.00",
    image: "/saffron-cleanser-product.jpg",
  },
  {
    id: 3,
    name: "Ultra Hydration Radiance Cream with SPF 25",
    price: "649.00",
    image: "/teal-hydration-cream-product.jpg",
  },
]

export function VideoHeroSection() {
  return (
    <section className="bg-[#E0F4FF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-center mb-12 text-[#2C5F7F]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Dazzling With Confidence
        </motion.h2>

        {/* Video Container */}
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#4A1810] to-[#2C0A08] aspect-video mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Actual Video */}
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://www.ashpveda.com/cdn/shop/videos/c/vp/ec982d812d0a47fcb1ca724a6361d4a0/ec982d812d0a47fcb1ca724a6361d4a0.HD-1080p-7.2Mbps-44985495.mp4?v=0" type="video/mp4" />
          </video>

          {/* Confetti Effect Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-[10%] left-[20%] w-2 h-2 bg-[#87CEEB] rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
            />
            <motion.div
              className="absolute top-[30%] right-[15%] w-3 h-3 bg-[#FFD700] rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-[25%] left-[40%] w-2 h-2 bg-[#87CEEB] rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
            <motion.div
              className="absolute top-[60%] right-[30%] w-3 h-3 bg-[#FFD700] rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
            />
            <motion.div
              className="absolute bottom-[40%] left-[15%] w-2 h-2 bg-[#87CEEB] rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.3, repeat: Number.POSITIVE_INFINITY, delay: 0.8 }}
            />
          </div>

          {/* Pause Button */}
          <motion.button
            className="absolute top-6 left-6 bg-white/90 hover:bg-white rounded-full p-3 transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              const video = e.currentTarget.parentElement?.querySelector('video');
              if (video) {
                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                }
              }
            }}
          >
            <Pause className="w-5 h-5 text-[#2C5F7F]" />
          </motion.button>

          {/* Product Cards - Overlapping bottom */}
          <div className="absolute bottom-0 left-0 right-0 pb-8 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">BLISS BELLE</p>
                      <h3 className="text-sm font-medium text-[#2C5F7F] mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm font-semibold text-[#2C5F7F]">From ₹ {product.price}</p>
                    </div>

                    {/* Action Icons */}
                    <div className="flex flex-col gap-2">
                      <Link href="/products" className="bg-[#87CEEB] hover:bg-[#C19B2E] rounded-full p-2 transition-colors inline-flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-white" />
                      </Link>
                      <Link href="/products" className="bg-[#87CEEB] hover:bg-[#C19B2E] rounded-full p-2 transition-colors inline-flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/products">
              <Button className="bg-[#87CEEB] hover:bg-[#C19B2E] text-[#2C5F7F] px-12 py-6 rounded-full text-base font-medium uppercase tracking-wider">
                VIEW ALL PRODUCTS
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

