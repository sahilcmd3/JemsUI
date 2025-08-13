import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Ruler, Gem } from "lucide-react"
import Link from "next/link"

export default function SizingPage() {
  const ringSizes = [
    { us: "4", uk: "H", diameter: "14.9", circumference: "46.8" },
    { us: "5", uk: "J", diameter: "15.7", circumference: "49.3" },
    { us: "6", uk: "L", diameter: "16.5", circumference: "51.8" },
    { us: "7", uk: "N", diameter: "17.3", circumference: "54.4" },
    { us: "8", uk: "P", diameter: "18.1", circumference: "56.9" },
    { us: "9", uk: "R", diameter: "18.9", circumference: "59.5" },
    { us: "10", uk: "T", diameter: "19.8", circumference: "62.1" },
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Size Guide
          </h1>

          <div className="grid gap-8">
            {/* Ring Sizing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="h-5 w-5" />
                  Ring Size Chart
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>US Size</TableHead>
                      <TableHead>UK Size</TableHead>
                      <TableHead>Diameter (mm)</TableHead>
                      <TableHead>Circumference (mm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ringSizes.map((size) => (
                      <TableRow key={size.us}>
                        <TableCell className="font-medium">{size.us}</TableCell>
                        <TableCell>{size.uk}</TableCell>
                        <TableCell>{size.diameter}</TableCell>
                        <TableCell>{size.circumference}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* How to Measure */}
            <Card>
              <CardHeader>
                <CardTitle>How to Measure Your Ring Size</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Method 1: Using a Ring</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                    <li>Take a ring that fits the intended finger perfectly</li>
                    <li>Measure the inner diameter of the ring in millimeters</li>
                    <li>Use our chart above to find your size</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Method 2: Using String or Paper</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                    <li>Wrap a string or strip of paper around your finger</li>
                    <li>Mark where the string/paper overlaps</li>
                    <li>Measure the length in millimeters</li>
                    <li>Use the circumference column in our chart</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Necklace Lengths */}
            <Card>
              <CardHeader>
                <CardTitle>Necklace Length Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Choker</span>
                      <span className="text-gray-600">14-16 inches</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Princess</span>
                      <span className="text-gray-600">17-19 inches</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Matinee</span>
                      <span className="text-gray-600">20-24 inches</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Opera</span>
                      <span className="text-gray-600">28-34 inches</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">
                      <strong>Choker:</strong> Sits snugly around the neck, perfect for formal occasions.
                    </p>
                    <p className="mb-2">
                      <strong>Princess:</strong> Most popular length, sits just below the collarbone.
                    </p>
                    <p className="mb-2">
                      <strong>Matinee:</strong> Falls at the top of the bust, great for business attire.
                    </p>
                    <p>
                      <strong>Opera:</strong> Long enough to be doubled or worn as a single strand.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bracelet Sizing */}
            <Card>
              <CardHeader>
                <CardTitle>Bracelet Size Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Standard Sizes</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Small</span>
                        <span className="text-gray-600">6.5-7 inches</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Medium</span>
                        <span className="text-gray-600">7-7.5 inches</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Large</span>
                        <span className="text-gray-600">7.5-8 inches</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">How to Measure</h4>
                    <p className="text-sm text-gray-600">
                      Wrap a measuring tape around your wrist where you would normally wear a bracelet. Add 0.5-1 inch
                      for a comfortable fit.
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
