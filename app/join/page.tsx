"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold glow-golden text-primary mb-4">Join Team Dose-T</h1>
            <p className="text-xl text-muted-foreground">
              Become part of a community of endurance athletes committed to excellence
            </p>
          </div>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-8">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border-2 border-primary p-6">
                <h3 className="text-lg font-bold text-accent glow-accent mb-3">Personalized Training Plans</h3>
                <p className="text-muted-foreground text-sm">
                  Custom coaching tailored to your goals, experience, and schedule
                </p>
              </div>
              <div className="bg-card border-2 border-primary p-6">
                <h3 className="text-lg font-bold text-accent glow-accent mb-3">2x Weekly Online Strength Sessions</h3>
                <p className="text-muted-foreground text-sm">
                  Live strength and conditioning training with recorded sessions available
                </p>
              </div>
              <div className="bg-card border-2 border-primary p-6">
                <h3 className="text-lg font-bold text-accent glow-accent mb-3">Injury Prevention Focus</h3>
                <p className="text-muted-foreground text-sm">
                  Smart training strategies to keep you healthy and progressing
                </p>
              </div>
              <div className="bg-card border-2 border-primary p-6">
                <h3 className="text-lg font-bold text-accent glow-accent mb-3">Community Support</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with 80+ athletes pursuing similar endurance goals
                </p>
              </div>
              <div className="bg-card border-2 border-primary p-6">
                <h3 className="text-lg font-bold text-accent glow-accent mb-3">Nutrition Guidance</h3>
                <p className="text-muted-foreground text-sm">
                  Sport-specific nutrition plans from our certified nutrition specialist
                </p>
              </div>
              <div className="bg-card border-2 border-primary p-6">
                <h3 className="text-lg font-bold text-accent glow-accent mb-3">Direct Coach Access</h3>
                <p className="text-muted-foreground text-sm">
                  Regular check-ins and guidance from Sir Prashant Raut himself
                </p>
              </div>
            </div>
          </section>

          {/* How to Join */}
          <section className="mb-16 bg-card/50 border-2 border-border p-8">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-8">Getting Started</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-background flex items-center justify-center font-bold rounded flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Create Account</h3>
                  <p className="text-muted-foreground">Sign up with your email and basic information</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-background flex items-center justify-center font-bold rounded flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Complete Assessment</h3>
                  <p className="text-muted-foreground">
                    Tell us about your goals, experience, and current fitness level
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-background flex items-center justify-center font-bold rounded flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Receive Your Plan</h3>
                  <p className="text-muted-foreground">Get your personalized training plan and start your journey</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-background flex items-center justify-center font-bold rounded flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Start Training</h3>
                  <p className="text-muted-foreground">Begin your endurance journey with full community support</p>
                </div>
              </div>
            </div>
          </section>

          {/* Membership Info */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-8">Membership Options</h2>
            <div className="bg-card border-4 border-accent p-8">
              <p className="text-muted-foreground mb-6">
                Flexible membership plans designed to suit different needs and commitment levels. Contact us for current
                pricing and package details.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="text-accent">▶</span>
                  <span>Detailed training plans</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▶</span>
                  <span>Access to strength training sessions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▶</span>
                  <span>Nutrition guidance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▶</span>
                  <span>Community forums and support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▶</span>
                  <span>Flexible duration and flexible adjustments</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary/10 border-2 border-accent p-8 text-center">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-6">Ready to Join?</h2>
            <p className="text-muted-foreground mb-6">Take the first step toward achieving your endurance goals</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="px-8 py-4 bg-accent text-background font-bold text-lg hover:scale-105 transition border-2 border-accent"
              >
                Create Account
              </Link>
              <Link
                href="/coach"
                className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 transition font-bold text-lg"
              >
                Learn More About Coach
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
