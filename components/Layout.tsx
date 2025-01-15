import Link from 'next/link';
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  BarChart2,
  Calendar,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  Settings,
  Users,
  Plus,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  Plug,
} from 'lucide-react';
import { cn } from '@/libs/utils';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState('');
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(true);

  const navigation = [
    { name: 'Overview', href: '/', icon: LayoutDashboard },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Inbox', href: '/inbox', icon: Inbox, badge: 5 },
    { name: 'Reporting', href: '/reporting', icon: BarChart2 },
  ];

  const workspaceNavigation = [
    { name: 'Members', href: '/members', icon: Users },
    { name: 'Projects', href: '/projects', icon: LayoutDashboard },
    { name: 'Plugins', href: '/plugins', icon: Plug },
  ];

  const bottomNavigation = [
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];


  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <div className='w-64 bg-white border-r hidden lg:block'>
        <div className='flex h-16 items-center gap-2 px-4 border-b'>
          <div className='flex items-center gap-2'>
            <div className='h-8 w-8 rounded-lg bg-black' />
            <span className='font-semibold'>Noteflow</span>
          </div>
          <Button variant='primary' size='small' className='px-1.5 rounded-full bg-black text-white font-bold'>
            Pro
          </Button>
        </div>

        <div className='p-4'>
          <div className='flex items-center gap-2'>
            <Search className='h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search'
              className='w-full rounded border'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <nav className='space-y-6 px-2'>
          <div className='space-y-1'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
                  pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon className='h-5 w-5' />
                {item.name}
                {item.badge && (
                  <span className='ml-auto rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600'>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div>
            <div className='flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer' onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}>
              <span>Workspace</span>
              {isWorkspaceOpen ? <ChevronDown className='h-5 w-5' /> : <ChevronUp className='h-5 w-5' />}
            </div>
            {isWorkspaceOpen && <div className='space-y-1'>
              {workspaceNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
                    pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon className='h-5 w-5' />
                  {item.name}
                </Link>
              ))}
            </div>}
          </div>
        </nav>

        <div className='absolute bottom-0 w-64 border-t'>
          <div className='space-y-1 p-2'>
            {bottomNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
                  pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon className='h-5 w-5' />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        <header className='h-16 border-b bg-gray-200 flex items-center justify-between px-6'>
          <div className='flex items-center gap-4'>
            <ChevronLeft className='h-5 w-5 cursor-pointer' />
            <ChevronRight className='h-5 w-5 cursor-pointer' />
            <span className='text-sm font-medium text-gray-500'>Workspace</span>
            <ChevronRight className='h-5 w-5 cursor-pointer' />
            <h1 className='text-sm  text-black font-medium'>Projects</h1>
          </div>
          <div className='flex items-center gap-4'>
            <Settings className='h-5 w-5 cursor-pointer' />
            <Inbox className='h-5 w-5 cursor-pointer' />
            <div className='flex -space-x-2'>
                {[1, 2, 3].map((index) => (
                <Image
                  key={index}
                  src={`/${index}.jpg`} // Ensure these images are placed in the public folder
                  alt={`Avatar ${index}`}
                  width={32}
                  height={32}
                  className='h-8 w-8 rounded-full border-2 border-white'
                />
                ))}
            </div>
            <Button variant='primary' size='small' className='px-2 py-1 rounded bg-gray-300 text-black cursor-pointer border-none flex items-center gap-1'>
              <Plus className='h-4 w-4' />
              Share
            </Button>
          </div>
        </header>

        <main className='flex-1 overflow-auto p-6'>{children}</main>
      </div>
    </div>
  );
}
