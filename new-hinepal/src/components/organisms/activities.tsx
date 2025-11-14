import endpoints from '@/constant/endpoints';
import { TActivity } from '@/types/types';
import { get } from '@/utils/request-handler';
import React from 'react';
import Link from 'next/link';
import { Mountain, Tent, Camera, Compass, Ship, Users, Globe } from 'lucide-react';

const activityIcons = [
  <Mountain key="trekking" className="w-12 h-12 text-gray-700" />,
  <Tent key="camping" className="w-12 h-12 text-gray-700" />,
  <Camera key="photography" className="w-12 h-12 text-gray-700" />,
  <Compass key="adventure" className="w-12 h-12 text-gray-700" />,
  <Ship key="rafting" className="w-12 h-12 text-gray-700" />,
  <Users key="cultural" className="w-12 h-12 text-gray-700" />,
  <Globe key="sightseeing" className="w-12 h-12 text-gray-700" />,
];

const Activities = async () => {
  let activities: TActivity[] = [];
  await get({
    endPoint: endpoints.ACTIVITIES,
    token: '',
    success: (message, res) => {
      activities = res.data;
    },
    failure: (message) => {
      console.log(message);
    },
  });

  return (
    <section className='py-16 md:py-24 lg:py-32 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-12 md:mb-16'>
          <div className='max-w-4xl mx-auto'>
            <p className='text-orange-500 text-sm font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              TRAVEL BY ACTIVITY
            </p>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2'>
              ADVENTURE &amp; ACTIVITY
            </h2>
            <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4'>
              Hi Nepal Travels & Treks is a premier travel agency specializing
              in unforgettable trekking and adventure experiences across
              Nepal.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 '>
          {activities.map((activity, index) => (
            <div key={activity.id} className='flex flex-col items-center text-center'>
              <div className='w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow-md'>
                <Link aria-label={activity.name} href={`/activities/${activity.slug}`}>
                  {activityIcons[index % activityIcons.length] || <Mountain className="w-12 h-12 text-gray-700" />}
                </Link>
              </div>
              <div className='activity-content'>
                <p className='text-lg font-semibold text-dark-blue-900 mb-1'>
                  <Link href={`/activities/${activity.slug}`}>{activity.name}</Link>
                </p>
                <p className='text-gray-600 text-sm'>{activity._count.destinations} Destination</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
