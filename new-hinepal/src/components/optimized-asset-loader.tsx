'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface OptimizedAssetLoaderProps {
  assets: {
    css?: string[];
    js?: string[];
  };
  onLoad?: () => void;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
}

export default function OptimizedAssetLoader({ 
  assets, 
  onLoad, 
  strategy = 'afterInteractive' 
}: OptimizedAssetLoaderProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalAssets = (assets.css?.length || 0) + (assets.js?.length || 0);

  useEffect(() => {
    // Load CSS files
    assets.css?.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
        setLoadedCount(prev => prev + 1);
      } else {
        setLoadedCount(prev => prev + 1);
      }
    });
  }, [assets.css]);

  const handleScriptLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  useEffect(() => {
    if (loadedCount === totalAssets && onLoad) {
      onLoad();
    }
  }, [loadedCount, totalAssets, onLoad]);

  return (
    <>
      {assets.js?.map((src) => (
        <Script
          key={src}
          src={src}
          strategy={strategy}
          onLoad={handleScriptLoad}
          onError={() => {
            console.error(`Failed to load script: ${src}`);
            handleScriptLoad();
          }}
        />
      ))}
    </>
  );
} 