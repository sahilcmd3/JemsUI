"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, User, Search, Bell, Heart } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { Playfair_Display } from "next/font/google"

import { Button } from "@/components/ui/button"
import { Portal } from "@/components/portal"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart"
import { Input } from "@/components/ui/input"

export const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })

export function SiteHeader() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [openMenu, setOpenMenu] = useState<"gem" | "jewel" | null>(null)
  const closeTimerRef = useRef<number | null>(null)

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const scheduleClose = () => {
    cancelClose()
    closeTimerRef.current = window.setTimeout(() => setOpenMenu(null), 300)
  }

  useEffect(() => {
    setOpenMenu(null)
  }, [pathname])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const routes = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/catalog", label: "Catalog", active: pathname === "/catalog" },
    { href: "/about", label: "About", active: pathname === "/about" },
    { href: "/contact", label: "Contact", active: pathname === "/contact" },
  ]

  return (
    <>
      <header className="sticky top-0 z-[10001] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Left side */}
            <div className="flex items-center space-x-2 flex-1">
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
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Search"
                  onClick={() => setShowSearchInput(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              ) : (
                <div className="relative flex-1 max-w-xs ml-2">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full pr-10"
                    onBlur={() => setShowSearchInput(false)}
                    onKeyDown={(e) => e.key === "Escape" && setShowSearchInput(false)}
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

              <Link
                href="/contact"
                className="hidden md:flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Bell className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center flex-1">
              <Link href="/" className="flex items-center">
                <span className={`text-3xl font-bold tracking-widest ${playfairDisplay.className}`}>
                  Name & CO.
                </span>
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-2 flex-1 justify-end">
              <div className="hidden md:flex items-center">
                {session ? (
                  <>
                    <Link href="/profile" passHref>
                      <Button variant="ghost" size="icon" aria-label="Profile">
                        <User className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Button variant="outline" onClick={() => signOut()} aria-label="Sign out">
                      Sign out
                    </Button>
                  </>
                ) : (
                  <Link href="/login">
                    <Button variant="outline" aria-label="Sign in">
                      Sign in
                    </Button>
                  </Link>
                )}
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

      {/* Secondary Navigation */}
      <nav className="hidden md:block border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <ul className="flex h-12 items-center justify-center space-x-8 text-sm font-medium">
            
            {/* Gemstones */}
            <li
              className="relative"
              onMouseEnter={() => { cancelClose(); setOpenMenu("gem") }}
              onMouseLeave={scheduleClose}
              onFocus={() => { cancelClose(); setOpenMenu("gem") }}
              onBlur={scheduleClose}
            >
              <button
                className="cursor-pointer select-none outline-none bg-transparent border-0 p-0 text-foreground hover:text-primary"
                aria-haspopup="true"
                aria-expanded={openMenu === "gem"}
              >
                Gemstones
              </button>

              <Portal>
              <div
    className={`${openMenu === "gem" ? "block" : "hidden"} fixed top-16 z-[10010] bg-transparent`}
    onMouseEnter={cancelClose}
    onMouseLeave={scheduleClose}
  >
                   <div className="mx-auto w-[1140px] max-w-[1140px] bg-background border-b border-x shadow-lg px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-16 min-h-[450px]">
                    {/* Precious */}
                    <div>
                      <p className="mb-4 font-semibold text-lg">Precious (Ratna)</p>
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        <li><Link href="/catalog?category=Emerald" onClick={() => setOpenMenu(null)}>Emerald (Panna)</Link></li>
                        <li><Link href="/catalog?category=Ruby" onClick={() => setOpenMenu(null)}>Ruby (Manik)</Link></li>
                        <li><Link href="/catalog?category=Yellow%20Sapphire" onClick={() => setOpenMenu(null)}>Yellow Sapphire (Pukhraj)</Link></li>
                        <li><Link href="/catalog?category=Blue%20Sapphire" onClick={() => setOpenMenu(null)}>Blue Sapphire (Neelam)</Link></li>
                        <li><Link href="/catalog?category=Pearl" onClick={() => setOpenMenu(null)}>Pearl (Moti)</Link></li>
                      </ul>
                    </div>

                    {/* Semi Precious */}
                    <div>
                      <p className="mb-4 font-semibold text-lg">Semi Precious (Upratna)</p>
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        <li><Link href="/catalog?category=Opal" onClick={() => setOpenMenu(null)}>Opal</Link></li>
                        <li><Link href="/catalog?category=Garnet" onClick={() => setOpenMenu(null)}>Red Garnet</Link></li>
                        <li><Link href="/catalog?category=Moonstone" onClick={() => setOpenMenu(null)}>Moonstone</Link></li>
                        <li><Link href="/catalog?category=Peridot" onClick={() => setOpenMenu(null)}>Peridot</Link></li>
                        <li><Link href="/catalog?category=Amethyst" onClick={() => setOpenMenu(null)}>Amethyst</Link></li>
                      </ul>
                    </div>

                    {/* Lab Created */}
                    <div>
                      <p className="mb-4 font-semibold text-lg">Lab Created</p>
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        <li><Link href="/catalog?category=Lab%20Created%20Diamond" onClick={() => setOpenMenu(null)}>Lab Created Diamond</Link></li>
                        <li><Link href="/catalog?category=Lab%20Created%20Ruby" onClick={() => setOpenMenu(null)}>Lab Created Ruby</Link></li>
                        <li><Link href="/catalog?category=Lab%20Created%20Emerald" onClick={() => setOpenMenu(null)}>Lab Created Emerald</Link></li>
                        <li><Link href="/catalog?category=Lab%20Created%20Sapphire" onClick={() => setOpenMenu(null)}>Lab Created Sapphire</Link></li>
                        <li><Link href="/catalog?category=Lab%20Created%20Opal" onClick={() => setOpenMenu(null)}>Lab Created Opal</Link></li>
                      </ul>
                    </div>

                    {/* Birthstones */}
                    <div>
                      <p className="mb-4 font-semibold text-lg">By Birthstone</p>
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        <li><Link href="/catalog?birthstone=January" onClick={() => setOpenMenu(null)}>January Birthstone</Link></li>
                        <li><Link href="/catalog?birthstone=February" onClick={() => setOpenMenu(null)}>February Birthstone</Link></li>
                        <li><Link href="/catalog?birthstone=March" onClick={() => setOpenMenu(null)}>March Birthstone</Link></li>
                        <li><Link href="/catalog?birthstone=April" onClick={() => setOpenMenu(null)}>April Birthstone</Link></li>
                        <li><Link href="/catalog?birthstone=May" onClick={() => setOpenMenu(null)}>May Birthstone</Link></li>
                        <li><Link href="/catalog?birthstone=May" onClick={() => setOpenMenu(null)}>June Birthstone</Link></li>
                        <li><Link href="/catalog?birthstone=May" onClick={() => setOpenMenu(null)}>July Birthstone</Link></li>
                        <li><Link href="/catalog?birthstone=May" onClick={() => setOpenMenu(null)}>August Birthstone</Link></li>
                        <li><Link href="/catalog?birthstone=May" onClick={() => setOpenMenu(null)}>September Birthstone</Link></li>


                      </ul>
                    </div>
                  </div>
                </div>
              </Portal>
            </li>

            {/* Jewellery */}
            <li
              className="relative"
              onMouseEnter={() => { cancelClose(); setOpenMenu("jewel") }}
              onMouseLeave={scheduleClose}
              onFocus={() => { cancelClose(); setOpenMenu("jewel") }}
              onBlur={scheduleClose}
            >
              <button
                className="cursor-pointer select-none outline-none bg-transparent border-0 p-0 text-foreground hover:text-primary"
                aria-haspopup="true"
                aria-expanded={openMenu === "jewel"}
              >
                Jewellery
              </button>

              <Portal>
              <div
    className={`${openMenu === "jewel" ? "block" : "hidden"} fixed top-16 z-[10010] bg-transparent`}
    onMouseEnter={cancelClose}
    onMouseLeave={scheduleClose}
  >
    <div className="mx-auto w-[800px] max-w-[800px] bg-background border-b border-x shadow-lg px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-12 min-h-[400px]">
      {/* Rings */}
      <div>
                      <p className="mb-4 font-semibold text-lg">Rings</p>
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        <li><Link href="/catalog?category=Ring&sub=Gold" onClick={() => setOpenMenu(null)}>Gold Ring</Link></li>
                        <li><Link href="/catalog?category=Ring&sub=Silver" onClick={() => setOpenMenu(null)}>Silver Ring</Link></li>
                        <li><Link href="/catalog?category=Ring&sub=Platinum" onClick={() => setOpenMenu(null)}>Platinum Ring</Link></li>
                      </ul>
                    </div>

                    {/* Bracelets */}
                    <div>
                      <p className="mb-4 font-semibold text-lg">Bracelets</p>
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        <li><Link href="/catalog?category=Bracelet&sub=Gold" onClick={() => setOpenMenu(null)}>Gold Bracelet</Link></li>
                        <li><Link href="/catalog?category=Bracelet&sub=Silver" onClick={() => setOpenMenu(null)}>Silver Bracelet</Link></li>
                        <li><Link href="/catalog?category=Bracelet&sub=Platinum" onClick={() => setOpenMenu(null)}>Platinum Bracelet</Link></li>
                      </ul>
                    </div>

                    {/* Necklaces */}
                    <div>
                      <p className="mb-4 font-semibold text-lg">Necklaces</p>
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        <li><Link href="/catalog?category=Necklace&sub=Gold" onClick={() => setOpenMenu(null)}>Gold Necklace</Link></li>
                        <li><Link href="/catalog?category=Necklace&sub=Silver" onClick={() => setOpenMenu(null)}>Silver Necklace</Link></li>
                        <li><Link href="/catalog?category=Necklace&sub=Platinum" onClick={() => setOpenMenu(null)}>Platinum Necklace</Link></li>
                      </ul>
                    </div>

                    {/* Earrings */}
                    <div>
                      <p className="mb-4 font-semibold text-lg">Earrings</p>
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        <li><Link href="/catalog?category=Earrings&sub=Gold" onClick={() => setOpenMenu(null)}>Gold Earrings</Link></li>
                        <li><Link href="/catalog?category=Earrings&sub=Silver" onClick={() => setOpenMenu(null)}>Silver Earrings</Link></li>
                        <li><Link href="/catalog?category=Earrings&sub=Platinum" onClick={() => setOpenMenu(null)}>Platinum Earrings</Link></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </Portal>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

