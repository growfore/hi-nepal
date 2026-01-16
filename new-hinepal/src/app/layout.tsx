import dynamic from "next/dynamic";
import CustomLayout from "@/components/layouts/custom-layout";
import { Navbar } from "@/common/navbar";
import { Footer } from "@/common/footer";
import Script from "next/script";
// import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";
const WhatsAppButton = dynamic(
  () => import("@/components/molecules/whatsapp-button"),
  { ssr: false }
);

import { Rubik } from "next/font/google";
const outfit = Rubik({ subsets: ["latin"] });

import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.className} antialiased`}>
      <head>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {" "}
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "srgj9d5fel");
            `}
        </Script>
        <Script
          strategy="lazyOnload"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E1QTRNT388"
        />
        <Script id="gtag" strategy="lazyOnload">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E1QTRNT388');
  `}
        </Script>
      </head>
      <body>
        <CustomLayout footer={<Footer />} header={<Navbar />}>
          <NextTopLoader color="#FF6900" />
          {children}
          {/* <GoogleAnalytics gaId="G-E1QTRNT388" /> */}
          <Toaster position="top-center" />
          <WhatsAppButton />
        </CustomLayout>
      </body>
    </html>
  );
}
