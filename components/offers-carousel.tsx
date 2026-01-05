"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

/* ---------------------------------- TYPES --------------------------------- */
interface CarouselSlide {
  id: number
  image: string
  title?: string
  subtitle?: string
  link?: string
  badge?: string
}

interface OffersCarouselProps {
  slides?: CarouselSlide[]
}

/* ------------------------------ DEFAULT DATA ------------------------------- */
const defaultSlides: CarouselSlide[] = [
  {
    id: 1,
    image: "/assets/rings.jpg",
    title: "Exclusive Ring Collection",
    subtitle: "Up to 30% off on selected items",
    link: "/catalog?category=Ring",
    badge: "New Arrival",
  },
  {
    id: 2,
    image: "/assets/bracelets.jpg",
    title: "Luxury Bracelets",
    subtitle: "Shop our finest collection",
    link: "/catalog?category=Bracelet",
    badge: "Trending",
  },
  {
    id: 3,
    image: "/assets/necklace.jpg",
    title: "Elegant Necklaces",
    subtitle: "Discover timeless beauty",
    link: "/catalog?category=Necklace",
    badge: "Popular",
  },
  {
    id: 4,
    image: "/assets/earrings.jpg",
    title: "Stunning Earrings",
    subtitle: "Perfect for every occasion",
    link: "/catalog?category=Earrings",
    badge: "Limited Edition",
  },
  {
    id: 5,
    image: "/assets/Cat1.jpg",
    title: "Special Offers",
    subtitle: "Save up to 40% on premium jewelry",
    link: "/catalog",
    badge: "Sale",
  },
]

/* ----------------------------- MAIN COMPONENT ------------------------------ */
export function OffersCarousel({ slides = defaultSlides }: OffersCarouselProps) {
  /* --------------------------- AUTOPLAY INSTANCE --------------------------- */
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  )

  /* ----------------------------- EMBLA SETUP ------------------------------ */
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  /* ------------------------- EMBLA LIFECYCLE ------------------------------- */
  useEffect(() => {
    if (!emblaApi) return

    autoplay.play()
    setSelectedIndex(emblaApi.selectedScrollSnap())

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, autoplay])

  /* --------------------------- NAVIGATION ---------------------------------- */
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

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      autoplay.reset()
      emblaApi.scrollTo(index)
    },
    [emblaApi, autoplay]
  )

  /* ------------------------------ JSX -------------------------------------- */
  return (
    <div className="relative w-full bg-background border-b overflow-hidden">
      <div ref={emblaRef} className="embla">
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
            >
              <Link
                href={slide.link ?? "/catalog"}
                className="relative block w-full h-[300px] md:h-[400px] lg:h-[450px]"
              >
                <Image
                  src={slide.image}
                  alt={slide.title ?? "Offer"}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-2xl">
                      {slide.badge && (
                        <span className="inline-block mb-4 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                          {slide.badge}
                        </span>
                      )}

                      {slide.title && (
                        <h2 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                          {slide.title}
                        </h2>
                      )}

                      {slide.subtitle && (
                        <p className="mb-6 text-lg md:text-xl text-white/90">
                          {slide.subtitle}
                        </p>
                      )}

                      <span className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-black hover:bg-white/90 transition">
                        Shop Now
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Prev Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white shadow"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </Button>

      {/* Next Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white shadow"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              selectedIndex === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
