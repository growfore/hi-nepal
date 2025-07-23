import BlogForm from '@/components/blog-form';
import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import { TBlog } from '@/utils/type';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

const EditPage = async ({ params }: { params: Params }) => {
  let blog: TBlog | undefined = undefined as TBlog | undefined;
  await get({
    endPoint: `${endpoints.BLOGS}/${params.slug}`,
    success: (message: string, response: any) => {
      blog = response.data;
      console.log(response.data);
    },
    failure: (message: string) => {},
  });
  return blog && <BlogForm initialData={blog} id={Number(blog?.id)} />;
};

export default EditPage;
