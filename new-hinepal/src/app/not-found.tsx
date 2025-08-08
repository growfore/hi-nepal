import { fetchData } from '@/helper/fetch-data';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const NotFoundPage = async () => {
  const carousels: any[] | undefined = await fetchData('carousels/not-found');
  // return redirect("/");
  return (
    <main id='content' className='site-main'>
      <div
        className='no-content-section 404-page'
        style={{
          backgroundImage: carousels
            ? `url(${await carousels[0]?.image})`
            : 'url(/hinepal/404.png)',
        }}>
        <div className='container'>
          <div className='no-content-wrap'>
            <span>404</span>
            <h1>Oops! That page can't be found</h1>
            <h4>
              It looks like nothing was found at this location. Maybe try from
              Home page?
            </h4>
            <div className='search-form-wrap'>
              <Link href={'/'} className='button-primary'>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <div className='overlay' />
      </div>
    </main>
  );
};

export default NotFoundPage;
