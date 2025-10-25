"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TheoreticalFoundation } from "@/components/theoretical-foundation"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { PhilosophyMatrix } from "@/components/philosophy-matrix"
import { YouthPerspective } from "@/components/youth-perspective"
import { AIChatbot } from "@/components/ai-chatbot"
import { PhilosophyQuiz } from "@/components/philosophy-quiz"
import { OpinionsSection } from "@/components/opinions-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-blob-1", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        y: 300,
        x: -100,
        scale: 1.2,
      })

      gsap.to(".bg-blob-2", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        y: -200,
        x: 100,
        scale: 0.8,
      })

      gsap.to(".bg-blob-3", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        y: 150,
        x: -50,
        rotate: 180,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="bg-blob-1 absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="bg-blob-2 absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="bg-blob-3 absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
      </div>

      <div id="home">
        <HeroSection />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div id="rationale">
        <TheoreticalFoundation />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div id="objectives">
        <InteractiveTimeline />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div id="activities">
        <PhilosophyMatrix />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div id="experience">
        <YouthPerspective />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <AIChatbot />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <PhilosophyQuiz />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <OpinionsSection />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <FAQSection />

      <Footer />
    </main>
  )
}
