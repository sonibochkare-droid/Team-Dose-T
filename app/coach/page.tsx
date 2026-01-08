"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CoachPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold glow-golden text-primary mb-4">Meet Your Coach</h1>
            <p className="text-xl text-muted-foreground">Sir Prashant Raut - Ironman | Comrades Marathon Finisher</p>
          </div>

          {/* Coach Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="bg-card border-4 border-primary rounded-lg overflow-hidden h-96">
              <img
                src="/images/ironman-finish-line.jpg"
                alt="Sir Prashant Raut crossing Ironman finish line at Gurye Korea"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary glow-golden mb-4">Achievements</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex gap-3">
                    <span className="text-accent">▶</span>
                    <span>Ironman Certified Triathlete</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">▶</span>
                    <span>Comrades Marathon Finisher</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">▶</span>
                    {/* Updated from 15+ to 5+ years of endurance sport experience */}
                    <span>5+ Years of Endurance Sport Experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">▶</span>
                    <span>Certified Sports Nutrition Specialist</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">▶</span>
                    <span>Injury Prevention & Rehabilitation Expert</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary glow-golden mb-4">Coaching Philosophy</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  My approach to coaching is rooted in discipline, consistency, and data-driven training. I believe that
                  every athlete has untapped potential, and with the right guidance, personalized plans, and
                  injury-prevention focus, they can achieve extraordinary results. Success isn't just about crossing the
                  finish line—it's about the journey, the growth, and building a community that pushes each other to
                  excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <section className="bg-card/50 border-2 border-border p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-primary glow-golden mb-6">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-4 border-2 border-primary">
                <h3 className="font-bold text-primary glow-golden mb-2">Marathon Coaching</h3>
                <p className="text-sm text-muted-foreground">
                  Training plans for 5K to ultramarathon distances with injury-free preparation
                </p>
              </div>
              <div className="bg-background p-4 border-2 border-primary">
                <h3 className="font-bold text-primary glow-golden mb-2">Triathlon Training</h3>
                <p className="text-sm text-muted-foreground">
                  Complete triathlon coaching from sprint to Ironman distances
                </p>
              </div>
              <div className="bg-background p-4 border-2 border-primary">
                <h3 className="font-bold text-primary glow-golden mb-2">Nutrition & Recovery</h3>
                <p className="text-sm text-muted-foreground">
                  Sport-specific nutrition plans and recovery strategies for peak performance
                </p>
              </div>
            </div>
          </section>

          {/* Why Join */}
          <section>
            <h2 className="text-3xl font-bold text-primary glow-golden mb-6">Why Train with Sir Prashant?</h2>
            <div className="space-y-4">
              <div className="bg-background/50 p-4 border-l-4 border-accent">
                <h3 className="font-bold text-accent mb-2">Real-World Experience</h3>
                <p className="text-muted-foreground">
                  Not just theory—guidance backed by personal Ironman and Comrades experience
                </p>
              </div>
              <div className="bg-background/50 p-4 border-l-4 border-accent">
                <h3 className="font-bold text-accent mb-2">Personalized Approach</h3>
                <p className="text-muted-foreground">
                  Every athlete gets a custom training plan tailored to their goals and body
                </p>
              </div>
              <div className="bg-background/50 p-4 border-l-4 border-accent">
                <h3 className="font-bold text-accent mb-2">Injury Prevention First</h3>
                <p className="text-muted-foreground">
                  Smart training means staying healthy and making consistent progress
                </p>
              </div>
              <div className="bg-background/50 p-4 border-l-4 border-accent">
                <h3 className="font-bold text-accent mb-2">Community Support</h3>
                <p className="text-muted-foreground">
                  Be part of 80+ like-minded athletes pushing toward their best selves
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
