export const dynamic = "force-dynamic";

import BlogCard from "@/components/molecules/blog-card";
import { getBlogs } from "@/helper/getBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Hi Nepal Travels & Treks",
  description:
    "Explore Hi Nepal Travels and Treks' blogs for expert trekking tips, seasonal guides, hidden gems, and cultural insights to enhance your Nepal adventure.",
  keywords: "trekking tips, blogs",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/blogs",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default async function BlogsPage({
  searchParams,
}: Readonly<{
  searchParams: { page?: string };
}>) {
  const page = Number(searchParams.page) || 1;
  const { posts, totalPages } = await getBlogs(page, 12);

  return (
    <main className="py-10 container mx-auto">
      <section className="p-4 relative bg-cover bg-center flex items-center md:justify-center  mt-24 md:mt-32 border-b border-black">
        <div className="flex flex-col md:items-center">
          <h1 className="font-bold text-4xl lg:text-7xl mb-4">Blogs</h1>
          <p className="text-left md:text-center italic text-xl mt-8">
            Welcome to the Hi Nepal Travels and Treks Blog, where you can
            discover the amazing trekking stories, adventures, and guidelines.
            If you are looking to explore various corners of Nepal, our blogs
            will help you enhance your journey.
          </p>
        </div>
      </section>
      <div className="grid md:grid-cols-3 gap-6 container mx-auto p-4">
        {posts.map((post: any) => (
          <BlogCard
            slug={post.slug}
            title={post.title}
            key={post.id}
            image={post.image}
            imageAlt={post.imageAlt}
            excerpt={post.excerpt}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {page > 1 && (
          <a
            href={`/blogs?page=${page - 1}`}
            className="px-4 py-2 rounded bg-green-200 hover:bg-green-300"
          >
            Previous
          </a>
        )}

        <span className="px-4 py-2 border rounded bg-white">
          Page {page} of {totalPages}
        </span>

        {page < totalPages && (
          <a
            href={`/blogs?page=${page + 1}`}
            className="px-4 py-2 rounded bg-green-200 hover:bg-green-300"
          >
            Next
          </a>
        )}
      </div>
    </main>
  );
}
