import DynamicDataTable from '@/components/dynamic-data-table';
import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import Link from 'next/link';
import React from 'react';

const Author = async () => {
  let authors: any[] = [];
  await get({
    endPoint: endpoints.AUTHOR,
    success: (message: string, response: any) => {
      authors = response.data.map((auhtor: any) => {
        console.log(auhtor);
        return {
          name: auhtor.name,
          username: auhtor.username,
          email: auhtor.email,
          id: auhtor.id,
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
          href={'/authors/add'}
          className='bg-blue-500 hover:bg-blue-600 text-white   px-4 py-2 rounded-md'>
          Add Author
        </Link>
      </div>
      <DynamicDataTable
        data={authors}
        title='Authors'
        ENDPOINT={endpoints.AUTHOR}
        EDIT_NAME='authors'
      />
    </>
  );
};

export default Author;
