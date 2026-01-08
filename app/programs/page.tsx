"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Marathon Coaching",
      subtitle: "From 5K to Ultramarathon",
      description: "Comprehensive training guidance for long-distance running",
      details: [
        "Personalized training plans based on your current fitness",
        "Progressive build-up with injury prevention focus",
        "Nutrition strategies for long-distance running",
        "Race-day preparation and pacing guidance",
        "Post-race recovery protocols",
      ],
    },
    {
      title: "Triathlon Coaching",
      subtitle: "Sprint to Ironman Distance",
      description: "Complete coaching across swimming, cycling, and running",
      details: [
        "Multi-sport training coordination",
        "Swim technique improvement with structured coaching",
        "Cycling power and endurance development",
        "Running efficiency and speed work",
        "Transition training and race strategy",
      ],
    },
    {
      title: "Cyclothon Coaching",
      subtitle: "Long-Distance Cycling",
      description: "Expert guidance for cycling endurance events",
      details: [
        "Progressive cycling mileage build-up",
        "Power development and aerobic capacity",
        "Bike handling and technical skills",
        "Nutrition and hydration strategies",
        "Mental toughness for long events",
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold glow-golden text-primary mb-4">Our Programs</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Tailored coaching programs designed to help you achieve your endurance goals
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-card border-4 border-primary p-8 hover:border-accent transition">
                <h2 className="text-2xl font-bold text-primary glow-golden mb-2">{program.title}</h2>
                <p className="text-accent font-bold mb-4">{program.subtitle}</p>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-2 text-sm mb-6">
                  {program.details.map((detail, didx) => (
                    <li key={didx} className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <section className="bg-card/50 border-2 border-border p-8 rounded-lg mb-16">
            <h2 className="text-4xl font-bold glow-golden text-primary mb-8">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 border-2 border-accent">
                <h3 className="text-xl font-bold text-accent glow-accent mb-2">Online Strength Training (2x Weekly)</h3>
                <p className="text-muted-foreground text-sm">
                  Live online sessions focusing on injury prevention, core strength, and power development. Recorded
                  sessions available for flexibility.
                </p>
              </div>
              <div className="bg-background p-6 border-2 border-accent">
                <h3 className="text-xl font-bold text-accent glow-accent mb-2">Nutrition Consultation</h3>
                <p className="text-muted-foreground text-sm">
                  Sport-specific nutrition plans tailored to your training and racing needs.
                </p>
              </div>
              <div className="bg-background p-6 border-2 border-accent">
                <h3 className="text-xl font-bold text-accent glow-accent mb-2">Injury Prevention & Recovery</h3>
                <p className="text-muted-foreground text-sm">
                  Personalized recovery protocols and injury prevention strategies to keep you healthy.
                </p>
              </div>
              <div className="bg-background p-6 border-2 border-accent">
                <h3 className="text-xl font-bold text-accent glow-accent mb-2">1-on-1 Coaching Sessions</h3>
                <p className="text-muted-foreground text-sm">
                  Private coaching calls to review progress, adjust plans, and get personalized guidance.
                </p>
              </div>
            </div>
          </section>

          {/* Training Format */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-8">How It Works</h2>
            <div className="space-y-4">
              <div className="bg-background/50 border-2 border-primary p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-background flex items-center justify-center font-bold rounded flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Assessment</h3>
                    <p className="text-muted-foreground">
                      Initial consultation to understand your goals, experience, and current fitness level
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background/50 border-2 border-primary p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-background flex items-center justify-center font-bold rounded flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Personalized Plan</h3>
                    <p className="text-muted-foreground">
                      Receive a custom training plan built specifically for your goals and schedule
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background/50 border-2 border-primary p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-background flex items-center justify-center font-bold rounded flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Execute & Support</h3>
                    <p className="text-muted-foreground">
                      Follow your plan with ongoing guidance and access to community strength sessions
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background/50 border-2 border-primary p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-background flex items-center justify-center font-bold rounded flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Achieve Goals</h3>
                    <p className="text-muted-foreground">
                      Cross your finish line strong, supported by proven training and expert guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-card/50 border-2 border-accent p-8 text-center">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-4">Ready to Start Your Training?</h2>
            <Link
              href="/auth/signup"
              className="inline-block px-8 py-4 bg-accent text-background font-bold text-lg hover:scale-105 transition border-2 border-accent"
            >
              Join Team Dose-T Today
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
