'use client'
import { useState, useEffect, useCallback, memo } from 'react'
import { cn } from '@/lib/utils'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

const DEFAULT_PLACEHOLDER_IMAGE =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA1MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjYxNTQgMjBIMTQuMzg0NkMxNC4wMTc0IDIwIDEzLjY2NTIgMjAuMTUwOSAxMy40MDU2IDIwLjQxOTRDMTMuMTQ1OSAyMC42ODc5IDEzIDIxLjA1MjEgMTMgMjEuNDMxOFYzOS41NjgyQzEzIDM5Ljk0NzkgMTMuMTQ1OSA0MC4zMTIxIDEzLjQwNTYgNDAuNTgwNkMxMy42NjUyIDQwLjg0OTEgMTQuMDE3NCA0MSAxNC4zODQ2IDQxSDM1LjYxNTRDMzUuOTgyNiA0MSAzNi4zMzQ4IDQwLjg0OTEgMzYuNTk0NCA0MC41ODA2QzM2Ljg1NDEgNDAuMzEyMSAzNyAzOS45NDc5IDM3IDM5LjU2ODJWMjEuNDMxOEMzNyAyMS4wNTIxIDM2Ljg1NDEgMjAuNjg3OSAzNi41OTQ0IDIwLjQxOTRDMzYuMzM0OCAyMC4xNTA5IDM1Ljk4MjYgMjAgMzUuNjE1NCAyMFpNMzQuMjMwOCAzMi44ODY0TDI5LjgwNTMgMjcuODk0QzI5LjcyMTYgMjcuNzk4MyAyOS42MTk4IDI3LjcyMTIgMjkuNTA2MiAyNy42Njc2QzI5LjM5MjcgMjcuNjEzOSAyOS4yNjk4IDI3LjU4NDggMjkuMTQ1IDI3LjU4MkMyOS4wMjAyIDI3LjU3OTIgMjguODk2MSAyNy42MDI4IDI4Ljc4MDQgMjcuNjUxM0MyOC42NjQ3IDI3LjY5OTggMjguNTU5OCAyNy43NzIyIDI4LjQ3MjEgMjcuODY0MUwyMy41MzYxIDMyLjk2ODRMMjguNTMzNiAzOC4xMzY0SDI1LjkyMzFMMjEuNDk4OSAzMy41NjEyQzIxLjMyNTcgMzMuMzgyMyAyMS4wOTA5IDMzLjI4MTggMjAuODQ2MiAzMy4yODE4QzIwLjYwMTQgMzMuMjgxOCAyMC4zNjY2IDMzLjM4MjMgMjAuMTkzNSAzMy41NjEyTDE1Ljc2OTIgMzguMTM2NFYyMi44NjM2SDM0LjIzMDhWMzIuODg2NFpNMTcuNzA3NyAyNy4xNTkxQzE3LjcwNzcgMjYuNzA2IDE3LjgzNzYgMjYuMjYzMSAxOC4wODExIDI1Ljg4NjNDMTguMzI0NSAyNS41MDk2IDE4LjY3MDUgMjUuMjE2IDE5LjA3NTMgMjUuMDQyNkMxOS40ODAxIDI0Ljg2OTIgMTkuOTI1NSAyNC44MjM4IDIwLjM1NTMgMjQuOTEyMkMyMC43ODUgMjUuMDAwNiAyMS4xNzk4IDI1LjIxODggMjEuNDg5NiAyNS41MzkyQzIxLjc5OTQgMjUuODU5NiAyMi4wMTA0IDI2LjI2NzggMjIuMDk1OSAyNi43MTIyQzIyLjE4MTQgMjcuMTU2NSAyMi4xMzc1IDI3LjYxNzIgMjEuOTY5OCAyOC4wMzU4QzIxLjgwMjEgMjguNDU0NCAyMS41MTgyIDI4LjgxMjIgMjEuMTUzOSAyOS4wNjM5QzIwLjc4OTYgMjkuMzE1NiAyMC4zNjEyIDI5LjQ1IDE5LjkyMzEgMjkuNDVDMTkuMzM1NSAyOS40NSAxOC43NzIgMjkuMjA4NiAxOC4zNTY2IDI4Ljc3OUMxNy45NDExIDI4LjM0OTQgMTcuNzA3NyAyNy43NjY3IDE3LjcwNzcgMjcuMTU5MVoiIGZpbGw9IiNCNUI1QjUiLz4KPC9zdmc+Cg=='
type NextImageWithFallbackProps = NextImageProps & {
  src: string
  alt: string
  className?: string
  fallbackImage?: string
}

const ImageComponent = ({
  src,
  alt,
  className,
  fallbackImage = DEFAULT_PLACEHOLDER_IMAGE,
  ...props
}: NextImageWithFallbackProps) => {
  const [loading, setLoading] = useState(true)
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    setImageSrc(src)
    setLoading(true)
  }, [src])

  const onImageLoad = useCallback(() => {
    setLoading(false)
  }, [])

  const onImageError = useCallback(() => {
    setImageSrc((prev) => (prev === fallbackImage ? prev : fallbackImage))
  }, [fallbackImage])

  return (
    <div className={cn('relative', className)}>
      <Skeleton
        style={{ display: loading ? 'block' : 'none' }}
        className={className}
      />
      <NextImage
        src={imageSrc}
        alt={alt}
        unoptimized
        className={cn(className)}
        loading="eager"
        fetchPriority="high"
        priority
        onLoad={onImageLoad}
        onError={onImageError}
        style={{ display: loading ? 'none' : 'block' }}
        {...props}
      />
    </div>
  )
}

export default memo(ImageComponent)
