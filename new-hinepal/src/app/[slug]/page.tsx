"use server";
import endpoints from '@/constant/endpoints';
import { TPackageDetails } from '@/types/types';
import { get } from '@/utils/request-hander';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import React from 'react';
import GallerySlider from '../_components/gallery-slider';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button'; // Assuming shadcn Button
import Link from 'next/link';
import { Calendar, Ticket, CarFront, CircleGauge, Clock, CloudSunRain, HomeIcon as House, MountainSnow, LucideCircle, LucideHeart, LucideEye, LucideList, LucideBackpack, LucideCloudSunRain, LucideCheck, LucideX, LucideMessageCircleQuestion } from 'lucide-react';
import { DataIcon } from '@/components/data-icon';
import { SectionNav } from '@/components/SectionNav';
import { Metadata } from 'next';
import { fetchData } from '@/helper/fetch-data';
import { formatSlug } from '@/helper/formatSlug';
import TrustBadge from '../_components/trust-badge';

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const slug = await params.slug;
    const destination = await fetchData(`packages/${slug}`);

    return {
        title: destination?.package?.seo?.metaTitle || destination?.title || formatSlug(slug),
        description: destination?.package?.seo?.metaDescription || destination?.description,
        keywords: destination?.package?.seo?.keywords,
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        referrer: 'origin-when-cross-origin',
        openGraph: {
            title: destination?.seo?.metaTitle || destination?.title,
            description: destination?.seo?.metaDescription || destination?.description,
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
            card: 'summary_large_image',
            title: destination?.title,
            description: destination?.description,
            images: destination?.image,
        },
    };
}


