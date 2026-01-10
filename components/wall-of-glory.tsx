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

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % athletes.length)
    }, 5000) // 5 seconds per slide

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
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {athletes.map((athlete, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-yellow-200/5 rounded-3xl p-8 sm:p-12 border-2 border-primary/20 hover:border-accent/40 transition">
                  <div className="max-w-2xl mx-auto">
                    {/* Athlete Image Placeholder */}
                    <div className="mb-8 flex justify-center">
                      <img
                        src={`/media/wall-of-glory/athlete-${index + 1}.jpg`}
                        alt={athlete.name}
                        className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-primary/20"
                        onError={(e) => {
                          // Fallback to gradient circle if image not found
                          e.currentTarget.style.display = "none"
                          e.currentTarget.nextElementSibling?.classList.remove("hidden")
                        }}
                      />
                      {/* Fallback gradient placeholder if image missing */}
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg hidden">
                        <div className="text-white text-6xl font-bold">{athlete.name.charAt(0)}</div>
                      </div>
                    </div>

                    {/* Athlete Details */}
                    <h3 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-4">{athlete.name}</h3>
                    <p className="text-xl sm:text-2xl text-center text-accent font-semibold mb-8">
                      {athlete.achievement}
                    </p>

                    {/* Achievement Badge */}
                    <div className="flex justify-center">
                      <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-bold text-sm">
                        ACHIEVEMENT UNLOCKED
                      </span>
                    </div>
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
