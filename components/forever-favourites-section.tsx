import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ForeverFavouritesSection() {
  const products = [
    {
      id: 1,
      title: "Hair Wash",
      name: "GotuKola & Green Tea Hair Wash",
      image: "https://www.ashpveda.com/cdn/shop/files/New_Beauty_Products_Desktop_A.webp?v=1742306206&width=2000",
    },
    {
      id: 2,
      title: "Face Mist",
      name: "Kannauj Rose Water Face Mist",
      image: "https://www.ashpveda.com/cdn/shop/files/New_Beauty_Products_Desktop_C.webp?v=1742306206&width=2000",
    },
    {
      id: 3,
      title: "Body Lotion",
      name: "Jasmine & Mulberry Body Lotion",
      image: "https://www.ashpveda.com/cdn/shop/files/New_Beauty_Products_Desktop_B.webp?v=1742306206&width=2000",
    },
  ]

  return (
    <section className="bg-[#e8dfd5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[#2c2420] mb-16">Forever Favourites</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-[#d4c4b0] rounded-3xl overflow-hidden mb-6 aspect-square flex items-center justify-center p-8 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-3xl font-serif text-[#2c2420] mb-2">{product.title}</h3>
                <p className="text-lg text-[#5c4a3a]">{product.name}</p>
              </div>

              <div className="flex justify-center">
                <Link href="/products">
                  <Button className="bg-[#87CEEB] hover:bg-[#c4a882] text-[#2c2420] px-10 py-5 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-all duration-300">
                    CHECK NOW
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

