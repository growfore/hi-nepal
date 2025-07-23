'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const Teams = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (window.innerWidth < 1200) {
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
  }, []);
  return (
    <Slider className='gap-2 team-slider' {...settings}>
      {teamData.map((item, index) => {
        return (
          <div
            key={index}
            className=''
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <article className='post'>
              {/* <figure className='feature-image'>
                <a href='#'> */}
              <Image
                height={300}
                width={300}
                priority={false}
                alt={item.name}
                src={item.image}
                style={{
                  height: '300px',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              {/* </a>
              </figure> */}
              <div className='entry-content'>
                <h3>
                  {/* <a href='#'>{item.name}</a> */}
                  {item.name}
                </h3>
                <div className='entry-meta'>
                  <span className='byline font-weight-bold'>
                    {/* <a href='#'>{item.position}</a> */}
                    {item.position}
                  </span>
                  {/* <span className='posted-on '>
                          <a href='#'>August 17, 2021</a>
                        </span> */}
                  {/* <span className='comments-link'>
                          <a href='#'>No Comments</a>
                        </span> */}
                </div>
                <div>{item.description}</div>
              </div>
            </article>
          </div>
        );
      })}
    </Slider>
  );
};

export default Teams;

const teamData = [
  {
    name: 'YOG PRASAD POUDEL',
    position: 'Travel Guide',
    image: '/hinepal/yogparsadsubedi.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'BHUWAN SHIVABHAKTI',
    position: 'Travel Guide',
    image: '/hinepal/bhuwan Shivabhakti.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'BAM BAHADUR TAMANG',
    position: 'Travel Guide',
    image: '/hinepal/Bam Bahadur Tamang.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'KRISHNA PRASAD SUBEDI',
    position: 'Travel Guide',
    image: '/hinepal/Krishna Prasad Subedi.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Prem Raj Dahal',
    position: 'Travel Guide',
    image: '/hinepal/prem raj Dahal.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Shovakhar Bhugai',
    position: 'Travel Guide',
    image: '/hinepal/Shovakhar Bhugai.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Sudip Subedi',
    position: 'Travel Guide',
    image: '/hinepal/sudip Subedi.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Ram Krishna Timilsina',
    position: 'Travel Guide',
    image: '/hinepal/ramkrishnatimilsina.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Shree Krishna Subedi',
    position: 'Travel Guide',
    image: '/hinepal/shreekrishnasubedi.jpeg',
    description:
      ' We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
];
