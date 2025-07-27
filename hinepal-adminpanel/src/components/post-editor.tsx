'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardFooter } from '@/components/ui/card';
// import CustomCKEditor from './ck-editor';
const CustomCKEditor = dynamic(
  () => import('./ck-editor').then((mod) => mod.default),
  {}
);
import SeoFields from './seo-fields';
import toast from 'react-hot-toast';
import { TPackage, TSeo } from '@/utils/type';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Delete } from 'lucide-react';
import endpoints from '@/utils/endpoints';
import { getCookie } from '@/lib/cookie-handler';
import { get, patchWithFile, postWithFile } from '@/utils/request-helper';
import { TDestination } from '@/utils/schema';
import InputField from './inputs/inputfield';
import { fetchData } from '@/helper/fetch-data';
import form from '@/app/(admin)/destinations/form';

type PostData = {
  title: string | null;
  slug: string;
  description: string | null;
  status: string | null;
  h1: string | null;
  userId: string | null;
  categoryId: string;
  createdAt: string;
  content: string | null;
  readTime: string;
  images: (
    | File
    | {
      url: string;
      alt: string;
    }
  )[];

  seo: TSeo | undefined;
};

const statusOptions = ['unpublished', 'published'];

export function PostEditorComponent({
  initialData,
  categories,
}: {
  initialData?: Partial<TPackage>;
  categories: {
    id: number;
    name: string;
  }[];
}) {
  const [formData, setFormData] = useState<TPackage>({
    id: initialData?.id || undefined,
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    thumbnail: initialData?.thumbnail || '',
    banner: initialData?.banner || '',
    duration: initialData?.duration || '',
    link: initialData?.link || '',
    page: initialData?.page || '',
    content: initialData?.content || '',
    images: initialData?.images || [],
    price: initialData?.price || '',
    itenary: initialData?.itenary || '',
    includes: initialData?.includes || '',
    goodtoknow: initialData?.goodtoknow || '',
    groupAge: initialData?.groupAge || '',
    groupSize: initialData?.groupSize || '',
    accommodation: initialData?.accommodation || '',
    attractions: initialData?.attractions || '',
    altitude: initialData?.altitude || '',
    culture: initialData?.culture || '',
    endAt: initialData?.endAt || '',
    startFrom: initialData?.startFrom || '',
    rating: initialData?.rating || null,
    videoLink: initialData?.videoLink || null,
    bestSeason: initialData?.bestSeason || null,
    destinationId: initialData?.destinationId || null,
    discount: initialData?.discount || null,
    introduction: initialData?.introduction || null,
    seo: initialData?.seo || undefined,
    authorId: initialData?.authorId || undefined,
    transportation: initialData?.transportation || '',
    permits: initialData?.permits || '',
    tripGrade: initialData?.tripGrade || '',

    overview: initialData?.overview || '',
    highlights: initialData?.highlights || '',
    altitudeInfo: initialData?.altitudeInfo || '',
    packing: initialData?.packing || '',
    bestSeasonInfo: initialData?.bestSeasonInfo || '',
    routeOverview: initialData?.routeOverview || '',
    excludes: initialData?.excludes || '',
    sicknessAndSaftey: initialData?.sicknessAndSaftey || '',
    insuranceAndEmergency: initialData?.insuranceAndEmergency || '',
    permitsAndRegulations: initialData?.permitsAndRegulations || '',
    shortTrekInfo: initialData?.shortTrekInfo || '',
    whyChooseThisPackage: initialData?.whyChooseThisPackage || '',
    priceBreakDown: initialData?.priceBreakDown || '',
    bookingInfo: initialData?.bookingInfo || '',
  });
  const [authors, setAuthors] = useState<any[]>([]);
  const [seoData, setSeoData] = useState<TSeo>({
    metaTitle: initialData?.seo?.metaTitle || '',
    id: initialData?.seo?.id || undefined,
    metaDescription: initialData?.seo?.metaDescription || '',
    metaKeywords: initialData?.seo?.metaKeywords || '',
    metaCanonical: initialData?.seo?.metaCanonical || '',
    schema: initialData?.seo?.schema || '',
    metaImage: initialData?.seo?.metaImage || '',
    metaRating: initialData?.seo?.metaRating || '',
    metaAuthor: initialData?.seo?.metaAuthor || '',
    metaRobots: initialData?.seo?.metaRobots || '',
    metaCopyright: initialData?.seo?.metaCopyright || '',
    metaRevisit: initialData?.seo?.metaRevisit || '',
    twitterCard: initialData?.seo?.twitterCard || '',
    twitterSite: initialData?.seo?.twitterSite || '',
  });
  const [writingSeo, setWritingSeo] = useState(false);
  const [whichWriting, setWhichWriting] = useState('overview');
  const [destinations, setDestinations] = useState<TDestination[]>([]);
  const router = useRouter();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof PostData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...Array.from(e.target.files as FileList)],
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.destinationId) {
      toast.error('Please select a valid destination');
      return;
    }
    const payload = new FormData();
    payload.append('title', formData.title || '');
    payload.append('slug', formData.slug);
    payload.append('description', formData.description || '');

    payload.append('link', formData.link || '');
    payload.append('page', formData.page || '');
    payload.append('content', formData.content || '');
    if (formData.images.length > 0) {
      Array.from(formData.images).forEach((file) => {
        // payload.append('images', file.url ? file.url : file);
        file instanceof File
          ? payload.append('images', file)
          : payload.append('images', JSON.stringify(file));
      });
    }
    formData.thumbnail.length > 0 &&
      formData.thumbnail[0] instanceof File &&
      payload.append('thumbnail', formData?.thumbnail[0] || '');
    formData.banner.length > 0 &&
      formData.banner[0] instanceof File &&
      payload.append('banner', formData.banner[0] || '');
    payload.append('authorId', formData.authorId?.toString() || '');
    payload.append('seo', JSON.stringify(seoData));
    payload.append('price', formData.price || '');
    payload.append('duration', formData.duration || '');
    payload.append('itenary', formData.itenary || '');
    payload.append('includes', formData.includes || '');
    payload.append('goodtoknow', formData.goodtoknow || '');
    payload.append('groupAge', formData.groupAge || '');
    payload.append('groupSize', formData.groupSize || '');
    payload.append('accommodation', formData.accommodation || '');
    payload.append('attractions', formData.attractions || '');
    payload.append('altitude', formData.altitude || '');
    payload.append('culture', formData.culture || '');
    payload.append('endAt', formData.endAt || '');
    payload.append('startFrom', formData.startFrom || '');
    payload.append('rating', formData.rating || '');
    payload.append('videoLink', formData.videoLink || '');
    payload.append('bestSeason', formData.bestSeason || '');
    payload.append('destinationId', formData.destinationId?.toString() || '');
    payload.append('discount', formData.discount?.toString() || '');
    payload.append('introduction', formData.introduction || '');
    payload.append('seo.ogImage', seoData.metaImage || '');
    payload.append('transportation', formData.transportation || '');
    payload.append('permits', formData.permits || '');
    payload.append('tripGrade', formData.tripGrade || '');

    payload.append('overview', formData.overview || '');
    payload.append("packing", formData.packing || '');
    payload.append('highlights', formData.highlights || '');
    payload.append('altitudeInfo', formData.altitudeInfo || '');
    payload.append('bestSeasonInfo', formData.bestSeasonInfo || '');
    payload.append('routeOverview', formData.routeOverview || '');
    payload.append('excludes', formData.excludes || '');
    payload.append('sicknessAndSaftey', formData.sicknessAndSaftey || '');
    payload.append('insuranceAndEmergency', formData.insuranceAndEmergency || '');
    payload.append('permitsAndRegulations', formData.permitsAndRegulations || '');
    payload.append('shortTrekInfo', formData.shortTrekInfo || '');
    payload.append('whyChooseThisPackage', formData.whyChooseThisPackage || '');
    payload.append('priceBreakDown', formData.priceBreakDown || '');
    payload.append('bookingInfo', formData.bookingInfo || '');
    e.preventDefault();

    // fetch data from api
    if (initialData) {
      await patchWithFile({
        endPoint: endpoints.PACKAGES + '/' + initialData.id,
        token: await getCookie('token'),
        data: payload,
        success: (message: string, response: any) => {
          toast.success(message);
          router.push('/packages');
          router.refresh();
        },
        failure: (error: any) => {
          toast.error(error.message);
        },
      });
      return;
    }
    await postWithFile({
      endPoint: endpoints.PACKAGES,
      token: await getCookie('token'),
      data: payload,
      success: (message: string, response: any) => {
        toast.success(message);
        router.push('/packages');
        router.refresh();
      },
      failure: (error: any) => {
        toast.error(error.message);
      },
    });
  };
  function handleDeleteImage(index: number) {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  }
  useEffect(() => {
    (async () => {
      await get({
        endPoint: endpoints.DESTINATIONS,
        success: (message, res) => {
          setDestinations(res.data);
        },
        failure: (message) => { },
      });
      const fetchedData = await fetchData('authors');
      setAuthors(await fetchedData);
    })();
  }, []);


  return (
    <div className=' m-4 p-4 bg-white'>
      <h1>{initialData ? 'Update Package' : 'Create Package'}</h1>
      <div>
        <form onSubmit={handleSubmit} className='space-y-6' name='post-form'>
          <div className='flex  items-center bg-slate-100 w-fit p-2 rounded-lg space-x-2'>
            <Button
              disabled={!writingSeo}
              type='button'
              onClick={() => setWritingSeo(false)}>
              Write Content
            </Button>
            <Button
              disabled={writingSeo}
              type='button'
              onClick={() => setWritingSeo(true)}>
              Write SEO
            </Button>
          </div>
          {!writingSeo && (
            <div className='p-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {' '}
                <div className='space-y-2'>
                  <Label htmlFor='title'>Title</Label>
                  <Input
                    id='title'
                    name='title'
                    value={formData.title || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post title'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='slug'>Slug</Label>
                  <Input
                    id='slug'
                    name='slug'
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder='Enter post slug'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {' '}
                <div className='space-y-2'>
                  <Label htmlFor='destinationId'>destination ID</Label>
                  <Select
                    onValueChange={(e) =>
                      setFormData({ ...formData, destinationId: Number(e) })
                    }>
                    <SelectTrigger>
                      <SelectValue placeholder='Select an activity'></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {destinations?.map((destinations, index) => (
                        <SelectItem
                          key={destinations.id}
                          value={destinations?.id?.toString() || ''}>
                          {destinations.name + ' - ' + destinations.slug}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* <Input
                    id='destinationId'
                    name='destinationId'
                    value={formData.destinationId || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post destinationId'
                  /> */}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='videoLink'>video Link</Label>
                  <Input
                    id='videoLink'
                    name='videoLink'
                    value={formData.videoLink || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post videoLink'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='description'>Description</Label>
                <Textarea
                  id='description'
                  name='description'
                  value={formData.description || ''}
                  onChange={handleInputChange}
                  placeholder='Enter post description'
                />
              </div>
              {/* content sections  */}
              {/* TAB BUTTON GROP */}
              <section>
                <div className='grid grid-cols-6  my-4 bg-gray-100  p-2  gap-2'>
                  <Button type='button' onClick={() => setWhichWriting("overview")}> Overview</Button>
                  <Button type='button' onClick={() => setWhichWriting("highlights")}> Highlights</Button>
                  <Button type="button" onClick={() => setWhichWriting("altitudeInfo")}> Altitude Info</Button>
                  <Button type='button' onClick={() => setWhichWriting("itenary")}> Itinerary</Button>
                  <Button type='button' onClick={() => setWhichWriting("packing")}> Packaging</Button>
                  <Button type='button' onClick={() => setWhichWriting("bestSeasonInfo")}> Seasons Info</Button>
                  <Button type='button' onClick={() => setWhichWriting("routeOverview")}> Route Overview</Button>
                  <Button type='button' onClick={() => setWhichWriting("includes")}> Includes</Button>
                  <Button type='button' onClick={() => setWhichWriting("excludes")}> Excludes</Button>
                  <Button type='button' onClick={() => setWhichWriting("sicknessAndSaftey")}> Sickness and Safety</Button>
                  <Button type='button' onClick={() => setWhichWriting("insuranceAndEmergency")}> Insurance & Emergency</Button>
                  <Button type='button' onClick={() => setWhichWriting("permitsAndRegulations")}> Permits & Regulations</Button>
                  <Button type='button' onClick={() => setWhichWriting("shortTrekInfo")}> Short Itinerary </Button>
                  <Button type='button' onClick={() => setWhichWriting("whyChooseThisPackage")}> Why this Package </Button>
                  <Button type='button' onClick={() => setWhichWriting("priceBreakdown")}> Price Breakdown</Button>
                  <Button type='button' onClick={() => setWhichWriting("bookingInfo")}> Info & Final Thoughts</Button>
                  <Button type='button' onClick={() => setWhichWriting("goodtoknow")}> FAQs</Button>
                </div>


                {/* OVERVIEW */}
                {whichWriting === "overview" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='overview'>Overview</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.overview}

                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              overview: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Highlights */}
                {whichWriting === "highlights" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='highlights'>Highlights</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.highlights}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              highlights: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Altitude Info */}
                {whichWriting === "altitudeInfo" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='altitudeInfo'>Altitude Info</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.altitudeInfo}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              altitudeInfo: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}

                {/* Itenenary */}
                {whichWriting === "itenary" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='itenary'>Itenary</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.itenary}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              itenary: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Packing */}
                {whichWriting === "packing" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='packing'>Packing Essentials</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.packing}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              packing: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Best Season Info */}
                {whichWriting === "bestSeasonInfo" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='bestSeasonInfo'>Best Season Info</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.bestSeasonInfo}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              bestSeasonInfo: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Route Overview */}
                {whichWriting === "routeOverview" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='routeOverview'>Route Overview</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.routeOverview}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              routeOverview: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Includes */}
                {whichWriting === "includes" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='includes'>Includes</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.includes}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              includes: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Excludes */}
                {whichWriting === "excludes" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='excludes'>Excludes</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.excludes}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              excludes: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Sickness and Safety */}
                {whichWriting === "sicknessAndSaftey" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='sicknessAndSaftey'>Sickness and Safety</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.sicknessAndSaftey}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              sicknessAndSaftey: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Insurance and Emergency */}
                {whichWriting === "insuranceAndEmergency" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='insuranceAndEmergency'>Insurance and Emergency</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.insuranceAndEmergency}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              insuranceAndEmergency: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Permits and Regulations */}
                {whichWriting === "permitsAndRegulations" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='permitsAndRegulations'>Permits and Regulations</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.permitsAndRegulations}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              permitsAndRegulations: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Short Trek Info */}
                {whichWriting === "shortTrekInfo" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='shortTrekInfo'>Short Trek Info</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.shortTrekInfo}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              shortTrekInfo: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Why Choose This Package */}
                {whichWriting === "whyChooseThisPackage" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='whyChooseThisPackage'>Why this pacakge </Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.whyChooseThisPackage}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              whyChooseThisPackage: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}

                {/* price breakdown */}
                {whichWriting === "priceBreakdown" && (
                  <div className='space-y-2'>
                    <Label className="font-bold text-xl" htmlFor='priceBreakdown'>Price Breakdown</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.priceBreakDown}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              priceBreakDown: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
                {/* Booking Info */}
                {whichWriting === "bookingInfo" && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-xl' htmlFor='bookingInfo'>Booking Info and Final Thoughts</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.bookingInfo}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              bookingInfo: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}


                {whichWriting === 'introduction' && (
                  <div className='space-y-2'>
                    <Label htmlFor='introduction'>Introdution</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.introduction}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              introduction: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}


                {whichWriting === 'goodtoknow' && (
                  <div className='space-y-2'>
                    <Label className='font-bold text-3xl' htmlFor='introduction'>FAQs</Label>
                    <div className='border rounded-md'>
                      {
                        <CustomCKEditor
                          content={formData.goodtoknow}
                          onChange={(value: string) =>
                            setFormData((prev) => ({
                              ...prev,
                              goodtoknow: value,
                            }))
                          }
                        />
                      }
                    </div>
                  </div>
                )}
              </section>


              {/* DATA SECTION */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {' '}
                <div className='space-y-2'>
                  <Label htmlFor='duration'>Duration</Label>
                  <Input
                    id='duration'
                    name='duration'
                    value={formData.duration || ''}
                    onChange={handleInputChange}
                    placeholder='Enter  duration'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='link'>Link</Label>
                  <Input
                    id='link'
                    name='link'
                    value={formData.link || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post link'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {' '}
                <div className='space-y-2'>
                  <Label htmlFor='price'>Price</Label>
                  <Input
                    id='price'
                    name='price'
                    value={formData.price || ''}
                    onChange={handleInputChange}
                    placeholder='Enter  price'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='groupAge'>group Age</Label>
                  <Input
                    id='groupAge'
                    name='groupAge'
                    value={formData.groupAge || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post groupAge'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {' '}
                <div className='space-y-2'>
                  <Label htmlFor='groupSize'>Group Size</Label>
                  <Input
                    id='groupSize'
                    name='groupSize'
                    value={formData.groupSize || ''}
                    onChange={handleInputChange}
                    placeholder='Enter  groupSize'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='accommodation'> Accommodation</Label>
                  <Input
                    id='accommodation'
                    name='accommodation'
                    value={formData.accommodation || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post accommodation'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='attractions'>Attractions</Label>
                  <Input
                    id='attractions'
                    name='attractions'
                    value={formData.attractions || ''}
                    onChange={handleInputChange}
                    placeholder='Enter  attractions'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='altitude'> Altitude</Label>
                  <Input
                    id='altitude'
                    name='altitude'
                    value={formData.altitude || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post altitude'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='rating'>Ratings</Label>
                  <Input
                    id='rating'
                    name='rating'
                    value={formData.rating || ''}
                    onChange={handleInputChange}
                    placeholder='Enter  rating'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='Culture'> Culture</Label>
                  <Input
                    id='Culture'
                    name='culture'
                    value={formData.culture || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post Culture'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='bestSeason'>Best Season</Label>
                  <Input
                    id='bestSeason'
                    name='bestSeason'
                    value={formData.bestSeason || ''}
                    onChange={handleInputChange}
                    placeholder='Enter  bestSeason'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='discount'> Discount</Label>
                  <Input
                    id='discount'
                    name='discount'
                    value={formData.discount || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post discount'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='startFrom'>start From</Label>
                  <Input
                    id='startFrom'
                    name='startFrom'
                    value={formData.startFrom || ''}
                    onChange={handleInputChange}
                    placeholder='Enter  startFrom'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='endAt'> end At</Label>
                  <Input
                    id='endAt'
                    name='endAt'
                    value={formData.endAt || ''}
                    onChange={handleInputChange}
                    placeholder='Enter post endAt'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='tripGrade'> Trip Grade</Label>
                  <Input
                    id='tripGrade'
                    name='tripGrade'
                    value={formData.tripGrade || ''}
                    onChange={handleInputChange}
                    placeholder='Hard / Moderate / Easy'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='transportation'> Transportation </Label>
                  <Input
                    id='transportation'
                    name='transportation'
                    value={formData.transportation || ''}
                    onChange={handleInputChange}
                    placeholder='Enter viable transportations options. E.g. Car, Bus, etc.'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='permits'> Permits </Label>
                  <Input
                    id='permits'
                    name='permits'
                    value={formData.permits || ''}
                    onChange={handleInputChange}
                    placeholder='Enter required permits for the package. E.g.
                    Manaslu Restricted Area Permit (MRAP), Annapurna Conservation Area Permit (ACAP), etc.'
                  />
                </div>
              </div>
              <div className='space-y-2 '>
                <Label htmlFor='banner'>Banner</Label>
                <Input
                  id='banner'
                  name='banner'
                  type='file'
                  accept='image/*'
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, banner: e.target.files }))
                  }
                />
                {formData.banner && formData.banner.length > 0 && (
                  <img
                    src={
                      typeof formData.banner == 'string'
                        ? formData.banner
                        : URL.createObjectURL(formData.banner[0]) || ''
                    }
                    alt='Category'
                    className='mt-2 max-w-full h-auto'
                    style={{ maxHeight: '200px' }}
                  />
                )}
              </div>{' '}
              <div className='space-y-2 '>
                <Label htmlFor='thumbnail'>thumbnail</Label>
                <Input
                  id='thumbnail'
                  name='thumbnail'
                  type='file'
                  accept='image/*'
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      thumbnail: e.target.files,
                    }))
                  }
                />
                {formData.thumbnail && formData.thumbnail.length > 0 && (
                  <img
                    src={
                      typeof formData.thumbnail === 'string'
                        ? formData.thumbnail
                        : URL.createObjectURL(formData.thumbnail[0]) || ''
                    }
                    alt='Category'
                    className='mt-2 max-w-full h-auto'
                    style={{ maxHeight: '200px' }}
                  />
                )}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='images'>Images</Label>
                <Input
                  id='images'
                  name='images'
                  type='file'
                  onChange={handleImageUpload}
                  multiple
                  accept='image/*'
                />

                {formData.images.length > 0 && (
                  <div className='mt-2'>
                    <p>Selected images:</p>
                    <div className='flex flex-wrap'>
                      {formData.images.map((image, index) => (
                        // @ts-ignore
                        <span key={index}>
                          {image instanceof Blob ? (
                            <Card className='relative' key={index}>
                              <Image
                                src={URL.createObjectURL(image)}
                                alt={`Image ${index}`}
                                width={100}
                                height={100}
                                className='w-32 h-32 object-cover'
                              />

                              <CardFooter className='py-1 flex justify-end'>
                                <Button
                                  type='button'
                                  onClick={() => handleDeleteImage(index)}
                                  size={'sm'}
                                  className='float-right bg-red-500  bottom-4 right-4'>
                                  <Delete
                                    className=' text-white  rounded-full   flex items-center justify-center'
                                    type='image'
                                  />
                                </Button>
                              </CardFooter>
                            </Card>
                          ) : (
                            <Card className='relative'>
                              <Image
                                key={index}
                                src={image.url}
                                alt={`Image ${index}`}
                                width={100}
                                height={100}
                                className='w-32 h-32 object-cover'
                              />
                              <CardFooter className='py-1 flex justify-end'>
                                <Button
                                  type='button'
                                  onClick={() => handleDeleteImage(index)}
                                  size={'sm'}
                                  className='float-right bg-red-500  bottom-4 right-4'>
                                  <Delete
                                    className=' text-white  rounded-full   flex items-center justify-center'
                                    type='image'
                                  />
                                </Button>
                              </CardFooter>
                            </Card>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {writingSeo && (
            <>
              <div className='space-y-2 '>
                <Label htmlFor='author'>Author</Label>
                <Select
                  defaultValue={String(formData.authorId)}
                  onValueChange={(values) =>
                    setFormData({
                      ...formData,
                      authorId: Number(values),
                    })
                  }>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Select Author' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Authors</SelectLabel>
                      {authors?.map((author) => (
                        <SelectItem key={author.id} value={`${author.id}`}>
                          {author.name}
                        </SelectItem>
                      ))}
                      {/* <SelectItem value='apple'>Apple</SelectItem>
                      <SelectItem value='banana'>Banana</SelectItem>
                      <SelectItem value='blueberry'>Blueberry</SelectItem>
                      <SelectItem value='grapes'>Grapes</SelectItem>
                      <SelectItem value='pineapple'>Pineapple</SelectItem> */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <SeoFields seoData={seoData} setSeoData={setSeoData} />
            </>
          )}
          <Button type='submit' className='w-full'>
            Submit Post
          </Button>
        </form>
      </div>
    </div>
  );
}
