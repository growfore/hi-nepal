import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { LucideMail, LucidePhone, LucideMap } from 'lucide-react';

const dummySiteInformation = {
  footerImg: '/placeholder.svg?height=500&width=500',
  email1: 'hinepaltreks@gmail.com',
  email2: 'info@hinepaltreks.com', // Example for a second email
  phone1: '+977 985-6035091',
  phone2: '+977 984-1234567', // Example for a second phone
  location: 'Pokhara, Nepal',
  address: 'Street No. 13, Lakeside, Pokhara, Nepal',
};

const ContactSection = ({ siteInformation = dummySiteInformation }: { siteInformation?: typeof dummySiteInformation }) => {
  return (
    <section className='py-16 md:py-24 lg:py-32 bg-green-600 min-h-[500px] flex items-center'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center'>
          {/* Left Column: Image */}
          <div className='flex justify-center lg:justify-start'>
            <div className='bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-full w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square'>
              <Image
                height={500}
                width={500}
                src={siteInformation?.footerImg || '/placeholder.svg?height=500&width=500&query=company logo'}
                alt='Footer Image'
                className='w-full h-auto object-contain'
              />
            </div>
          </div>

          {/* Right Column: Contact Details and Call to Action */}
          <div className='lg:pl-12'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-white/30'>
              {/* Email */}
              <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                <div className='p-3 rounded-full bg-white/20 mb-3'>
                  <LucideMail color='white' size={28} />
                </div>
                <ul className='text-white text-sm space-y-1'>
                  <li>
                    <a href={`mailto:${siteInformation?.email1}`} className='hover:underline'>
                      {siteInformation?.email1}
                    </a>
                  </li>
                  {/* {siteInformation?.email2 && (
                    <li>
                      <a href={`mailto:${siteInformation?.email2}`} className='hover:underline'>
                        {siteInformation?.email2}
                      </a>
                    </li>
                  )} */}
                </ul>
              </div>

              {/* Phone */}
              <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                <div className='p-3 rounded-full bg-white/20 mb-3'>
                  <LucidePhone color='white' size={28} />
                </div>
                <ul className='text-white text-sm space-y-1'>
                  <li>
                    <a href={`tel:${siteInformation?.phone1}`} className='hover:underline'>
                      {siteInformation?.phone1}
                    </a>
                  </li>
                  {siteInformation?.phone2 && (
                    <li>
                      <a href={`tel:${siteInformation?.phone2}`} className='hover:underline'>
                        {siteInformation?.phone2}
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              {/* Location */}
              <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                <div className='p-3 rounded-full bg-white/20 mb-3'>
                  <LucideMap color={"white"} size={28} />
                </div>
                <ul className='text-white text-sm space-y-1'>
                  <li>{siteInformation?.location}</li>
                  <li>{siteInformation?.address}</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-between mt-8 gap-4'>
              <h3 className='text-white text-xl md:text-2xl font-bold text-center sm:text-left'>
                LET'S JOIN US FOR MORE UPDATE !!
              </h3>
              <Link
                href='/about'
                className='items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition-colors duration-300 border border-white'
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
