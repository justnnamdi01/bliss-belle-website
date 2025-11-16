"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function ProductShowcase() {
  const products = [
    {
      title: "Exfoliate",
      description: "Fruits & Walnuts Radiant Face Scrub",
      jarColor: "from-[#7ba647] to-[#6b9539]",
      bgColor: "bg-[#e5d4c3]",
      image: "https://www.ashpveda.com/cdn/shop/files/Ultra_Hydration_Radiance_Cream_with_Natural_SPF_25-30_gm_front.webp?v=1742640435&width=4096",
    },
    {
      title: "Protect",
      description: "Ultra Hydration Radiance Cream",
      jarColor: "from-[#1a8b8f] to-[#156f73]",
      bgColor: "bg-[#d4e5e8]",
      image: "https://www.ashpveda.com/cdn/shop/files/Ultra_Hydration_Radiance_Cream_with_Natural_SPF_25-30_gm_front.webp?v=1742640435&width=4096",
    },
    {
      title: "Nourish",
      description: "Nourishing & Restoring Night Cream",
      jarColor: "from-[#4a3d7f] to-[#3a2f6b]",
      bgColor: "bg-[#e5d4c3]",
      image: "https://www.ashpveda.com/cdn/shop/files/Multi_Column_3_Image_Mobile_C_7d62652c-bc36-4bd4-abab-a0cbf992a575.webp?v=1741614058&width=375",
    },
  ]

  return (
    <section className="relative w-full bg-[#f5ebe5] py-16 px-4">
      {/* Hero Heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl text-center font-serif text-[#2C5F7F] leading-tight text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Ayurveda Reimagined{" "}
          <motion.span
            className="inline-block w-12 h-12 md:w-16 md:h-16 align-middle"
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/ayurvedic-mortar-and-pestle-icon.jpg" alt="" className="w-full h-full object-contain" />
          </motion.span>{" "}
          Rooted in Ancient Texts{" "}
          <motion.span
            className="inline-block w-12 h-12 md:w-16 md:h-16 align-middle"
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="/ancient-scroll-icon.jpg" alt="" className="w-full h-full object-contain" />
          </motion.span>{" "}
          Proven by Modern Science{" "}
          <motion.span
            className="inline-block w-12 h-12 md:w-16 md:h-16 align-middle"
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src="/green-leaves-herbal-icon.jpg" alt="" className="w-full h-full object-contain" />
          </motion.span>{" "}
          Perfected for Today!
        </motion.h1>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`relative ${product.bgColor} rounded-lg overflow-hidden shadow-lg group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Decorative Mandala Background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="currentColor">
                <circle cx="200" cy="200" r="150" opacity="0.1" />
                <path d="M200,50 L220,150 L200,250 L180,150 Z" opacity="0.15" transform="rotate(0 200 200)" />
                <path d="M200,50 L220,150 L200,250 L180,150 Z" opacity="0.15" transform="rotate(45 200 200)" />
                <path d="M200,50 L220,150 L200,250 L180,150 Z" opacity="0.15" transform="rotate(90 200 200)" />
                <path d="M200,50 L220,150 L200,250 L180,150 Z" opacity="0.15" transform="rotate(135 200 200)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative p-8 flex flex-col items-center">
              {/* Product Image */}
              <motion.div
                className="w-64 h-64 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Product Info */}
              <h2 className="text-3xl font-serif text-[#2C5F7F] mb-3">{product.title}</h2>
              <p className="text-[#4A7C9E] text-center mb-6 font-light">{product.description}</p>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products">
                  <Button className="bg-[#87CEEB] hover:bg-[#5FACCE] text-[#2C5F7F] font-medium px-8 py-6 rounded-full uppercase tracking-wider shadow-md transition-all">
                    Shop Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] transition-colors z-50"
        aria-label="Contact us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </section>
  )
}

