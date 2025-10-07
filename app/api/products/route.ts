import { type NextRequest, NextResponse } from "next/server"

// Mock database - in production, use a real database
const products = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 45000,
    originalPrice: 52000,
    description: "Exquisite diamond solitaire ring crafted in 18K gold",
    category: "Rings",
    material: "18K Gold",
    stone: "Diamond",
    images: ["/placeholder.svg?height=400&width=400"],
    stock: 5,
    isNew: true,
    rating: 4.8,
    reviews: 124,
    specifications: {
      weight: "3.2g",
      purity: "18K",
      certification: "GIA Certified",
    },
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: 8500,
    originalPrice: 10000,
    description: "Elegant pearl drop earrings in sterling silver",
    category: "Earrings",
    material: "Silver",
    stone: "Pearl",
    images: ["/placeholder.svg?height=400&width=400"],
    stock: 12,
    isNew: false,
    rating: 4.9,
    reviews: 89,
    specifications: {
      weight: "2.1g",
      purity: "925 Silver",
      certification: "Hallmarked",
    },
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")
  const search = searchParams.get("search")

  let filteredProducts = [...products]

  if (category && category !== "All") {
    filteredProducts = filteredProducts.filter((p) => p.category === category)
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter((p) => p.price >= Number.parseInt(minPrice))
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter((p) => p.price <= Number.parseInt(maxPrice))
  }

  if (search) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()),
    )
  }

  return NextResponse.json({
    products: filteredProducts,
    total: filteredProducts.length,
  })
}

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json()

    const newProduct = {
      id: products.length + 1,
      ...productData,
      rating: 0,
      reviews: 0,
      isNew: true,
    }

    products.push(newProduct)

    return NextResponse.json({
      success: true,
      product: newProduct,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create product" }, { status: 500 })
  }
}
