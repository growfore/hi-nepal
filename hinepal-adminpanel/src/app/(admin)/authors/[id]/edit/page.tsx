import AuthorForm from '@/components/author-form';
import { fetchData } from '@/helper/fetch-data';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

const AuthorEdit = async ({ params }: { params: Params }) => {
  let initialData = await fetchData(`authors/${params.id}`);

  return (
    <AuthorForm
      initialData={{
        ...initialData,
        socialLinks: JSON.parse(initialData.socialLinks),
      }}
    />
  );
};

export default AuthorEdit;
