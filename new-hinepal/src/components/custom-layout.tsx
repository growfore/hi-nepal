'use client';

import { TSiteInformation } from '@/types/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CustomLayout = ({
  children,
  footer,
  header,
  siteInformation,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
  siteInformation: TSiteInformation;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
      setTimeout(() => {
        setIsMounted(true);
      }, 1000);

    // Clean up function
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <>

      {!isMounted && (
        <div
          className=''
          style={{
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            backgroundColor: '#fff',
          }}>
          <div id='loader'>

            {/* <Image
              unoptimized
              priority={true}
              src='/loader1.gif'
              alt='Loading'
              width={60}
              height={60}
              style={{
                height: '60px',
                width: '60px',
                margin: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            /> */}
          </div>
        </div>
      )}

      <div
        id='page'
        className='full-page'
        style={{
          visibility: isMounted ? 'visible' : 'hidden',
        }}>
        {header}
        {children}
        {footer}
      </div>
    </>
  );
};

export default CustomLayout;
