"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WallOfGlory } from "@/components/wall-of-glory"
import Link from "next/link"
import { ArrowRight, Award, Users, TrendingUp, Star } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent via-yellow-200 to-transparent rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary via-blue-300 to-transparent rounded-full opacity-10 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 z-10">
                <div>
                  <p className="text-primary font-bold text-lg mb-3">Welcome to Team Dose-T</p>
                  <h1 className="hero-text">Transform Your Endurance</h1>
                  <p className="text-xl text-muted-foreground mt-4 max-w-lg">
                    Train with Sir Prashant Raut, Ironman finisher and Comrades marathoner
                  </p>
                </div>

                {/* Specialties */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <Award className="text-accent mt-1 flex-shrink-0" size={20} />
                    <p className="font-semibold text-accent">Running & Triathlon Coaching</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-accent mt-1 flex-shrink-0" size={20} />
                    <p className="font-semibold text-accent">Injury Prevention & Recovery</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-accent mt-1 flex-shrink-0" size={20} />
                    <p className="font-semibold text-accent">Endurance Sport Nutrition</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/auth/signup" className="btn-primary inline-flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight size={20} />
                  </Link>
                  <Link href="/coach" className="btn-outline inline-flex items-center justify-center gap-2">
                    Learn About Coach
                  </Link>
                </div>
              </div>

              {/* Right - Coach Image */}
              <div className="flex items-center justify-center z-10">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/20 to-blue-300/30 rounded-3xl blur-2xl" />
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-accent/20">
                    <img
                      src="/images/prashant-running-action.jpg"
                      alt="Sir Prashant Raut - Team Dose-T Coach running in Ironman Gurye Korea"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24 bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 hover:shadow-lg transition">
                <div className="text-4xl font-bold text-primary mb-2">80+</div>
                <p className="text-muted-foreground text-lg">Active Athletes</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-primary/10 hover:shadow-lg transition">
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <p className="text-muted-foreground text-lg">Specializations</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-primary/10 hover:shadow-lg transition">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground text-lg">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Coach Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Meet Your Coach</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Sir Prashant Raut brings real-world experience to every training session. As an Ironman finisher and
                    Comrades marathoner, he understands the demands and challenges of endurance sports.
                  </p>
                  <p>
                    With a background in sports nutrition and injury prevention, Sir Prashant offers a holistic approach
                    to coaching that goes beyond just running faster or longer.
                  </p>
                  <p>
                    His personalized training methodologies have helped 80+ athletes achieve their fitness goals while
                    staying injury-free.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/team-20dose-t.png" alt="Team Dose-T Logo" className="max-w-sm w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-blue-100/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="text-accent" size={32} />,
                  title: "Marathon Training",
                  desc: "Expert guidance for marathon distance races",
                },
                {
                  icon: <Users className="text-primary" size={32} />,
                  title: "Triathlon Coaching",
                  desc: "Complete training for swimming, cycling, and running",
                },
                {
                  icon: <Award className="text-accent" size={32} />,
                  title: "Nutrition Planning",
                  desc: "Personalized nutrition strategies for performance",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-primary/10 hover:shadow-xl transition hover:border-accent/30"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wall of Glory Section */}
        <WallOfGlory />

        {/* Gallery Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-yellow-200/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">Gallery & Achievements</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real moments from our athletes' inspiring journeys and race achievements
              </p>
            </div>

            {/* 2025 Gallery */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold text-primary">2025 Achievements</h3>
                <div className="h-1 flex-grow bg-gradient-to-r from-accent to-transparent rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(
                  (num) => (
                    <div
                      key={`2025-${num}`}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                    >
                      <img
                        src={`/media/gallery/2025/image-${num}.jpg`}
                        alt={`Team Dose-T Achievement 2025 - ${num}`}
                        className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                        <p className="text-white font-semibold p-4">2025 - Achievement {num}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* 2026 Gallery */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold text-accent">2026 Achievements</h3>
                <div className="h-1 flex-grow bg-gradient-to-r from-primary to-transparent rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(
                  (num) => (
                    <div
                      key={`2026-${num}`}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                    >
                      <img
                        src={`/media/gallery/2026/image-${num}.jpg`}
                        alt={`Team Dose-T Achievement 2026 - ${num}`}
                        className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                        <p className="text-white font-semibold p-4">2026 - Achievement {num}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* What Our Athletes Say Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">What Our Athletes Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real stories from athletes who transformed their performance with Team Dose-T
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-2xl border-2 border-accent/20 hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-primary mb-6 leading-relaxed italic font-medium">
                  "Before joining Team Dose-T, I couldn't finish a half marathon under 2 hours. Within just one year of
                  training here, I achieved multiple Sub-2 Half Marathons and Sub-4 Full Marathons, even on tough
                  courses like Lonavala. All credit goes to Coach Prashant Raut Sir for his precise guidance, structured
                  training, and belief in me."
                </p>
                <div className="border-t border-accent/20 pt-4">
                  <p className="font-bold text-primary">Pandit Surshe</p>
                  <p className="text-sm text-muted-foreground">Marathon & Half Marathon Runner</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border-2 border-primary/20 hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-primary mb-6 leading-relaxed italic font-medium">
                  "Training under Sir Prashant Raut transformed my performance. His scientific plans and mental
                  conditioning helped me achieve major milestones, including Ironman 70.3 and multiple personal bests. A
                  coach who truly brings out an athlete's potential."
                </p>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-bold text-primary">Milind Kherudkar</p>
                  <p className="text-sm text-muted-foreground">Ironman Triathlete</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join 80+ athletes who have transformed their fitness and achieved their endurance goals
            </p>
            <Link href="/auth/signup" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Get Started Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
