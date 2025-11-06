import { LucideMail } from 'lucide-react';
import React from 'react';

const Topbar = () => {
  return (
    <div className='flex  text-white  items-center py-4 md:px-20 bg-green-700'>
      <div className='flex items-center gap-2 container ml-2 md:ml-12 lg:ml-24'>
        <div className='rounded-sm bg-white p-2'>
          <LucideMail className='text-green-600' />
        </div>
        <div>
          <p className='font-light'>Quick Questions? Email us</p>
          <a href={`mailto:info@hinepaltreks.com`} className='hover:cursor-pointer font-bold hover:underline'>info@hinepaltreks.com</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
