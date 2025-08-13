"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Truck, Shield, ArrowLeft, Gem } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  const cartItems = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 45000,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 8500,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 500
  const tax = subtotal * 0.03 // 3% GST
  const total = subtotal + shipping + tax

  const handlePayment = async () => {
    try {
      // In a real implementation, you would:
      // 1. Validate the form data
      // 2. Create an order in your database
      // 3. Initialize payment with Razorpay/Stripe

      // Example API call to your payment endpoint
      const response = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
          currency: "INR", // or 'USD' for international
          paymentMethod,
          customerInfo: {
            name: "Test Customer",
            email: "customer@example.com",
          },
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || "Payment initialization failed")
      }

      // For Razorpay (Indian payments)
      if (data.orderId) {
        // In production, you would load the Razorpay SDK and show the payment form:
        /*
        const options = {
          key: data.keyId,
          amount: data.amount,
          currency: data.currency,
          name: "LuxeGems",
          description: "Jewelry Purchase",
          order_id: data.orderId,
          handler: function (response) {
            // Handle successful payment
            window.location.href = `/confirmation?reference=${response.razorpay_payment_id}`;
          },
          prefill: {
            name: 'Test Customer',
            email: 'customer@example.com',
            contact: '+91 98765 43210'
          },
          theme: {
            color: "#9333ea"
          }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        */

        // For demo purposes:
        alert("Razorpay payment would be initialized here with order ID: " + data.orderId)
      }

      // For Stripe (International payments)
      if (data.clientSecret) {
        // In production, you would load the Stripe SDK and show the payment form:
        /*
        const stripe = await loadStripe(data.publishableKey);
        stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'Test Customer',
              email: 'customer@example.com'
            }
          }
        }).then(result => {
          if (result.error) {
            // Show error to customer
            console.error(result.error.message);
          } else {
            // Payment processed successfully
            window.location.href = `/confirmation?reference=${result.paymentIntent.id}`;
          }
        });
        */

        // For demo purposes:
        alert("Stripe payment would be initialized here with client secret: " + data.clientSecret)
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment processing failed. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter street address" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Enter city" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input id="pincode" placeholder="Enter PIN code" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span>Credit/Debit Card</span>
                        <div className="flex space-x-2">
                          <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                            VISA
                          </div>
                          <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">
                            MC
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span>UPI Payment</span>
                        <div className="text-sm text-gray-600">GPay, PhonePe, Paytm</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                      Net Banking
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      Cash on Delivery
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="Enter name as on card" />
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="mt-6">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" placeholder="yourname@upi" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="saveInfo" />
                    <Label htmlFor="saveInfo" className="text-sm">
                      Save this information for faster checkout next time
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for exclusive offers
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹{shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (GST)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <Shield className="h-4 w-4" />
                  <span>Secure 256-bit SSL encryption</span>
                </div>

                {/* Place Order Button */}
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-3"
                  onClick={handlePayment}
                >
                  Place Order - ₹{total.toLocaleString()}
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
