import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProductFeatureSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[500px]">
      {/* Left side - Product Image */}
      <div className="bg-[#B0E0E6] flex items-center justify-center p-8 md:p-16">
        <div className="relative w-full max-w-md">
          <Image
            src="https://www.ashpveda.com/cdn/shop/files/Timer_Image.webp?v=1741617015&width=750"
            alt="Glow, Purify, Renew - Bliss Belle Ayurvedic Skincare"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="bg-[#87CEEB] flex flex-col items-center justify-center p-8 md:p-16 text-center">
        <div className="max-w-lg space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C5F7F]">Glow. Purify. Renew.</h2>

          <p className="text-lg text-[#2C5F7F] leading-relaxed">
            Discover the power of Ayurvedic botanicals that brighten, detoxify, and nourish your skin—revealing a radiant, balanced, and naturally healthy glow.
          </p>

          <div className="flex flex-col gap-4 pt-4">
            <Link href="/products">
              <Button
                variant="ghost"
                className="text-[#d4af7a] hover:text-[#b89760] uppercase tracking-wider font-medium"
              >
                READ MORE
              </Button>
            </Link>

            <Link href="/products">
              <Button className="bg-[#d4af7a] hover:bg-[#b89760] text-[#2C5F7F] rounded-full px-12 py-6 uppercase tracking-wider font-medium">
                CHECK NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

