import { TDestinationSingle, TPackages } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';

type TProps = {
  item: TPackages[0];
  destination: Partial<TDestinationSingle>;
};

const PackageCard = (props: TProps) => {
  const { item } = props;

  return (
    <div className='w-full'>
      <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[420px]'>
        <figure className='w-full h-64 relative'>
          <Link
            aria-label={item.title}
            href={`/${item.slug}`}
            className="block w-full h-full"
          >
            <Image
              loading='lazy'
              width={300}
              height={300}
              className='w-full h-full object-cover rounded-t-xl'
              src={item?.thumbnail}
              alt={item.title || 'Package thumbnail'}
            />
          </Link>
        </figure>
        <div className=''>
          <div className='bg-green-500 text-white py-2 px-4 flex justify-around items-center text-sm'>
            <ul className='flex justify-around w-full'>
              <li className='flex items-center gap-1'>
                <Clock className='w-4 h-4' />
                {item.duration}
              </li>
              <li className='flex items-center gap-1'>
                <Users className='w-4 h-4' />
                People: {item.groupSize}
              </li>
              <li className='flex items-center gap-1'>
                <MapPin className='w-4 h-4' />
                {item.destination?.name}
              </li>
            </ul>
          </div>
          <div className='p-6'>
            <h3 className='text-xl font-bold text-dark-blue-900 mb-2'>
              <Link
                title={item.title}
                href={`/${item.slug}`}
              >
                {item.title.split(":")[0] + "-" + item.duration + " Days"}
              </Link>
            </h3>
            {/* <p className='text-gray-600 text-sm leading-relaxed'>
              {item.description?.length > 40
                ? item.description.slice(0, 37) + '...'
                : item.description}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
