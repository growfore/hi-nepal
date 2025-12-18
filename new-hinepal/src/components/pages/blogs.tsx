import BlogCard from "@/components/molecules/blog-card";
import { getBlogs } from "@/helper/getBlog";
import Link from "next/link";

const BlogHome = async () => {
  const blogs = await getBlogs(1, 6);
  const posts = blogs.posts;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center mb-4">
              <p className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
                from our blog
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold  leading-tight">
              Our Recent Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest news and updates from our blog. Check out our blog for
              insights and stories.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
