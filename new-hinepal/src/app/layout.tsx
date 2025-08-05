

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import endpoints from '@/constant/endpoints';
import { TSiteInformation } from '@/types/types';
import { get } from '@/utils/request-hander';
import siteStore from '@/zustand/store';
import { Footer, NavBar } from '@/common';
import CustomLayout from '@/components/custom-layout';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
export const metadata: Metadata = {
  title: 'Hi Nepal Travels and Treks Pvt. Ltd. | Home',
  description: 'Hi Nepal Travels and Treks Pvt. Ltd. welcome you',
  keywords:
    'Hi Nepal,Trekking,Adventure, Best trekking agency in nepal,Visit Nepal 2025,Best place to visit in Nepal',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let siteInformation: TSiteInformation = {} as TSiteInformation;
  await get({
    endPoint: endpoints.SITE_INFORMATIONS,
    token: '',
    success: (message, res) => {
      siteInformation = res.data;
      siteStore.setState(siteInformation);
    },
    failure: (message) => {
      console.log(message);
    },
  });
  return (
    <html lang='en'>
      <head>
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: ` (function(c,l,a,r,i,t,y){
         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
         t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
         y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
             })(window, document, "clarity", "script", "qlz8qjlv4c");
        `,
          }}></script>
        
        {/* Essential CSS files - only load what's needed globally */}
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/style.css" />
        
        {/* Google Fonts */}
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className={`${poppins.className} Home`}>
        {' '}
        <CustomLayout
          siteInformation={siteInformation}
          footer={<Footer />}
          header={<NavBar />}>
          {children}
        </CustomLayout>
        
        {/* Essential JavaScript files - only load what's needed globally */}
        <script src="/assets/js/jquery.js"></script>
        <script src="/assets/js/jquery.slicknav.js"></script>
        <script src="/assets/vendors/bootstrap/js/bootstrap.min.js"></script>
        <script src="/assets/js/custom.min.js"></script>
      </body>
    </html>
  );
}
