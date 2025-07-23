import { fetchData } from '@/helper/fetch-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogHome = async () => {
  const data = await fetchData('blogs');

  return (
    <section className='blog-section'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
              <h5 className='dash-style'>FROM OUR BLOG</h5>
              <h2>OUR RECENT POSTS</h2>
              <p>Latest news and updates from our blog. Check out our blog</p>
            </div>
          </div>
        </div>
        <div className='row'>
          {await data?.blogs?.map(
            (blog: any, index: number) =>
              index < 3 && <HomePageBlogCard blog={blog} />
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogHome;

const HomePageBlogCard = (data: any) => {
  const blog = data?.blog;

  return (
    <div className='col-md-6 col-lg-4'>
      <article className='post'>
        <figure className='feature-image'>
          <Link href={`/blogs/${blog?.slug}`}>
            <Image
              src={blog?.image || ''}
              alt={blog?.title || ''}
              width={300}
              height={300}
              priority={false}
              decoding='async'
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
              }}
            />
          </Link>
        </figure>
        <div className='entry-content'>
          <h3>
            <Link href={`/blogs/${blog?.slug}`}>{blog?.title}</Link>
          </h3>
          <div className='entry-meta'>
            <span className='byline'>
              <Link href={`/blogs/${blog?.slug}`}>
                {blog?.author?.name || blog?.description}
              </Link>
            </span>
            <span className='posted-on'>
              <Link href={`/blogs/${blog?.slug}`}>
                {blog?.createdAt && formatRevalidate(blog?.createdAt)}
              </Link>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};
function formatRevalidate(date: string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // @ts-ignore
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  return formattedDate;
}
