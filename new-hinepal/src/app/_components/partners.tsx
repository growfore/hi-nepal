import * as React from 'react';
import Image from 'next/image';

export function Partners() {
  const images = [
    '/taan.webp',
    '/nepal-association-of-tour-and-travel-agents-logo.webp',
    '/nepal-government.webp',
    '/nepal-mountaineering-association.webp',
    '/nepal-tourism-board.webp',
  ];
  return (
    <div className='flex flex-col items-center'>
      <p className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
       we are associated with 
      </p>
      <div className='container grid grid-cols-2 md:grid-cols-5 px-8 justify-center items-center mx-auto'>
        {images.map((image, index) => {
          return (
            <div key={index} className='flex justify-center items-center p-4'>
              <Image src={"/assets" + image} alt={image} height={200} width={200} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
