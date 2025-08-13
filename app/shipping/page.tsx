import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, MapPin, Package, Gem } from "lucide-react"
import Link from "next/link"

export default function ShippingPage() {
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shipping Information
          </h1>

          <div className="grid gap-8">
            {/* Shipping Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold">Standard Delivery</h3>
                      <Badge variant="secondary">Free</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">5-7 business days</p>
                    <p className="text-sm text-gray-500">Free shipping on orders above ₹10,000</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold">Express Delivery</h3>
                      <Badge>₹500</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">2-3 business days</p>
                    <p className="text-sm text-gray-500">Available in major cities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Delivery Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Metro Cities</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Mumbai</li>
                      <li>Delhi</li>
                      <li>Bangalore</li>
                      <li>Chennai</li>
                      <li>Kolkata</li>
                      <li>Hyderabad</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tier 2 Cities</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Pune</li>
                      <li>Ahmedabad</li>
                      <li>Jaipur</li>
                      <li>Lucknow</li>
                      <li>Kochi</li>
                      <li>Indore</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Other Areas</h4>
                    <p className="text-sm text-gray-600">
                      We deliver to 500+ cities across India. Check availability at checkout.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Packaging */}
            <Card>
              <CardHeader>
                <CardTitle>Secure Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  All jewelry is carefully packaged in our signature boxes with protective padding and tamper-evident
                  seals.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Premium jewelry boxes</li>
                  <li>• Insurance coverage included</li>
                  <li>• Tracking number provided</li>
                  <li>• Signature required on delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
