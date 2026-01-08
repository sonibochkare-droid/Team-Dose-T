"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Eye, EyeOff, Loader } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    fitnessGoal: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Signup failed")
        return
      }

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        password: "",
        fitnessGoal: "",
      })

      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/auth/login"
      }, 2000)
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error("Signup error:", err)
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
            <h1 className="text-4xl font-bold text-primary mb-2">Join Team Dose-T</h1>
            <p className="text-muted-foreground">Create your account to get started</p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg text-center">
              <p className="text-accent font-semibold">Account created successfully!</p>
              <p className="text-sm text-muted-foreground mt-1">Redirecting to login...</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive rounded-lg">
              <p className="text-destructive font-semibold text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border-2 border-border p-8 space-y-6 rounded-xl">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Full Name</label>
              <input
                type="text"
                required
                disabled={isLoading}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-background border-2 border-border focus:border-primary outline-none transition text-foreground disabled:opacity-50"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Email</label>
              <input
                type="email"
                required
                disabled={isLoading}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-background border-2 border-border focus:border-primary outline-none transition text-foreground disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  disabled={isLoading}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 bg-background border-2 border-border focus:border-primary outline-none transition text-foreground disabled:opacity-50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition disabled:opacity-50"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Minimum 8 characters</p>
            </div>

            {/* Fitness Goal */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Primary Fitness Goal (Optional)</label>
              <select
                disabled={isLoading}
                value={formData.fitnessGoal}
                onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                className="w-full px-4 py-2 bg-background border-2 border-border focus:border-primary outline-none transition text-foreground disabled:opacity-50"
              >
                <option value="">Select a goal</option>
                <option value="marathon">Marathon Training</option>
                <option value="triathlon">Triathlon Training</option>
                <option value="cyclothon">Cyclothon Training</option>
                <option value="general">General Fitness</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-accent text-accent-foreground font-bold hover:shadow-lg transition border-2 border-accent disabled:opacity-50 flex items-center justify-center gap-2 rounded-lg"
            >
              {isLoading ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-bold">
                Log In
              </Link>
            </p>
          </form>

          {/* Benefits Preview */}
          <div className="mt-8 bg-card border-2 border-border p-6 rounded-xl">
            <p className="text-xs font-bold text-primary mb-3">WHAT YOU GET:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Personalized training plan</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>2x weekly strength sessions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Community support</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
