"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary to-blue-600">
              <img src="/images/team-20dose-t.png" alt="Team Dose-T Logo" className="w-full h-full object-cover" />
            </div>
            <span className="hidden sm:inline text-lg font-bold text-primary">DOSE-T</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/coach" className="text-foreground hover:text-primary font-medium transition">
              Coach
            </Link>
            <Link href="/programs" className="text-foreground hover:text-primary font-medium transition">
              Programs
            </Link>
            <Link href="/join" className="text-foreground hover:text-primary font-medium transition">
              Join
            </Link>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/auth/signup"
              className="hidden sm:inline px-6 py-2 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition hover:scale-105"
            >
              Get Started
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-primary/10">
            <div className="flex flex-col gap-4 py-4 px-4">
              <Link href="/coach" className="text-foreground hover:text-primary font-medium transition">
                Coach
              </Link>
              <Link href="/programs" className="text-foreground hover:text-primary font-medium transition">
                Programs
              </Link>
              <Link href="/join" className="text-foreground hover:text-primary font-medium transition">
                Join
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
