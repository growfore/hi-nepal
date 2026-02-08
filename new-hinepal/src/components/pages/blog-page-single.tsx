import { formatRevalidate } from "@/helper/formate";
import Cta from "@/components/organisms/cta";
import { TBlog } from "@/types/types";
import Image from "next/image";
import { LucideUser } from "lucide-react";

export function BlogPage({ blog }: Readonly<{ blog: TBlog }>) {
  return (
    <section className="pt-4 pb-12 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="">
            {/* Featured Image */}
            {blog.image && (
              <div className="mb-8 rounded-md">
                <Image
                  src={blog.image}
                  alt={blog?.imageAlt || blog.title || ""}
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-sm object-contain"
                  sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 90vw,
      (max-width: 1536px) 80vw,
      70vw
    "
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div className="p-1 md:p-12">
              {/* Article Header */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <h1
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: blog.title }}
                ></h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center p-2">
                      <LucideUser className="text-white" />
                    </div>
                    <span className="font-medium">Hi Nepal Team</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <time className="text-gray-500">
                    {formatRevalidate(blog.date)}
                  </time>
                </div>
              </div>

              {/* Article Content */}
              {/* // prose-headings:text-gray-900 prose-headings:font-bold */}
              <article
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="
  prose max-w-none
  prose-h1:text-[32px] prose-h1:mb-6 prose-h1:mt-8
  prose-h2:text-[24px] prose-h2:mt-6 prose-h2:mb-2 prose-h2:font-bold
  prose-h3:text-[20px] prose-h3:mt-4 prose-h3:mb-1
  prose-h4:text-[18px]
  prose-h5:text-[16px]
  prose-p:leading-relaxed prose-p:mb-4 prose-p:mt-0
  prose-a:text-green-600 prose-a:no-underline hover:prose-a:text-green-700 hover:prose-a:underline
  prose-strong:text-normal prose-strong:font-semibold
  prose-ul:my-2 prose-ol:my-2
  prose-li:mb-1 prose-li:marker:text-green-700
  prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
  prose-img:rounded-lg prose-img:my-6
  prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
"
              />
            </div>
          </div>
          <Cta />
        </div>
      </div>
    </section>
  );
}
