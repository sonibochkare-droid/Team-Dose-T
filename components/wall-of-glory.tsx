"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Athlete {
  name: string
  achievement: string
}

const athletes: Athlete[] = [
  { name: "Sharad Rakhonde", achievement: "Ironman Gurye, Korea – 2025" },
  { name: "Sandip Shelke", achievement: "Ironman Gurye, Korea – 2025" },
  { name: "Darshan Ghorpade", achievement: "Ironman Kalmar, Sweden – 2025" },
  { name: "Viraj Mahajan", achievement: "Ironman 70.3 Goa – 2025" },
  { name: "Milind Kherudkar", achievement: "Ironman 70.3 Goa – 2025" },
  { name: "Sarabjot Singh", achievement: "Ironman 70.3 Goa – 2025" },
  { name: "Aishwarya Aghav", achievement: "Ironman 70.3 Italy Emilia-Romagna – 2024" },
  { name: "Dipak Kunkulol", achievement: "Comrades Marathon, South Africa – 2025" },
  { name: "Noufal Chakkachurayil", achievement: "Qatar East to West Ultra – 2025" },
  { name: "Deepmala Salunkhe", achievement: "Border Run – 2025 & Comrades Marathon – 2024" },
]

export function WallOfGlory() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef(0)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % athletes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovered])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + athletes.length) % athletes.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % athletes.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    const diff = startXRef.current - endX
    if (diff > 50) handleNext()
    else if (diff < -50) handlePrev()
  }

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3
    return window.innerWidth < 768 ? 1 : 3
  }

  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    setVisibleCards(getVisibleCards())
    const handleResize = () => setVisibleCards(getVisibleCards())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Wall of Glory</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Champions forged through discipline, consistency, and smart training
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: `${100 * (athletes.length / visibleCards)}%`,
            }}
          >
            {athletes.map((athlete, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: `${100 / visibleCards}%` }}>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition group">
                  {/* Background Image */}
                  <img
                    src={`/media/wall-of-glory/athlete-${index + 1}.jpg`}
                    alt={athlete.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0"
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-accent/60"></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">{athlete.name}</h3>
                    <p className="text-sm sm:text-base text-gray-100 font-medium">{athlete.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg transition"
            aria-label="Previous athlete"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg transition"
            aria-label="Next athlete"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {athletes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-3 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
