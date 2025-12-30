import { Outfit } from 'next/font/google';
import Image from 'next/image';
import qrCodeImage from './images/QR.svg';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

export default function QRCodeComponent() {
  return (
    <main
      className={`${outfit.className} min-h-screen bg-slate-300 flex items-center justify-center`}
    >
      <div className='p-4 bg-white rounded-[20px] max-w-[320px] text-center shadow-lg shadow-slate-400/20'>
        <div className='relative p-16 rounded-[10px] bg-blue-500 overflow-hidden'>
          <Image src={qrCodeImage} alt='QR Code' width={160} height={160} />
          <span className='block absolute right-23 bottom-31 w-82 h-82 rounded-full bg-blue-400 opacity-30'></span>
          <span className='block absolute left-32.75 top-51 w-67.5 h-67.5 rounded-full bg-blue-400 opacity-30'></span>
        </div>
        <div className='mt-6 px-4 pb-8'>
          <h1 className='text-slate-700 font-bold text-[22px] leading-[1.2]'>
            Improve your front-end skills by building projects
          </h1>
          <p className='text-slate-500 text-[15px] leading-[1.4] tracking-[0.2px] mt-4'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
