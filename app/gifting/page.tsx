"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GiftingPage() {
  return (
    <div className="min-h-screen bg-[#E0F4FF]">
      <Header />
      <div className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2C5F7F] mb-6">Coming Soon</h1>
          <p className="text-xl md:text-2xl text-[#4A7C9E] mb-8">
            Our Gifting collection is on its way! We're curating something special for you.
          </p>
          <p className="text-lg text-[#2C5F7F] mb-12">
            Stay tuned for beautiful gift sets and curated collections perfect for your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-[#87CEEB] hover:bg-[#5FACCE] text-[#2C5F7F] px-8 py-6 rounded-full text-base font-medium">
                Shop Products
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-2 border-[#2C5F7F] text-[#2C5F7F] px-8 py-6 rounded-full text-base font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

