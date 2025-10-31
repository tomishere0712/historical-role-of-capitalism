"use client"

import { useEffect, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: "Chủ nghĩa Duy vật Lịch sử là gì?",
    answer:
      "Chủ nghĩa Duy vật Lịch sử (CNDVLS) là học thuyết triết học của C.Mác và Ph.Ăngghen về sự phát triển của xã hội loài người. Nó khẳng định rằng sự phát triển xã hội được quyết định bởi các điều kiện vật chất, đặc biệt là phương thức sản xuất (lực lượng sản xuất + quan hệ sản xuất).",
  },
  {
    question: "Tại sao cần học triết học trong thời đại AI?",
    answer:
      "Triết học giúp chúng ta hiểu bản chất của sự vật, tư duy hệ thống và phản biện. Trong thời đại AI với thông tin quá tải, khả năng phân tích bản chất, nhận diện xu hướng và đưa ra quyết định đúng đắn trở nên quan trọng hơn bao giờ hết. Triết học cũng giúp giữ vững giá trị nhân văn khi công nghệ phát triển.",
  },
  {
    question: "Làm thế nào để áp dụng CNDVLS vào cuộc sống?",
    answer:
      "Bạn có thể áp dụng CNDVLS bằng cách: (1) Phân tích vấn đề từ điều kiện vật chất cụ thể, không chỉ dựa vào ý thức; (2) Nhìn nhận sự phát triển theo quy luật biện chứng (tích lũy dần dần, bước nhảy vọt); (3) Hiểu rằng thay đổi là tất yếu và cần thích nghi; (4) Nhận thức vai trò của cộng đồng trong sự phát triển cá nhân.",
  },
  {
    question: "Mối liên hệ giữa chiến công Việt Nam và triết học là gì?",
    answer:
      "Các chiến công của dân tộc Việt Nam là minh chứng sinh động cho các nguyên lý triết học CNDVLS: sức mạnh nhân dân (lực lượng sản xuất), tổ chức xã hội (quan hệ sản xuất), tích lũy lực lượng dẫn đến bước nhảy vọt (Điện Biên Phủ), và khả năng thích nghi với thực tiễn (Đổi mới).",
  },
  {
    question: "AI có thay thế được con người không?",
    answer:
      "Theo quan điểm CNDVLS, AI là công cụ lao động mới - một phần của lực lượng sản xuất. AI có thể thay thế con người trong nhiều công việc, nhưng không thể thay thế hoàn toàn vì con người có ý thức, sáng tạo và giá trị nhân văn. Tương lai là sự kết hợp Human + AI, không phải AI thay thế Human.",
  },
  {
    question: "Làm sao để chuẩn bị cho tương lai với AI?",
    answer:
      "Hãy tập trung vào: (1) Tư duy phản biện và sáng tạo - điều AI khó làm được; (2) Học tập suốt đời để thích nghi với công nghệ mới; (3) Phát triển kỹ năng mềm và giá trị nhân văn; (4) Hiểu bản chất công nghệ để sử dụng đúng đắn; (5) Kết nối cộng đồng và hợp tác hiệu quả.",
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && titleRef.current && accordionRef.current) {
      const ctx = gsap.context(() => {
        // Animate title - hiển thị ngay khi vào viewport
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top bottom-=100",
              once: true,
            },
          }
        )

        // Animate FAQ items - hiển thị ngay khi vào viewport
        const faqItems = accordionRef.current?.querySelectorAll("[data-state]") || []
        faqItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: -20,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top bottom-=50",
                once: true,
              },
            }
          )
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <section id="faq" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Câu Hỏi Thường Gặp</h2>
          <p className="text-xl text-muted-foreground">Giải đáp những thắc mắc phổ biến về triết học và AI</p>
        </div>

        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={faq.question}>
                
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
