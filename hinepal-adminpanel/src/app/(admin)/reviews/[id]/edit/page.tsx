import ReviewForm from '@/components/review-component';
import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';
const Edit = async ({ params }: { params: Params }) => {
  const id = params.id;
  let initialData: any = undefined;

  await get({
    endPoint: endpoints.REVIEWS + `/${id}`,
    success: (message: string, response: any) => {
     
      initialData = response.data;
    },
    failure: (message: string) => {
      console.log(message);
    },
  });

  return <ReviewForm initialData={initialData} id={Number(id)} />;
};

export default Edit;
