import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Admin Panel Hinepal Treks and travel',
  description: 'Admin Panel Hinepal Treks and travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* no index for now */}
        <meta name='robots' content='noindex' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster
          position='top-right'
          toastOptions={{
            style: {
              fontSize: '1rem',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
