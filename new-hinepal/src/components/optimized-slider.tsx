'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import OptimizedAssetLoader from './optimized-asset-loader';

// Dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

interface OptimizedSliderProps {
  settings: any;
  children: React.ReactNode;
  className?: string;
}

export default function OptimizedSlider({ settings, children, className }: OptimizedSliderProps) {
  const [sliderReady, setSliderReady] = useState(false);

  const sliderAssets = {
    css: [
      '/assets/vendors/slick/slick.css',
      '/assets/vendors/slick/slick-theme.css'
    ],
    js: [
      '/assets/vendors/slick/slick.min.js'
    ]
  };

  return (
    <>
      <OptimizedAssetLoader 
        assets={sliderAssets}
        onLoad={() => setSliderReady(true)}
        strategy="afterInteractive"
      />
      
      {sliderReady ? (
        <Slider className={className} {...settings}>
          {children}
        </Slider>
      ) : (
        <div className={className}>
          {children}
        </div>
      )}
    </>
  );
} 