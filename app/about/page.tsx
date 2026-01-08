"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold glow-golden text-primary mb-4">About Team Dose-T</h1>
            <p className="text-xl text-muted-foreground">Building a community of disciplined endurance athletes</p>
          </div>

          {/* Origin */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Team Dose-T was founded on a simple principle: endurance sports aren't just about physical
              capability—they're about discipline, mental strength, and community. Sir Prashant Raut, an Ironman
              finisher and Comrades Marathon veteran, created this team to share his wealth of experience with athletes
              who were serious about their endurance goals.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              What started as a small group of passionate runners and triathletes has grown into a thriving community of
              80+ athletes across multiple disciplines. Each member brings their own story, their own struggles, and
              their own determination to cross that finish line.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border-4 border-primary p-8">
              <h2 className="text-2xl font-bold glow-golden text-primary mb-4">Our Mission</h2>
              <p className="text-foreground leading-relaxed">
                To provide world-class, personalized endurance coaching rooted in real-world experience, injury
                prevention, and community support. We empower athletes to achieve extraordinary results through
                discipline, consistency, and smart training.
              </p>
            </div>
            <div className="bg-card border-4 border-accent p-8">
              <h2 className="text-2xl font-bold text-accent glow-accent mb-4">Our Vision</h2>
              <p className="text-foreground leading-relaxed">
                A global community of endurance athletes who support each other, push their limits safely, and prove
                that with the right guidance and discipline, they can achieve anything they set their minds to.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-8">Our Core Values</h2>
            <div className="space-y-4">
              <div className="bg-background/50 border-l-4 border-accent p-4">
                <h3 className="font-bold text-accent mb-2">Discipline</h3>
                <p className="text-muted-foreground">
                  We believe in consistent, structured training. Success comes from showing up day after day.
                </p>
              </div>
              <div className="bg-background/50 border-l-4 border-accent p-4">
                <h3 className="font-bold text-accent mb-2">Injury-First Approach</h3>
                <p className="text-muted-foreground">
                  Smart training means staying healthy. We prevent injuries, not treat them after they happen.
                </p>
              </div>
              <div className="bg-background/50 border-l-4 border-accent p-4">
                <h3 className="font-bold text-accent mb-2">Community & Support</h3>
                <p className="text-muted-foreground">
                  Endurance is a journey better traveled together. We celebrate each other's victories and support
                  through challenges.
                </p>
              </div>
              <div className="bg-background/50 border-l-4 border-accent p-4">
                <h3 className="font-bold text-accent mb-2">Real-World Experience</h3>
                <p className="text-muted-foreground">
                  Our coaching comes from personal experience, not just theory. We've run marathons, finished Ironmans,
                  and pushed our limits.
                </p>
              </div>
              <div className="bg-background/50 border-l-4 border-accent p-4">
                <h3 className="font-bold text-accent mb-2">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  Every athlete has untapped potential. We create personalized paths for each person to achieve their
                  best self.
                </p>
              </div>
            </div>
          </section>

          {/* Community Stats */}
          <section className="bg-card/50 border-2 border-border p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-8 text-center">Our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-primary text-4xl font-bold glow-golden mb-2">80+</p>
                <p className="text-muted-foreground">Active Athletes</p>
              </div>
              <div className="text-center">
                <p className="text-primary text-4xl font-bold glow-golden mb-2">3</p>
                <p className="text-muted-foreground">Training Disciplines</p>
              </div>
              <div className="text-center">
                <p className="text-primary text-4xl font-bold glow-golden mb-2">∞</p>
                <p className="text-muted-foreground">Support & Encouragement</p>
              </div>
            </div>
          </section>

          {/* Join CTA */}
          <section className="bg-primary/10 border-2 border-accent p-8 text-center">
            <h2 className="text-3xl font-bold glow-golden text-primary mb-4">Be Part of Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join athletes who are committed to discipline, growth, and endurance
            </p>
            <a
              href="/auth/signup"
              className="inline-block px-8 py-4 bg-accent text-background font-bold text-lg hover:scale-105 transition border-2 border-accent"
            >
              Join Team Dose-T
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
