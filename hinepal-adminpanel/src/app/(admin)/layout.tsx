import { Sidebar } from '@/components/sidebar';
import { getCookie } from '@/lib/cookie-handler';
import { redirect } from 'next/navigation';

import React from 'react';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const token = await getCookie('token');
  if (!token) {
    return redirect('/auth/login');
  }
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <header className='bg-white shadow'>
          <div className=' mx-auto py-6  sm:px-6 lg:px-8 flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-gray-900'>Admin Panel</h1>
            <div className='flex items-center'>
              <span className='mr-4 text-gray-700'>Welcome, John Doe</span>
              <button className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700'>
                Logout
              </button>
            </div>
          </div>
        </header>
        <main className='flex-1 overflow-y-auto bg-gray-100'>{children}</main>
      </div>
    </div>
  );
};

export default layout;
