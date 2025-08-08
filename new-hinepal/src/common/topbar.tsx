import { TSiteInformation } from '@/types/types';
import { LucideMail, LucidePhone } from 'lucide-react';
import React from 'react';

const Topbar = ({ siteInformation }: { siteInformation: TSiteInformation }) => {
  return (
    <div className='hidden md:flex container text-white justify-between  items-center py-2 md:px-20  mx-auto '>
      <div className='flex items-center  gap-2'>
        <div className='rounded-sm bg-white p-2'>
          <LucideMail className='text-green-600' />
        </div>
        <div>
          <p className='font-light'>Quick Questions? Email us</p>
          <a href={`mailto:${siteInformation.email1}`} className='hover:cursor-pointer font-bold hover:underline'>{siteInformation.email1}</a>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='rounded-sm bg-white p-2'>
          <LucidePhone className='text-green-600' />
        </div>
        <div>
          <p>
            Talk to an Expert
          </p>
          <a href={`tel:${siteInformation.phone1}`} className='hover:cursor-pointer hover:underline font-bold'>{siteInformation.phone1}</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
