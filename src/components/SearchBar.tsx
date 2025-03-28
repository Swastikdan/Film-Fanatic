'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export function Searchbar({
  searchterm,
  clasName,
}: {
  searchterm?: string
  clasName?: string
}) {
  const [search, setSearch] = useState('')
  const router = useRouter()
  useEffect(() => {
    if (searchterm) {
      setSearch(searchterm)
    }
  }, [searchterm])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search) {
      return
    }
    router.push(`/search?query=${search}`)
  }

  const clearSearch = () => {
    setSearch('')
    const pathname = window.location.pathname
    if (pathname === '/search') {
      router.push('/search')
    }
  }

  return (
    <form
      action="/search"
      className={cn(clasName, 'flex w-full p-3')}
      onSubmit={handleSearch}
      role="search"
      aria-label="Search Form"
    >
      <div className="relative w-full text-lg font-medium">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          type="text"
          name="query"
          autoComplete="false"
          placeholder="👀 What movie, show? Let's find it!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="peer block h-12 w-full bg-background pr-8 ps-10 placeholder:text-sm enabled:bg-background sm:h-11 placeholder:md:text-base"
          aria-label="Search Input"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2 peer-disabled:pointer-events-none peer-disabled:opacity-50">
          <Search aria-hidden="true" />
        </div>
        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 end-0 z-20 flex items-center pr-2"
            aria-label="Clear Search"
          >
            <X />
          </button>
        )}
      </div>
      <Button
        size="lg"
        className="font-heading ml-2 hidden h-11 text-base sm:block"
        aria-label="Submit Search"
      >
        Search
      </Button>
    </form>
  )
}

export function SearchBarSkeleton() {
  return (
    <div className="flex w-full p-3">
      <div className="relative w-full font-sans text-lg font-medium">
        <Skeleton
          className="h-12 w-full bg-background sm:h-11"
          aria-hidden="true"
        />
        <Skeleton className="h-10 w-12 bg-background" aria-hidden="true" />
      </div>
    </div>
  )
}
