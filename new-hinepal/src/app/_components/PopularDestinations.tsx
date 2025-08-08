import endpoints from '@/constant/endpoints';
import { TDestination } from '@/types/types';
import { get } from '@/utils/request-hander';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularDestinations = async () => {
const topDestinations: TDestination[] = [];
await get({
  endPoint: endpoints.DESTINATIONS + '/top',
  token: '',
  success: (message, res) => {
    topDestinations.push(...res.data);
  },
  failure: (message) => {
    console.log(message);
  },
});

return (
  <section className='py-16 md:py-24 lg:py-32 bg-white'>
    <div className='container mx-auto px-4 md:px-6'>
      <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-16'>
        <div className=''>
          <h5 className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
            POPULAR DESTINATIONS
          </h5>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2'>
            Top Destinations
          </h2>
        </div>
        <div className='text-gray-600 text-base md:text-lg leading-relaxed'>
          Hi Nepal Travels & Treks is a premier travel agency specializing
          in unforgettable trekking and adventure experiences across
          Nepal. From breathtaking mountain trails to rich cultural
          journeys, we offer expertly guided treks, customized tours, and
          seamless travel services.
        </div>
      </div>
      <div className='grid gap-8'>
        <div className=''>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {topDestinations.slice(0, 3).map((d, index) => {
              return (
                <Link key={index} className='block' href={"/activities/trekking/" + d.slug}>
                  <div className='relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <figure className='w-full h-64'>
                      <Image
                        src={d.image || "/placeholder.svg"}
                        loading='lazy'
                        width={600}
                        height={400}
                        quality={75}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 366px"
                        alt={d.name}
                        className='w-full h-full object-cover'
                      />
                    </figure>
                    <div className='absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10'>
                      {d.activity.name}
                    </div>
                    <div className='absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white'>
                      <h3 className='text-xl font-bold'>
                        {d.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className='text-center mt-12'>
        <Link href='/activities/trekking' className='inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300'>
          More Trekking Destination
        </Link>
      </div>
    </div>
  </section>
);
};

export default PopularDestinations;
