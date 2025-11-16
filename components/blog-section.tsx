import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    date: "OCTOBER 01, 2025",
    title: "Ayurvedic Sunscreen vs. Chemical Sunscreen: Which is better?",
    excerpt:
      "Explore the differences between Ayurvedic and chemical sunscreens. Learn about Aloe Vera, Coconut Milk, and natural ingredients like Swarna Bhasma for effective sun protection.",
    image: "/blog-ayurvedic-sunscreen.jpg",
    badge: "/small-ashpveda-logo.jpg",
  },
  {
    id: 2,
    date: "OCTOBER 01, 2025",
    title: "The best ingredient in ayurvedic skin care products- Kashmiri Saffron",
    excerpt:
      "The benefits of Kashmiri Saffron in Ayurvedic skin and hair care are uncovered. Know the benefits of this magical ingredient in the holistic beauty range.",
    image: "/blog-kashmiri-saffron.jpg",
    badge: "/small-ashpveda-logo.jpg",
  },
  {
    id: 3,
    date: "AUGUST 06, 2025",
    title: "Premature Aging: Signs, Causes & Prevention",
    excerpt:
      "Introduction: What is Premature Aging? Premature aging refers to the development of aging signs at an earlier age than expected. While the natural aging process is inevitable, certain factors can...",
    image: "/blog-premature-aging.jpg",
    badge: "/small-ashpveda-logo.jpg",
  },
]

export function BlogSection() {
  return (
    <section className="bg-[#E0F4FF] py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h2 className="font-serif text-4xl lg:text-5xl text-center mb-12">Bliss Belles Blogs</h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Blog Image */}
              <div className="relative h-64">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                {/* Logo Badge */}
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 w-16 h-16">
                  <Image
                    src={post.badge || "/placeholder.svg"}
                    alt="Bliss Belles"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-3">{post.date}</p>
                <h3 className="font-serif text-xl lg:text-2xl mb-3 leading-snug">{post.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="bg-[#87CEEB] hover:bg-[#5FACCE] text-black border-none px-8 py-5 rounded-full"
                  >
                    READ MORE
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button
              variant="outline"
              className="border-2 border-black bg-transparent hover:bg-black hover:text-white px-12 py-6 rounded-full text-base font-medium"
            >
              VIEW ALL
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

