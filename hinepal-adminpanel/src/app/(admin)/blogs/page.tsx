import DynamicDataTable from '@/components/dynamic-data-table';
import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import Link from 'next/link';
import React from 'react';

const Blog = async () => {
  let blogs: any[] = [];
  await get({
    endPoint: endpoints.BLOGS,
    success: (message: string, response: any) => {
      blogs = response.data.blogs.map((blog: any) => {
        
        return {
          id: blog.id,
          title: blog.title,
          description: blog.description?.slice(0, 100),
          slug: blog.slug,
          image: blog.image,
        };
      });
    },
    failure: (message: string) => {
      console.log(message);
    },
  });
  return (
    <>
      <div className='p-4 pb-0'>
        <Link
          href={'/blogs/add'}
          className='bg-blue-500 hover:bg-blue-600 text-white   px-4 py-2 rounded-md'>
          Add Blog
        </Link>
      </div>
      <DynamicDataTable data={blogs} title='Blogs' ENDPOINT={endpoints.BLOGS} EDIT_NAME='blogs' />
    </>
  );
};

export default Blog;
