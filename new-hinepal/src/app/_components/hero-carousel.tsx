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
            <CarouselContent>
                {carousels?.map((carousel, index) => (
                    <CarouselItem key={index} className='relative h-[85vh] w-full'>
                        <div className='flex flex-col'>
                            <Image
                                src={carousel.image}
                                fetchPriority="high"
                                alt={carousel.title}
                                fill
                                priority={false}
                                className='brightness-50 object-cover'
                            />
                            <Link className='absolute bottom-[10vh] md:px-36 mx-4' href={carousel.link}>
                                <div className='flex flex-col'>
                                    <h2 className='font-black text-white text-7xl text-shadow-2xs'>{carousel.title}</h2>
                                    <p className='text-white text-shadow-xs text-xl max-w-3xl mb-4'>{carousel.description}</p>
                                    <Button className='p-8 w-fit font-bold uppercase bg-green-700 hover:bg-green-900 hover:cursor-pointer'> Continue Reading </Button>
                                </div>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='absolute top-[40vh] left-8' size={'lg'} />
            <CarouselNext className='absolute top-[40vh] right-8' size={'lg'} />
        </Carousel>
    )
}