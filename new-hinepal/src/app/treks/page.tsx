import endpoints from '@/constant/endpoints';
import { TActivity, TDestination } from '@/types/types';
import { get } from '@/utils/request-hander';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const Activity = async ({
  params,
}: {
  params: { 'activity-slug': string };
}) => {
  const destinations: TDestination[] = [] as TDestination[];
  
  let activity: TActivity = {} as TActivity;
  if (!params['activity-slug']) {
    notFound();
  }
  await get({
    endPoint: endpoints.ACTIVITIES + '/' + params['activity-slug'],
    token: '',
    success: (_, res) => {
      destinations.push(...res.data.destinations);
      activity = res.data;
      console.log("Destinations:", destinations)
      console.log("Activiites: ", activity)
    },
    failure: () => {
      notFound();
    },
  });

  return (
    <main id='content' className='site-main'>
      {/* Inner Banner html start*/}
      <section className='inner-banner-wrap'>
        <div
          className='inner-baner-container'
          style={{ backgroundImage: 'url(' + activity.image + ')' }}>
          <div className='container'>
            <div className='inner-banner-content'>
              <h1 className='inner-title'>{activity.name}</h1>
            </div>
          </div>
        </div>
        <div className='inner-shape' />
      </section>
      {/* Inner Banner html end*/}
      {/* destination field html end */}
      <section className='destination-section destination-page'>
        <div className='container'>
          <div className='destination-inner destination-three-column'>
            <div className='row'>
              {
                destinations && destinations.length > 0 && (
                  destinations.map((dest, idx) => {
                    return (
                      <Link key={idx} href={`${dest.activity?.slug}/${dest.slug}`} className='col-sm-6'>
                          <div className='desti-item overlay-desti-item'>
                            <figure className='desti-image'>
                              <Image
                              priority={false}
                              width={600}
                              height={400}
                                src={dest.image}
                                alt={dest.name}
                              />
                            </figure>
                            <div className='meta-cat bg-meta-cat'>
                                {activity?.name}
                            </div>
                            <div className='desti-content'>
                              <h3>
                                  {dest.name}
                              </h3>
                            </div>
                          </div>
                      </Link>
                    )
                  })
                )
              }
            </div>
          </div>
        </div>
      </section>

      {/* subscribe section html start */}
      <section
        className='subscribe-section'
        style={{ backgroundImage: 'url(' + activity.image + ')' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='section-heading section-heading-white'>
                <h5 className='dash-style'>HOLIDAY PACKAGE OFFER</h5>
                <h2>HOLIDAY SPECIAL 25% OFF!</h2>
                <h4>
                  Sign up now to recieve hot special offers and information
                  about the best tour packages, updates and discounts !!
                </h4>
                <div className='newsletter-form'>
                  <form>
                    <input
                      type='email'
                      name='s'
                      placeholder='Your Email Address'
                    />
                    <input
                      type='submit'
                      name='signup'
                      defaultValue='SIGN UP NOW!'
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe html end */}
    </main>
  );
};

export default Activity;
