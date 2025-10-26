"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type TBlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

export default function BlogCard({
  title,
  excerpt,
  image,
  slug,
}: TBlogCardProps) {
  const router = useRouter();
  return (
    <div>
      <Link
        href={`/${slug}`}
        prefetch={false}
        onMouseEnter={() => router.prefetch(`/${slug}`)}
        className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 h-[420px]"
      >
        <figure className="relative h-64 w-full">
          <Image
            width={1920}
            height={720}
            src={image || ""}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
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
    </div>
  );
}
