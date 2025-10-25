"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  { year: 1760, label: "Cách mạng Công nghiệp", color: "bg-amber-700" },
  { year: 1848, label: "Tuyên ngôn Cộng sản", color: "bg-red-700" },
  { year: 1917, label: "Cách mạng Tháng Mười", color: "bg-red-600" },
  { year: 1986, label: "Đổi mới Việt Nam", color: "bg-blue-600" },
  { year: 2025, label: "Kỷ nguyên AI", color: "bg-purple-600" },
]

export function HeroSection() {
  const [activeYear, setActiveYear] = useState(2025)
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    if (heroRef.current && titleRef.current && subtitleRef.current && buttonsRef.current && timelineRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(backgroundRef.current, {
          scale: 1.1,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        })

        gsap.to(backgroundRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: 100,
          scale: 1.05,
          ease: "none",
        })

        gsap.from(titleRef.current, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          duration: 1.2,
          delay: 0.3,
          ease: "power4.out",
        })

        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 1,
          delay: 0.8,
          ease: "back.out(1.7)",
        })

        // Animate buttons
        gsap.from(buttonsRef.current?.children || [], {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          delay: 1.3,
          stagger: 0.2,
          ease: "back.out(1.7)",
        })

        // Animate timeline milestones
        gsap.from(timelineRef.current?.querySelectorAll(".milestone-item") || [], {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 1.6,
          stagger: 0.1,
          ease: "power3.out",
        })
      }, heroRef)

      return () => ctx.revert()
    }
  }, [mounted])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-24 overflow-hidden bg-black"
    >
      <div ref={backgroundRef} className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/capitalism-industrial-revolution-ai-technology.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-balance leading-none tracking-tight"
          style={{ fontStyle: "italic" }}
        >
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <span className="text-white/90 drop-shadow-2xl inline-block translate-y-8 sm:translate-y-12">
              TỪ CÁCH MẠNG
            </span>
            <span className="text-white/90 drop-shadow-2xl inline-block translate-y-4 sm:translate-y-8">
              CÔNG NGHIỆP ĐẾN AI
            </span>
          </div>
        </h1>

        <div ref={subtitleRef} className="inline-block relative mt-16 mb-12">
          <div
            className="relative border-[6px] border-yellow-500 bg-gradient-to-br from-amber-900/95 to-amber-950/95 backdrop-blur-sm px-12 py-8 md:px-16 md:py-10 shadow-2xl"
            style={{ transform: "skewX(-3deg)" }}
          >
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow-400 drop-shadow-lg tracking-wide uppercase leading-tight"
              style={{ transform: "skewX(3deg)" }}
            >
              VAI TRÒ LỊCH SỬ
              <br />
              CỦA CHỦ NGHĨA TƯ BẢN
            </p>
          </div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto text-pretty leading-relaxed font-medium drop-shadow-lg px-4">
          Khám phá cách hệ thống tư bản vừa là động lực phát triển, vừa ẩn chứa mâu thuẫn – qua góc nhìn của sinh viên
          thời đại số
        </p>

        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 pt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg sm:text-xl px-12 py-8 font-bold rounded-full border-2 border-cyan-300/50 text-white uppercase tracking-wide"
          >
            Khám Phá Ngay
          </Button>
        </div>

        <div ref={timelineRef} className="pt-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-red-700 via-red-600 via-blue-600 to-purple-600 opacity-30 rounded-full" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="milestone-item flex flex-col items-center gap-3 flex-1 relative z-10"
              >
                <button
                  onClick={() => setActiveYear(milestone.year)}
                  className={`w-20 h-20 rounded-full ${milestone.color} ${
                    activeYear === milestone.year
                      ? "ring-4 ring-offset-4 ring-offset-background ring-white scale-125 shadow-2xl"
                      : "opacity-70 hover:opacity-100 hover:scale-110"
                  } transition-all duration-500 flex items-center justify-center text-white font-bold text-lg group relative overflow-hidden`}
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                  <span className="relative z-10">{milestone.year}</span>
                </button>
                <p className="text-sm md:text-base text-center text-white/80 font-medium transition-colors duration-300 hover:text-white max-w-[120px]">
                  {milestone.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-16">
          <ChevronDown className="w-10 h-10 mx-auto text-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
