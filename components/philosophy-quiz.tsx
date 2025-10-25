"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Trophy } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { quizSets, type QuizSet, type QuizQuestion } from "@/lib/quiz-data"

gsap.registerPlugin(ScrollTrigger)

// Định nghĩa style inline cho background
const sectionStyle: React.CSSProperties = {
  backgroundImage: `url('/phi5.jpg')`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center', 
  backgroundAttachment: 'fixed', 
  position: 'relative', 
  zIndex: 0,
};

// Màu chữ (FFF0B4)
const primaryTextColor = '#FFF0B4';
const secondaryTextColor = '#C0C0C0'; 

export function PhilosophyQuiz() {
  const [currentSet, setCurrentSet] = useState<QuizSet | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([])

  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && titleRef.current && cardRef.current) {
      const ctx = gsap.context(() => {
        // Điều chỉnh 'start' cho animation tiêu đề
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%", // Bắt đầu sớm hơn: khi 90% từ trên của viewport chạm mép trên của trigger
            end: "top 60%",   // Kết thúc sớm hơn
            scrub: 1,
            // markers: true, // Bỏ comment để debug ScrollTrigger
          },
          opacity: 0,
          y: 50,
          scale: 0.9,
        })

        // Điều chỉnh 'start' cho animation thẻ
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%", // Bắt đầu sớm hơn: khi 90% từ trên của viewport chạm mép trên của trigger
            end: "top 50%",   // Kết thúc sớm hơn
            scrub: 1,
            // markers: true, // Bỏ comment để debug ScrollTrigger
          },
          opacity: 0,
          y: 80,
          scale: 0.95,
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  const handleSelectSet = (set: QuizSet) => {
    setCurrentSet(set)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Array(set.questions.length).fill(false))
  }

  const handleAnswer = (index: number) => {
    if (!currentSet || answeredQuestions[currentQuestion]) return

    setSelectedAnswer(index)
    const question = currentSet.questions[currentQuestion]
    const isCorrect = question.correct !== undefined && index === question.correct

    if (isCorrect) {
      setScore(score + 1)
    }

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)
  }

  const handleNext = () => {
    if (!currentSet) return

    if (currentQuestion < currentSet.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setCurrentSet(null)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
  }

  // --- Start Quiz Selection View (NỀN TỐI, 3 CỘT CƯỠNG CHẾ) ---
  if (!currentSet) {
    return (
      <section 
        id="quiz" 
        className="py-20 px-4 relative" 
        ref={sectionRef} 
        style={sectionStyle} 
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div> 

        <div className="max-w-4xl mx-auto relative z-10" ref={titleRef}>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: primaryTextColor }}>Kiểm Tra Kiến Thức</h2>
            <p className="text-xl" style={{ color: secondaryTextColor }}>Chọn một bộ câu hỏi để bắt đầu</p>
          </div>

          {/* Grid cố định 3 cột trên mọi kích thước màn hình */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={cardRef}>
            {quizSets.map((set) => (
              <Card 
                key={set.id} 
                className="cursor-pointer hover:shadow-xl transition-shadow bg-black/70 border-gray-700 text-white" 
                onClick={() => handleSelectSet(set)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={
                      set.difficulty === "easy" ? "bg-emerald-900/80 text-emerald-400 border-emerald-400" :
                      set.difficulty === "medium" ? "bg-yellow-900/80 text-yellow-400 border-yellow-400" :
                      "bg-rose-900/80 text-rose-400 border-rose-400"
                    }>
                      {set.difficulty === "easy" ? "Dễ" :
                       set.difficulty === "medium" ? "Trung bình" :
                       "Khó"}
                    </Badge>
                  </div>
                  <CardTitle style={{ color: primaryTextColor }}>{set.title}</CardTitle>
                  <CardDescription style={{ color: secondaryTextColor }}>{set.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // --- Start Quiz Result View (NỀN TỐI) ---
  if (showResult) {
    const percentage = (score / currentSet.questions.length) * 100

    return (
      <section 
        id="quiz" 
        className="py-20 px-4 relative" 
        ref={sectionRef}
        style={sectionStyle}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          <Card className="text-center bg-black/70 border-gray-700 text-white">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse-glow">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl" style={{ color: primaryTextColor }}>Hoàn thành!</CardTitle> 
              <CardDescription className="text-lg" style={{ color: secondaryTextColor }}>Kết quả của bạn</CardDescription> 
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-6xl font-bold mb-2" style={{ color: primaryTextColor }}>
                  {score}/{currentSet.questions.length}
                </div>
                <p className="text-xl" style={{ color: secondaryTextColor }}>Đạt {percentage.toFixed(0)}%</p>
              </div>

              <div className="p-6 bg-white/10 rounded-lg"> 
                <p className="text-lg font-semibold mb-2" style={{ color: primaryTextColor }}>
                  {percentage >= 80
                    ? "Xuất sắc! Bạn đã nắm vững kiến thức triết học."
                    : percentage >= 60
                    ? "Khá tốt! Hãy ôn lại một số kiến thức."
                    : "Cần cố gắng thêm! Hãy học lại các phần lý thuyết."}
                </p>
                <p style={{ color: secondaryTextColor }}>
                  Tiếp tục học tập để hiểu sâu hơn về Chủ nghĩa Duy vật Lịch sử và ứng dụng trong thời đại AI.
                </p>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleReset} size="lg" className="flex-1">
                  Chọn bộ khác
                </Button>
                <Button onClick={() => handleSelectSet(currentSet)} variant="outline" size="lg" className="flex-1">
                  Làm lại bộ này
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  // --- Start Quiz Question View (NỀN TỐI) ---
  const question = currentSet.questions[currentQuestion]
  const isAnswered = answeredQuestions[currentQuestion]

  return (
    <section 
      id="quiz" 
      className="py-20 px-4 relative" 
      ref={sectionRef}
      style={sectionStyle}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: primaryTextColor }}>{currentSet.title}</h2>
          <p className="text-xl" style={{ color: secondaryTextColor }}>{currentSet.description}</p>
        </div>

        <div ref={cardRef}>
          <Card className="bg-black/70 border-gray-700 text-white">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-white border-white/50">
                  Câu {currentQuestion + 1}/{currentSet.questions.length}
                </Badge>
                <Badge className="bg-white/10 text-white">
                  Điểm: {score}/{currentQuestion + (isAnswered ? 1 : 0)}
                </Badge>
              </div>
              <CardTitle className="text-2xl" style={{ color: primaryTextColor }}>{question.question}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {question.options ? (
                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = question.correct !== undefined && index === question.correct
                    const showCorrect = isAnswered && isCorrect
                    const showWrong = isAnswered && isSelected && !isCorrect

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={isAnswered}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all text-white ${ 
                          showCorrect
                            ? "border-green-500 bg-green-900/50" 
                            : showWrong
                              ? "border-red-500 bg-red-900/50" 
                              : isSelected
                                ? "border-yellow-400 bg-yellow-900/30" 
                                : "border-gray-700 hover:border-white/50 bg-white/5" 
                        } ${isAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-400" />} 
                          {showWrong && <XCircle className="w-5 h-5 text-red-400" />} 
                        </div>
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div className="border-2 border-gray-700 rounded-lg p-4 bg-white/10"> 
                  <p className="font-medium mb-2" style={{ color: primaryTextColor }}>Câu trả lời mẫu:</p> 
                  <p style={{ color: secondaryTextColor }}>{question.answer}</p>
                </div>
              )}

              {(isAnswered || !question.options) && (
                <div className="p-4 bg-white/10 rounded-lg"> 
                  <p className="font-medium mb-1" style={{ color: primaryTextColor }}>Giải thích:</p> 
                  <p style={{ color: secondaryTextColor }}>{question.explanation}</p>
                </div>
              )}

              {(isAnswered || !question.options) && (
                <Button onClick={handleNext} className="w-full" size="lg">
                  {currentQuestion < currentSet.questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
