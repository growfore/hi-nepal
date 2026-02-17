import BlogCard from "@/components/molecules/blog-card";
import PageHeroSection from "@/components/page-hero-section";
import { getBlogs } from "@/helper/getBlog";
import { LucideNewspaper } from "lucide-react";
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
  const { posts, totalPages } = await getBlogs(page, 100);
  return (
    <main className="">
      <PageHeroSection
      icon={LucideNewspaper}
        title="Blogs"
        subtitle="
            Welcome to the Hi Nepal Travels and Treks Blog, where you can
            discover the amazing trekking stories, adventures, and guidelines.
            If you are looking to explore various corners of Nepal, our blogs
            will help you enhance your journey.
      "
      />
      <div className="grid md:grid-cols-3 gap-6 container mx-auto p-4">
        {posts.map((post: any) => (
          <BlogCard
            key={post.id}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            imageAlt={post.imageAlt}
          />
        ))}
      </div>
    </main>
  );
}
