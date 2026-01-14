import { TPackage } from "@/types/types";
import dynamic from "next/dynamic";
import Image from "next/image";

const SearchBox = dynamic(() => import("../molecules/search-box"), {
  ssr: false,
});

export default function NewHero({
  minimalPackages = [],
}: Readonly<{
  minimalPackages: TPackage[];
}>) {
  return (
    <section className="relative p-2   flex flex-col items-center justify-center text-center text-white h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 -z-10  overflow-hidden">
        <Image
          height={720}
          width={480}
          placeholder="blur"
          blurDataURL="/assets/hinepal-image-placeholder.webp"
          src="/assets/mount-everest.webp"
          alt="Mount Everest Image"
          className="w-full h-full object-cover"
          priority
        />
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

      <SearchBox packages={minimalPackages} />
    </section>
  );
}
