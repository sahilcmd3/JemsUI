"use client"

import Image from "next/image"
import { playfairDisplay } from "../../components/site-header"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="container mx-auto">
        {/* User Profile and Address Section */}
        <div className="group bg-gray-100 rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/assets/profile.jpeg" // Using the new profile image
                alt="User Profile Picture"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Alexdandra Lomino</h2>
              <a href="mailto:alexalo978@gmail.com" className="text-gray-800 underline">alexalo978@gmail.com</a>
              <p className="text-gray-600">Female</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center flex-1">
            <span className="text-xl font-semibold mb-1">Member since 2022</span>
            <span className="text-gray-700">3 Orders | 1 Wishlist Item</span>
          </div>
        </div>

        {/* Home Address and Work Address Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="bg-gray-100 rounded-lg p-8 flex-1">
            <h2 className="text-xl font-semibold mb-2">Home Address</h2>
            <p className="text-gray-600">123 Main Street</p>
            <p className="text-gray-600">Apartment 4B</p>
            <p className="text-gray-600">Springfield, IL 62704</p>
            <p className="text-gray-600">United States</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 flex-1">
            <h2 className="text-xl font-semibold mb-2">Work Address</h2>
            <p className="text-gray-600">789 Corporate Drive</p>
            <p className="text-gray-600">Suite 200</p>
            <p className="text-gray-600">Metropolis, NY 10001</p>
            <p className="text-gray-600">United States</p>
          </div>
        </div>

        {/* Your Orders Section */}
        <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${playfairDisplay.className}`}>Your Orders</h2>

        <div className="group bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src="/assets/necklace.jpg" // Placeholder for the product image
              alt="The Extra-Ordinary Grey Pearls"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">The Extra-Ordinary Grey Pearls:</h3>
            <p className="text-gray-600 text-sm">Lavish true, with certifications</p>
            <p className="text-gray-600 text-sm">Shipping to: Louis tame street, near sano river, spain.</p>
            <p className="text-gray-600 text-sm">Payment method: Online</p>
            <p className="text-gray-600 text-sm">Order Status: Processing</p>
            <p className="text-gray-600 text-sm">Paid by: Razorpay</p>
          </div>
          <div className="md:ml-auto text-right">
            <div className="grid grid-cols-2 gap-x-8 gap-y-0 text-gray-600">
              <span>Tax:</span><span className="text-right">$32</span>
              <span className="font-semibold text-gray-900">Grand Total:</span><span className="font-semibold text-gray-900 text-right">$243</span>
            </div>
          </div>
        </div>

        {/* Another Order Section */}
        <div className="group bg-gray-100 rounded-lg p-8 mb-8 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src="/assets/rings.jpg" // Placeholder for the product image
              alt="Diamond Solitaire Ring"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Diamond Solitaire Ring:</h3>
            <p className="text-gray-600 text-sm">Classic design, with certification</p>
            <p className="text-gray-600 text-sm">Shipping to: 123 Main St, Anytown, USA.</p>
            <p className="text-gray-600 text-sm">Payment method: Credit Card</p>
            <p className="text-gray-600 text-sm">Order Status: Shipped</p>
            <p className="text-gray-600 text-sm">Paid by: Stripe</p>
          </div>
          <div className="md:ml-auto text-right">
            <div className="grid grid-cols-2 gap-x-8 gap-y-0 text-gray-600">
              <span>Tax:</span><span className="text-right">$15</span>
              <span className="font-semibold text-gray-900">Grand Total:</span><span className="font-semibold text-gray-900 text-right">$1500</span>
            </div>
          </div>
        </div>

        {/* Third Order Section */}
        <div className="group bg-gray-100 rounded-lg p-8 mb-8 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src="/assets/earrings.jpg" // Placeholder for the product image
              alt="Pearl Drop Earrings"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Pearl Drop Earrings:</h3>
            <p className="text-gray-600 text-sm">Elegant design, authentic pearls</p>
            <p className="text-gray-600 text-sm">Shipping to: 456 Oak Ave, Othercity, USA.</p>
            <p className="text-gray-600 text-sm">Payment method: PayPal</p>
            <p className="text-gray-600 text-sm">Order Status: Delivered</p>
            <p className="text-gray-600 text-sm">Paid by: PayPal</p>
          </div>
          <div className="md:ml-auto text-right">
            <div className="grid grid-cols-2 gap-x-8 gap-y-0 text-gray-600">
              <span>Tax:</span><span className="text-right">$10</span>
              <span className="font-semibold text-gray-900">Grand Total:</span><span className="font-semibold text-gray-900 text-right">$950</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 