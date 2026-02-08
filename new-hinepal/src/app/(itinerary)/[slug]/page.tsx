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
    return {
      title: blog.metaTitle,
      description: blog.description,
      alternates: {
        canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/" + blog.slug,
      },
      keywords: blog.keywords || undefined,
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
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

  if (blog) {
    return (
      <div id="content" className="site-main">
        <header>
          <Script
            strategy="lazyOnload"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          ></Script>
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
    { id: "includes", label: "Includes", icon: "LucideCheck" },
    { id: "excludes", label: "Excludes", icon: "LucideX" },
    { id: "itinerary", label: "Itinerary", icon: "LucideList" },
    { id: "packing", label: "Packing", icon: "LucideBackpack" },
    // { id: "permitsAndRegulations", label: "Permits", icon: "LucideTicket" },
    { id: "best-season", label: "Best Seasons", icon: "LucideCloudSunRain" },
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
        reviewCount: "122",
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

  const sectionStyle = "scroll-mt-42 mb-8 py-2 border-b border-gray-300";

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
          <div className="container py-1 md:py-4 text-left">
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
  prose-h1:text-2xl md:prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 
  prose-h2:text-xl md:prose-h2:text-3xl prose-h2:mt-6 prose-h2:mb-2 prose-h2:font-bold prose-h2:text-[#008000]!
  prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-1
  prose-p:text-lg!
  container mx-auto px-4 py-4 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Main Content Area */}
          <section className="lg:col-span-2">
            <div className="lg:hidden">
              {/*** VISIBLE IN ALL SCREENS BESIDES LARGE****/}
              <TalkToExpertCard details={details} />
            </div>
            {/* Data Icons Section */}
            <div className="bg-green-50 grid sm:grid-cols-2 lg:grid-cols-3  gap-4 mb-12 p-6 bg-light-blue-bg rounded-lg shadow-sm">
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
                  <p className="text-base font-bold text-icon-bg-green mb-1">
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
                dangerouslySetInnerHTML={{ __html: details.overview }}
              ></div>
            )}

            {/* Highlights Section */}
            {details.highlights && (
              <div
                id="highlights"
                dangerouslySetInnerHTML={{ __html: details.highlights }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none -mt-12",
                  "prose-ul:list-none prose-ul:pl-0 prose-ul:ml-0",
                  "prose-li:relative prose-li:pl-6 prose-li:ml-0",
                  "prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-0.1",
                  "prose-li:before:content-['■'] prose-li:before:text-orange-600",
                )}
              ></div>
            )}

            {/* Short itinerary */}
            {details.shortTrekInfo && (
              <div
                id="shortTrekInfo"
                dangerouslySetInnerHTML={{ __html: details.shortTrekInfo }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
                )}
              ></div>
            )}

            {/* Why trek */}
            {details.whyChooseThisPackage && (
              <div
                id="whyChooseThisPackage"
                dangerouslySetInnerHTML={{
                  __html: details.whyChooseThisPackage,
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
                )}
              ></div>
            )}

            {/* Includes */}
            {details.includes && (
              <div
                id="includes"
                dangerouslySetInnerHTML={{ __html: details.includes }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none -mt-12",
                  "prose-ul:list-none prose-ul:pl-0",
                  "prose-li:pl-6 prose-li:relative",
                  "prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-1",
                  "prose-li:before:content-['✔'] prose-li:before:text-green-600",
                )}
              ></div>
            )}

            {/* Excludes */}
            {details.excludes && (
              <div
                id="excludes"
                dangerouslySetInnerHTML={{ __html: details.excludes }}
                className={cn(
                  "prose max-w-none -mt-12",
                  "prose-ul:list-none prose-ul:pl-0 prose-ul:ml-0",
                  "prose-li:relative prose-li:pl-6 prose-li:ml-0",
                  "prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-0.2",
                  "prose-li:before:content-['✕'] prose-li:before:text-red-500 prose-li:before:font-semibold",
                )}
              ></div>
            )}

            {/* Itinerary Section */}
            {details.itenary && (
              <div
                id="itinerary"
                dangerouslySetInnerHTML={{ __html: details.itenary }}
                className={cn(
                  sectionStyle,
                  "prose marker:text-black marker:text-xl! max-w-none -mt-4",
                )}
              ></div>
            )}

            {/* Customize Trip */}
            <CustomizeTrip packageName={details?.title?.split(":")[0]} />

            {/* Packing Details */}
            {details.packing && (
              <div
                id="packing"
                dangerouslySetInnerHTML={{ __html: details.packing }}
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

            {/* Permits and regulations */}
            {details.permitsAndRegulations && (
              <div
                id="permitsAndRegulations"
                dangerouslySetInnerHTML={{
                  __html: details.permitsAndRegulations,
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
                )}
              ></div>
            )}

            {/* Sickness and Safety */}
            {details.sicknessAndSaftey && (
              <div
                dangerouslySetInnerHTML={{
                  __html: details.sicknessAndSaftey,
                }}
                id="sicknessAndSafety"
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
                )}
              ></div>
            )}

            {/* Cost Breakdown */}
            {details.priceBreakDown && (
              <div
                id="priceBreakdown"
                dangerouslySetInnerHTML={{ __html: details.priceBreakDown }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
                )}
              ></div>
            )}

            {/* REVIEWS */}
            <ReviewsGroup />

            {/* Final Thoughts */}
            {details.bookingInfo && (
              <div
                id="bookingInfo"
                dangerouslySetInnerHTML={{ __html: details.bookingInfo }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl!",
                )}
              ></div>
            )}

            {/* Seasons */}
            {details.bestSeasonInfo && (
              <div
                id="best-season"
                dangerouslySetInnerHTML={{ __html: details.bestSeasonInfo }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
                )}
              ></div>
            )}

            {/* Altitude Section */}
            {details.altitudeInfo && (
              <div
                id="altitude"
                dangerouslySetInnerHTML={{ __html: details.altitudeInfo }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
                )}
              ></div>
            )}

            {/* Route Overview */}
            {details.routeOverview && (
              <div
                id="route-overview"
                dangerouslySetInnerHTML={{ __html: details.routeOverview }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
                )}
              ></div>
            )}

            {/* ADDITIONAL INFO: Travel insurance and regulations */}
            {details.insuranceAndEmergency && (
              <div
                id="insuranceAndEmergency"
                dangerouslySetInnerHTML={{
                  __html: details.insuranceAndEmergency,
                }}
                className={cn(
                  sectionStyle,
                  "prose max-w-none marker:text-black marker:text-xl! -mt-16",
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
                <Button>Ask for the Cost Now</Button>
              </Link>
            </div>

            {/* Faqs */}
            <div id="faqs">
              {details.goodtoknow && <FAQSection html={details.goodtoknow} />}
            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="lg:col-span-1 sticky top-12  px-2 pt-6">
              <div className="hidden lg:block">
                <TalkToExpertCard details={details} />
              </div>
              {relatedProducts && relatedProducts.length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-dark-blue-900 mb-4 border-t pt-4">
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
                        <li key={product.slug} className="mb-2">
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
            {filteredTreks.map((p, k) => {
              return (
                <TrekkingCard
                  activity={true}
                  key={p.slug}
                  slug={p.slug}
                  image={p.thumbnail}
                  title={p.title}
                  days={p?.duration}
                />
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export default Activities;
