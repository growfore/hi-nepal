import PackageCard from '@/components/package-card';
import endpoints from '@/constant/endpoints';
import { TPackages } from '@/types/types';
import { get } from '@/utils/request-hander';
import Link from 'next/link';
import React from 'react';

const TrekkingPackages = async () => {
  let packages: TPackages = [];
  await get({
    endPoint: endpoints.PACKAGES,
    params: { query: 'trekking' },
    token: '',
    success: (message, res) => {
      packages.push(...res.data.packages);
    },
    failure: (message) => {
      console.log(message);
    },
  });
  return (
    <section className='package-section'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
              <h5 className='dash-style'>EXPLORE GREAT PLACES</h5>
              <h2>POPULAR PACKAGES</h2>
              <p>
                Popular packages for trekking and adventure in Nepal
              </p>
            </div>
          </div>
        </div>
        <div className='package-inner'>
          <div className='row'>
            {packages.map(
              (item: TPackages[0], index) =>
                index < 3 && (
                  <PackageCard
                    key={index}
                    item={item}
                    destination={{
                      slug: item.destination.slug,
                      activity: {
                        name: 'Trekking',
                        slug: 'trekking',
                      },
                    }}
                  />
                )
            )}

          </div>
          <div className='btn-wrap text-center'>
            <Link href='/activities/trekking' className='button-primary'>
              VIEW ALL PACKAGES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekkingPackages;
