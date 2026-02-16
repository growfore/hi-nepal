import { placeholderImage } from "@/utils/placeholder-image";
import Image from "next/image";
import Link from "next/link";

type TBlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  imageAlt?: string;
};

export default function BlogCard({
  title,
  excerpt,
  image,
  slug,
}: Readonly<TBlogCardProps>) {
  return (
    <div>
      <Link
        href={`/${slug}`}
        className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 h-[420px]"
        prefetch={false}
      >
        <figure className="relative h-64 w-full">
          <Image
            placeholder="blur"
            blurDataURL={placeholderImage}
            width={420}
            height={380}
            src={image || ""}
            alt={title}
            className="w-full h-full object-cover"
            priority={false}
          />
        </figure>
        <div className="p-6 flex flex-col gap-3">
          <p
            className="text-xl font-bold text-gray-900 leading-tight line-clamp-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="text-gray-600 text-sm leading-relaxed line-clamp-3"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </Link>
    </div>
  );
}
