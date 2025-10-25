import { type NextRequest, NextResponse } from "next/server"

interface Opinion {
  name: string
  opinion: string
  likes: number
  createdAt: string
  voters: string[]
}

// Store opinions in memory
const opinions: Opinion[] = [
  {
    name: "Nguyễn Văn A",
    opinion:
      "Hiểu rõ chủ nghĩa tư bản giúp tôi nhận thức được những mâu thuẫn trong xã hội hiện đại. Đặc biệt là cách AI đang bóc lột dữ liệu của chúng ta.",
    likes: 12,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    voters: [],
  },
  {
    name: "Trần Thị B",
    opinion:
      "Dự án này rất ý nghĩa. Nó giúp giới trẻ kết nối triết học với công nghệ, thay vì chỉ học lý thuyết khô khan.",
    likes: 8,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    voters: [],
  },
  {
    name: "Lê Minh C",
    opinion:
      "Tôi bắt đầu nhận thức rằng công nghệ không phải là trung lập. Nó là công cụ của tư bản để kiểm soát và bóc lột.",
    likes: 15,
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    voters: [],
  },
]

export async function GET(request: NextRequest) {
  try {
    // Return sorted by likes (descending)
    const sorted = [...opinions].sort((a, b) => b.likes - a.likes)
    return NextResponse.json(sorted)
  } catch (error) {
    console.error("Error fetching opinions:", error)
    return NextResponse.json({ error: "Failed to fetch opinions" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const opinion = formData.get("opinion") as string

    if (!name || !opinion) {
      return NextResponse.json({ error: "Name and opinion are required" }, { status: 400 })
    }

    const newOpinion: Opinion = {
      name,
      opinion,
      likes: 0,
      createdAt: new Date().toISOString(),
      voters: [],
    }

    opinions.push(newOpinion)

    return NextResponse.json({
      success: true,
      message: "Opinion added successfully",
      opinion: newOpinion,
    })
  } catch (error) {
    console.error("Error adding opinion:", error)
    return NextResponse.json({ error: "Failed to add opinion" }, { status: 500 })
  }
}
