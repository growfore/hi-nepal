"use client";

import endpoints from '@/constant/endpoints';
import { TPackageDetails } from '@/types/types';
import { get } from '@/utils/request-hander';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import React, { lazy, useEffect, useState } from 'react';
import GallerySlider from './_components/gallery-slider';
import { notFound } from 'next/navigation';
import "./package.css";
import { Button } from '@/components/Button';
import Link from 'next/dist/client/link';
import { Calendar, Ticket, CarFront, CircleGauge, Clock, CloudSunRain, House, MountainSnow, Smile, UsersRound, Star, PlaneTakeoffIcon, BookMarked, ArrowBigDown, ChevronDown, ChevronUp, Backpack, Route, Cross, Check, X, FileQuestion, Bookmark, IterationCcw, HeartPulse, TicketCheck, SignpostBig, Coins, MessageCircleQuestionIcon } from "lucide-react";
import { DataIcon } from '@/components/DataIcon';
import "@/app/package-content.css";
import "./table-style.css"

const activites = ({ params }: { params: Params }) => {
    const [details, setDetails] = React.useState<TPackageDetails>({} as TPackageDetails);
    const [relatedProducts, setRelatedProducts] = React.useState<TPackageDetails[]>([]);
    const [h2Headings, setH2Headings] = React.useState<{ id: string, text: string }[]>([]);
    const [itenaryHtml, setItenaryHtml] = React.useState<string>("");
    const [chevrons, setChevrons] = useState<{ [key: string]: boolean }>({});
    const navigations = [
        { id: 'overview', label: 'Overview' },
        { id: 'itenary', label: 'Itinerary' },
        { id: 'packing', label: 'Packing Essentials' },
        { id: 'best-season', label: 'Best Seasons' },
        { id: 'includes', label: 'Includes' },
        { id: 'excludes', label: 'Excludes' },
        { id: 'faqs', label: 'FAQs' }
    ]

    const toggleChevron = (key: string) => {
        setChevrons(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            await get({
                endPoint: endpoints.PACKAGES + '/' + params.slug,
                token: '',
                success: (_, res) => {
                    setDetails(res.data.package);
                    setRelatedProducts(res.data.relatedProducts);
                },
                failure: (message) => {
                    notFound();
                },
            });
        };

        fetchData();
    }, [params.slug]);

    // Parse itenary HTML and assign ids to h2s, also extract headings for TOC
    useEffect(() => {
        if (!details.itenary) {
            setItenaryHtml("");
            setH2Headings([]);
            return;
        }
        const parser = typeof window !== 'undefined' ? new window.DOMParser() : null;
        if (!parser) return;
        const doc = parser.parseFromString(details.itenary, 'text/html');
        const h2s = Array.from(doc.querySelectorAll('h2'));
        const headings: { id: string, text: string }[] = [];
        h2s.forEach((h2) => {
            const text = h2.textContent?.trim() || '';
            const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
            h2.id = id;
            headings.push({ id, text });
        });
        setH2Headings(headings);
        setItenaryHtml(doc.body.innerHTML);
    }, [details.itenary]);

    const [showSectionNav, setShowSectionNav] = useState(false);
    const sectionNavRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionNavRef.current) {
                const rect = sectionNavRef.current.getBoundingClientRect();
                if (rect.top <= 100) {
                    setShowSectionNav(true);
                } else {
                    setShowSectionNav(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>

            <div
                className='inner-baner-container'
                style={{ backgroundImage: 'url(' + details.banner + ')' }}>
                <div className='container'>
                    <div className='inner-banner-content'>
                        <h1 className='inner-title'>{details.title} </h1>
                    </div>
                </div>
            </div>
            <div className='inner-shape' />
                    <div ref={sectionNavRef} className={`section-nav sticky${showSectionNav ? ' visible' : ' hidden'}`}>
                        {navigations.map(nav => (
                            <div className='nav-item' key={nav.id}>
                                <Button key={nav.id} link={`#${nav.id}`}>{nav.label}</Button>
                            </div>
                        ))}
                    </div>
            <main className='package-page'>
                {/* <aside className='toc'>
                    <div className='sticky'>
                        <ul className='toc-list' style={{listStyleType: 'none', width: "100%", marginLeft: "0", paddingLeft: "1rem" }}>
                            {h2Headings.map((h) => (
                                <li style={{color: "green", marginBottom: '0.5rem', textWrap:"wrap", maxWidth:"320px" }} key={h.id}><a style={{color:"green"}} href={`#${h.id}`}>{h.text.replace(/-/g, ' ')}</a></li>
                            ))}
                        </ul>
                    </div>
                </aside> */}

                <section className='main-content-area'>
                    <div className="data">
                        <DataIcon icon={MountainSnow} k='Destination' v={details.title} />
                        <DataIcon icon={Clock} k='Duration' v={details.duration + " Days"} />
                        <DataIcon icon={CircleGauge} k='Trip Grade' v={details.tripGrade ?? "-"} />
                        <DataIcon icon={Calendar} k='Start/End' v={details.startFrom + "/" + details.endAt} />
                        <DataIcon icon={CloudSunRain} k='Best Seasons' v={details.bestSeason ?? "All Year"} />
                        <DataIcon icon={CarFront} k='Transport' v={details.transportation ?? "-"} />
                        <DataIcon icon={House} k='Accommodation' v={details.accommodation ?? "-"} />
                        <div className="permits">
                            <div className='permit-icon-wrapper'>
                                <Ticket />
                            </div>
                            <div>
                                <h5 className='data-item-key'>Permits</h5>
                                <p className='data-item-value'>{details.permits ?? "Manaslu Restricted Area Permit (MRAP), Annapurna Conservation Area Permit (ACAP), Manaslu Conservation Area Permit (MCAP)"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Overview Section */}
                    <div className='overview'>
                        <p className='overview content' dangerouslySetInnerHTML={{ __html: details.overview! }}></p>
                    </div>

                    {/* Highlights Section  */}
                    {
                        details.highlights &&
                        <div id='highlights' className="section">
                            <div className="section-head">
                                <div className='section-title'>
                                    <div className='section-icon'>
                                    <DataIcon icon={Star} />
                                    </div>
                                    {/* <p>Highlights of {details.title}</p>  */}
                                </div>
                            </div>
                            {
                                 <div dangerouslySetInnerHTML={{ __html: details.highlights }} className="content highlights-content">
                                </div> 
                            }
                        </div>
                    }


                    {/* Altitude Section */}
                    {
                        details.altitudeInfo &&
                        <div id='altitude' className="section">
                            <div className="section-head">
                                <div className='section-title'>
                                    <DataIcon icon={MountainSnow}  />
                                </div>
                            </div>
                            {
                                 <div dangerouslySetInnerHTML={{ __html: details.altitudeInfo }} className="content altitude-content">
                                </div> 
                            }
                        </div>
                    }
                    {/* Itenarary overview */}
                    {
                        details.itenary &&
                        <div id='itenary' className="section itenary">
                            <div className="section-head">
                                <div className='section-title'>
                                    <DataIcon icon={IterationCcw}  />
                                </div>
                            </div>
                            {
                                <div dangerouslySetInnerHTML={{ __html: details.itenary }} className="content itenary-content">
                                </div>
                            }
                        </div>
                    }


                    {/* Packaging Details */}
                    {
                        details.packing &&
                        <div id='packing' className="section">
                            <div className="section-head" >
                                <div className='section-title'>
                                    <DataIcon icon={Backpack}  />
                                </div>
                            </div>
                            {
                                 <div dangerouslySetInnerHTML={{ __html: details.packing }} className="content packing-content">
                                </div> 
                            }
                        </div>
                    }


                    {/* Seasons */}
                    {
                        details.bestSeasonInfo &&
                        <div id='best-season' className="section">
                            <div className="section-head" >
                                <div className='section-title'>
                                    <DataIcon icon={CloudSunRain}  />
                                </div>
                            </div>
                            {
                                 <div dangerouslySetInnerHTML={{ __html: details.bestSeasonInfo }} className="content best-season-content">
                                </div> 
                            }
                        </div>
                    }

                    {/* route overview */}
                    {
                        details.routeOverview &&
                        <div id='route-overview' className="section">
                            <div className="section-head">
                                <div className='section-title'>
                                    <DataIcon icon={Route}  />
                                </div>
                            </div>
                            {
                                <div dangerouslySetInnerHTML={{ __html: details.routeOverview }} className="content route-overview-content">
                                </div>
                            }
                        </div>
                    }
                    {/* Include/ Exclude */}
                    {/* Includes */}
                    {
                        details.includes &&
                        <div id='includes' className="section">
                            <div className="section-head">
                                <div className='section-title'>
                                    <DataIcon icon={Check}  />
                                    <p>Includes</p>
                                </div>
                            </div>
                            {
                                <div dangerouslySetInnerHTML={{ __html: details.includes }} className="content route-overview-content">
                                </div>
                            }
                        </div>
                    }
                    {/* Excludes */}
                    {
                        details.excludes &&
                        <div id='excludes' className="section">
                            <div className="section-head">
                                <div className='section-title'>
                                    <DataIcon icon={X}  />
                                    <p>Excludes</p>
                                </div>
                            </div>
                            {
                                <div dangerouslySetInnerHTML={{ __html: details.excludes }} className="content route-overview-content">
                                </div>
                            }
                        </div>
                    }

                    {/* Sickness and Safety */}
                    {
                        details.sicknessAndSaftey &&
                        <div id='sicknessAndSafety' className="section">
                            <div className="section-head" >
                                <div className='section-title'>
                                    <DataIcon icon={Cross}  />
                                </div>
                            </div>
                            {
                                 <div dangerouslySetInnerHTML={{ __html: details.sicknessAndSaftey }} className="content route-overview-content">
                                </div> 
                            }
                        </div>
                    }

                    {/* Travel insurance and regulations */}
                    {
                        details.insuranceAndEmergency &&
                        <div id='insuranceAndEmergency' className="section">
                            <div className="section-head" >
                                <div className='section-title'>
                                    <DataIcon icon={HeartPulse}  />
                                </div>
                            </div>
                            {
                                 <div dangerouslySetInnerHTML={{ __html: details.insuranceAndEmergency }} className="content route-overview-content">
                                </div> 
                            }
                        </div>
                    }

                    {/* Permits and regulations */}
                    {
                        details.permitsAndRegulations &&
                        <div id='permitsAndRegulations' className="section">
                            <div className="section-head" >
                                <div className='section-title'>
                                    <DataIcon icon={TicketCheck}  />
                                </div>
                            </div>
                            {
                                 <div dangerouslySetInnerHTML={{ __html: details.permitsAndRegulations }} className="content route-overview-content">
                                </div> 
                            }
                        </div>
                    }


                    {/* Short itinarary */}
                    {
                        details.shortTrekInfo &&
                        <div id='shortTrekInfo' className="section">
                            <div className="section-head" >
                                <div className='section-title'>
                                    <DataIcon icon={SignpostBig}  />
                                </div>
                            </div>
                            {
                                <div dangerouslySetInnerHTML={{ __html: details.shortTrekInfo }} className="content route-overview-content">
                                </div>
                            }
                        </div>
                    }

                    {/* Why trek */}
                    {
                        details.whyChooseThisPackage &&
                        <div id='whyChooseThisPackage' className="section">
                            <div className="section-head">
                                <div className='section-title'>
                                    <DataIcon icon={FileQuestion}  />
                                    <p>Why Choose {details.title} with us?</p>
                                </div>
                            </div>
                            {
                                <div dangerouslySetInnerHTML={{ __html: details.whyChooseThisPackage }} className="content route-overview-content">
                                </div>
                            }
                        </div>
                    }

                    {/* Cost Breakdown */}
                    {
                        details.priceBreakDown &&
                        <div id='priceBreakdown' className="section">
                            <div className="section-head" >
                                <div className='section-title'>
                                    <DataIcon icon={Coins}  />
                                </div>
                            </div>

                            {
                                <div dangerouslySetInnerHTML={{ __html: details.priceBreakDown }} className="content pricebreakdown-content">
                                </div> 
                            }
                        </div>
                    }
                    {/* Booking Info */}
                    {
                        details.bookingInfo &&
                        <div id='bookingInfo' className="section">
                            <div className="section-head">
                                <div className='section-title'>
                                    <DataIcon icon={Bookmark}  />
                                </div>
                            </div>
                            {
                                <div dangerouslySetInnerHTML={{ __html: details.bookingInfo }} className="content route-overview-content">
                                </div>
                            }
                            <Button link='tel: +977 ' >Ask for the Cost</Button>
                        </div>
                    }
                    {/* Faqs */}
                    {
                        details.goodtoknow &&
                        <div id='faqs' className="section">
                            <div className="section-head">
                                <div className='section-title'>
                                    <div className='section-icon'>
                                    <DataIcon icon={MessageCircleQuestionIcon}  />
                                    </div>
                                    <p>Frequently Asked Questions</p>
                                </div>
                            </div>
                            {
                                <div dangerouslySetInnerHTML={{ __html: details.goodtoknow}} className="content route-overview-content">
                                </div>
                            }
                        </div>
                    }
                    <div className="gallery">
                        <GallerySlider details={details} />
                    </div>

                </section>


                {/* RIGHT SIDEBAR */}
                <aside className='right-sidebar'>
                    <div className='sticky2'>
                        <div className='booking-details'>
                            <Image
                                src={details.thumbnail}
                                alt={details.title}
                                width={250}
                                height={150}
                                className='thumbnail'
                            />
                            <p className='title'><strong>{details.title}</strong></p>
                            <Button link="/book-now">Book Now</Button>
                        </div>

                        <div className="suggested-posts">
                            <h3>Related Packages</h3>
                            <ul>
                                {!relatedProducts || relatedProducts?.length === 0 &&
                                    (
                                        <li>No related packages found.</li>
                                    )}

                                {relatedProducts?.map((product) => (
                                    <li key={product.slug}>
                                        <Link href={`/${product.slug}/${product.slug}`}>
                                            {product.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default activites;
