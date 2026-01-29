import endpoints from "@/constant/endpoints";
import dynamic from "next/dynamic";
import { cached } from "@/utils/serverCache";
import PopularPackages from "@/components/organisms/popular-packages";
import PopularDestinations from "@/components/organisms/popular-destinations";
import AdventureSection from "@/components/organisms/adventure-section";
import { Metadata } from "next";
import Link from "next/link";
import BestShortTreks from "@/components/organisms/best-short-treks";
import TenDaysPlusTreks from "@/components/organisms/10-days-plus-treks";
import PopularTours from "@/components/organisms/popular-tours";
import OneDayTours from "@/components/organisms/one-day-hiking";
import { HomeFAQs } from "@/components/organisms/home-faqs";
import NewHero from "@/components/organisms/new-hero";
import { TPackage } from "@/types/types";
import WhyChooseUsSection from "@/components/organisms/why-choose-us";
const ReviewSection = dynamic(import("@/components/organisms/review-section"));
const Team = dynamic(() => import("@/components/organisms/team"));
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Partners = dynamic(() => import("@/components/organisms/partners"), {
  ssr: false,
});
const Numbers = dynamic(() => import("@/components/organisms/numbers"), {
  ssr: false,
});
const BlogHome = dynamic(() => import("@/components/pages/blogs"), {
  ssr: false,
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Treks & Travel Agency in Pokhara - Treks in Nepal,Bhutan,Tibet",
    description: "At Hi Nepal, a trusted travel agency in Pokhara, we offer unforgettable trekking & adventure tours. Explore Heli Tours, Tibet & Bhutan treks with local experts.",
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
    openGraph: {
      title: "Treks & Travel Agency Pokhara - Treks in Nepal,Bhutan,Tibet",
      description: "At Hi Nepal, a trusted travel agency in Pokhara, we offer unforgettable trekking & adventure tours. Explore Heli Tours, Tibet & Bhutan treks with local experts.",
      images: ['https://hinepaltreks.com/assets/mount-everest.webp'],
    },
    twitter: {
      card: "summary_large_image",
      title: "Treks & Travel Agency Pokhara - Treks in Nepal,Bhutan,Tibet",
      description: "At Hi Nepal, a trusted travel agency in Pokhara, we offer unforgettable trekking & adventure tours. Explore Heli Tours, Tibet & Bhutan treks with local experts.",
      images: ['https://hinepaltreks.com/assets/mount-everest.webp'],
    }
  };
}

