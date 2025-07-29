import endpoints from "@/constant/endpoints";
import { get } from "@/utils/request-hander";
import { notFound } from "next/navigation";
import TrekkingCard from "@/components/TrekkingCard";
import Link from "next/link";
import { ChevronRight, LucideChevronRight } from "lucide-react";

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
        <div className="activity-page">
            <div><Link href={"/"}>Home</Link><LucideChevronRight /> <Link href={`/activities/${activity}`}>{activity.charAt(0).toUpperCase() + activity.slice(1)} </Link> <ChevronRight /></div>
            <h2>{activity.charAt(0).toUpperCase() + activity.slice(1)}s</h2>
            <div className="activity-card-group">
                {/* @ts-ignore */}
                {data && data?.length > 0 && data.map((d, idx) => {
                    return (
                        <Link key={idx} href={`${activity}/${d.slug}`}>
                            <TrekkingCard slug={d.slug} title={d.name} image={d.image} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}