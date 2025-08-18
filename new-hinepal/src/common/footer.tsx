import { TSiteInformation } from '@/types/types';
import siteStore from '@/zustand/store';
import { LucideCircle, LucidePhone, LucideMail, LucideMapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  let siteInformation: TSiteInformation | undefined = undefined;
  siteInformation = siteStore.getState() as TSiteInformation;

  return (
    <>
      <div>
        <footer id='colophon' className='bg-gray-900  text-white py-16 md:py-20 lg:py-24'>
          <div>
            <div className='top-footer container mx-auto px-4 md:px-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
                <aside className=''>
                  <h3 className='text-xl font-bold mb-4'>ABOUT TRAVEL</h3>
                  <div className=' text-base leading-relaxed'>
                    {siteInformation?.about?.description}
                  </div>
                </aside>

                <aside className=''>
                  <h3 className='text-xl font-bold mb-4'>CONTACT INFORMATION</h3>
                  <div className=' text-base leading-relaxed'>
                    {/* Removed siteInformation?.description as it's not in the image for this section */}
                    <ul className='mt-4 space-y-3'>
                      <li className='flex items-center gap-2'>
                        <LucidePhone color='#FF8A00' size={18} /> {/* Styled to match solid orange icon */}
                        <Link href={`tel:${siteInformation?.phone1}`} className='hover:underline'>
                          {siteInformation?.phone1}
                        </Link>
                      </li>
                      <li className='flex items-center gap-2'>
                        <LucideMail color='#FF8A00' size={18} /> {/* Styled to match solid orange icon */}
                        <Link href={`mailto:${siteInformation?.email1}`} className='hover:underline'>
                          {siteInformation?.email1}
                        </Link>
                      </li>
                      <li className='flex items-start gap-2'>
                        <LucideMapPin color='#FF8A00' size={18} className='mt-0.5' /> {/* Styled to match solid orange icon */}
                        <span>
                          {siteInformation?.address}
                        </span>
                      </li>
                    </ul>
                  </div>
                </aside>

                <aside>
                  <h3 className='text-xl font-bold mb-4 '>Useful Links</h3>
                  <ul className='flex flex-col justify-center md:justify-start gap-x-4 gap-y-2 text-sm mt-2 md:mt-0'>
                    <li>
                      <Link href='/privacy-policy' className='hover:underline'>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href='/terms-and-conditions' className='hover:underline'>Terms &amp; Condition</Link>
                    </li>
                    <li>
                      <Link href='/sitemap' className='hover:underline'>Sitemap</Link>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>

          <div className='buttom-footer bg-footer-light py-6 mt-12'>
            <div className='container mx-auto px-4 md:px-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-4'>
                {/* Footer Menu / Ratings */}
                <div className='flex flex-col md:flex-row items-center md:justify-start gap-4'>
                  <div className='flex items-center gap-1'>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <LucideCircle key={idx} className='w-4 h-4' fill='green' color='green' />
                    ))}
                    <Link
                      className=' text-sm hover:underline ml-2'
                      href={"https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"}
                      target='_blank'
                    >
                      111 Reviews in Tripadvisor
                    </Link>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <Link href='/' className=''>
                    <Image
                      height={50}
                      width={100}
                      className='p-2 rounded-md'
                      src='/assets/hinepal-logo.webp'
                      alt='logo'
                      loading='lazy'
                      priority={false}
                    />
                  </Link>
                </div>

                {/* Copyright */}
                <div className='text-sm text-center md:text-right'>
                  Copyright © {new Date().getFullYear()} Hi Nepal Travels and Treks.
                </div>
              </div>
            </div>
          </div>
        </footer >
      </div >
    </>
  );
}
