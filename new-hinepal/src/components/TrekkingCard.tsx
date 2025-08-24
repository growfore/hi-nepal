import Image from "next/image"
import "./card.css";

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
                    <p className="trekking-title">{title.split(":")[0]}</p>
                </div>
            </div>
        </div>
    )
}
