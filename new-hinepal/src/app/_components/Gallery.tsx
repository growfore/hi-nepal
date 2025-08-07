import React from 'react';
import Image from "next/image";
import { TSiteInformation } from '@/types/types';

const Gallery = ({ siteInformation }: { siteInformation?: TSiteInformation }) => {
    return (
        <section className='py-16 md:py-24 lg:py-32 bg-white'>
            <div className='container mx-auto px-4 md:px-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                    <div className='flex flex-col gap-8'>
                        <div className=''>
                            <h5 className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
                                OUR TOUR GALLERY
                            </h5>
                            <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2'>
                                {siteInformation?.about?.title || 'Explore Our Gallery'}
                            </h2>
                            <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4'>
                                {siteInformation?.description || ''}
                            </p>
                        </div>
                        <figure className='rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]'>
                            <Image
                                height={500}
                                width={400}
                                src={siteInformation?.about?.image1 || '/placeholder.svg?height=500&width=400&query=mountain landscape'}
                                alt='home page gallery image'
                                className='w-full h-full object-cover'
                            />
                        </figure>
                    </div>

                    {/* Right Column: Grid of Smaller Images */}
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            <figure className='rounded-xl overflow-hidden shadow-lg h-[250px]'>
                                <Image
                                    height={250}
                                    width={300}
                                    className='w-full h-full object-cover'
                                    src={siteInformation?.about?.image2 || '/placeholder.svg?height=250&width=300&query=trekking group'}
                                    alt='home page gallery image'
                                />
                            </figure>
                            <figure className='rounded-xl overflow-hidden shadow-lg h-[250px]'>
                                <Image
                                    height={250}
                                    width={300}
                                    src={siteInformation?.about?.image3 || '/placeholder.svg?height=250&width=300&query=cultural festival'}
                                    alt='home page gallery image'
                                    className='w-full h-full object-cover'
                                />
                            </figure>
                        </div>
                        <div className=''>
                            <figure className='rounded-xl overflow-hidden shadow-lg h-[400px]'>
                                <Image
                                    height={400}
                                    width={700}
                                    className='w-full h-full object-cover'
                                    src={siteInformation?.about?.image4 || '/placeholder.svg?height=400&width=700&query=Himalayan panorama'}
                                    alt='home page gallery image'
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
