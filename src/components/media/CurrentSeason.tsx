import React from 'react'
import Link from 'next/link'
import { SeasonsEntity } from '@/types/tv'
import Image from '@/components/Image'
import { IMAGE_PREFIX } from '@/constants'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

export default function CurrentSeason({
  id,
  urltitle,
  season_data,
}: {
  id: number
  urltitle: string
  season_data: SeasonsEntity
}) {
  return (
    <div className="pb-5">
      <div className="flex flex-col justify-start gap-3">
        <span className="w-fit text-xl font-semibold md:text-2xl">
          Current Season
        </span>
        <div
          className="flex items-start gap-5 rounded-3xl border-2 border-border p-3 md:p-5"
          role="region"
          aria-label={`Current Season: ${season_data.name}`}
        >
          <div className="min-w-[7rem] md:min-w-[9rem]">
            <Link
              href={`/tv/${id}/${urltitle}/seasons/${season_data.season_number}`}
              className="transition-opacity duration-200 ease-in-out hover:opacity-90 dark:hover:opacity-70"
              aria-label={`View season ${season_data.season_number} details`}
            >
              <Image
                width={200}
                height={300}
                src={IMAGE_PREFIX.HD_POSTER + season_data.poster_path}
                className="h-40 w-28 shrink-0 rounded-xl object-cover md:h-52 md:w-36"
                alt={season_data.name}
              />
            </Link>
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-2 overflow-hidden py-3">
            <Link
              href={`/tv/${id}/${urltitle}/seasons/${season_data.season_number}`}
              className="line-clamp-1 text-xl font-bold transition-opacity duration-200 ease-in-out hover:opacity-90 dark:hover:opacity-70 md:text-2xl"
              aria-label={`View season ${season_data.season_number} details`}
            >
              {season_data.name}
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              {season_data.vote_average > 0 && (
                <Badge
                  variant="secondary"
                  className="inline-flex items-center gap-1 rounded-md px-3 text-sm font-light"
                  aria-label={`Rating: ${season_data.vote_average * 10}%`}
                >
                  <Star size={16} className="size-3 fill-current" />
                  {season_data.vote_average * 10} %
                </Badge>
              )}
              <span className="text-sm">
                {season_data.air_date?.split('-')[0] || 'TBA'}
              </span>
              {` • `}
              <span className="text-sm">
                {season_data.episode_count} Episodes
              </span>
            </div>
            <span className="line-clamp-3 text-sm md:text-base">
              {season_data.overview || 'No overview available'}
            </span>
          </div>
        </div>
        <Link
          href={`/tv/${id}/${urltitle}/seasons/${season_data.season_number}`}
          className="w-fit text-lg hover:opacity-70"
          aria-label={`View all episodes of season ${season_data.season_number}`}
        >
          View All Episodes
        </Link>
      </div>
    </div>
  )
}
