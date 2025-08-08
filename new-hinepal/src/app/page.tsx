import endpoints from '@/constant/endpoints';
import { TSiteInformation } from '@/types/types';
import { get } from '@/utils/request-hander';
import siteStore from '@/zustand/store';
import { Hero } from './_components/hero';
import { Partners } from './_components/partners';
import Team from './_components/team';
import Numbers from './_components/numbers';
import Gallery from './_components/Gallery';
import ContactSection from './_components/contact-section';
import Testimonials from './_components/testimonials';
import PopularDestinations from './_components/popular-destinations';
import PopularPackages from './_components/popular-packages';
import BlogHome from './_components/blogs';
import Activities from './_components/activities';

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
      <Hero carousels={carousels} />
      <PopularDestinations/>
      <PopularPackages/>
      <Numbers />
      <Activities />
      <Gallery siteInformation={siteInformation} />
      <Partners />
      <BlogHome />
      <Team />
      {/* <Testimonials reviews={reviews} /> */}
      <ContactSection siteInformation={siteInformation} />
    </main>
  );
}