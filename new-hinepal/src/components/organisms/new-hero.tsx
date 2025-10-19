import { TPackage } from "@/types/types";
import Image from "next/image";
import SearchBox from "../molecules/search-box";

export default function NewHero({ packages = [] }: { packages?: TPackage[] }) {
  return (
    <section className="relative p-2 mt-16 md:mt-[94px] flex flex-col items-center justify-center text-center text-white h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        {/* <iframe
          src="https://www.youtube.com/embed/nZmO8B9rRik?autoplay=1&start=1046&end=1056&mute=1&loop=1&playlist=nZmO8B9rRik&t&controls=0&showinfo=0&modestbranding=1"
          title="Nepal Video Background"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        ></iframe> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="none"
          poster="/mount-everest.webp"
        >
          <source src="/assets/videos/optimized.webm" type="video/webm" />
        </video>

        {/* tablet */}
        {/* <video className="hidden sm:block md:hidden">
          <source src="/assets/videos/hinepal-hero-tablet.mp4" type="video/mp4" />
        </video> */}

        {/* mobile  */}
        {/* <video className="sm:hidden">
          <source src="/assets/videos/hinepal-hero-mobile.mp4" type="video/mp4" />
        </video> */}
        {/* <Image
          src={"/assets/mount-everest.webp"}
          // width={1920}
          // height={720}
          alt="mount everest"
          fill
          className="object-cover"
        /> */}
        {/* <Image src="/assets/mount-everest.webp"
          height={1000}
          width={1500}
          alt="Mount everest"
        /> */}

        <div className="absolute inset-0 bg-black/40" />
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

      {/* Search */}
      <SearchBox packages={packages} />
    </section>
  );
}
