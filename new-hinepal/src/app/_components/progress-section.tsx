'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ProgressSection = ({
  reviews,
}: {
  reviews: { name: string; description: string; image: string; link: string }[];
}) => {
  var settings = {
    dots: true,
    default: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const router = useRouter();
  return (
    <section
      style={{ minHeight: '500px' }}
      className=' my-16 grid justify-center text-center'>
      {/* <div>
        <Link
          href={
            'https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html'
          }
          target='_blank'
          className=''>
          <Image
            src={'/hinepal/tripadvisor.png'}
            alt=''
            width={1500}
            height={1500}
            priority
            style={{
              width: '150px',
              height: 'auto',
              marginBottom: '20px',
            }}
          />
        </Link>
      </div> */}
      <div
        className='testimonial-section'
        style={{ backgroundImage: 'url(/img23.jpg)' }}>
        <div className='container'>
          <div className='row'>
            <Slider {...settings} className='col-lg-10 offset-lg-1 '>
              {reviews?.map((review) => (
                <div className='testimonial-item text-center' key={review.name}>
                  <figure className='testimonial-img'>
                    <img src={review.image} alt='' />
                  </figure>
                  <div className='testimonial-content'>
                    <p>" {review.description}"</p>
                    <cite
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column-reverse',
                      }}>
                      {review.name}
                      <Link
                        aria-label='tripadvisor'
                        href={
                          review.link ||
                          'https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html'
                        }
                        target='_blank'
                        className=''>
                        <Image
                          src={'/hinepal/tripadvisor.png'}
                          alt=''
                          width={1500}
                          height={1500}
                          priority
                          style={{
                            width: '100px',
                          }}
                        />
                      </Link>
                      {/* <span className='company'>Travel Agent</span> */}
                    </cite>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
