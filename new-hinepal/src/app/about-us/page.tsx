
import React from 'react';
import { DollarSign, MapPin, User, Users, Award, Activity, Globe, Hotel, Plane, Ticket } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { Metadata } from 'next';
import Team from '@/app/_components/team';

export const metadata: Metadata = {
  title: "About - Hi Nepal Travels and Treks",
  description: "Hi Nepal Travels and Treks is a certified travel and trekking agency in Nepal, offering personalized trekking, tours, and adventure sports with years of experience.",
  keywords: "trekking, tours, adventure sports, travel and trekking agency in nepal", 
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/about"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
const About = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
        {/* Inner Banner Section */}
        <section className='relative h-96 bg-cover bg-center flex items-center justify-center '>
          <div className="min-h-[40vh] mt-42 flex flex-col p-4  md:p-8 md:items-center border-b-2 border-black">
            <h1 className="font-bold text-6xl lg:text-9xl">About Us</h1>
            {/* <p className="text-left italic text-xl">Experience the adventure sport of a lifetime amidst the Himalayas, where every thrill comes with breathtaking views.</p> */}
          </div>
        </section>

        {/* About Service Section */}
        <section className='py-16 md:py-24 lg:py-32 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='mb-12 md:mb-16'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-end'>
                <div className=''>
                  <h5 className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
                    ABOUT US
                  </h5>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight mt-2'>
                    YOUR TRUSTED PARTNER FOR UNFORGETABLE NEPAL ADVENTURES
                  </h2>
                </div>
                <div className='text-gray-600 text-base md:text-lg leading-relaxed space-y-4'>
                  <p>
                    Hi Nepal Travels and Treks Pvt. Ltd. is a certified trekking and travel agency, known for its years of high-quality service in the tourism industry of Nepal. With over 20+ years of experience, our goal is to assist you in exploring all the corners of Nepal and make your journey worthwhile, which will last in your memories forever.
                    Our team of experienced guides and travel experts which are committed to providing you safe, responsible, and comfortable tour. We take pride in our professionalism, local knowledge, and dedication towards sustainable tourism. From the exciting trekking to the thrilling adventure sports, we lay out the best according to our demands and desires.
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
              <ServiceCard
                title='TREK AND HILLS'
                icon={DollarSign}
                description='Explore the iconic and thrilling treks such as Everest Base Camp, Annapurna Base Camp Trek, Langtang Gosaikunda Trek, and more, with us. If you are booking for short hikes, then we offer you the Sarangkot Hike, Thulakot Hike, Peace Pagoda Hike, etc.'
              />


              <ServiceCard
                title='ADVENTURE SPORTS'
                icon={MapPin}
                description='For the adventure sport enthusiasts, we provide exciting options such as paragliding, bungee, rafting, ziplining, and more. Each activity is guided by experts, ensuring your safety.'
              />
              <ServiceCard
                title='CUSTOM ITINERARIES'
                icon={User}
                description='We understand that every traveler is unique. Our team works closely with you to design a perfect itinerary according to your time and your preferences.'
              />

              <ServiceCard
                title='PERSONAL SERVICE'
                icon={User}
                description='Discover Nepal’s unique places full of historical and cultural significances. We offer planned tours like the Ghandruk Tour, Tilicho Lake Tour, Muktinath Tour, and many.'
              />


              <ServiceCard
                title='HOTEL BOOKING'
                icon={Hotel}
                description='Hotel Booking: We look after your stay ranging from the local tea house during trek to cozy lodges to luxurious hotels, ensuring your comfort and convenience.'
              />

              <ServiceCard
                title='AIRPORT PICKUP AND DROP'
                description="Our team makes sure you have a hassle-free travel throughout your journey. So, we arrange your pickup and drop-off services in a comfortable vehicle."
                icon={Plane}
              />

              <ServiceCard
                title='PERMIT'
                description='We handle all the necessary permits for your trek and travel to provide you a smooth experiences.'
                icon={Ticket}
              />
            </div>
            <div className='relative mt-16 rounded-xl overflow-hidden shadow-2xl aspect-video'
              style={{ backgroundImage: 'url()', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='absolute inset-0 flex items-center justify-center'>
                <iframe
                  className='w-full h-full'
                  src='https://www.youtube.com/embed/0sYC1vZAAfA'
                  title='Trekking to Mt. Everest Base Camp | Again After Earthquake'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>


        {/* Mission */}
        <section className='py-16 md:py-24 lg:py-32 bg-gray-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-12 md:mb-16'>
              <div className='max-w-3xl mx-auto'>
                <h5 className='text-orange-500 text-sm font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
                  OUR MISSION
                </h5>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-extrabold text-dark-blue-900 leading-tight mt-2 uppercase'>
                  Crafting Stories of Adventure, Joy, and Growth
                </h2>
                <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4'>
                  We aim to provide you with high-quality, safe, and sustainable travel experiences that will enhance your journey with us. We believe travel is more than just visiting places; it's about creating lasting memories. With our years of expertise, we desire to be a part of your happiness and excitement in every step, guiding you through the breathtaking mountains, thrilling adventures, and vibrant communities.
                  Your journey with Hi Nepal Travels and Treks is not just a trip, it’s a story of adventure, joy, and growth, which we are honored to help you write.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Team />
      </main>
    </div>
  );
};

export default About;

const counterData = [
  {
    icon: <Users className='w-10 h-10 text-white' />,
    value: '500K+',
    label: 'Satisfied Clients',
  },
  {
    icon: <Award className='w-10 h-10 text-white' />,
    value: '250K+',
    label: 'Awards Achieve',
  },
  {
    icon: <Activity className='w-10 h-10 text-white' />,
    value: '15K+',
    label: 'Active Members',
  },
  {
    icon: <Globe className='w-10 h-10 text-white' />,
    value: '10K+',
    label: 'Tour Destination',
  },
];
