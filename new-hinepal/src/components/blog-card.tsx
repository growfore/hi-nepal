import Image from "next/image"
import Link from "next/link"

type TBlogCardProps = {
    title: string
    excerpt: string
    image: string
    slug: string
}

export default function BlogCard({ title, excerpt, image, slug }: TBlogCardProps) {
    return (
        <Link
            href={`/blogs/${slug}`}
            className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
        >
            <div className="relative h-64 w-full">
                <Image src={image || ""} alt={title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-3">
                <h2
                    className="text-xl font-bold text-gray-900 leading-tight line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                    className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />
            </div>
        </Link>
    )
}
