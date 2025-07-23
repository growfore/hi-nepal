import { PostEditorComponent } from '@/components/post-editor';
import { Card } from '@/components/ui/card';
import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import { TPackage } from '@/utils/type';
import React from 'react';

const Edit = async ({ params }: any) => {
  let initialData: TPackage | undefined = undefined;
  let categories: { name: string; id: number }[] = [];
  await get({
    endPoint: endpoints.ACTIVITIES,
    data: {},
    success: (message: string, response: any) => {
      categories = response.data;
    },
    failure: (message: string) => {},
  });

  await get({
    endPoint: `${endpoints.PACKAGES}/${params.slug}`,
    params: undefined,
    success: (
      message: string,
      response: { data: { package: TPackage | undefined } }
    ) => {
      initialData = response.data.package;
    },
    failure: (message: string) => {},
  });
  return (
    <Card className='m-4'>
      <PostEditorComponent categories={categories} initialData={initialData} />
    </Card>
  );
};

export default Edit;
