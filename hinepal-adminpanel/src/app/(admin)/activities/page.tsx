import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import React from 'react';
import ActivityForm from './form';
import { Activity } from '@/utils/schema';

const Page = async () => {
  let activities: Activity[] = [];

  await get({
    endPoint: endpoints.ACTIVITIES,
    success: (message, res) => {
      activities.push(...res.data);
    },
    failure: (message) => {
    },
  });
  return (
    <div>
      <ActivityForm activities={activities} />
    </div>
  );
};

export default Page;
