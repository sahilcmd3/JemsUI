import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About Us | Luxury Jewelry Marketplace",
  description: "Learn about our story, craftsmanship, and commitment to quality jewelry.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Our Jewelry Marketplace</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Discover the story behind our passion for exquisite jewelry and our commitment to quality craftsmanship.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2010, our jewelry marketplace began with a simple vision: to connect discerning customers with
            the finest handcrafted jewelry from around the world.
          </p>
          <p className="text-lg mb-4">
            What started as a small collection has grown into a curated marketplace featuring unique pieces that combine
            traditional craftsmanship with contemporary design.
          </p>
          <p className="text-lg">
            Each piece in our collection tells a story and represents our commitment to quality, authenticity, and
            ethical sourcing.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.jpg" alt="Jewelry craftsman at work" fill className="object-cover" />
        </div>
      </div>

      <Separator className="my-16" />

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on materials or craftsmanship, ensuring each piece meets our exacting standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Artistry</h3>
              <p className="text-muted-foreground">
                We celebrate the unique vision and skill of our jewelry artisans, supporting traditional and innovative
                techniques.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M3 6v18h18V6"></path>
                    <path d="M3 6V3h18v3"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to ethical sourcing and environmentally responsible practices throughout our supply
                chain.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-16" />

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image src="/placeholder-user.jpg" alt="Team member" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Priya Sharma</h3>
            <p className="text-muted-foreground">Founder & Creative Director</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image src="/placeholder-user.jpg" alt="Team member" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Raj Patel</h3>
            <p className="text-muted-foreground">Master Craftsman</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image src="/placeholder-user.jpg" alt="Team member" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Ananya Gupta</h3>
            <p className="text-muted-foreground">Customer Experience Manager</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover our collection of handcrafted jewelry pieces, each with its own unique story and character.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/catalog">Browse Collection</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
