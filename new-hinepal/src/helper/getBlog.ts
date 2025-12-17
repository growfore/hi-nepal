export async function getBlogs(page = 1, perPage = 10) {
  const res = await fetch(
    `https://hinepaltreks.com/cms/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_fields=id,title,slug,excerpt,date,featured_media`,
    { next: { revalidate: 3600 } }
  );

  const total = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  const data = await res.json();

  const posts = await Promise.all(
    data?.map(async (post: any) => {
      let image: string | null = null;
      let imageAlt: string | null = null;

      if (post.featured_media) {
        try {
          const imgRes = await fetch(
            `https://hinepaltreks.com/cms/wp-json/wp/v2/media/${post.featured_media}`,
            { next: { revalidate: 3600 } }
          );
          const imgData = await imgRes.json();
          image = imgData.source_url || null;
          imageAlt = imgData.alt_text || null;
        } catch (e: any) {
          throw new Error(
            `Failed to fetch featured media for post:${post.id} `,
            e
          );
        }
      }

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: post.excerpt.rendered,
        date: post.date,
        image,
        imageAlt,
      };
    })
  );

  return {
    posts,
    total: Number(total),
    totalPages: Number(totalPages),
  };
}

export async function getBlogSingle(slug: string) {
  const res = await fetch(
    `https://hinepaltreks.com/cms/wp-json/wp/v2/posts?slug=${slug}&_fields=id,title,content,slug,date,modified,featured_media,rank_math_meta`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const post = data[0];
  if (!post) return null;

  let image = "";
  let imageAlt = "";
  if (post.featured_media) {
    try {
      const imgRes = await fetch(
        `https://hinepaltreks.com/cms/wp-json/wp/v2/media/${post.featured_media}`,
        { next: { revalidate: 3600 } }
      );
      const imgData = await imgRes.json();
      image = imgData.source_url || "";
      imageAlt = imgData.alt_text || "";
    } catch (e: any) {
      throw new Error(`Failed to fetch featured media for post ${post.id}`, e);
    }
  }

  return {
    id: post.id,
    title: post.title?.rendered || post.rank_math_meta?.title || "",
    metaTitle: post.rank_math_meta?.title || "",
    content: post.content?.rendered || "",
    description: post.rank_math_meta?.description || "",
    date: post.date,
    updatedAt: post.modified,
    slug: post.slug,
    keywords: post.rank_math_meta?.keywords,
    image,
    imageAlt,
  };
}
