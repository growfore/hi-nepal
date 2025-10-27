import endpoints from "@/constant/endpoints";
import { TPackages, TSiteInformation } from "@/types/types";
import { get } from "@/utils/request-handler";
import siteStore from "@/zustand/store";
import { Partners } from "@/components/organisms/partners";
import Numbers from "@/components/organisms/numbers";
import Gallery from "@/components/Gallery";
import PopularDestinations from "@/components/organisms/popular-destinations";
import PopularPackages from "@/components/organisms/popular-packages";
import BlogHome from "@/components/pages/blogs";
import Team from "@/components/organisms/team";
import AdventureSection from "@/components/organisms/adventure-section";
import { Metadata } from "next";
import Link from "next/link";
import BestShortTreks from "@/components/organisms/best-short-treks";
import TenDaysPlusTreks from "@/components/organisms/10-days-plus-treks";
import PopularTours from "@/components/organisms/popular-tours";
import OneDayTours from "@/components/organisms/one-day-hiking";
import { HomeFAQs } from "@/components/organisms/home-faqs";
import NewHero from "@/components/organisms/new-hero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Tours and Travels | Nepal Trekking, Tours & Adventure",
    description: "Plan your dream Nepal trip with our local experts (20+ yrs). We offer guided Himalayan treks, cultural tours in Kathmandu & Pokhara, and thrilling adventure sports.";
    keywords: "trekking agency in nepal, travel agency in nepal",
    alternates: {
      canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/",
    },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export default async function Home() {
  let siteInformation: TSiteInformation = {} as TSiteInformation;
  siteInformation = siteStore.getState() as TSiteInformation;
  let packages: TPackages = [];

  await get({
    endPoint: endpoints.PACKAGES,
    token: "",
    success: (msg, res) => {
      packages.push(...res.data.packages);
    },
    failure: (msg) => {
      return msg;
    },
  });

  return (
    <main id="content" className="site-main">
      <NewHero packages={packages} />
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
          className="inline-flex items-center justify-center px-8 py-4 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
        >
          More about Us
        </Link>
      </div>
      <HomeFAQs />
    </main>
  );
}
