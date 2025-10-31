import { Heart, Github, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/capitalism-ai-technology-future.jpg"
            alt="Chủ nghĩa tư bản và công nghệ AI"
            className="w-full h-[300px] object-cover"
          />
        </div>

        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-5xl font-bold text-[#7d2e3d]">MLN</span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vai Trò Lịch Sử của Chủ Nghĩa Tư Bản
            </h3>
            <blockquote className="text-xl font-semibold text-foreground leading-relaxed">
              "Thế hệ trước chiến đấu để giành độc lập vật chất – chúng ta chiến đấu để giành tự do nhận thức.
              <br />
              Hiểu rõ những mâu thuẫn của chủ nghĩa tư bản không phải để học thuộc lòng,
              <br />
              mà để kiến tạo một xã hội tiến bộ hơn."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Hãy để triết học trở thành la bàn trong thế giới số, giữ gốc nhân văn khi công nghệ bùng nổ.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Về Dự Án</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Website giáo dục kết nối lịch sử chủ nghĩa tư bản, triết học Mác - Lênin và công nghệ AI, dành cho sinh
              viên và giới trẻ Việt Nam.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Nội Dung</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Nền tảng lý thuyết về tư bản</li>
              <li>Lịch sử chủ nghĩa tư bản</li>
              <li>Ma trận kết nối</li>
              <li>Trò chuyện với AI</li>
              <li>Kiểm tra kiến thức</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Học Phần</h3>
            <p className="text-sm text-muted-foreground">
              <strong>MLN122:</strong> Vai Trò Lịch Sử của Chủ Nghĩa Tư Bản trong Thế Kỷ 21
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Nhóm:</strong> Half2_AI1804 – Group 4
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Trường:</strong> FPT University
            </p>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
            Được xây dựng với <Heart className="w-4 h-4 text-red-600 fill-red-600" /> cho giáo dục Việt Nam
          </p>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            © 2025 Vai Trò Lịch Sử của Chủ Nghĩa Tư Bản - Dự Án Học Tập MLN122
          </p>
          <p className="text-xs text-muted-foreground mt-1 text-center">
            Dự án học tập MLN122 – FPT University | Half2_AI1804 – Group 4 | Chủ đề: Vai trò lịch sử của Chủ Nghĩa Tư Bản
            trong Thời đại AI
          </p>
        </div>
      </div>
    </footer>
  )
}
