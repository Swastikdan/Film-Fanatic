"use client";
import { ScrollContainer } from "@/components/scroll-container";
import { MediaCard, MediaCardSkeleton } from "@/components/media-card";
import { getMedia } from "@/lib/getmedia";
import { useQuery } from "@tanstack/react-query";

function TrendingDayMovies() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["trending_day"],
    queryFn: async () => await getMedia({ type: "trending_day" }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollContainer
      isButtonsVisible={!isFetching}
      aria-label="Trending Movies of the Day"
    >
      <div className="flex gap-4 p-4 first:pl-0 last:pr-0" role="list">
        {isFetching || error
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data?.map((item) => (
              <MediaCard
                key={item.id}
                title={item.title ?? item.name ?? "Untitled"}
                rating={item.vote_average}
                image={item.poster_path}
                poster_path={item.poster_path!}
                media_type={item.media_type as "movie" | "tv"}
                id={item.id}
                relese_date={item.first_air_date ?? item.release_date ?? null}
              />
            ))}
      </div>
    </ScrollContainer>
  );
}

function TrendingWeekMovies() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["trending_week"],
    queryFn: async () => await getMedia({ type: "trending_week" }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollContainer
      isButtonsVisible={!isFetching}
      aria-label="Trending Movies of the Week"
    >
      <div className="flex gap-4 p-4 first:pl-0 last:pr-0" role="list">
        {isFetching || error
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data?.map((item) => (
              <MediaCard
                key={item.id}
                title={item.title ?? item.name ?? "Untitled"}
                rating={item.vote_average}
                image={item.poster_path}
                poster_path={item.poster_path ?? ""}
                media_type={item.media_type as "movie" | "tv"}
                id={item.id}
                relese_date={item.first_air_date ?? item.release_date ?? null}
              />
            ))}
      </div>
    </ScrollContainer>
  );
}

function UpcomingMovies() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["upcoming_movie"],
    queryFn: async () => await getMedia({ type: "upcoming_movie" }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollContainer
      isButtonsVisible={!isFetching}
      aria-label="Upcoming Movies"
    >
      <div className="flex gap-4 p-4 first:pl-0 last:pr-0" role="list">
        {isFetching || error
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaCardSkeleton card_type="vertical" key={index} />
            ))
          : data?.map((item) => (
              <MediaCard
                key={item.id}
                card_type="vertical"
                title={item.title ?? item.name ?? "Untitled"}
                rating={item.vote_average}
                poster_path={item.poster_path ?? ""}
                image={item.backdrop_path}
                media_type={"movie"}
                id={item.id}
                relese_date={item.first_air_date ?? item.release_date ?? null}
              />
            ))}
      </div>
    </ScrollContainer>
  );
}

function PopularMovies() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["popular_movie"],
    queryFn: async () => await getMedia({ type: "popular_movie" }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollContainer isButtonsVisible={!isFetching} aria-label="Popular Movies">
      <div className="flex gap-4 p-4 first:pl-0 last:pr-0" role="list">
        {(isFetching ?? error)
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data?.map((item) => (
              <MediaCard
                key={item.id}
                id={item.id}
                title={item.title ?? item.original_title ?? "Untitled"}
                poster_path={item.poster_path ?? ""}
                image={item.poster_path}
                relese_date={item.release_date ?? null}
                rating={item.vote_average}
                media_type="movie"
              />
            ))}
      </div>
    </ScrollContainer>
  );
}

function PopularTv() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["popular_tv"],
    queryFn: async () => await getMedia({ type: "popular_tv" }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollContainer
      isButtonsVisible={!isFetching}
      aria-label="Popular TV Shows"
    >
      <div className="flex gap-4 p-4 first:pl-0 last:pr-0" role="list">
        {isFetching || error
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data?.map((item) => (
              <MediaCard
                key={item.id}
                id={item.id}
                title={item.name ?? item.original_name ?? "Untitled"}
                poster_path={item.poster_path ?? ""}
                image={item.poster_path}
                relese_date={item.first_air_date ?? null}
                rating={item.vote_average}
                media_type="tv"
              />
            ))}
      </div>
    </ScrollContainer>
  );
}

function TopRatedMovies() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["top_rated_movies"],
    queryFn: async () => await getMedia({ type: "top_rated_movie" }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollContainer
      isButtonsVisible={!isFetching}
      aria-label="Top Rated Movies"
    >
      <div className="flex gap-4 p-4 first:pl-0 last:pr-0" role="list">
        {isFetching || error
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data?.map((item) => (
              <MediaCard
                key={item.id}
                title={item.title ?? item.name ?? "Untitled"}
                rating={item.vote_average}
                image={item.poster_path}
                poster_path={item.poster_path ?? ""}
                media_type={"movie"}
                id={item.id}
                relese_date={item.first_air_date ?? item.release_date ?? null}
              />
            ))}
      </div>
    </ScrollContainer>
  );
}

function TopRatedTv() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["top_rated_tv"],
    queryFn: async () => await getMedia({ type: "top_rated_tv" }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollContainer
      isButtonsVisible={!isFetching}
      aria-label="Top Rated TV Shows"
    >
      <div className="flex gap-4 p-4 first:pl-0 last:pr-0" role="list">
        {isFetching || error
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data?.map((item) => (
              <MediaCard
                key={item.id}
                title={item.title ?? item.name ?? "Untitled"}
                rating={item.vote_average}
                image={item.poster_path}
                poster_path={item.poster_path ?? ""}
                media_type={"tv"}
                id={item.id}
                relese_date={item.first_air_date ?? item.release_date ?? null}
              />
            ))}
      </div>
    </ScrollContainer>
  );
}

export {
  TrendingDayMovies,
  TrendingWeekMovies,
  UpcomingMovies,
  PopularMovies,
  PopularTv,
  TopRatedMovies,
  TopRatedTv,
};
