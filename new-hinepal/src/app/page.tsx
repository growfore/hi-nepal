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
import { Metadata } from 'next';
import { getProxyUrl } from '@/utils/imageProxy';
import WhatsAppButton from '@/components/whatsapp-button';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hi Nepal Travels and Treks Pvt. Ltd. | Home",
    description: "Hi Nepal Travels and Treks is a trusted travel and trekking agency in Nepal, offering unforgettable treks, tours, and adventure holidays with expert guides.",
    keywords: "trekking agency in nepal, travel agency in nepal",
    alternates: {
      canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/",
    },
  };
}

export default async function Home() {
  let siteInformation: TSiteInformation = {} as TSiteInformation;
  siteInformation = siteStore.getState() as TSiteInformation;
  // let reviews: {
  //   name: string;
  //   description: string;
  //   image: string;
  //   link: string;
  // }[] = [];
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
      carousels = res.data.map((item: any) => ({
        ...item,
        image: getProxyUrl(item.image),
      }))
    },
    failure: (message) => {
      console.log("Carousel Error:", message);
    },
  });
  // await get({
  //   endPoint: endpoints.REVIEWS,
  //   token: '',
  //   success: (message, res) => {
  //     reviews = res.data;
  //   },
  //   failure: (message) => {
  //     console.log('Reviews Error:', message);
  //   },
  // });


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
        <WhatsAppButton/>
      </main>
    </>
  );
}