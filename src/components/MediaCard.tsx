import React from 'react'
import Image from '@/components/Image'
import WatchListButton from '@/components/WatchListButton'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
export interface MediaCardProps {
  title: string
  rating: number
  image?: string
  poster_path: string
  id: number
  media_type: 'movie' | 'tv' | 'person'
  relese_date: string | null
  known_for_department?: string
  card_type?: 'horizontal' | 'vertical' | 'small_card_person'
}
export interface PersonCardProps {
  name: string
  profile_path: string
  id: number
  known_for_department: string
}
export interface MediaCardSkeletonProps {
  card_type?: 'horizontal' | 'vertical' | 'small_card_person'
}

export function MediaCard({
  title,
  rating,
  image,
  poster_path,
  id,
  media_type,
  relese_date,
  known_for_department,
  card_type = 'horizontal',
}: MediaCardProps) {
  const formattedTitle = title.replace(/ /g, '-').toLowerCase()
  const formattedReleseDate = relese_date
    ? new Date(relese_date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''
  if (card_type === 'vertical') {
    return (
      <Link
        href={`/${media_type}/${id}/${formattedTitle}`}
        className="h-52 w-72 space-y-2 rounded-xl transition-opacity duration-200 ease-in-out hover:opacity-90 dark:hover:opacity-70"
        aria-label={title}
      >
        <div className="relative h-40 w-full rounded-xl bg-background">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            width={300}
            height={450}
            loading="eager"
            alt={title}
            className="h-40 w-full rounded-xl"
          />
          <WatchListButton
            className="absolute right-2 top-2"
            title={title}
            media_type={media_type as 'movie' | 'tv'}
            id={id}
            image={poster_path}
            rating={rating}
            relese_date={relese_date}
          />
          <div className="absolute bottom-2 right-2 flex items-center gap-2 text-sm md:text-base">
            <Badge
              variant="secondary"
              className="h-7 rounded-sm px-2 uppercase hover:bg-secondary"
            >
              {media_type}
            </Badge>
            <Badge
              variant="secondary"
              className="flex h-7 items-center gap-1 rounded-sm px-2 hover:bg-secondary"
            >
              {rating > 0.0 ? (
                <>
                  <Star size="16" className="fill-current text-yellow-400" />
                  {rating.toFixed(1)}
                </>
              ) : (
                `NR`
              )}
            </Badge>
          </div>
        </div>
        <div className="flex h-[40px] flex-col gap-2 md:h-[52px]">
          <h3 className="truncate text-sm font-semibold capitalize">{title}</h3>
          <span className="text-xs font-thin">
            {media_type === 'person'
              ? known_for_department
              : formattedReleseDate}
          </span>
        </div>
      </Link>
    )
  }
  return (
    <Link
      href={`/${media_type}/${id}/${formattedTitle}`}
      className="h-full w-44 space-y-2 rounded-xl transition-opacity duration-200 ease-in-out hover:opacity-90 dark:hover:opacity-70 md:w-48"
    >
      <div className="relative h-64 w-full rounded-xl bg-secondary md:h-72">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          width={300}
          height={450}
          alt={title}
          className="h-64 w-full rounded-xl md:h-72"
        />
        {media_type === 'movie' || media_type === 'tv' ? (
          <>
            <WatchListButton
              className="absolute right-2 top-2"
              title={title}
              media_type={media_type as 'movie' | 'tv'}
              id={id}
              image={image ?? poster_path}
              rating={rating}
              relese_date={relese_date}
            />

            <div className="absolute bottom-2 right-2 flex items-center gap-2 text-sm md:text-base">
              <Badge
                variant="secondary"
                className="h-7 rounded-sm px-2 uppercase hover:bg-secondary"
              >
                {media_type}
              </Badge>
              <Badge
                variant="secondary"
                className="flex h-7 items-center gap-1 rounded-sm px-2 hover:bg-secondary"
              >
                {rating > 0.0 ? (
                  <>
                    <Star size="16" className="fill-current text-yellow-400" />
                    {rating.toFixed(1)}
                  </>
                ) : (
                  `NR`
                )}
              </Badge>
            </div>
          </>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="truncate text-sm capitalize md:text-base">{title}</h3>
        <span className="text-xs font-thin">
          {media_type === 'person' ? known_for_department : formattedReleseDate}
        </span>
      </div>
    </Link>
  )
}

export function MediaCardSkeleton({
  card_type = 'horizontal',
}: MediaCardSkeletonProps) {
  if (card_type === 'vertical') {
    return (
      <div className="h-52 w-72 space-y-2">
        <Skeleton className="h-40 w-full rounded-xl md:h-40" />
        <div className="flex h-[40px] flex-col gap-2 md:h-[52px]">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    )
  } else if (card_type === 'small_card_person') {
    return (
      <div className="h-32 w-28 space-y-2 md:h-40 md:w-32">
        <Skeleton className="relative h-24 w-full md:h-32" />
        <div className="flex h-[40px] flex-col gap-2 md:h-[52px]">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    )
  }
  return (
    <div className="h-full w-44 space-y-2 md:w-48">
      <Skeleton className="relative h-64 w-full md:h-72" />
      <div className="flex h-[40px] flex-col gap-2 md:h-[52px]">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  )
}

export function PersonCard({
  name,
  profile_path,
  id,
  known_for_department,
}: PersonCardProps) {
  const formattedName = name.replace(/ /g, '-').toLowerCase()
  return (
    <Link
      href={`/person/${id}/${formattedName}`}
      className="h-52 w-32 space-y-2 rounded-xl bg-secondary p-2 transition-opacity duration-200 ease-in-out hover:opacity-90 dark:hover:opacity-70 md:h-[15.5rem] md:w-36"
      aria-label={name}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
        width={300}
        height={450}
        alt={name}
        className="h-36 w-full rounded-xl bg-secondary md:h-44"
      />
      <div className="flex h-[40px] flex-col gap-2 py-1 md:h-[52px]">
        <h3 className="truncate text-sm font-medium capitalize">{name}</h3>
        <span className="truncate text-[10px] font-thin md:text-xs">
          {known_for_department}
        </span>
      </div>
    </Link>
  )
}