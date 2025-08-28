"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, ChevronUp, LucideMenu } from 'lucide-react';
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
import { usePathname, useRouter } from 'next/navigation';

export function BottomNav({ navBar }: { navBar: TNavBar }) {
    const [topValue, setTopValue] = useState(60);
    const [disableHover, setDisableHover] = useState(false);
    const path = usePathname();
    const destination = path.slice(1);

    const handleClick = () => {
        setDisableHover(true);
        setTimeout(() => setDisableHover(false), 500); // re-enable after 500ms
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newTop = Math.max(60 - scrollY, 0);
            setTopValue(newTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{ top: topValue }} className={cn('fixed  px-4 items-center py-4 z-[999] bg-white min-w-[100vw]')}>
            <div className='flex items-center  justify-between container mx-auto  gap-4 md:max-w-[75vw]'>

                <Link href={"/"}>
                    <Image
                        loader={({ src }) => src}
                        unoptimized
                        src={"/assets/hinepal-logo.webp"} priority height={170} width={130} alt='hinepal logo' />
                </Link>
                <div className='flex gap-4 items-center'>
                    {navBar.map((activity, index) => {
                        return (
                            <div key={index}>
                                <div onClick={handleClick} className={cn(!disableHover && 'group', 'hidden md:flex')}><Link href={`/activities/${activity.slug}`} className='font-bold uppercase flex gap-1 cursor-pointer'>{activity.name} <ChevronDown className='group-hover:hidden' /><ChevronUp className='hidden group-hover:block' /></Link>
                                    <div className=''>
                                        <div className=' hidden group-hover:grid absolute top-[60px] z-[999]  left-0 w-[100vw] py-8 px-0'>
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
                    <Link title='go to adventures page' href={"/adventure"} className='hidden md:flex hover:text-green-700 font-bold uppercase gap-1 cursor-pointer'> Adventure</Link>
                    <Link title='got to about page' href={"/about"} className='hidden md:flex hover:text-green-700 font-bold uppercase gap-1 cursor-pointer'>About Us</Link>
                    <Link title='go to blogs page' href={"/blogs"} className='hidden md:flex hover:text-green-700 font-bold uppercase gap-1 cursor-pointer'>Blogs</Link>
                </div>





                {/* mobile menu */}
                <div className='flex gap-2'>
                    <div className="flex justify-center items-center">
                        <Link href={`/booking?destination=${destination}`} className='hover:cursor-pointer'>
                            <Button name='navigation-menu' title='open navigation menu' size={'lg'} className='md:p-8 text-lg p-4'>Book Now</Button>
                        </Link>
                    </div>

                    <div className='md:hidden'>
                        <Sheet>
                            <SheetTrigger title='open navigation menu'>
                                <LucideMenu size={42} />
                            </SheetTrigger>
                            <SheetContent className='flex flex-col gap-4 p-8 z-[99999]'>
                                {navBar.map((activity, index) => {
                                    return (
                                        <Accordion key={index} type="single" collapsible>
                                            <AccordionItem value={`item-${index}`}>
                                                <AccordionTrigger className='font-bold text-xl uppercase flex p-0'>
                                                    {activity.name}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {activity.destinations.map((destination, index) => {
                                                        return (
                                                            destination.packages.length > 0 && (
                                                                <Accordion key={index} type='single' collapsible>
                                                                    <AccordionItem value={`item-${index}`}>
                                                                        <AccordionTrigger key={index} className='font-semibold text-xl p-0 py-2'>{destination.name}</AccordionTrigger>
                                                                        <AccordionContent>
                                                                            <ul className='flex flex-col gap-2'>
                                                                                {destination.packages.map((packageItem, index) => {
                                                                                    return (
                                                                                        <li key={index}>
                                                                                            <Link href={`/${packageItem.slug}`} className='hover:border-b-2 border-dashed border-[#EF5922] hover:text-[#EF5922] font-bold text-lg '>
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
                                <Link title='go to adventures page' href={"/adventure"} className='uppercase font-bold text-xl'>Adventures</Link>
                                <Link title='go to about page' href={"/about"} className='uppercase font-bold text-xl'>About us</Link>
                                <Link title='go to blogs' href={"/blogs"} className='uppercase font-bold text-xl'>Blogs</Link>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}