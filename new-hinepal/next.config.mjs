/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hinepaltreks.com',
      },
      {
        protocol: "https",
        hostname: "blogs.hinepaltreks.com",
      },
      {
        protocol: 'https',
        hostname: 'api.hinepaltreks.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4017'
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/trekking",
        destination:"/activities/trekking",
        permanent: true,
        statusCode: 301
      },
      {
        source: '/trekking/everest-region/gokyo-valley-trek',
        destination: '/gokyo-valley-trek',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/trekking/mansalu-region/mansalu-circuit-trek',
        destination: '/mansalu-circuit-trek',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/heli-tour/annapurna-heli-tour/tilicho-lake-helicopter-tour',
        destination: '/',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/blogs/tours-in-nepal-kathmandu-pokhara-chitwan',
        destination: '/',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/tour/day-hike/day-hike-in-santi-stupa',
        destination: '/world-peace-pagoda',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/trekking/hello-hello',
        destination: '/trekking',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/adventure-activity/zip-flyler',
        destination: '/adventure',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/wildlife-safari/bardiya-national-park',
        destination: '/bardiya-national-park-tour',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/tour/multi-day-tour',
        destination: '/activities/tours/multi-days-tour',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/trekking/dolpa-region',
        destination: '/activities/trekking/dolpo-region',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/adventure-activity/rafting',
        destination: '/adventure',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/wildlife-safari',
        destination: '/activities/tours/nature-wildlife',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/heli-tour/annapurna-heli-tour',
        destination: '/',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/tour/day-tour',
        destination: '/activities/tours/day-tours',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/adventure-activity/hot-air-balloon',
        destination: '/adventure',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/heli-tour',
        destination: '/',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/adventure-activity/atv-ride',
        destination: '/adventure',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/blogs/upper-mustang-trek-blog',
        destination: '/',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/trekking/annapurna-region',
        destination: '/activities/trekking/annapurna-region',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/tour',
        destination: 'https://hinepaltreks.com/activities/tours',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/tour/day-hike',
        destination: '/activities/tours/day-tours',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/adventure-activity/ultra-light-flying',
        destination: '/adventure',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/trekking/mustang-region',
        destination: '/',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/adventure-activity',
        destination: '/adventure',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/adventure-activity/paragliding',
        destination: '/adventure',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/adventure-activity/bungee',
        destination: '/adventure',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/trekking/everest-region',
        destination: '/activities/trekking/everest-region',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/region/annapurna',
        destination: '/activities/trekking/annapurna-region',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/trekking/mansalu-region',
        destination: '/activities/trekking/manaslu-region',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/mansalu-circuit-trek',
        destination: '/manaslu-circuit-trek',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/bardiya-national-park%20-tour',
        destination: '/bardiya-national-park-tour',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/t=um-valley-trek',
        destination: '/tsum-valley-trek',
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/langtang-valley-trek",
        destination:"/langtang-valley-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/chola-pass-gokyo-trek",
        destination: "/chola-pass-gokyo-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/gokyo-valley-trek",
        destination:"/gokyo-valley-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/everest-base-camp-trek",
        destination: "/everest-base-camp-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/everest-region/everest-base-camp-trek",
        destination: "/everest-base-camp-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/everest-region/chola-pass-gokyo-trek",
        destination: "/chola-pass-gokyo-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/langtang-gosaikunda-trek",
        destination: "/langtang-gosaikunda-trek",
        permanent: true,  
        statusCode: 301
      },
      {
        source: "/wildlife-safari/chitwan-national-park/chitwan-national-park-wildlife-safari",
        destination: "/chitwan-national-park-tour",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/manaslu-region/tsum-valley-trek",
        destination: "/tsum-valley-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/manaslu-region/manaslu-circuit-trek",
        destination: "/manaslu-circuit-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/wildlife-safari/bardiya-national-park/bardiya-national-park-safari",
        destination: "/bardiya-national-park-tour",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/mustang-region/upper-mustang-trek",
        destination: "/",
        permanent: false,
        statusCode: 302
      },
      {
        source: "/trekking/manaslu-region/manaslu-and-tsum-valley-circuit-trek",
        destination: "/manaslu-tsum-valley-circuit-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/langtang-region/langtang-gosaikunda-trek",
        destination: "/langtang-gosaikunda-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/langtang-region/langtang-valley-trek",
        destination: "/langtang-valley-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/langtang-region/helambu-trek",
        destination: "/helambu-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/everest-region/three-pass-trek",
        destination: "/three-passes-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/everest-region/renjo-la-pass-trek",
        destination: "/renjo-la-pass-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/everest-region/pikey-peak-trek",
        destination: "/pikey-peak-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/everest-region/gokyo-ri-trek",
        destination: "/gokyo-valley-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/everest-region/everest-base-camp-trek",
        destination: "/everest-base-camp-trek",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/trekking/everest-region/chola-pass-gokyo-trek",
        destination: "/chola-pass-gokyo-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/dolpa-region/upper-dolpa-trek",
        destination: "/upper-dolpo-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/panchase-hill-trekking",
        destination: "/panchase-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source:"/trekking/annapurna-region/nar-phu-valley-with-annapurna-circuit-trek",
        destination: "/",
        permanent: false,
        statusCode: 302
      },
      {
        source: "/trekking/dolpa-region/lower-dolpa-trek",
        destination: "/lower-dolpo-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/north-annapurna-base-camp-trek",
        destination: "/north-annapurna-base-camp-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/nar-phu-trek",
        destination: "/",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/millennium-trek-nepal",
        destination: "/",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/mardi-himal-treks",
        destination: "/mardi-himal-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/kori-kopuche-treks",
        destination: "/kapuche-lake-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/khopra-dhanda-hidden-lake-trek",
        destination: "/khopra-danda-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/jomsom-muktinath-trek",
        destination: "/jomsom-muktinath-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/australian-camp-trek",
        destination: "/",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/around-annapurna-trekking",
        destination: "/annapurna-base-camp-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/annapurna-panchase-hill-trekking",
        destination: "/panchase-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/ghorepani-poon-hill-trek",
        destination: "/ghorepani-poon-hill-trek",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/trekking/annapurna-region/annapurna-base-camp-trek",
        destination: "/annapurna-base-camp-trek",
        permanent: true,
        statusCode: 301 
      },
      {
        source: "/tour/multi-day-tour/nepal-tour-package",
        destination: "/activities/tours",
        permanent: true,
        statusCode: 301 
      },
      {
        source: "/tour/multi-day-tour/bardia-national-park",
        destination: "/bardiya-national-park-tour",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/tour/day-hike/the-epic-kristi-village-hike",
        destination: "/",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/tour/multi-day-tour/jungle-safari-at-chitwan-national-park",
        destination: "/chitwan-national-park-tour",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/tour/day-hike/day-hike-in-pokhara",
        destination: "/pokhara-valley-tour",
        permanent: true,
        statusCode: 301
      },
      {
       source: "/tour/day-hike/australian-camp-day-hike",
       destination: "/",
       permanent: true,
       statusCode: 301
      },
      {
        source: "/heli-tour/annapurna-heli-tour/kapuche-helicopter-tour",
        destination: "/kapuche-lake-trek",
        permanent: true,
        statusCode: 301
      }, 
      {
        source: "/heli-tour/annapurna-heli-tour/experience-the-beautiful-of-kapuche-lake-by-helicopter",
        destination: "/",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/heli-tour/annapurna-heli-tour/helicopter-rescue-services-in-nepal",
        destination: "/",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/heli-tour/annapurna-heli-tour/abc-helicopter-tour",
        destination: "/",
        permanent: true,
        statusCode: 301 
      },
      {
        source: "/adventure-activity/rafting/upper-seti-rafting",
        destination: "/adventure",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/adventure-activity/rafting/expreience-the-thrill-of-kali-gandaki-river-rafting",
        destination: "/adventure",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/adventure-activity/hot-air-balloon/hot-air-balloon-in-pokhara",
        destination: "/adventure",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/adventure-activity/rafting/trishuli-river-rafting",
        destination: "/adventure",
        permanent: true,
        statusCode: 301
      },
      {
        source: "/adventure-activity/atv-ride/atv-ride-in-pokhara",
        destination: "/adventure",
        permanent: true,
        statusCode: 301
      }
    ];
  },
};

export default nextConfig;
