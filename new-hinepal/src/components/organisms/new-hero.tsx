"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TPackage } from "@/types/types";
import { useState, useEffect } from "react";
import Link from "next/link";
import useIsMobile from "@/utils/useMobile";
import { Search } from "lucide-react";

export default function NewHero({ packages = [] }: { packages?: TPackage[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPackages, setFilteredPackages] = useState<TPackage[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setShowLoading] = useState(false);

  const isMobile = useIsMobile(768);

  const mobileBgStyle = {
    backgroundImage:
      'url("https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // const sectionStyle = isMobile ? mobileBgStyle : {};

  useEffect(() => {
    const delay = setTimeout(() => {
      const term = searchTerm.trim().toLowerCase();

      if (term.length > 2) {
        setIsSearching(true);
        const filtered = packages.filter((pkg) =>
          pkg.title.toLowerCase().includes(term)
        );
        setFilteredPackages(filtered);
      } else {
        setFilteredPackages([]);
        setIsSearching(false);
      }
    }, 250);

    return () => clearTimeout(delay);
  }, [searchTerm, packages]);

  return (
    <section className="relative p-2 mt-16 md:mt-[94px] flex flex-col items-center justify-center text-center text-white h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/nZmO8B9rRik&t?autoplay=1&start=1046&mute=1&loop=1&playlist=nZmO8B9rRik&t&controls=0&showinfo=0&modestbranding=1"
          title="Nepal Video Background"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        ></iframe>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold  leading-tight">
          Find your adventure in the heart of Himalayas
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl opacity-90">
          Plan your next unforgettable escape — explore the mountains, culture,
          and spirit of Nepal with HI Nepal.
        </p>
      </div>

      {/* Search */}
      <div className="mt-8 w-11/12 md:w-1/2 relative">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white opacity-65 px-6 py-6 md:py-8 text-black text-base md:text-lg shadow-lg placeholder:text-gray-400 focus-visible:ring-green-600 rounded-full"
          placeholder="Search for destinations..."
        />
        <div className="bg-orange-500 rounded-full p-2 md:p-4 text-white absolute top-[4px] md:top-[5px] right-2">
          <Search />
        </div>

        {(isSearching || filteredPackages.length > 0) && (
          <div className="absolute left-0 right-0 mt-1 bg-white rounded-xl shadow-xl max-h-60 overflow-y-auto z-10 text-black">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg, index) => (
                <Link key={index} href={pkg.slug}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left p-4 md:p-6 cursor-pointer hover:bg-green-50"
                    onClick={() => setShowLoading(true)}
                  >
                    {pkg.title.split(":")[0]}
                  </Button>
                </Link>
              ))
            ) : (
              <div className="px-4 py-3 text-gray-600 text-left">
                No results found for <strong>{searchTerm}</strong>
              </div>
            )}
          </div>
        )}
      </div>
      {isLoading && <div className="mt-4">Loading...</div>}
    </section>
  );
}
