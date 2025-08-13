"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Trash2, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { playfairDisplay } from "../../components/site-header"
import { useWishlist } from "../../lib/wishlist"
import { useCart } from "../../lib/cart"

export default function WishlistPage() {
  const { items: wishlistItems, removeItem: removeFromWishlist } = useWishlist()
  const { addItem: addToCart } = useCart()

  const handleMoveToCart = (item: any) => {
    addToCart(item)
    removeFromWishlist(item.id)
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className={`text-3xl md:text-4xl font-bold text-center ${playfairDisplay.className}`}>
            My Wishlist
          </h1>
          <p className="text-center text-lg text-gray-600 mt-2">
            Your collection of favorite items.
          </p>
        </header>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="mx-auto h-24 w-24 text-gray-300" />
            <h2 className="mt-6 text-2xl font-semibold">Your Wishlist is Empty</h2>
            <p className="mt-2 text-gray-600">
              Looks like you haven't added any items to your wishlist yet.
            </p>
            <Link href="/catalog" passHref>
              <Button className="mt-6 bg-black text-white hover:bg-gray-800">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all border border-gray-100 rounded-xl">
                <div className="relative overflow-hidden">
                  <Link href={`/catalog/${item.id}`} className="block">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full z-10"
                  >
                    <Trash2 className="h-5 w-5 text-gray-700" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-black transition-colors">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-black">₹{item.price.toLocaleString()}</span>
                  </div>
                  <Button
                    className="w-full bg-black text-white hover:bg-gray-800"
                    onClick={() => handleMoveToCart(item)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Move to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 