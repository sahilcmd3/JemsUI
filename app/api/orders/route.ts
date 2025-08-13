import { type NextRequest, NextResponse } from "next/server"

// Mock orders database
const orders = [
  {
    id: "ORD-001",
    customerId: "CUST-001",
    customerName: "Priya Sharma",
    customerEmail: "priya@example.com",
    items: [
      {
        productId: 1,
        name: "Diamond Solitaire Ring",
        price: 45000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    subtotal: 45000,
    shipping: 500,
    tax: 1350,
    total: 46850,
    status: "Completed",
    paymentMethod: "card",
    paymentStatus: "paid",
    shippingAddress: {
      name: "Priya Sharma",
      address: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      phone: "+91 98765 43210",
    },
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T14:30:00Z",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")
  const customerId = searchParams.get("customerId")

  let filteredOrders = [...orders]

  if (status) {
    filteredOrders = filteredOrders.filter((order) => order.status === status)
  }

  if (customerId) {
    filteredOrders = filteredOrders.filter((order) => order.customerId === customerId)
  }

  return NextResponse.json({
    orders: filteredOrders,
    total: filteredOrders.length,
  })
}

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
      ...orderData,
      status: "Processing",
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    orders.push(newOrder)

    return NextResponse.json({
      success: true,
      order: newOrder,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 })
  }
}
