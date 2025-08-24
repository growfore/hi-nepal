import endpoints from '@/constant/endpoints';
import { TSiteInformation } from '@/types/types';
import { get } from '@/utils/request-hander';
import siteStore from '@/zustand/store';
import { Hero } from './_components/hero';
import { Partners } from './_components/partners';
import Numbers from './_components/numbers';
import Gallery from './_components/Gallery';
import PopularDestinations from './_components/popular-destinations';
import PopularPackages from './_components/popular-packages';
import BlogHome from './_components/blogs';
import Activities from './_components/activities';
import Team from './_components/team';
import AdventureSection from '@/components/adventure-section';
import { headers } from 'next/headers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hi Nepal Travels and Treks Pvt. Ltd. | Home',
  description: 'Hi Nepal Travels and Treks Pvt. Ltd.',
  keywords:
    'Hi Nepal,Trekking,Adventure, Best trekking agency in nepal,Visit Nepal 2025,Best place to visit in Nepal',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL 
  }
};
 
export default async function Home() {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const fullUrl = `${protocol}://${host}`;
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
    <>
      <main id='content' className='site-main'>
        <Hero carousels={carousels} />
        <PopularPackages />
        <PopularDestinations />
        <AdventureSection />
        <Numbers />
        <Activities />
        <Gallery siteInformation={siteInformation} />
        <Partners />
        <BlogHome />
        <Team />
        {/* <Testimonials reviews={reviews} /> */}
        {/* <ContactSection siteInformation={siteInformation} /> */}
      </main>
    </>
  );
}