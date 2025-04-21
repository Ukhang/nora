import { getPreviousNext } from '@/lib/markdown';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Pagination({ pathname }: { pathname: string }) {
  const res = getPreviousNext(pathname);

  return (
    <div className="flex justify-between flex-grow sm:py-10 py-4 pt-5 gap-5">
      <div>
        {res.prev && (
          <Link
            className="no-underline flex flex-col items-end text-xs sm:text-xs group"
            href={`/docs${res.prev.href}`}
          >
            <span className="text-muted-foreground text-xs">Previous</span>
            <span className="mt-1 flex items-center">
              <ChevronLeftIcon className="w-[1rem] h-[1rem] mr-2 group-hover:scale-110 transition-all duration-200 text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
              {res.prev.title}
            </span>
          </Link>
        )}
      </div>
      <div>
        {res.next && (
          <Link
            className="no-underline flex flex-col justify-end text-xs sm:text-xs group"
            href={`/docs${res.next.href}`}
          >
            <span className="text-muted-foreground text-xs">Next</span>
            <span className="mt-1 flex items-center">
              {res.next.title}
              <ChevronRightIcon className="w-[1rem] h-[1rem] ml-2 group-hover:scale-110 transition-all duration-200 text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
