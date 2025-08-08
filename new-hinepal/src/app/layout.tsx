import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import endpoints from '@/constant/endpoints';
import { TSiteInformation } from '@/types/types';
import { get } from '@/utils/request-hander';
import siteStore from '@/zustand/store';
import { Footer } from '@/common';
import CustomLayout from '@/components/custom-layout';
import { Navbar } from '@/common/navbar';

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
        <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "srgj9d5fel");
          ` }}
        >
        </script>
      </head>
      <body className={`${poppins.className}`}>
        <CustomLayout
          siteInformation={siteInformation}
          footer={<Footer />}
          header={<Navbar />}>
          {children}
        </CustomLayout>
      </body>
    </html>
  );
}
