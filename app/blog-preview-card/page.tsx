import { cn } from '@/lib/utils';
import { Figtree } from 'next/font/google';
import Image from 'next/image';
import illustrationArticle from './images/illustration-article.svg';
import AvatarImg from './images/image-avatar.webp';

const figtree = Figtree({ subsets: ['latin'] });

export default function BlogPreviewCard() {
  return (
    <main
      className={cn(
        figtree.className,
        'min-h-screen bg-yellow-300 flex items-center justify-center'
      )}
    >
      <div className='flex flex-col gap-6 p-6 bg-white rounded-[20px] border border-gray-950 max-w-81.75 lg:max-w-[384px] mx-6 shadow-[8px_8px_black]'>
        <picture className='block rounded-[10px] overflow-hidden h-50'>
          <Image
            src={illustrationArticle}
            alt='Article Illustration'
            className='w-full h-full object-cover'
          />
        </picture>
        <div className='flex flex-col items-start gap-3'>
          <span className='text-gray-950 text-xs lg:text-sm font-extrabold bg-yellow-300 py-1 px-3 rounded-sm'>
            Learning
          </span>
          <span className='text-xs lg:text-sm text-gray-950 font-medium'>
            Published 30 Dec 2025
          </span>
          <h1 className='text-xl lg:text-2xl text-gray-950 font-extrabold'>
            HTML & CSS foundations
          </h1>
          <p className='text-sm lg:text-base text-gray-500 font-medium'>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <Image src={AvatarImg} width={32} height={32} alt='Avatar' />
          <span className='text-sm text-gray-950 font-extrabold'>
            Greg Hooper
          </span>
        </div>
      </div>
    </main>
  );
}
