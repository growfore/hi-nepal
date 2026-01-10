import { TPackage } from "@/types/types";
import dynamic from "next/dynamic";

const SearchBox = dynamic(() => import("../molecules/search-box"), {
  ssr: false,
});

export default function NewHero({
  minimalPackages = [],
}: Readonly<{
  minimalPackages: TPackage[];
}>) {
  return (
    <section className="relative p-2 mt-16 md:mt-[54px] flex flex-col items-center justify-center text-center text-white h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <img
          src={"/assets/mount-everest.webp"}
          alt=""
          className="object-cover h-[720px] md:hidden"
        />
        <img src="/assets/mount-everest.webp" className="w-full h-full object-cover"/>
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="none"
          poster="/assets/mount-everest.webp"
        >
          <source src="/assets/videos/optimized.webm" type="video/webm" />
        </video> */}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold  leading-tight">
          Find your adventure in the heart of Himalayas
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl opacity-90">
          Plan your next unforgettable escape, explore the mountains, culture,
          and spirit of Nepal with Hi Nepal Travel and Treks.
        </p>
      </div>

      {/* Search (client-only) */}
      <SearchBox packages={minimalPackages} />
    </section>
  );
}
