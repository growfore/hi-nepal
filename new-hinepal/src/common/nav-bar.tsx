import React from 'react';
import siteStore from '@/zustand/store';
import { TNavBar, TSiteInformation } from '@/types/types';
import Link from 'next/link';
import { get } from '@/utils/request-hander';
import endpoints from '@/constant/endpoints';
import Image from 'next/image';
import { fetchData } from '@/helper/fetch-data';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, ChevronUp, icons, LucideHam, LucideMail, LucideMenu, LucidePhone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const NewNav = async () => {
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
    <div className='bg-green-600 z-[999] min-w-[100vw] '>
      <div className='hidden md:flex container text-white justify-between  items-center py-2 md:px-20  mx-auto '>
        <div className='flex items-center  gap-2'>
          <div className='rounded-sm bg-white p-2'>
            <LucideMail className='text-green-600' />
          </div>
          <div>
            <p className='font-light'>Quick Questions? Email us</p>
            <a href={`mailto:${siteInformation.email1}`} className='hover:cursor-pointer font-bold hover:underline'>{siteInformation.email1}</a>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='rounded-sm bg-white p-2'>
            <LucidePhone className='text-green-600' />
          </div>
          <div>
            <p>
              Talk to an Expert
            </p>
            <a href={`tel:${siteInformation.phone1}`} className='hover:cursor-pointer hover:underline font-bold'>{siteInformation.phone1}</a>
          </div>
        </div>
      </div>
      <nav className='container mx-auto flex justify-around items-center py-4 z-[999] bg-white  min-w-[100vw] border-b-2 border-orange-400 border-dashed'>
        <Link href={"/"} className="">
          <Image src={"/hinepal/LOGO_HINEPAL.webp"} height={170} width={130} alt='' />
        </Link>
        <div className='flex gap-4 items-center'>
          {navBar.map((activity, index) => {
            return (
              <div>
                <div className='group  hidden md:flex'><Link href={`/activities/${activity.slug}`} className='font-bold uppercase flex gap-1'>{activity.name} <ChevronDown className='group-hover:hidden' /><ChevronUp className='hidden group-hover:block' /></Link>
                  <div className=''>
                    <div className='bg-transparent py-24 rounded-lg hidden group-hover:grid absolute top-[60px] z-[9999]  left-0 w-[100vw] p-8'>
                      <div className='pb-8 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container px-36 mx-auto flex-wrap w-[100vw] rounded-md'>
                        {activity.destinations.map((destination, index) => {
                          return (
                            <div>
                              <Link className='font-semibold text-lg' key={index} href={`/activities/${activity.slug}/${destination.slug}`}>
                                <div className='flex gap-1 items-center mb-2 text-[#F05A24] hover:text-green-700'>
                                  <span>{destination.name}</span>
                                  <ChevronRight className='size-4' />
                                </div>
                              </Link>
                              <ul className='flex flex-col gap-2'>
                                {destination.packages.map((packageItem, index) => {
                                  return (
                                    <li key={index}>
                                      <Link href={`/${packageItem.slug}`} className='hover:border-b-2 border-dashed border-green-700 hover:text-green-700'>
                                        {packageItem.title.includes(":") ? packageItem.title.split(":")[0].trim() : packageItem.title.trim()}
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                </div>



              </div>
            )
          })}
        </div>

        {/* mobile menu */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <LucideMenu />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-4 p-8 z-[99999]'>
              {navBar.map((activity, index) => {
                return (
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className='font-bold uppercase flex gap-1'>
                        {activity.name}
                        {/* <Link href={`/activities/${activity.slug}`} className='font-bold uppercase flex gap-1'>{activity.name} <ChevronDown className='group-hover:hidden' /><ChevronUp className='hidden group-hover:block' /></Link> */}
                      </AccordionTrigger>
                      <AccordionContent>
                        {activity.destinations.map((destination, index) => {
                          return (
                            destination.packages.length > 0 && (
                              <Accordion type='single' collapsible>
                                <AccordionItem value={`item-${index}`}>
                                  <AccordionTrigger key={index} className='font-semibold text-lg'>{destination.name}</AccordionTrigger>
                                  <AccordionContent>
                                    <ul className='flex flex-col gap-2'>
                                      {destination.packages.map((packageItem, index) => {
                                        return (
                                          <li key={index}>
                                            <Link href={`/${packageItem.slug}`} className='hover:border-b-2 border-dashed border-[#EF5922] hover:text-[#EF5922] font-bold text-lg'>
                                              {packageItem.title.includes(":") ? packageItem.title.split(":")[0].trim() : packageItem.title.trim()}
                                            </Link>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            )
                          )
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              })}

            </SheetContent>
          </Sheet>
        </div>

        <div className="book-now flex self-end hover:cursor-pointer">
          <Link href={"/booking"}>
            <Button size={'lg'} className='p-8'>Book Now</Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

