import { Playfair } from "next/font/google";
import "./globals.css";
import endpoints from "@/constant/endpoints";
import { TSiteInformation } from "@/types/types";
import { get } from "@/utils/request-hander";
import siteStore from "@/zustand/store";
import { Footer } from "@/common";
import CustomLayout from "@/components/layouts/custom-layout";
import { Navbar } from "@/common/navbar";
import Script from "next/script";

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

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
    <html lang="en">
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
        <Script
          strategy="afterInteractive"
          src="⁦https://www.googletagmanager.com/gtag/js?id=G-E1QTRNT388⁩"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E1QTRNT388');
  `}
        </Script>
      </head>
      <body className={`${playfair.variable} antialiased`}>
        <CustomLayout footer={<Footer />} header={<Navbar />}>
          {children}
        </CustomLayout>
      </body>
    </html>
  );
}
