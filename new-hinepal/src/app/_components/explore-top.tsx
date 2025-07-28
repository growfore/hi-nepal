import endpoints from '@/constant/endpoints';
import { TDestination } from '@/types/types';
import { get } from '@/utils/request-hander';
import Image from 'next/image';
import React from 'react';

const ExploreTop = async () => {
  const topDestinations: TDestination[] = [];
  await get({
    endPoint: endpoints.DESTINATIONS + '/top',
    token: '',
    success: (message, res) => {
      topDestinations.push(...res.data);
    },
    failure: (message) => {
      console.log(message);
    },
  });
  return (
    <section className='destination-section'>
      <div className='container'>
        <div className='section-heading'>
          <div className='row align-items-end'>
            <div className='col-lg-7'>
              <h5 className='dash-style'>POPULAR DESTINATION</h5>
              <h2>TOP DESTINATION</h2>
            </div>
            <div className='col-lg-5'>
              <div className='section-disc'>
                Hi Nepal Travels & Treks is a premier travel agency specializing
                in unforgettable trekking and adventure experiences across
                Nepal. From breathtaking mountain trails to rich cultural
                journeys, we offer expertly guided treks, customized tours, and
                seamless travel services.
              </div>
            </div>
          </div>
        </div>
        <div className='destination-inner destination-three-column'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='row'>
                {topDestinations.length > 0 && (
                  <div className='col-sm-6'>
                    <div className='desti-item overlay-desti-item'>
                      <figure className='desti-image'>
                        <Image
                          src={topDestinations[0].image}
                          width={600}
                          height={400}
                          style={{
                            height: '400px',
                            objectFit: 'cover',
                          }}
                          alt=''
                        />
                      </figure>
                      <div className='meta-cat bg-meta-cat'>
                        <a href={topDestinations[0].activity.slug}>
                          {topDestinations[0].activity.name}
                        </a>
                      </div>
                      <div className='desti-content'>
                        <h3>
                          <a href={'/trekking/' + topDestinations[0].slug}>
                            {topDestinations[0].name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
                {topDestinations.length > 1 && (
                  <div className='col-sm-6'>
                    <div className='desti-item overlay-desti-item'>
                      <figure className='desti-image'>
                        <Image
                          src={topDestinations[1].image}
                          width={600}
                          height={400}
                          style={{
                            height: '400px',
                            objectFit: 'cover',
                          }}
                          alt=''
                        />
                      </figure>
                      <div className='meta-cat bg-meta-cat'>
                        <a href={topDestinations[1].activity.slug}>
                          {topDestinations[1].activity.name}
                        </a>
                      </div>
                      <div className='desti-content'>
                        <h3>
                          <a href={'/trekking/' + topDestinations[1].slug}>
                            {topDestinations[1].name}
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
                {topDestinations.length > 2 && (
                  <div className='col-md-6 col-xl-12'>
                    <div className='desti-item overlay-desti-item'>
                      <figure className='desti-image'>
                        <Image
                          priority={false}
                          width={600}
                          height={400}
                          src={topDestinations[2].image}
                          style={{
                            height: '400px',
                            objectFit: 'cover',
                          }}
                          alt=''
                        />
                      </figure>
                      <div className='meta-cat bg-meta-cat'>
                        <a href={topDestinations[2].activity.slug}>
                          {topDestinations[2].activity.name}
                        </a>
                      </div>
                      <div className='desti-content'>
                        <h3>
                          <a href={'/trekking/' + topDestinations[2].slug}>
                            {topDestinations[2].name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
                {topDestinations.length > 3 && (
                  <div className='col-md-6 col-xl-12'>
                    <div className='desti-item overlay-desti-item'>
                      <figure className='desti-image'>
                        <Image
                          width={600}
                          height={400}
                          src={topDestinations[3].image}
                          style={{
                            height: '400px',
                            objectFit: 'cover',
                          }}
                          alt=''
                        />
                      </figure>
                      <div className='meta-cat bg-meta-cat'>
                        <a href={topDestinations[3].activity.slug}>
                          {topDestinations[3].activity.name}
                        </a>
                      </div>
                      <div className='desti-content'>
                        <h3>
                          <a href={'/trekking/' + topDestinations[3].slug}>
                            {topDestinations[3].name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='btn-wrap text-center'>
            <a href='/trekking' className='button-primary'>
              More Trekking Destination
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTop;
