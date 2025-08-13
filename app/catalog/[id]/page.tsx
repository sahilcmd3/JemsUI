"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Share2, MapPin, Plus, Minus } from "lucide-react";
import { playfairDisplay } from "../../../components/site-header";

// Mock product data (in a real app, fetch from API/database)
const products = [
  {
    id: 1,
    name: "Emerald Radiance Necklace",
    subtitle: "in 18K Gold with Emerald",
    price: 32000,
    originalPrice: 35000,
    images: ["/assets/Cat1.jpg"],
    rating: 4.7,
    reviews: 98,
    category: "Necklaces",
    material: "18K Gold",
    stone: "Emerald",
    description: `A radiant necklace featuring a vivid emerald centerpiece set in 18K gold. Perfect for elegant evenings and special occasions.\n\n• 18K gold\n• Emerald gemstone\n• Adjustable chain\n• Product number: 1001`,
    inStock: true,
  },
  {
    id: 2,
    name: "Ruby Blossom Ring",
    subtitle: "in Rose Gold with Ruby",
    price: 18500,
    originalPrice: 21000,
    images: ["/assets/cat2.jpg"],
    rating: 4.8,
    reviews: 112,
    category: "Rings",
    material: "Rose Gold",
    stone: "Ruby",
    description: `A delicate ring with a brilliant ruby, set in warm rose gold. Inspired by the beauty of blooming flowers.\n\n• Rose gold\n• Ruby gemstone\n• Size options available\n• Product number: 1002`,
    inStock: true,
  },
  {
    id: 3,
    name: "Sapphire Dream Earrings",
    subtitle: "in White Gold with Sapphire",
    price: 24500,
    originalPrice: 27000,
    images: ["/assets/cat3.jpg"],
    rating: 4.9,
    reviews: 134,
    category: "Earrings",
    material: "White Gold",
    stone: "Sapphire",
    description: `Elegant drop earrings with deep blue sapphires set in white gold. A timeless addition to any jewelry box.\n\n• White gold\n• Sapphire gemstones\n• Secure clasp\n• Product number: 1003`,
    inStock: true,
  },
  {
    id: 4,
    name: "Classic Gold Bangle",
    subtitle: "in 22K Gold",
    price: 15000,
    originalPrice: 17000,
    images: ["/assets/cat4.jpg"],
    rating: 4.6,
    reviews: 87,
    category: "Bracelets",
    material: "22K Gold",
    stone: "None",
    description: `A classic bangle crafted from pure 22K gold. Simple, elegant, and perfect for everyday wear.\n\n• 22K gold\n• Slip-on style\n• Product number: 1004`,
    inStock: true,
  },
  {
    id: 5,
    name: "Diamond Halo Pendant",
    subtitle: "in Platinum with Diamond",
    price: 41000,
    originalPrice: 45000,
    images: ["/assets/cat5.jpg"],
    rating: 4.8,
    reviews: 120,
    category: "Pendants",
    material: "Platinum",
    stone: "Diamond",
    description: `A dazzling diamond pendant surrounded by a halo of smaller diamonds, set in platinum.\n\n• Platinum\n• Diamond center stone\n• Adjustable chain\n• Product number: 1005`,
    inStock: false,
  },
  {
    id: 6,
    name: "Pearl Elegance Studs",
    subtitle: "in Silver with Pearl",
    price: 9500,
    originalPrice: 11000,
    images: ["/assets/cat6.jpg"],
    rating: 4.7,
    reviews: 76,
    category: "Earrings",
    material: "Silver",
    stone: "Pearl",
    description: `Classic pearl stud earrings set in sterling silver. Understated and elegant for any occasion.\n\n• Sterling silver\n• Freshwater pearls\n• Product number: 1006`,
    inStock: true,
  },
  {
    id: 7,
    name: "Opal Grace Bracelet",
    subtitle: "in 18K Gold with Opal",
    price: 21000,
    originalPrice: 23000,
    images: ["/assets/cat7.jpg"],
    rating: 4.5,
    reviews: 65,
    category: "Bracelets",
    material: "18K Gold",
    stone: "Opal",
    description: `A graceful bracelet featuring luminous opals set in 18K gold.\n\n• 18K gold\n• Opal stones\n• Adjustable fit\n• Product number: 1007`,
    inStock: true,
  },
  {
    id: 8,
    name: "Citrine Sun Pendant",
    subtitle: "in Yellow Gold with Citrine",
    price: 12000,
    originalPrice: 14000,
    images: ["/assets/cat8.jpg"],
    rating: 4.6,
    reviews: 54,
    category: "Pendants",
    material: "Yellow Gold",
    stone: "Citrine",
    description: `A bright and cheerful pendant with a radiant citrine stone set in yellow gold.\n\n• Yellow gold\n• Citrine gemstone\n• Product number: 1008`,
    inStock: true,
  },
  {
    id: 9,
    name: "Turquoise Charm Ring",
    subtitle: "in Sterling Silver with Turquoise",
    price: 13500,
    originalPrice: 15000,
    images: ["/assets/cat9.jpeg"],
    rating: 4.4,
    reviews: 49,
    category: "Rings",
    material: "Sterling Silver",
    stone: "Turquoise",
    description: `A charming ring with a vibrant turquoise stone set in sterling silver.\n\n• Sterling silver\n• Turquoise gemstone\n• Product number: 1009`,
    inStock: true,
  },
  {
    id: 10,
    name: "Amethyst Royal Necklace",
    subtitle: "in White Gold with Amethyst",
    price: 28000,
    originalPrice: 31000,
    images: ["/assets/cat10.jpeg"],
    rating: 4.9,
    reviews: 101,
    category: "Necklaces",
    material: "White Gold",
    stone: "Amethyst",
    description: `A regal necklace featuring a large amethyst stone set in white gold.\n\n• White gold\n• Amethyst gemstone\n• Adjustable chain\n• Product number: 1010`,
    inStock: true,
  },
];

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [mainImage, setMainImage] = useState(product?.images[0] || "");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    );
  }

  const shortDesc = product.description.split("\n")[0];
  const details = product.description.split("\n").slice(1);
  const relatedProducts = products.filter((p) => p.id !== productId).slice(0, 2);

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Left: Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <Image
                src={mainImage}
                alt={product.name}
                width={500}
                height={500}
                className="object-contain rounded-lg max-h-[400px]"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  className={`border rounded-lg p-1 bg-white ${mainImage === img ? "border-black" : "border-gray-200"}`}
                  onClick={() => setMainImage(img)}
                >
                  <Image src={img} alt={product.name + " " + (idx + 1)} width={80} height={80} className="object-contain rounded" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Breadcrumbs */}
            <div className="text-xs text-gray-500 mb-2">
              Home / Designer Jewelry / {product.category}
            </div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="block text-sm text-gray-700 mb-1">name HardWear</span>
                <h1 className={`text-4xl font-bold ${playfairDisplay.className}`}>{product.name}</h1>
                <h2 className="text-xl text-gray-700 mt-1 mb-2">{product.subtitle}</h2>
              </div>
              <div className="flex gap-3 mt-2">
                <Button variant="ghost" size="icon" aria-label="Add to Wishlist"><Heart className="h-6 w-6" /></Button>
                <Button variant="ghost" size="icon" aria-label="Share"><Share2 className="h-6 w-6" /></Button>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 fill-gray-600 text-gray-600" />
              <span className="text-gray-700 font-medium">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 border-t border-b py-3 mb-2 text-gray-700">
              <span className="flex items-center gap-1"><span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" d="M3.75 19.25h16.5M3.75 19.25v-2.5a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v2.5M3.75 19.25l1.5-10.5A2 2 0 0 1 7.23 7h9.54a2 2 0 0 1 1.98 1.75l1.5 10.5"/></svg></span> Complimentary Shipping & Returns</span>
            </div>
            <div className="flex items-center justify-between border-b py-3 mb-2">
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Quantity</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus /></Button>
                <span className="text-lg font-medium w-6 text-center">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}><Plus /></Button>
              </div>
              <Button className="bg-black text-white px-10 py-6 text-lg font-semibold" style={{minWidth: 180}}>
                ${product.price.toLocaleString()} &nbsp; Add to Bag
              </Button>
            </div>
            <div className="text-xs text-gray-700 mb-4">Buy now and pay later with <b>PayPal</b>. <a href="#" className="underline">Learn more</a></div>
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <Button variant="outline" className="w-full border-black text-black font-medium py-6">Contact a Client Advisor</Button>
              <Link href="#" className="w-full md:w-auto"><Button variant="ghost" className="w-full text-left justify-start text-black font-medium py-6"><MapPin className="inline-block mr-2" />Find in store</Button></Link>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Description & Details</h3>
              <p className="text-gray-700 mb-2">{shortDesc}</p>
              {showFullDesc && (
                <ul className="text-gray-700 list-disc pl-5">
                  {details.map((line, i) => line && <li key={i}>{line.replace(/^•\s*/, "")}</li>)}
                </ul>
              )}
              <button className="text-black font-medium mt-2 underline" onClick={() => setShowFullDesc(v => !v)}>
                {showFullDesc ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((rel) => (
              <Link key={rel.id} href={`/catalog/${rel.id}`} className="group">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all border border-gray-100">
                  <div className="w-full flex items-center justify-center aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={rel.images[0]}
                      alt={rel.name}
                      width={180}
                      height={180}
                      className="object-contain rounded max-h-44"
                    />
                  </div>
                  <h3 className={`font-semibold text-lg mb-1 group-hover:text-black transition-colors text-center ${playfairDisplay.className}`}>{rel.name}</h3>
                  <span className="text-gray-900 font-medium text-base mb-4">₹{rel.price.toLocaleString()}</span>
                  <Button className="w-40 bg-black text-white hover:bg-gray-800 text-sm font-semibold py-2 rounded-lg">
                    View Details
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 