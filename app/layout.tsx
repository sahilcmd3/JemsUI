import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { ClientHeader } from "@/components/client-header"
import { SiteFooter } from "@/components/footer"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Jewelry Marketplace",
  description: "Discover exquisite handcrafted jewelry pieces from around the world",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-background">
            <ClientHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
