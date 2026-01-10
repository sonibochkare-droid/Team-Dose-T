"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, Zap, Waves, Shield } from "lucide-react"

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

          <section className="bg-gradient-to-br from-primary/5 via-accent/10 to-yellow-200/5 border-2 border-primary/20 p-8 sm:p-12 rounded-lg mb-16">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary glow-golden mb-3">
                Coaching Experience & Expertise
              </h2>
              <p className="text-base text-accent font-semibold italic">
                Built on experience, science, and real race results.
              </p>
            </div>

            {/* Experience Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Running Specialization */}
              <div className="bg-background/60 border-2 border-accent/30 p-6 rounded-lg hover:border-accent/60 transition-colors">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">10+ Years Running & Endurance Sports</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Countless Sub-4 Full Marathons</li>
                      <li>• Multiple Sub-2 Half Marathons</li>
                      <li>• Specialized training plans for recreational runners</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Triathlon & Swimming */}
              <div className="bg-background/60 border-2 border-accent/30 p-6 rounded-lg hover:border-accent/60 transition-colors">
                <div className="flex items-start gap-4">
                  <Waves className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Certified Running & Triathlon Coach</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Advanced freestyle swimming techniques</li>
                      <li>• Complete triathlon distance coaching</li>
                      <li>• Ironman-level endurance training</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Strength & Performance */}
              <div className="bg-background/60 border-2 border-accent/30 p-6 rounded-lg hover:border-accent/60 transition-colors">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Advanced Strength Training Programs</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• HYROX-specific conditioning programs</li>
                      <li>• Indian Navy PFT qualification training</li>
                      <li>• Functional fitness for athletes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Knee Resilience & Injury Prevention */}
              <div className="bg-background/60 border-2 border-accent/30 p-6 rounded-lg hover:border-accent/60 transition-colors">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Super-Specialisation in Knee Resilience</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 95+ specialized knee strength exercises</li>
                      <li>• Online strength training delivery</li>
                      <li>• Focus for runners and trekkers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-accent/20">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">10+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">95+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Knee Exercises</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">80+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Athletes Trained</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Dedicated Focus</p>
              </div>
            </div>
          </section>

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
