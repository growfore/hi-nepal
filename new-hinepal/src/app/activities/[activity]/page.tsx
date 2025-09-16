import endpoints from "@/constant/endpoints";
import { get } from "@/utils/request-hander";
import { notFound } from "next/navigation";
import TrekkingCard from "@/components/TrekkingCard";
import Link from "next/link";
import { ChevronRight, LucideChevronRight } from "lucide-react";
import { formatSlug } from "@/helper/formatSlug";

export async function generateMetadata({ params }: any): Promise<any> {

    return {
        title: params.activity == "tours" ? "Nepal Tour Packages: Explore Nepal with Multi-day and Nature Tour - Hi Nepal Travel and Treks" : formatSlug(params.activity) + " - Hi Nepal Travel and Treks",
        description: params.activity == "tours"  ? 
        "Explore the best Nepal Tour Packages. Book now for customized itineraries, Himalayan adventures, cultural tours, and unforgettable experiences in Nepal."
        :
        "A leading trekking agency in Nepal offering diverse trekking routes across regions like Annapurna, Everest, Manaslu, Langtang, Dolpo, and Kanchenjunga.",
        keywords: params.activity == "tours" ? "multi-day and day tours " : "trekking, trekking agency in nepal",
        alternates: {
            canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + `/activities/${params.activity}` || " ",
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export default async function ActivitySingle({ params }: { params: Promise<{ activity: string }> }) {
    const activity = (await params).activity;

    let data;
    await get({
        endPoint: endpoints.ACTIVITIES + '/' + activity,
        token: '',
        success: (_, res) => {
            data = res.data?.destinations;
        },
        failure: (message) => {
            notFound();
        },
    });
    return (
        <div className="mt-24 p-4 flex flex-col gap-4">
            {
                activity == "tours" ?
                    <div>
                        <div className="md:min-h-[40vh] mt-24  md:mt-8 flex flex-col p-4  md:p-8 md:items-center border-b-2 border-black">
                            <h1 className="font-bold text-6xl lg:text-9xl">{activity.charAt(0).toUpperCase() + activity.slice(1)}</h1>
                            <p className="text-left md:text-center  mt-4 italic text-xl">
                                Enhance your journey with one of the best sightseeing tours in Nepal. Learn about Nepalese unique culture, traditional rituals, friendly people, and stunning natural and manmade attractions with a planned itinerary to make your trip memorable.
                            </p>
                            <div className="lg:px-32 flex flex-col gap-2 px-4 pt-4">
                                <div className="flex items-center gap-1 text-green-700"><Link href={"/"}>Home</Link><LucideChevronRight /> <Link href={`/activities/${activity}`}>{activity.charAt(0).toUpperCase() + activity.slice(1)} </Link> <ChevronRight /></div>
                            </div>
                        </div>
                    </div> :
                    <div className="md:min-h-[40vh] mt-24  md:mt-8 flex flex-col p-4  md:p-8 md:items-center border-b-2 border-black">
                        <h1 className="font-bold text-6xl lg:text-9xl">{activity.charAt(0).toUpperCase() + activity.slice(1)}</h1>
                        <p className="text-left md:text-center  mt-4 italic text-xl">
                            Embark some of the best trekking in Nepal, exploring the Himalayan regions, strolling around some of the highest peaks such as Mount Everest, Annapurna, Manaslu, and many more.
                        </p>
                        <div className="lg:px-32 flex flex-col gap-2 px-4 pt-4">
                            <div className="flex items-center gap-1 text-green-700"><Link href={"/"}>Home</Link><LucideChevronRight /> <Link href={`/activities/${activity}`}>{activity.charAt(0).toUpperCase() + activity.slice(1)} </Link> <ChevronRight /></div>
                        </div>
                    </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:px-24 p-4">
                {/* @ts-ignore */}
                {data && data?.length > 0 && data.map((d, idx) => {
                    return (
                        <Link key={idx} href={`${activity}/${d.slug}`}>
                            <TrekkingCard slug={d.slug} title={d.name} image={d.image} />
                        </Link>
                    )
                })}
            </div>
            <div>
                {
                    activity == "tours" ?
                        <div className="container mx-auto  text-justify p-8">
                            Experience the diversity of Nepal with the best tour packages make your journey last in your memories forever. From vibrant busy streets to tranquil Himalayan atmosphere, a well planned tour in Nepal makes your journey full of fun and learning.
                            If you wish to explore sacred sites and monasteries, a Nepal spiritual tour is ideal. The tours take you to the religious heart of Nepal, introducing you to Buddhist stupas, Hindu temples, meditation centers, and age-old rituals that mirror the country's spiritual wealth.
                            Nepal Sightseeing Tour combines nature and culture on a tour for all the enthusiasts who always have something to do with digging up historical sites and secret treasures. From UNESCO's World Heritage Sites in the Kathmandu Valley to the picturesque Himalayan vistas in Pokhara, sightseeing tours offer just everything to first-time travelers as well as repeat visitors.
                        </div> :
                        <p className="container mx-auto text-justify p-8">
                            Nepal is home to some of the stunning and popular trekking routes offering unique and diverse natural landscape and mountain views along with raw cultural and traditional significance. Whether you are a beginner or a pro, Nepal provides countless options as per your desire. If you are a beginner or short with time, short trekking in Nepal such as Mardi Himal, Ghorepani Poon Hill, Khumai Danda, and other treks, are what you are looking for.
                            At the same time, for experienced trekkers who are looking for the more challenging and long routes such as Everest Base Camp trek, Annapurna Base Camp trek, Dhaulagiri Circuit trek, etc. are the best trekking packages in Nepal.
                            Choose best trekking in Nepal depending upon your fitness level, interest, time limitations, and cost to make your journey more convenient.
                        </p>
                }
            </div>
        </div>
    )
}