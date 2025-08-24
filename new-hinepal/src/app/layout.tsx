import type { Metadata } from 'next';
import { Playfair } from 'next/font/google';
import './globals.css';
import endpoints from '@/constant/endpoints';
import { TSiteInformation } from '@/types/types';
import { get } from '@/utils/request-hander';
import siteStore from '@/zustand/store';
import { Footer } from '@/common';
import CustomLayout from '@/components/custom-layout';
import { Navbar } from '@/common/navbar';

const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});


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
      <body className={`${playfair.variable} antialiased`}>
        <CustomLayout
          footer={<Footer />}
          header={<Navbar />}>
          {children}
        </CustomLayout>
      </body>
    </html>
  );
}
