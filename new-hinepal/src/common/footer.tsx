import { TSiteInformation } from '@/types/types';
import siteStore from '@/zustand/store';
import { LucidePhone, LucideMail, LucideMapPin, LucideCheck, LucideVerified } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  let siteInformation: TSiteInformation | undefined = undefined;
  siteInformation = siteStore.getState() as TSiteInformation;

  return (
    <div>
      <footer className='bg-gray-900  text-white py-12'>
        <div>
          <div className='top-footer container mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
              <aside className=''>
                <div className='flex mb-2'>
                  <Link href='/' className='bg-white p-1 w-fit rounded-md'>
                    <Image
                      height={200}
                      width={200}
                      className='p-2 rounded-md'
                      src='/assets/hinepal-logo.webp'
                      alt='logo'
                    />
                  </Link>
                </div>
                <div className=' text-base leading-relaxed'>
                  {siteInformation?.about?.description}
                </div>
              </aside>

              <aside className=''>
                <h3 className='text-xl font-bold mb-4'>Contact</h3>
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

        <div className='py-6 mt-12'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-4'>
              {/* Footer Menu / Ratings */}
              <Link
                href={"https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"}
                target='_blank'
              >
                <div className='flex flex-col  md:flex-row  md:justify-start gap-6'>
                  <div className='flex flex-col items-left gap-1'>
                    <p className='font-bold flex items-center gap-1'><LucideVerified className='text-white' /> Recommended by 100% of Travellers</p>
                    <div className='bg-white p-2 w-fit rounded-md'>
                      <Image src={"/assets/tripadvisor-logo.webp"} height={200} width={200} alt='tripadvisor logo' />
                    </div>
                    <div className='flex font-bold items-center italic'>
                      {Array.from([0, 1, 2, 3, 4]).map((_, idx) => <div key={idx} className='size-4 bg-green-500 rounded-full ml-1'></div>)} <span className='ml-4'> Reviews: </span> 5/5
                      (115+ Reviews)
                    </div>
                  </div>
                </div>
              </Link>


            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className='flex flex-col md:flex-row justify-between container mx-auto px-5 gap-4'>
          <p>
            Copyright © {new Date().getFullYear()} Hi Nepal Travels and Treks.
          </p>
          <p>
            <Link href={"https://growfore.com/"} target='_blank' referrerPolicy='no-referrer'>
              Designed By: Growfore Solution
            </Link>
          </p>
        </div>
      </footer >
    </div >
  );
}
