import BlogCard from "@/components/molecules/blog-card";
import { getBlogs } from "@/helper/getBlog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Hi Nepal Travels & Treks",
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
export const dynamic = "force-dynamic";

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const { posts, totalPages } = await getBlogs(page, 6);

  return (
    <main className="py-10 container mx-auto">
      <div className="min-h-[40vh] mt-42 flex flex-col p-4  md:items-center border-b-2 border-black mb-4">
        <h1 className="font-bold text-6xl lg:text-9xl">Blogs</h1>
        <p className="text-left md:text-center italic text-xl mt-8">
          Welcome to the Hi Nepal Travels and Treks Blog, where you can discover
          the amazing trekking stories, adventures, and guidelines. If you are
          looking to explore various corners of Nepal, our blogs will help you
          enhance your journey.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 container mx-auto p-4">
        {posts.map((post: any) => (
          <BlogCard
            slug={post.slug}
            title={post.title}
            key={post.id}
            image={post.image}
            excerpt={post.excerpt}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {page > 1 && (
          <Link
            href={`/blogs?page=${page - 1}`}
            className="px-4 py-2 rounded bg-green-200 hover:bg-green-300"
          >
            Previous
          </Link>
        )}

        <span className="px-4 py-2 border rounded bg-white">
          Page {page} of {totalPages}
        </span>

        {page < totalPages && (
          <Link
            href={`/blogs?page=${page + 1}`}
            className="px-4 py-2 rounded bg-green-200 hover:bg-green-300"
          >
            Next
          </Link>
        )}
      </div>
    </main>
  );
}
