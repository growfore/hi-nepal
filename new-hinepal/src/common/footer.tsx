import { TSiteInformation } from '@/types/types';
import siteStore from '@/zustand/store';
import Image from 'next/image';

export function Footer() {
  let siteInformation: TSiteInformation | undefined = undefined;
  siteInformation = siteStore.getState() as TSiteInformation;
  console.log("Footer Site Information: ", siteInformation);
  return (
    <>
      <div>
        <footer id='colophon' className='site-footer footer-primary'>
          <div className='top-footer'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-md-6'>
                  <aside className='widget widget_text'>
                    <h3 className='widget-title'>About Travel</h3>
                    <div className='textwidget widget-text'>
                      {siteInformation?.footerAbout}
                    </div>
                    <div className='award-img'>
                      <a href='#'>
                        <img src={siteInformation?.rewardImg2} alt='reward-1' />
                      </a>
                      <a href='#'>
                        <img src={siteInformation?.rewardImg1} alt='reward-2' />
                      </a>
                    </div>
                  </aside>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <aside className='widget widget_text'>
                    <h3 className='widget-title'>CONTACT INFORMATION</h3>
                    <div className='textwidget widget-text'>
                      {siteInformation?.description}
                      <ul>
                        <li>
                          <a href='#'>
                            <i className='fas fa-phone-alt' />
                            {siteInformation?.phone1}
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fas fa-envelope' />
                            {siteInformation?.email1}
                          </a>
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
                    {/* <ul>
                      <li>
                        <h5>
                          <a href='#'>
                            Life is a beautiful journey not a destination
                          </a>
                        </h5>
                        <div className='entry-meta'>
                          <span className='post-on'>
                            <a href='#'>August 17, 2021</a>
                          </span>
                          <span className='comments-link'>
                            <a href='#'>No Comments</a>
                          </span>
                        </div>
                      </li>
                      <li>
                        <h5>
                          <a href='#'>
                            Take only memories, leave only footprints
                          </a>
                        </h5>
                        <div className='entry-meta'>
                          <span className='post-on'>
                            <a href='#'>August 17, 2021</a>
                          </span>
                          <span className='comments-link'>
                            <a href='#'>No Comments</a>
                          </span>
                        </div>
                      </li>
                    </ul> */}
                  </aside>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <aside className='widget widget_newslatter'>
                    <h3 className='widget-title'>SUBSCRIBE US</h3>
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
                      <li>
                        <a href='#'>Privacy Policy</a>
                      </li>
                      <li>
                        <a href='#'>Term &amp; Condition</a>
                      </li>
                      <li>
                        <a href='#'>FAQ</a>
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
        </footer>
        <a id='backTotop' href='#' className='to-top-icon'>
          <i className='fas fa-chevron-up' />
        </a>
        {/* custom search field html */}
        <div className='header-search-form'>
          <div className='container'>
            <div className='header-search-container'>
              <form className='search-form' role='search' method='get'>
                <input type='text' name='s' placeholder='Enter your text...' />
              </form>
              <a href='#' className='search-close'>
                <i className='fas fa-times' />
              </a>
            </div>
          </div>
        </div>
        {/* header html end */}
      </div>
    </>
  );
}
