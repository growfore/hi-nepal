'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronLeft, ChevronRight, Edit } from 'lucide-react';
import { Delete } from './delete';
import Link from 'next/link';

export interface DataItem {
  id: number;
  image: string | null;
  description: string;
  name: string;
  travelBy: string | null;
  link: string;
  title: string | null;
  rating: number | null;
  packageId: number | null;
  reviewDate: string;
  createdAt: string;
}

const initialData: DataItem[] = [
  {
    id: 8,
    image: null,
    description: '',
    name: 'Fallon Nielsen',
    travelBy: null,
    link: 'Dolore dolore natus ',
    title: null,
    rating: null,
    packageId: null,
    reviewDate: '2025-02-24T14:11:21.578Z',
    createdAt: '2025-02-24T14:11:21.578Z',
  },
];

export default function ReviewTable({ data }: { data: DataItem[] }) {
  //   const [data, setData] = useState<DataItem[]>(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className='space-y-4'>
      <Input
        type='search'
        placeholder='Search by name or description...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='max-w-sm'
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Review Date</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.link}</TableCell>
              <TableCell>
                {new Date(item.reviewDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(item.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className='flex gap-2 items-center'>
                {/* <Button variant='outline'>Edit</Button> */}
               <Link className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-md rounded-md' href={`/reviews/${item.id}/edit`}> Edit</Link>
                <Delete id={item.id} type='review' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex justify-between items-center'>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={handlePrevious}
            disabled={currentPage === 1}>
            <ChevronLeft className='h-4 w-4' />
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={handleNext}
            disabled={currentPage === totalPages}>
            Next
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
