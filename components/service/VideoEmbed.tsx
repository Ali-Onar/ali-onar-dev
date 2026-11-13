"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Props = { id: string; title: string; playLabel: string };

/**
 * Shows only the thumbnail until the visitor presses play, so the page does
 * not load the YouTube player up front.
 */
const VideoEmbed = ({ id, title, playLabel }: Props) => {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  );

  const play = () => {
    trackEvent("video_play", { video_id: id });
    setPlaying(true);
  };

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="relative aspect-video bg-secondary">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={play}
            aria-label={playLabel}
            className="group absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
          >
            <Image
              src={thumb}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              onError={() =>
                setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)
              }
            />
            <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-brand shadow-lg transition-transform group-hover:scale-105">
              <Play aria-hidden className="ml-0.5 h-6 w-6 fill-current" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-4 text-sm font-medium leading-snug">
        {title}
      </figcaption>
    </figure>
  );
};

export default VideoEmbed;
