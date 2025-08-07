import * as React from 'react';
import Image from 'next/image';

export function Patners() {
  const images = [
    '/taan.png',
    '/natalogo.png',
    '/nepal-government.png',
    '/nepal-parbatarohan-sangh.png',
    '/nepal-tourism-board.png',
  ];
  return (
    <>
      <div className='container grid grid-cols-2 md:grid-cols-5 px-8 justify-center items-center mx-auto'>
        {images.map((image, index) => {
          return (
            <div key={index} className='flex justify-center items-center p-4'>
              <Image src={"/hinepal" + image} alt={image} height={200} width={200} />
            </div>
          )
        })}
      </div>
    </>
  );
}
