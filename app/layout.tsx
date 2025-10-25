import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { OpinionsProvider } from "@/lib/contexts/opinions-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vai trò lịch sử của Chủ nghĩa Tư bản trong Thế kỷ 21 – Từ Cách mạng Công nghiệp đến Kỷ nguyên AI",
  description:
    "Khám phá cách hệ thống tư bản vừa là động lực phát triển, vừa ẩn chứa mâu thuẫn – qua góc nhìn của sinh viên thời đại số. Dự án học tập MLN122 - FPT University",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <OpinionsProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </OpinionsProvider>
        <Analytics />
      </body>
    </html>
  )
}
