"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    // Handle newsletter signup
    setEmail("")
  }

  return (
    <section className="bg-[#E0F4FF] py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl mb-4">Get 10% off your first order</h2>
          <p className="text-lg mb-8 text-gray-700">Join our email list for exclusive offers and the latest news.</p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-6 text-base rounded-l-full rounded-r-none border-none bg-white"
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
    </section>
  )
}

