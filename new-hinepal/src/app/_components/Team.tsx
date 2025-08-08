import Image from 'next/image';
import React from 'react';

const Team = () => {
  return (
    <section className='py-16 md:py-24 lg:py-32 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='uppercase text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight'>
            Our Team
          </h2>
          <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4'>
            Meet the dedicated professionals who make your travel dreams a reality.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8'>
          {teamData.map((item, index) => {
            return (
              <div key={index} className='flex justify-center'>
                <article className='bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm'>
                  <figure className='w-full h-72 relative'>
                    <Image
                      height={300}
                      width={300}
                      priority={false}
                      alt={item.name}
                      src={item.image || '/placeholder.svg?height=300&width=300&query=team member'}
                      className='w-full h-full object-cover'
                    />
                  </figure>
                  <div className='p-6 text-center'>
                    <h3 className='text-xl font-bold text-dark-blue-900 mb-1'>
                      {item.name}
                    </h3>
                    <div className='text-orange-500 font-semibold text-sm mb-3'>
                      {item.position}
                    </div>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {/* {item.description} */}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

const teamData = [
  {
    name: 'YOG PRASAD POUDEL',
    position: 'Travel Guide',
    image: '/hinepal/yogparsadsubedi.jpeg', // Placeholder if actual image path is not available
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'BHUWAN SHIVABHAKTI',
    position: 'Travel Guide',
    image: '/hinepal/bhuwan Shivabhakti.jpeg',
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'BAM BAHADUR TAMANG',
    position: 'Travel Guide',
    image: '/hinepal/Bam Bahadur Tamang.jpeg',
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'KRISHNA PRASAD SUBEDI',
    position: 'Travel Guide',
    image: '/hinepal/Krishna Prasad Subedi.jpeg',
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Prem Raj Dahal',
    position: 'Travel Guide',
    image: '/hinepal/prem raj Dahal.jpeg',
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Shovakhar Bhugai',
    position: 'Travel Guide',
    image: '/hinepal/Shovakhar Bhugai.jpeg',
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Sudip Subedi',
    position: 'Travel Guide',
    image: '/hinepal/sudip Subedi.jpeg',
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Ram Krishna Timilsina',
    position: 'Travel Guide',
    image: '/hinepal/ramkrishnatimilsina.jpeg',
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
  {
    name: 'Shree Krishna Subedi',
    position: 'Travel Guide',
    image: '/hinepal/shreekrishnasubedi.jpeg',
    description: 'We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.',
  },
];
