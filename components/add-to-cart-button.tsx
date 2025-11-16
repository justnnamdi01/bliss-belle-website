"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { ShoppingCart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    category: string
  }
  className?: string
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Button onClick={handleAddToCart} className={className} size="sm">
      <ShoppingCart className="w-4 h-4 mr-2" />
      Add to Cart
    </Button>
  )
}

