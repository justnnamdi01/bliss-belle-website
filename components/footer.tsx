"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Footer newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Categories */}
          <div>
            <h3 className="font-serif text-xl mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/skin-care" className="hover:text-[#87CEEB] transition-colors">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link href="/hair-care" className="hover:text-[#87CEEB] transition-colors">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link href="/bath-body" className="hover:text-[#87CEEB] transition-colors">
                  Bath & Body
                </Link>
              </li>
              <li>
                <Link href="/gifting" className="hover:text-[#87CEEB] transition-colors">
                  Gifting
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-serif text-xl mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="hover:text-[#87CEEB] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#87CEEB] transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#87CEEB] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-serif text-xl mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blogs" className="hover:text-[#87CEEB] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#87CEEB] transition-colors">
                  Return and Refunds
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#87CEEB] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="font-serif text-xl mb-6">About Us</h3>
            <p className="text-sm leading-relaxed mb-4">
              At Bliss Belles, we are redefining Ayurveda for the modern world—blending timeless Ayurvedic wisdom with
              cutting-edge scientific research to create beauty solutions that are both authentic and effective.{" "}
              <Link href="/about" className="underline hover:text-[#87CEEB]">
                More Info
              </Link>
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl mb-4">Sign up to our Newsletter</h3>
            <p className="mb-6 text-gray-300">
              Be the first to know the least relases, news, collaborations, exclusives and offers!
            </p>
            <form onSubmit={handleSubmit} className="flex gap-0">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-6 text-base rounded-l-full rounded-r-none border-gray-600 bg-white text-black"
              />
              <Button
                type="submit"
                className="bg-[#87CEEB] hover:bg-[#5FACCE] text-black px-10 py-6 rounded-r-full rounded-l-none text-base font-medium"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-8">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#87CEEB] transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#87CEEB] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#87CEEB] transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </Link>
          </div>

          {/* Logo */}
          <div className="text-center">
            <p className="font-serif text-2xl text-[#4A9B8E]">Bliss Belles</p>
            <p className="text-xs text-gray-400">PURE. NATURAL. AYURVEDIC</p>
          </div>

          <div className="w-24" />
        </div>
      </div>
    </footer>
  )
}

