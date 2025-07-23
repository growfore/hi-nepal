'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DataTable } from './DataTable';
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { Delete } from './delete';

type Carousel = {
  title: string;
  page: string;
  description: string;
  subtitle: string;
  link: string;
  id: number;
};

const columns: ColumnDef<Carousel>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Title
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'page',
    header: 'Page',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'subtitle',
    header: 'Subtitle',
  },
  {
    accessorKey: 'link',
    header: 'Link',
    cell: ({ row }) => {
      const link: string = row.getValue('link');
      return (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline'>
          {link}
        </a>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const router = useRouter();
      const carousel = row.original;
  
      return (
        <div className='flex gap-2'>
          <Button onClick={() => router.push(`/carousels/${carousel.id}/edit`)}>
            Edit
          </Button>
          <Delete id={carousel.id} type='carousel' />
        </div>
      );
    },
  },
];

export function CarouselTable({ carousels }: { carousels: Carousel[] }) {
  return <DataTable columns={columns} data={carousels} />;
}
