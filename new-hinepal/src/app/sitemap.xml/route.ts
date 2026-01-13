import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";
import { TNavBar } from "@/types/types";
import { get } from "@/utils/request-handler";
import { getBlogs } from "@/helper/getBlog";

// simple in-memory cache to avoid regenerating sitemap on every request
let cachedSitemap: string | null = null;
let cachedAt = 0;
const SITEMAP_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
let generatingPromise: Promise<NextResponse> | null = null;

export async function GET() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;

  // return cached sitemap when valid
  if (cachedSitemap && Date.now() - cachedAt < SITEMAP_TTL_MS) {
    return new NextResponse(cachedSitemap, {
      headers: { "Content-Type": "application/xml", "Cache-Control": `public, max-age=${SITEMAP_TTL_MS / 1000}` },
    });
  }

  // if another request is generating sitemap, wait for it
  if (generatingPromise) return generatingPromise;

  generatingPromise = (async () => {
    let navItems: TNavBar = [] as TNavBar;
    let links: { url: string; changefreq: string; priority: number }[] = [];

    // fetch blogs without media to reduce outbound requests
    const blogs = await getBlogs(1, 100, false).catch(() => ({ posts: [] }));

    try {
      await get({
        endPoint: backendUrl + "/api/activities/nav-items",
        token: "",
        success: (message, res) => {
          navItems = res.data;
          for (const item of navItems) {
            links.push({
              url: `/activities/${item.slug}`,
              changefreq: "monthly",
              priority: 0.7,
            });

            for (const destination of item.destinations) {
              links.push({
                url: `/activities/${item.slug}/${destination.slug}`,
                changefreq: "weekly",
                priority: 0.8,
              });

              for (const packageItem of destination.packages) {
                links.push({
                  url: `${baseUrl}/${packageItem.slug}`,
                  changefreq: "daily",
                  priority: 1,
                });
              }
            }
          }
        },
        failure: (message) => {
          console.log(message, "error in sitemap");
        },
      });

      for (const { slug } of blogs.posts) {
        links.push({
          url: slug,
          changefreq: "weekly",
          priority: 0.9,
        });
      }

      // Static URLs
      links.push(
        { url: "/", changefreq: "daily", priority: 1 },
        { url: "/about-us", changefreq: "monthly", priority: 0.7 },
        { url: "/adventure", changefreq: "monthly", priority: 0.7 },
        { url: "/blogs", changefreq: "daily", priority: 0.7 },
        { url: "/booking", changefreq: "monthly", priority: 0.7 },
        { url: "/privacy-policy", changefreq: "monthly", priority: 0.7 },
        { url: "/terms-and-conditions", changefreq: "monthly", priority: 0.7 }
      );

      // Create a stream to write the sitemap
      const stream = new SitemapStream({ hostname: baseUrl });

      // Convert the stream into a promise
      const sitemap = await streamToPromise(
        Readable.from(links).pipe(stream)
      ).then((data) => data.toString());

      // cache and return
      cachedSitemap = sitemap;
      cachedAt = Date.now();
      generatingPromise = null;

      return new NextResponse(sitemap, { headers: { "Content-Type": "application/xml", "Cache-Control": `public, max-age=${SITEMAP_TTL_MS / 1000}` } });
    } catch (error: any) {
      generatingPromise = null;
      throw new Error("Failed to generate Sitemap: " + String(error));
    }
  })();

  return generatingPromise;
}

