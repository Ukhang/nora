import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from './navbar';
import { Button } from './ui/button';
import { AlignLeftIcon, Github } from 'lucide-react';
import { DialogTitle } from './ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import DocsMenu from './docs-menu';
import Link from 'next/link';
import { ModeToggle } from './theme-toggle';

export function Leftbar() {
  return (
    <aside className="md:flex hidden lg:w-[240px] sm:w-[200px] fixed top-0 flex-col h-[100vh] overflow-y-auto bg-[#FAFAFA] dark:bg-[#171716] border-r border-dashed">
      <ScrollArea className="py-4">
        <div className="text-xs border-b border-dashed pb-4 px-4">
          <Link href="/" className="text-base font-medium capitalize">
            noreo
          </Link>{' '}
          by{' '}
          <Link href="ukhangmarma.vercel.app" target="_blank">
            Ukhang Marma
          </Link>
        </div>
        <DocsMenu />
      </ScrollArea>
      <footer className="mt-auto flex gap-4 items-center justify-between px-4 py-4 border-t border-dashed">
        <ModeToggle />
        <Link
          href="https://github.com/Ukhang/noreo"
          target="_blank"
          className="text-muted-foreground hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <Github size={18} />
        </Link>
      </footer>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader className='sm:text-center'>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="">
            <DocsMenu isSheet />
          </div>
          <footer className="mt-auto flex gap-4 items-center justify-between px-4 py-4 border-t border-dashed">
            <ModeToggle />
            <Link
              href="https://github.com/Ukhang/noreo"
              target="_blank"
              className="text-muted-foreground hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <Github size={18} />
            </Link>
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  );
}
