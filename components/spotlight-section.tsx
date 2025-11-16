import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SpotlightSection() {
  return (
    <section className="bg-[#E0F4FF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Product image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="https://www.ashpveda.com/cdn/shop/files/Footer_Banner.webp?v=1742309130&width=2000"
              alt="In Spotlight - Bliss Belle Products"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="py-12 lg:py-16 text-center lg:text-left">
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-balance">In Spotlight</h2>
            <p className="text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Indulge in weightless hydration. Fresh Hydrating Gel refines pores, controls shine, and envelops your skin
              in velvety matte elegance
            </p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-[#87CEEB] hover:bg-[#5FACCE] text-black font-medium px-12 py-6 rounded-full text-base"
              >
                CHECK NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

