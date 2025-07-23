import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import dynamic from 'next/dynamic';

const PostEditorComponent = dynamic(
  () => import('@/components/post-editor').then((mod) => mod.PostEditorComponent),
  {
    ssr: false,
  }
)

const page = async () => {
  let categories: { name: string; id: number }[] = [];
  await get({
    endPoint: endpoints.ACTIVITIES,
    data: {},
    success: (message: string, response: any) => {
      categories = response.data;
    },
    failure: (message: string) => {},
  });

  return (
   
      <PostEditorComponent categories={categories} />
  
  );
};

export default page;
