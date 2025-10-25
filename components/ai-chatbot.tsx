"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User, Sparkles, Loader2 } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const starterPrompts = [
  "Chủ nghĩa tư bản là gì? Tại sao nó quan trọng với giới trẻ?",
  "Mâu thuẫn cơ bản của chủ nghĩa tư bản là gì?",
  "AI có thể bóc lột lao động không? Làm sao để tránh?",
  "Đổi mới 1986 ở Việt Nam có ý nghĩa gì với CNDVLS?",
  "Làm sao để có ý thức lịch sử trong thời đại AI?",
  "Tư bản số là gì? Nó khác gì với tư bản truyền thống?",
  "Sinh viên nên làm gì để vượt qua những mâu thuẫn của tư bản?",
  "Triết học giúp gì cho lập trình viên và kỹ sư AI?",
]

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const sectionStyle: React.CSSProperties = {
  backgroundImage: `url('/phi3.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  backgroundAttachment: "fixed",
  position: "relative",
  zIndex: 0,
}

export function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        'Xin chào! Tôi là "Triết Sống - CNDVLS", trợ lý AI chuyên về Chủ nghĩa Duy vật Lịch sử. Tôi sẽ giúp bạn kết nối triết học với lịch sử Việt Nam, công nghệ AI, và cuộc sống hiện đại. Bạn muốn hỏi gì?',
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showStarters, setShowStarters] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const card = cardRef.current

    if (section && title && card) {
      gsap.from(title, {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      })
    }
  }, [])

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollElement) {
        setTimeout(() => {
          scrollElement.scrollTop = scrollElement.scrollHeight
        }, 0)
      }
    }
  }, [messages])

  const handleStarterClick = (prompt: string) => {
    setShowStarters(false)
    setInput(prompt)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setShowStarters(false)
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("[v0] Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content: "Xin lỗi, tôi gặp lỗi khi xử lý câu hỏi của bạn. Vui lòng thử lại.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="chat" ref={sectionRef} className="py-12 lg:py-24" style={sectionStyle}>
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container max-w-[80rem] mx-auto px-4 relative z-10">
        <div ref={titleRef} className="mx-auto max-w-[58rem] text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Tư vấn AI về triết học
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Đặt câu hỏi về chủ nghĩa duy vật lịch sử, tư bản, và AI trong thời đại số
          </p>
        </div>

        <Card ref={cardRef} className="w-full max-w-[58rem] mx-auto bg-card/70">
          <CardHeader>
            <CardTitle>Trò chuyện với AI Triết Sống</CardTitle>
            <CardDescription>Hỏi đáp về CNDVLS, lịch sử Việt Nam, và ứng dụng vào thời đại AI</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea ref={scrollAreaRef} className="h-[600px] pr-4 mb-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "assistant" ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        message.role === "assistant" ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      ) : (
                        <User className="w-5 h-5" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "assistant" ? "bg-primary text-primary-foreground" : "bg-muted/70"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Loader2 className="w-5 h-5 text-primary-foreground animate-spin" />
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2">
                      <p className="text-sm">Đang suy nghĩ...</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {showStarters && messages.length <= 1 && (
              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Sparkles className="w-4 h-4" />
                  <span>Gợi ý câu hỏi:</span>
                </div>
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                  {starterPrompts.map((prompt, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="h-auto whitespace-normal text-left justify-start text-xs bg-transparent"
                      onClick={() => handleStarterClick(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
                <span className="sr-only">Gửi</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
