"use client";
import { useQuery } from "@tanstack/react-query";
import { getCollection } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "@/components/ui/image";
import { IMAGE_PREFIX } from "@/constants";
import { MediaCard } from "@/components/media-card";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function MediaCollection({ id }: { id: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["collection", id],
    queryFn: () => getCollection({ id: Number(id) }),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Spinner />;
  if (isError || !data) return notFound();

  const { name, overview, poster_path, parts } = data;

  const user_rating =
    parts && parts.length > 0
      ? parseInt(
          (
            (parts.map((part) => part.vote_average).reduce((a, b) => a + b, 0) /
              parts.length) *
            10
          ).toFixed(0),
        )
      : 0;

  const original_language =
    Array.isArray(parts) && parts.length > 0
      ? // @ts-expect-error parts exist and is an array
        parts[0].original_language
      : "en";

  const part_count = parts ? parts.length : 0;
  return (
    <section className="mx-auto block max-w-screen-xl items-center px-4 py-5">
      <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:items-start">
        <div className="flex w-full justify-center sm:w-auto">
          <Image
            width={200}
            height={300}
            src={IMAGE_PREFIX.HD_POSTER + poster_path}
            className="h-[280px] w-[200px] shrink-0 rounded-md object-cover sm:h-52 sm:w-36"
            alt={name}
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 overflow-hidden py-3 sm:items-start">
          <span className="line-clamp-1 text-center text-xl font-bold transition-opacity duration-200 ease-in-out hover:opacity-90 sm:text-left md:text-2xl dark:hover:opacity-70">
            {name}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {user_rating > 0 && (
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-1 rounded-md px-3 text-sm font-light"
              >
                <Star size={16} className="size-3 fill-current" />
                {user_rating} %
              </Badge>
            )}
            <span className="text-sm uppercase">{original_language}</span>
            {` • `}
            <span className="text-sm">{part_count} Movies</span>
          </div>
          <span className="line-clamp-3 text-center text-sm sm:text-left md:text-base">
            {overview || "No overview available"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-10">
        <span className="text-primary text-2xl font-semibold">All Movies</span>
        <div className="grid w-full grid-cols-2 items-center justify-center gap-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {parts?.map((part) => (
            <MediaCard
              key={part.id}
              title={part.title}
              rating={part.vote_average ?? 0}
              poster_path={part.poster_path ?? ""}
              image={part.poster_path ?? ""}
              id={part.id}
              media_type="movie"
              relese_date={part.release_date ?? null}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
