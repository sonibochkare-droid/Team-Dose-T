"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Handle login logic here
      console.log("Login:", formData)
      router.push("/")
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen flex items-center">
        <div className="w-full max-w-md mx-auto px-4">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold glow-golden text-primary mb-2">Log In</h1>
            <p className="text-muted-foreground">Welcome back to Team Dose-T</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border-4 border-primary p-8 space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-background border-2 border-border focus:border-accent outline-none transition text-foreground"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 bg-background border-2 border-border focus:border-accent outline-none transition text-foreground"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-accent text-background font-bold hover:scale-105 transition border-2 border-accent disabled:opacity-50"
            >
              {isLoading ? "Logging In..." : "Log In"}
            </button>

            {/* Signup Link */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-accent hover:underline font-bold">
                Sign Up
              </Link>
            </p>

            {/* Forgot Password */}
            <div className="text-center">
              <a href="#" className="text-sm text-accent hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
