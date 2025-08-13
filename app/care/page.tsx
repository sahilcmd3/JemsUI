import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Shield, Gem } from "lucide-react"
import Link from "next/link"

export default function JewelryCarePage() {
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
            Jewelry Care Guide
          </h1>

          <div className="grid gap-8">
            {/* General Care */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  General Care Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Do's</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Store jewelry in individual pouches</li>
                      <li>• Clean regularly with soft cloth</li>
                      <li>• Remove before swimming or exercising</li>
                      <li>• Have professional cleaning annually</li>
                      <li>• Check clasps and settings regularly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Don'ts</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Don't expose to harsh chemicals</li>
                      <li>• Don't store pieces together</li>
                      <li>• Don't wear while cleaning</li>
                      <li>• Don't use abrasive cleaners</li>
                      <li>• Don't pull or tug on delicate chains</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metal-Specific Care */}
            <Card>
              <CardHeader>
                <CardTitle>Care by Metal Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-600">Gold Jewelry</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Clean with warm soapy water</li>
                      <li>• Use soft-bristled brush</li>
                      <li>• Avoid chlorine and bleach</li>
                      <li>• Polish with jewelry cloth</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-600">Silver Jewelry</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use silver polishing cloth</li>
                      <li>• Store in anti-tarnish bags</li>
                      <li>• Clean with silver cleaner</li>
                      <li>• Wear regularly to prevent tarnish</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-800">Platinum Jewelry</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Most durable metal</li>
                      <li>• Clean with mild detergent</li>
                      <li>• Professional polish yearly</li>
                      <li>• Develops natural patina</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gemstone Care */}
            <Card>
              <CardHeader>
                <CardTitle>Gemstone Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Diamonds</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Hardest gemstone (10 on Mohs scale)</li>
                      <li>• Clean with ammonia solution</li>
                      <li>• Use soft brush for cleaning</li>
                      <li>• Can withstand ultrasonic cleaning</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Pearls</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Most delicate gemstone</li>
                      <li>• Clean with damp cloth only</li>
                      <li>• Store separately from other jewelry</li>
                      <li>• Avoid perfumes and cosmetics</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Colored Gemstones</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Each stone has unique properties</li>
                      <li>• Generally avoid harsh chemicals</li>
                      <li>• Some are heat sensitive</li>
                      <li>• Professional cleaning recommended</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Emeralds & Opals</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Extra care required</li>
                      <li>• Avoid ultrasonic cleaners</li>
                      <li>• Clean with mild soap only</li>
                      <li>• Professional handling preferred</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Storage Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Storage & Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Proper Storage</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use individual jewelry pouches</li>
                      <li>• Keep in cool, dry place</li>
                      <li>• Avoid direct sunlight</li>
                      <li>• Use jewelry boxes with compartments</li>
                      <li>• Hang necklaces to prevent tangling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Travel Tips</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use travel jewelry organizer</li>
                      <li>• Wrap pieces in soft cloth</li>
                      <li>• Keep valuable pieces in carry-on</li>
                      <li>• Take photos for insurance</li>
                      <li>• Consider hotel safe for storage</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Services */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  LuxeGems offers comprehensive jewelry care services to keep your pieces looking their best.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Professional Cleaning</h4>
                    <p className="text-sm text-gray-600">Deep cleaning and polishing</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Repairs & Restoration</h4>
                    <p className="text-sm text-gray-600">Expert repair services</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Gem className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Appraisal Services</h4>
                    <p className="text-sm text-gray-600">Certified jewelry appraisals</p>
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
