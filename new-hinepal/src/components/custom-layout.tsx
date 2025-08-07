'use client';

import { TSiteInformation } from '@/types/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ScriptLoader from './script-loader';
import { NavBar } from '@/common';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

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
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

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

  const handleAllScriptsLoaded = () => {
    setResourcesLoaded(true);
  };

  return (
    <>
      <ScriptLoader onAllScriptsLoaded={handleAllScriptsLoaded} />
      <div
        id='page'
        className='full-page'
      >
        {header}
        <main>
          {children}
        </main>
        {footer}
        <Button title='Back to Top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} variant={'default'} className='bg-green-700 hover:bg-green-500 hover:cursor-pointer rounded-md fixed left-2 bottom-2 p-2'>
          <ChevronUp color='white'/>
        </Button>
      </div>
    </>
  );
};

export default CustomLayout;
