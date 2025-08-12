"use server";

import Autoplay from 'embla-carousel-autoplay';
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
import { HeroCarousel } from './hero-carousel';

export async function Hero({
  carousels,
}: {
  carousels: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
}) {

  return (
    carousels.length > 0 &&
    <section className='home-slider-section '>
      <Head>
        {carousels.length > 0 && (
          <link rel='preload' href={carousels[0].image} as='image' />
        )}
      </Head>
      <HeroCarousel carousels={carousels} />
    </section>
  );
}
