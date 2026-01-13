"use client";

import { useState } from "react";

interface LazyYouTubeProps {
  videoId: string;
  className?: string;
}

export default function LazyYouTube({
  videoId,
  className,
}: LazyYouTubeProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded ? (
        <button
          onClick={() => setLoaded(true)}
          aria-label="Play video"
          className="relative w-full h-full group"
        >
          {/* Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover rounded-sm"
            loading="lazy"
          />

          {/* Play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="bg-black/60 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl group-hover:scale-110 transition">
              ▶
            </span>
          </span>
        </button>
      ) : (
        <iframe
          className="w-full h-full rounded-sm"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}
