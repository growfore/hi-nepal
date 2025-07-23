import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextResponse } from 'next/server';
import { TNavBar, TPackages } from '@/types/types';
import { get } from '@/utils/request-hander';

export async function GET() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL; // Change this to your domain
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;
  let navItems: TNavBar = [] as TNavBar;
  let links: { url: string; changefreq: string; priority: number }[] = [];
  try {
    await get({
      endPoint: backendUrl + '/api/activities/nav-items',
      token: '',
      success: (message, res) => {
        navItems = res.data;
        navItems.forEach((item) => {
          links.push({
            url: `/${item.slug}`,
            changefreq: 'monthly',
            priority: 0.7,
          });
          item.destinations.map((destination) => {
            links.push({
              url: `/${item.slug}/${destination.slug}`,
              changefreq: 'weekly',
              priority: 0.8,
            });
            destination.packages.map((packageItem) => {
              links.push({
                url: `/${item.slug}/${destination.slug}/${packageItem.slug}`,
                changefreq: 'daily',
                priority: 1.0,
              });
            });
          });
        });
      },
      failure: (message) => {
        console.log(message, 'error in sitemap');
      },
    });

    // Static URLs
    links.push({ url: '/', changefreq: 'daily', priority: 1.0 });
    links.push({ url: '/about', changefreq: 'monthly', priority: 0.7 });

    // Create a stream to write the sitemap
    const stream = new SitemapStream({ hostname: baseUrl });

    // Convert the stream into a promise
    const sitemap = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    // Return the sitemap as an XML response
    const responseHeaders = { 'Content-Type': 'application/xml' };
    return new NextResponse(sitemap, { headers: responseHeaders });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to generate sitemap' }),
      { status: 500 }
    );
  }
}
