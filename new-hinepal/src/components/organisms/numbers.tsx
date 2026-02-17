import React from "react";
import {
  LucideUsers,
  LucideMapPin,
  LucideCalendar,
  LucideStar,
  Headset,
} from "lucide-react";
import LazyYouTube from "../lazy-youtube";
import { Badge } from "../ui/badge";

const Numbers = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-center relative">
          {/* Left Column - Video */}
          <div className="relative z-10 lg:h-[600px] flex items-center justify-center p-4 lg:p-0">
            <div className="w-full h-full flex items-center justify-center">
              <LazyYouTube
                videoId="1Wfki2o-adM"
                className="w-[720px] h-80 md:h-[520px]"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="bg-green-600 text-white p-8 md:p-12 lg:p-16 relative z-0 lg:-ml-20 lg:pl-28">
            <div className="mb-8">
              <Badge variant={'secondary'} className="rounded-full px-4 py-2 text-orange-500 font-bold">
                  CALLBACK FOR MORE
              </Badge>
              <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-2">
                GO TRAVEL. DISCOVER. REMEMBER US!!
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed mt-4">
                Discover Nepal with Ni Nepal Travels and Treks Pvt. Ltd.—where
                every journey blends adventure, culture, and comfort. Explore
                more, worry less, travel smart.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <LucideUsers color="white" size={40} />
                </div>
                <div className="">
                  <span className="text-4xl font-bold">2.5K+</span>
                  <span className="block text-sm">Satisfied Clients</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <LucideMapPin color="white" size={40} />
                </div>
                <div className="">
                  <span className="text-4xl font-bold">50+</span>
                  <span className="block text-sm">Destinations Covered</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <LucideCalendar color="white" size={40} />
                </div>
                <div className="">
                  <span className="text-4xl font-bold">20+</span>
                  <span className="block text-sm">Years of Experience</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <LucideStar color="yellow" fill="yellow" size={40} />
                </div>
                <div className="">
                  <span className="text-4xl font-bold">5/5</span>
                  <span className="block text-sm">Average Customer Rating</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 mt-12 max-w-sm mx-auto lg:mx-0 lg:absolute lg:-bottom-16 lg:left-16">
              <div className="shrink-0">
                <Headset color="green" size={40} />
              </div>
              <div className="">
                <p className="text-gray-700 text-sm font-semibold">
                  Our 24/7 Emergency Phone Services
                </p>
                <h3>
                  <a
                    href="tel:+9779856035091"
                    className="text-orange-500 text-xl font-bold"
                  >
                    Call: +977 985-6035091
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
