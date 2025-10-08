import endpoints from "@/constant/endpoints";
import { TPackages, TSiteInformation } from "@/types/types";
import { get } from "@/utils/request-hander";
import siteStore from "@/zustand/store";
import { Hero } from "@/components/organisms/hero";
import { Partners } from "@/components/organisms/partners";
import Numbers from "@/components/organisms/numbers";
import Gallery from "@/components/Gallery";
import PopularDestinations from "@/components/organisms/popular-destinations";
import PopularPackages from "@/components/organisms/popular-packages";
import BlogHome from "@/components/pages/blogs";
import Team from "@/components/organisms/team";
import AdventureSection from "@/components/organisms/adventure-section";
import { Metadata } from "next";
import { getProxyUrl } from "@/utils/imageProxy";
import Link from "next/link";
import BestShortTreks from "@/components/organisms/best-short-treks";
import TenDaysPlusTreks from "@/components/organisms/10-days-plus-treks";
import PopularTours from "@/components/organisms/popular-tours";
import OneDayTours from "@/components/organisms/one-day-hiking";
import { HomeFAQs } from "@/components/organisms/home-faqs";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Hi Nepal Travels & Treks",
    description:
      "Hi Nepal Travels and Treks is a trusted travel and trekking agency in Nepal, offering unforgettable treks, tours, and adventure holidays with expert guides.",
    keywords: "trekking agency in nepal, travel agency in nepal",
    alternates: {
      canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/",
    },
  };
}

export default async function Home() {
  let siteInformation: TSiteInformation = {} as TSiteInformation;
  siteInformation = siteStore.getState() as TSiteInformation;
  let carousels: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[] = [];

  await get({
    endPoint: endpoints.CAROUSELS + "/home",
    token: "",
    success: (message, res) => {
      carousels = res.data.map((item: any) => ({
        ...item,
        image: getProxyUrl(item.image),
      }));
    },
    failure: (message) => {
      console.log("Carousel Error:", message);
    },
  });

  let packages: TPackages = [];
  await get({
    endPoint: endpoints.PACKAGES,
    token: "",
    success: (message, res) => {
      packages.push(...res.data.packages);
    },
    failure: (message) => {
      console.log(message);
    },
  });

  return (
    <>
      <main id="content" className="site-main">
        <Hero carousels={carousels} />
        <PopularPackages packages={packages} />
        <BestShortTreks packages={packages} />
        <TenDaysPlusTreks packages={packages} />
        <PopularTours packages={packages} />
        <OneDayTours packages={packages} />
        <PopularDestinations />
        <AdventureSection />
        <Numbers />
        <Gallery siteInformation={siteInformation} />
        <Partners />
        <BlogHome />
        <Team />
        <div className="flex justify-center items-center flex-col  md:-mt-16 mb-8">
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            More about Us
          </Link>
        </div>

        <HomeFAQs />
      </main>
    </>
  );
}
