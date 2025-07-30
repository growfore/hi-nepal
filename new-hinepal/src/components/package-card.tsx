import { TDestinationSingle, TPackages } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TProps = {
  item: TPackages[0];
  destination: Partial<TDestinationSingle>;
};

const PackageCard = (props: TProps) => {
  const { item, destination } = props;
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='package-wrap'>
        <figure className='feature-image'>
          <Link
            aria-label={item.title}
            href={`/${destination?.activity?.slug}/${destination.slug}/${item.slug}`}>
            <Image
              loading='lazy'
              width={300}
              height={300}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
              }}
              src={item.thumbnail || '/img6.jpg'}
              alt=''
            />
          </Link>
        </figure>
        <div className='package-content-wrap'>
          <div className='package-meta text-center'>
            <ul>
              <li>
                <i className='far fa-clock' />
                {item.duration}
              </li>
              <li>
                <i className='fas fa-user-friends' />
                People: {item.groupSize}
              </li>
              <li>
                <i className='fas fa-map-marker-alt' />
                {item.destination?.name}
              </li>
            </ul>
          </div>
          <div className='package-content'>
            <h3>
              <Link
                title={item.title}
                href={`/${destination?.activity?.slug}/${destination.slug}/${item.slug}`}>
                {item.title?.length > 50
                  ? item.title.slice(0, 47) + '  ...'
                  : item.title}
              </Link>
            </h3>
            <div className='review-area'>
              {/* <span className='review-text'>(25 reviews)</span> */}
              <div className='rating-start' title='Rated 5 out of 5'>
                <span style={{ width: '80%' }} />
              </div>
            </div>
            <p className=''>
              {item.description?.length > 40
                ? item.description.slice(0, 37) + '...'
                : item.description}
            </p>
            <div className='btn-wrap'>
              <Link href='/booking' className='button-text width-6'>
                Book Now
                <i className='fas fa-arrow-right' />
              </Link>
              {/* <Link href='/trekking' className='button-text width-6'>
                Wish List
                <i className='far fa-heart' />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
