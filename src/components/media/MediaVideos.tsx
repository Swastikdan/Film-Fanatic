'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { ScrollContainer } from '@/components/ScrollContainer'
import { Play } from 'lucide-react'
import Image from '@/components/Image'
import {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { getVideos } from '@/lib/getVideos'
import { Skeleton } from '@/components/ui/skeleton'
export default function MediaVideos({
  id,
  media_type,
}: {
  id: number
  media_type: 'movie' | 'tv'
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['media_videos', id, media_type],
    queryFn: async () => getVideos({ id, type: media_type }),
    staleTime: 1000 * 60 * 60 * 24,
  })

  return (
    <ScrollContainer isButtonsVisible={!isLoading}>
      <div className="flex items-center justify-center gap-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                className="aspect-video h-44 w-auto rounded-xl bg-accent object-cover md:h-52 lg:h-60"
              />
            ))
          : data &&
            data.map((video, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group relative cursor-pointer">
                    <Image
                      src={`https://img.youtube.com/vi/${video.key}/sddefault.jpg`}
                      width={300}
                      height={450}
                      quality={100}
                      alt={video.name}
                      className="aspect-video h-44 w-auto rounded-xl bg-accent object-cover md:h-52 lg:h-60"
                    />
                    <span className="absolute left-4 top-4 truncate text-xs text-white md:text-sm">
                      {video.name.slice(0, 30) +
                        (video.name.length > 30 ? '...' : '')}
                    </span>
                    <button className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/60 p-4 transition-transform group-hover:scale-110">
                        <Play
                          className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                          style={{
                            filter:
                              'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
                          }}
                        />
                      </div>
                    </button>
                  </div>
                </DialogTrigger>
                <DialogOverlay className="bg-white/10 backdrop-blur-lg dark:bg-black/0">
                  <DialogContent className="aspect-video w-full max-w-5xl rounded-2xl border-0 bg-transparent p-0 ring-0">
                    <DialogHeader className="sr-only">
                      <DialogTitle>{video.name}</DialogTitle>
                    </DialogHeader>
                    <div className="relative isolate z-[1] size-full h-full overflow-hidden rounded-[18px] bg-accent p-0">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.key}`}
                        className="size-full rounded-2xl"
                        allowFullScreen
                        allow="accelerometer;encrypted-media; gyroscope; picture-in-picture;"
                      ></iframe>
                    </div>
                  </DialogContent>
                </DialogOverlay>
              </Dialog>
            ))}
      </div>
    </ScrollContainer>
  )
}
