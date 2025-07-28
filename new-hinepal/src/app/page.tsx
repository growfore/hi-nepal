import endpoints from '@/constant/endpoints';
import { TSiteInformation } from '@/types/types';
import { get } from '@/utils/request-hander';
import siteStore from '@/zustand/store';
import { HeroSection } from './_components/hero-section';
import ExploreTop from './_components/explore-top';
import TrekkingPackages from './_components/trekking-packages';
import ProgressSection from './_components/progress-section';
import { Patners } from './_components/patners';
import Activities from './_components/activities';
import Teams from './_components/teams';
import BlogHome from './_components/blogs';
import { Headset , LucideUsers } from 'lucide-react';

export default async function Home() {
  let siteInformation: TSiteInformation = {} as TSiteInformation;
  siteInformation = siteStore.getState() as TSiteInformation;
  let reviews: {
    name: string;
    description: string;
    image: string;
    link: string;
  }[] = [];
  let carousels: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[] = [];


  await get({
    endPoint: endpoints.CAROUSELS + "/home",
    token: '',
    success: (message, res) => {
      carousels = res.data;
      console.log("carousel response:", carousels)
    },
    failure: (message) => {
      console.log("Carousel Error:",message);
    },
  });
  await get({
    endPoint: endpoints.REVIEWS,
    token: '',
    success: (message, res) => {
      reviews = res.data;
    },
    failure: (message) => {
      console.log('Reviews Error:', message);
    },
  });

  return (
    <main id='content' className='site-main'>
      <HeroSection carousels={carousels} />
      {/* Home search field html start */}
      {/* search search field html end */}
      <ExploreTop />
      {/* Home packages section html start */}
      <TrekkingPackages />
      {/* packages html end */}
      {/* Home callback section html start */}
      <section className='callback-section'>
        <div className='container'>
          <div className='row no-gutters align-items-center'>
            <div className='col-lg-5'>
              <div className='callback-img ' style={{}}>
                <div className='video-button'>
                  {/* <a id='video-container' data-video-id='IUN664s7N-c'>
                    <i className='fas fa-play' />
                  </a> */}
                  <iframe
                    style={{
                      width: '500px',
                      maxWidth: '100vw',
                      minHeight: '500px',
                      border: 'none',
                    }}
                    src='https://www.youtube.com/embed/1Wfki2o-adM?si=Noc1MXhDPOW7bDHk'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='callback-inner'>
                <div className='section-heading section-heading-white'>
                  <h5 className='dash-style'>CALLBACK FOR MORE</h5>
                  <h2>GO TRAVEL. DISCOVER. REMEMBER US!!</h2>
                  <p>
                    Discover Nepal with Ni Nepal Travels and Treks Pvt. Ltd.—where every journey blends adventure, culture, and comfort. Explore more, worry less, travel smart.
                  </p>
                </div>
                <div className='callback-counter-wrap'>
                  <div className='counter-item'>
                    <div className='counter-icon'>
                      <LucideUsers color='white' size={40}/>
                    </div>
                    <div className='counter-content'>
                      <span className='counter-no'>
                        <span className='counter'>500</span>K+
                      </span>
                      <span className='counter-text'>Satisfied Clients</span>
                    </div>
                  </div>
                  <div className='counter-item'>
                    <div className='counter-icon'>
                      <LucideUsers color='white' size={40}/>
                    </div>
                    <div className='counter-content'>
                      <span className='counter-no'>
                        <span className='counter'>250</span>K+
                      </span>
                      <span className='counter-text'>Satisfied Clients</span>
                    </div>
                  </div>
                  <div className='counter-item'>
                    <div className='counter-icon'>
                      <LucideUsers color='white' size={40}/>
                    </div>
                    <div className='counter-content'>
                      <span className='counter-no'>
                        <span className='counter'>15</span>K+
                      </span>
                      <span className='counter-text'>Satisfied Clients</span>
                    </div>
                  </div>
                  <div className='counter-item'>
                    <div className='counter-icon'>
                      <LucideUsers color='white' size={40}/>
                    </div>
                    <div className='counter-content'>
                      <span className='counter-no'>
                        <span className='counter'>10</span>K+
                      </span>
                      <span className='counter-text'>Satisfied Clients</span>
                    </div>
                  </div>
                </div>
                <div className='support-area'>
                  <div className='support-icon'>
                    <Headset color='green' size={40}/>
                  </div>
                  <div className='support-content'>
                    <h4>Our 24/7 Emergency Phone Services</h4>
                    <h3>
                      <a href='tel:+9779856035091'>Call: +977 985-6035091</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* callback html end */}
      {/* Home activity section html start */}
      <Activities />
      {/* activity html end */}

      {/* Home special section html start */}
      <section className='best-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='section-heading '>
                <h5 className='dash-style'>OUR TOUR GALLERY</h5>
                <h2>{siteInformation?.about?.title}</h2>
                <p>{siteInformation?.about?.description || ''}</p>
              </div>
              <figure className='gallery-img h-100'>
                <img
                  src={siteInformation?.about?.image1 || '/img6.jpg'}
                  alt='home page gallery image'
                />
              </figure>
            </div>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-sm-6'>
                  <figure className='gallery-img w-100 '>
                    <img
                      className='h-100 w-100'
                      src={siteInformation?.about?.image2 || '/img6.jpg'}
                      alt='home page gallery image'
                    />
                  </figure>
                </div>
                <div className='col-sm-6'>
                  <figure className='gallery-img'>
                    <img
                      src={siteInformation?.about?.image3 || '/img6.jpg'}
                      alt='home page gallery image'
                    />
                  </figure>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <figure className='gallery-img'>
                    <img
                      style={{
                        maxHeight: '400px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                      src={siteInformation?.about?.image4 || '/img6.jpg'}
                      alt='home page gallery image'
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* best html end */}
      {/* Home client section html start */}
      <Patners />
      <BlogHome />
      {/* client html end */}
      {/* Home subscribe section html start */}
      <section
        className='subscribe-section'
        style={{ backgroundImage: `url(${siteInformation?.bgImage})` }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='section-heading section-heading-white'>
                <h5 className='dash-style'>HOLIDAY PACKAGE OFFER</h5>
                <h2>HOLIDAY SPECIAL 10% OFF !</h2>
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
                <p>*We never share your email address with third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe html end */}
      {/* Home Teams  section html start */}
      <section className='blog-section'>
        <div className='container'>
          <div className='section-heading text-center'>
            <div className='row'>
              <div className='col-lg-8 offset-lg-2'>
                <h5 className='dash-style'> OUR TEAM</h5>
                <h2>Available Guides </h2>
                <p>
                  We are a team of experienced tour guides who are passionate
                  about sharing our knowledge and expertise with you.
                </p>
              </div>
            </div>
          </div>

          <Teams />
        </div>
      </section>
      {/* blog html end */}
      {/* Home testimonial section html start */}
      <ProgressSection reviews={reviews} />
      {/* testimonial html end */}
      {/* Home contact details section html start */}
      <section
        className='contact-section'
        style={{
          height: '100%',
          paddingTop: '100px',
        }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div
                className='contact-img'
                style={{
                  // backgroundImage: 'url(' + siteInformation?.footerImg + ')',
                  maxHeight: '100px',
                  background: 'oklch(98.5% 0 0)',
                  borderRadius: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  overflow: 'hidden',
                  padding: '20px',
                }}>
                  <img src={siteInformation?.footerImg} alt='Footer Image' />
                </div>
            </div>
            <div className='col-lg-8'>
              <div className='contact-details-wrap'>
                <div className='row'>
                  <div className='col-sm-4'>
                    <div className='contact-details'>
                      <div className='contact-icon'>
                        <img src='/icons/icon12.png' alt='' />
                      </div>
                      <ul>
                        <li>
                          <a href={`mailto:${siteInformation?.email1}`}>
                            {siteInformation?.email1}
                          </a>
                        </li>
                        <li>
                          <a href={`mailto:${siteInformation?.email2}`}>
                            {siteInformation?.email2}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='contact-details'>
                      <div className='contact-icon'>
                        <img src='/icons/icon13.png' alt='' />
                      </div>
                      <ul>
                        <li>
                          <a href={`tel:${siteInformation?.phone1}`}>
                            {siteInformation?.phone1}
                          </a>
                        </li>
                        <li>
                          <a href={`tel:${siteInformation?.phone2}`}>
                            {siteInformation?.phone2}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='contact-details'>
                      <div className='contact-icon'>
                        <img src='/icons/icon14.png' alt='' />
                      </div>
                      <ul>
                        <li>{siteInformation?.location}</li>
                        <li>{siteInformation?.address}</li>
                        {/* <li>
                      36 Street, Melbourne
                    </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact-btn-wrap'>
                <h3>LET'S JOIN US FOR MORE UPDATE !!</h3>
                <a href='#' className='button-primary'>
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  contact details html end */}
    </main>
  );
}
