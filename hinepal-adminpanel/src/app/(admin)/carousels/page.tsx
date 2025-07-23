import { CarouselTable } from '@/components/CarouselTable';
import DynamicDataTable from '@/components/dynamic-data-table';
import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import Link from 'next/link';
import React from 'react';

const Carousels = async () => {
  let carousels: {
    title: string;
    page: string;
    description: string;
    subtitle: string;
    link: string;
    id: number;
  }[] = [];

  await get({
    endPoint: endpoints.CAROUSELS,
    success: (message: string, response: any) => {
      carousels = response.data.map((carousel: any) => {
        return {
          title: carousel.title,
          page: carousel.page,
          description: carousel.description,
          subtitle: carousel.subtitle,
          link: carousel.link,
          image: carousel.image,
          id: carousel.id,

        };
      })
    },
    failure: (message: string) => {},
  });

  return (
    <>
      <div className='p-4 pb-0'>
        <Link
          href={'/carousels/add'}
          className='bg-blue-500 hover:bg-blue-600 text-white   px-4 py-2 rounded-md'>
          Add Carousel
        </Link>
      </div>
      <DynamicDataTable
        data={carousels}
        title='Carousels'
        ENDPOINT={endpoints.CAROUSELS}
        EDIT_NAME={'carousels'}
      />
    </>
  );
};

export default Carousels;