const activites = async ({ params }: { params: Params }) => {
    let details: TPackageDetails = {} as TPackageDetails;
    let relatedProducts: TPackageDetails[] = [] as TPackageDetails[];
    await get({
        endPoint: endpoints.PACKAGES + '/' + params.slug,
        token: '',
        success: (_, res) => {
            details = res.data.package;
            relatedProducts = res.data.relatedProducts;
        },
        failure: (message) => {
            notFound();
        },
    });

    const navigations = [
        { id: 'overview', label: 'Overview', icon: "LucideEye" },
        { id: 'itenary', label: 'Itinerary', icon: "LucideList" },
        { id: 'packing', label: 'Packing', icon: "LucideBackpack" },
        { id: 'best-season', label: 'Best Seasons', icon: "LucideCloudSunRain" },
        { id: 'includes', label: 'Includes', icon: "LucideCheck" },
        { id: 'excludes', label: 'Excludes', icon: "LucideX" },
        { id: 'faqs', label: 'FAQs', icon: "LucideMessageCircleQuestion" },
    ]


    return (
        <div>
            <div
                className='relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white'
                style={{ backgroundImage: `url(${details.banner || '/placeholder.svg?height=600&width=1920'})` }}
            >
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='container mx-auto px-4 md:px-6 relative z-10 text-center'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg'>
                        {details.title}
                    </h1>
                    <div className='mt-8'>
                    <TrustBadge />
                    </div>
                </div>
            </div>

            {/* Section Navigation */}
            {/* @ts-ignore */}
            {/* <SectionNav navigations={navigations} /> */}

            <main className='container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12'>
                {/* Main Content Area */}
                <section className='lg:col-span-2'>
                    {/* Data Icons Section */}

                    <div className="bg-green-50 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 p-6 bg-light-blue-bg rounded-lg shadow-sm">
                        {details?.title && <DataIcon icon={MountainSnow} k='Destination' v={details.title} />}
                        {details?.duration && <DataIcon icon={Clock} k='Duration' v={details.duration + " Days"} />}
                        {details?.tripGrade && <DataIcon icon={CircleGauge} k='Trip Grade' v={details.tripGrade ?? "-"} />}
                        {details?.endAt && <DataIcon icon={Calendar} k='Start/End' v={details.startFrom + "/" + details.endAt} />}
                        {details?.bestSeason && <DataIcon icon={CloudSunRain} k='Best Seasons' v={details.bestSeason ?? "All Year"} />}
                        {details?.transportation && <DataIcon icon={CarFront} k='Transport' v={details.transportation ?? "-"} />}
                        {details?.accommodation && <DataIcon icon={House} k='Accommodation' v={details.accommodation ?? "-"} />}
                        {details?.permits &&
                            <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                <div className='flex-shrink-0 w-16 h-16 rounded-full bg-icon-bg-green flex items-center justify-center'>
                                    <Ticket className='w-8 h-8 text-green-700' />
                                </div>
                                <div>
                                    <h5 className='text-base font-bold text-icon-bg-green mb-1'>Permits</h5>
                                    <p className='text-sm text-gray-700 leading-snug'>{details.permits ?? "Manaslu Restricted Area Permit (MRAP), Annapurna Conservation Area Permit (ACAP), Manaslu Conservation Area Permit (MCAP)"}</p>
                                </div>
                            </div>
                        }
                    </div>

                    {/* Overview Section */}
                    {details.overview && (
                        <div id='overview' className='mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400'>
                            <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: details.overview }}></div>
                        </div>
                    )}

                    {/* Highlights Section */}
                    {details.highlights && (
                        <div id='highlights' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.highlights }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Altitude Section */}
                    {details.altitudeInfo && (
                        <div id='altitude' className="mb-12 p-6  rounded-lg">
                            <div dangerouslySetInnerHTML={{ __html: details.altitudeInfo }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Itinerary Section */}
                    {details.itenary && (
                        <div id='itenary' className="mb-12 p-6 bg-white rounded-lg ">
                            <div dangerouslySetInnerHTML={{ __html: details.itenary }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Packing Details */}
                    {details.packing && (
                        <div id='packing' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.packing }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Seasons */}
                    {details.bestSeasonInfo && (
                        <div id='best-season' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.bestSeasonInfo }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Route Overview */}
                    {details.routeOverview && (
                        <div id='route-overview' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.routeOverview }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Includes */}
                    {details.includes && (
                        <div id='includes' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.includes }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Excludes */}
                    {details.excludes && (
                        <div id='excludes' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.excludes }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Sickness and Safety */}
                    {details.sicknessAndSaftey && (
                        <div id='sicknessAndSafety' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.sicknessAndSaftey }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Travel insurance and regulations */}
                    {details.insuranceAndEmergency && (
                        <div id='insuranceAndEmergency' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.insuranceAndEmergency }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Permits and regulations */}
                    {details.permitsAndRegulations && (
                        <div id='permitsAndRegulations' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.permitsAndRegulations }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Short itinerary */}
                    {details.shortTrekInfo && (
                        <div id='shortTrekInfo' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.shortTrekInfo }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Why trek */}
                    {details.whyChooseThisPackage && (
                        <div id='whyChooseThisPackage' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.whyChooseThisPackage }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Cost Breakdown */}
                    {details.priceBreakDown && (
                        <div id='priceBreakdown' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.priceBreakDown }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Booking Info */}
                    {details.bookingInfo && (
                        <div id='bookingInfo' className="mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400">
                            <div dangerouslySetInnerHTML={{ __html: details.bookingInfo }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className='bg-orange-500 text-white p-8 rounded-lg shadow-md text-center mb-12'>
                        <h2 className='text-3xl font-bold mb-4'>Interested in this package?</h2>
                        <Link href={"tel:+977 9856035091"} id="ask-for-cost-btn">
                            <Button className='bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full'>
                                Ask for the Cost Now
                            </Button>
                        </Link>
                    </div>

                    {/* Faqs */}
                    {details.goodtoknow && (
                        <div id='faqs' className="mb-12 p-6 bg-white rounded-lg shadow-md">
                            <div dangerouslySetInnerHTML={{ __html: details.goodtoknow }} className="prose max-w-none"></div>
                        </div>
                    )}

                    {/* Gallery */}
                    {details?.media && details?.media.length > 0 &&
                        <div className="gallery mb-12 p-6 bg-white rounded-lg shadow-md">
                            <h2 className='text-3xl font-bold text-dark-blue-900 mb-6'>Gallery</h2>
                            <GallerySlider details={details} />
                        </div>
                    }
                </section>

                {/* RIGHT SIDEBAR */}
                <aside className='lg:col-span-1'>
                    <div className='sticky top-24 p-6 bg-white rounded-lg shadow-md'>
                        <div className='booking-details text-center mb-8'>
                            <Image
                                src={details.thumbnail || '/placeholder.svg?height=150&width=250&query=package thumbnail'}
                                alt={details.title || 'Package thumbnail'}
                                width={250}
                                height={150}
                                className='w-full h-auto object-cover rounded-md mb-4'
                            />
                            <p className='text-xl font-bold text-dark-blue-900 mb-4'>
                                <strong>{details.title.split(":")[0]}</strong>
                            </p>
                            <Link href="/booking">
                                <Button className='w-full bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 text-lg font-semibold rounded-md'>
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                        <div className="suggested-posts">
                            {relatedProducts && relatedProducts.length > 0 &&
                                <h3 className='text-2xl font-bold text-dark-blue-900 mb-4 border-t pt-4'>Related Packages</h3>
                            }
                            <ul>
                                {!relatedProducts || relatedProducts?.length === 0 &&
                                    (
                                        <li className='text-gray-600'>No related packages found.</li>
                                    )}
                                {relatedProducts?.map((product) => (
                                    <li key={product.slug} className='mb-2'>
                                        <Link href={`/${product.slug}`} className='text-blue-600 hover:underline text-lg'>
                                            {product.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default activites;
