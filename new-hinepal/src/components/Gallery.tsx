import React from "react";
import { TSiteInformation } from "@/types/types";
import Image from "next/image";

const Gallery = ({
  siteInformation,
}: {
  siteInformation?: TSiteInformation;
}) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-8">
            <div className="">
              <p className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
                OUR TOUR GALLERY
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2">
                {siteInformation?.about?.title ?? "Explore Our Gallery"}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                Hi Nepal Travels & Treks Pvt. Ltd., the leading tours and travel
                agency in Pokhara, Nepal with over 20 years of experience,
                offers unforgettable trekking, adventure, and tour experiences
                across the country. From Nepal Everest Base Camp and Annapurna
                region treks to cultural tours around Pokhara and Kathmandu, our
                expert guides ensure seamless and customized travel experiences.
                <br/>
                <br/>
                As a trusted travel and trekking agency in Nepal, we provide
                breathtaking mountain trails, adventure activities, and the best
                sightseeing destinations, making your Nepal journey truly
                unforgettable.
              </p>
            </div>
          </div>

          {/* Right Column: Grid of Smaller Images */}
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <figure className="rounded-xl overflow-hidden shadow-lg h-[250px]">
                <Image
                  height={250}
                  width={300}
                  className="w-full h-full object-cover"
                  // @ts-ignore
                  src={siteInformation?.about?.image2 ?? ""}
                  alt="home page gallery image"
                />
              </figure>
              <figure className="rounded-xl overflow-hidden shadow-lg h-[250px]">
                <Image
                  height={250}
                  width={300}
                  // @ts-ignore
                  src={siteInformation?.about?.image3 ?? ""}
                  alt="home page gallery image"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
            <div className="">
              <figure className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                <Image
                  height={400}
                  width={700}
                  className="w-full h-full object-cover"
                  // @ts-ignore
                  src={siteInformation?.about?.image4 ?? ""}
                  alt="home page gallery image"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
