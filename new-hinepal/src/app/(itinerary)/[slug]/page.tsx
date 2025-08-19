"use server";
import endpoints from '@/constant/endpoints';
import { TPackageDetails } from '@/types/types';
import { get } from '@/utils/request-hander';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchData } from '@/helper/fetch-data';
import { formatSlug } from '@/helper/formatSlug';
import { ItineraryPage } from '@/components/pages/itinerary-page';
import { getBlogSingle } from '@/helper/getBlog';
import { BlogPage } from '@/components/pages/blog-page';

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const slug = params.slug;

    const blog = await getBlogSingle(slug);
    if (blog) {
        return {
            title: blog.title,
            description: blog.description,
            openGraph: {
                title: blog.title,
                description: blog.description,
                images: [
                    {
                        url: blog.image,
                        width: 1200,
                        height: 630,
                        alt: blog.title,
                    },
                ],
            },
        };
    }

    const destination = await fetchData(`packages/${slug}`);

    return {
        title: destination?.package?.seo?.metaTitle || destination?.title || formatSlug(slug),
        description: destination?.package?.seo?.metaDescription || destination?.description,
        keywords: destination?.package?.seo?.keywords,
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        referrer: "origin-when-cross-origin",
        openGraph: {
            title: destination?.seo?.metaTitle || destination?.title,
            description: destination?.seo?.metaDescription || destination?.description,
            images: [
                {
                    url: destination?.seo?.metaImage || destination?.image,
                    width: 800,
                    height: 600,
                    alt: destination?.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: destination?.title,
            description: destination?.description,
            images: [destination?.image],
        },
    };
}



const activites = async ({ params }: { params: Params }) => {
    let details: TPackageDetails = {} as TPackageDetails;
    let relatedProducts: TPackageDetails[] = [] as TPackageDetails[];
    const packages: TPackageDetails[] = [];
    let schema;


    let blog = await getBlogSingle(params.slug)

    if (blog) {
        schema = {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://hinepaltreks.com/blogs/${blog.slug}`,
            },
            headline: blog.title,
            description: blog.description,
            image: blog.image,
            author: {
                "@type": "Person",
                name: "Hi Nepal Treks and Expeditions",
            },
            datePublished: blog.date,
            dateModified: blog.updatedAt,
        }
    }

    if (!blog) {
        await get({
            endPoint: endpoints.PACKAGES + '/' + params.slug,
            token: '',
            success: (_, res) => {
                details = res.data.package;
            },
            failure: (message) => {
                notFound();
            },
        });

        await get({
            endPoint: endpoints.PACKAGES,
            params: { query: params.slug.split("-")[0] },
            token: '',
            success: (message, res) => {
                packages.push(...res.data.packages);
            },
            failure: (message) => {
                console.log(message);
            },
        });
    }

    relatedProducts = packages.filter((pkg) => pkg.id !== details.id);

    return (
        blog ?

            <main id="content" className="site-main">
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
                <BlogPage blog={blog} />
            </main> :

            <ItineraryPage details={details} relatedProducts={relatedProducts} />
    );
};

export default activites;
