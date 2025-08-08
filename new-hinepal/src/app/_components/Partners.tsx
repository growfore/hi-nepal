import * as React from 'react';
import Image from 'next/image';

export function Partners() {
  const images = [
    '/taan.png',
    '/natalogo.png',
    '/nepal-government.png',
    '/nepal-parbatarohan-sangh.png',
    '/nepal-tourism-board.png',
  ];
  return (
    <div className='flex flex-col items-center'>
      <h5 className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
       we are associated with 
      </h5>
      <div className='container grid grid-cols-2 md:grid-cols-5 px-8 justify-center items-center mx-auto'>
        {images.map((image, index) => {
          return (
            <div key={index} className='flex justify-center items-center p-4'>
              <Image src={"/hinepal" + image} alt={image} height={200} width={200} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
