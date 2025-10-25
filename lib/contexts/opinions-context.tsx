"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { getOpinions, addOpinion, voteOpinion, unvoteOpinion } from "@/lib/api"

interface Opinion {
  name: string
  opinion: string
  likes: number
  createdAt: string
  voters: string[]
}

interface OpinionsContextType {
  opinions: Opinion[]
  loading: boolean
  error: string | null
  refreshOpinions: () => Promise<void>
  addNewOpinion: (name: string, opinion: string) => Promise<void>
  voteForOpinion: (name: string) => Promise<void>
  unvoteForOpinion: (name: string) => Promise<void>
}

const OpinionsContext = createContext<OpinionsContextType | undefined>(undefined)

export function OpinionsProvider({ children }: { children: React.ReactNode }) {
  const [opinions, setOpinions] = useState<Opinion[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refreshOpinions = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getOpinions()
      setOpinions(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch opinions")
    } finally {
      setLoading(false)
    }
  }, [])

  const addNewOpinion = useCallback(
    async (name: string, opinion: string) => {
      try {
        await addOpinion(name, opinion)
        await refreshOpinions()
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to add opinion")
        throw err
      }
    },
    [refreshOpinions],
  )

  const voteForOpinion = useCallback(
    async (name: string) => {
      try {
        await voteOpinion(name)
        await refreshOpinions()
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to vote")
        throw err
      }
    },
    [refreshOpinions],
  )

  const unvoteForOpinion = useCallback(
    async (name: string) => {
      try {
        await unvoteOpinion(name)
        await refreshOpinions()
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to unvote")
        throw err
      }
    },
    [refreshOpinions],
  )

  useEffect(() => {
    refreshOpinions()

    const interval = setInterval(() => {
      refreshOpinions()
    }, 3000)

    return () => clearInterval(interval)
  }, [refreshOpinions])

  const value = {
    opinions,
    loading,
    error,
    refreshOpinions,
    addNewOpinion,
    voteForOpinion,
    unvoteForOpinion,
  }

  return <OpinionsContext.Provider value={value}>{children}</OpinionsContext.Provider>
}

export function useOpinions() {
  const context = useContext(OpinionsContext)
  if (context === undefined) {
    throw new Error("useOpinions must be used within an OpinionsProvider")
  }
  return context
}
