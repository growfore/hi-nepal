import PackageCard from '@/components/package-card';
import endpoints from '@/constant/endpoints';
import { TPackages } from '@/types/types';
import { get } from '@/utils/request-hander';
import Link from 'next/link';
import React from 'react';

const PopularPackages = async () => {
  let packages: TPackages = [];
  await get({
    endPoint: endpoints.PACKAGES,
    params: { query: 'everest' },
    token: '',
    success: (message, res) => {
      packages.push(...res.data.packages);
    },
    failure: (message) => {
      console.log(message);
    },
  });

  // const wantedTitles = [
  //   "Chitwan National Park Tour",
  //   "Bardiya National Park Tour ",
  //   "Sarangkot Pokhara Tour",
  //   "World Peace Pagoda Tour",
  //   "Panchase Trek"
  // ];

  // const order = [
  //   "World Peace Pagoda Tour",
  //   "Chitwan National Park Tour",
  //   "Bardiya National Park Tour ",
  //   "Panchase Trek",
  //   "Sarangkot Pokhara Tour"
  // ];

  // const filteredSorted = packages
  //   .filter(pkg => wantedTitles.includes(pkg.title))
  //   .sort((a, b) => order.indexOf(a.title) - order.indexOf(b.title));


  return (
    <section className='py-8  bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-12 md:mb-16'>
          <div className='max-w-4xl mx-auto'>
            <p className='text-orange-500 text-sm font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              EXPLORE GREAT PLACES
            </p>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2'>
              POPULAR PACKAGES
            </h2>
            <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4'>
              Popular packages for trekking and adventure in Nepal
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {packages.map(
              (item: TPackages[0], index) =>
              (
                <PackageCard
                  key={index}
                  item={item}
                  destination={{
                    slug: item.destination.slug.split("/")[2],
                    activity: {
                      name: 'Trekking',
                      slug: 'trekking',
                    },
                  }}
                />
              )
            )}
          </div>
          <div className='text-center mt-12 flex items-center gap-4 justify-center'>
            <Link href='/activities/trekking' className='inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300'>
              TREKKING PACKAGES 
            </Link>
            <Link href='/activities/tours' className='inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-500 transition-colors duration-300'>
            TOUR PACKAGES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
