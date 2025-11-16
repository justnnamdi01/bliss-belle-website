"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const values = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path
          d="M24 4C20 4 16 8 16 12C16 16 20 20 24 20C28 20 32 16 32 12C32 8 28 4 24 4Z"
          stroke="#87CEEB"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M30 16L36 22M18 16L12 22" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 20V28M20 24H28" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Derma Tested",
    description: "Dermatologically tested for safe care",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path
          d="M24 8L20 16L24 24L28 16L24 8Z"
          stroke="#87CEEB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 20C16 20 14 26 16 32C18 38 24 42 24 42C24 42 30 38 32 32C34 26 32 20 32 20"
          stroke="#87CEEB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Natural Ingredients",
    description: "Made with natural ingredients for pure care.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path
          d="M18 14C18 14 16 12 14 14C12 16 14 18 14 18L20 24L14 30C14 30 12 32 14 34C16 36 18 34 18 34L24 28L30 34C30 34 32 36 34 34C36 32 34 30 34 30L28 24L34 18C34 18 36 16 34 14C32 12 30 14 30 14L24 20L18 14Z"
          stroke="#87CEEB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="16" r="3" stroke="#87CEEB" strokeWidth="2" />
      </svg>
    ),
    title: "Cruelty Free",
    description: "Gentle, effective, and cruelty free",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path
          d="M24 8L28 16H36L30 22L32 30L24 25L16 30L18 22L12 16H20L24 8Z"
          stroke="#87CEEB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20 32C20 32 18 38 24 42C30 38 28 32 28 32" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Ethically Sourced",
    description: "Ethically sourced and crafted with care.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path
          d="M24 8L18 20L24 32L30 20L24 8Z"
          stroke="#87CEEB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 24V36C18 38 20 40 24 40C28 40 30 38 30 36V24"
          stroke="#87CEEB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Vegan",
    description: "Embrace our collection—naturally vegan and pure.",
  },
]

const faqs = [
  {
    question: "Do you have physical stores?",
    answer:
      "Currently, we operate exclusively online to provide the best prices and widest selection. However, we partner with select retailers in major cities.",
  },
  {
    question: "How can I place an order on Ashpveda?",
    answer:
      "Simply browse our products, add items to your cart, and proceed to checkout. We accept various payment methods for your convenience.",
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer:
      "Yes, we offer Cash on Delivery for most locations across India. This option will be available at checkout if your area is serviceable.",
  },
  {
    question: "What is your return and refund policy?",
    answer:
      "We offer a 30-day return policy for unopened products. If you're not satisfied, contact our customer service team for a full refund or exchange.",
  },
]

export function BrandValuesSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#E0F4FF] py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Brand Values */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-serif text-xl lg:text-2xl mb-2">{value.title}</h3>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4"
                >
                  <span className="font-serif text-xl lg:text-2xl pr-4">{faq.question}</span>
                  <Plus
                    className={`w-6 h-6 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && <div className="pb-4 text-gray-700 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

