/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hinepaltreks.com',
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
        destination: '/',
        permanent: true,
      },
      {
        source: '/trekking/hello-hello',
        destination: '/trekking',
        permanent: true,
      },
      {
        source: '/adventure-activity/zip-flyler',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wildlife-safari/bardiya-national-park',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tour/multi-day-tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/trekking/dolpa-region',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity/rafting',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wildlife-safari',
        destination: '/',
        permanent: true,
      },
      {
        source: '/heli-tour/annapurna-heli-tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tour/day-tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity/hot-air-balloon',
        destination: '/',
        permanent: true,
      },
      {
        source: '/heli-tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity/atv-ride',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/upper-mustang-trek-blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/trekking/annapurna-region',
        destination: '/region/annapurna',
        permanent: true,
      },
      {
        source: '/tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tour/day-hike',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity/ultra-light-flying',
        destination: '/',
        permanent: true,
      },
      {
        source: '/trekking/mustang-region',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity/paragliding',
        destination: '/',
        permanent: true,
      },
      {
        source: '/adventure-activity/bungee',
        destination: '/',
        permanent: true,
      },
      {
        source: '/trekking/everest-region',
        destination: '/activities/trekking/everest-region',
        permanent: true,
      },
      {
        source: '/region/annapurna',
        destination: '/',
        permanent: true,
      },
      {
        source: '/trekking/mansalu-region',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mansalu-circuit-trek',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bardiya-national-park%20-tour',
        destination: '/',
        permanent: true,
      },
      {
        source: '/t=um-valley-trek',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
