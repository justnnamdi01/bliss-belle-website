"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const bestsellers = [
  {
    id: "14",
    name: "Kannauj Rose Water Face Mist - 100ml",
    price: 349.0,
    reviews: 55,
    rating: 4.5,
    image: "https://www.ashpveda.com/cdn/shop/files/Rose_Water-face_mist-100ml.webp?v=1742645754&width=4096",
  },
  {
    id: "17",
    name: "Saffron & Neem Face Wash for Normal Oily Skin - 100ml",
    price: 449.0,
    reviews: 104,
    rating: 4.5,
    image: "https://www.ashpveda.com/cdn/shop/files/Saffron_NeemFaceWash-100ml.webp?v=1744183485&width=4096",
  },
  {
    id: "28",
    name: "Ultra Hydration Radiance Cream with Natural SPF 25 - 30gm",
    price: 549.0,
    reviews: 53,
    rating: 4.5,
    image: "https://www.ashpveda.com/cdn/shop/files/Ultra_Hydration_Radiance_Cream_with_Natural_SPF_25-30_gm_front.webp?v=1742640435&width=4096",
  },
  {
    id: "19",
    name: "Nourishing & Restoring Night Cream - 30gm",
    price: 425.0,
    reviews: 109,
    rating: 4,
    image: "https://www.ashpveda.com/cdn/shop/files/Nourishing_Restoring_Night_Cream_30_gm_front.webp?v=1744183027&width=4096",
  },
]

export function BestsellersSection() {
  return (
    <section 
      id="bestsellers"
      className="bg-[#E0F4FF] py-16 px-4 scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-center mb-12 text-[#2C5F7F]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Bestsellers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product, index) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="block"
            >
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
              >
                <motion.div
                  className="aspect-square bg-gradient-to-b from-white to-gray-50 p-6 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Image
                      src="/small-golden-botanical-leaf-icon.jpg"
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </motion.div>

                <div className="p-4 space-y-2">
                  <p className="text-xs text-gray-600 uppercase tracking-wider">BLISS BELLE</p>
                  <h3 className="font-serif text-lg text-[#2C5F7F] min-h-[3rem]">{product.name}</h3>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-[#d4af7a] text-[#d4af7a]"
                            : i < product.rating
                              ? "fill-[#d4af7a] text-[#d4af7a] opacity-50"
                              : "fill-none text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">({product.reviews} reviews)</span>
                  </div>

                  <p className="text-lg font-medium text-[#2C5F7F]">
                    ₹ {product.price.toFixed(2)}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

