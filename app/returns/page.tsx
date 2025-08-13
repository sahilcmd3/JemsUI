import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RotateCcw, Shield, Clock, CheckCircle, Gem } from "lucide-react"
import Link from "next/link"

export default function ReturnsPage() {
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
            Returns & Exchanges
          </h1>

          <div className="grid gap-8">
            {/* Return Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  30-Day Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We offer a hassle-free 30-day return policy for all jewelry purchases. Items must be in original
                  condition with all packaging and certificates.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">What's Covered</h4>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>• Manufacturing defects</li>
                        <li>• Size issues</li>
                        <li>• Change of mind</li>
                        <li>• Damaged during shipping</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Conditions</h4>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>• Original packaging required</li>
                        <li>• Certificate of authenticity</li>
                        <li>• No signs of wear</li>
                        <li>• Within 30 days of delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Return Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Return Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Contact Us</h4>
                    <p className="text-sm text-gray-600">Email or call our customer service team</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Get Return Label</h4>
                    <p className="text-sm text-gray-600">We'll send you a prepaid return label</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Ship Item</h4>
                    <p className="text-sm text-gray-600">Pack securely and ship using our label</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Get Refund</h4>
                    <p className="text-sm text-gray-600">Refund processed within 5-7 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exchange Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Exchange Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We offer free exchanges for size adjustments and style preferences within 30 days of purchase.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Size Adjustments</h4>
                    <p className="text-sm text-gray-600">
                      Free resizing for rings within 2 sizes up or down. Some restrictions apply for intricate designs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Style Exchange</h4>
                    <p className="text-sm text-gray-600">
                      Exchange for items of equal or higher value. Price difference will be charged separately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Customer Service</h4>
                    <p className="text-sm text-gray-600 mb-1">📞 +91 98765 43210</p>
                    <p className="text-sm text-gray-600 mb-1">📧 returns@luxegems.com</p>
                    <p className="text-sm text-gray-600">Mon-Sat: 10 AM - 7 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Return Address</h4>
                    <p className="text-sm text-gray-600">
                      LuxeGems Returns Department
                      <br />
                      123 Jewelry Street
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
