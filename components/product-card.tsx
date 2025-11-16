"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { AddToCartButton } from "./add-to-cart-button"

interface Product {
  id: string
  name: string
  brand: string
  price: number
  image: string
  botanicalIcon: string
  floral: string
  category: string
}

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-[#FFF8F0] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Product Image Container */}
        <Link href={`/products/${product.id}`} className="block">
          <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
            {/* Floral decoration */}
            <motion.div
              className="absolute top-2 right-2 w-16 h-16 z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Image
                src={product.floral || "/placeholder.svg"}
                alt="Floral decoration"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Product Image */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
            </motion.div>
          </div>
        </Link>

        {/* Botanical Icon Divider */}
        <div className="flex justify-center mb-4">
          <div className="relative w-12 h-8">
            <Image
              src={product.botanicalIcon || "/placeholder.svg"}
              alt="Botanical icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <Link href={`/products/${product.id}`} className="flex flex-col flex-grow">
          <p className="text-[#5FACCE] text-sm font-serif mb-2 tracking-wider">{product.brand}</p>
          <h3 className="font-serif text-[#2C5F7F] text-lg mb-4 group-hover:text-[#87CEEB] transition-colors line-clamp-2 flex-grow">
            {product.name}
          </h3>
          <p className="text-[#2C5F7F] font-serif text-xl mb-4">From ₹ {product.price.toFixed(2)}</p>
        </Link>

        {/* Add to Cart Button */}
        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
          }}
          className="w-full bg-[#87CEEB] hover:bg-[#5FACCE] text-white"
        />
      </div>
    </motion.div>
  )
}

