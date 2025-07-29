import Link from "next/link"
import Image from "next/image"
import "./card.css";

type TCardProps = {
    slug: string,
    image: string,
    title: string,
}

export default async function TrekkingCard({ slug, image, title }: TCardProps) {
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

                    <div className="trekking-badge">TREKKING</div>

                    <h2 className="trekking-title">{title}</h2>
                </div>
            </div>
        </div>
    )
}
