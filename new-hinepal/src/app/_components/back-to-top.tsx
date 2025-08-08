"use client";

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 900);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        show && (
            <Button title='Back to Top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} variant={'default'} className='bg-green-700 hover:bg-green-500 hover:cursor-pointer rounded-md fixed left-2 bottom-2 p-2'>
                <ChevronUp color='white' />
            </Button>
        )
    )
}