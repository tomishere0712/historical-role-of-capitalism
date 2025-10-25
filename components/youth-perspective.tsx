"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Sparkles, BookOpen, Target } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const perspectives = [
  {
    icon: Brain,
    title: "Thế Hệ AI – Thế Hệ Phản Tư",
    description: "Không chỉ tiêu thụ công nghệ mà còn định hướng cho công nghệ",
    example:
      "Không chỉ dùng AI mà còn hiểu rõ những mâu thuẫn của tư bản trong thời đại AI. Tư duy phản biện và ý thức lịch sử là chìa khóa.",
  },
  {
    icon: Target,
    title: "Chiến Đấu Cho Tự Do Nhận Thức",
    description: "Tránh để thuật toán và tư bản chi phối cách nghĩ, cách sống",
    example:
      "Nếu thế hệ 1945–1986 chiến đấu để giành độc lập vật chất, thì thế hệ 2025–2050 đang chiến đấu để giành tự do nhận thức khỏi sự chi phối của tư bản số.",
  },
  {
    icon: BookOpen,
    title: "Triết Học Là Công Cụ Soi Chiếu",
    description: "Không xa rời đời sống, mà là công cụ soi chiếu những mâu thuẫn của tư bản",
    example:
      "Chủ nghĩa tư bản là tấm gương: nó phản chiếu những mâu thuẫn nội tại của hệ thống. Hiểu rõ những mâu thuẫn này để tìm ra giải pháp tiến bộ.",
  },
  {
    icon: Sparkles,
    title: "Ý Thức Lịch Sử Là La Bàn",
    description: "Giúp định hướng trong biển dữ liệu, giữ gốc nhân văn",
    example:
      "Ý thức lịch sử là la bàn: giúp định hướng trong biển dữ liệu, giữ gốc nhân văn khi công nghệ bùng nổ. Chủ nghĩa tư bản không phải điểm cuối cùng.",
  },
]

// Định nghĩa style inline cho background
const sectionStyle: React.CSSProperties = {
  backgroundImage: `url('/young-people-technology-ai-future.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "scroll",
  position: "relative",
  zIndex: 0,
}

export function YouthPerspective() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaCardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const youthPerspectiveBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      sectionRef.current &&
      titleRef.current &&
      cardsRef.current &&
      ctaCardRef.current &&
      youthPerspectiveBoxRef.current
    ) {
      const ctx = gsap.context(() => {
        // Animate title
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          scale: 0.9,
        })

        // Animate the "Góc nhìn giới trẻ" box to rotate on scroll
        gsap.fromTo(
          youthPerspectiveBoxRef.current,
          { rotate: 0 },
          {
            rotate: -3,
            ease: "power1.out",
            scrollTrigger: {
              trigger: youthPerspectiveBoxRef.current,
              start: "top 90%",
              end: "top 70%",
              scrub: 1,
            },
          },
        )

        // Animate perspective cards with stagger
        gsap.from(cardsRef.current?.querySelectorAll(".perspective-card") || [], {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          opacity: 0,
          y: 80,
          stagger: 0.1,
          ease: "power2.out",
        })

        // Animate CTA card with scale effect
        gsap.from(ctaCardRef.current, {
          scrollTrigger: {
            trigger: ctaCardRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 0,
          scale: 0.9,
          y: 50,
        })

        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            y: -80,
          })
        }
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <section id="youth" className="relative py-32 px-4 overflow-hidden" style={sectionStyle} ref={sectionRef}>
      <div className="absolute inset-0 bg-red-900/80 z-0 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center space-y-6 mb-8">
          <h2 className="text-5xl md:text-7xl font-black italic text-white/90 tracking-tight">TRIẾT HỌC TƯ BẢN 4.0</h2>

          <div className="relative inline-block">
            <div className="relative px-12 py-6 bg-red-900/80 border-4 border-yellow-500" ref={youthPerspectiveBoxRef}>
              <h3 className="text-4xl md:text-6xl font-black text-yellow-400 tracking-wide">
                GÓC NHÌN GIỚI TRẺ
                <br />
                TRONG THỜI ĐẠI AI
              </h3>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-cyan-400 max-w-3xl mx-auto font-medium">
            Khám phá vai trò lịch sử của chủ nghĩa tư bản và những mâu thuẫn của nó trong kỷ nguyên trí tuệ nhân tạo
          </p>

          <p className="text-lg md:text-xl font-semibold text-yellow-300 max-w-2xl mx-auto italic mt-4">
            "Chúng ta không sợ tư bản thay thế mình – chỉ sợ mình không hiểu rõ những mâu thuẫn của nó."
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/capitalism-ai-technology-future.jpg"
              alt="Chủ nghĩa tư bản và công nghệ AI"
              className="w-full h-[200px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <p className="text-white/90 text-sm md:text-base font-medium">
                Thế hệ trẻ Việt Nam - Kết nối lịch sử tư bản và công nghệ AI
              </p>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-12">
          {perspectives.map((item, index) => (
            <Card
              key={index}
              className="perspective-card bg-red-950/60 border-yellow-600/30 backdrop-blur-sm hover:shadow-2xl hover:border-yellow-500/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500 to-red-600">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-yellow-400">{item.title}</CardTitle>
                    <CardDescription className="text-gray-300">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-red-900/40 rounded-lg border border-yellow-600/20">
                  <p className="text-sm text-gray-200 leading-relaxed">{item.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/young-people-working-with-technology.jpg"
            alt="Giới trẻ Việt Nam làm việc với công nghệ"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div ref={ctaCardRef}>
          <Card className="bg-gradient-to-r from-red-900 to-red-800 text-white border-2 border-yellow-500/50 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-yellow-400 font-bold">
                Thời đại AI cần những người trẻ có ý thức lịch sử và ý thức về những mâu thuẫn của tư bản
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-100">
              <p className="leading-relaxed">
                <strong className="text-yellow-400">Triết học không xa rời đời sống:</strong> Mà là công cụ soi chiếu
                những mâu thuẫn của tư bản. Giúp bạn hiểu rõ bản chất của sự vật, không bị lạc lối trong thông tin quá
                tải.
              </p>
              <p className="leading-relaxed">
                <strong className="text-yellow-400">Chủ nghĩa tư bản là tấm gương:</strong> Nó phản chiếu những mâu
                thuẫn nội tại của hệ thống. Cách chúng ta đối mặt với những mâu thuẫn này sẽ quyết định tương lai.
              </p>
              <p className="leading-relaxed">
                <strong className="text-yellow-400">Ý thức lịch sử là la bàn:</strong> Giúp định hướng trong biển dữ
                liệu, giữ gốc nhân văn khi công nghệ bùng nổ. Tư duy biện chứng giúp bạn thích nghi với thay đổi.
              </p>
              <div className="mt-6 p-6 bg-yellow-500/10 rounded-lg backdrop-blur-sm border-2 border-yellow-500/30">
                <p className="text-xl font-bold text-yellow-300 text-center">
                  "Thế hệ trước chiến đấu để giành độc lập vật chất – chúng ta chiến đấu để giành tự do nhận thức."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
