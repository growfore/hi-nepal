import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import React from 'react';
import ActivityForm from './form';
import { Activity, TDestination } from '@/utils/schema';

const Page = async () => {
  let destinations: TDestination[] = [];

  await get({
    endPoint: endpoints.DESTINATIONS,
    success: (message, res) => {
      destinations.push(...res.data);
    },
    failure: (message) => {
    },
  });
  return (
    <div>
      <ActivityForm destinations={destinations} />
    </div>
  );
};

export default Page;
