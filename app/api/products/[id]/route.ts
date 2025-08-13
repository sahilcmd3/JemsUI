import { type NextRequest, NextResponse } from "next/server"

// Mock database - in production, use a real database
// This is the same products array from the main products route
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

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const productIndex = products.findIndex((p) => p.id === id)

    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const updatedData = await request.json()

    // Update the product
    products[productIndex] = {
      ...products[productIndex],
      ...updatedData,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      product: products[productIndex],
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const productIndex = products.findIndex((p) => p.id === id)

    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Remove the product
    const deletedProduct = products.splice(productIndex, 1)[0]

    return NextResponse.json({
      success: true,
      message: `Product "${deletedProduct.name}" has been deleted`,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete product" }, { status: 500 })
  }
}
