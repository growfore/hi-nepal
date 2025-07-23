import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import type { TPackage } from '@/utils/type';
import Image from 'next/image';
import Link from 'next/link';
import { Delete } from '@/components/delete';
import endpoints from '@/utils/endpoints';
import { get } from '@/utils/request-helper';
import SearchInput from './_components/SearchInput';
import DynamicDataTable from '@/components/dynamic-data-table';

type TResponseData = {
  total: number;
  limit: number | null;
  offset: number | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextUrl: string | null;
  previousUrl: string | null;
  packages: TPackage[];
};

const ITEMS_PER_PAGE = 10;

export default async function PackagesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = (searchParams.query as string) || '';
  const page = Number.parseInt((searchParams.page as string) || '1', 10);
  const offset = (page - 1) * ITEMS_PER_PAGE;

  let responseData: TResponseData | null = {} as TResponseData;
  await get({
    endPoint: endpoints.PACKAGES,
    params: { query, limit: 200, offset },
    success: (message: string, response: any) => {
      responseData = response.data;
    },
    failure: (message: string) => {},
  });

  const totalPages = Math.ceil((responseData?.total || 0) / ITEMS_PER_PAGE);

  return (
    //   <div className='bg-white m-4 p-4'>
    //     <div className='flex justify-between items-center mb-4'>
    //       <SearchInput initialQuery={query} />
    //       <Link
    //         href={'/packages/add'}
    //         className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'>
    //         Add New
    //       </Link>
    //     </div>

    //     <Table>
    //       <TableCaption>A list of Packages.</TableCaption>
    //       <TableHeader>
    //         <TableRow>
    //           <TableHead className='w-[100px]'>ID</TableHead>
    //           <TableHead>Title</TableHead>
    //           <TableHead>Description</TableHead>
    //           <TableHead className='text-right'>Slug</TableHead>
    //           <TableHead className='text-right'>Image</TableHead>
    //           <TableHead className='text-right'>Actions</TableHead>
    //         </TableRow>
    //       </TableHeader>
    //       <TableBody>
    //         {responseData &&
    //           responseData.packages?.map((post, index) => (
    //             <TableRow key={index}>
    //               <TableCell className='font-medium'>{post?.id}</TableCell>
    //               <TableCell>{post?.title}</TableCell>
    //               <TableCell>{post?.description}</TableCell>
    //               <TableCell className='text-right'>{post?.slug}</TableCell>
    //               <TableCell className='text-right'>
    //                 <Image
    //                   className='rounded-md w-20 h-12 float-right object-cover'
    //                   src={
    //                     (post && post?.images?.length > 0 && post?.thumbnail) ||
    //                     '/placeholder.png'
    //                   }
    //                   alt={post?.title || 'post image'}
    //                   width={100}
    //                   height={100}
    //                 />
    //               </TableCell>
    //               <TableCell className='text-right justify-end flex gap-1'>
    //                 <Link
    //                   className='text-blue-500 font-semibold hover:text-blue-700 text-md my-auto'
    //                   href={`/packages/${post?.slug}/edit`}>
    //                   Edit
    //                 </Link>
    //                 {post && post.id && <Delete type='post' id={post.id} />}
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //       </TableBody>
    //     </Table>

    //     <div className='flex justify-between items-center mt-4'>
    //       <div className='text-sm text-gray-500'>
    //         Total: {responseData?.total || 0} packages
    //       </div>
    //       <div className='flex gap-2'>
    //         {page > 1 && (
    //           <Link href={`/packages?page=${page - 1}&query=${query}`}>
    //             <Button variant='outline'>Previous</Button>
    //           </Link>
    //         )}
    //         {page < totalPages && (
    //           <Link href={`/packages?page=${page + 1}&query=${query}`}>
    //             <Button variant='outline'>Next</Button>
    //           </Link>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // );
    <>
      <div className='p-4 pb-0'>
        <Link
          href={'/packages/add'}
          className='bg-blue-500 hover:bg-blue-600 text-white   px-4 py-2 rounded-md'>
          Add Package
        </Link>
      </div>
      <DynamicDataTable
        data={responseData.packages?.map((post: any) => {
          return {
            id: post.id,
            title: post.title,
            description: post.description,
            slug: post.slug,
           
          };
        })}
        title='Packages'
        ENDPOINT={endpoints.PACKAGES}
        EDIT_NAME={'packages'}
      />
    </>
  );
}
