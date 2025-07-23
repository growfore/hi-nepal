import DynamicDataTable from '@/components/dynamic-data-table';
import ReviewTable, { DataItem } from '@/components/reviews-table';
import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import Link from 'next/link';
import React from 'react';

const ReviewPage = async () => {
  let tableData: DataItem[] = [];
  await get({
    endPoint: endpoints.REVIEWS,
    success: (message: string, response: any) => {
      tableData = response.data;
    },
    failure: (message: string) => {},
  });
  return (
    <>
      <div className='p-4 pb-0'>
        <Link
          href={'/reviews/add'}
          className='bg-blue-500 hover:bg-blue-600 text-white   px-4 py-2 rounded-md'>
          Add Review
        </Link>
      </div>
      <DynamicDataTable
        data={tableData}
        title='Reviews'
        ENDPOINT={endpoints.REVIEWS}
        EDIT_NAME={'reviews'}
      />
    </>
  );
};

export default ReviewPage;
