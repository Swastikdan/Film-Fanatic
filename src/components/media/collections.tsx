"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCollection } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Collections({ id }: { id: number }) {
  const { data, isLoading } = useQuery({
    queryKey: ["collection", id],
    queryFn: async () => await getCollection({ id }),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  if (!isLoading) {
    return (
      <>
        {isLoading ? (
          <Skeleton
            className="h-48 w-full rounded-md md:h-52 lg:h-60"
            aria-label="Loading collection"
          />
        ) : (
          <div
            className="bg-secondary relative h-48 w-full overflow-hidden rounded-md md:h-52 lg:h-60"
            role="region"
            aria-label={`Collection: ${data?.name}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.9036624649859944) 0%, rgba(0,0,0,0.7120098039215687) 55%, rgba(13,13,13,0.2111694677871149) 100%), url(https://image.tmdb.org/t/p/w1440_and_h320_multi_faces/${data?.backdrop_path})`,
              }}
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col items-start justify-center p-5">
              <span className="text-primary-foreground dark:text-primary text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
                Part of the {data?.name}
              </span>
              <span
                className="text-primary-foreground dark:text-primary mt-2 max-h-32 overflow-hidden text-xs font-light text-ellipsis md:text-sm lg:text-base"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Includes{" "}
                {data?.parts?.map((part) => part.title)?.join(", ") ?? ""}
              </span>
              <Link
                href={`/collection/${id}`}
                aria-label={`View collection: ${data?.name}`}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary-foreground dark:bg-primary text-primary dark:text-primary-foreground hover:bg-primary-foreground/90 dark:hover:bg-primary/90 mt-3 rounded-md font-medium shadow"
                >
                  View Collection
                </Button>
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }
}
