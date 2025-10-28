export async function getBlogs(page?: number, perPage?: number) {
  let res;
  if (page || perPage) {
    res = await fetch(
      `https://hinepaltreks.com/cms/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`,
      { cache: "no-cache" }
    );
  } else {
    res = await fetch(
      `https://hinepaltreks.com/cms/wp-json/wp/v2/posts?_embed`,
      { cache: "no-cache" }
    );
  }
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
    imageAlt: post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || null,
  }));

  return {
    posts,
    total: Number(total),
    totalPages: Number(totalPages),
  };
}

export async function getBlogSingle(slug: string) {
  const res = await fetch(
    `https://hinepaltreks.com/cms/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: "default" }
  );
  const data = await res.json();
  const post = data[0];

  if (!post) return null;

  return {
    id: post.id,
    title: post.title?.rendered || post.rank_math_meta.title || "",
    metaTitle: post.rank_math_meta.title || "",
    content: post.content?.rendered || "",
    description: post.rank_math_meta?.description || "",
    date: post.date,
    updatedAt: post.modified,
    slug: post.slug,
    keywords: post.rank_math_meta?.keywords,
    image: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    imageAlt: post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "",
  };
}
