import type { Metadata } from "next";
import GoBack from "@/components/go-back";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import MediaVideos from "@/components/media/media-videos";
import MediaImages from "@/components/media/media-images";
import ShareButton from "@/components/share-button";
import { Spinner } from "@/components/ui/spinner";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}): Promise<Metadata> {
  const title = decodeURIComponent((await params).slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    title: `${title} - Media`,
    description: `Watch the latest videos and images of ${title}`,
  };
}
export default async function MovieMediaPage({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const { id, slug } = await params;

  const title = decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  if (!id) {
    return notFound();
  }
  return (
    <Suspense fallback={<Spinner />}>
      <section className="mx-auto block max-w-screen-xl items-center px-4">
        <div className="space-y-3 py-5">
          <div className="flex items-center justify-between">
            <GoBack link={`/movie/${id}/${slug}`} title="Back to main" />
            <ShareButton />
          </div>
          <h1 className="text-[19px] font-bold sm:text-xl md:text-2xl lg:px-0 lg:text-3xl">
            {title}
          </h1>
        </div>

        <div className="flex flex-col gap-5 py-3">
          <span className="w-fit text-xl font-semibold md:text-2xl">
            Videos
          </span>
          <MediaVideos id={parseInt(id)} media_type="movie" />
        </div>
        <div className="flex flex-col gap-5 py-3 pb-32">
          <span className="w-fit text-xl font-semibold md:text-2xl">
            Images
          </span>
          <MediaImages id={parseInt(id)} media_type="movie" />
        </div>
      </section>
    </Suspense>
  );
}
