"use client"

import { useEffect, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: "Vai trò lịch sử của chủ nghĩa tư bản là gì theo Mác và Lênin?",
    answer:
      "Theo Mác và Lênin, CNTB có vai trò tiến bộ to lớn: phá vỡ phong kiến, giải phóng lực lượng sản xuất, cách mạng hóa công cụ sản xuất, tạo tiền đề vật chất – kỹ thuật cho xã hội. Tuy nhiên, CNTB cũng chứa đựng mâu thuẫn nội tại (giữa tính xã hội hóa sản xuất và chiếm hữu tư nhân) dẫn đến khủng hoảng chu kỳ, bất bình đẳng, cần được vượt qua để phát triển tiếp.",
  },
  {
    question: "Tại sao Tesla là ví dụ điển hình cho vai trò thúc đẩy lực lượng sản xuất của CNTB?",
    answer:
      "Tesla minh chứng quy luật 'cạnh tranh → tích lũy tư bản → đổi mới công nghệ' của Mác: phát triển xe điện, pin tiên tiến, tự động hóa sản xuất (Gigafactory), AI tự lái. Cạnh tranh buộc Tesla đầu tư khổng lồ vào R&D, thúc đẩy chuyển dịch năng lượng sạch toàn cầu. Đây là vai trò cách mạng hóa công cụ sản xuất trong thế kỷ 21.",
  },
  {
    question: "Kinh tế nền tảng (Grab, Shopee Food) vừa là động lực vừa chứa mâu thuẫn như thế nào?",
    answer:
      "Động lực: thuật toán tối ưu giao nhận, giảm chi phí giao dịch, tạo việc làm linh hoạt, mở rộng thị trường cho tiểu thương. Mâu thuẫn: thu nhập tài xế bấp bênh (thuật toán thay đổi), rủi ro do lao động gánh (xăng, khấu hao xe), dữ liệu/sự chú ý bị đo đếm tối ưu (tha hóa), hiệu ứng mạng tạo độc quyền. Đây là tính hai mặt điển hình của CNTB hiện đại.",
  },
  {
    question: "5 đặc trưng của CNTB giai đoạn đế quốc theo Lênin là gì?",
    answer:
      "(1) Tập trung sản xuất tạo độc quyền; (2) Tư bản ngân hàng + công nghiệp = tư bản tài chính; (3) Xuất khẩu tư bản trội hơn hàng hóa; (4) Liên minh độc quyền quốc tế phân chia thị trường; (5) Phân chia lãnh thổ thế giới giữa cường quốc. Các đặc trưng này thể hiện rõ trong ngành AI – cloud hiện nay (Google, Microsoft, Amazon).",
  },
  {
    question: "Sinh viên cần trang bị những năng lực lõi nào để tận dụng thành tựu CNTB?",
    answer:
      "(1) Tư duy phê phán: phân tích bản chất, không bị thao túng; (2) Năng lực số (Data/AI Literacy): làm chủ công cụ công nghệ; (3) Phương pháp nghiên cứu: phân tích dựa bằng chứng khoa học; (4) Ngoại ngữ: tiếp cận tri thức toàn cầu. Kết hợp mô hình T-shaped (chuyên sâu + kỹ năng bổ trợ) và học suốt đời để thích ứng với biến động.",
  },
  {
    question: "Làm sao để sinh viên không trở thành 'nạn nhân' của hệ thống tư bản số?",
    answer:
      "(1) Quyền kỹ thuật số: bảo mật dữ liệu cá nhân, quản lý dấu vết số, hiểu điều khoản nền tảng; (2) Lao động – tài chính: đọc kỹ hợp đồng, đa dạng hóa kỹ năng/thu nhập, dự phòng tài chính; (3) Vệ sinh số: quản trị thời gian màn hình, giảm lệ thuộc thuật toán khuyến nghị, giữ sức khỏe tinh thần. Phát triển tư duy phản biện để không bị dẫn dắt bởi mô hình kinh doanh nền tảng.",
  },
  {
    question: "Tại sao cần chính sách công để điều tiết CNTB trong thời đại AI?",
    answer:
      "Mâu thuẫn giữa tính xã hội hóa cao (chuỗi cung ứng tri thức toàn cầu, AI, cloud) và chiếm hữu tư nhân (dữ liệu, thuật toán, nền tảng) không tự tiêu vong. Cần chính sách: chống độc quyền, bảo vệ dữ liệu cá nhân, an sinh xã hội, đào tạo lại lao động, định giá carbon, minh bạch thuật toán - để định hướng phát triển phù hợp với mức xã hội hóa hiện nay.",
  },
  {
    question: "Hướng tới xã hội tiến bộ hơn có nghĩa là gì đối với sinh viên?",
    answer:
      "Không phải phủ nhận thành tựu CNTB mà vượt lên trên nó: (1) Học gắn với trách nhiệm xã hội (chọn nghề vừa có thu nhập vừa đóng góp cộng đồng); (2) Tinh thần công dân toàn cầu (chung tay giải quyết biến đổi khí hậu, công bằng công nghệ); (3) Đổi mới xã hội (social innovation) dùng công nghệ giải quyết vấn đề xã hội; (4) Ủng hộ khoa học mở, doanh nghiệp xã hội, đa dạng hóa sở hữu/quản trị.",
  },
  {
    question: "Tại sao Cách mạng Tháng Tám 1945 thành công dù điều kiện vật chất lạc hậu?",
    answer:
      "Theo CNDVLS, ý thức xã hội có độc lập tương đối với điều kiện vật chất. Tháng Tám 1945: điều kiện vật chất còn lạc hậu nhưng ý thức độc lập dân tộc cao + tư tưởng Mác–Lênin + tổ chức chặt chẽ của Đảng → cách mạng thành công. Đây là minh chứng vai trò của ý thức có tổ chức trong việc vượt qua hạn chế vật chất.",
  },
  {
    question: "Thế hệ 2025-2050 'chiến đấu cho tự do nhận thức' có nghĩa là gì?",
    answer:
      "Nếu thế hệ 1945–1986 chiến đấu cho độc lập vật chất (lãnh thổ, chính trị, kinh tế), thì thế hệ hiện tại chiến đấu cho tự do nhận thức: không để thuật toán, surveillance capitalism, fake news chi phối cách nghĩ và cách sống. Đây là mặt trận mới của đấu tranh - giữ gốc nhân văn, tư duy độc lập khi công nghệ bùng nổ.",
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
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
          scale: 0.9,
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
              <AccordionItem key={index} value={`item-${index}`}>
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
