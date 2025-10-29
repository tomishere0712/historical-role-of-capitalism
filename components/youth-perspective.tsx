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
    title: "Kế Thừa Giá Trị Tích Cực CNTB",
    description: "Tận dụng tự do sáng tạo, hiệu quả tổ chức và khoa học công nghệ",
    example:
      "Không phủ nhận thành tựu CNTB (AI, năng lượng xanh, kinh tế số) mà chuyển hóa chúng thành động lực xây dựng xã hội phát triển toàn diện con người - không để lợi nhuận thuần túy chi phối đạo đức, giáo dục và môi trường.",
  },
  {
    icon: Target,
    title: "Học Tập Gắn Trách Nhiệm Xã Hội",
    description: "Chọn nghề vừa có thu nhập, vừa mang giá trị cho cộng đồng",
    example:
      "Sinh viên không chỉ là 'người thụ hưởng' công nghệ mà là chủ thể kiến tạo tương lai. Chọn nghề nghiệp không chỉ vì thu nhập, mà còn vì đóng góp giải quyết vấn đề xã hội (giáo dục, y tế, công nghệ xanh, an sinh số).",
  },
  {
    icon: BookOpen,
    title: "Tinh Thần Công Dân Toàn Cầu",
    description: "Chung tay giải quyết biến đổi khí hậu, công bằng xã hội, an ninh số",
    example:
      "Phát triển global citizenship: hiểu biết, tôn trọng sự khác biệt văn hóa, nhận thức các vấn đề toàn cầu (climate change, tech justice, cybersecurity) và hợp tác quốc tế - vượt lên lợi ích tư bản hẹp.",
  },
  {
    icon: Sparkles,
    title: "Người – Công Nghệ – Xã Hội Hài Hòa",
    description: "Lấy con người làm trung tâm, công nghệ phục vụ hạnh phúc",
    example:
      "Lý tưởng là vượt lên CNTB: xây dựng mô hình lấy con người làm trung tâm (công nghệ phục vụ hạnh phúc, không chi phối), kinh tế gắn đạo đức và bền vững, xã hội tri thức mang tinh thần nhân văn.",
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

        // Animate perspective cards with stagger - simplified to avoid hiding
        const cards = cardsRef.current?.querySelectorAll(".perspective-card")
        if (cards && cards.length > 0) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            y: 30,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
          })
        }

        // Animate CTA card with scale effect - simplified
        if (ctaCardRef.current) {
          gsap.from(ctaCardRef.current, {
            scrollTrigger: {
              trigger: ctaCardRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          })
        }

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
    <section id="youth" className="relative py-16 px-4 overflow-hidden" style={sectionStyle} ref={sectionRef}>
      <div className="absolute inset-0 bg-red-900/80 z-0 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center space-y-6 mb-8">
          <h2 className="text-5xl md:text-7xl font-black italic text-white/90 tracking-tight">TRIẾT HỌC TƯ BẢN 4.0</h2>

          <div className="relative inline-block">
            <div className="relative px-12 py-6 bg-red-900/80 border-4 border-yellow-500" ref={youthPerspectiveBoxRef}>
              <h3 className="text-4xl md:text-6xl font-black text-yellow-400 tracking-wide">
                HƯỚNG TỚI
                <br />
                XÃ HỘI TIẾN BỘ
              </h3>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-cyan-400 max-w-3xl mx-auto font-medium">
            Sinh viên thế hệ mới không phủ nhận CNTB mà vượt lên trên nó - xây dựng xã hội công bằng, nhân văn, bền vững
          </p>

          <p className="text-lg md:text-xl font-semibold text-yellow-300 max-w-2xl mx-auto italic mt-4">
            "Sử dụng thành tựu của tư bản như một công cụ, chứ không để nó trở thành mục tiêu."
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
                Thế hệ sinh viên AI - Chủ thể kiến tạo tương lai, không chỉ là người thụ hưởng
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-100">
              <p className="leading-relaxed">
                <strong className="text-yellow-400">Kế thừa, không sao chép:</strong> Tận dụng tự do sáng tạo, hiệu quả tổ chức, khoa học-công nghệ của CNTB. Nhưng chuyển hóa chúng để phát triển toàn diện con người, không để lợi nhuận chi phối đạo đức và môi trường.
              </p>
              <p className="leading-relaxed">
                <strong className="text-yellow-400">Trách nhiệm xã hội:</strong> Học tập gắn với đóng góp cộng đồng. Chọn nghề vừa có thu nhập vừa giải quyết vấn đề xã hội. Tham gia đổi mới xã hội (social innovation) - dùng công nghệ cho mục tiêu bền vững.
              </p>
              <p className="leading-relaxed">
                <strong className="text-yellow-400">Công dân toàn cầu:</strong> Hiểu biết, tôn trọng sự khác biệt. Chung tay giải quyết biến đổi khí hậu, công bằng xã hội, an ninh thông tin. Vượt lên lợi ích tư bản hẹp để hợp tác quốc tế.
              </p>
              <p className="leading-relaxed">
                <strong className="text-yellow-400">Mô hình hài hòa:</strong> Xây dựng tương lai lấy con người làm trung tâm (công nghệ phục vụ hạnh phúc, không chi phối). Kinh tế gắn đạo đức và bền vững. Xã hội tri thức mang tinh thần nhân văn.
              </p>
              <div className="mt-6 p-6 bg-yellow-500/10 rounded-lg backdrop-blur-sm border-2 border-yellow-500/30">
                <p className="text-xl font-bold text-yellow-300 text-center">
                  "Lý tưởng xã hội tiến bộ được hình thành từng ngày qua hành động có ý thức, học tập nghiêm túc và trách nhiệm xã hội của thế hệ trẻ."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
