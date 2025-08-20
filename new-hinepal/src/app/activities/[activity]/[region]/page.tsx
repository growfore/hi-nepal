import TrekkingCard from "@/components/TrekkingCard";
import endpoints from "@/constant/endpoints";
import { formatSlug } from "@/helper/formatSlug";
import { get } from "@/utils/request-hander";
import { LucideChevronRight } from "lucide-react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: Params): Promise<any> {
    return {
        title: formatSlug(params.region) + " - Hi Nepal Travel and Treks",
        description: `Details about ${params.activity} in ${params.region}`,
        alternates: {
            canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + `/activities/${params.activity}/${params.region}` || " ",
        },
    };
}
export default async function RegionPage({ params }: { params: Promise<{ activity: string, region: string }> }) {
    const region = (await params).region;
    const activity = (await params).activity;
    let data;

    await get({
        endPoint: endpoints.DESTINATIONS + '/' + region,
        token: '',
        success: (_, res) => {
            data = res.data?.packages;
        },
        failure: (message) => {
            notFound();
        },
    });

    const linkStyle = "text-green-700"

    return (
        <div className="mt-24 flex flex-col gap-4 p-4">
            <div className="md:min-h-[40vh] mt-12  flex flex-col p-4  md:p-8 md:items-center border-b-2 border-black">
                <h1 className="font-bold text-6xl lg:text-9xl">{formatSlug(region)}</h1>
                {
                    region.includes("everest") &&
                    <p className="text-left md:text-center md:mt-4 italic text-xl">
                        Experience an opportunity to witness the world’s highest mountain, Mount Everest (Sagarmatha Himal), along with other tall snow-capped mountains while trekking through the Everest Region Nepal. Learn the unique ancient Himalayan culture while walking along the stunning landscape of the Everest Region trek.
                    </p>
                }
                {
                    region.includes("annapurna") &&
                    <p className="text-left md:text-center md:mt-4 italic text-xl">
                        Explore some of the popular snow-capped Mountains such as Annapurna I, II, III, IV, Machhapuchhre (Fishtail), Dhaulagiri, and Nilgiri of the Annapurna Region. Along with the opportunity to learn about the cultural significance of authentic villages situated between the mesmerizing landscape vista of Nepal.
                    </p>
                }
                {
                    region.includes("langtang") &&
                    <p className="text-left md:text-center md:mt-4 italic text-xl">
                        Another popular trekking region in Nepal is the Langtang Region. Langtang region trek is a perfect location for the trekkers looking for quiet yet off-the-beaten trekking trails in Nepal.
                    </p>
                }
                {
                    region.includes("manaslu") &&
                    <p className="text-left md:text-center md:mt-4 italic text-xl">
                        Explore the Manaslu region, one of the remote and off-the-beaten trekking regions of Nepal, which is home to the world’s eighth-highest mountain, Mount Manaslu. The unspoiled landscapes, traditional towns, and stunning mountain views in this region make it a one-of-a-kind place to go trekking.
                    </p>
                }
                {
                    region.includes("dolpo") &&
                    <p className="text-left md:text-center md:mt-4 italic text-xl">
                        Discover the Dolpo region, an isolated and mysterious trekking destination within one of Nepal's most remote and little-known areas, lying in the rain shadow of the Dhaulagiri range. Famed for its untamed frontier wilderness, high country, and timeless Tibetan culture, Dolpo offers an unforgettable excursion into one of the least visited areas of the Himalayas.
                    </p>
                }
                {
                    region.includes("multi-days-tour") &&
                    <p className="text-left md:text-center md:mt-4 italic text-xl">
                        Embark on multiday tours in Nepal for a deeper exploration of the country’s breathtaking landscapes, vibrant culture, and adventurous spirit. Unlike short trips, these tours allow travelers to experience Nepal at a slower pace, immersing themselves in both natural beauty and authentic local life. Get an exposure to Nepal's diverse beauty with Planned multi-day tours like
                        <Link className="text-green-700" href={"/upper-mustang-tour"}> Upper Mustang Tour</Link>,
                        <Link className="text-green-700" href={"/rara-lake-tour-nepal"}>Rara Lake Tour</Link>, and
                        <Link className="text-green-700" href={"/ghandruk-village-tour"}>Ghandruk Village Tour</Link>,
                    </p>
                }
                {
                    region.includes("day-tours") &&
                    <p className="text-left md:text-center md:mt-4 italic text-xl">
                        Day tours in Nepal are the perfect way to experience the country’s cultural richness and natural beauty in a short amount of time. Ideal for travelers with limited schedules, the tours like
                        <Link className="text-green-700" href={"/pokhara-valley-tour"} > Pokhara Valley Tour,</Link>
                        <Link className="text-green-700" href={"/world-peace-pagoda"}> World Peace Pagoda Tour, </Link> and
                        <Link className="text-green-700" href={"/sarangkot-pokhara-tour"}> Sarangkot Tour</Link> allow you to explore iconic landmarks, bustling cities, and stunning viewpoints without the need for overnight stays.
                    </p>
                }
                {
                    region.includes("nature-wildlife") &&
                    <p className="text-left md:text-center md:mt-4 italic text-xl">
                        Nepal is a paradise for nature and wildlife enthusiasts, offering diverse ecosystems that range from subtropical forests to alpine meadows and high Himalayan peaks. The country is home to some of the world’s rarest flora and fauna, thriving within its rich landscapes and protected National Parks such as
                        <Link className="text-green-700" href={"/chitwan-national-park-tour"} > Chitwan National Park</Link> and
                        <Link className="text-green-700" href={"/bardiya-national-park-tour"} > Bardiya National Park.</Link>
                    </p>
                }
                <div className="lg:px-32 flex flex-col gap-2 mt-4 text-green-700">
                    <div className="flex gap-1"><Link href={"/"}>Home</Link><LucideChevronRight /> <Link href={`/activities/${activity}`}>{activity?.charAt(0).toUpperCase() + activity.slice(1)} </Link> <LucideChevronRight /> <Link href={`/activities/${activity}/${region}`}> {region.split("-")[0].charAt(0).toUpperCase() + region.split("-")[0].slice(1) + " " + region.split("-")[1].charAt(0).toUpperCase() + region.split("-")[1].slice(1)}</Link></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:px-32">
                {/* @ts-ignore */}
                {data && data?.length > 0 && data?.map((d, idx) => {
                    return (
                        <Link key={idx} href={`/${d.slug}`}>
                            <TrekkingCard slug={d.slug} title={d.title.split(":")[0]} image={d.thumbnail} />
                        </Link>
                    )
                })}
            </div>

            <div className="p-2 md:p-8 lg:p-12">
                {
                    region.includes("everest") &&
                    <p className="text-lg text-justify">
                        The Everest region trek is one of the heavenly paradises on Earth, offering some of the major trekking routes in Nepal, such as the <Link href={"/everest-base-camp-trek"} className={linkStyle}>Everest Base Camp Trek,</Link> the <Link href={"/chola-pass-gokyo-trek"} className={linkStyle}>Everest Cho La Pass Trek,</Link> the <Link className={linkStyle} href={"/gokyo-valley-trek"}>Gokyo Ri Trek,</Link> and the <Link className={linkStyle} href={"/pikey-peak-trek"}>Pikey Peak Trek.</Link>
                        Home to the world’s highest peak, Mount Everest, the Everest region in Nepal, offers tons of adventures to adventure lovers, such as walking to the world’s highest passes to climbing 8000 m+ mountains. Located in the northeastern part of Nepal, the Everest region is home to many snow-capped mountains such as Mount Everest, Lhotse, Makalu, Ama Dablam, and Cho Oyu.
                        The Everest region trekking is not just about hiking to high altitude regions of Nepal, but also about exploring the natural and cultural beauties of Nepal. While in this region, you will have opportunities to closely observe rare wildlife such as the snow leopard, red panda, and Monal. Also, witness the lush and multi-colored Rhododendron forest while the EBC trek in the spring season.
                    </p>
                }
            </div>
        </div>
    )
}