import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import HLinkComp from "../atoms/link-component";
const PackageCard = dynamic(
  () => import("@/components/molecules/package-card"),
  { ssr: false },
);

const BestShortTreks = ({ packages }: { packages: any[] }) => {
  const filteredPackages = packages || [];

  return (
    <section className="py-2 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold  leading-tight">
              Best Short Treks in Nepal
            </h2>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Looking for the best yet short trekking options in Nepal? Hi Nepal
              Travels and Treks, a reliable trekking agency in Nepal, based in
              Pokhara, offers well-planned itineraries for some of the most
              pleasing treks in the country, including{" "}
              <HLinkComp comma href="/mardi-himal-trek" text="Mardi Himal" />{" "}
              <HLinkComp
                comma
                href="/ghorepani-poon-hill-trek"
                text="Ghorepani Poon Hill"
              />{" "}
              and
              <HLinkComp href="/kapuche-lake-trek" text="Kapuche Lake Trek" />.
              Explore the beautiful Himalaya range of Nepal with us while
              maximizing your travel experience.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
            {filteredPackages.map((item: any, index) => (
              <PackageCard
                key={item.id}
                item={item}
                destination={{
                  slug: item.destination.slug.split("/")[2],
                  activity: {
                    name: "Trekking",
                    slug: "trekking",
                  },
                }}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center items-center my-12">
            <div className="text-center flex flex-col md:flex-row items-center gap-4 justify-center">
              <Link
                href="/activities/trekking"
                prefetch={false}
                className="uppercase inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-orange-600 text-white font-semibold rounded-full shadow-md  transition-colors duration-300"
              >
                Best Treks in Nepal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestShortTreks;
