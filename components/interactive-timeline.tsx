"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Lightbulb, Zap, TrendingUp, AlertTriangle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const timelineEvents = [
  {
    year: 1760,
    title: "Cách Mạng Công Nghiệp",
    subtitle: "Sự ra đời của chủ nghĩa tư bản",
    date: "1760-1840",
    location: "Anh Quốc",
    description:
      "Cách mạng công nghiệp đánh dấu sự ra đời của chủ nghĩa tư bản. Máy móc thay thế lao động thủ công, nhà máy thay thế xưởng thủ công. Tư bản phá vỡ phong kiến, giải phóng lực lượng sản xuất, và tạo ra giai cấp công nhân.",
    philosophy: "Tư bản là động lực phát triển lực lượng sản xuất",
    modernLesson: "Công nghệ là công cụ, nhưng ai sở hữu công nghệ sẽ nắm quyền lực",
    image: "/industrial-revolution-factory-machines.jpg",
    icon: Zap,
    tags: ["Tư bản", "Công nghệ", "Lao động"],
  },
  {
    year: 1848,
    title: "Tuyên Ngôn Cộng Sản",
    subtitle: "Phê phán chủ nghĩa tư bản",
    date: "1848",
    location: "Châu Âu",
    description:
      "Mác và Ênggels công bố Tuyên Ngôn Cộng Sản, phê phán những mâu thuẫn nội tại của chủ nghĩa tư bản: bóc lột lao động, bất bình đẳng, khủng hoảng kinh tế. Họ dự báo rằng những mâu thuẫn này sẽ dẫn đến sự sụp đổ của tư bản.",
    philosophy: "Chủ nghĩa tư bản chứa đựng những mâu thuẫn không thể giải quyết",
    modernLesson: "Hiểu rõ những mâu thuẫn của tư bản để tìm ra giải pháp tiến bộ",
    image: "/communist-manifesto-marx-engels.jpg",
    icon: AlertTriangle,
    tags: ["Phê phán", "Mác", "Lý thuyết"],
  },
  {
    year: 1917,
    title: "Cách Mạng Tháng Mười",
    subtitle: "Vượt qua chủ nghĩa tư bản",
    date: "1917",
    location: "Nga",
    description:
      "Cách mạng Tháng Mười ở Nga là lần đầu tiên con người cố gắng vượt qua chủ nghĩa tư bản. Lênin và Đảng Bolshevik lãnh đạo cuộc cách mạng, lật đổ chế độ tư bản, và xây dựng nhà nước xã hội chủ nghĩa.",
    philosophy: "Có thể vượt qua chủ nghĩa tư bản thông qua cách mạng",
    modernLesson: "Thay đổi hệ thống đòi hỏi ý thức, tổ chức, và quyết tâm",
    image: "/october-revolution-1917-lenin.jpg",
    icon: TrendingUp,
    tags: ["Cách mạng", "Lênin", "XHCN"],
  },
  {
    year: 1986,
    title: "Đổi Mới Việt Nam",
    subtitle: "Thích ứng với tư bản toàn cầu",
    date: "1986",
    location: "Việt Nam",
    description:
      "Đổi mới là bước thích ứng của Việt Nam với nền kinh tế tư bản toàn cầu. Mở cửa kinh tế, cho phép tư nhân kinh doanh, hội nhập quốc tế. Đây là sự kết hợp giữa xã hội chủ nghĩa và cơ chế thị trường.",
    philosophy: "Cần thích ứng với thực tiễn để phát triển",
    modernLesson: "Học cách sử dụng công cụ của tư bản mà không bị chi phối bởi nó",
    image: "/vietnam-doi-moi-1986-economic-reform.jpg",
    icon: Lightbulb,
    tags: ["Đổi mới", "Kinh tế", "Phát triển"],
  },
  {
    year: 2025,
    title: "Kỷ Nguyên AI",
    subtitle: "Tư bản số và những thách thức mới",
    date: "Hiện tại",
    location: "Toàn cầu",
    description:
      "Kỷ nguyên AI đánh dấu sự phát triển mới của chủ nghĩa tư bản: tư bản số, nền kinh tế dữ liệu, độc quyền công nghệ. Những mâu thuẫn cũ vẫn tồn tại, nhưng dưới hình thức mới: bóc lột dữ liệu, bất bình đẳng số, thao túng thuật toán.",
    philosophy: "Tư bản tiếp tục phát triển, nhưng những mâu thuẫn cũng tiếp tục",
    modernLesson: "Sinh viên thế hệ AI phải có ý thức lịch sử để định hướng tương lai",
    image: "/ai-artificial-intelligence-technology-future.jpg",
    icon: Zap,
    tags: ["AI", "Công nghệ số", "Tương lai"],
  },
]

export function InteractiveTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && titleRef.current && timelineRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          scale: 0.95,
        })

        const cards = timelineRef.current?.querySelectorAll(".timeline-card") || []
        cards.forEach((card, index) => {
          const isLeft = index % 2 === 0
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
            opacity: 0,
            x: isLeft ? -100 : 100,
            scale: 0.9,
          })
        })

        const icons = timelineRef.current?.querySelectorAll(".timeline-icon") || []
        icons.forEach((icon) => {
          gsap.from(icon, {
            scrollTrigger: {
              trigger: icon,
              start: "top 80%",
              end: "top 60%",
              scrub: 1,
            },
            scale: 0,
            rotation: 180,
          })
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <section
      id="timeline"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a0000] via-[#220000] to-[#0a0000] relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.1),_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center space-y-6 mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent leading-tight">
            Lịch Sử Chủ Nghĩa Tư Bản
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
            Từ Cách Mạng Công Nghiệp đến Kỷ Nguyên AI - Vai Trò Lịch Sử và Những Mâu Thuẫn
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-700 via-red-600 to-red-800 transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-24">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0
              const Icon = event.icon

              return (
                <div key={event.year} className="relative">
                  <div className="timeline-icon absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-900 to-red-800 flex items-center justify-center shadow-2xl border-4 border-background">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div
                    className={`timeline-card grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                      isLeft ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`${isLeft ? "lg:text-right lg:pr-16" : "lg:pl-16 lg:col-start-2"}`}>
                      <div className="inline-block mb-4">
                        <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-red-900 to-red-800 text-white font-bold">
                          {event.year}
                        </Badge>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                        {event.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-gray-400 mb-6 font-light">{event.subtitle}</p>
                      <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">{event.description}</p>

                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-sm px-3 py-1 border-red-700 text-red-200 hover:bg-red-800/30 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className={`${isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 to-red-900/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div className="relative overflow-hidden rounded-3xl border-2 border-amber-700/30 shadow-2xl">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
