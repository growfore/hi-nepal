import { formatRevalidate } from "@/helper/formate";
import Cta from "../cta";
import { TBlog } from "@/types/types";

export function BlogPage({ blog }: { blog: TBlog }) {
    return (
        <section className="pt-32 pb-12 ">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="">
                        {/* Featured Image */}
                        {blog.image && (
                            <div className="aspect-video overflow-hidden mb-8 rounded-md">
                                <img
                                    src={blog.image || "/placeholder.svg"}
                                    alt={blog.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            {/* Article Header */}
                            <header className="mb-8 pb-6 border-b border-gray-200">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight" dangerouslySetInnerHTML={{__html:blog.title}}></h1>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="font-medium">Hi Nepal Team</span>
                                    </div>
                                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                    <time className="text-gray-500">{formatRevalidate(blog.date)}</time>
                                </div>
                            </header>

                            {/* Article Content */}
                            <article
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                                className="
  prose prose-lg max-w-none
  prose-headings:text-gray-900 prose-headings:font-bold

  prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
  prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-2
  prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-1

  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:mt-0

  prose-a:text-green-600 prose-a:no-underline hover:prose-a:text-green-700 hover:prose-a:underline

  prose-strong:text-gray-900 prose-strong:font-semibold

  prose-ul:my-2 prose-ol:my-2
  prose-li:text-gray-700 prose-li:mb-1

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
    )
}