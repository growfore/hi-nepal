import endpoints from "@/constant/endpoints";
import { TPackages} from "@/types/types";
import { get } from "@/utils/request-handler";
import { Partners } from "@/components/organisms/partners";
import Numbers from "@/components/organisms/numbers";
import Gallery from "@/components/Gallery";
import PopularDestinations from "@/components/organisms/popular-destinations";
import PopularPackages from "@/components/organisms/popular-packages";
import BlogHome from "@/components/pages/blogs";
import { getBlogs } from "@/helper/getBlog";
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
    title: "Best Tours & Trekking Agency in Nepal - Hi Nepal",
    description: "Hi Nepal Travels & Treks offers expert trekking, tours, helicopter flights & adventure packages across Nepal. Book trusted local travel experts today.",
    keywords: "trekking agency in nepal, travel agency in nepal",
    alternates: {
      canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/",
    },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "standard",
      "max-snippet": -1,
    },
  };
}

export default async function Home() {
  // Start server fetches in parallel to reduce TTFB
  const sitePromise = fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/site-informations`, {
    cache: "default",
  }).then((r) => r.json()).then(r => r.data).catch(() => null);

  const packagesPromise = fetch(endpoints.PACKAGES).then((r) => r.json()).then(r => r.data?.packages || []).catch(() => []);

  const blogsPromise = getBlogs(1, 6).catch(() => ({ posts: [] }));

  const [siteInformation, packages, blogsResp] = await Promise.all([
    sitePromise,
    packagesPromise,
    blogsPromise,
  ]);

  const posts = blogsResp?.posts || [];

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
      <BlogHome posts={posts} />
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
