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
import { Headset, LucideCalendar, LucideMail, LucideMap, LucideMapPin, LucidePhone, LucideStar, LucideUsers } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import Numbers from './_components/Numbers';
import Gallery from './_components/Gallery';
import ContactSection from './_components/ContactSection';

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
    },
    failure: (message) => {
      console.log("Carousel Error:", message);
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
      <ExploreTop />
      <TrekkingPackages />
      <Numbers />
      <Activities />
      <Gallery siteInformation={siteInformation} />
      <Patners />
      <BlogHome />
      {/* <section
        className='subscribe-section'
        style={{ backgroundImage: `url(${siteInformation?.bgImage})` }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='section-heading section-heading-white'>
                <h5 className='dash-style'>HOLIDAY PACKAGE OFFER</h5>
                <h2>HOLIDAY SPECIAL 10% OFF!</h2>
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
                      disabled
                      defaultValue='SIGN UP NOW!'
                    />
                  </form>
                </div>
                <p>*We never share your email address with third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Teams />
      <ProgressSection reviews={reviews} />
      <ContactSection siteInformation={siteInformation} />
    </main>
  );
}