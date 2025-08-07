import { TDestinationSingle, TPackages } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react'; // Import Lucide icons

type TProps = {
  item: TPackages[0];
  destination: Partial<TDestinationSingle>;
};

const PackageCard = (props: TProps) => {
  const { item } = props; // destination prop is not used directly in the current JSX, so it's omitted from destructuring for clarity.

  return (
    <div className='w-full'> {/* col-lg-4 col-md-6 replaced by w-full for grid context */}
      <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
        <figure className='w-full h-64 relative'> {/* feature-image */}
          <Link
            aria-label={item.title}
            href={`/${item.slug}`}
            className="block w-full h-full"
          >
            <Image
              loading='lazy'
              width={300}
              height={300}
              className='w-full h-full object-cover rounded-t-xl' // Replaced inline style
              src={item.thumbnail || '/placeholder.svg?height=300&width=300&query=mountain trekking'} // Added placeholder for missing image
              alt={item.title || 'Package thumbnail'}
            />
          </Link>
        </figure>
        <div className=''> {/* package-content-wrap */}
          <div className='bg-green-500 text-white py-2 px-4 flex justify-around items-center text-sm'> {/* package-meta text-center */}
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
          <div className='p-6'> {/* package-content */}
            <h3 className='text-xl font-bold text-dark-blue-900 mb-2'>
              <Link
                title={item.title}
                href={`/${item.slug}`}
              >
                {item.title?.length > 50
                  ? item.title.slice(0, 47) + '  ...'
                  : item.title}
              </Link>
            </h3>
            {/* <div className='review-area'>
              <span className='review-text'>(25 reviews)</span>
            </div> */}
            <p className='text-gray-600 text-sm leading-relaxed'>
              {item.description?.length > 40
                ? item.description.slice(0, 37) + '...'
                : item.description}
            </p>
            {/* <div className='btn-wrap'>
              <Link href='/trekking' className='button-text width-6'>
                Wish List
                <i className='far fa-heart' />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
