import endpoints from '@/constant/endpoints';
import { TActivity, TDestination } from '@/types/types';
import { get } from '@/utils/request-hander';
import { notFound } from 'next/navigation';
import React from 'react';

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
              <div className='col-lg-7'>
                <div className='row'>
                  {destinations.length > 0 && (
                    <div className='col-sm-6'>
                      <div className='desti-item overlay-desti-item'>
                        <figure className='desti-image'>
                          <img
                            src={destinations[0].image}
                            style={{
                              height: '400px',
                            }}
                            alt=''
                          />
                        </figure>
                        <div className='meta-cat bg-meta-cat'>
                          <a href={destinations[0].activity?.slug}>
                            {activity?.name}
                          </a>
                        </div>
                        <div className='desti-content'>
                          <h3>
                            <a
                              href={activity.slug + '/' + destinations[0].slug}>
                              {destinations[0].name}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
                  {destinations.length > 1 && (
                    <div className='col-sm-6'>
                      <div className='desti-item overlay-desti-item'>
                        <figure className='desti-image'>
                          <img
                            src={destinations[1].image}
                            style={{
                              height: '400px',
                            }}
                            alt=''
                          />
                        </figure>
                        <div className='meta-cat bg-meta-cat'>
                          <a href={destinations[1].activity?.slug}>
                            {activity?.name}
                          </a>
                        </div>
                        <div className='desti-content'>
                          <h3>
                            <a
                              href={activity.slug + '/' + destinations[1].slug}>
                              {destinations[1].name}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='row'>
                  {destinations.length > 2 && (
                    <div className='col-md-6 col-xl-12'>
                      <div className='desti-item overlay-desti-item'>
                        <figure className='desti-image'>
                          <img
                            src={destinations[2].image}
                            style={{
                              height: '300px',
                            }}
                            alt=''
                          />
                        </figure>
                        <div className='meta-cat bg-meta-cat'>
                          <a href={destinations[2].activity?.slug}>
                            {activity?.name}
                          </a>
                        </div>
                        <div className='desti-content'>
                          <h3>
                            <a
                              href={activity.slug + '/' + destinations[2].slug}>
                              {destinations[2].name}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
                  {destinations.length > 3 && (
                    <div className='col-md-6 col-xl-12'>
                      <div className='desti-item overlay-desti-item'>
                        <figure className='desti-image'>
                          <img
                            src={destinations[3].image}
                            style={{
                              height: '300px',
                            }}
                            alt=''
                          />
                        </figure>
                        <div className='meta-cat bg-meta-cat'>
                          <a href={destinations[3].activity?.slug}>
                            {activity?.name}
                          </a>
                        </div>
                        <div className='desti-content'>
                          <h3>
                            <a
                              href={activity.slug + '/' + destinations[3].slug}>
                              {destinations[3].name}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* destination section html start */}
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
