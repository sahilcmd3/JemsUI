import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, X, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-white border-t py-8 px-4 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-4 text-base">Client Care</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Product Care & Repair</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Book an Appointment</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Frequently Asked Questions</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Shipping & Returns</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">name Select Financing</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Gift Cards</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Website Accessibility</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-base">Latest from name</h3>
          <p className="text-gray-600 mb-4">
            Be the first to know about exciting new designs, special events, store openings and much more.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
            <Input type="email" placeholder="Email" className="flex-grow border-b border-gray-400 focus:border-gray-900 px-0 py-1 bg-transparent text-gray-900 placeholder-gray-500" />
            <Button variant="outline" className="border border-gray-900 text-gray-900 hover:bg-gray-100">Sign up</Button>
          </div>
          <div className="flex space-x-4 mb-8">
            <Link href="#" className="text-gray-600 hover:text-gray-900"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900"><X className="h-5 w-5" /></Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900"><Youtube className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-gray-600">
          <span>Change Location: United States</span>
          {/* Dropdown icon goes here */}
        </div>
        <p className="text-gray-600">&copy; T&CO. 2025</p>
      </div>
    </footer>
  )
} 