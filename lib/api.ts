interface Opinion {
  name: string
  opinion: string
  likes: number
  createdAt: string
  voters: string[]
}

interface OpinionResponse {
  success: boolean
  message: string
  opinion?: Opinion
}

interface VoteResponse {
  success: boolean
  message: string
  likes?: number
}

export async function getOpinions(): Promise<Opinion[]> {
  const response = await fetch(`/api/opinions`)

  if (!response.ok) {
    throw new Error(`Failed to fetch opinions: ${response.statusText}`)
  }

  return response.json()
}

export async function addOpinion(name: string, opinion: string): Promise<OpinionResponse> {
  const formData = new FormData()
  formData.append("name", name)
  formData.append("opinion", opinion)

  const response = await fetch(`/api/opinions`, {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Failed to add opinion: ${response.statusText}`)
  }

  return response.json()
}

export async function voteOpinion(name: string): Promise<VoteResponse> {
  const formData = new FormData()
  formData.append("name", name)

  const response = await fetch(`/api/opinions/vote`, {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Failed to vote: ${response.statusText}`)
  }

  return response.json()
}

export async function unvoteOpinion(name: string): Promise<VoteResponse> {
  const formData = new FormData()
  formData.append("name", name)

  const response = await fetch(`/api/opinions/unvote`, {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Failed to unvote: ${response.statusText}`)
  }

  return response.json()
}
