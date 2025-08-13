import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Gem } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      name: "Bridal Collection",
      description: "Exquisite pieces for your special day",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 24,
      priceRange: "₹15,000 - ₹2,50,000",
      featured: true,
    },
    {
      id: 2,
      name: "Diamond Elegance",
      description: "Premium diamond jewelry for sophisticated taste",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 18,
      priceRange: "₹25,000 - ₹5,00,000",
      featured: true,
    },
    {
      id: 3,
      name: "Gold Classics",
      description: "Timeless gold jewelry for every occasion",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 32,
      priceRange: "₹8,000 - ₹1,50,000",
      featured: false,
    },
    {
      id: 4,
      name: "Contemporary Designs",
      description: "Modern jewelry for the fashion-forward",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 15,
      priceRange: "₹5,000 - ₹75,000",
      featured: false,
    },
    {
      id: 5,
      name: "Precious Gemstones",
      description: "Rare and beautiful gemstone jewelry",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 21,
      priceRange: "₹12,000 - ₹3,00,000",
      featured: true,
    },
    {
      id: 6,
      name: "Everyday Essentials",
      description: "Simple, elegant pieces for daily wear",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 28,
      priceRange: "₹3,000 - ₹45,000",
      featured: false,
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 45000,
      originalPrice: 52000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      collection: "Diamond Elegance",
    },
    {
      id: 2,
      name: "Bridal Necklace Set",
      price: 85000,
      originalPrice: 95000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
      collection: "Bridal Collection",
    },
    {
      id: 3,
      name: "Ruby Pendant",
      price: 25000,
      originalPrice: 28000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 156,
      collection: "Precious Gemstones",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Gem className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">LuxeGems</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link href="/catalog" className="text-gray-700 hover:text-purple-600 transition-colors">
                Catalog
              </Link>
              <Link href="/collections" className="text-purple-600 font-medium">
                Collections
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Our Collections
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our carefully curated collections, each telling a unique story of craftsmanship and elegance
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Card key={collection.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {collection.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                    <p className="text-sm opacity-90">{collection.productCount} pieces</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-purple-600">{collection.priceRange}</span>
                    <span className="text-sm text-gray-500">{collection.productCount} items</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured from Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Handpicked pieces from our most popular collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.collection}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-3 group-hover:text-purple-600 transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-purple-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gem className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">LuxeGems</span>
              </div>
              <p className="text-gray-400 mb-4">
                Crafting timeless jewelry pieces that celebrate life's precious moments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/catalog" className="hover:text-white transition-colors">
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:text-white transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/shipping" className="hover:text-white transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/sizing" className="hover:text-white transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="/care" className="hover:text-white transition-colors">
                    Jewelry Care
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 hello@luxegems.com</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 Mumbai, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LuxeGems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
