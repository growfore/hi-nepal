import "./globals.css";
import endpoints from "@/constant/endpoints";
import { TSiteInformation } from "@/types/types";
import { get } from "@/utils/request-handler";
import siteStore from "@/zustand/store";
import { Footer } from "@/common";
import CustomLayout from "@/components/layouts/custom-layout";
import { Navbar } from "@/common/navbar";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let siteInformation: TSiteInformation = {} as TSiteInformation;
  await get({
    endPoint: endpoints.SITE_INFORMATIONS,
    token: "",
    success: (message, res) => {
      siteInformation = res.data;
      siteStore.setState(siteInformation);
    },
    failure: (message) => {
      console.log(message);
    },
  });
  return (
    <html lang="en" className={`antialiased`}>
      <head>
        {/*  */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "srgj9d5fel");
            `}
        </Script>
      </head>
      <body>
        <CustomLayout footer={<Footer />} header={<Navbar />}>
          {children}
          <GoogleAnalytics gaId="G-E1QTRNT388" />
          <Toaster position="top-center" />
        </CustomLayout>
      </body>
    </html>
  );
}
