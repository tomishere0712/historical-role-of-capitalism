export interface QuizQuestion {
  question: string
  options?: string[]
  answer?: string
  correct?: number
  explanation: string
}

export interface QuizSet {
  id: number
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard" | "expert"
  emoji: string
  questions: QuizQuestion[]
}

export const quizSets: QuizSet[] = [
  {
    id: 1,
    title: "Nhập Môn Chủ Nghĩa Tư Bản",
    description: "Tìm hiểu những khái niệm cơ bản về chủ nghĩa tư bản và vai trò lịch sử của nó",
    difficulty: "easy",
    emoji: "💼",
    questions: [
      {
        question: "Chủ nghĩa tư bản ra đời vào thời kỳ nào?",
        options: ["Thế kỷ 16-17", "Thế kỷ 18-19 (Cách mạng Công nghiệp)", "Thế kỷ 20"],
        correct: 1,
        explanation:
          "Chủ nghĩa tư bản ra đời vào thế kỷ 18-19, đặc biệt là trong Cách mạng Công nghiệp ở Anh Quốc (1760-1840). Đây là giai đoạn máy móc thay thế lao động thủ công.",
      },
      {
        question: "Vai trò chính của chủ nghĩa tư bản theo Mác là gì?",
        options: [
          "Duy trì xã hội phong kiến",
          "Phá vỡ phong kiến, giải phóng lực lượng sản xuất",
          "Xây dựng xã hội cộng sản",
        ],
        correct: 1,
        explanation:
          "Theo Mác, chủ nghĩa tư bản là giai đoạn lịch sử cần thiết vì nó phá vỡ phong kiến và giải phóng lực lượng sản xuất. Tuy nhiên, nó cũng tạo ra những mâu thuẫn mới.",
      },
      {
        question: "Mâu thuẫn cơ bản của chủ nghĩa tư bản là gì?",
        options: ["Giữa chủ sở hữu tư bản và lao động", "Giữa phong kiến và tư bản", "Giữa nước giàu và nước nghèo"],
        correct: 0,
        explanation:
          "Mâu thuẫn cơ bản của chủ nghĩa tư bản là giữa chủ sở hữu tư bản (những người sở hữu phương tiện sản xuất) và lao động (những người bán sức lao động).",
      },
      {
        question: "Cách mạng Công nghiệp thể hiện điều gì?",
        options: [
          "Sự phát triển của lực lượng sản xuất dưới chủ nghĩa tư bản",
          "Sự sụp đổ của chủ nghĩa tư bản",
          "Sự ra đời của xã hội cộng sản",
        ],
        correct: 0,
        explanation:
          "Cách mạng Công nghiệp thể hiện sự phát triển mạnh mẽ của lực lượng sản xuất dưới chủ nghĩa tư bản, với sự ra đời của máy móc, nhà máy, và hệ thống giao thông.",
      },
      {
        question: "Tuyên Ngôn Cộng Sản (1848) phê phán điều gì?",
        options: ["Phong kiến", "Những mâu thuẫn nội tại của chủ nghĩa tư bản", "Xã hội cộng sản"],
        correct: 1,
        explanation:
          "Tuyên Ngôn Cộng Sản của Mác và Ênggels phê phán những mâu thuẫn nội tại của chủ nghĩa tư bản: bóc lột lao động, bất bình đẳng, khủng hoảng kinh tế.",
      },
    ],
  },
  {
    id: 2,
    title: "Mâu Thuẫn của Chủ Nghĩa Tư Bản",
    description: "Phân tích những mâu thuẫn nội tại của chủ nghĩa tư bản",
    difficulty: "medium",
    emoji: "⚖️",
    questions: [
      {
        question: "Bóc lột lao động trong chủ nghĩa tư bản là gì?",
        options: [
          "Công nhân được trả lương cao",
          "Chủ sở hữu tư bản chiếm đoạt giá trị mà công nhân tạo ra",
          "Công nhân có quyền sở hữu phương tiện sản xuất",
        ],
        correct: 1,
        explanation:
          "Bóc lột lao động là khi chủ sở hữu tư bản chiếm đoạt giá trị mà công nhân tạo ra, chỉ trả cho công nhân một phần nhỏ của giá trị đó. Phần còn lại là lợi nhuận của tư bản.",
      },
      {
        question: "Độc quyền trong chủ nghĩa tư bản là gì?",
        options: [
          "Nhiều công ty cạnh tranh bình đẳng",
          "Một công ty hoặc một nhóm công ty kiểm soát thị trường",
          "Nhà nước kiểm soát toàn bộ nền kinh tế",
        ],
        correct: 1,
        explanation:
          "Độc quyền là khi một công ty hoặc một nhóm công ty kiểm soát thị trường, loại bỏ cạnh tranh, và tăng giá để tăng lợi nhuận. Ví dụ: Microsoft, Apple, Google.",
      },
      {
        question: "Khủng hoảng kinh tế trong chủ nghĩa tư bản xuất phát từ đâu?",
        options: [
          "Từ sự thiếu hụt hàng hóa",
          "Từ sự dư thừa hàng hóa và sự không cân bằng giữa sản xuất và tiêu thụ",
          "Từ sự can thiệp của nhà nước",
        ],
        correct: 1,
        explanation:
          "Khủng hoảng kinh tế trong chủ nghĩa tư bản xuất phát từ sự dư thừa hàng hóa và sự không cân bằng giữa sản xuất và tiêu thụ, dẫn đến sự sụp đổ của giá cả. Ví dụ: Khủng hoảng 2008.",
      },
      {
        question: "Bất bình đẳng trong chủ nghĩa tư bản thể hiện như thế nào?",
        options: [
          "Tất cả mọi người có cùng mức sống",
          "Chủ sở hữu tư bản giàu có, công nhân nghèo khó",
          "Không có bất bình đẳng trong chủ nghĩa tư bản",
        ],
        correct: 1,
        explanation:
          "Bất bình đẳng trong chủ nghĩa tư bản thể hiện ở chỗ chủ sở hữu tư bản giàu có, trong khi công nhân phải sống trong cảnh nghèo khó. Khoảng cách giàu-nghèo ngày càng lớn.",
      },
      {
        question: "Thao túng thị trường là gì?",
        options: [
          "Để giá cả tự do dao động",
          "Chủ sở hữu tư bản can thiệp vào thị trường để tăng lợi nhuận",
          "Nhà nước kiểm soát giá cả",
        ],
        correct: 1,
        explanation:
          "Thao túng thị trường là khi chủ sở hữu tư bản can thiệp vào thị trường (ví dụ: tạo độc quyền, quảng cáo sai lệch, thao túng giá) để tăng lợi nhuận.",
      },
    ],
  },
  {
    id: 3,
    title: "Chủ Nghĩa Tư Bản Hiện Đại",
    description: "Phân tích chủ nghĩa tư bản trong thế kỷ 21 và thời đại AI",
    difficulty: "medium",
    emoji: "🌐",
    questions: [
      {
        question: "Tư bản số là gì?",
        options: [
          "Tiền tệ kỹ thuật số",
          "Chủ nghĩa tư bản dựa trên dữ liệu, thuật toán, và nền tảng số",
          "Tiền điện tử",
        ],
        correct: 1,
        explanation:
          "Tư bản số là chủ nghĩa tư bản dựa trên dữ liệu, thuật toán, và nền tảng số. Các công ty như Google, Facebook, Amazon kiểm soát dữ liệu của hàng tỷ người và bán cho các bên thứ ba.",
      },
      {
        question: "Bóc lột dữ liệu là gì?",
        options: [
          "Chia sẻ dữ liệu công khai",
          "Các công ty thu thập dữ liệu cá nhân mà không có sự đồng ý, để bán cho các bên thứ ba hoặc sử dụng để quảng cáo",
          "Bảo vệ dữ liệu cá nhân",
        ],
        correct: 1,
        explanation:
          "Bóc lột dữ liệu là khi các công ty thu thập dữ liệu cá nhân mà không có sự đồng ý, để bán cho các bên thứ ba hoặc sử dụng để quảng cáo và thao túng hành vi người dùng.",
      },
      {
        question: "Độc quyền công nghệ là gì?",
        options: [
          "Nhiều công ty cạnh tranh trong lĩnh vực công nghệ",
          "Một vài công ty lớn (GAFAM) kiểm soát thị trường công nghệ toàn cầu",
          "Nhà nước sở hữu toàn bộ công nghệ",
        ],
        correct: 1,
        explanation:
          "Độc quyền công nghệ là khi một vài công ty lớn (Google, Apple, Facebook, Amazon, Microsoft - GAFAM) kiểm soát thị trường công nghệ toàn cầu, loại bỏ cạnh tranh.",
      },
      {
        question: "Lao động gig là gì?",
        options: [
          "Lao động toàn thời gian với hợp đồng dài hạn",
          "Lao động theo từng công việc nhỏ, không có hợp đồng dài hạn, không có bảo hiểm xã hội",
          "Lao động tự do không bị ai quản lý",
        ],
        correct: 1,
        explanation:
          "Lao động gig là lao động theo từng công việc nhỏ (ví dụ: Uber, Grab, Fiverr), không có hợp đồng dài hạn, không có bảo hiểm xã hội, là hình thức bóc lột lao động mới của tư bản số.",
      },
      {
        question: "AI có thể bóc lột lao động không?",
        options: [
          "Không, AI chỉ là công cụ trung lập",
          "Có, AI có thể thay thế lao động, giảm lương, tăng tốc độ làm việc, và tăng bóc lột",
          "AI chỉ có thể giúp công nhân",
        ],
        correct: 1,
        explanation:
          "Có, AI có thể bóc lột lao động bằng cách thay thế lao động, giảm lương, tăng tốc độ làm việc, và tăng bóc lột. Điều này phụ thuộc vào cách sử dụng AI và ai kiểm soát nó.",
      },
    ],
  },
  {
    id: 4,
    title: "Vượt Qua Chủ Nghĩa Tư Bản",
    description: "Phân tích những cách để vượt qua những mâu thuẫn của chủ nghĩa tư bản",
    difficulty: "hard",
    emoji: "🚀",
    questions: [
      {
        question: "Cách mạng Tháng Mười 1917 có ý nghĩa gì?",
        options: [
          "Chỉ là một cuộc nổi dậy chính trị",
          "Lần đầu tiên con người cố gắng vượt qua chủ nghĩa tư bản thông qua cách mạng",
          "Không có ý nghĩa gì",
        ],
        correct: 1,
        explanation:
          "Cách mạng Tháng Mười 1917 ở Nga là lần đầu tiên con người cố gắng vượt qua chủ nghĩa tư bản thông qua cách mạng, lập nên nhà nước xã hội chủ nghĩa. Đây là bước ngoặt lịch sử.",
      },
      {
        question: "Đổi mới 1986 ở Việt Nam có ý nghĩa gì?",
        options: [
          "Quay trở lại chủ nghĩa tư bản hoàn toàn",
          "Thích ứng với nền kinh tế tư bản toàn cầu, kết hợp xã hội chủ nghĩa với cơ chế thị trường",
          "Không thay đổi gì",
        ],
        correct: 1,
        explanation:
          "Đổi mới 1986 là sự thích ứng của Việt Nam với nền kinh tế tư bản toàn cầu, kết hợp xã hội chủ nghĩa với cơ chế thị trường. Đây là một con đường độc lập của Việt Nam.",
      },
      {
        question: "Để vượt qua chủ nghĩa tư bản, cần phải làm gì?",
        options: [
          "Chỉ cần phê phán chủ nghĩa tư bản",
          "Cần ý thức, tổ chức, quyết tâm, và hành động cách mạng",
          "Không thể vượt qua chủ nghĩa tư bản",
        ],
        correct: 1,
        explanation:
          "Để vượt qua chủ nghĩa tư bản, cần phải có ý thức lịch sử, tổ chức chặt chẽ, quyết tâm mạnh mẽ, và hành động cách mạng. Phê phán không đủ, cần hành động.",
      },
      {
        question: "Vai trò của sinh viên trong việc vượt qua chủ nghĩa tư bản là gì?",
        options: [
          "Sinh viên không có vai trò gì",
          "Sinh viên chỉ nên học sách vở",
          "Sinh viên phải có ý thức lịch sử, tư duy phản biện, và sẵn sàng hành động để xây dựng xã hội tiến bộ hơn",
        ],
        correct: 2,
        explanation:
          "Sinh viên thế hệ AI phải có ý thức lịch sử, tư duy phản biện, và sẵn sàng hành động để xây dựng xã hội tiến bộ hơn, không bị chi phối bởi chủ nghĩa tư bản.",
      },
      {
        question: "Tương lai của chủ nghĩa tư bản sẽ như thế nào?",
        options: [
          "Chủ nghĩa tư bản sẽ tồn tại mãi mãi",
          "Chủ nghĩa tư bản sẽ bị vượt qua bởi những mâu thuẫn nội tại của nó",
          "Không ai biết tương lai sẽ như thế nào",
        ],
        correct: 1,
        explanation:
          "Theo Mác, chủ nghĩa tư bản sẽ bị vượt qua bởi những mâu thuẫn nội tại của nó, dẫn đến sự ra đời của xã hội mới tiến bộ hơn. Lịch sử là quá trình phát triển.",
      },
    ],
  },
  {
    id: 5,
    title: "Chủ Nghĩa Tư Bản và Công Nghệ AI",
    description: "Vận dụng lý thuyết về chủ nghĩa tư bản vào phân tích AI",
    difficulty: "expert",
    emoji: "🤖",
    questions: [
      {
        question: "AI là lực lượng sản xuất mới hay công cụ bóc lột?",
        options: [
          "Chỉ là lực lượng sản xuất mới",
          "Chỉ là công cụ bóc lột",
          "Vừa là lực lượng sản xuất mới, vừa là công cụ bóc lột, tùy thuộc vào cách sử dụng",
        ],
        correct: 2,
        explanation:
          "AI vừa là lực lượng sản xuất mới (có thể tăng năng suất), vừa là công cụ bóc lột (có thể thay thế lao động, giảm lương). Điều này phụ thuộc vào cách sử dụng AI và ai kiểm soát nó.",
      },
      {
        question: "Ai sẽ hưởng lợi từ AI?",
        options: ["Tất cả mọi người", "Chủ sở hữu tư bản (các công ty công nghệ lớn)", "Công nhân"],
        correct: 1,
        explanation:
          "Trong chủ nghĩa tư bản, chủ sở hữu tư bản (các công ty công nghệ lớn) sẽ hưởng lợi từ AI, trong khi công nhân có thể bị thất nghiệp hoặc bị bóc lột thêm.",
      },
      {
        question: "Dân chủ hóa AI có ý nghĩa gì?",
        options: [
          "Cho phép tất cả mọi người sử dụng AI",
          "Chuyển quyền kiểm soát AI từ tay các công ty lớn sang tay nhân dân, để AI phục vụ lợi ích chung",
          "Không có ý nghĩa gì",
        ],
        correct: 1,
        explanation:
          "Dân chủ hóa AI có nghĩa là chuyển quyền kiểm soát AI từ tay các công ty lớn sang tay nhân dân, để AI phục vụ lợi ích chung thay vì lợi nhuận của tư bản.",
      },
      {
        question: "Làm sao để tránh bị bóc lột bởi AI?",
        options: [
          "Không sử dụng AI",
          "Có ý thức lịch sử, tư duy phản biện, và tham gia vào việc kiểm soát AI",
          "Không thể tránh được",
        ],
        correct: 1,
        explanation:
          "Để tránh bị bóc lột bởi AI, cần phải có ý thức lịch sử, tư duy phản biện, và tham gia vào việc kiểm soát AI để đảm bảo nó phục vụ lợi ích chung.",
      },
      {
        question: "Triết học có vai trò gì trong thời đại AI?",
        options: [
          "Triết học không có vai trò gì",
          "Triết học là công cụ soi chiếu những mâu thuẫn của tư bản, giúp định hướng trong thế giới AI",
          "Triết học chỉ là lý thuyết vô dụng",
        ],
        correct: 1,
        explanation:
          "Triết học là công cụ soi chiếu những mâu thuẫn của tư bản, giúp định hướng trong thế giới AI, và giúp sinh viên hiểu rõ bản chất của sự vật.",
      },
    ],
  },
  {
    id: 6,
    title: "Thách Thức Cao Cấp",
    description: "Những câu hỏi đánh đố về chủ nghĩa tư bản và AI - Chỉ dành cho những ai thực sự hiểu rõ",
    difficulty: "expert",
    emoji: "🧠",
    questions: [
      {
        question: "Nếu AI có thể tự động hóa hầu hết công việc, chủ nghĩa tư bản sẽ gặp khủng hoảng gì?",
        options: [
          "Khủng hoảng thất nghiệp toàn cầu",
          "Khủng hoảng dư thừa hàng hóa (không ai có tiền để mua)",
          "Cả hai đều đúng",
        ],
        correct: 2,
        explanation:
          "Nếu AI tự động hóa hầu hết công việc, sẽ có khủng hoảng thất nghiệp (công nhân mất việc) và khủng hoảng dư thừa hàng hóa (không ai có tiền để mua). Đây là mâu thuẫn cơ bản của tư bản.",
      },
      {
        question: "Tại sao các công ty công nghệ lớn (Google, Meta, OpenAI) không muốn dân chủ hóa AI?",
        options: ["Vì dân chủ hóa sẽ giảm lợi nhuận của họ", "Vì họ lo sợ mất quyền kiểm soát", "Cả hai đều đúng"],
        correct: 2,
        explanation:
          "Các công ty công nghệ lớn không muốn dân chủ hóa AI vì: (1) Nó sẽ giảm lợi nhuận của họ, (2) Họ sẽ mất quyền kiểm soát dữ liệu và thuật toán. Đây là bản chất của tư bản.",
      },
      {
        question: "Nếu Việt Nam muốn phát triển AI mà không bị bóc lột bởi tư bản nước ngoài, cần phải làm gì?",
        options: [
          "Cấm AI hoàn toàn",
          "Phát triển AI độc lập, kiểm soát dữ liệu, và sử dụng AI cho lợi ích chung",
          "Để các công ty nước ngoài phát triển AI",
        ],
        correct: 1,
        explanation:
          "Để không bị bóc lột, Việt Nam cần phát triển AI độc lập, kiểm soát dữ liệu quốc gia, và sử dụng AI cho lợi ích chung thay vì lợi nhuận tư nhân.",
      },
      {
        question: "Mâu thuẫn giữa 'tự do cá nhân' và 'kiểm soát dữ liệu' trong chủ nghĩa tư bản là gì?",
        options: [
          "Không có mâu thuẫn",
          "Tự do cá nhân được sử dụng để bóc lột dữ liệu, kiểm soát hành vi",
          "Kiểm soát dữ liệu là để bảo vệ tự do cá nhân",
        ],
        correct: 1,
        explanation:
          "Trong chủ nghĩa tư bản, 'tự do cá nhân' được sử dụng để bóc lột dữ liệu (người dùng tự nguyện chia sẻ dữ liệu), sau đó dữ liệu được sử dụng để kiểm soát hành vi. Đây là mâu thuẫn.",
      },
      {
        question: "Tại sao Cách mạng Tháng Tám 1945 ở Việt Nam lại thành công mặc dù Việt Nam còn lạc hậu?",
        options: [
          "Vì Việt Nam có quân đội mạnh",
          "Vì ý thức xã hội độc lập tương đối - nhân dân có ý thức lịch sử cao",
          "Vì các nước khác giúp đỡ",
        ],
        correct: 1,
        explanation:
          "Cách mạng Tháng Tám thành công vì ý thức xã hội độc lập tương đối - nhân dân Việt Nam có ý thức lịch sử cao, hiểu rõ mục tiêu cách mạng. Đây là bài học từ CNDVLS.",
      },
    ],
  },
]
