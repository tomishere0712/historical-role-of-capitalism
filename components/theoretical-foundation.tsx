"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, AlertTriangle, Users, Globe, Lightbulb } from "lucide-react"

const categories = [
  {
    id: "marx-lenin",
    title: "Quan điểm Mác - Lênin",
    icon: TrendingUp,
    description: "Chủ nghĩa tư bản là giai đoạn lịch sử cần thiết",
    content:
      "Theo Mác và Lênin, chủ nghĩa tư bản là một giai đoạn lịch sử cần thiết trong sự phát triển của xã hội. Nó đã phá vỡ các mối quan hệ phong kiến, giải phóng lực lượng sản xuất, và tạo ra những điều kiện vật chất cho sự phát triển tiếp theo. Tuy nhiên, chủ nghĩa tư bản cũng chứa đựng những mâu thuẫn nội tại sẽ dẫn đến sự sụp đổ của nó.",
    examples: [
      "Cách mạng công nghiệp (1760-1840): Tư bản phá vỡ phong kiến, giải phóng lực lượng sản xuất",
      "Sự phát triển của công nghệ: Máy móc, nhà máy, hệ thống giao thông - tất cả được tư bản phát triển",
      "Bài học: Hiểu rõ vai trò lịch sử của tư bản để không bị lạc lối trong thời đại AI",
    ],
  },
  {
    id: "historical-role",
    title: "Vai Trò Lịch Sử",
    icon: Lightbulb,
    description: "Từ phong kiến đến xã hội tiến bộ",
    content:
      "Vai trò lịch sử của chủ nghĩa tư bản là phá vỡ các mối quan hệ sản xuất cũ (phong kiến) và tạo ra những điều kiện vật chất cho sự phát triển tiếp theo. Tuy nhiên, chủ nghĩa tư bản không phải là điểm cuối cùng của lịch sử - nó chỉ là một giai đoạn trong quá trình phát triển của xã hội.",
    examples: [
      "Phong kiến → Tư bản: Tư bản phá vỡ phong kiến, giải phóng lực lượng sản xuất",
      "Tư bản → Xã hội tiến bộ: Những mâu thuẫn của tư bản sẽ dẫn đến sự phát triển tiếp theo",
      "Bài học: Hiểu rõ quy luật phát triển lịch sử để định hướng tương lai",
    ],
  },
  {
    id: "modern-examples",
    title: "Ví dụ Hiện đại",
    icon: Globe,
    description: "Tesla, Microsoft, Google, OpenAI - Động lực tư bản",
    content:
      "Các công ty công nghệ hiện đại như Tesla, Microsoft, Google, OpenAI vẫn thúc đẩy lực lượng sản xuất. Chúng phát triển công nghệ mới, tạo ra những ngành công nghiệp mới, và thay đổi cách con người làm việc. Tuy nhiên, chúng cũng tạo ra những mâu thuẫn: bóc lột lao động, bất bình đẳng, thao túng thị trường.",
    examples: [
      "Tesla: Phát triển công nghệ xe điện, năng lượng tái tạo - nhưng cũng tạo ra những mâu thuẫn lao động",
      "OpenAI: Phát triển AI tiên tiến - nhưng ai sẽ hưởng lợi từ công nghệ này?",
      "Bài học: Tư bản vẫn là động lực, nhưng chúng ta phải kiểm soát nó để phục vụ nhân loại",
    ],
  },
  {
    id: "dual-nature",
    title: "Tính Hai Mặt",
    icon: AlertTriangle,
    description: "Động lực và mâu thuẫn",
    content:
      "Chủ nghĩa tư bản có tính hai mặt: nó vừa là động lực phát triển lực lượng sản xuất, vừa là nguồn gốc của bóc lột, bất bình đẳng, và thao túng thị trường. Mâu thuẫn này không thể giải quyết trong khuôn khổ của chủ nghĩa tư bản - nó chỉ có thể được giải quyết bằng cách vượt qua nó.",
    examples: [
      "Phát triển công nghệ vs. Bóc lột lao động: Công nhân tạo ra giá trị, nhưng chủ sở hữu tư bản chiếm đoạt",
      "Tự do thị trường vs. Độc quyền: Tư bản tìm cách loại bỏ cạnh tranh để tăng lợi nhuận",
      "Bài học: Nhận thức rõ mâu thuẫn này để tìm ra giải pháp tiến bộ hơn",
    ],
  },
  {
    id: "student-perspective",
    title: "Liên Hệ Sinh Viên",
    icon: Users,
    description: "Làm sao tận dụng thành tựu, tránh bị lệ thuộc",
    content:
      "Sinh viên thế hệ AI cần: (1) Tận dụng thành tựu CNTB - phát triển năng lực lõi (tư duy phê phán, data/AI literacy, phương pháp nghiên cứu, ngoại ngữ); (2) Không trở thành nạn nhân - bảo vệ quyền kỹ thuật số, hiểu hợp đồng lao động, quản trị thời gian số; (3) Hướng tới lý tưởng tiến bộ - học gắn trách nhiệm xã hội, tinh thần công dân toàn cầu.",
    examples: [
      "Tận dụng: Xây dựng portfolio dự án, tham gia mã nguồn mở, học qua MOOC, sử dụng AI làm công cụ hỗ trợ",
      "Phòng ngừa: Bảo mật dữ liệu cá nhân, đa dạng hóa kỹ năng/thu nhập, giảm lệ thuộc thuật toán khuyến nghị",
      "Định hướng: Chọn nghề vừa có thu nhập vừa đóng góp cộng đồng, ủng hộ đổi mới xã hội và khoa học mở",
    ],
  },
]

