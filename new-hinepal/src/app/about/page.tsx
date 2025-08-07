import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DollarSign, MapPin, User, PlayCircle, Users, Award, Activity, Globe } from 'lucide-react'; // Importing Lucide icons for services and counters

const About = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
        {/* Inner Banner Section */}
        <section className='relative h-96 bg-cover bg-center flex items-center justify-center text-white'
          style={{ backgroundImage: 'url(/placeholder.svg?height=600&width=1920&query=mountain landscape banner)' }}>
          <div className='absolute inset-0 bg-black/50'></div>
          <div className='container mx-auto px-4 md:px-6 relative z-10 text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg'>
              About Us
            </h1>
          </div>
          <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent'></div>
        </section>

        {/* About Service Section */}
        <section className='py-16 md:py-24 lg:py-32 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='mb-12 md:mb-16'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-end'>
                <div className=''>
                  <h5 className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
                    OUR TOUR GALLERY
                  </h5>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2'>
                    HELLO. OUR AGENCY HAS BEEN PRESENT BEST IN THE MARKET
                  </h2>
                </div>
                <div className='text-gray-600 text-base md:text-lg leading-relaxed space-y-4'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                    dapibus leo.Placeat nostrud natus tempora justo.
                    Laboriosam, eget mus nostrud natus tempora.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipiscing
                    eliting dolor sit amet. Placeat nostrud natus tempora
                    justo nostrud natus tempora.
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <div className='w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-4'>
                  <DollarSign className='w-10 h-10 text-orange-500' />
                </div>
                <h4 className='text-xl font-bold text-dark-blue-900 mb-2'>AFFORDABLE PRICE</h4>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <div className='w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4'>
                  <MapPin className='w-10 h-10 text-green-600' />
                </div>
                <h4 className='text-xl font-bold text-dark-blue-900 mb-2'>BEST DESTINATION</h4>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <div className='w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4'>
                  <User className='w-10 h-10 text-blue-500' />
                </div>
                <h4 className='text-xl font-bold text-dark-blue-900 mb-2'>PERSONAL SERVICE</h4>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='relative mt-16 rounded-xl overflow-hidden shadow-2xl aspect-video'
              style={{ backgroundImage: 'url(/placeholder.svg?height=700&width=1200&query=trekking video background)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='absolute inset-0 flex items-center justify-center'>
                <iframe
                  className='w-full h-full'
                  src='https://www.youtube.com/embed/0sYC1vZAAfA'
                  title='Trekking to Mt. Everest Base Camp | Again After Earthquake'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Client Section */}
        <section className='py-16 md:py-24 lg:py-32 bg-gray-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-12 md:mb-16'>
              <div className='max-w-3xl mx-auto'>
                <h5 className='text-orange-500 text-sm font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
                  OUR ASSOCIATES
                </h5>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2'>
                  PARTNER'S AND CLIENTS
                </h2>
                <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4'>
                  Mollit voluptatem perspiciatis convallis elementum
                  corporis quo veritatis aliquid blandit, blandit torquent,
                  odit placeat. Adipiscing repudiandae eius cursus? Nostrum
                  magnis maxime curae placeat.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center'>
              {clientLogos.map((logo, index) => (
                <figure key={index} className='flex justify-center items-center p-4 bg-white rounded-lg shadow-sm'>
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className='object-contain h-16 w-auto'
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Callback Section */}
        <section className='py-16 md:py-24 lg:py-32 relative bg-cover bg-center'
          style={{ backgroundImage: 'url(/placeholder.svg?height=800&width=1600&query=mountain range background)' }}>
          <div className='absolute inset-0 bg-dark-blue-900/70'></div>
          <div className='container mx-auto px-4 md:px-6 relative z-10'>
            <div className='text-center mb-12 md:mb-16'>
              <div className='max-w-3xl mx-auto'>
                <h5 className='text-orange-500 text-sm font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
                  CALLBACK FOR MORE
                </h5>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-2'>
                  GO TRAVEL. DISCOVER. REMEMBER US!!
                </h2>
                <p className='text-white text-base md:text-lg leading-relaxed mt-4'>
                  Mollit voluptatem perspiciatis convallis elementum
                  corporis quo veritatis aliquid blandit, blandit torquent,
                  odit placeat. Adipiscing repudiandae eius cursus? Nostrum
                  magnis maxime curae placeat.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
              {counterData.map((item, index) => (
                <div key={index} className='flex flex-col items-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm'>
                  <div className='w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4'>
                    {item.icon}
                  </div>
                  <div className='text-white'>
                    <span className='text-5xl font-bold block'>{item.value}</span>
                    <span className='text-lg'>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

const clientLogos = [
  { src: '/placeholder.svg?height=60&width=120', alt: 'Client Logo 1' },
  { src: '/placeholder.svg?height=60&width=120', alt: 'Client Logo 2' },
  { src: '/placeholder.svg?height=60&width=120', alt: 'Client Logo 3' },
  { src: '/placeholder.svg?height=60&width=120', alt: 'Client Logo 4' },
  { src: '/placeholder.svg?height=60&width=120', alt: 'Client Logo 5' },
  { src: '/placeholder.svg?height=60&width=120', alt: 'Client Logo 6' },
];

const counterData = [
  {
    icon: <Users className='w-10 h-10 text-white' />,
    value: '500K+',
    label: 'Satisfied Clients',
  },
  {
    icon: <Award className='w-10 h-10 text-white' />,
    value: '250K+',
    label: 'Awards Achieve',
  },
  {
    icon: <Activity className='w-10 h-10 text-white' />,
    value: '15K+',
    label: 'Active Members',
  },
  {
    icon: <Globe className='w-10 h-10 text-white' />,
    value: '10K+',
    label: 'Tour Destination',
  },
];
