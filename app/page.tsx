import Link from 'next/link';

const lessons = [
  { id: 'qr-code-component', title: 'QR Code Component' },
  { id: 'blog-preview-card', title: 'Blog Preview Card' },
];

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-6 space-y-4'>
      <h1 className='text-3xl font-bold'>Frontend Mentor</h1>
      <ul className='space-y-2'>
        {lessons.map((item) => (
          <li key={item.id}>
            <Link
              href={`/${item.id}`}
              className='text-blue-300 hover:underline'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
