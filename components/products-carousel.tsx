"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Star, ShoppingCart, Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating?: number
  reviews?: number
  category?: string
  isNew?: boolean
  inStock?: boolean
}

interface ProductsCarouselProps {
  products: Product[]
  onAddToCart?: (product: Product) => void
}

export function ProductsCarousel({ products, onAddToCart }: ProductsCarouselProps) {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!emblaApi) return

    autoplay.play()
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, autoplay])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    autoplay.reset()
    emblaApi.scrollPrev()
  }, [emblaApi, autoplay])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    autoplay.reset()
    emblaApi.scrollNext()
  }, [emblaApi, autoplay])

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    e.stopPropagation()
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  return (
    <div className="relative w-full">
      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container flex gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_22%] min-w-0"
            >
              <div className="relative group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <Link href={`/catalog/${product.id}`} className="block flex-1 flex flex-col">
                  <div className="relative overflow-hidden bg-gray-100">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 22vw"
                      />
                    </div>
                    {product.isNew && (
                      <Badge className="absolute top-4 left-4 bg-black text-white">New</Badge>
                    )}
                    {product.inStock === false && (
                      <Badge className="absolute top-4 right-4 bg-red-500 text-white">Out of Stock</Badge>
                    )}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white shadow-md"
                        aria-label="Add to Wishlist"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Heart className="h-5 w-5 text-gray-700" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                    {product.rating && (
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">
                          {product.rating} {product.reviews && `(${product.reviews})`}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-3 mt-auto">
                      <span className="text-xl font-bold text-black">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
                <div className="p-4 pt-0">
                  <Button
                    className="w-full bg-black text-white hover:bg-gray-800"
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={product.inStock === false}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {canScrollPrev && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200"
          aria-label="Previous products"
        >
          <ChevronLeft className="h-6 w-6 text-gray-900" />
        </Button>
      )}

      {canScrollNext && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200"
          aria-label="Next products"
        >
          <ChevronRight className="h-6 w-6 text-gray-900" />
        </Button>
      )}
    </div>
  )
}

