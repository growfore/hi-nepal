import React from 'react';
import siteStore from '@/zustand/store';
import { TNavBar, TSiteInformation } from '@/types/types';
import { get } from '@/utils/request-handler';
import endpoints from '@/constant/endpoints';
import Topbar from './topbar';
import  BottomNav from './bottom-nav';

export const Navbar = async () => {
  let siteInformation: TSiteInformation | undefined = undefined;
  siteInformation = siteStore.getState() as TSiteInformation;
  let navBar: TNavBar = [] as TNavBar;

  await get({
    endPoint: endpoints.NAVBAR,
    token: '',
    success: (message: string, res: { data: TNavBar }) => {
      navBar = res.data;
    },
    failure: (message: string) => {
      console.log(message);
    },
  });

  return (
    <div className='bg-green-600 z-[999] min-w-[100vw] '>
      <Topbar siteInformation={siteInformation} />
      <BottomNav navBar={navBar} />
    </div>
  )
}

