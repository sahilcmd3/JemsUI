"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, User, Search, MapPin, Bell, Calendar, Heart } from "lucide-react"
import { Playfair_Display } from "next/font/google"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart"
import { Input } from "@/components/ui/input"

export const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })

export function SiteHeader() {
  const pathname = usePathname()
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/catalog",
      label: "Catalog",
      active: pathname === "/catalog",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Left side: Mobile menu, Search, Location, Contact */}
            <div className="flex items-center space-x-2 flex-1">
              {/* Mobile menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Menu">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px]">
                    <div className="flex flex-col space-y-4 mt-6">
                      {routes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          className={`text-lg font-medium transition-colors hover:text-primary ${
                            route.active ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {route.label}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {!showSearchInput ? (
                <Button variant="ghost" size="icon" aria-label="Search" onClick={() => setShowSearchInput(true)}>
                  <Search className="h-5 w-5" />
                </Button>
              ) : (
                <div className="relative flex-1 max-w-xs ml-2">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full pr-10"
                    onBlur={() => setShowSearchInput(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setShowSearchInput(false);
                      }
                    }}
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                    onClick={() => setShowSearchInput(false)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              )}

              <Button variant="ghost" size="icon" aria-label="Location">
                <MapPin className="h-5 w-5" />
              </Button>

              <Link href="/contact" className="hidden md:flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                <Bell className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center flex-1">
              <Link href="/" className="flex items-center">
                <span className={`text-3xl font-bold tracking-widest ${playfairDisplay.className}`}>Name & CO.</span>
              </Link>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 flex-1 justify-end">
              <div className="hidden md:flex items-center">
                <Link href="/profile" passHref>
                  <Button variant="ghost" size="icon" aria-label="Profile">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/wishlist" passHref>
                  <Button variant="ghost" size="icon" aria-label="Wishlist">
                    <Heart className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/cart" passHref>
                  <Button variant="ghost" size="icon" className="relative" aria-label="Cart">
                    <ShoppingCart className="h-5 w-5" />
                    {isMounted && cart.getItemCount() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {cart.getItemCount()}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center">
                <Link href="/cart" passHref>
                  <Button variant="ghost" size="icon" className="relative" aria-label="Cart">
                    <ShoppingCart className="h-5 w-5" />
                    {isMounted && cart.getItemCount() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {cart.getItemCount()}
                      </span>
                    )}
                  </Button>
                </Link>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col gap-4">
                      {routes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          className={`text-lg font-medium transition-colors hover:text-primary ${
                            route.active ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {route.label}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation for Categories */}
      <nav className="hidden md:block border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <ul className="flex h-12 items-center justify-center space-x-8 text-sm font-medium">
            <li>
              <Link href="/catalog?category=Natural%20Gemstones" className="text-muted-foreground hover:text-foreground">Natural Gemstones</Link>
            </li>
            <li>
              <Link href="/catalog?category=Lab%20Grown" className="text-muted-foreground hover:text-foreground">Lab Grown</Link>
            </li>
            <li>
              <Link href="/catalog?category=Synthetic" className="text-muted-foreground hover:text-foreground">Synthetic</Link>
            </li>
            <li>
              <Link href="/catalog?category=Jewellery" className="text-muted-foreground hover:text-foreground">Jewellery</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}


