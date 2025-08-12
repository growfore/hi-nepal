"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, ChevronUp, icons, LucideHam, LucideMail, LucideMenu, LucidePhone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TNavBar } from '@/types/types';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function BottomNav({ navBar }: { navBar: TNavBar }) {
    const [topValue, setTopValue] = useState(60);
    const [disableHover, setDisableHover] = useState(false);

    const handleClick = () => {
        setDisableHover(true);
        setTimeout(() => setDisableHover(false), 500); // re-enable after 500ms
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newTop = Math.max(56 - scrollY, 0);
            setTopValue(newTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{ top: topValue }} className={cn('fixed container mx-auto flex justify-around items-center py-4 z-[999] bg-white  min-w-[100vw]')}>
            <Link href={"/"}>
                <Image src={"/assets/hinepal-logo.webp"} priority height={170} width={130} alt='hinepal logo' />
            </Link>
            <div className='flex gap-4 items-center'>
                {navBar.map((activity, index) => {
                    return (
                        <div key={index}>
                            <div onClick={handleClick} className={cn(!disableHover && 'group', 'hidden md:flex')}><Link href={`/activities/${activity.slug}`} className='font-bold uppercase flex gap-1 cursor-pointer'>{activity.name} <ChevronDown className='group-hover:hidden' /><ChevronUp className='hidden group-hover:block' /></Link>
                                <div className=''>
                                    <div className='rounded-lg hidden group-hover:grid absolute top-[45px] z-[999]  left-0 w-[100vw] py-8 px-0'>
                                        <div className='pb-8 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container px-36 mx-auto flex-wrap w-[100vw] rounded-md'>
                                            {activity.destinations.map((destination, index) => {
                                                return (
                                                    <div key={index}>
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
                {/* <Link href={"/adventure"} className='hover:text-green-700 font-bold uppercase flex gap-1 cursor-pointer'> Adventure</Link> */}
            </div>



            <div className="flex justify-center items-center">
                <Link href={"/booking"} className='hover:cursor-pointer'>
                    <Button size={'lg'} className='md:p-8'>Book Now</Button>
                </Link>
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
                                <Accordion key={index} type="single" collapsible>
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger className='font-bold uppercase flex gap-1'>
                                            {activity.name}
                                            {/* <Link href={`/activities/${activity.slug}`} className='font-bold uppercase flex gap-1'>{activity.name} <ChevronDown className='group-hover:hidden' /><ChevronUp className='hidden group-hover:block' /></Link> */}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {activity.destinations.map((destination, index) => {
                                                return (
                                                    destination.packages.length > 0 && (
                                                        <Accordion key={index} type='single' collapsible>
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
        </nav>
    )
}