export function TheoreticalFoundation() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const tabsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="theoretical-foundation"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Nền ảnh có hiệu ứng */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')" }}
      ></div>

      {/* Lớp phủ mờ + gradient tối dần */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-[1px]" />

      {/* Nội dung */}
      <div className="relative max-w-7xl mx-auto text-white">
        <div ref={titleRef} className="text-center space-y-6 mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.4)" }}
          >
            Nền Tảng Lý Thuyết
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Vai Trò Lịch Sử của Chủ Nghĩa Tư Bản
          </p>
          <p className="text-base sm:text-lg font-semibold text-yellow-300 max-w-2xl mx-auto tracking-wide">
            Từ Mác - Lênin đến Thực Tiễn Hiện Đại
          </p>
        </div>

        <Tabs defaultValue="marx-lenin" className="w-full" ref={tabsRef}>
          <TabsList
            className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
              h-auto gap-3 p-3 bg-[#1a120b]/80 rounded-xl 
              backdrop-blur-md border border-yellow-900/30 shadow-inner"
          >
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`
                  flex flex-col items-center gap-2 py-5 px-3 rounded-xl font-medium text-sm
                  text-yellow-200 transition-all duration-300 ease-out shadow-sm
                  hover:scale-105 hover:text-yellow-100
                  hover:bg-gradient-to-br hover:from-[#2b1d10]/90 hover:to-[#3a2a1a]/80 hover:shadow-[0_0_12px_rgba(255,215,0,0.25)]
                  
                  data-[state=active]:bg-gradient-to-br 
                  data-[state=active]:from-[#3a2c23]/90 
                  data-[state=active]:to-[#4e3b2e]/90 
                  data-[state=active]:text-[#ffe7aa]
                  data-[state=active]:border data-[state=active]:border-yellow-500/30
                  data-[state=active]:shadow-[inset_0_0_15px_rgba(255,215,0,0.25),0_0_8px_rgba(255,200,0,0.15)]
                `}
              >
                <category.icon className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_6px_rgba(255,220,100,0.4)] transition-all duration-300" />
                <span className="text-center leading-tight">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <Card
                className="overflow-hidden border border-yellow-800/30 
                bg-gradient-to-br from-[#1c1c1c]/95 to-[#2a2a2a]/90 
                backdrop-blur-md shadow-2xl 
                hover:shadow-[0_0_25px_rgba(255,200,0,0.25)] 
                transition-all duration-500 text-white"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-600/20 shadow-lg">
                      <category.icon className="w-8 h-8 text-yellow-300" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl text-yellow-300 mb-2">{category.title}</CardTitle>
                      <CardDescription className="text-base md:text-lg text-gray-200">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-100">{category.content}</p>

                  <div>
                    <h4 className="font-semibold text-lg md:text-xl mb-4 flex items-center gap-2 text-yellow-300">
                      <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full" />
                      Ví dụ & Bài Học
                    </h4>
                    <ul className="space-y-3">
                      {category.examples.map((example, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300 p-3 rounded-lg hover:bg-white/5"
                        >
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 text-yellow-200 flex items-center justify-center text-sm font-semibold group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            {index + 1}
                          </span>
                          <span className="text-gray-100 group-hover:text-white transition-colors duration-300 leading-relaxed">
                            {example}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
