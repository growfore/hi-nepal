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
      },
      {
        source: '/trekking/everest-region/gokyo-valley-trek',
        destination: '/gokyo-valley-trek',
        permanent: true,
      },
      {
        source: '/trekking/mansalu-region/mansalu-circuit-trek',
        destination: '/mansalu-circuit-trek',
        permanent: true,
      },
      {
        source: '/heli-tour/annapurna-heli-tour/tilicho-lake-helicopter-tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/tours-in-nepal-kathmandu-pokhara-chitwan',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tour/day-hike/day-hike-in-santi-stupa',
        destination: '/world-peace-pagoda',
        permanent: true,
      },
      {
        source: '/trekking/hello-hello',
        destination: '/trekking',
        permanent: true,
      },
      {
        source: '/adventure-activity/zip-flyler',
        destination: '/adventure',
        permanent: true,
      },
      {
        source: '/wildlife-safari/bardiya-national-park',
        destination: '/bardiya-national-park-tour',
        permanent: true,
      },
      {
        source: '/tour/multi-day-tour',
        destination: '/activities/tours/multi-days-tour',
        permanent: true,
      },
      {
        source: '/trekking/dolpa-region',
        destination: '/activities/trekking/dolpo-region',
        permanent: true,
      },
      {
        source: '/adventure-activity/rafting',
        destination: '/adventure',
        permanent: true,
      },
      {
        source: '/wildlife-safari',
        destination: '/activities/tours/nature-wildlife',
        permanent: true,
      },
      {
        source: '/heli-tour/annapurna-heli-tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tour/day-tour',
        destination: '/activities/tours/day-tours',
        permanent: true,
      },
      {
        source: '/adventure-activity/hot-air-balloon',
        destination: '/adventure',
        permanent: true,
      },
      {
        source: '/heli-tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity/atv-ride',
        destination: '/adventure',
        permanent: true,
      },
      {
        source: '/blogs/upper-mustang-trek-blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/trekking/annapurna-region',
        destination: '/activities/trekking/annapurna-region',
        permanent: true,
      },
      {
        source: '/tour',
        destination: 'https://hinepaltreks.com/activities/tours',
        permanent: true,
      },
      {
        source: '/tour/day-hike',
        destination: '/activities/tours/day-tours',
        permanent: true,
      },
      {
        source: '/adventure-activity/ultra-light-flying',
        destination: '/adventure',
        permanent: true,
      },
      {
        source: '/trekking/mustang-region',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity',
        destination: '/adventure',
        permanent: true,
      },
      {
        source: '/adventure-activity/paragliding',
        destination: '/adventure',
        permanent: true,
      },
      {
        source: '/adventure-activity/bungee',
        destination: '/adventure',
        permanent: true,
      },
      {
        source: '/trekking/everest-region',
        destination: '/activities/trekking/everest-region',
        permanent: true,
      },
      {
        source: '/region/annapurna',
        destination: '/activities/trekking/annapurna-region',
        permanent: true,
      },
      {
        source: '/trekking/mansalu-region',
        destination: '/activities/trekking/manaslu-region',
        permanent: true,
      },
      {
        source: '/mansalu-circuit-trek',
        destination: '/manaslu-circuit-trek',
        permanent: true,
      },
      {
        source: '/bardiya-national-park%20-tour',
        destination: '/bardiya-national-park-tour',
        permanent: true,
      },
      {
        source: '/t=um-valley-trek',
        destination: '/tsum-valley-trek',
        permanent: true,
      },
      {
        source: "/trekking/langtang-valley-trek",
        destination:"/langtang-valley-trek",
        permanent: true,
      },
      {
        source: "/trekking/chola-pass-gokyo-trek",
        destination: "/chola-pass-gokyo-trek",
        permanent: true,
      },
      {
        source: "/trekking/gokyo-valley-trek",
        destination:"/gokyo-valley-trek",
        permanent: true,
      },
      {
        source: "/trekking/everest-base-camp-trek",
        destination: "/everest-base-camp-trek",
        permanent: true,
      },
      {
        source: "/trekking/everest-region/everest-base-camp-trek",
        destination: "/everest-base-camp-trek",
        permanent: true,
      },
      {
        source: "/trekking/everest-region/chola-pass-gokyo-trek",
        destination: "/chola-pass-gokyo-trek",
        permanent: true,
      },
      {
        source: "/trekking/langtang-gosaikunda-trek",
        destination: "/langtang-gosaikunda-trek",
        permanent: true,  
      }
    ];
  },
};

export default nextConfig;
