"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type TCarouselItemType = {
    title: string;
    description: string;
    image: string;
    link: string;
}

export function HeroCarousel({ carousels }: { carousels: TCarouselItemType[] }) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                // @ts-ignore
                Autoplay({
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent className="mt-16 md:mt-[100px]">
                {carousels?.map((carousel, index) => (
                    <CarouselItem key={index} className='relative h-[60vh] md:h-[80vh] w-full'>
                        <div className='flex flex-col'>
                            <Image
                                src={carousel.image}
                                fetchPriority="high"
                                alt={carousel.title}
                                fill
                                priority={false}
                                className='object-cover md:object-fit'
                                loader={({src}) => src}
                                unoptimized
                            />
                            <Link className='absolute bottom-[10vh] md:px-36 mx-4' href={carousel.link}>
                                <div className='flex flex-col'>
                                    <h2 className='mb-8 md:mb-4 font-black text-white text-4xl md:text-7xl text-shadow-2xs'>{carousel.title}</h2>
                                    <p className='hidden md:flex text-white text-shadow-xs text-xl max-w-3xl mb-4'>{carousel.description}</p>
                                    <Button className='p-8 w-fit font-bold uppercase bg-green-700 hover:bg-green-900 hover:cursor-pointer'> Continue Reading </Button>
                                </div>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='absolute  md:top-[50vh] left-8 opacity-70 md:opacity-100' size={'lg'} />
            <CarouselNext className='absolute  md:top-[50vh] right-8 opacity-70 md:opacity-100' size={'lg'} />
        </Carousel>
    )
}