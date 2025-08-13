"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart"
import { formatCurrency } from "@/lib/utils"

export default function CartPage() {
  const router = useRouter()
  const cart = useCart()
  const [isUpdating, setIsUpdating] = useState(false)

  const handleQuantityChange = (id: number, quantity: number) => {
    setIsUpdating(true)
    setTimeout(() => {
      cart.updateQuantity(id, quantity)
      setIsUpdating(false)
    }, 100)
  }

  const handleCheckout = () => {
    router.push("/checkout")
  }

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground">Looks like you haven't added any items to your cart yet.</p>
          </div>
          <Button asChild size="lg" className="w-full">
            <Link href="/catalog">Start Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  const subtotal = cart.getTotal()
  const tax = subtotal * 0.18
  const total = subtotal + tax

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="text-muted-foreground">{cart.getItemCount()} items in your cart</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted">
                      <Image src={item.image || "/placeholder.jpg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate">{item.name}</h3>
                      <p className="text-primary font-medium">{formatCurrency(item.price)}</p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={isUpdating}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            disabled={isUpdating}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-semibold">{formatCurrency(item.price * item.quantity)}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => cart.removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <Button variant="outline" onClick={() => cart.clearCart()}>
              Clear Cart
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/catalog">Continue Shopping</Link>
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.getItemCount()} items)</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (18%)</span>
                  <span>{formatCurrency(tax)}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">We accept</p>
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    UPI
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
