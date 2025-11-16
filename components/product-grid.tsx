"use client"

import { useState, useEffect } from "react"
import { SlidersHorizontal } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { useSearchParams } from "next/navigation"

interface Product {
  id: string
  name: string
  brand: string
  price: number
  image: string
  botanicalIcon: string
  floral: string
  category: string
  benefits: string[]
}

const products: Product[] = [
  {
    id: "1",
    name: "Aloe Vera & Vetiver Fresh Hydrating Gel - 50ml",
    brand: "BLISS BELLE",
    price: 399.0,
    image: "https://www.ashpveda.com/cdn/shop/files/FreshHydratingGel-100ml.webp?v=1743677095&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/aloe-vera-plant.png",
    category: "skin-care",
    benefits: [
      "Oil-Free Hydration – Provides lightweight yet long-lasting moisture",
      "Mattifies & Balances Oil – Controls shine while keeping skin fresh",
      "Soothes & Calms – Reduces redness, irritation, and inflammation",
      "Refines Pores – Helps minimise the appearance of pores",
      "Boosts Natural Glow – Infused with Ayurvedic botanicals for a radiant complexion"
    ]
  },
  {
    id: "2",
    name: "Aloe Vera Sunscreen SPF-50 - 50ml",
    brand: "BLISS BELLE",
    price: 499.0,
    image: "https://www.ashpveda.com/cdn/shop/files/AloeVeraSunscreenSPF-50-100mlFront.webp?v=1747483723&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/aloe-vera-plant.png",
    category: "skin-care",
    benefits: [
      "Broad-Spectrum Sun Protection – Shields against UVA/UVB rays with SPF 50 PA++++",
      "Hydrates & Nourishes – Infused with botanical extracts to lock in moisture",
      "Lightweight & Non-Greasy – Absorbs quickly without leaving a heavy feel",
      "No White Cast – Blends seamlessly into all skin tones",
      "Prevents Sun Damage – Rich in antioxidants that protect against free radicals"
    ]
  },
  {
    id: "3",
    name: "Coconut Milk Sunscreen SPF-50 - 50ml",
    brand: "BLISS BELLE",
    price: 499.0,
    image: "https://www.ashpveda.com/cdn/shop/files/CoconutMilkSunscreenSPF-50-Front.webp?v=1750914995&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/turmeric-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Deep Hydration – Provides long-lasting moisture for dry skin",
      "Broad-Spectrum Sun Protection – SPF 50 PA++++ shields against UVA/UVB rays",
      "Soothes & Nourishes – Enriched with botanical extracts to calm and restore skin",
      "Non-Greasy & Fast-Absorbing – Lightweight yet deeply moisturizing",
      "Prevents Sun Damage – Rich in antioxidants that protect against environmental stressors"
    ]
  },
  {
    id: "4",
    name: "Foot Cream - 100gm",
    brand: "BLISS BELLE",
    price: 399.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Foot_Cream_Front_1_78bd1c2e-9293-4bc5-a5c2-19068b457687.webp?v=1760437049&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/green-leaves-botanical.jpg",
    category: "body-care",
    benefits: [
      "Repairs cracked heels and restores smoothness",
      "Deeply moisturizes and softens rough feet",
      "Provides antibacterial care for healthy skin",
      "Rejuvenates and revitalizes texture"
    ]
  },
  {
    id: "5",
    name: "Radiant Face Scrub - Dates & Walnuts - 12gm",
    brand: "BLISS BELLE",
    price: 199.0,
    image: "https://www.ashpveda.com/cdn/shop/files/FaceScrub-Dates_Walnuts-30gm.webp?v=1746702991&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/green-leaves-botanical.jpg",
    category: "skin-care",
    benefits: [
      "Gently exfoliates and removes dead cells",
      "Brightens skin and reduces tan lines",
      "Improves texture and unclogs pores",
      "Nourishes deeply and makes skin radiant"
    ]
  },
  {
    id: "6",
    name: "Radiant Face Scrub - Dates & Walnuts - 30gm",
    brand: "BLISS BELLE",
    price: 299.0,
    image: "https://www.ashpveda.com/cdn/shop/files/FaceScrub-Dates_Walnuts-30gm.webp?v=1746702991&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/green-leaves-botanical.jpg",
    category: "skin-care",
    benefits: [
      "Gently exfoliates and removes dead cells",
      "Brightens skin and reduces tan lines",
      "Improves texture and unclogs pores",
      "Nourishes deeply and makes skin radiant"
    ]
  },
  {
    id: "7",
    name: "Radiant Face Scrub - Dates & Walnuts - 50gm",
    brand: "BLISS BELLE",
    price: 399.0,
    image: "https://www.ashpveda.com/cdn/shop/files/FaceScrub-Dates_Walnuts-30gm.webp?v=1746702991&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/green-leaves-botanical.jpg",
    category: "skin-care",
    benefits: [
      "Gently exfoliates and removes dead cells",
      "Brightens skin and reduces tan lines",
      "Improves texture and unclogs pores",
      "Nourishes deeply and makes skin radiant"
    ]
  },
  {
    id: "8",
    name: "Goat Milk & Jojoba Oil Soap - 75gm",
    brand: "BLISS BELLE",
    price: 149.0,
    image: "https://www.ashpveda.com/cdn/shop/files/goat_milk_soap_2.webp?v=1760437210&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/jasmine-flowers.jpg",
    category: "body-care",
    benefits: [
      "Intense Hydration – Deeply replenishes moisture for dry, flaky skin",
      "Soothes & Softens – Goat Milk and Jojoba Oil calm irritation and promote smooth skin",
      "Gentle Cleansing – Removes impurities without stripping natural oils",
      "Skin Barrier Protection – Strengthens and restores skin elasticity",
      "Ideal for Dry & Sensitive Skin – Keeps skin nourished, supple, and radiant"
    ]
  },
  {
    id: "9",
    name: "Hand Cream Mandarin & Neem - 30gm",
    brand: "BLISS BELLE",
    price: 249.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Neem_Hand_Cream_009.webp?v=1721369541&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/orange-marigold-flowers.jpg",
    category: "body-care",
    benefits: [
      "Provides lasting hydration and nourishment",
      "Brightens and evens skin tone for naturally radiant hands",
      "Repairs, protects, and soothes damaged, dry skin",
      "Lightweight and non-greasy, perfect for daily use",
      "Shields hands from dryness, pollution, and external stressors"
    ]
  },
  {
    id: "10",
    name: "Deep Relax Body Oil – Lemongrass & Eucalyptus - 30ml",
    brand: "BLISS BELLE",
    price: 449.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Deep_Relax_Body_Oil_120ml.webp?v=1742802327&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/green-leaves-botanical.jpg",
    category: "body-care",
    benefits: [
      "Soothes muscle tension and relieves fatigue",
      "Hydrates and softens skin for a smooth, supple feel",
      "Promotes relaxation and eases stress with calming botanicals",
      "Enhances circulation for revitalized skin"
    ]
  },
  {
    id: "11",
    name: "Hydrating Gulab Soap - 75gm",
    brand: "BLISS BELLE",
    price: 149.0,
    image: "https://www.ashpveda.com/cdn/shop/files/gulabsoap75gm_5.webp?v=1760441463&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-rose-petals.jpg",
    category: "body-care",
    benefits: [
      "Enhances Skin Radiance – Rose extracts brighten and even skin tone",
      "Deeply Moisturizing – Enriched with botanical oils and butters for lasting hydration",
      "Gentle & Nourishing Cleansing – Removes impurities while maintaining moisture balance",
      "Softens & Smoothens – Leaves skin feeling velvety and fresh",
      "Calming Aromatherapy – Infused with Kannauj Rose for a luxurious, relaxing experience"
    ]
  },
  {
    id: "12",
    name: "Kannauj Rose & Oudh Bath & Body Oil - 120ml",
    brand: "BLISS BELLE",
    price: 699.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Kannauj_Rose_Oudh_Bath_Body_Oil-30ml_bg_front.webp?v=1748603002&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-rose-petals.jpg",
    category: "body-care",
    benefits: [
      "Deeply hydrates and nourishes the skin",
      "Improves elasticity and boosts collagen production",
      "Softens, soothes and makes skin radiant",
      "Provides anti-inflammatory benefits for overall skin health",
      "Enhances the skin's natural glow"
    ]
  },
  {
    id: "13",
    name: "Kannauj Rose & Oudh Bath & Body Oil - 30ml",
    brand: "BLISS BELLE",
    price: 399.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Kannauj_Rose_Oudh_Bath_Body_Oil-30ml_bg_front.webp?v=1748603002&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-rose-petals.jpg",
    category: "body-care",
    benefits: [
      "Deeply hydrates and nourishes the skin",
      "Improves elasticity and boosts collagen production",
      "Softens, soothes and makes skin radiant",
      "Provides anti-inflammatory benefits for overall skin health",
      "Enhances the skin's natural glow"
    ]
  },
  {
    id: "14",
    name: "Kannauj Rose Water Face Mist - 100ml",
    brand: "BLISS BELLE",
    price: 349.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Rose_Water-face_mist-100ml.webp?v=1742645754&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-rose-petals.jpg",
    category: "skin-care",
    benefits: [
      "Hydrates and refreshes skin",
      "Calms irritation and redness",
      "Minimizes pores and reduces fine lines",
      "Maintains pH balance and controls excess oil"
    ]
  },
  {
    id: "15",
    name: "Kannauj Rose Water Face Mist - 30ml",
    brand: "BLISS BELLE",
    price: 249.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Rose_Water-face_mist-100ml.webp?v=1742645754&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-rose-petals.jpg",
    category: "skin-care",
    benefits: [
      "Hydrates and refreshes skin",
      "Calms irritation and redness",
      "Minimizes pores and reduces fine lines",
      "Maintains pH balance and controls excess oil"
    ]
  },
  {
    id: "16",
    name: "Kashmiri Saffron & Neem Body Wash - 100ml",
    brand: "BLISS BELLE",
    price: 449.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Kashmiri_Saffron_Neem_Body_Wash_front_wbg-30ml_f5c999d5-32be-44c6-86c2-bba054932d33.jpg?v=1760436544&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/orange-marigold-flowers.jpg",
    category: "body-care",
    benefits: [
      "Brightens and evens skin tone with Saffron and Ayurvedic botanicals",
      "Deeply cleanses and detoxifies while remaining gentle on the skin",
      "Hydrates and nourishes for lasting softness",
      "Soothes irritation and refreshes tired skin",
      "Supports daily skin renewal for a radiant, youthful glow"
    ]
  },
  {
    id: "17",
    name: "Saffron & Neem Face Wash for Normal Oily Skin - 100ml",
    brand: "BLISS BELLE",
    price: 449.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Saffron_NeemFaceWash-100ml.webp?v=1744183485&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/orange-marigold-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Evens skin tone and boosts radiance",
      "Deeply hydrates and soothes the skin",
      "Enhances texture and minimizes signs of aging"
    ]
  },
  {
    id: "18",
    name: "Nourishing & Restoring Night Cream - 12gm",
    brand: "BLISS BELLE",
    price: 349.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Nourishing_Restoring_Night_Cream_30_gm_front.webp?v=1744183027&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/purple-orchid-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Repairs skin cells and reduces dark spots",
      "Enhances radiance and restores youthfulness",
      "Improves skin tone and texture",
      "Hydrates deeply, makes skin glowing"
    ]
  },
  {
    id: "19",
    name: "Nourishing & Restoring Night Cream - 30gm",
    brand: "BLISS BELLE",
    price: 425.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Nourishing_Restoring_Night_Cream_30_gm_front.webp?v=1744183027&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/purple-orchid-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Repairs skin cells and reduces dark spots",
      "Enhances radiance and restores youthfulness",
      "Improves skin tone and texture",
      "Hydrates deeply, makes skin glowing"
    ]
  },
  {
    id: "20",
    name: "Rose Lip Balm - 15gm",
    brand: "BLISS BELLE",
    price: 229.0,
    image: "https://www.ashpveda.com/cdn/shop/products/lip-care-rose-petal-lip-balm.jpg",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-rose-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Hydrates and nourishes lips",
      "Reduces pigmentation and darkness",
      "Heals chapped lips naturally",
      "Improves softness and smoothness"
    ]
  },
  {
    id: "21",
    name: "Saffron & Sandalwood Soap - 100gm",
    brand: "BLISS BELLE",
    price: 179.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Sandalwood_Saffron_soap_100_gm_5.webp?v=1760437455&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/saffron-threads.jpg",
    category: "body-care",
    benefits: [
      "Brightens & Evens Skin Tone – Sandalwood and Saffron enhance glow",
      "Deeply Nourishes & Hydrates – Rich butters and oils restore moisture",
      "Gentle Cleansing – Removes impurities without stripping natural oils",
      "Softens & Smoothens – Leaves skin supple, radiant, and youthful",
      "Aromatherapeutic Experience – A calming, luxurious fragrance for a relaxing bath"
    ]
  },
  {
    id: "22",
    name: "Sandalwood & Turmeric Soap - 75gm",
    brand: "BLISS BELLE",
    price: 149.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Sandalwood_TurmericSoapfrontwithingredientswbg.webp?v=1760437863&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/turmeric-flowers.jpg",
    category: "body-care",
    benefits: [
      "Purifies & Cleanses – Ayurvedic ingredients deeply cleanse while retaining skin hydration",
      "Evens Skin Tone – Healing properties help fade scars and balance skin tone",
      "Brightens & Revitalizes – Enhances radiance and rejuvenates skin for a luminous glow",
      "100% Germ Protection – Antibacterial properties defend against germs and infections"
    ]
  },
  {
    id: "23",
    name: "Sensuous Jasmine & Mogra Soap - 75gm",
    brand: "BLISS BELLE",
    price: 149.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Jasminemograsoap75gm_4.webp?v=1760437783&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/jasmine-flowers.jpg",
    category: "body-care",
    benefits: [
      "Deeply Nourishes – Hydrating natural oils restore skin's moisture balance",
      "Gentle & Effective Cleansing – Removes impurities while maintaining softness",
      "Floral Fragrance – Infused with Jasmine & Mogra for a lasting, fresh scent",
      "Skin Softening & Conditioning – Leaves skin feeling smooth and radiant",
      "Traditional Ayurvedic Formulation – Handmade with nature's finest ingredients"
    ]
  },
  {
    id: "24",
    name: "Shubhr Mystic Musk",
    brand: "BLISS BELLE",
    price: 899.0,
    image: "https://www.ashpveda.com/cdn/shop/files/MYSTIC_musk_2_8407b5c7-2b65-40b4-994c-e8f934e23669.png?v=1759311020&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/purple-orchid-flowers.jpg",
    category: "wellness",
    benefits: [
      "Non-alcoholic botanical fragrance roll-on",
      "Musk-inspired warm and mysterious aroma",
      "Deep musky fragrance profile with lingering presence",
      "Compact and portable roll-on design",
      "Suitable for daily wear, evening use, and gifting"
    ]
  },
  {
    id: "25",
    name: "Shubhra Oudh Royale",
    brand: "BLISS BELLE",
    price: 999.0,
    image: "https://www.ashpveda.com/cdn/shop/files/OUDH_royal_1_48703dc1-be6a-4d1e-b911-5de64ce601db.png?v=1759309951&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-rose-flowers.jpg",
    category: "wellness",
    benefits: [
      "Non-alcoholic botanical fragrance roll-on",
      "Inspired by the richness and depth of Oudh",
      "Rich, opulent, regal aroma profile",
      "Compact and portable roll-on design",
      "Suitable for daily elegance and gifting"
    ]
  },
  {
    id: "26",
    name: "Ultra Hydration Face Pack - 30gm",
    brand: "BLISS BELLE",
    price: 449.0,
    image: "https://www.ashpveda.com/cdn/shop/files/UltraHydrationFacePack30gm.webp?v=1742802597&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/turmeric-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Deep Hydration – Replenishes moisture for soft, supple skin",
      "Evens Skin Tone – Brightens complexion and reduces pigmentation",
      "Soothes & Calms – Reduces dryness, irritation, and inflammation",
      "Detoxifies & Revitalizes – Removes impurities while refreshing the skin",
      "Boosts Glow – Infused with Saffron and Honey for natural radiance"
    ]
  },
  {
    id: "27",
    name: "Ultra Hydration Radiance Cream with Natural SPF 25 - 12gm",
    brand: "BLISS BELLE",
    price: 299.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Ultra_Hydration_Radiance_Cream_with_Natural_SPF_25-30_gm_front.webp?v=1742640435&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-lily-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Hydrates deeply for all-day suppleness",
      "Protects skin with natural SPF 25",
      "Improves firmness and skin texture",
      "Reduces dullness and enhances radiance"
    ]
  },
  {
    id: "28",
    name: "Ultra Hydration Radiance Cream with Natural SPF 25 - 30gm",
    brand: "BLISS BELLE",
    price: 549.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Ultra_Hydration_Radiance_Cream_with_Natural_SPF_25-30_gm_front.webp?v=1742640435&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-lily-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Hydrates deeply for all-day suppleness",
      "Protects skin with natural SPF 25",
      "Improves firmness and skin texture",
      "Reduces dullness and enhances radiance"
    ]
  },
  {
    id: "29",
    name: "Ultra Hydration Radiance Cream with Natural SPF 25 - 50gm",
    brand: "BLISS BELLE",
    price: 649.0,
    image: "https://www.ashpveda.com/cdn/shop/files/Ultra_Hydration_Radiance_Cream_with_Natural_SPF_25-30_gm_front.webp?v=1742640435&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/pink-lily-flowers.jpg",
    category: "skin-care",
    benefits: [
      "Hydrates deeply for all-day suppleness",
      "Protects skin with natural SPF 25",
      "Improves firmness and skin texture",
      "Reduces dullness and enhances radiance"
    ]
  },
  {
    id: "30",
    name: "Virgin Almond Oil - 120ml",
    brand: "BLISS BELLE",
    price: 699.0,
    image: "https://www.ashpveda.com/cdn/shop/files/VirginAlmondOil120ml.webp?v=1742802751&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/almond-flowers.jpg",
    category: "body-care",
    benefits: [
      "Deeply nourishes and softens dry, sensitive skin",
      "Strengthens hair, reduces hair fall, and promotes healthy growth",
      "Soothes dryness and relieves rough patches",
      "Improves skin texture, elasticity, and smoothness",
      "Lightweight, fast-absorbing, and non-greasy—perfect for daily use"
    ]
  },
  {
    id: "31",
    name: "Virgin Almond Oil - 30ml",
    brand: "BLISS BELLE",
    price: 299.0,
    image: "https://www.ashpveda.com/cdn/shop/files/VirginAlmondOil120ml.webp?v=1742802751&width=4096",
    botanicalIcon: "/small-golden-botanical-leaf-icon.jpg",
    floral: "/almond-flowers.jpg",
    category: "body-care",
    benefits: [
      "Deeply nourishes and softens dry, sensitive skin",
      "Strengthens hair, reduces hair fall, and promotes healthy growth",
      "Soothes dryness and relieves rough patches",
      "Improves skin texture, elasticity, and smoothness",
      "Lightweight, fast-absorbing, and non-greasy—perfect for daily use"
    ]
  },
]

export function ProductGrid() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [sortBy, setSortBy] = useState("featured")
  const [showFilter, setShowFilter] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    let filtered = products

    if (categoryParam && categoryParam !== "all") {
      filtered = products.filter((product) => product.category === categoryParam)
    }

    // Sort products
    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === "name") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    }

    setFilteredProducts(filtered)
  }, [categoryParam, sortBy])

  return (
    <div>
      {/* Filter and Sort Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#87CEEB]">
        <p className="text-[#2C5F7F] font-serif text-lg">{filteredProducts.length} products</p>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 text-[#2C5F7F] hover:text-[#87CEEB] transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="font-serif">Filter</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[#2C5F7F] font-serif">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none font-serif text-[#2C5F7F] cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  )
}

