import { fetchData } from '@/helper/fetch-data';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const Blogs = async () => {
  const carousels: any[] = await fetchData('carousels/home');
  const data: { blogs: [] } | undefined = await fetchData('blogs');
  if (data?.blogs?.length == 0) {
    notFound();
  }
  return (
    <main id='content' className='site-main'>
      {/* Inner Banner html start*/}
      <section className='inner-banner-wrap'>
        <div
          className='inner-baner-container'
          style={
            carousels.length > 0
              ? {
                  backgroundImage:
                    'url(' + carousels ? await carousels[0]?.image : '' + ')',
                }
              : {}
          }>
          <div className='container'>
            <div className='inner-banner-content'>
              <h1 className='inner-title'>Blogs</h1>
            </div>
          </div>
        </div>
        <div className='inner-shape' />
      </section>
      {/* Inner Banner html end*/}
      <div className='archive-section blog-archive'>
        <div className='archive-inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 primary right-sidebar'>
                {/* blog post item html start */}
                <div className='grid row'>
                  {data?.blogs?.map((blog: any) => (
                    <BlogCard key={blog?.id}  blog={blog} />
                  ))}
                </div>
                {/* blog post item html end */}
                {/* pagination html start*/}
                {/* <div className='post-navigation-wrap'>
                  <nav>
                    <ul className='pagination'>
                      <li>
                        <a href='#'>
                          <i className='fas fa-arrow-left' />
                        </a>
                      </li>
                      <li className='active'>
                        <a href='#'>1</a>
                      </li>
                      <li>
                        <a href='#'>..</a>
                      </li>
                      <li>
                        <a href='#'>5</a>
                      </li>
                      <li>
                        <a href={data?.next}>
                          <i className='fas fa-arrow-right' />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div> */}
                {/* pagination html start*/}
              </div>
              {/* <div className='col-lg-4 secondary'>
                <div className='sidebar'>
                  <aside className='widget author_widget'>
                    <h3 className='widget-title'>ABOUT AUTHOR</h3>
                    <div className='widget-content text-center'>
                      <div className='profile'>
                        <figure className='avatar'>
                          <a href='#'>
                            <img src='assets/images/img21.jpg' alt='' />
                          </a>
                        </figure>
                        <div className='text-content'>
                          <div className='name-title'>
                            <h3>
                              <a href='https://demo.bosathemes.com/bosa/photography/james-watson/'>
                                James Watson
                              </a>
                            </h3>
                          </div>
                          <p>
                            Accumsan? Aliquet nobis doloremque, aliqua? Inceptos
                            voluptatem, duis tempore optio quae animi viverra
                            distinctio cumque vivamus, earum congue, anim velit
                          </p>
                        </div>
                        <div className='socialgroup'>
                          <ul>
                            <li>
                              {' '}
                              <a target='_blank' href='#'>
                                {' '}
                                <i className='fab fa-facebook' />{' '}
                              </a>{' '}
                            </li>
                            <li>
                              {' '}
                              <a target='_blank' href='#'>
                                {' '}
                                <i className='fab fa-google' />{' '}
                              </a>{' '}
                            </li>
                            <li>
                              {' '}
                              <a target='_blank' href='#'>
                                {' '}
                                <i className='fab fa-twitter' />{' '}
                              </a>{' '}
                            </li>
                            <li>
                              {' '}
                              <a target='_blank' href='#'>
                                {' '}
                                <i className='fab fa-instagram' />{' '}
                              </a>{' '}
                            </li>
                            <li>
                              {' '}
                              <a target='_blank' href='#'>
                                {' '}
                                <i className='fab fa-pinterest' />{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </aside>
                  <aside className='widget widget_latest_post widget-post-thumb'>
                    <h3 className='widget-title'>Recent Post</h3>
                    <ul>
                      <li>
                        <figure className='post-thumb'>
                          <a href='#'>
                            <img src='assets/images/img17.jpg' alt='' />
                          </a>
                        </figure>
                        <div className='post-content'>
                          <h5>
                            <a href='#'>
                              Someday I’m going to be free and travel
                            </a>
                          </h5>
                          <div className='entry-meta'>
                            <span className='posted-on'>
                              <a href='#'>August 17, 2021</a>
                            </span>
                            <span className='comments-link'>
                              <a href='#'>No Comments</a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <figure className='post-thumb'>
                          <a href='#'>
                            <img src='assets/images/img18.jpg' alt='' />
                          </a>
                        </figure>
                        <div className='post-content'>
                          <h5>
                            <a href='#'>
                              Enjoying the beauty of the great nature
                            </a>
                          </h5>
                          <div className='entry-meta'>
                            <span className='posted-on'>
                              <a href='#'>August 17, 2021</a>
                            </span>
                            <span className='comments-link'>
                              <a href='#'>No Comments</a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <figure className='post-thumb'>
                          <a href='#'>
                            <img src='assets/images/img19.jpg' alt='' />
                          </a>
                        </figure>
                        <div className='post-content'>
                          <h5>
                            <a href='#'>
                              Let’s start adventure with best tripo guides
                            </a>
                          </h5>
                          <div className='entry-meta'>
                            <span className='posted-on'>
                              <a href='#'>August 17, 2021</a>
                            </span>
                            <span className='comments-link'>
                              <a href='#'>No Comments</a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <figure className='post-thumb'>
                          <a href='#'>
                            <img src='assets/images/img34.jpg' alt='' />
                          </a>
                        </figure>
                        <div className='post-content'>
                          <h5>
                            <a href='#'>
                              Journeys are best measured in new friends
                            </a>
                          </h5>
                          <div className='entry-meta'>
                            <span className='posted-on'>
                              <a href='#'>August 17, 2021</a>
                            </span>
                            <span className='comments-link'>
                              <a href='#'>No Comments</a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <figure className='post-thumb'>
                          <a href='#'>
                            <img src='assets/images/img35.jpg' alt='' />
                          </a>
                        </figure>
                        <div className='post-content'>
                          <h5>
                            <a href='#'>
                              Take only memories, leave only footprints
                            </a>
                          </h5>
                          <div className='entry-meta'>
                            <span className='posted-on'>
                              <a href='#'>August 17, 2021</a>
                            </span>
                            <span className='comments-link'>
                              <a href='#'>No Comments</a>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </aside>
                  <aside className='widget widget_social'>
                    <h3 className='widget-title'>Social share</h3>
                    <div className='social-icon-wrap'>
                      <div className='social-icon social-facebook'>
                        <a href='#'>
                          <i className='fab fa-facebook-f' />
                          <span>Facebook</span>
                        </a>
                      </div>
                      <div className='social-icon social-pinterest'>
                        <a href='#'>
                          <i className='fab fa-pinterest' />
                          <span>Pinterest</span>
                        </a>
                      </div>
                      <div className='social-icon social-whatsapp'>
                        <a href='#'>
                          <i className='fab fa-whatsapp' />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                      <div className='social-icon social-linkedin'>
                        <a href='#'>
                          <i className='fab fa-linkedin' />
                          <span>Linkedin</span>
                        </a>
                      </div>
                      <div className='social-icon social-twitter'>
                        <a href='#'>
                          <i className='fab fa-twitter' />
                          <span>Twitter</span>
                        </a>
                      </div>
                      <div className='social-icon social-google'>
                        <a href='#'>
                          <i className='fab fa-google-plus-g' />
                          <span>Google</span>
                        </a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;

function BlogCard({ blog }: any) {
  return (
    <div className='grid-item col-md-6'>
      <article className='post'>
        <figure className='feature-image'>
          <Link href={`/blogs/${blog?.slug}`}>
            <Image
              height={300}
              property={blog?.image && true}
              width={300}
              src={blog?.image||""}
              alt={blog?.title || 'blogs image'}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
              }}
            />
          </Link>
        </figure>
        <div className='entry-content'>
          <h3>
            <Link href={`/blogs/${blog?.slug}`}>{blog?.title}</Link>
          </h3>
          <div className='entry-meta'>
            <span className='byline'>
              <Link href={`/blogs/${blog?.slug}`}>{blog?.author||blog?.subtitle}</Link>
            </span>
            <span className='posted-on'>
              <Link href={`/blogs/${blog?.slug}`}>
                {blog?.createdAt && formatRevalidate(blog?.createdAt)}
              </Link>
            </span>
          </div>
          <p>{blog?.description}</p>
          <Link href={`/blogs/${blog?.slug}`} className='button-text'>
            CONTINUE READING..
          </Link>
        </div>
      </article>
    </div>
  );
}

function formatRevalidate(date: string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // @ts-ignore
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  return formattedDate;
}
