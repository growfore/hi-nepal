'use client';
import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { deleteAllCookies, deleteCookie } from '@/utils/cookie-handler';

const LogOutButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  async function handleClick() {
    localStorage.clear();
    await deleteCookie('token');
    router.push('/');
  }
  return (
    <Button onClick={handleClick} className={`${className}`}>
      {children}
    </Button>
  );
};

export default LogOutButton;
