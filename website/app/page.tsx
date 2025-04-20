'use client';

import { Button } from '@/components/ui/button';
import { page_routes } from '@/lib/routes-config';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React from 'react';
import { Nora } from 'nora';
import { useTheme } from 'next-themes';

const variants = [
  'spinner', 'dots', 'pulse', 'orbit', 'drop',
  'fade', 'dual-ring', 'pulse-ring', 'bars',
  'ripple', 'rolling', 'wave',
] as const;

export default function Home() {
  const [variant, setVariant] = React.useState<(typeof variants)[number]>('spinner');
  const { theme } = useTheme();

  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8 max-w-xl mx-auto">
      
      {/* Nora Loader */}
      <Nora variant={variant} size={60} theme={theme as "light" | "dark" | "system"} />
      
      <h1 className="text-2xl font-bold mb-4 sm:text-5xl mt-8">Nora</h1>
      <p className="mb-8 sm:text-md text-muted-foreground text-lg sm:text-xl">
        A compact and customizable loader <br /> component for React.
      </p>

      {/* Controls */}
      <div className="flex gap-4 items-center flex-wrap justify-center">
        {/* Variant Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white"
              size={"sm"}
            >
              Select Loader
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Variant</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={variant}
              onValueChange={value =>
                setVariant(value as (typeof variants)[number])
              }
            >
              {variants.map(v => (
                <DropdownMenuRadioItem key={v} value={v}>
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* GitHub Link */}
        <Link
          href={'https://github.com/Ukhang/nora'}
          target="_blank"
          className="flex items-center text-sm h-9 px-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white font-medium"
        >
          GitHub <ArrowRight size={'14'} className="ml-2" />
        </Link>
      </div>

      <div className="mt-4">
        <Link
          href={`/docs${page_routes[0].href}`}
          className="text-sm underline text-gray-500 dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-800 transition duration-200"
        >
          Documentation
        </Link>
      </div>
    </div>
  );
}
