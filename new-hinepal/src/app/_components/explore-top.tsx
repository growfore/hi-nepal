import endpoints from '@/constant/endpoints';
import { TDestination } from '@/types/types';
import { get } from '@/utils/request-hander';
import Image from 'next/image';
import Link from 'next/link';
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
              <h5 className='dash-style'>POPULAR DESTINATIONS</h5>
              <h2>Top Destinations</h2>
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
            <div className='col-lg'>
              <div className='row'>
                {topDestinations.slice(0, 3).map((d, index) => {
                  return (
                    <Link key={index} className='col-sm-4' href={"/activities/trekking/" + d.slug}>
                      <div className=''>
                        <div className='desti-item overlay-desti-item'>
                          <figure className='desti-image'>
                            <Image
                              src={d.image}
                              loading='lazy'
                              width={600}
                              height={400}
                              quality={75}
                              alt={d.name}
                            />
                          </figure>
                          <div className='meta-cat bg-meta-cat'>
                            {d.activity.name}
                          </div>
                          <div className='desti-content'>
                            <h3>
                              {d.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='btn-wrap text-center'>
            <Link href='/activities/trekking' className='button-primary'>
              More Trekking Destination
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTop;
