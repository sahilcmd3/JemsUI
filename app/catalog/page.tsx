"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, ShoppingCart, Heart, Filter, Grid, List, Search, Gem, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { playfairDisplay } from "../../components/site-header"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { useCart } from "../../lib/cart"
import { useWishlist } from "../../lib/wishlist"

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [filterOpen, setFilterOpen] = useState(false)
  const { addItem: addCartItem } = useCart()
  const { addItem: toggleWishlistItem, isInWishlist } = useWishlist()

  const products = [
    {
      id: 1,
      name: "Emerald Radiance Necklace",
      price: 32000,
      originalPrice: 35000,
      image: "/assets/Cat1.jpg",
      rating: 4.7,
      reviews: 98,
      category: "Necklaces",
      material: "18K Gold",
      stone: "Emerald",
      isNew: true,
      inStock: true,
    },
    {
      id: 2,
      name: "Ruby Blossom Ring",
      price: 18500,
      originalPrice: 21000,
      image: "/assets/cat2.jpg",
      rating: 4.8,
      reviews: 112,
      category: "Rings",
      material: "Rose Gold",
      stone: "Ruby",
      isNew: false,
      inStock: true,
    },
    {
      id: 3,
      name: "Sapphire Dream Earrings",
      price: 24500,
      originalPrice: 27000,
      image: "/assets/cat3.jpg",
      rating: 4.9,
      reviews: 134,
      category: "Earrings",
      material: "White Gold",
      stone: "Sapphire",
      isNew: true,
      inStock: true,
    },
    {
      id: 4,
      name: "Classic Gold Bangle",
      price: 15000,
      originalPrice: 17000,
      image: "/assets/cat4.jpg",
      rating: 4.6,
      reviews: 87,
      category: "Bracelets",
      material: "22K Gold",
      stone: "None",
      isNew: false,
      inStock: true,
    },
    {
      id: 5,
      name: "Diamond Halo Pendant",
      price: 41000,
      originalPrice: 45000,
      image: "/assets/cat5.jpg",
      rating: 4.8,
      reviews: 120,
      category: "Pendants",
      material: "Platinum",
      stone: "Diamond",
      isNew: true,
      inStock: false,
    },
    {
      id: 6,
      name: "Pearl Elegance Studs",
      price: 9500,
      originalPrice: 11000,
      image: "/assets/cat6.jpg",
      rating: 4.7,
      reviews: 76,
      category: "Earrings",
      material: "Silver",
      stone: "Pearl",
      isNew: false,
      inStock: true,
    },
    {
      id: 7,
      name: "Opal Grace Bracelet",
      price: 21000,
      originalPrice: 23000,
      image: "/assets/cat7.jpg",
      rating: 4.5,
      reviews: 65,
      category: "Bracelets",
      material: "18K Gold",
      stone: "Opal",
      isNew: false,
      inStock: true,
    },
    {
      id: 8,
      name: "Citrine Sun Pendant",
      price: 12000,
      originalPrice: 14000,
      image: "/assets/cat8.jpg",
      rating: 4.6,
      reviews: 54,
      category: "Pendants",
      material: "Yellow Gold",
      stone: "Citrine",
      isNew: true,
      inStock: true,
    },
    {
      id: 9,
      name: "Turquoise Charm Ring",
      price: 13500,
      originalPrice: 15000,
      image: "/assets/cat9.jpeg",
      rating: 4.4,
      reviews: 49,
      category: "Rings",
      material: "Sterling Silver",
      stone: "Turquoise",
      isNew: false,
      inStock: true,
    },
    {
      id: 10,
      name: "Amethyst Royal Necklace",
      price: 28000,
      originalPrice: 31000,
      image: "/assets/cat10.jpeg",
      rating: 4.9,
      reviews: 101,
      category: "Necklaces",
      material: "White Gold",
      stone: "Amethyst",
      isNew: true,
      inStock: true,
    },
  ]

  const categories = [
    {
      name: "Natural Gemstones",
      subcategories: [
        {
          name: "Precious",
          subcategories: [
            "Emerald",
            "Ruby",
            "Yellow Sapphire",
            "Blue Sapphire"
          ]
        },
        {
          name: "Semi Precious",
          subcategories: [
            "Tourmaline",
            "Amethyst",
            "Citrine",
            "Topaz",
            "Quartz"
          ]
        }
      ]
    },
    {
      name: "Lab Grown",
      subcategories: [
        "Emerald",
        "Ruby",
        "Yellow Sapphire",
        "Blue Sapphire",
        "Tourmaline",
        "Amethyst",
        "Citrine",
        "Topaz",
        "Quartz"
      ]
    },
    {
      name: "Synthetic",
      subcategories: [
        "Green Emerald",
        "Ruby",
        "Blue",
        "Pink"
      ]
    },
    {
      name: "Jewellery",
      subcategories: []
    }
  ]
  const materials = ["18K Gold", "22K Gold", "Silver", "Platinum", "White Gold"]
  const stones = ["Diamond", "Ruby", "Emerald", "Sapphire", "Pearl", "None"]

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    // Category filter
    let categoryMatch = true
    if (selectedCategories.length > 0) {
      categoryMatch = selectedCategories.includes(product.category)
    }
    // Subcategory filter (stone)
    let subcategoryMatch = true
    if (selectedSubcategories.length > 0) {
      subcategoryMatch = selectedSubcategories.includes(product.stone)
    }
    // Price filter
    let priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && subcategoryMatch && priceMatch
  })

  // Checkbox handlers
  function handleCategoryChange(name: string) {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    )
  }
  function handleSubcategoryChange(name: string) {
    setSelectedSubcategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 hidden lg:block">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={100000} step={1000} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Categories</h3>
                  <Accordion type="multiple" className="w-full">
                    {categories.map((cat) => (
                      <AccordionItem key={cat.name} value={cat.name}>
                        <AccordionTrigger>{cat.name}</AccordionTrigger>
                        <AccordionContent>
                          {cat.subcategories && cat.subcategories.length > 0 && (
                            <div className="ml-2 space-y-1">
                              {cat.subcategories.map((sub) =>
                                typeof sub === "string" ? (
                                  <div key={sub} className="flex items-center space-x-2">
                                    <Checkbox id={sub} checked={selectedSubcategories.includes(sub)} onCheckedChange={() => handleSubcategoryChange(sub)} />
                                    <label htmlFor={sub} className="text-sm cursor-pointer">{sub}</label>
                                  </div>
                                ) : (
                                  <div key={sub.name}>
                                    <div className="flex items-center space-x-2 mt-2">
                                      <Checkbox id={sub.name} checked={selectedCategories.includes(sub.name)} onCheckedChange={() => handleCategoryChange(sub.name)} />
                                      <label htmlFor={sub.name} className="text-sm cursor-pointer font-medium">{sub.name}</label>
                                    </div>
                                    <div className="ml-6 space-y-1">
                                      {sub.subcategories.map((deep) => (
                                        <div key={deep} className="flex items-center space-x-2">
                                          <Checkbox id={deep} checked={selectedSubcategories.includes(deep)} onCheckedChange={() => handleSubcategoryChange(deep)} />
                                          <label htmlFor={deep} className="text-sm cursor-pointer">{deep}</label>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <Button className="w-full border-gray-300 text-gray-800 hover:bg-gray-100" variant="outline">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Filter Button */}
          <div className="block lg:hidden mb-4">
            <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => setFilterOpen(true)} aria-label="Open Filters">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="max-w-xs w-full p-0">
                <Card className="h-full rounded-none border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Filter className="h-5 w-5" />
                      <h2 className="text-lg font-semibold">Filters</h2>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <Slider value={priceRange} onValueChange={setPriceRange} max={100000} step={1000} className="mb-2" />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Categories</h3>
                      <Accordion type="multiple" className="w-full">
                        {categories.map((cat) => (
                          <AccordionItem key={cat.name} value={cat.name}>
                            <AccordionTrigger>{cat.name}</AccordionTrigger>
                            <AccordionContent>
                              {cat.subcategories && cat.subcategories.length > 0 && (
                                <div className="ml-2 space-y-1">
                                  {cat.subcategories.map((sub) =>
                                    typeof sub === "string" ? (
                                      <div key={sub} className="flex items-center space-x-2">
                                        <Checkbox id={sub} checked={selectedSubcategories.includes(sub)} onCheckedChange={() => handleSubcategoryChange(sub)} />
                                        <label htmlFor={sub} className="text-sm cursor-pointer">{sub}</label>
                                      </div>
                                    ) : (
                                      <div key={sub.name}>
                                        <div className="flex items-center space-x-2 mt-2">
                                          <Checkbox id={sub.name} checked={selectedCategories.includes(sub.name)} onCheckedChange={() => handleCategoryChange(sub.name)} />
                                          <label htmlFor={sub.name} className="text-sm cursor-pointer font-medium">{sub.name}</label>
                                        </div>
                                        <div className="ml-6 space-y-1">
                                          {sub.subcategories.map((deep) => (
                                            <div key={deep} className="flex items-center space-x-2">
                                              <Checkbox id={deep} checked={selectedSubcategories.includes(deep)} onCheckedChange={() => handleSubcategoryChange(deep)} />
                                              <label htmlFor={deep} className="text-sm cursor-pointer">{deep}</label>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>

                    <Button className="w-full border-gray-300 text-gray-800 hover:bg-gray-100" variant="outline">
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              </SheetContent>
            </Sheet>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className={`text-2xl font-bold ${playfairDisplay.className}`}>Jewelry Catalog</h1>
                <Badge variant="secondary" className="bg-gray-200 text-gray-800">{products.length} products</Badge>
              </div>
              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-40 border-gray-300 bg-white text-gray-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border border-gray-300 rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-black text-white hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-black text-white hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/catalog/${product.id}`} className="block group">
                  <Card
                    className={`group hover:shadow-lg transition-all duration-300 ${
                      viewMode === "list" ? "flex flex-row" : ""
                    }`}
                  >
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === "list" ? "w-full h-full" : "w-full h-64"
                        }`}
                      />
                      {product.isNew && (
                        <Badge className="absolute top-4 left-4 bg-gray-800 text-white">New</Badge>
                      )}
                      {!product.inStock && <Badge className="absolute top-4 left-4 bg-gray-800 text-white">Out of Stock</Badge>}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleWishlistItem({ ...product, quantity: 1 })
                        }}
                      >
                        <Heart className={`h-4 w-4 text-gray-600 ${isInWishlist(product.id) ? "fill-current text-red-500" : ""}`} />
                      </Button>
                    </div>
                    <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs bg-gray-200 text-gray-800">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-gray-600 text-gray-600" />
                          <span className="text-sm text-gray-600">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-black transition-colors">{product.name}</h3>
                      <div className="text-sm text-gray-600 mb-3">
                        <p>Material: {product.material}</p>
                        <p>Stone: {product.stone}</p>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-black">₹{product.price.toLocaleString()}</span>
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-black text-white hover:bg-gray-800 mt-2"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addCartItem({ id: product.id, name: product.name, price: product.price, image: product.image })
                        }}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled className="border-gray-300 text-gray-500">
                  Previous
                </Button>
                <Button variant="default" className="bg-black text-white hover:bg-gray-800">1</Button>
                <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100">2</Button>
                <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100">3</Button>
                <Button variant="outline" className="border-gray-300 text-gray-500">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
