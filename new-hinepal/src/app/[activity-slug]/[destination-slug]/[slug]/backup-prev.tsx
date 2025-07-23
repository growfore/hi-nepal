import endpoints from '@/constant/endpoints';
import { TPackageDetails } from '@/types/types';
import { get } from '@/utils/request-hander';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import React from 'react';
import GallerySlider from './_components/gallery-slider';
import Introduction from './_components/introduction';
import Itenary from './_components/itenary';
import Includes from './_components/includes';
import GoodToKnow from './_components/good-to-know';
import { notFound } from 'next/navigation';

const activites = async ({ params }: { params: Params }) => {
  let details: TPackageDetails = {} as TPackageDetails;
  let relatedProducts: TPackageDetails[] = [] as TPackageDetails[];

  await get({
    endPoint: endpoints.PACKAGES + '/' + params.slug,
    token: '',
    success: (_, res) => {
      details = res.data.package;
      relatedProducts = res.data.relatedProducts;
    },
    failure: (message) => {
      notFound();
    },
  });
  return (
    <main id='content' className='site-main'>
      {/* Inner Banner html start*/}
      <div>
        {JSON.stringify(details, null, 2)}
      </div>
      <section className='inner-banner-wrap'>
        <div
          className='inner-baner-container'
          style={{ backgroundImage: 'url(' + details.banner + ')' }}>
          <div className='container'>
            <div className='inner-banner-content'>
              <h1 className='inner-title'>{details.title} this is top image overlay text </h1>

              {/* <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='/'>Home</a>
                  </li>
                  <li className='breadcrumb-item'>
                    
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    {details.title}
                  </li>
                </ol>
              </nav> */}
            </div>
          </div>
        </div>
        <div className='inner-shape' />
      </section>
      {/* Inner Banner html end*/}
      <div className='single-tour-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='single-tour-inner'>
                <h2>{details.title}</h2>
                <figure className='feature-image'>
                  <img src='assets/images/img27.jpg' alt='' />
                  <div className='package-meta text-center'>
                    <ul>
                      <li>
                        <i className='far fa-clock' />
                        {details.duration}
                      </li>
                      <li>
                        <i className='fas fa-user-friends' />
                        People: {details.groupSize}
                      </li>
                      <li>
                        <i className='fas fa-map-marked-alt' />
                        {details.subtitle}
                      </li>
                    </ul>
                  </div>
                </figure>
                {
                  <div className='tab-container'>
                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          id='overview-tab'
                          data-toggle='tab'
                          href='#overview'
                          role='tab'
                          aria-controls='overview'
                          aria-selected='true'>
                          Introduction
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='itinerary-tab'
                          data-toggle='tab'
                          href='#itinerary'
                          role='tab'
                          aria-controls='itinerary'
                          aria-selected='false'>
                          Itinerary
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='includes-tab'
                          data-toggle='tab'
                          href='#includes'
                          role='tab'
                          aria-controls='includes'
                          aria-selected='false'>
                          Includes
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='good-to-know-tab'
                          data-toggle='tab'
                          href='#good-to-know'
                          role='tab'
                          aria-controls='good-to-know'
                          aria-selected='false'>
                          Good To Know
                        </a>
                      </li>
                      {/* <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='map-tab'
                          data-toggle='tab'
                          href='#map'
                          role='tab'
                          aria-controls='map'
                          aria-selected='false'>
                          Map
                        </a>
                      </li> */}
                    </ul>
                    <div className='tab-content' id='myTabContent'>
                      <Introduction
                        introduction={details?.introduction || ''}
                      />
                      <Itenary itenary={details?.itenary || ''} />
                      <Includes includes={details?.includes || ''} />
                      <GoodToKnow goodtoknow={details?.goodtoknow || ''} />
                      <div
                        className='tab-pane'
                        id='map'
                        role='tabpanel'
                        aria-labelledby='map-tab'>
                        <div className='map-area'>
                          <Image
                            src={details.map || ''}
                            alt='map'
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
                <GallerySlider details={details} />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='sidebar'>
                <div className='package-price'>
                  <h5 className='price'>
                    <span>${details.price}</span> / per person
                  </h5>
                  <div className='start-wrap'>
                    <div className='rating-start' title='Rated 5 out of 5'>
                      <span style={{ width: `${details.rating || 4 * 20}%` }} />
                    </div>
                  </div>
                </div>
                <div className='widget-bg booking-form-wrap'>
                  <h4 className='bg-title'>Booking</h4>
                  <form className='booking-form'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <input
                            name='name_booking'
                            type='text'
                            placeholder='Full Name'
                          />
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <input
                            name='email_booking'
                            type='text'
                            placeholder='Email'
                          />
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <input
                            name='phone_booking'
                            type='text'
                            placeholder='Number'
                          />
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <input
                            className='input-date-picker'
                            type='text'
                            name='s'
                            autoComplete='off'
                            readOnly={true}
                            placeholder='Date'
                          />
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <h4 className=''>Add Options</h4>
                      </div>
                      <div className='col-sm-6'>
                        <div className='form-group'>
                          <label className='checkbox-list'>
                            <input type='checkbox' name='s' />
                            <span className='custom-checkbox' />
                            Tour guide
                          </label>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='form-group'>
                          <label className='checkbox-list'>
                            <input type='checkbox' name='s' />
                            <span className='custom-checkbox' />
                            Insurance
                          </label>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='form-group'>
                          <label className='checkbox-list'>
                            <input type='checkbox' name='s' />
                            <span className='custom-checkbox' />
                            Dinner
                          </label>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='form-group'>
                          <label className='checkbox-list'>
                            <input type='checkbox' name='s' />
                            <span className='custom-checkbox' />
                            Bike rent
                          </label>
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group submit-btn'>
                          <input
                            type='submit'
                            name='submit'
                            defaultValue='Boook Now'
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='widget-bg information-content text-center'>
                  <h5>TRAVEL TIPS</h5>
                  <h3>NEED TRAVEL RELATED TIPS &amp; INFORMATION</h3>
                  <p>
                    Mollit voluptatem perspiciatis convallis elementum corporis
                    quo veritatis aliquid blandit, blandit torquent, odit
                    placeat.{' '}
                  </p>
                  <a href='#' className='button-primary'>
                    GET A QUOTE
                  </a>
                </div>
                <div
                  className='travel-package-content text-center'
                  style={{ backgroundImage: 'url(assets/images/img11.jpg)' }}>
                  <h5>MORE PACKAGES</h5>
                  <h3>OTHER TRAVEL PACKAGES</h3>
                  {/* <p> 
                     
                  </p> */}
                  <ul>
                    {relatedProducts?.map((item: any, index: number) => (
                      <li>
                        <a href={item.slug}>
                          <i className='far fa-arrow-alt-circle-right' />
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* subscribe section html start */}
      {/* <section
        className='subscribe-section'
        style={{ backgroundImage: 'url(assets/images/img16.jpg)' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='section-heading section-heading-white'>
                <h5 className='dash-style'>HOLIDAY PACKAGE OFFER</h5>
                <h2>HOLIDAY SPECIAL 25% OFF !</h2>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Eaque adipiscing, luctus eleifend temporibus occaecat
                  luctus eleifend tempo ribus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* subscribe html end */}
    </main>
  );
};

export default activites;
