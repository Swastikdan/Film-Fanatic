import { cache } from 'react'
import { env } from '@/env'

const accessToken = env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN
const baseUrl = env.NEXT_PUBLIC_TMDB_API_URL
const method = 'GET'

interface FetchTmdbDataResult<T> {
  data?: T
  error?: string
}

export const Tmdb = cache(async function UncachedTmdb<T>(
  url: string,
): Promise<FetchTmdbDataResult<T>> {
  const fetchUrl = `${baseUrl}${url}`

  const options: RequestInit = {
    method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'force-cache',
    next: {
      tags: ['tmdb', url],
      revalidate: 3600,
    },
  }

  try {
    const response = await fetch(fetchUrl, options)
    if (!response.ok) {
      return { error: `Error: ${response.status} ${response.statusText}` }
    }

    const data = (await response.json()) as T
    return { data }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message }
    }
    return { error: 'An unknown error occurred' }
  }
})
