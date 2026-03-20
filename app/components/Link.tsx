'use client';

import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function Link({ children, href, ...props }: Props) {
  const router = useRouter();

  const handleTransition = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (!document.startViewTransition) {
      router.push(href.toString());
      return;
    }

    // 關鍵：用 startViewTransition 包住路由跳轉
    document.startViewTransition(() => {
      router.push(href.toString());
    });
  };

  return (
    <NextLink {...props} href={href} onClick={handleTransition}>
      {children}
    </NextLink>
  );
}
