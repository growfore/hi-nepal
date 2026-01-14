import { LucideMail, LucidePhone } from 'lucide-react';

const Topbar = () => {
  return (
    <div className='flex flex-col  md:flex-row text-white items-center justify-between py-4 md:px-20 bg-green-700'>
      <div className='hidden md:flex items-center gap-2 container ml-2 md:ml-12 lg:ml-24'>
        <div className='rounded-sm bg-white p-2'>
          <LucideMail className='text-green-600' />
        </div>
        <div>
          <p className='font-light'>Quick Questions? Email us</p>
          <a href={`mailto:info@hinepaltreks.com`} className='hover:cursor-pointer font-bold hover:underline'>info@hinepaltreks.com</a>
        </div>
      </div>
      <div className='flex items-center md:justify-end gap-2 container pl-4 md:pr-12 lg:pr-24'>
        <div className='rounded-sm bg-white p-2'>
          <LucidePhone className='text-green-600' />
        </div>
        <div>
          <p className='font-light'>Direct call with the Expert</p>
          <a href={`tel:+977 9856035091`} className='hover:cursor-pointer font-bold hover:underline'>+977 9856035091</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
