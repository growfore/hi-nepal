'use client';
import * as React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export function Patners() {
  const images = [
    '/taan.png',
    '/natalogo.png',
    '/nepal-government.png',
    '/nepal-parbatarohan-sangh.png',
    '/nepal-tourism-board.png',
  ];
  // const [settings, setSettings] = React.useState({
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  // });
  // React.useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     if (window.innerWidth < 900) {
  //       setSettings({
  //         ...settings,
  //         slidesToShow: 2,
  //       });
  //     }
  //     if (window.innerWidth < 600) {
  //       setSettings({
  //         ...settings,
  //         slidesToShow: 1,
  //       });
  //     }
  //   }
  // }, []);
  return (
    <>
      <div  className='grid grid-cols-2 md:grid-cols-5 px-8 justify-center items-center'>
        {images.map((image, index) => {
          return (
            <div>
              <Image src={"/hinepal" + image} alt={image} height={200} width={200}/>
            </div>
          )
        })}
      </div>
      {/* <div className='client-section'>
        <div className='container'>
          <div className='client-wrap client-slider secondary-bg'>
            <Slider centerMode slidesToShow={5} infinite className='flex gap-4'>
                {images.map((image, index) => (
                  <Image key={index}
                    height={200}
                    width={200}
                    className='bg-white rounded-md'
                    src={'/hinepal' + image}
                    alt=''
                  />
                ))}
            </Slider>
          </div>
        </div>
      </div> */}
    </>
  );
}
