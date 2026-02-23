export const dynamic = "force-static";
export const revalidate = 3600;
import endpoints from "@/constant/endpoints";
import { TPackageDetails } from "@/types/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Metadata } from "next";
import { fetchData } from "@/helper/fetch-data";
import { get } from "@/utils/request-handler";
import { getBlogSingle, getBlogs } from "@/helper/getBlog";
import { formatSlug } from "@/helper/formatSlug";
import { BlogPage } from "@/components/pages/blog-page-single";
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
import FAQSection from "@/components/organisms/itinerary-faq";
import Image from "next/image";
import TrekkingCard from "@/components/molecules/TrekkingCard";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import dynamicImport from "next/dynamic";
import { placeholderImage } from "@/utils/placeholder-image";
import { rubik } from "@/utils/fonts";
import { cleanEditorHtml, unwrapSpans } from "@/utils/cleanEditorHtml";
import PackageCard from "@/components/molecules/package-card";
import { parseRankMathHead } from "@/helper/parse-rankmath";
const ImageGallery = dynamicImport(() => import("@/components/iti-gallery"));
const TalkToExpertCard = dynamicImport(
  () => import("@/components/organisms/talk-to-expert-card"),
);
const CustomizeTrip = dynamicImport(
  () => import("@/components/organisms/customize-my-trip"),
);
const SectionNav = dynamicImport(
  () => import("@/components/organisms/SectionNav"),
);
const ReviewsGroup = dynamicImport(
  () => import("@/components/organisms/reviews"),
);
const TrustBadge = dynamicImport(
  () => import("@/components/molecules/trust-badge"),
);

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const slug = params.slug;

  const blog = await getBlogSingle(slug);
  if (blog) {
    const seo = parseRankMathHead(blog.rankMathHead);
    return {
      title: seo.title || seo.ogTitle || blog.title || "",
      description: seo.description || seo.ogDescription || "",
      alternates: {
        canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/" + blog.slug,
      },
      keywords: seo.keywords || undefined,
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
      openGraph: {
        title: seo.ogTitle || blog.title,
        description: seo.ogDescription,
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
  } else {
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
      keywords: destination?.package?.seo?.metaKeywords,
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
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
}

export async function generateStaticParams() {
  try {
    const res = await fetch(endpoints.PACKAGES, { next: { revalidate: 3600 } });
    const packagesData = await res.json();
    const packagesList =
      packagesData?.data?.packages || packagesData?.packages || [];

    const blogData = await getBlogs(1, 200);
    const blogPosts = blogData?.posts || [];

    const seen = new Set<string>();
    const params: { slug: string }[] = [];

    packagesList.forEach((p: any) => {
      if (p?.slug && !seen.has(p.slug)) {
        seen.add(p.slug);
        params.push({ slug: p.slug });
      }
    });
    blogPosts.forEach((b: any) => {
      if (b?.slug && !seen.has(b.slug)) {
        seen.add(b.slug);
        params.push({ slug: b.slug });
      }
    });

    return params;
  } catch (e) {
    return [];
  }
}

const Activities = async ({ params }: { params: Params }) => {
  let blog = await getBlogSingle(params.slug);
  let schema;

  if (blog) {
    schema = blog.rankMathHead;
  }

  if (blog) {
    return (
      <div id="content" className="site-main">
        <header>
          {/*<Script
            strategy="lazyOnload"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: schema!,
            }}
          ></Script>*/}
        </header>
        <BlogPage blog={blog} />
      </div>
    );
  }

  let details: TPackageDetails = {} as TPackageDetails;
  let relatedProducts;
  const packages: TPackageDetails[] = [];
  let destinationSlug = "";
  let destinationPackages: any = [];

  const popularTreks: Set<string> = new Set([
    "everest-base-camp-trek",
    "annapurna-base-camp-trek",
    "langtang",
    "annapurna-circuit-trek",
    "manaslu-circuit-trek",
    "ghorepani-poon-hill-trek",
    "mardi-himal-trek",
  ]);

  if (!blog) {
    // get current itinerary details
    await get({
      endPoint: endpoints.PACKAGES + "/" + params.slug,
      token: "",
      enableCaching: true,
      success: (_, res) => {
        details = res.data.package;
        destinationSlug = res.data.package.destination.slug;
      },
      failure: (message) => {
        return notFound();
      },
    });

    // get  packages to filter the popular ones
    await get({
      endPoint: endpoints.PACKAGES,
      token: "",
      enableCaching: true,
      success: (message, res) => {
        packages.push(...res.data.packages);
      },
      failure: (message) => {
        return notFound();
      },
    });

    // packages related to this destination
    await get({
      endPoint: endpoints.DESTINATIONS + "/" + destinationSlug,
      token: "",
      enableCaching: true,
      success: (mes, res) => {
        destinationPackages.push(...res.data.packages);
      },
      failure: (message) => {
        console.log("error: ", message);
      },
    });
  }

  const filteredTreks: TPackageDetails[] = packages.filter((pkg) =>
    popularTreks.has(pkg.slug),
  );

  const navigation = [
    { id: "overview", label: "Overview", icon: "LucideEye" },
    { id: "highlights", label: "Highlights", icon: "Sparkles" },
    { id: "itinerary", label: "Itinerary", icon: "LucideList" },
    { id: "includes", label: "Includes", icon: "LucideCheck" },
    { id: "excludes", label: "Excludes", icon: "LucideX" },
    details.routeOverview && {
      id: "route-overview",
      label: "Map",
      icon: "LucideMapPin",
    },
    { id: "best-season", label: "Best Seasons", icon: "LucideCloudSunRain" },
    { id: "packing", label: "Packing", icon: "LucideBackpack" },
    // { id: "permitsAndRegulations", label: "Permits", icon: "LucideTicket" },
    { id: "faqs", label: "FAQs", icon: "LucideMessageCircleQuestion" },
  ];

  let itinerarySchema;
  let fallBackItinerarySchema;

  if (!blog) {
    itinerarySchema = details?.seo?.schema;
  }

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
        reviewCount: "123",
      },
    };
  }

  relatedProducts = destinationPackages.filter(
    (pkg: any) => pkg.id !== details.id,
  );

  let allImages: string[] = [];
  if (details?.media.length > 0) {
    const galleryImages = details?.media?.map((m) => m.url);
    allImages = [details?.thumbnail, ...galleryImages];
  }

  const sectionStyle = "scroll-mt-42 py-4 my-4";

  return (
    <>
      {itinerarySchema ? (
        <Script
          strategy="lazyOnload"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            //  @ts-ignore
            __html: JSON.stringify(JSON.parse(itinerarySchema)),
          }}
        ></Script>
      ) : (
        <Script
          strategy="lazyOnload"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            //  @ts-ignore
            __html: JSON.stringify(fallBackItinerarySchema),
          }}
        ></Script>
      )}
      <>
        <div className="container mx-auto px-4">
          <div
            className={`container py-1 md:py-4 text-left ${rubik.className}!`}
          >
            <h1 className="text-2xl md:text-3xl lg:4xl font-extrabold leading-tight">
              {details.title}
            </h1>
            <TrustBadge />
          </div>
          {details?.media?.length > 1 && <ImageGallery images={allImages} />}
          <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden rounded-sm">
            {details?.media?.length < 1 && (
              <Image
                priority
                placeholder="blur"
                blurDataURL={placeholderImage}
                src={details?.banner}
                alt={details?.bannerImageAlt || details?.title}
                title={details?.bannerImageAlt}
                width={1920}
                height={1080}
                className="w-full h-auto rounded-sm object-contain"
                sizes="
      (max-width: 1920px) 100vw,
      (max-width: 1280px) 90vw,
      (max-width: 1536px) 80vw,
      70vw
    "
              />
            )}
          </div>
        </div>
        {/* @ts-ignore */}
        <SectionNav navigation={navigation} />

        <main
          className="
  prose-headings:text-gray-900 prose-headings:font-bold
  prose-h1:text-2xl md:prose-h1:text-4xl
  prose-h2:text-xl md:prose-h2:text-3xl prose-h2:font-bold prose-h2:text-green-700!
  prose-h3:text-lg md:prose-h3:text-xl prose-h3:text-green-700!
  prose-p:text-lg!
  container mx-auto px-4 py-4  grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Main Content Area */}
          <section className="lg:col-span-2">
            <div className="lg:hidden">
              {/*** VISIBLE IN ALL SCREENS BESIDES LARGE****/}
              <TalkToExpertCard details={details} />
            </div>
            {/* Data Icons Section */}
            <div className="bg-green-50 grid sm:grid-cols-2 lg:grid-cols-3  gap-4 p-6 bg-light-blue-bg rounded-lg shadow-sm">
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
                  v={details.startFrom + "/ " + details.endAt}
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
                <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex flex-col  items-start ">
                  <Ticket />
                  <p className="text-base font-bold text-icon-bg-green ">
                    Permits
                  </p>
                  <p className="text-sm  leading-snug">
                    {details.permits ?? ""}
                  </p>
                </div>
              )}
            </div>
            {/* Overview Section */}
            {details.overview && (
              <div
                id="overview"
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.overview)),
                }}
              ></div>
            )}
            {/* Highlights Section */}
            {details.highlights && (
              <div
                id="highlights"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.highlights)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none",
                  "prose-ul:list-none prose-ul:pl-0 prose-ul:ml-0",
                  "prose-li:relative prose-li:pl-6 prose-li:ml-0",
                  "prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-0.1",
                  "prose-li:before:content-['■'] prose-li:before:text-orange-600",
                  "border p-4 rounded-md border-dashed bg-orange-50/70",
                )}
              ></div>
            )}
            {/* Cost Breakdown */}
            {details.priceBreakDown && (
              <div
                id="priceBreakdown"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.priceBreakDown)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* Short itinerary */}
            {details.shortTrekInfo && (
              <div
                id="shortTrekInfo"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.shortTrekInfo)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                  "prose-h3:text-green-700!",
                )}
              ></div>
            )}
            {/* Itinerary Section */}
            {details.itenary && (
              <div
                id="itinerary"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.itenary)),
                }}
                className={cn(
                  sectionStyle,
                  "prose marker:text-black marker:text-xl! max-w-none",
                  "prose-h3:text-green-700!",
                )}
              ></div>
            )}
            {/* Call to Action */}
            <div className="flex flex-col bg-green-700  text-white p-4 rounded-sm gap-4">
              <div>
                <p className="text-xl font-bold">Interested in this package?</p>
                <p>
                  Tell us a bit about your plan, and we&apos;ll send you the
                  best offer available.
                </p>
              </div>
              <Link href={"/booking"} className="cursor-pointer">
                <Button aria-label="Ask for the cost Now button">
                  Ask for the Cost Now
                </Button>
              </Link>
            </div>
            {/* Includes */}
            {details.includes && (
              <div
                id="includes"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.includes)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none",
                  "prose-ul:list-none prose-ul:pl-0",
                  "prose-li:pl-6 prose-li:relative",
                  "prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-1",
                  "prose-li:before:content-['✔'] prose-li:before:text-green-600",
                  "bg-green-50/70 border border-green-300 p-4 rounded-md",
                )}
              ></div>
            )}
            {/* Excludes */}
            {details.excludes && (
              <div
                id="excludes"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.excludes)),
                }}
                className={cn(
                  "prose max-w-none",
                  "prose-ul:list-none prose-ul:pl-0 prose-ul:ml-0",
                  "prose-li:relative prose-li:pl-6 prose-li:ml-0",
                  "prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-0.2",
                  "prose-li:before:content-['✕'] prose-li:before:text-red-500 prose-li:before:font-semibold",
                  "bg-rose-50 border border-rose-300 p-4 rounded-md",
                )}
              ></div>
            )}
            {details.routeOverview && (
              <div
                id="route-overview"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.routeOverview)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* Why trek */}
            {details.whyChooseThisPackage && (
              <div
                id="whyChooseThisPackage"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(
                    cleanEditorHtml(details.whyChooseThisPackage),
                  ),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* Customize Trip */}
            <CustomizeTrip packageName={details?.title?.split(":")[0]} />
            {/* Seasons */}
            {details.bestSeasonInfo && (
              <div
                id="best-season"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.bestSeasonInfo)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* Altitude Section */}
            {details.altitudeInfo && (
              <div
                id="altitude"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.altitudeInfo)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* Permits and regulations */}
            {details.permitsAndRegulations && (
              <div
                id="permitsAndRegulations"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(
                    cleanEditorHtml(details.permitsAndRegulations),
                  ),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* Packing Details */}
            {details.packing && (
              <div
                id="packing"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.packing)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none ",
                  "prose-ul:list-none prose-ul:pl-0 prose-ul:ml-0",
                  "prose-li:relative prose-li:pl-6 prose-li:ml-0",
                  "prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-0.2",
                  "prose-li:before:content-['›'] prose-li:before:text-gray-700 prose-li:before:font-semibold",
                )}
              ></div>
            )}
            {/* Sickness and Safety */}
            {details.sicknessAndSaftey && (
              <div
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(
                    cleanEditorHtml(details.sicknessAndSaftey),
                  ),
                }}
                id="sicknessAndSafety"
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* Final Thoughts */}
            {details.bookingInfo && (
              <div
                id="bookingInfo"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(cleanEditorHtml(details.bookingInfo)),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* ADDITIONAL INFO: Travel insurance and regulations */}
            {details.insuranceAndEmergency && (
              <div
                id="insuranceAndEmergency"
                dangerouslySetInnerHTML={{
                  __html: unwrapSpans(
                    cleanEditorHtml(details.insuranceAndEmergency),
                  ),
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}
            {/* Faqs */}
            <div id="faqs">
              {details.goodtoknow && (
                <FAQSection
                  html={unwrapSpans(cleanEditorHtml(details.goodtoknow))}
                />
              )}
            </div>
            {/* REVIEWS */}
            <ReviewsGroup />
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="lg:col-span-1 sticky top-12  px-2 pt-6">
              <div className="hidden lg:block">
                <TalkToExpertCard details={details} />
              </div>
              {relatedProducts && relatedProducts.length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-dark-blue-900  border-t pt-4">
                    Related Itineraries
                  </h3>
                  <div className="overflow-scroll h-[35vh]">
                    <ul>
                      {!relatedProducts ||
                        (relatedProducts?.length === 0 && (
                          <li className="text-gray-600">
                            No related packages found.
                          </li>
                        ))}
                      {relatedProducts?.map((product: any) => (
                        <li key={product.slug}>
                          <Link
                            href={`/${product.slug}`}
                            className="text-green-600 hover:underline text-lg flex items-start gap-2 bg-gray-50 rounded-md p-2 "
                          >
                            <Image
                              src={product.thumbnail}
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
                </>
              )}
            </div>
          </aside>
        </main>
        <div className="container mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-left px-4">
            Popular {details?.slug?.includes("trek") && "Treks"}
            {details?.slug?.includes("tour") ? " Tours" : " Destinations"}
          </h2>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-4">
            {filteredTreks.map((item: any, index) => (
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
        </div>
      </>
    </>
  );
};

export default Activities;
