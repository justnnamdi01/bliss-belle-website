"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CartDrawer } from "./cart-drawer"

const categories = [
  { name: "Skin Care", slug: "skin-care" },
  { name: "Body Care", slug: "body-care" },
  { name: "Wellness", slug: "wellness" },
]

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isInHeroSection, setIsInHeroSection] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroSectionHeight = window.innerHeight

      // Check if we're in the hero section or past it
      const inHero = currentScrollY < heroSectionHeight - 50 // 50px threshold
      setIsInHeroSection(inHero)

      // Only apply hide/show behavior when past hero section
      if (!inHero) {
        // Show header when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY || currentScrollY < heroSectionHeight) {
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > heroSectionHeight) {
          setIsVisible(false)
        }
      } else {
        // Always visible in hero section
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    // Initial check
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [lastScrollY, isHomePage])
  
  // Determine text color and header class based on state
  const textColor = isHomePage 
    ? (isInHeroSection ? "text-white" : "text-[#2C5F7F]")
    : "text-[#2C5F7F]"
  
  // Header styling: absolute/transparent in hero, fixed/sticky with glass effect after hero
  const headerClass = isHomePage
    ? isInHeroSection
      ? "absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300"
      : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } backdrop-blur-xl bg-white/10 border-b border-white/20`
    : "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-b from-white/20 via-white/15 to-white/10 border-b border-white/30 shadow-2xl"

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4">
        {/* Top bar with search, logo, login */}
        <div className="flex items-center justify-between py-6">
          <button className={`${textColor} hover:opacity-80 transition-opacity`}>
            <Search className="w-6 h-6" />
          </button>

          <Link
            href="/"
            className={`${textColor} text-2xl font-serif tracking-wide hover:opacity-80 transition-opacity`}
          >
                Bliss Belles
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/admin" className={`${textColor} text-sm hover:opacity-80 transition-opacity`}>
              Admin
            </Link>
            <CartDrawer />
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="flex items-center justify-center gap-12 pb-6">
          <Link
            href="/products"
            className={`${textColor} text-sm hover:opacity-80 transition-opacity`}
          >
            Products
          </Link>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className={`${textColor} text-sm hover:opacity-80 transition-opacity`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

