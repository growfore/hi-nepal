"use server";

import * as React from "react";
import Head from "next/head";
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
    carousels.length > 0 && (
      <section className="home-slider-section ">
        <Head>
          {carousels.length > 0 && (
            <link rel="preload" href={carousels[0].image} as="image" />
          )}
        </Head>
        {/* <HeroCarousel carousels={carousels} /> */}
      </section>
    )
  );
}
