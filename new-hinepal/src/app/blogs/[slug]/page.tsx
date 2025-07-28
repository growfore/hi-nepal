import { fetchData } from '@/helper/fetch-data';
import { formatRevalidate } from '@/helper/formate';
import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const slug = await params.slug;
  const blog = await fetchData(`blogs/${slug}`);
  return {
    title: blog?.seo?.metaTitle || blog?.title,
    description: blog?.seo?.metaDescription || blog?.description,
    keywords: blog?.keywords,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    referrer: 'origin-when-cross-origin',
    openGraph: {
      title: blog?.seo?.metaTitle || blog?.title,
      description: blog?.seo?.metaDescription || blog?.description,
      images: [
        {
          url: blog?.seo?.metaImage || blog?.image,
          width: 800,
          height: 600,
          alt: blog?.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog?.title,
      description: blog?.description,
      images: blog?.image,
    },
  };
}
const BlogSingle = async ({ params }: { params: Params }) => {
  const slug = await params.slug;
  const blog = await fetchData(`blogs/${slug}`);
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://hinepaltreks.com/blogs/${slug}`,
    },
    headline: blog?.title || '',
    description: blog?.description || '',
    image: blog?.image || '',
    author: {
      '@type': 'Person',
      name: 'Hi Nepal Treks and Expenditions',
    },
    datePublished: blog?.createdAt || '',
    dateModified: blog?.updatedAt || '',
  };
  return (
    <main id='content' className='site-main'>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
      <section className='inner-banner-wrap'>
        <div
          className='inner-baner-container'
          style={{ backgroundImage: 'url(' + blog?.image||"" + ')' }}>
          <div className='container'>
            <div className='inner-banner-content'>
              <h1 className='inner-title'>{blog?.title}</h1>
              <div className='entry-meta'>
                <span className='byline'>
                  <a href='#'>{blog?.subtitle}</a>
                </span>
                <span className='posted-on'>
                  <a href='#'>
                    {blog?.date && formatRevalidate(blog?.createdAt)}
                  </a>
                </span>
                {/* <span className='comments-link'>
                  <a href='#'>No Comments</a>
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className='inner-shape' />
      </section>
      {/* Inner Banner html end*/}
      <div className='single-post-section'>
        <div className='single-post-inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 primary right-sidebar'>
                {/* single blog post html start */}

                <h2 className='single-title'>{blog?.title}</h2>
                <figure className='feature-image'>
                  <img src={blog?.image} alt='' />
                </figure>
                <article
                  dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
                  className='single-content-wrap'></article>
                {/* <div className='meta-wrap'>
                  <div className='tag-links'>
                    <a href='#'>Destination</a>,<a href='#'>hiking</a>,
                    <a href='#'>Travel Dairies</a>,<a href='#'>Travelling</a>,
                    <a href='#'>Trekking</a>
                  </div>
                </div>
                <div className='post-socail-wrap'>
                  <div className='social-icon-wrap'>
                    <div className='social-icon social-facebook'>
                      <a href='#'>
                        <i className='fab fa-facebook-f' />
                        <span>Facebook</span>
                      </a>
                    </div>
                    <div className='social-icon social-google'>
                      <a href='#'>
                        <i className='fab fa-google-plus-g' />
                        <span>Google</span>
                      </a>
                    </div>
                    <div className='social-icon social-pinterest'>
                      <a href='#'>
                        <i className='fab fa-pinterest' />
                        <span>Pinterest</span>
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
                  </div>
                </div>
                <div className='author-wrap'>
                  <div className='author-thumb'>
                    <img src='assets/images/user-img.png' alt='' />
                  </div>
                  <div className='author-content'>
                    <h3 className='author-name'>Demoteam</h3>
                    <p>
                      Anim eligendi error magnis. Pretium fugiat cubilia
                      ullamcorper adipisci, lobortis repellendus sit culpa
                      maiores!
                    </p>
                    <a href='#' className='button-text'>
                      VIEW ALL POSTS &gt;{' '}
                    </a>
                  </div>
                </div> */}
                {/* post comment html */}
                <div className='comment-area'>
                  {/* <h2 className='comment-title'>3 Comments</h2>
                  <div className='comment-area-inner'>
                    <ol>
                      <li>
                        <figure className='comment-thumb'>
                          <img src='assets/images/img20.jpg' alt='' />
                        </figure>
                        <div className='comment-content'>
                          <div className='comment-header'>
                            <h5 className='author-name'>Tom Sawyer</h5>
                            <span className='post-on'>Jana 10 2020</span>
                          </div>
                          <p>
                            Officia amet posuere voluptates, mollit montes eaque
                            accusamus laboriosam quisque cupidatat dolor
                            pariatur, pariatur auctor.
                          </p>
                          <a href='#' className='reply'>
                            <i className='fas fa-reply' />
                            Reply
                          </a>
                        </div>
                      </li>
                      <li>
                        <ol>
                          <li>
                            <figure className='comment-thumb'>
                              <img src='assets/images/img21.jpg' alt='' />
                            </figure>
                            <div className='comment-content'>
                              <div className='comment-header'>
                                <h5 className='author-name'>John Doe</h5>
                                <span className='post-on'>Jana 10 2020</span>
                              </div>
                              <p>
                                Officia amet posuere voluptates, mollit montes
                                eaque accusamus laboriosam quisque cupidatat
                                dolor pariatur, pariatur auctor.
                              </p>
                              <a href='#' className='reply'>
                                <i className='fas fa-reply' />
                                Reply
                              </a>
                            </div>
                          </li>
                        </ol>
                      </li>
                    </ol>
                    <ol>
                      <li>
                        <figure className='comment-thumb'>
                          <img src='assets/images/img22.jpg' alt='' />
                        </figure>
                        <div className='comment-content'>
                          <div className='comment-header'>
                            <h5 className='author-name'>Jaan Smith</h5>
                            <span className='post-on'>Jana 10 2020</span>
                          </div>
                          <p>
                            Officia amet posuere voluptates, mollit montes eaque
                            accusamus laboriosam quisque cupidatat dolor
                            pariatur, pariatur auctor.
                          </p>
                          <a href='#' className='reply'>
                            <i className='fas fa-reply' />
                            Reply
                          </a>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className='comment-form-wrap'>
                    <h2 className='comment-title'>Leave a Reply</h2>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form className='comment-form'>
                      <p className='full-width'>
                        <label>Comment</label>
                        <textarea rows={9} defaultValue={''} />
                      </p>
                      <p>
                        <label>Name *</label>
                        <input type='text' name='name' />
                      </p>
                      <p>
                        <label>Email *</label>
                        <input type='email' name='email' />
                      </p>
                      <p>
                        <label>Website</label>
                        <input type='text' name='web' />
                      </p>
                      <p className='full-width'>
                        <input
                          type='submit'
                          name='submit'
                          defaultValue='Post comment'
                        />
                      </p>
                    </form>
                  </div> */}
                  {/* post navigation html */}
                  {/* <div className='post-navigation'>
                    <div className='nav-prev'>
                      <a href='#'>
                        <span className='nav-label'>Previous Reading</span>
                        <span className='nav-title'>
                          Deleniti illum culpa sodales cubilia.
                        </span>
                      </a>
                    </div>
                    <div className='nav-next'>
                      <a href='#'>
                        <span className='nav-label'>Next Reading</span>
                        <span className='nav-title'>
                          Deleniti illum culpa sodales cubilia.
                        </span>
                      </a>
                    </div>
                  </div> */}
                </div>
                {/* blog post item html end */}
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

export default BlogSingle;
