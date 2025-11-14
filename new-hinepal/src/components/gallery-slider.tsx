'use client';
import { TPackageDetails } from '@/types/types';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const GallerySlider = ({ details }: { details: TPackageDetails }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className='single-tour-gallery'>
      <h3>GALLERY / PHOTOS</h3>
      <Slider {...settings}>
        {details?.media?.map((item, index: number) => (
          <div key={item.id} className='single-tour-item'>
            <figure className='feature-image'>
              <Image src={item.url} alt={item.alt || 'feature image'} />
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
