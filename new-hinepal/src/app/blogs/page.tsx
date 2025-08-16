import BlogCard from "@/components/blog-card";
import { getBlogs } from "@/helper/getBlog";
import Link from "next/link";

export default async function BlogsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page) || 1;
  const { posts, totalPages } = await getBlogs(page, 6);

  return (
    <main className="py-10 container mx-auto">
      <div className="min-h-[40vh] mt-42 flex flex-col p-4  md:items-center border-b-2 border-black mb-4">
        <h1 className="font-bold text-6xl lg:text-9xl">Blogs</h1>
        <p className="text-left italic text-xl">
          Discover amazing trekking adventures and travel stories from the heart of Nepal
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 container mx-auto">
        {posts.map((post: any) => (
          <BlogCard slug={post.slug} title={post.title} key={post.id} image={post.image} excerpt={post.excerpt} />
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
