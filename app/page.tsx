"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Search, Menu, User, Gem, Shield, Truck, RotateCcw, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { playfairDisplay } from "../components/site-header"
import { useCart } from "../lib/cart"

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

  const images = [
    { src: "/assets/rings.jpg", alt: "Rings Collection" },
    { src: "/assets/bracelets.jpg", alt: "Bracelets Collection" },
    { src: "/assets/necklace.jpg", alt: "Necklace Collection" },
    { src: "/assets/earrings.jpg", alt: "Earrings Collection" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex: number) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex: number) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="relative group bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden">
                <Link href={`/catalog/${product.id}`} className="block">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-4 left-4 bg-black text-white">New</Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 fill-gray-600 text-gray-600" />
                      <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-bold text-black">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white" aria-label="Add to Wishlist" onClick={e => e.stopPropagation()}>
                    <Heart className="h-5 w-5 text-gray-700" />
                  </Button>
                </div>
                <div className="p-6 pt-0">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 mt-2" onClick={e => { e.stopPropagation(); addItem({ id: product.id, name: product.name, price: product.price, image: product.image }); }}>
                    <ShoppingCart className="h-4 w-4 mr-2" />Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories -> Image Carousel */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${playfairDisplay.className}`}>
            Discover Our Categories
          </h2>
          <div className="relative w-full mx-auto h-[400px] md:h-[500px] lg:h-[600px] rounded-lg shadow-xl overflow-hidden">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-1000 ease-in-out"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 rounded-full z-10"
              onClick={handlePrev}
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 rounded-full z-10"
              onClick={handleNext}
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
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

      {/* Book an Appointment Section */}
      <section className="relative py-20 px-4 bg-cover bg-center" style={{ backgroundImage: `url('/assets/bg.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto text-center text-white z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${playfairDisplay.className}`}>Interested in Our Products?</h2>
          <p className="text-lg md:text-xl mb-8">
            Book an appointment with our experts for a personalized experience.
          </p>
          <Button size="lg" className="bg-white text-black font-bold hover:bg-gray-200">
            Book Appointment
          </Button>
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
