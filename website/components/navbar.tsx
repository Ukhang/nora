'use client';

import { ModeToggle } from '@/components/theme-toggle';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import Anchor from './anchor';
import { SheetLeftbar } from './leftbar';
import { page_routes } from '@/lib/routes-config';
import { SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

export const NAVLINKS = [
  {
    title: 'Documentation',
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Examples',
    href: '#',
  },
  {
    title: 'Guides',
    href: '#',
  },
  {
    title: 'Community',
    href: 'https://github.com/nisabmohd/Aria-Docs/discussions',
  },
];

export function Navbar() {
  const pathName = usePathname();

  return (
    <nav
      className={`w-full h-16 sticky top-0 z-50 bg-background ${pathName == '/' ? 'block' : 'hidden'}`}
    >
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            {pathName !== '/' && (
              <div className="lg:flex hidden">
                <Logo />
              </div>
            )}
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground"></div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          {/* <AlgoliaSearch {...algolia_props} /> */}
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              {pathName !== '/' && (
                <Link
                  href="https://github.com/nisabmohd/NexDocs"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                  })}
                >
                  <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
                </Link>
              )}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <div className="text-xs">
      <Link href="/" className="text-md font-bold font-code text-base">
        Nora
      </Link>{' '}
      by <Link href="">Ukhang Marma</Link>
    </div>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map(item => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-sm text-[14.5px] dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
