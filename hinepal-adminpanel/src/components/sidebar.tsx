import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Activity,
  LocateIcon,
  Package,
  ChartColumnStacked,
} from 'lucide-react';
import LogOutButton from './logout-button';

export function Sidebar() {
  return (
    <div className='flex flex-col justify-between h-full p-3 bg-gray-800 text-white w-64'>
      <div className='space-y-3'>
        <div className='flex items-center'>
          <h2 className='text-xl font-bold'>Admin Panel</h2>
        </div>
        <div className='flex-1'>
          <ul className='pt-2 pb-4 space-y-1 text-sm'>
            <li className='rounded-sm'>
              <Link
                href='/'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/users'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <Users />
                <span>Users</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/settings'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <Settings />
                <span>Settings</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/activities'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <Activity />
                <span>Activities</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/destinations'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <LocateIcon />
                <span>Destinations</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/packages'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <Package />
                <span>Packages</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/carousels'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <ChartColumnStacked />
                <span>Carousels</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/reviews'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <ChartColumnStacked />
                <span>Reviews</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/blogs'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <ChartColumnStacked />
                <span>Blogs</span>
              </Link>
            </li>
            <li className='rounded-sm'>
              <Link
                href='/authors'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700'>
                <ChartColumnStacked />
                <span>Authors</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-3 py-2'>
        <h3 className='text-lg font-semibold mb-2'>John Doe</h3>
        <LogOutButton className='flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 w-full'>
          <LogOut />
          <span>Logout</span>
        </LogOutButton>
      </div>
    </div>
  );
}
