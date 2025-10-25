import { NextRequest, NextResponse } from 'next/server'

const BACKEND_BASE = 'https://14.225.212.221:8081'

export async function POST(request: NextRequest) {
  try {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"
    
    const body = await request.json()
    
    const response = await fetch(`${BACKEND_BASE}/api/ai/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Next.js-Proxy/1.0'
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('AI proxy error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to get AI response',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
