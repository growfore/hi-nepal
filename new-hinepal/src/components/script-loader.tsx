'use client';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

const ScriptLoader = ({ onAllScriptsLoaded }:{onAllScriptsLoaded: () => void}) => {
  const [scriptsLoaded, setScriptsLoaded] = useState(0);

  useEffect(() => {
    const additionalStyles = [
      '/assets/vendors/bootstrap/css/bootstrap.min.css',
      '/assets/vendors/fontawesome/css/all.min.css',
      '/assets/vendors/jquery-ui/jquery-ui.min.css',
      '/assets/vendors/modal-video/modal-video.min.css',
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

  useEffect(() => {
    // Check if all scripts are loaded
    if (scriptsLoaded === vendorScripts.length && onAllScriptsLoaded) {
      onAllScriptsLoaded();
    }
  }, [scriptsLoaded, onAllScriptsLoaded]);

  const vendorScripts = [
    '/assets/js/jquery.js',
    'https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js',
    '/assets/vendors/bootstrap/js/bootstrap.min.js',
    '/assets/vendors/jquery-ui/jquery-ui.min.js',
    '/assets/vendors/countdown-date-loop-counter/loopcounter.js',
    '/assets/js/jquery.counterup.js',
    '/assets/vendors/modal-video/jquery-modal-video.min.js',
    '/assets/vendors/masonry/masonry.pkgd.min.js',
    '/assets/vendors/lightbox/dist/js/lightbox.min.js',
    '/assets/vendors/slick/slick.min.js',
    '/assets/js/jquery.slicknav.js',
    '/assets/js/custom.min.js',
  ];

  const handleScriptLoad = () => {
    setScriptsLoaded((prev) => prev + 1);
  };

  return (
    <>
      <Head>
        {/* Remove duplicate Google Font link and use only one */}
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
            strategy='afterInteractive'
            onLoad={handleScriptLoad}
            onError={() => {
              console.error(`Failed to load script: ${src}`);
              // Count failed scripts as loaded to avoid blocking
              handleScriptLoad();
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ScriptLoader;
