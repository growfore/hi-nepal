import Link from "next/link";
import AdventureCard from "@/components/molecules/adventure-card";
import HLinkComp from "../atoms/link-component";

export default function AdventureSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <p className='text-orange-500 text-sm font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              EXPLORE THRILLING ADVENTURES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2">
              Thrilling Adventure Sports in Nepal
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Experience heart-pounding{" "}
              <HLinkComp
                text="adventure activities in Nepal"
                href="https://hinepaltreks.com/adventure"
              />
              with Hi Nepal Travels & Treks. From white-water rafting,
              paragliding, and bungee jumping to zip-lining and rock climbing,
              we bring you the ultimate thrill and excitement in the heart of
              the Himalayas.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AdventureCard
              image="/assets/bungee.webp"
              text="Bungee"
              link="/adventure#bungee"
            />
            <AdventureCard
              image="/assets/paragliding.webp"
              text="Paragliding"
              link="/adventure#paragliding"
            />
            <AdventureCard
              image="/assets/zipline.webp"
              text="Zipline"
              link="/adventure#zipline"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/adventure"
              prefetch={false}
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
            >
              Explore all Available Adventures
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
