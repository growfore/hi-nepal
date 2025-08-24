export async function getBlogs(page = 1, perPage = 6) {
  const res = await fetch(
    `https://blogs.hinepaltreks.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`, {cache: "no-store"}
  );

  const total = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  const data = await res.json();

  const posts = data.map((post: any) => ({
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    date: post.date,
    image: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  }));

  return {
    posts,
    total: Number(total),
    totalPages: Number(totalPages),
  };
}


export async function getBlogSingle(slug: string) {
  const res = await fetch(
    `https://blogs.hinepaltreks.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );
  const data = await res.json();
  const post = data[0];

  if (!post) return null;

  return {
    id: post.id,
    title: post.title?.rendered || "",
    content: post.content?.rendered || "",
    description: post.excerpt?.rendered || "",
    date: post.date,
    updatedAt: post.modified,
    slug: post.slug,
    image:
      post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      null,
  };
}
