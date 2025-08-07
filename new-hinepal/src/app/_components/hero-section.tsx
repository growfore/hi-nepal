'use client';
import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button';

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
    carousels.length > 0 &&
    <section className='home-slider-section '>
      <Head>
        {carousels.length > 0 && (
          <link rel='preload' href={carousels[0].image} as='image' />
        )}
      </Head>
      <Carousel>
        <CarouselContent>
          {carousels?.map((carousel, index) => (
            <CarouselItem key={index} className='relative w-full h-[85vh]'>
              <div className='flex flex-col'>
                <Image
                  src={carousel.image}
                  loading='lazy'
                  alt={carousel.title}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 366px"
                  fill
                  priority={false}
                  className='brightness-50 object-cover'
                />
                <Link className='absolute bottom-[10vh] md:px-36 mx-4' href={carousel.link}>
                  <div className='flex flex-col'>
                    <h2 className='font-black text-white text-7xl text-shadow-2xs'>{carousel.title}</h2>
                    <p className='text-white text-shadow-xs text-xl max-w-3xl'>{carousel.description}</p>
                    <Button className='p-8 w-fit font-bold uppercase' variant={'default'}> Continue Reading </Button>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className='absolute top-[40vh] left-8' size={'lg'} />
        <CarouselNext className='absolute top-[40vh] right-8'  size={'lg'}/> */}
      </Carousel>
    </section>
  );
}
