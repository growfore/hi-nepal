import React from 'react';
import siteStore from '@/zustand/store';
import { TNavBar, TSiteInformation } from '@/types/types';
import Link from 'next/link';
import { get } from '@/utils/request-hander';
import endpoints from '@/constant/endpoints';
import Head from 'next/head';
import Image from 'next/image';
import { fetchData } from '@/helper/fetch-data';

const NavBar = async () => {
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
  const data = await fetchData('blogs');

  return (
    <>
      <header
        id='masthead'
        className='site-header  header-primary'
        style={{
          top: '-50px',
          position: 'sticky',
          backgroundColor: '#000000aa',
        }}>
        <Head>
          <link rel='preload' href='/hinepal/hinepal-logo.webp' as='image' />
        </Head>
        {/* header html start */}
        <div className='top-header'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 d-none d-lg-block'>
                <div className='header-contact-info'>
                  <ul>
                    <li>
                      <Link href={`tel:${siteInformation?.phone1}`}>
                        <i className='fas fa-phone-alt' />{' '}
                        {siteInformation?.phone1}
                      </Link>
                    </li>
                    <li>
                      <Link href={`mailto:${siteInformation?.email1}`}>
                        <i className='fas fa-envelope' />{' '}
                        {siteInformation?.email1}
                      </Link>
                    </li>
                    <li>
                      <i className='fas fa-map-marker-alt' />{' '}
                      {siteInformation?.address}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-4 d-flex justify-content-lg-end justify-content-between'>
                <div className='header-social social-links'>
                  <ul>
                    <li>
                      <Link
                        aria-label='facebook'
                        href={siteInformation?.facebook || ''}>
                        <i className='fab fa-facebook-f' aria-hidden='true' />
                      </Link>
                    </li>
                    <li>
                      <Link
                        aria-label='twitter'
                        href={siteInformation?.twitter || ''}>
                        <i className='fab fa-twitter' aria-hidden='true' />
                      </Link>
                    </li>
                    <li>
                      <Link
                        aria-label='instagram'
                        href={siteInformation?.instagram || ''}>
                        <i className='fab fa-instagram' aria-hidden='true' />
                      </Link>
                    </li>
                    <li>
                      <Link
                        aria-label='linkedin'
                        href={siteInformation?.linkedin || ''}>
                        <i className='fab fa-linkedin' aria-hidden='true' />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='header-search-icon'>
                  <button className='search-icon' aria-label='search'>
                    <i className='fas fa-search' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bottom-header'>
          <div className='container d-flex justify-content-between align-items-center'>
            <div className='site-identity'>
              <h1 className='site-title'>
                <Link href='/'>
                  <Image
                    width={128}
                    height={75}
                    id='logo'
                    priority={true}
                    className='white-logo'
                    src={'/hinepal/hinepal-logo.webp'}
                    alt='logo'
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '2%',

                      padding: '0.5rem',
                      width: '100%',
                    }}
                  />
                  <Image
                    width={128}
                    height={75}
                    id='logo-dark'
                    priority={true}
                    className='black-logo'
                    src={'/hinepal/hinepal-logo.webp'}
                    alt='logo'
                    style={{
                      borderRadius: '2%',
                      padding: '0.5rem',
                      width: '100%',
                    }}
                  />
                </Link>
              </h1>
            </div>
            <div className='main-navigation d-none d-lg-block'>
              <nav id='navigation' className='navigation'>
                <ul>
                  {navBar.map((item, index) => {
                    return (
                      <>
                        <li
                          key={'activities' + index}
                          className='menu-item-has-children'>
                          <Link href={`/activities/${item.slug}`}>{item.name}</Link>
                          <ul>
                            {item.destinations.map((destination, index) => {
                              return (
                                <li
                                  key={'destinations' + index}
                                  className='menu-item-has-children'
                                  style={{}}>
                                  <Link
                                  href={`/activities/${item.slug}/${destination.slug}`}>
                                  {destination.name}
                                </Link>
                                  <ul className='sub-menu'>
                                    {destination.packages.map(
                                      (packageItem, index) => {
                                        return (
                                          <li key={'packages' + index}>
                                            <Link
                                              href={`/${packageItem.slug}`}>
                                              {packageItem.title.includes(":") ? packageItem.title.split(":")[0].trim() : packageItem.title.trim()}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      </>
                    );
                  })}
                  {/* <li className='menu-item-has-children'>
                    <Link href='/blogs'>Blogs</Link>
                    <ul>
                      {data?.blogs?.map((blog: any, index: number) => (
                        <li key={'blogs' + index}>
                          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className='header-btn'>
              <Link href={'/booking'} className='button-primary'>
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>

        <div className='mobile-menu-container' />
      </header>
    </>
  );
};

export default NavBar;
