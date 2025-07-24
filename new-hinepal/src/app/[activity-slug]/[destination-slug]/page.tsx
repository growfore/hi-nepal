import React from 'react';
import Activities from '../../_components/activities';
import { TDestinationSingle, TPackages } from '@/types/types';
import { get } from '@/utils/request-hander';
import endpoints from '@/constant/endpoints';
import PackageCard from '@/components/package-card';
import { notFound } from 'next/navigation';
import Head from 'next/head';

const Packages = async ({
  params,
}: {
  params: { 'destination-slug': string };
}) => {
  const packages: TPackages = [];
  let destination: TDestinationSingle = {} as TDestinationSingle;

  await get({
    endPoint: endpoints.DESTINATIONS + `/${params['destination-slug']}`,
    token: '',
    success: (message, res) => {
      packages.push(...res.data.packages);
      destination = res.data;
    },
    failure: (message) => {
      notFound();
    },
  });

  return (
    <>
    <Head>
    <title>{params['destination-slug']}</title> 
    </Head>
    <main id='content' className='site-main'>
      {/* Inner Banner html start*/}
      <section className='inner-banner-wrap'>
        <div
          className='inner-baner-container'
          style={{ backgroundImage: 'url(' + destination.image + ')' }}>
          <div className='container'>
            <div className='inner-banner-content'>
              <h1 className='inner-title'> {destination.name}</h1>
            </div>
          </div>
        </div>
        <div className='inner-shape' />
      </section>
      {/* Inner Banner html end*/}
      {/* packages html start */}
      <div className='package-section'>
        <div className='container'>
          <div className='package-inner'>
            <div className='row'>
              {packages.map((item: TPackages[0], index) => (
                <PackageCard
                  key={index}
                  item={item}
                  destination={destination}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* packages html end */}
      <Activities />
      {/* activity html end */}
    </main>
</>
  );
};

export default Packages;
