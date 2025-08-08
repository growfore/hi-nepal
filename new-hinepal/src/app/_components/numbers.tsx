import React from 'react';
import { LucideUsers, LucideMapPin, LucideCalendar, LucideStar, Headset } from 'lucide-react';

const Numbers = () => {
  return (
    <section className='py-16 md:py-24 lg:py-32 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-center relative'>
          {/* Left Column - Video */}
          <div className='relative z-10 lg:h-[600px] flex items-center justify-center p-4 lg:p-0'>
            <div className='w-full h-full flex items-center justify-center'>
              <iframe
                className='w-full max-w-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px] rounded-xl shadow-2xl'
                loading='lazy'
                src='https://www.youtube.com/embed/1Wfki2o-adM?si=Noc1MXhDPOW7bDHk'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className='bg-green-600 text-white p-8 md:p-12 lg:p-16 relative z-0 lg:-ml-20 lg:pl-28'>
            <div className='mb-8'>
              <h5 className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
                CALLBACK FOR MORE
              </h5>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-2'>
                GO TRAVEL. DISCOVER. REMEMBER US!!
              </h2>
              <p className='text-white text-base md:text-lg leading-relaxed mt-4'>
                Discover Nepal with Ni Nepal Travels and Treks Pvt. Ltd.—where every journey blends adventure, culture, and comfort. Explore more, worry less, travel smart.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-8 mt-12'>
              <div className='flex flex-col items-center text-center'>
                <div className='mb-2'>
                  <LucideUsers color='white' size={40} />
                </div>
                <div className=''>
                  <span className='text-4xl font-bold'>25K+</span>
                  <span className='block text-sm'>Satisfied Clients</span>
                </div>
              </div>
              <div className='flex flex-col items-center text-center'>
                <div className='mb-2'>
                  <LucideMapPin color='white' size={40} />
                </div>
                <div className=''>
                  <span className='text-4xl font-bold'>100+</span>
                  <span className='block text-sm'>Destinations Covered</span>
                </div>
              </div>
              <div className='flex flex-col items-center text-center'>
                <div className='mb-2'>
                  <LucideCalendar color='white' size={40} />
                </div>
                <div className=''>
                  <span className='text-4xl font-bold'>17+</span>
                  <span className='block text-sm'>Years of Experience</span>
                </div>
              </div>
              <div className='flex flex-col items-center text-center'>
                <div className='mb-2'>
                  <LucideStar color='yellow' fill='yellow' size={40} />
                </div>
                <div className=''>
                  <span className='text-4xl font-bold'>5/5</span>
                  <span className='block text-sm'>Average Customer Rating</span>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 mt-12 max-w-sm mx-auto lg:mx-0 lg:absolute lg:-bottom-16 lg:left-16'>
              <div className='flex-shrink-0'>
                <Headset color='green' size={40} />
              </div>
              <div className=''>
                <h4 className='text-gray-700 text-sm font-semibold'>Our 24/7 Emergency Phone Services</h4>
                <h3>
                  <a href='tel:+9779856035091' className='text-orange-500 text-xl font-bold'>
                    Call: +977 985-6035091
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
