"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CategoryItem {
  id: number
  name: string
  image: string
  link: string
}

interface CategoriesCarouselProps {
  categories?: CategoryItem[]
}

const defaultCategories: CategoryItem[] = [
  {
    id: 1,
    name: "Rings",
    image: "/assets/rings.jpg",
    link: "/catalog?category=Ring",
  },
  {
    id: 2,
    name: "Bracelets",
    image: "/assets/bracelets.jpg",
    link: "/catalog?category=Bracelet",
  },
  {
    id: 3,
    name: "Necklaces",
    image: "/assets/necklace.jpg",
    link: "/catalog?category=Necklace",
  },
  {
    id: 4,
    name: "Earrings",
    image: "/assets/earrings.jpg",
    link: "/catalog?category=Earrings",
  },
  {
    id: 5,
    name: "Pendants",
    image: "/assets/pendants.jpg",
    link: "/catalog?category=Pendant",
  },
  {
    id: 6,
    name: "Gemstones",
    image: "/assets/Cat1.jpg",
    link: "/catalog?category=Gemstone",
  },
]

export function CategoriesCarousel({ categories = defaultCategories }: CategoriesCarouselProps) {
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

  return (
    <div className="relative w-full">
      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container flex gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="embla__slide flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_22%] min-w-0"
            >
              <Link
                href={category.link}
                className="group relative block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg">{category.name}</h3>
                </div>
              </Link>
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
          aria-label="Previous categories"
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
          aria-label="Next categories"
        >
          <ChevronRight className="h-6 w-6 text-gray-900" />
        </Button>
      )}
    </div>
  )
}

