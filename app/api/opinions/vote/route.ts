import { type NextRequest, NextResponse } from "next/server"

// Note: In production, this should use a database
let opinions: any[] = []

// Initialize with some data
if (opinions.length === 0) {
  opinions = [
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
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const opinion = opinions.find((op) => op.name === name)

    if (!opinion) {
      return NextResponse.json({ error: "Opinion not found" }, { status: 404 })
    }

    // Get voter ID from request (using IP or session)
    const voterId = request.headers.get("x-forwarded-for") || "anonymous"

    // Check if already voted
    if (opinion.voters.includes(voterId)) {
      return NextResponse.json({ error: "You already voted for this opinion" }, { status: 400 })
    }

    opinion.likes += 1
    opinion.voters.push(voterId)

    return NextResponse.json({
      success: true,
      message: "Vote added successfully",
      likes: opinion.likes,
    })
  } catch (error) {
    console.error("Error voting:", error)
    return NextResponse.json({ error: "Failed to vote" }, { status: 500 })
  }
}
