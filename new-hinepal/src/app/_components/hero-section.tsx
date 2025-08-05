'use client';
import * as React from 'react';

import Slider from 'react-slick';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export function HeroSection({
  carousels,
}: {
  carousels: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
}) {
  var settings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    carousels.length > 0 && <div
      style={{
        height: '85vh',
      }}>
      <section className='home-slider-section '>
        <Head>
          {carousels.length > 0 && (
            <link rel='preload' href={carousels[0].image} as='image' />
          )}
        </Head>
        <Slider className='home-slider' {...settings}>
          {carousels?.map((carousel, index) => (
            <div
              key={index}
              className='home-banner-items'
              style={{
                height: '85vh',
              }}>
              <div
                className='banner-inner-wrap '
                style={{
                  // backgroundImage: 'url(' + carousel.image + ')',
                  height: '85vh',
                }}
              />
              <Image
                src={carousel.image}
                loading='lazy'
                alt={carousel.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 366px"
                width={600}
                height={250}
                priority={false}
                className='banner-inner-wrap'
              />
              <div className='banner-content-wrap ' style={{ height: '85vh' }}>
                <div className='container'>
                  <div className='banner-content text-center' style={{}}>
                    <h2 className='banner-title'>{carousel.title}</h2>
                    <p>{carousel.description}</p>
                    <Link id='carousel-btn' href={carousel.link} className='button-primary'>
                      CONTINUE READING
                    </Link>
                  </div>
                </div>
              </div>
              <div className='overlay' />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
