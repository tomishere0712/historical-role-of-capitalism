"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, BookOpen, Clock, Grid3x3, Users, MessageSquare, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "home", label: "Trang chủ", icon: Home, href: "#home" },
    { id: "rationale", label: "Nền Tảng", icon: BookOpen, href: "#rationale" },
    { id: "timeline", label: "Dòng Chảy", icon: Clock, href: "#timeline" },
    { id: "matrix", label: "Ma Trận", icon: Grid3x3, href: "#matrix" },
    { id: "quiz", label: "Kiểm Tra", icon: Brain, href: "#quiz" },
    { id: "chat", label: "Chat AI", icon: MessageSquare, href: "#chat" },
    { id: "opinions", label: "Góp Ý", icon: Users, href: "#opinions" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => document.querySelector(item.href) as HTMLElement).filter(Boolean)

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) {
        const sectionId = currentSection.id
        if (activeSection !== sectionId) {
          setActiveSection(sectionId)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#7d2e3d] to-[#5a1f2a] backdrop-blur-md shadow-lg border-b border-yellow-500/20"
          : "bg-gradient-to-r from-[#7d2e3d] to-[#5a1f2a]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
              <Brain className="w-6 h-6 text-[#7d2e3d]" />
            </div>
            <span className="text-yellow-400 font-bold text-lg hidden sm:block">MLN122</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`gap-2 transition-all ${
                    isActive
                      ? "bg-yellow-500 text-[#7d2e3d] hover:bg-yellow-400 shadow-md"
                      : "text-yellow-100 hover:bg-white/10 hover:text-yellow-300"
                  }`}
                  onClick={() => {
                    setActiveSection(item.id)
                    const element = document.querySelector(item.href)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline text-sm">{item.label}</span>
                </Button>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
