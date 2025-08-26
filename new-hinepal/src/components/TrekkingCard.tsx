import Image from "next/image"
import "./card.css";
import { LucideTimer } from "lucide-react";

type TCardProps = {
    slug: string,
    image: string,
    title: string,
    days?: string | null,
}

export default async function TrekkingCard({ slug, image, title, days }: TCardProps) {
    return (
        <div className="trekking-card-wrapper">
            <div className="trekking-card">
                <div className="trekking-card-image-container">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="trekking-card-image"
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <p className="trekking-title">
                        {days &&
                            <p className="flex items-center justify-center gap-1 p-1 text-lg bg-green-700 px-2 w-fit rounded-md"><LucideTimer/> {days && days.includes(":") ? days : days + " Day(s)"}</p>
                        }
                        {title.split(":")[0]} <br />
                    </p>
                </div>
            </div>
        </div>
    )
}
