import BlogCard from "@/components/blog-card"
import { fetchData } from "@/helper/fetch-data"
import Image from "next/image"
import Link from "next/link"

const BlogHome = async () => {
  const getBlogs = async () => {
    const res = await fetch('https://blogs.hinepaltreks.com/wp-json/wp/v2/posts?_embed', {
      next: { revalidate: 60 },
    });
    return res.json();
  }
  const posts = await getBlogs();

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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">OUR RECENT POSTS</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest news and updates from our blog. Check out our blog for insights and stories.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0,3).map((post: any) => (
            <Link href={`blogs/${post.slug}`}>
              <BlogCard title={post.title.rendered} excerpt={post.excerpt.rendered} image={post._embedded?.['wp:featuredmedia']?.[0]?.source_url} slug={post.slug} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogHome



function formatRevalidate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formattedDate = new Date(date).toLocaleDateString("en-US", options)
  return formattedDate
}
