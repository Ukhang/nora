import { getDocsTocs } from '@/lib/markdown';
import TocObserver from './toc-observer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlignLeft } from 'lucide-react';

export default async function Toc({ path }: { path: string }) {
  const tocs = await getDocsTocs(path);

  return (
    <div className="xl:flex toc hidden w-[20rem] py-9 sticky top-16 h-[96.95vh] pl-6">
      <div className="flex flex-col gap-3 w-full pl-2 dark:text-stone-300/85 text-stone-800">
        <div className="flex items-center gap-2">
          <AlignLeft size={16} /> <h3 className="font-medium text-sm">On this page</h3>
        </div>
        <ScrollArea className="pb-2 pt-0.5 overflow-y-auto">
          <TocObserver data={tocs} />
        </ScrollArea>
      </div>
    </div>
  );
}
