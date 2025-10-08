import Link from "next/link";
import AdventureCard from "@/components/molecules/adventure-card";

export default function AdventureSection() {
  return (
    <section className="py-8  bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <p className='text-orange-500 text-sm font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              EXPLORE THRILLING ADVENTURES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2">
              Nepal Adventure Sports
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Experience top-notch{" "}
              <Link href={"https://hinepaltreks.com/adventure"}>
                adventure sports
              </Link>{" "}
              with Hi Nepal Travels and Treks, one of the reputed Nepal trekking
              companies. From heart-pounding activities like white-water
              rafting, paragliding, and bungee jumping to iconic treks such as{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/everest-base-camp-trek"}
              >
                Everest Base Camp
              </Link>
              ,{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/annapurna-base-camp-trek"}
              >
                Annapurna Base Camp
              </Link>
              , and{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/langtang-valley-trek"}
              >
                Langtang Valley
              </Link>
              , we bring you the ultimate combination of thrill and exploration.
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
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
            >
              Explore all Available Adventures
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
