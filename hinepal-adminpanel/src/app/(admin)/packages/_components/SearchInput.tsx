'use client';

import type React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchInput({ initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/packages?query=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className='flex gap-2 mb-4'>
      <Input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search packages...'
        className='max-w-sm'
      />
      <Button type='submit'>Search</Button>
    </form>
  );
}
