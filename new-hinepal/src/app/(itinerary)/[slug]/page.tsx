export const dynamic = "force-dynamic";
import endpoints from "@/constant/endpoints";
import { TPackageDetails } from "@/types/types";
import { get } from "@/utils/request-hander";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchData } from "@/helper/fetch-data";
import { formatSlug } from "@/helper/formatSlug";
import { getBlogSingle } from "@/helper/getBlog";
import { BlogPage } from "@/components/pages/blog-page-single";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calendar,
  Ticket,
  CarFront,
  CircleGauge,
  Clock,
  CloudSunRain,
  HomeIcon as House,
  MountainSnow,
} from "lucide-react";
import { DataIcon } from "@/components/molecules/data-icon";
import { SectionNav } from "@/components/organisms/SectionNav";
import TrustBadge from "@/components/molecules/trust-badge";
import { getProxyUrl } from "@/utils/imageProxy";
import ReviewsGroup from "@/components/organisms/reviews";
import FAQSection from "@/components/organisms/itinerary-faq";
import TalkToExpertCard from "@/components/organisms/talk-to-expert-card";
import GallerySlider from "@/components/gallery-slider";
import Image from "next/image";
import TrekkingCard from "@/components/molecules/TrekkingCard";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const slug = params.slug;

  const blog = await getBlogSingle(slug);
  if (blog) {
    return {
      title: blog.title,
      description: blog.description,
      alternates: {
        canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/" + blog.slug,
      },
      keywords: blog.keywords || undefined,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: blog.title,
        description: blog.description,
        images: [
          {
            url: blog.image,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
    };
  }

  const destination = await fetchData(`packages/${slug}`);

  return {
    title:
      destination?.package?.seo?.metaTitle ||
      destination?.title ||
      formatSlug(slug),
    description:
      destination?.package?.seo?.metaDescription || destination?.description,
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_FRONTEND_BASE_URL +
        "/" +
        destination?.package?.slug,
    },
    keywords: destination?.package?.seo?.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    referrer: "origin-when-cross-origin",
    openGraph: {
      title: destination?.seo?.metaTitle || destination?.title,
      description:
        destination?.seo?.metaDescription || destination?.description,
      images: [
        {
          url: destination?.seo?.metaImage || destination?.image,
          width: 800,
          height: 600,
          alt: destination?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: destination?.title,
      description: destination?.description,
      images: [destination?.image],
    },
  };
}

const activites = async ({ params }: { params: Params }) => {
  let details: TPackageDetails = {} as TPackageDetails;
  let relatedProducts: TPackageDetails[] = [] as TPackageDetails[];
  const packages: TPackageDetails[] = [];
  let schema;
  let destinationSlug = "";
  let destinationPackages: any = [];

  const popularTreks = [
    "everest-base-camp-trek",
    "annapurna-base-camp-trek",
    "langtang",
    "annapurna-circuit-trek",
    "manaslu-circuit-trek",
    "ghorepani-poon-hill-trek",
    "mardi-himal-trek",
  ];
  const popularTours = [
    "pokhara-valley-tour",
    "chitwan-national-park-tour",
    "kathmandu-tour-package",
    "pokhara-australian-camp-hike",
    "sarangkot-pokhara-tour",
    "upper-mustang-tour",
  ];

  let blog = await getBlogSingle(params.slug);

  if (blog) {
    schema = {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://hinepaltreks.com/blogs/${blog.slug}`,
      },
      //   @ts-ignore
      headline: blog?.rank_math_meta?.title | blog.title,
      //   @ts-ignore
      description: blog?.rank_math_meta?.description | blog.description,
      image: blog.image,
      author: {
        "@type": "Person",
        name: "Hi Nepal Treks and Expeditions",
      },
      datePublished: blog.date,
      dateModified: blog.updatedAt,
    };
  }

  if (!blog) {
    await get({
      endPoint: endpoints.PACKAGES + "/" + params.slug,
      token: "",
      success: (_, res) => {
        details = res.data.package;
        destinationSlug = res.data.package.destination.slug;
      },
      failure: (message) => {
        notFound();
      },
    });

    await get({
      endPoint: endpoints.PACKAGES,
      // params: { query: params.slug.split("-")[0] },
      token: "",
      success: (message, res) => {
        packages.push(...res.data.packages);
      },
      failure: (message) => {
        console.log(message);
      },
    });
    await get({
      endPoint: endpoints.DESTINATIONS + "/" + destinationSlug,
      token: "",
      success: (mes, res) => {
        destinationPackages.push(...res.data.packages);
      },
      failure: (message) => {
        console.log("error: ", message);
      },
    });
  }

  const filteredTreks: TPackageDetails[] = packages.filter((pkg) =>
    popularTreks.includes(pkg.slug)
  );
  const navigations = [
    { id: "overview", label: "Overview", icon: "LucideEye" },
    { id: "itenary", label: "Itinerary", icon: "LucideList" },
    { id: "packing", label: "Packing", icon: "LucideBackpack" },
    { id: "best-season", label: "Best Seasons", icon: "LucideCloudSunRain" },
    { id: "includes", label: "Includes", icon: "LucideCheck" },
    { id: "excludes", label: "Excludes", icon: "LucideX" },
    { id: "faqs", label: "FAQs", icon: "LucideMessageCircleQuestion" },
  ];

  let itinerarySchema;
  if (!blog) {
    itinerarySchema = details?.seo.schema;
  }

  let fallBackItinerarySchema;
  if (!blog) {
    fallBackItinerarySchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: details.title,
      description: details.description,
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/${details.slug}`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "113",
      },
    };
  }

  const filteredTours: TPackageDetails[] = packages.filter((pkg) =>
    popularTours.includes(pkg.slug)
  );
  const pacakgesToPass: TPackageDetails[] = params.slug.includes("trek")
    ? filteredTreks
    : filteredTours;
  relatedProducts = destinationPackages.filter(
    (pkg: any) => pkg.id !== details.id
  );

  const sectionStyle = "scroll-mt-42 mb-12 p-6  border-b border-gray-300";
  return blog ? (
    <main id="content" className="site-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      ></script>
      <BlogPage blog={blog} />
    </main>
  ) : (
    <main>
      {itinerarySchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            //  @ts-ignore
            __html: JSON.stringify(JSON.parse(itinerarySchema)),
          }}
        ></script>
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            //  @ts-ignore
            __html: JSON.stringify(fallBackItinerarySchema),
          }}
        ></script>
      )}
      {/* <ItineraryPage
        details={details}
        relatedProducts={relatedProducts}
        popularPackages={pacakgesToPass}
      /> */}
      <div className="">
        {/* Section Navigation */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="container py-4 text-left mt-24">
            <h1 className="text-2xl md:text-3xl lg:4xl font-extrabold leading-tight text-shadow-lg drop-shadow-2xl">
              {details.title}
            </h1>
            <div className="">
              <TrustBadge />
            </div>
          </div>
          <Image
            className="md:hidden rounded-sm"
            src={details?.thumbnail}
            height={720}
            width={1080}
            alt={details?.title}
          />
          <Image
            className="hidden md:block rounded-sm"
            src={details?.banner}
            height={720}
            width={1920}
            alt={details?.title}
          />
        </div>
        {/* @ts-ignore */}
        <SectionNav navigations={navigations} />

        <main className="container mx-auto px-4 md:px-6 py-4 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <section className="lg:col-span-2">
            <div className="lg:hidden">
              {/*** VISIBLE IN ALL SCREENS BESIDES LARGE****/}
              <TalkToExpertCard details={details} />
            </div>
            {/* Data Icons Section */}
            <div className="mt-4 bg-green-50 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 p-6 bg-light-blue-bg rounded-lg shadow-sm">
              {details?.title && (
                <DataIcon
                  icon={MountainSnow}
                  k="Destination"
                  v={details.title}
                />
              )}
              {details?.duration && (
                <DataIcon
                  icon={Clock}
                  k="Duration"
                  v={details.duration + " Days"}
                />
              )}
              {details?.tripGrade && (
                <DataIcon
                  icon={CircleGauge}
                  k="Trip Grade"
                  v={details.tripGrade ?? "-"}
                />
              )}
              {details?.endAt && (
                <DataIcon
                  icon={Calendar}
                  k="Start/End"
                  v={details.startFrom + "/" + details.endAt}
                />
              )}
              {details?.bestSeason && (
                <DataIcon
                  icon={CloudSunRain}
                  k="Best Seasons"
                  v={details.bestSeason ?? "All Year"}
                />
              )}
              {details?.transportation && (
                <DataIcon
                  icon={CarFront}
                  k="Transport"
                  v={details.transportation ?? "-"}
                />
              )}
              {details?.accommodation && (
                <DataIcon
                  icon={House}
                  k="Accommodation"
                  v={details.accommodation ?? "-"}
                />
              )}
              {details?.permits && (
                <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-icon-bg-green flex items-center justify-center">
                    <Ticket className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-icon-bg-green mb-1">
                      Permits
                    </h5>
                    <p className="text-sm text-gray-700 leading-snug">
                      {details.permits ??
                        "Manaslu Restricted Area Permit (MRAP), Annapurna Conservation Area Permit (ACAP), Manaslu Conservation Area Permit (MCAP)"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Overview Section */}
            {details.overview && (
              <div id="overview" className={sectionStyle}>
                <div
                  className="prose max-w-none marker:text-black marker:!text-xl "
                  dangerouslySetInnerHTML={{ __html: details.overview }}
                ></div>
              </div>
            )}

            {/* Highlights Section */}
            {details.highlights && (
              <div id="highlights" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.highlights }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Altitude Section */}
            {details.altitudeInfo && (
              <div id="altitude" className="scroll-mt-42 mb-12 p-6  rounded-lg">
                <div
                  dangerouslySetInnerHTML={{ __html: details.altitudeInfo }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Itinerary Section */}
            {details.itenary && (
              <div
                id="itenary"
                className="scroll-mt-42 mb-12 p-6 bg-white rounded-lg "
              >
                <div
                  dangerouslySetInnerHTML={{ __html: details.itenary }}
                  className="prose marker:text-black marker:!text-xl max-w-none"
                ></div>
              </div>
            )}

            {/* Packing Details */}
            {details.packing && (
              <div id="packing" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.packing }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Seasons */}
            {details.bestSeasonInfo && (
              <div id="best-season" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.bestSeasonInfo }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Route Overview */}
            {details.routeOverview && (
              <div id="route-overview" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.routeOverview }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Includes */}
            {details.includes && (
              <div id="includes" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.includes }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Excludes */}
            {details.excludes && (
              <div id="excludes" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.excludes }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Sickness and Safety */}
            {details.sicknessAndSaftey && (
              <div id="sicknessAndSafety" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: details.sicknessAndSaftey,
                  }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Travel insurance and regulations */}
            {details.insuranceAndEmergency && (
              <div id="insuranceAndEmergency" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: details.insuranceAndEmergency,
                  }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Permits and regulations */}
            {details.permitsAndRegulations && (
              <div id="permitsAndRegulations" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: details.permitsAndRegulations,
                  }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Short itinerary */}
            {details.shortTrekInfo && (
              <div id="shortTrekInfo" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.shortTrekInfo }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Why trek */}
            {details.whyChooseThisPackage && (
              <div id="whyChooseThisPackage" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: details.whyChooseThisPackage,
                  }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Cost Breakdown */}
            {details.priceBreakDown && (
              <div id="priceBreakdown" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.priceBreakDown }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Booking Info */}
            {details.bookingInfo && (
              <div id="bookingInfo" className={sectionStyle}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.bookingInfo }}
                  className="prose max-w-none marker:text-black marker:!text-xl "
                ></div>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-orange-500 text-white p-8 rounded-lg shadow-md text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Interested in this package?
              </h2>
              <Link href={"tel:+977 9856035091"} id="ask-for-cost-btn">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
                  Ask for the Cost Now
                </Button>
              </Link>
            </div>

            {/* Faqs */}
            {details.goodtoknow && <FAQSection html={details.goodtoknow} />}
            {/* {details.goodtoknow && (
              <div
                dangerouslySetInnerHTML={{ __html: details.goodtoknow }}
                className="prose max-w-none marker:text-black marker:!text-xl "
              ></div>
            )} */}
            <ReviewsGroup />

            {/* Gallery */}
            {details?.media && details?.media.length > 0 && (
              <div className="gallery mb-12 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-dark-blue-900 mb-6">
                  Gallery
                </h2>
                <GallerySlider details={details} />
              </div>
            )}
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 px-2 pt-6">
              <div className="hidden lg:block">
                <TalkToExpertCard details={details} />
              </div>
              {relatedProducts && relatedProducts.length > 0 && (
                <h3 className="text-xl font-bold text-dark-blue-900 mb-4 border-t pt-4">
                  Related Itineraries
                </h3>
              )}
              <div className="overflow-scroll h-[35vh]">
                <ul>
                  {!relatedProducts ||
                    (relatedProducts?.length === 0 && (
                      <li className="text-gray-600">
                        No related packages found.
                      </li>
                    ))}
                  {relatedProducts?.map((product) => (
                    <li key={product.slug} className="mb-2">
                      <Link
                        href={`/${product.slug}`}
                        className="text-green-600 hover:underline text-lg flex items-start gap-2 bg-gray-50 rounded-md p-2 "
                      >
                        <img
                          src={getProxyUrl(product.thumbnail)}
                          className="rounded-md"
                          alt={product.title}
                          width={100}
                          height={100}
                        />
                        {product.title.split(":")[0].trim()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </main>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-left px-4">
            Popular{" "}
            {details.slug.includes("trek")
              ? "Treks"
              : details.slug.includes("tour")
              ? "Tours"
              : "Destinations"}
          </h2>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-4">
            {filteredTreks.map((p, k) => {
              return (
                <TrekkingCard
                  key={k}
                  slug={p.slug}
                  image={p.thumbnail}
                  title={p.title}
                  days={p?.duration}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default activites;
