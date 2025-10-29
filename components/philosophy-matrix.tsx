"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const matrixData = [
  {
    category: "Động Lực Phát Triển",
    achievement: "Cách Mạng Công Nghiệp",
    philosophy:
      "Tư bản phá vỡ phong kiến, giải phóng lực lượng sản xuất. Máy móc, nhà máy, hệ thống giao thông - tất cả được tư bản phát triển.",
    youth: "Công nghệ là công cụ mạnh mẽ. Nhưng ai sở hữu công nghệ sẽ nắm quyền lực.",
    ai: "AI là lực lượng sản xuất mới. Câu hỏi là: AI sẽ phục vụ ai? Nhân loại hay tư bản?",
  },
  {
    category: "Mâu Thuẫn Nội Tại",
    achievement: "Khủng Hoảng Kinh Tế",
    philosophy:
      "Tư bản tạo ra những mâu thuẫn không thể giải quyết: bóc lột lao động, bất bình đẳng, thao túng thị trường.",
    youth: "Bóc lột vẫn tồn tại, chỉ dưới hình thức mới. Lao động gig, bóc lột dữ liệu, thao túng thuật toán.",
    ai: "Dữ liệu là tài sản mới. Ai sở hữu dữ liệu sẽ nắm quyền lực. Cần bảo vệ quyền riêng tư và dữ liệu cá nhân.",
  },
  {
    category: "Độc Quyền",
    achievement: "Tập Trung Vốn",
    philosophy: "Tư bản tìm cách loại bỏ cạnh tranh để tăng lợi nhuận. Độc quyền là xu hướng tự nhiên của tư bản.",
    youth: "GAFAM (Google, Apple, Facebook, Amazon, Microsoft) độc quyền thị trường. Cần kiểm soát độc quyền.",
    ai: "Công nghệ AI tập trung ở tay một vài công ty lớn. Cần dân chủ hóa AI, không để AI bị độc quyền.",
  },
  {
    category: "Thích Ứng và Phát Triển",
    achievement: "Đổi Mới 1986",
    philosophy: "Cần thích ứng với thực tiễn để phát triển. Kết hợp xã hội chủ nghĩa với cơ chế thị trường.",
    youth: "Học cách sử dụng công cụ của tư bản mà không bị chi phối bởi nó. Tư duy phản biện là chìa khóa.",
    ai: "Sử dụng AI để phát triển, nhưng không để AI thay thế tư duy của bạn. Công nghệ phải phục vụ con người.",
  },
  {
    category: "Ý Thức Lịch Sử",
    achievement: "Hiểu Rõ Vai Trò Lịch Sử",
    philosophy: "Chủ nghĩa tư bản là giai đoạn lịch sử cần thiết, nhưng không phải điểm cuối cùng. Nó sẽ bị vượt qua.",
    youth: "Hiểu rõ lịch sử để định hướng tương lai. Không bị lạc lối trong thông tin quá tải.",
    ai: "Triết học là la bàn trong thế giới số. Giúp định hướng, giữ gốc nhân văn khi công nghệ bùng nổ.",
  },
]

// Định nghĩa style inline cho background
const sectionStyle: React.CSSProperties = {
  backgroundImage: `url('/capitalism-market-economy-business.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center 5%",
  backgroundAttachment: "scroll",
  position: "relative",
  zIndex: 0,
}

// Màu chữ chính
const primaryTextColor = "#FFF0B4"
const secondaryTextColor = "#ffffffff"

export function PhilosophyMatrix() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && titleRef.current && cardsRef.current) {
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
          scale: 0.8,
          y: 50,
        })

        // Animate cards with stagger
        gsap.from(cardsRef.current?.querySelectorAll(".matrix-card") || [], {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
          opacity: 0,
          y: 100,
          stagger: 0.1,
          ease: "power2.out",
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <section id="matrix" className="py-20 px-4 relative" ref={sectionRef} style={sectionStyle}>
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: primaryTextColor }}>
            Ma Trận Kết Nối
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: secondaryTextColor }}>
            Chủ Nghĩa Tư Bản ↔ Lý Thuyết ↔ Giới Trẻ ↔ Bài Học AI
          </p>
        </div>

        <Tabs defaultValue="table" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-white/10 border border-gray-700">
            <TabsTrigger
              value="table"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
              style={{ color: primaryTextColor }}
            >
              Bảng tổng hợp
            </TabsTrigger>
            <TabsTrigger
              value="cards"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
              style={{ color: primaryTextColor }}
            >
              Thẻ chi tiết
            </TabsTrigger>
          </TabsList>

          <TabsContent value="table" className="mt-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/10">
                    <th
                      className="p-4 text-left font-semibold border border-gray-700"
                      style={{ color: primaryTextColor }}
                    >
                      Khía Cạnh
                    </th>
                    <th
                      className="p-4 text-left font-semibold border border-gray-700"
                      style={{ color: primaryTextColor }}
                    >
                      Sự Kiện Lịch Sử
                    </th>
                    <th
                      className="p-4 text-left font-semibold border border-gray-700"
                      style={{ color: primaryTextColor }}
                    >
                      Góc Nhìn Giới Trẻ
                    </th>
                    <th
                      className="p-4 text-left font-semibold border border-gray-700"
                      style={{ color: primaryTextColor }}
                    >
                      Bài Học Thời AI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matrixData.map((row, index) => (
                    <tr key={index} className="bg-black/40 hover:bg-black/60 transition-colors">
                      <td className="p-4 border border-gray-700 font-medium" style={{ color: primaryTextColor }}>
                        {row.category}
                      </td>
                      <td className="p-4 border border-gray-700" style={{ color: secondaryTextColor }}>
                        {row.achievement}
                      </td>
                      <td className="p-4 border border-gray-700" style={{ color: secondaryTextColor }}>
                        {row.youth}
                      </td>
                      <td className="p-4 border border-gray-700" style={{ color: secondaryTextColor }}>
                        {row.ai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="cards" className="mt-8">
            <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
              {matrixData.map((item, index) => (
                <Card
                  key={index}
                  className="matrix-card bg-black/60 border border-gray-700 hover:shadow-2xl transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2" style={{ color: primaryTextColor }}>
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {item.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2 border-yellow-500 text-yellow-400 bg-transparent">
                        Sự Kiện
                      </Badge>
                      <p className="text-sm font-medium" style={{ color: primaryTextColor }}>
                        {item.achievement}
                      </p>
                      <p className="text-sm mt-1" style={{ color: secondaryTextColor }}>
                        {item.philosophy}
                      </p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 border-yellow-500 text-yellow-400 bg-transparent">
                        Giới Trẻ
                      </Badge>
                      <p className="text-sm" style={{ color: secondaryTextColor }}>
                        {item.youth}
                      </p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 border-cyan-500 text-cyan-400 bg-transparent">
                        Bài Học AI
                      </Badge>
                      <p className="text-sm" style={{ color: secondaryTextColor }}>
                        {item.ai}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
