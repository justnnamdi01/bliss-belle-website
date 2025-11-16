import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BlissBelleHeroSection } from "@/components/bliss-belle-hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { VideoHeroSection } from "@/components/video-hero-section"
import { ProductFeatureSection } from "@/components/product-feature-section"
import { BestsellersSection } from "@/components/bestsellers-section"
import { CategoryNavSection } from "@/components/category-nav-section"
import { InteractiveHeroSection } from "@/components/interactive-hero-section"
import { ForeverFavouritesSection } from "@/components/forever-favourites-section"
import { SpotlightSection } from "@/components/spotlight-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { BrandValuesSection } from "@/components/brand-values-section"
import { BlogSection } from "@/components/blog-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { DiscountNotification } from "@/components/discount-notification"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Replace HeroSection with BlissBelleHeroSection if you want to use the new hero */}
      <BlissBelleHeroSection />
      {/* <HeroSection /> */}
      <ProductShowcase />
      <VideoHeroSection />
      <ProductFeatureSection />
      <BestsellersSection />
      <CategoryNavSection />
      <InteractiveHeroSection />
      <ForeverFavouritesSection />
      <SpotlightSection />
      <TestimonialSection />
      <BrandValuesSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
      <DiscountNotification />
    </main>
  )
}

