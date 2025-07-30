import { TSiteInformation } from '@/types/types';
import siteStore from '@/zustand/store';
import { LucideCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  let siteInformation: TSiteInformation | undefined = undefined;
  siteInformation = siteStore.getState() as TSiteInformation;
  const marginLeft10px = { marginLeft: "-12px" };

  return (
    <>
      <div>
        <footer id='colophon' className='site-footer footer-primary'>
          <div className='top-footer'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-md-6'>
                  <aside className='widget widget_text'>
                    <h3 className='widget-title' style={marginLeft10px}>About Travel</h3>
                  <div className='textwidget widget-text'>
                    {siteInformation?.footerAbout}
                  </div>
                  <div className='award-img'>
                    <Link href='#'>
                      <img src={siteInformation?.rewardImg2} alt='reward-1' />
                    </Link>
                    <Link href='#'>
                      <img src={siteInformation?.rewardImg1} alt='reward-2' />
                    </Link>
                  </div>
                </aside>
              </div>
              <div className='col-lg-3 col-md-6'>
                <aside className='widget widget_text'>
                  <h3 className='widget-title' style={marginLeft10px}>CONTACT INFORMATION</h3>
                  <div className='textwidget widget-text'>
                    {siteInformation?.description}
                    <ul>
                      <li>
                        <Link href={`tel:${siteInformation?.phone1}`}>
                          <i className='fas fa-phone-alt' />
                          {siteInformation?.phone1}
                        </Link>
                      </li>
                      <li>
                        <Link href={`mailto:${siteInformation?.email1}`}>
                          <i className='fas fa-envelope' />
                          {siteInformation?.email1}
                        </Link>
                      </li>
                      <li>
                        <i className='fas fa-map-marker-alt' />
                        {siteInformation?.address}
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div className='col-lg-3 col-md-6'>
                <aside className='widget widget_recent_post'>
                  <h3 className='widget-title'>Latest Post</h3>
                </aside>
              </div>
              <div className='col-lg-3 col-md-6'>
                <aside className='widget widget_newslatter'>
                  <h3 className='widget-title' style={marginLeft10px}>SUBSCRIBE US</h3>
                  <div className='widget-text'>
                    Connect with us on our newslatter
                  </div>
                  <form className='newslatter-form'>
                    <input type='email' name='s' placeholder='Your Email..' />
                    <input
                      type='submit'
                      name='s'
                      disabled
                      defaultValue='SUBSCRIBE NOW'
                    />
                  </form>
                </aside>
              </div>
            </div>
          </div>
      </div>
      <div className='buttom-footer'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-5'>
              <div className='footer-menu'>
                <ul>
                  <li className='nav-ratings'>
                    <div className=''>{Array.from([0, 1, 2, 3, 4]).map((_, idx) => {
                      return (
                        <LucideCircle key={idx} className='lucide-circle' fill='green' color='white' />
                      )
                    })}
                    </div>
                    <Link className='review-link' href={"https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"} target='_blank'>111 Reviews in Tripadvisor</Link>
                  </li>
                  <li>
                    <Link href='#'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href='#'>Term &amp; Condition</Link>
                  </li>
                  <li>
                    <Link href='#'>FAQ</Link>
                  </li>
                  <li>
                    <Link href='/sitemap'>Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2 text-center'>
              <div className='footer-logo'>
                <a href='/' className=''>
                  <Image
                    height={50}
                    width={100}
                    className='img-fluid bg-white p-2 rounded'
                    src='/hinepal/hinepal-logo.webp'
                    alt='logo'
                    loading='lazy'
                    priority={false}
                  />
                </a>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='copy-right text-right'>
                Copyright © {new Date().getFullYear()} Hi Nepal Travels and
                Treks.
                {/* All rights reserveds */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
      <a id='backTotop' href='#' className='to-top-icon'>
        <i className='fas fa-chevron-up' />
      </a>
  {/* custom search field html */ }
  <div className='header-search-form'>
    <div className='container'>
      <div className='header-search-container'>
        <form className='search-form' role='search' method='get'>
          <input type='text' name='s' placeholder='Enter your text...' />
        </form>
        <Link href='#' className='search-close'>
          <i className='fas fa-times' />
        </Link>
      </div>
    </div>
  </div>
  {/* header html end */ }
      </div >
    </>
  );
}
