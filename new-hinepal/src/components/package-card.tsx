"use server";

import { TDestinationSingle, TPackages } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import { Clock, Users, MapPin, LucideTimer } from 'lucide-react';
import { getProxyUrl } from '@/utils/imageProxy';

type TProps = {
  item: TPackages[0];
  destination: Partial<TDestinationSingle>;
};

const PackageCard = (props: TProps) => {
  const { item } = props;

  return (
    <div className='w-full'>
      <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[340px] relative'>
        <div className='absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10'>
          {item?.destination?.name}
        </div>
        <figure className='w-full h-56 relative'>
          <Link
            aria-label={item.title}
            href={`/${item.slug}`}
            className="block w-full h-full"
          >
            <img
              loading='lazy'
              width={300}
              height={300}
              className='w-full h-full object-cover rounded-t-xl'
              src={getProxyUrl(item?.thumbnail)}
              alt={item.title || 'Package thumbnail'}
            />
          </Link>
        </figure>
        <div className='p-4'>
          <div className=''>
            <p className="flex items-center justify-center gap-1 p-1 text-lg bg-green-700 px-2 w-fit rounded-md text-white"><LucideTimer /> {item?.duration && item.duration.includes(":") ? item.duration : item.duration + " Day(s)"}</p>
            <h3 className='text-2xl font-bold text-dark-blue-900 mb-2'>
              <Link
                title={item.title}
                href={`/${item.slug}`}
              >
                {item.title.split(":")[0]}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
