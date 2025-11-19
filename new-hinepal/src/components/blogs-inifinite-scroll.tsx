"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getBlogs } from "@/helper/getBlog";
import BlogCard from "@/components/molecules/blog-card";

export default function InfiniteScrollingBlogs({ items }: { items: any[] }) {
  const [blogs, setBlogs] = useState(items || []);
  const [page, setPage] = useState(2); // Page 1 already loaded from server
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  useEffect(() => {
    async function loadInitialMeta() {
      const meta = await getBlogs(1, 10);
      setTotalPages(meta.totalPages);
    }
    loadInitialMeta();
  }, []);

  async function loadMore() {
    const res = await getBlogs(page, 10);

    if (!res.posts || res.posts.length === 0) {
      setHasMore(false);
      return;
    }

    setBlogs(prev => [...prev, ...res.posts]);

    // End of pages?
    if (totalPages && page >= totalPages) {
      setHasMore(false);
    } else {
      setPage(prev => prev + 1);
    }
  }

  return (
    <InfiniteScroll
      dataLength={blogs.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4 className="text-center">Loading...</h4>}
      endMessage={
        <p className="text-center">
          <b>No more blogs.</b>
        </p>
      }
    >
      <div className="grid md:grid-cols-3 gap-6 container mx-auto p-4">
        {blogs.map((post: any) => (
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
    </InfiniteScroll>
  );
}
