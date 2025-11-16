import Link from "next/link"

export function CategoryNavSection() {
  const categories = [
    { name: "Hair Care", slug: "hair-care" },
    { name: "Skin Care", slug: "skin-care" },
    { name: "Bath & Body", slug: "body-care" },
    { name: "Gifting", slug: "gifting" },
  ]

  return (
    <section className="bg-[#e8dfd5] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <nav className="flex flex-col items-center gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2c2420] hover:text-[#8b6f47] transition-colors duration-300"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}

