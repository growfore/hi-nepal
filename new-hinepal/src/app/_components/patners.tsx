'use client';
import * as React from 'react';
import Slider from 'react-slick';

export function Patners() {
  const images = [
    '/taan.png',
    '/natalogo.png',
    '/nepal-government.png',
    '/nepal-parbatarohan-sangh.png',
    '/nepal-tourism-board.png',
  ];
  const [settings, setSettings] = React.useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  });
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      require('slick-carousel/slick/slick.css');
      require('slick-carousel/slick/slick-theme.css');
      if (window.innerWidth < 900) {
        setSettings({
          ...settings,
          slidesToShow: 2,
        });
      }
      if (window.innerWidth < 600) {
        setSettings({
          ...settings,
          slidesToShow: 1,
        });
      }
    }
  }, []);
  return (
    <div className='client-section'>
      <div className='container'>
        <div className='client-wrap client-slider secondary-bg'>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div className='client-item' key={index}>
                <figure>
                  <img
                    className='bg-white rounded '
                    src={'/hinepal' + image}
                    alt=''
                  />
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
