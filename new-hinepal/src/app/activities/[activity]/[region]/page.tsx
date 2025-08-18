import TrekkingCard from "@/components/TrekkingCard";
import endpoints from "@/constant/endpoints";
import { get } from "@/utils/request-hander";
import { LucideChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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

    return (
        <div className="mt-24 flex flex-col gap-4 p-4">
            <div className="md:min-h-[40vh] mt-24  md:mt-42 flex flex-col p-4  md:p-8 md:items-center border-b-2 border-black">
                <h1 className="font-bold text-6xl lg:text-9xl">Adventures</h1>
                <p className="text-left italic text-xl">Experience the adventure sport of a lifetime amidst the Himalayas, where every thrill comes with breathtaking views.</p>
            </div>
            <div className="lg:px-32 flex flex-col gap-2">
                <div className="flex gap-1"><Link href={"/"}>Home</Link><LucideChevronRight /> <Link href={`/activities/${activity}`}>{activity?.charAt(0).toUpperCase() + activity.slice(1)} </Link> <LucideChevronRight /> <Link href={`/activities/${activity}/${region}`}> {region.split("-")[0].charAt(0).toUpperCase() + region.split("-")[0].slice(1) + " " + region.split("-")[1].charAt(0).toUpperCase() + region.split("-")[1].slice(1)}</Link></div>
                <h2 className="font-bold text-2xl">{region.charAt(0).toUpperCase() + region.split("-")[0].slice(1) + " " + region.split("-")[1].charAt(0).toUpperCase() + region.split("-")[1].slice(1)}</h2>
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
        </div>
    )
}