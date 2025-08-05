'use client';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

interface ConditionalScriptLoaderProps {
  onAllScriptsLoaded: () => void;
  pageType?: 'home' | 'package' | 'blog' | 'about' | 'contact';
}

const ConditionalScriptLoader = ({ 
  onAllScriptsLoaded, 
  pageType = 'home' 
}: ConditionalScriptLoaderProps) => {
  const [scriptsLoaded, setScriptsLoaded] = useState(0);

  useEffect(() => {
    const additionalStyles = [
      '/assets/vendors/fontawesome/css/all.min.css',
      '/assets/vendors/bootstrap/css/bootstrap.min.css',
      '/assets/vendors/lightbox/dist/css/lightbox.min.css',
      '/assets/vendors/slick/slick.css',
      '/assets/vendors/slick/slick-theme.css',
      '/style.css',
    ];

    additionalStyles.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  // Core scripts needed on all pages
  const coreScripts = [
    '/assets/js/jquery.js',
    '/assets/js/jquery.slicknav.js',
    '/assets/vendors/bootstrap/js/bootstrap.min.js',
    '/assets/js/custom-optimized.js',
  ];

  // Conditional scripts based on page type
  const getConditionalScripts = () => {
    const conditionalScripts = [];
    
    // Lightbox for package pages
    if (pageType === 'package') {
      conditionalScripts.push('/assets/vendors/lightbox/dist/js/lightbox.min.js');
    }
    
    // Masonry for blog pages
    if (pageType === 'blog') {
      conditionalScripts.push('/assets/vendors/masonry/masonry.pkgd.min.js');
    }
    
    // Counter and modal video for home page
    if (pageType === 'home') {
      conditionalScripts.push('/assets/vendors/countdown-date-loop-counter/loopcounter.js');
      conditionalScripts.push('/assets/js/jquery.counterup.js');
      conditionalScripts.push('/assets/vendors/modal-video/jquery-modal-video.min.js');
    }
    
    return conditionalScripts;
  };

  const vendorScripts = [...coreScripts, ...getConditionalScripts()];

  useEffect(() => {
    if (scriptsLoaded === vendorScripts.length && onAllScriptsLoaded) {
      onAllScriptsLoaded();
    }
  }, [scriptsLoaded, onAllScriptsLoaded, vendorScripts.length]);

  const handleScriptLoad = () => {
    setScriptsLoaded((prev) => prev + 1);
  };

  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap'
          rel='stylesheet'
        />
      </Head>

      <div>
        {vendorScripts.map((src, index) => (
          <Script
            key={src}
            src={src}
            strategy={index < 3 ? 'beforeInteractive' : 'lazyOnload'}
            onLoad={handleScriptLoad}
            onError={() => {
              console.error(`Failed to load script: ${src}`);
              handleScriptLoad();
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ConditionalScriptLoader; 