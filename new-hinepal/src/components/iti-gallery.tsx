"use client";

import type React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
}

const MAX_VISIBLE = 6;

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedIndex(null);
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  const visibleImages = images.slice(0, MAX_VISIBLE);
  const remainingCount = images.length - MAX_VISIBLE;

  return (
    <>
      {/* Grid */}

      {/* Grid Container */}
      {/* Grid Container */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
        {images.slice(0, 6).map((image, index) => {
          const remaining = images.length - 6;
          const isLast = index === 5 && remaining > 0;

          let placement = "h-48 md:h-56 lg:h-full";

          // === Explicit placement rules (DESKTOP) ===
          switch (index) {
            case 0:
              placement =
                "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 h-64 md:h-80 lg:h-full";
              break;
            case 1:
              placement = "lg:col-start-3 lg:row-start-1 h-48";
              break;
            case 2:
              placement = "lg:col-start-4 lg:row-start-1 h-48";
              break;
            case 3:
              placement = "lg:col-start-3 lg:row-start-2 h-48";
              break;
            case 4:
              placement = "lg:col-start-4 lg:row-start-2 h-48";
              break;
            case 5:
              placement = "lg:col-start-4 lg:row-start-2 h-48";
              break;
          }

          // === Special cases ===

          // 2 images → equal split
          if (images.length === 2) {
            placement = "lg:col-span-1 h-64";
          }

          // Exactly 5 images → 4th image spans full height
          if (images.length === 5 && index === 3) {
            placement =
              "lg:col-start-3 lg:row-start-1 lg:row-span-2 h-64 lg:h-full";
          }

          // Single image → hero
          if (images.length === 1) {
            placement = "lg:col-span-3 h-72 lg:h-96";
          }

          return (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${placement}`}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* +Remaining overlay */}
              {isLast && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-2xl font-semibold">
                    +{remaining}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          tabIndex={0}
        >
          <div className="relative w-full h-full max-w-4xl flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="relative w-full aspect-video">
              <Image
                src={images[selectedIndex]}
                alt={`Expanded view ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  <ChevronLeft size={28} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  <ChevronRight size={28} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                  {selectedIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