export default async function Home() {
  const sitePromise = cached("siteInformation", 3600, async () => {
    try {
      const r = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/site-informations`, { next: { revalidate: 3600 } });
      const j = await r.json();
      return j.data || null;
    } catch (e) {
      console.log("site fetch error", String(e));
      return null;
    }
  });

  const packagesPromise = cached("packages", 3600, async () => {
    try {
      const r = await fetch(endpoints.PACKAGES, { next: { revalidate: 3600 } });
      const j = await r.json();
      return j.data?.packages || [];
    } catch (e) {
      console.log("packages fetch error", String(e));
      return [];
    }
  });

  const [siteInformation, fullPackages] = await Promise.all([
    sitePromise,
    packagesPromise,
  ]);

  const packages = fullPackages.map((p: any) => ({
    id: p.id,
    title: p.title,
    duration: p.duration,
    thumbnail: p.thumbnail,
    destination: p.destination,
    slug: p.slug,
  }));


  const minimalPackages: TPackage[] = packages.map((p: any) => ({
    slug: p.slug,
    title: p.title,
  }));

  const popularTreks = [
    "everest-base-camp-trek",
    "annapurna-base-camp-trek",
    "manaslu-circuit-trek",
    "mardi-himal-trek",
    "annapurna-circuit-trek",
    "kanchenjunga-circuit-trek",
  ];
  const bestShortSlugs = [
    "mardi-himal-trek",
    "ghorepani-poon-hill-trek",
    "kori-trek",
  ];
  const tenDaysPlusSlugs = [
    "kanchenjunga-circuit-trek",
    "annapurna-circuit-trek",
    "dhaulagiri-circuit-trek",
  ];
  const popularToursSlugs = [
    "kathmandu-tour-package",
    "upper-mustang-tour",
    "tilicho-lake-tour",
  ];
  const oneDaySlugs = [
    "pokhara-valley-tour",
    "sarangkot-pokhara-tour",
    "world-peace-pagoda",
  ];

  const filteredPopularPackages = packages
    .filter((pkg: any) => popularTreks.includes(pkg.slug))
    .sort(
      (a: any, b: any) =>
        popularTreks.indexOf(a.slug) - popularTreks.indexOf(b.slug)
    );

  const filteredBestShort = packages
    .filter((pkg: any) => bestShortSlugs.includes(pkg.slug))
    .sort(
      (a: any, b: any) =>
        bestShortSlugs.indexOf(a.slug) - bestShortSlugs.indexOf(b.slug)
    );

  const filteredTenDaysPlus = packages
    .filter((pkg: any) => tenDaysPlusSlugs.includes(pkg.slug))
    .sort(
      (a: any, b: any) =>
        tenDaysPlusSlugs.indexOf(a.slug) - tenDaysPlusSlugs.indexOf(b.slug)
    );

  const filteredPopularTours = packages
    .filter((pkg: any) => popularToursSlugs.includes(pkg.slug))
    .sort(
      (a: any, b: any) =>
        popularToursSlugs.indexOf(a.slug) - popularToursSlugs.indexOf(b.slug)
    );

  const filteredOneDay = packages
    .filter((pkg: any) => oneDaySlugs.includes(pkg.slug))
    .sort(
      (a: any, b: any) =>
        oneDaySlugs.indexOf(a.slug) - oneDaySlugs.indexOf(b.slug)
    );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hinepaltreks.com/#organization",
        "name": "Hi Nepal Travels & Treks Pvt. Ltd.",
        "url": "https://hinepaltreks.com/",
        "logo": "https://hinepaltreks.com/_next/image?url=%2Fassets%2Fhinepal-logo.webp&w=256&q=75",
        "description": "Hi Nepal Travels & Treks is a trusted travel agency in Pokhara, Nepal, offering unforgettable trekking & adventure tours such as Everest Base Camp Trek, Annapurna Circuit Trek, Jungle Safari, Heli Tours, Tibet & Bhutan treks with local experts.",
        "telephone": "+9779856035091",
        "email": "info@hinepaltreks.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Street No. 13, Lakeside",
          "addressLocality": "Pokhara",
          "postalCode": "33700",
          "addressCountry": "NP"
        },
        "sameAs": [
          "https://www.facebook.com/HiNepalTrek",
          "https://www.instagram.com/hinepaltravelsandtreks/",
          "https://x.com/hinepaltreks",
          "https://www.youtube.com/@hinepaltravelstreks800"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://hinepaltreks.com/#website",
        "url": "https://hinepaltreks.com/",
        "name": "Hi Nepal Travels & Treks",
        "publisher": {
          "@id": "https://hinepaltreks.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://hinepaltreks.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "TravelAgency",
        "@id": "https://hinepaltreks.com/#travelagency",
        "name": "Hi Nepal Travels & Treks Pvt. Ltd.",
        "description": "Hi Nepal, a leading travel agency in Pokhara, provides memorable trekking and adventure experiences. Discover Heli Tours, Tibet, Bhutan, and more with expert local guides.",
        "url": "https://hinepaltreks.com/",
        "telephone": "+9779856035091",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Street No. 13, Lakeside",
          "addressLocality": "Pokhara",
          "postalCode": "33700",
          "addressCountry": "NP"
        },
        "image": "https://hinepaltreks.com/_next/image?url=%2Fassets%2Fmount-everest.webp&w=640&q=75",
        "areaServed": "NP",
        "priceRange": "$$"
      },
      {
        "@type": "ItemList",
        "@id": "https://hinepaltreks.com/#popularpackages",
        "name": "Popular Trekking & Tour Packages",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "url": "https://hinepaltreks.com/everest-base-camp-trek" },
          { "@type": "ListItem", "position": 2, "url": "https://hinepaltreks.com/annapurna-base-camp-trek" },
          { "@type": "ListItem", "position": 3, "url": "https://hinepaltreks.com/manaslu-circuit-trek" },
          { "@type": "ListItem", "position": 4, "url": "https://hinepaltreks.com/annpurna-circuit-trek" },
          { "@type": "ListItem", "position": 5, "url": "https://hinepaltreks.com/kathmandu-tour-package" },
          { "@type": "ListItem", "position": 6, "url": "https://hinepaltreks.com/upper-mustang-tour" },
          { "@type": "ListItem", "position": 7, "url": "https://hinepaltreks.com/tilicho-lake-tour" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://hinepaltreks.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best travel agency in Nepal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hi Nepal Travels and Treks Pvt. Ltd. is one of the best trekking & travel agencies in Nepal, offering highest-quality services in tourism for over 20 years."
            }
          },
          {
            "@type": "Question",
            "name": "When is the best time to travel to Nepal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Visiting Nepal is worth it any time of the year. Specifically, Spring (March-May) and Autumn (September-November) are considered the most ideal seasons."
            }
          },
          {
            "@type": "Question",
            "name": "Are there local trekking agencies in Pokhara for the ABC trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Pokhara is a hub for tourism and adventure. Hi Nepal Travels and Treks Pvt. Ltd. is a trusted option for trekking like the Annapurna Base Camp (ABC) trek."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Mount Everest located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mount Everest is located on the border of Nepal and China in the Himalaya region."
            }
          }
        ]
      }
    ]
  }
  return (
    <main id="content" className="site-main">
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </section>
      <NewHero minimalPackages={minimalPackages} />
      <PopularPackages packages={filteredPopularPackages} />
      <WhyChooseUsSection />
      <BestShortTreks packages={filteredBestShort} />
      <TenDaysPlusTreks packages={filteredTenDaysPlus} />
      <ReviewSection />
      <PopularTours packages={filteredPopularTours} />
      <OneDayTours packages={filteredOneDay} />
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
          className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
        >
          More about Us
        </Link>
      </div>
      <HomeFAQs />
    </main>
  );
}
