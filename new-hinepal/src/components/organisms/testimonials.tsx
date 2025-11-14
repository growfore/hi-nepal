'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const Testimonials = ({
  reviews,
}: {
  reviews: { name: string; description: string; image: string; link: string }[];
}) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-8 w-full flex justify-center">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors cursor-pointer"></div>
    ),
  };

  const defaultReviews = [
    {
      name: 'Marichee P.',
      description: 'I was looking for an experienced guide for my solo trek to Annapurna base camp. This was my first ever trek. I was connected to Hi Nepal travels and treks by one of my relatives and hired Krishna dai as my guide through Hi Nepal. I am very happy with the services he provided. He has very good knowledge of the area and has excellent time management skills. He is super helpful and made me feel very comfortable since day one. Thank you Hi nepal and krishna dai for this memorable trip!',
      image: '',
      link: 'https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html',
    },
    {
      name: 'John Doe',
      description: 'Amazing experience with Hi Nepal Travels & Treks! The guides were fantastic, and the scenery was breathtaking. Highly recommend for anyone looking for an authentic adventure.',
      image: "",
      link: 'https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html',
    },
  ];

  const currentReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;

  return (
    <section
      className='py-16 md:py-24 lg:py-32 relative overflow-hidden bg-white mx-auto'
      style={{ backgroundImage: 'url()' }} 
    >
      <div className='container mx-auto px-4 md:px-6 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <Slider {...settings} className='relative'>
            {currentReviews.map((review) => (
              <div className='testimonial-item text-center px-4 md:px-8 lg:px-16' key={review.name}>
                <figure className='w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 mb-8 mx-auto'>
                  <img src={review?.image} alt={review.name} className='w-full h-full object-cover' />
                </figure>
                <div className='testimonial-content'>
                  <p className='text-lg md:text-xl italic text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto'>
                    &quot; {review.description}&quot;
                  </p>
                  <cite className='flex flex-col items-center mt-4'>
                    <Link
                      aria-label='tripadvisor'
                      href={review.link}
                      target='_blank'
                      className='mb-2'
                    >
                      <Image
                        src={'/hinepal/tripadvisor.png'} 
                        alt='TripAdvisor logo'
                        width={100}
                        height={20}
                        priority
                        className='w-24 h-auto'
                      />
                    </Link>
                    <span className='text-dark-blue-900 font-bold text-lg'>
                      {review.name}
                    </span>
                  </cite>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
