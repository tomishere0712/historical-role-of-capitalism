export interface QuizQuestion {
  question: string;
  options?: string[];
  answer?: string;
  correct?: number;
  explanation: string;
}

export interface QuizSet {
  id: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  emoji: string;
  questions: QuizQuestion[];
}

export const quizSets: QuizSet[] = [
  {
    id: 1,
    title: "Quan Điểm Mác - Lênin",
    description:
      "Nắm vững lập luận của C. Mác và V.I. Lênin về vai trò lịch sử của CNTB",
    difficulty: "medium",
    emoji: "�",
    questions: [
      {
        question:
          "Theo C. Mác, tính lịch sử - tất yếu của CNTB thể hiện ở đâu?",
        options: [
          "CNTB ra đời khi quan hệ phong kiến bị phá vỡ, giải phóng sức lao động",
          "CNTB ra đời do các nhà tư bản lập kế hoạch cách mạng",
          "CNTB xuất hiện do nhà nước can thiệp thị trường mạnh mẽ",
        ],
        correct: 0,
        explanation:
          "Mác cho rằng CNTB xuất hiện tất yếu khi quan hệ phong kiến bị phá vỡ, giải phóng sức lao động, hình thành thị trường thế giới và phân công lao động xã hội ở quy mô chưa từng có.",
      },
      {
        question: "Chức năng cách mạng của CNTB theo Mác là gì?",
        options: [
          "Duy trì ổn định xã hội và bảo vệ truyền thống",
          "Cách mạng hóa công cụ sản xuất, nâng năng suất lao động",
          "Xây dựng hệ thống giáo dục phổ thông miễn phí cho mọi người",
        ],
        correct: 1,
        explanation:
          "CNTB cách mạng hóa công cụ sản xuất, nâng năng suất, tích lũy tri thức – khoa học – kỹ thuật, đặt nền tảng cho đại công nghiệp và giáo dục hiện đại.",
      },
      {
        question: "Mâu thuẫn cơ bản của CNTB theo Mác nằm ở đâu?",
        options: [
          "Giữa tính xã hội hóa cao của sản xuất và chế độ chiếm hữu tư nhân",
          "Giữa công nhân và nông dân trong quá trình công nghiệp hóa",
          "Giữa các doanh nghiệp nhỏ cạnh tranh với nhau trên thị trường",
        ],
        correct: 0,
        explanation:
          "Mâu thuẫn cơ bản là giữa tính xã hội hóa cao của sản xuất (nhiều người cùng làm) và chế độ chiếm hữu tư nhân tư bản chủ nghĩa, dẫn đến khủng hoảng chu kỳ, thất nghiệp và tha hóa lao động.",
      },
      {
        question:
          "V.I. Lênin phân tích CNTB giai đoạn đế quốc có bao nhiêu đặc trưng?",
        options: [
          "3 đặc trưng: độc quyền, tư bản tài chính, xuất khẩu tư bản",
          "5 đặc trưng: từ tập trung sản xuất đến phân chia lãnh thổ thế giới",
          "7 đặc trưng: bao gồm cả chính sách bảo hộ và thương chiến",
        ],
        correct: 1,
        explanation:
          "Lênin nêu 5 đặc trưng: (i) tập trung sản xuất tạo độc quyền; (ii) tư bản công nghiệp + ngân hàng → tư bản tài chính; (iii) xuất khẩu tư bản trội hơn hàng hóa; (iv) liên minh độc quyền quốc tế; (v) phân chia lãnh thổ thế giới.",
      },
      {
        question: "Quy luật phát triển không đồng đều của Lênin có ý nghĩa gì?",
        options: [
          "Các nước phát triển đều đặn theo một con đường duy nhất",
          "Phát triển không đồng đều tạo ra 'mắt xích yếu' dễ bùng phát cách mạng",
          "Mọi quốc gia phải trải qua CNTB trước khi chuyển sang CNXH",
        ],
        correct: 1,
        explanation:
          "Quy luật phát triển không đồng đều làm xuất hiện 'mắt xích yếu' nơi mâu thuẫn bùng phát mạnh; cạnh tranh kinh tế có thể chuyển hóa thành xung đột địa-chính trị, tạo cơ hội cho cách mạng.",
      },
      {
        question: "Ý nghĩa lịch sử của CNTB theo cả Mác và Lênin là gì?",
        options: [
          "CNTB là giai đoạn cuối cùng và hoàn hảo của lịch sử loài người",
          "CNTB có vai trò tiến bộ nhưng mang mâu thuẫn nội tại cần vượt qua",
          "CNTB chỉ mang lại khổ đau và không có vai trò tích cực nào",
        ],
        correct: 1,
        explanation:
          "Cả hai đều khẳng định CNTB có vai trò tiến bộ to lớn trong phát triển lực lượng sản xuất và văn minh nhân loại, song mang mâu thuẫn nội tại dẫn đến khủng hoảng, đòi hỏi vượt qua giới hạn của chính nó.",
      },
    ],
  },
  {
    id: 2,
    title: "Ví Dụ Thế Kỷ 21: AI và Điện Toán Đám Mây",
    description: "Phân tích hệ sinh thái AI – cloud theo lăng kính Mác – Lênin",
    difficulty: "medium",
    emoji: "🤖",
    questions: [
      {
        question:
          "Hệ sinh thái AI và cloud thúc đẩy lực lượng sản xuất bằng cách nào?",
        options: [
          "Giảm chi phí biên tính toán, tự động hóa tri thức, tăng tốc R&D",
          "Tăng số lượng lao động thủ công trong các nhà máy sản xuất",
          "Hạn chế sử dụng công nghệ để bảo vệ việc làm truyền thống",
        ],
        correct: 0,
        explanation:
          "AI và cloud giảm chi phí biên của tính toán, tự động hóa tri thức (lập trình, thiết kế, phân tích dữ liệu), tăng tốc R&D trong y tế, giáo dục, sản xuất thông minh - đúng như vai trò cách mạng hóa công cụ sản xuất mà Mác đã nói.",
      },
      {
        question: "Ví dụ về Tesla minh chứng cho quan điểm nào của Mác?",
        options: [
          "Cạnh tranh buộc nhà tư bản liên tục cải tiến kỹ thuật hoặc bị loại",
          "Các công ty tư nhân nên tránh đầu tư vào công nghệ mới",
          "Thị trường tự do không cần đổi mới công nghệ vẫn phát triển",
        ],
        correct: 0,
        explanation:
          "Tesla phải đầu tư khổng lồ cho R&D (xe điện, pin, tự lái, năng lượng tái tạo) để cạnh tranh với Toyota, BMW, BYD. Điều này minh chứng quy luật 'cạnh tranh → tích lũy tư bản → đổi mới công nghệ' mà Mác đã phân tích.",
      },
      {
        question:
          "Kinh tế nền tảng (Grab, Shopee Food) thể hiện đặc trưng nào của Lênin?",
        options: [
          "Hiệu ứng mạng tạo xu hướng tập trung dữ liệu và độc quyền thị trường",
          "Phân tán quyền lực đều cho tất cả các doanh nghiệp nhỏ",
          "Xóa bỏ hoàn toàn vai trò của tư bản tài chính trong nền kinh tế",
        ],
        correct: 0,
        explanation:
          "Kinh tế nền tảng có hiệu ứng mạng và lợi thế quy mô dữ liệu → xu hướng tập trung thị phần, hình thành 'độc quyền tự nhiên' - đúng như Lênin phân tích về giai đoạn đế quốc với đặc trưng tập trung sản xuất tạo độc quyền.",
      },
      {
        question:
          "Chuỗi cung ứng tri thức toàn cầu (mã nguồn mở, dữ liệu, MLOps) thể hiện điều gì?",
        options: [
          "Tính xã hội hóa sản xuất đạt mức cao trong kỷ nguyên số",
          "Sự cô lập và bảo hộ công nghệ giữa các quốc gia tăng lên",
          "Giảm sự phụ thuộc lẫn nhau giữa các doanh nghiệp công nghệ",
        ],
        correct: 0,
        explanation:
          "Chuỗi cung ứng tri thức toàn cầu (open source, shared data, MLOps platforms) thể hiện tính xã hội hóa sản xuất cao - nhiều người/tổ chức cùng đóng góp tri thức. Nhưng quyền kiểm soát nền tảng lại tập trung ở vài tập đoàn - đây chính là mâu thuẫn mà Mác đã cảnh báo.",
      },
      {
        question:
          "Rủi ro của việc phụ thuộc hạ tầng số vào một số tập đoàn là gì?",
        options: [
          "Mất quyền tự chủ dữ liệu và an ninh công nghệ quốc gia",
          "Tăng cạnh tranh lành mạnh và minh bạch trong thị trường",
          "Giảm chi phí đầu tư công nghệ cho các doanh nghiệp nhỏ",
        ],
        correct: 0,
        explanation:
          "Phụ thuộc hạ tầng số (cloud, AI platforms) của vài tập đoàn dẫn đến mất quyền tự chủ dữ liệu, an ninh công nghệ quốc gia, và dễ bị thao túng - thể hiện mặt trái của độc quyền và xuất khẩu tư bản công nghệ mà Lênin đã cảnh báo.",
      },
      {
        question:
          "Tiêu thụ năng lượng lớn của AI liên quan đến vấn đề gì trong CNTB?",
        options: [
          "Động lực lợi nhuận có thể gây ngoại tác môi trường tiêu cực",
          "AI giúp giảm hoàn toàn tác động môi trường của sản xuất",
          "Công nghệ số không có liên quan gì đến vấn đề môi trường",
        ],
        correct: 0,
        explanation:
          "Trung tâm dữ liệu và huấn luyện AI tiêu thụ năng lượng khổng lồ. Nếu động lực lợi nhuận không được điều tiết, sẽ gây ngoại tác môi trường (phát thải, biến đổi khí hậu) - một mâu thuẫn điển hình giữa lợi nhuận tư nhân và lợi ích xã hội.",
      },
    ],
  },
  {
    id: 3,
    title: "Tính Hai Mặt của CNTB",
    description: "Động lực phát triển và nguy cơ khủng hoảng/tha hóa",
    difficulty: "hard",
    emoji: "⚖️",
    questions: [
      {
        question:
          "Tại sao kinh tế nền tảng (Grab, Shopee Food) vừa là động lực vừa chứa mâu thuẫn?",
        options: [
          "Thuật toán tối ưu giao nhận nhưng phân phối lợi ích lệch về nền tảng",
          "Nền tảng giúp tất cả người lao động đều giàu lên như nhau",
          "Công nghệ số loại bỏ hoàn toàn mâu thuẫn của tư bản truyền thống",
        ],
        correct: 0,
        explanation:
          "Nền tảng giao đồ ăn/gọi xe tăng hiệu quả giao nhận (động lực), nhưng thuật toán thay đổi khiến thu nhập tài xế bấp bênh, rủi ro đường sá/xăng xe do lao động gánh, dữ liệu và sự chú ý bị đo đếm tối ưu (tha hóa) - đây là tính hai mặt điển hình.",
      },
      {
        question:
          "Khủng hoảng chu kỳ trong CNTB hiện đại có thể biểu hiện như thế nào?",
        options: [
          "Khủng hoảng tài chính, nợ, đứt gãy chuỗi cung ứng toàn cầu",
          "Mọi khủng hoảng đều do thiên tai không thể dự đoán gây ra",
          "Thị trường luôn tự điều chỉnh mà không gây khủng hoảng nghiêm trọng",
        ],
        correct: 0,
        explanation:
          "Khủng hoảng 2008 (tài chính), COVID-19 (đứt gãy chuỗi cung ứng), khủng hoảng nợ công - tất cả đều xuất phát từ mâu thuẫn giữa tính xã hội hóa sản xuất và chiếm hữu tư nhân, dẫn đến mất cân bằng cấu trúc.",
      },
      {
        question: "Tha hóa lao động trong thời đại số thể hiện ở đâu?",
        options: [
          "Lao động bị phân mảnh, giám sát số, thời gian/chú ý bị hàng hóa hóa",
          "Người lao động được tự do hoàn toàn không bị ràng buộc bởi thuật toán",
          "Công nghệ giúp lao động trở nên sáng tạo và không còn nhàm chán",
        ],
        correct: 0,
        explanation:
          "Lao động nền tảng bị thuật toán giám sát, phân mảnh công việc thành từng đơn hàng nhỏ, thời gian rảnh và sự chú ý bị 'tối ưu hóa' thành lợi nhuận - đây là hình thức tha hóa mới trong kỷ nguyên số.",
      },
      {
        question:
          "Bất bình đẳng thu nhập trong ngành công nghệ AI thể hiện như thế nào?",
        options: [
          "Chủ sở hữu nền tảng và cổ đông hưởng lợi lớn, lao động gig không ổn định",
          "Tất cả nhân viên trong ngành AI đều có mức lương và phúc lợi ngang nhau",
          "Công nghệ AI giúp phân phối thu nhập công bằng cho toàn xã hội",
        ],
        correct: 0,
        explanation:
          "Trong ngành AI/tech: founder và cổ đông tích lũy tài sản khổng lồ (vd: Elon Musk, Sam Altman), trong khi lao động gig (tài xế, moderator nội dung) có thu nhập bấp bênh, không bảo hiểm - khoảng cách giàu nghèo gia tăng.",
      },
      {
        question: "Ngoại tác môi trường của CNTB công nghệ bao gồm những gì?",
        options: [
          "Tiêu thụ năng lượng lớn của data center, khai thác lithium cho pin",
          "Công nghệ số hoàn toàn không gây tác động tiêu cực đến môi trường",
          "AI tự động giải quyết mọi vấn đề về biến đổi khí hậu",
        ],
        correct: 0,
        explanation:
          "Data center tiêu thụ năng lượng khổng lồ, khai thác lithium/rare earth cho pin/chip gây ô nhiễm, phát thải CO2 tăng - động lực lợi nhuận thường bỏ qua chi phí môi trường nếu thiếu điều tiết.",
      },
      {
        question: "Tại sao cần chính sách công để điều tiết CNTB hiện nay?",
        options: [
          "Mâu thuẫn không tự tiêu vong, cần thể chế điều tiết phù hợp xã hội hóa",
          "Thị trường tự do hoàn toàn sẽ tự giải quyết mọi vấn đề xã hội",
          "Nhà nước can thiệp sẽ làm giảm hoàn toàn động lực đổi mới",
        ],
        correct: 0,
        explanation:
          "Mâu thuẫn giữa tính xã hội hóa cao của sản xuất (AI, cloud, nền tảng) và chiếm hữu tư nhân (dữ liệu, thuật toán) không tự giải quyết - cần chính sách chống độc quyền, bảo vệ dữ liệu, an sinh xã hội, định giá carbon để định hướng phát triển bền vững.",
      },
    ],
  },
  {
    id: 4,
    title: "Tận Dụng Thành Tựu CNTB",
    description: "Làm sao sinh viên khai thác cơ hội trong thời đại AI",
    difficulty: "medium",
    emoji: "🎓",
    questions: [
      {
        question:
          "Năng lực lõi (core competency) nào quan trọng nhất cho sinh viên thế hệ AI?",
        options: [
          "Chỉ cần học thuộc lòng kiến thức chuyên môn trong sách giáo khoa",
          "Tư duy phê phán, năng lực số, phương pháp nghiên cứu, ngoại ngữ",
          "Chỉ tập trung vào một kỹ năng kỹ thuật duy nhất suốt đời",
        ],
        correct: 1,
        explanation:
          "Sinh viên cần trang bị: (1) Tư duy phê phán để không bị thao túng; (2) Data/AI literacy để làm chủ công cụ; (3) Phương pháp nghiên cứu để phân tích bằng chứng; (4) Ngoại ngữ để tiếp cận tri thức toàn cầu.",
      },
      {
        question: "Chiến lược nghề nghiệp nào phù hợp trong thời đại AI?",
        options: [
          "Chuyên sâu một lĩnh vực hẹp và từ chối học thêm kỹ năng khác",
          "Mô hình T-shaped: một chuyên sâu kết hợp kỹ năng bổ trợ đa dạng",
          "Không cần chiến lược vì AI sẽ thay thế mọi công việc",
        ],
        correct: 1,
        explanation:
          "Mô hình T-shaped (một chuyên sâu + nhiều kỹ năng bổ trợ) giúp thích ứng tốt hơn với biến động. Kết hợp với học suốt đời và kỹ năng chuyển đổi để không bị bỏ lại.",
      },
      {
        question: "Làm thế nào sinh viên nên sử dụng công cụ AI trong học tập?",
        options: [
          "Sử dụng AI để tăng năng suất nhưng không để AI thay thế tư duy",
          "Hoàn toàn phụ thuộc vào AI để làm mọi bài tập và nghiên cứu",
          "Tránh xa AI hoàn toàn vì nó sẽ làm giảm năng lực tư duy",
        ],
        correct: 0,
        explanation:
          "Dùng AI (ChatGPT, Notion AI, công cụ phân tích) để tăng năng suất học tập và nghiên cứu, nhưng phải giữ tư duy phản biện - AI là công cụ hỗ trợ chứ không thay thế khả năng suy nghĩ độc lập.",
      },
      {
        question:
          "Tại sao sinh viên nên tham gia cộng đồng mã nguồn mở (open source)?",
        options: [
          "Xây dựng portfolio thực tế, học hỏi và kết nối với chuyên gia toàn cầu",
          "Mã nguồn mở không có giá trị vì không kiếm được tiền trực tiếp",
          "Chỉ các lập trình viên chuyên nghiệp mới được tham gia",
        ],
        correct: 0,
        explanation:
          "Tham gia open source giúp: (1) Xây dựng portfolio dự án thực tế; (2) Học từ chuyên gia; (3) Phát triển kỹ năng làm việc nhóm quốc tế; (4) Tận dụng chuỗi cung ứng tri thức toàn cầu mà CNTB đã tạo ra.",
      },
      {
        question:
          "MOOC (Massive Open Online Courses) thể hiện điều gì về vai trò CNTB?",
        options: [
          "CNTB tạo ra cơ hội học tập toàn cầu nhưng vẫn có rào cản số",
          "MOOC loại bỏ hoàn toàn bất bình đẳng trong giáo dục toàn cầu",
          "Chỉ học tại đại học truyền thống mới có giá trị nghề nghiệp",
        ],
        correct: 0,
        explanation:
          "MOOC (Coursera, edX, Khan Academy) là thành tựu của CNTB - dân chủ hóa tri thức, sinh viên ở mọi nơi có thể học từ MIT, Stanford. Nhưng vẫn có rào cản về kỹ năng số, ngoại ngữ, chi phí chứng chỉ.",
      },
      {
        question:
          "Thực tập và khởi nghiệp công nghệ xanh có ý nghĩa gì với sinh viên?",
        options: [
          "Học cách kết hợp đổi mới công nghệ với trách nhiệm môi trường xã hội",
          "Chỉ tập trung vào lợi nhuận tối đa không cần quan tâm tác động",
          "Công nghệ xanh chỉ là trào lưu tạm thời không có giá trị dài hạn",
        ],
        correct: 0,
        explanation:
          "Tham gia khởi nghiệp công nghệ xanh hoặc thực tập tại doanh nghiệp xã hội giúp sinh viên: (1) Học cách kết hợp đổi mới và trách nhiệm; (2) Định hướng sử dụng thành tựu CNTB cho mục tiêu tiến bộ thay vì chỉ lợi nhuận.",
      },
    ],
  },
  {
    id: 5,
    title: "Không Trở Thành 'Nạn Nhân'",
    description: "Bảo vệ quyền lợi và tự chủ trong thời đại số",
    difficulty: "hard",
    emoji: "🛡️",
    questions: [
      {
        question:
          "Quyền kỹ thuật số (Digital Rights) sinh viên cần bảo vệ là gì?",
        options: [
          "Quyền sử dụng internet miễn phí không giới hạn mọi lúc mọi nơi",
          "Quyền bảo mật dữ liệu cá nhân, kiểm soát dấu vết số, sở hữu trí tuệ",
          "Quyền đăng tải bất cứ nội dung gì lên mạng xã hội",
        ],
        correct: 1,
        explanation:
          "Digital rights bao gồm: bảo mật dữ liệu cá nhân (không bị bóc lột), quản lý dấu vết số (không bị theo dõi), hiểu điều khoản nền tảng và quyền sở hữu trí tuệ - đây là cách tránh bị hệ thống tư bản số bóc lột.",
      },
      {
        question:
          "Tại sao sinh viên phải đọc kỹ hợp đồng lao động trước khi ký?",
        options: [
          "Để hiểu rõ quyền lợi, nghĩa vụ và tránh bị lợi dụng hoặc trả lương thấp",
          "Hợp đồng chỉ là thủ tục hành chính không quan trọng lắm",
          "Nhà tuyển dụng luôn công bằng nên không cần đọc kỹ",
        ],
        correct: 0,
        explanation:
          "Trong môi trường tư bản, hợp đồng lao động có thể chứa điều khoản bất lợi (lương thấp, giờ làm dài, không bảo hiểm). Đọc kỹ giúp bảo vệ quyền lợi và đàm phán tốt hơn - tránh bị bóc lột.",
      },
      {
        question:
          "Đa dạng hóa kỹ năng và nguồn thu nhập có ý nghĩa gì trong nền kinh tế biến động?",
        options: [
          "Giảm rủi ro thất nghiệp và tăng khả năng thích ứng với thay đổi",
          "Làm nhiều việc sẽ khiến bản thân không chuyên sâu và kém chất lượng",
          "Chỉ nên tập trung vào một công việc duy nhất suốt đời",
        ],
        correct: 0,
        explanation:
          "Đa dạng hóa kỹ năng (freelance, dự án, đầu tư, dạy kèm) giúp không phụ thuộc một công việc duy nhất. Khi AI/tự động hóa thay thế một công việc, bạn vẫn có phương án khác - đây là chiến lược phòng ngừa trong CNTB bất ổn.",
      },
      {
        question: "Vệ sinh số (Digital Hygiene) là gì và tại sao quan trọng?",
        options: [
          "Quản trị thời gian màn hình, giảm lệ thuộc thuật toán khuyến nghị",
          "Dọn dẹp máy tính và xóa file rác để tăng tốc độ xử lý",
          "Sử dụng mạng xã hội càng nhiều càng tốt để cập nhật thông tin",
        ],
        correct: 0,
        explanation:
          "Vệ sinh số = quản trị thời gian/chú ý trước 'vòng xoáy' thuật toán (TikTok, YouTube, Facebook). Nền tảng thiết kế để 'nuốt chửng' sự chú ý → tha hóa. Cần ý thức để giữ cân bằng và sức khỏe tinh thần.",
      },
      {
        question: "Tại sao sinh viên cần hiểu 'mô hình kinh doanh nền tảng'?",
        options: [
          "Để nhận ra mình là 'sản phẩm' khi dùng dịch vụ miễn phí",
          "Để biết cách tạo ra ứng dụng kiếm tiền từ quảng cáo",
          "Nền tảng luôn miễn phí và không có mục đích kinh doanh gì",
        ],
        correct: 0,
        explanation:
          "'Nếu sản phẩm miễn phí, thì bạn chính là sản phẩm' - Facebook, Google, TikTok kiếm tiền bằng cách bán dữ liệu và sự chú ý của bạn cho nhà quảng cáo. Hiểu điều này giúp không bị thao túng và bóc lột dữ liệu.",
      },
      {
        question:
          "Tư duy phản biện truyền thông giúp sinh viên tránh rủi ro gì?",
        options: [
          "Tránh tin giả, thao túng nhận thức và các chiến dịch propaganda",
          "Tin tưởng mọi thông tin trên mạng xã hội là sự thật",
          "Không cần kiểm chứng nguồn vì mọi người đều đăng tin đúng",
        ],
        correct: 0,
        explanation:
          "Trong thời đại 'bóc lột sự chú ý', tin giả (fake news), deepfake, propaganda được tạo ra để thao túng. Tư duy phản biện (kiểm tra nguồn, cross-reference, phân tích lập luận) giúp không bị chi phối bởi thuật toán và lợi ích tư bản.",
      },
    ],
  },
  {
    id: 6,
    title: "Hướng Tới Xã Hội Tiến Bộ",
    description: "Định hướng thực hành cho lý tưởng phát triển bền vững",
    difficulty: "hard",
    emoji: "🌱",
    questions: [
      {
        question: "Ý nghĩa của 'học tập gắn với trách nhiệm xã hội' là gì?",
        options: [
          "Chọn nghề vừa có thu nhập vừa mang lại giá trị cho cộng đồng",
          "Chỉ chọn nghề có lương cao nhất bất kể tác động xã hội",
          "Làm từ thiện sau khi đã giàu có từ tư bản",
        ],
        correct: 0,
        explanation:
          "Sinh viên nên định hướng nghề nghiệp kết hợp thu nhập với đóng góp xã hội (giáo dục, y tế, công nghệ xanh, an sinh số) - không chỉ là 'bánh răng' cho lợi nhuận tư bản mà là chủ thể kiến tạo xã hội tiến bộ.",
      },
      {
        question:
          "Tinh thần công dân toàn cầu (global citizenship) thể hiện như thế nào?",
        options: [
          "Hiểu biết, tôn trọng sự khác biệt và chung tay giải quyết vấn đề toàn cầu",
          "Chỉ quan tâm đến lợi ích quốc gia và bỏ qua các vấn đề quốc tế",
          "Cạnh tranh với mọi quốc gia để giành lợi thế tuyệt đối",
        ],
        correct: 0,
        explanation:
          "Global citizenship = nhận thức rằng các vấn đề như biến đổi khí hậu, bất công công nghệ, an ninh mạng là toàn cầu. Cần hợp tác quốc tế, tôn trọng đa dạng văn hóa, chung tay tìm giải pháp - vượt lên trên lợi ích tư bản hẹp.",
      },
      {
        question:
          "Đổi mới xã hội (social innovation) khác với đổi mới thương mại ở đâu?",
        options: [
          "Mục tiêu chính là giải quyết vấn đề xã hội, không chỉ lợi nhuận",
          "Hai loại đổi mới hoàn toàn giống nhau về mục tiêu và phương pháp",
          "Đổi mới xã hội không sử dụng công nghệ hiện đại",
        ],
        correct: 0,
        explanation:
          "Social innovation áp dụng công nghệ/tri thức để giải quyết vấn đề xã hội (nghèo đói, y tế, giáo dục) với mục tiêu tác động xã hội, không chỉ lợi nhuận - đây là cách sử dụng thành tựu CNTB theo hướng tiến bộ hơn.",
      },
      {
        question: "Khoa học mở (Open Science) đóng góp gì cho xã hội tiến bộ?",
        options: [
          "Dân chủ hóa tri thức, giảm rào cản tiếp cận nghiên cứu khoa học",
          "Bảo vệ bí mật thương mại cho các tập đoàn lớn kiếm lợi nhuận",
          "Hạn chế chia sẻ dữ liệu để tránh cạnh tranh quốc tế",
        ],
        correct: 0,
        explanation:
          "Open Science (open access journals, open data, preprints) phá vỡ 'tường phí' của các nhà xuất bản, cho phép sinh viên/nhà nghiên cứu ở mọi nơi tiếp cận tri thức - chống lại xu hướng 'biến tri thức thành hàng hóa' của tư bản.",
      },
      {
        question:
          "Doanh nghiệp xã hội và hợp tác xã khác với công ty tư nhân thông thường ở đâu?",
        options: [
          "Đa dạng hóa sở hữu/quản trị, cân bằng lợi nhuận với tác động xã hội",
          "Hoạt động giống hệt công ty tư nhân về mục tiêu và cấu trúc",
          "Không được phép tạo ra lợi nhuận và phải từ thiện hoàn toàn",
        ],
        correct: 0,
        explanation:
          "Doanh nghiệp xã hội/hợp tác xã có cấu trúc sở hữu đa dạng (nhân viên, cộng đồng có quyền biểu quyết), cân bằng lợi nhuận với tác động xã hội/môi trường - tương thích hơn với mức xã hội hóa sản xuất hiện nay so với mô hình tư nhân thuần túy.",
      },
      {
        question: "Kết nối nhà trường – doanh nghiệp – nhà nước có vai trò gì?",
        options: [
          "Chuyển giao tri thức, đổi mới có trách nhiệm, phục vụ lợi ích chung",
          "Chỉ để doanh nghiệp tuyển dụng lao động rẻ từ trường học",
          "Nhà nước không nên can thiệp vào quan hệ trường - doanh nghiệp",
        ],
        correct: 0,
        explanation:
          "Mô hình tam giác (academia-industry-government) giúp: (1) Chuyển giao nghiên cứu thành ứng dụng; (2) Đào tạo nhân lực chất lượng cao; (3) Định hướng đổi mới có trách nhiệm (xanh, công bằng) - không để tư bản thao túng giáo dục thuần túy.",
      },
    ],
  },
  {
    id: 7,
    title: "Thách Thức Tổng Hợp",
    description: "Câu hỏi tích hợp đa chiều về CNTB và thời đại AI",
    difficulty: "expert",
    emoji: "🧠",
    questions: [
      {
        question:
          "Nếu AI tự động hóa hầu hết công việc, CNTB sẽ đối mặt với khủng hoảng nào?",
        options: [
          "Chỉ có khủng hoảng thất nghiệp cục bộ trong ngắn hạn",
          "Khủng hoảng kép: thất nghiệp và dư thừa hàng hóa do mất sức mua",
          "Không có khủng hoảng vì thị trường sẽ tự điều chỉnh hoàn hảo",
        ],
        correct: 1,
        explanation:
          "Tự động hóa hàng loạt → thất nghiệp → mất sức mua → dư thừa hàng hóa (không ai có tiền mua) → khủng hoảng sản xuất thặng dư - mâu thuẫn giữa năng lực sản xuất cao và chiếm hữu tư nhân đạt đỉnh điểm.",
      },
      {
        question:
          "Tại sao các tập đoàn tech lớn thường phản đối quy định minh bạch thuật toán?",
        options: [
          "Quy định làm tăng chi phí tuân thủ và giảm lợi thế cạnh tranh độc quyền",
          "Thuật toán hoàn toàn công bằng nên không cần quy định nào cả",
          "Các tập đoàn luôn ủng hộ mọi quy định của chính phủ",
        ],
        correct: 0,
        explanation:
          "Minh bạch thuật toán lộ ra cách thao túng hành vi người dùng, bóc lột dữ liệu, phân biệt đối xử → giảm lợi nhuận và uy tín. Đây là mâu thuẫn giữa lợi ích tư nhân (che giấu) và lợi ích công cộng (minh bạch).",
      },
      {
        question:
          "Phát triển AI độc lập ở Việt Nam cần yếu tố nào quan trọng nhất?",
        options: [
          "Chỉ cần mua công nghệ từ nước ngoài là đủ để phát triển",
          "Kiểm soát dữ liệu quốc gia, đào tạo nhân lực, định hướng AI lợi ích chung",
          "Để hoàn toàn cho tư nhân tự do phát triển không cần điều tiết",
        ],
        correct: 1,
        explanation:
          "Để tự chủ AI: (1) Kiểm soát dữ liệu (không để tập đoàn nước ngoài độc quyền); (2) Đào tạo nhân lực AI chất lượng cao; (3) Chính sách định hướng AI phục vụ phát triển bền vững, không chỉ lợi nhuận - học từ kinh nghiệm công nghiệp hóa XHCN.",
      },
      {
        question:
          "Mâu thuẫn giữa 'tự do cá nhân' và 'giám sát số' trong CNTB thể hiện ở đâu?",
        options: [
          "Người dùng 'tự nguyện' chia sẻ dữ liệu để được dịch vụ 'miễn phí'",
          "Không có mâu thuẫn vì giám sát giúp bảo vệ an ninh hoàn toàn",
          "Tự do cá nhân luôn được đặt lên trên lợi nhuận doanh nghiệp",
        ],
        correct: 0,
        explanation:
          "CNTB giám sát (surveillance capitalism) dùng 'tự do lựa chọn' làm vỏ bọc: người dùng 'đồng ý' điều khoản dài 50 trang → nền tảng thu thập dữ liệu → bán cho nhà quảng cáo/chính phủ. 'Tự do' biến thành công cụ bóc lột.",
      },
      {
        question:
          "Cách mạng Tháng Tám 1945 thành công dù điều kiện vật chất lạc hậu vì lý do nào?",
        options: [
          "May mắn và thời cơ quốc tế thuận lợi đơn thuần",
          "Ý thức xã hội độc lập cao, nhân dân hiểu rõ mục tiêu cách mạng",
          "Chỉ nhờ vào vũ khí và quân đội mạnh từ nước ngoài",
        ],
        correct: 1,
        explanation:
          "Theo CNDVLS, ý thức xã hội có độc lập tương đối với điều kiện vật chất. Tháng Tám 1945: điều kiện vật chất còn lạc hậu nhưng ý thức độc lập dân tộc + tư tưởng Mác-Lênin + tổ chức chặt chẽ → cách mạng thành công - minh chứng vai trò ý thức.",
      },
      {
        question:
          "Thế hệ 2025-2050 'chiến đấu cho tự do nhận thức' có nghĩa là gì?",
        options: [
          "Chống lại sự chi phối của thuật toán và tư bản số lên tư duy/hành vi",
          "Chiến đấu vũ trang giống như các thế hệ cách mạng trước",
          "Không cần chiến đấu vì mọi thứ đã tự do hoàn toàn",
        ],
        correct: 0,
        explanation:
          "Nếu thế hệ 1945-1986 chiến đấu cho độc lập vật chất (lãnh thổ, chính trị), thì thế hệ hiện tại chiến đấu cho tự do nhận thức: không để thuật toán, fake news, surveillance capitalism chi phối cách nghĩ, cách sống - đây là mặt trận mới của đấu tranh giai cấp.",
      },
    ],
  },
];
