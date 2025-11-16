"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("orderNumber")

  return (
    <div className="min-h-screen bg-[#E0F4FF]">
      <Header />
      <div className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-blue-600" />
              </div>
              <CardTitle className="text-3xl">Order Placed Successfully!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Thank you for your order. We've received your order and will process it soon.
              </p>
              {orderNumber && (
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="text-2xl font-semibold font-mono">{orderNumber}</p>
                </div>
              )}
              <p className="text-sm text-muted-foreground">
                You will receive a confirmation email shortly with your order details.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/products">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
                <Link href="/">
                  <Button>Back to Home</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

