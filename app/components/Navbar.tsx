'use client';

import Link from './Link';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 flex justify-between items-center p-4 bg-gray-100 dark:bg-zinc-900 border-b dark:border-zinc-800'>
      <Link href='/' className='font-bold text-xl'>
        Frontend Mentor
      </Link>
      <div className='flex gap-4'>
        <Link href='/' className='hover:underline transition-colors'>
          Home
        </Link>
        <Link
          href='/qr-code-component'
          className='hover:underline transition-colors'
        >
          QR Code
        </Link>
        <Link
          href='/blog-preview-card'
          className='hover:underline transition-colors'
        >
          Blog Card
        </Link>
      </div>
    </nav>
  );
}
