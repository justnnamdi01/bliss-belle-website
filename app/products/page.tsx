"use client"

import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { DiscountNotification } from "@/components/discount-notification"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#E0F4FF]">
      <Header />
      <DiscountNotification />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl text-center mb-12 text-[#2C5F7F]">Shop Skin Care Products</h1>

          <ProductGrid />
        </div>
      </main>

      <Footer />
    </div>
  )
}

