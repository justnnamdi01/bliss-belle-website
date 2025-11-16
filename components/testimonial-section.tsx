"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Very rich and luxurious night cream that leaves the plump, moisturized, and velvety smooth. don't need a moisturizer after and keep smelling of sandalwood until hours after. Leaves skin ultra smooth afterwards, done wonders for my skin.",
    author: "Monika R.",
    image: "/purple-night-cream-product.jpg",
  },
  {
    id: 2,
    text: "This face wash is absolutely amazing! My skin feels clean, fresh, and glowing after every use. The natural ingredients make such a difference.",
    author: "Priya S.",
    image: "/purple-night-cream-product.jpg",
  },
  {
    id: 3,
    text: "I've been using these products for months now and my skin has never looked better. The quality is outstanding and I love the traditional formulas.",
    author: "Anjali M.",
    image: "/purple-night-cream-product.jpg",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="bg-[#E0F4FF] py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Product Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt="Product"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#87CEEB] text-[#87CEEB]" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-2xl lg:text-3xl font-serif mb-8 leading-relaxed text-balance">
            &ldquo;{testimonials[currentIndex].text}&rdquo;
          </blockquote>

          {/* Author */}
          <p className="text-lg font-medium mb-8">{testimonials[currentIndex].author}</p>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

