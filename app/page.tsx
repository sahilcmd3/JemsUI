"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, ShoppingCart, Heart, Search, Menu, User, Gem, Shield, Truck, RotateCcw, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { playfairDisplay } from "../components/site-header"
import { useCart } from "../lib/cart"
import { CategoriesCarousel } from "../components/categories-carousel"
import { ProductsCarousel } from "../components/products-carousel"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 45000,
      originalPrice: 52000,
      image: "/assets/Cat1.jpg",
      rating: 4.8,
      reviews: 124,
      category: "Rings",
      isNew: true,
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 8500,
      originalPrice: 10000,
      image: "/assets/cat2.jpg",
      rating: 4.9,
      reviews: 89,
      category: "Earrings",
      isNew: false,
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      price: 25000,
      originalPrice: 28000,
      image: "/assets/cat3.jpg",
      rating: 4.7,
      reviews: 156,
      category: "Necklaces",
      material: "22K Gold",
      stone: "None",
      isNew: true,
      inStock: false,
    },
    {
      id: 4,
      name: "Emerald Tennis Bracelet",
      price: 35000,
      originalPrice: 40000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 67,
      category: "Bracelets",
      material: "Platinum",
      stone: "Emerald",
      isNew: false,
      inStock: true,
    },
    {
      id: 5,
      name: "Ruby Pendant Set",
      price: 18000,
      originalPrice: 22000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 93,
      category: "Sets",
      material: "18K Gold",
      stone: "Ruby",
      isNew: false,
      inStock: true,
    },
    {
      id: 6,
      name: "Sapphire Stud Earrings",
      price: 12000,
      originalPrice: 15000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 78,
      category: "Earrings",
      material: "White Gold",
      stone: "Sapphire",
      isNew: true,
      inStock: true,
    },
  ]


  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/hardwear-by-tiffany.jpg"
              alt="HardWear by name"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${playfairDisplay.className}`}>HardWear by Name</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Showcasing individual stories of power and resilience, award-winning actresses Greta Lee and Mikey Madison
              and acclaimed painter Anna Weyant wear the bold links of HardWear by name, a symbol of love&apos;s
              transformative strength.
            </p>
            <Link href="/catalog" passHref>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${playfairDisplay.className}`}>Best Sellers</h2>
          <p className="text-center text-lg text-gray-600 mb-12">Our most popular pieces, loved by our customers.</p>
          <ProductsCarousel
            products={featuredProducts}
            onAddToCart={(product) => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
          />
        </div>
      </section>

      {/* Categories Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${playfairDisplay.className}`}>
            Discover Our Categories
          </h2>
          <CategoriesCarousel />
          <div className="text-center mt-12">
            <Link href="/catalog" passHref>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
                Explore More Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${playfairDisplay.className}`}>
            Our Featured Products
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Discover a curated selection of our finest jewelry pieces, handcrafted with precision and passion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex justify-center group overflow-hidden">
              <Image
                src="/assets/red.png"
                alt="Red Necklace"
                width={300}
                height={300}
                className="object-cover transform-gpu transition-all duration-500 ease-out group-hover:scale-115 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:shadow-2xl"
              />
            </div>
            <div className="flex justify-center group overflow-hidden">
              <Image
                src="/assets/multi.png"
                alt="Multi-colored Necklace"
                width={300}
                height={300}
                className="object-cover transform-gpu transition-all duration-500 ease-out group-hover:scale-115 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:shadow-2xl"
              />
            </div>
            <div className="flex justify-center group overflow-hidden">
              <Image
                src="/assets/grey.png"
                alt="Grey Necklace"
                width={300}
                height={300}
                className="object-cover transform-gpu transition-all duration-500 ease-out group-hover:scale-115 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:shadow-2xl"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/catalog" passHref>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
                Show More Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${playfairDisplay.className}`}>What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image src="/placeholder-user.jpg" alt="Customer 1" width={64} height={64} className="rounded-full mb-4" />
                <p className="text-gray-700 mb-4">“Absolutely stunning jewelry! The quality and craftsmanship exceeded my expectations. Will definitely shop again.”</p>
                <span className="font-semibold text-black">Priya S.</span>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 shadow-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image src="/placeholder-user.jpg" alt="Customer 2" width={64} height={64} className="rounded-full mb-4" />
                <p className="text-gray-700 mb-4">“Fast delivery and beautiful packaging. The ring I ordered is even more gorgeous in person!”</p>
                <span className="font-semibold text-black">Amit K.</span>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 shadow-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image src="/placeholder-user.jpg" alt="Customer 3" width={64} height={64} className="rounded-full mb-4" />
                <p className="text-gray-700 mb-4">“Excellent customer service and a wonderful selection. I found the perfect gift for my wife.”</p>
                <span className="font-semibold text-black">Rahul D.</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 px-4 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <Shield className="h-10 w-10 text-black mb-2" />
            <span className="font-semibold text-black">Secure Payment</span>
            <span className="text-gray-500 text-sm">100% Payment Protection</span>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="h-10 w-10 text-black mb-2" />
            <span className="font-semibold text-black">Free Shipping</span>
            <span className="text-gray-500 text-sm">On all orders above ₹5,000</span>
          </div>
          <div className="flex flex-col items-center">
            <RotateCcw className="h-10 w-10 text-black mb-2" />
            <span className="font-semibold text-black">Easy Returns</span>
            <span className="text-gray-500 text-sm">7-day hassle-free returns</span>
          </div>
          <div className="flex flex-col items-center">
            <Gem className="h-10 w-10 text-black mb-2" />
            <span className="font-semibold text-black">Certified Gems</span>
            <span className="text-gray-500 text-sm">Authenticity Guaranteed</span>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${playfairDisplay.className}`}>Stay in the Loop</h2>
          <p className="text-lg text-gray-600 mb-8">Sign up for our newsletter to receive exclusive offers, new arrivals, and more.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input type="email" placeholder="Enter your email" className="flex-1 border-black focus:ring-black" required />
            <Button type="submit" className="bg-black text-white hover:bg-gray-800 px-8 py-3">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
