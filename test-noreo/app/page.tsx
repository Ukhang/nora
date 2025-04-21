'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useState } from 'react';
import { Noreo } from 'noreo';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`min-h-[100vh] w-full`}>
      <div className="flex items-center gap-2">
        <label htmlFor="theme-select" className="text-sm font-medium">
          Theme:
        </label>
        <select
          id="theme-select"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="px-4 py-8 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 max-w-[800px] w-full mx-auto gap-6">
        <Noreo className='bg-green-400' theme={theme as "light" | "dark" | "system"} />
        <Noreo theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="dots" theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="pulse" size={10} theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="orbit" theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="drop" theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="fade" theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="dual-ring" theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="pulse-ring" theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="bars" size={14} theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="ripple" size={28} theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="rolling" size={10} theme={theme as "light" | "dark" | "system"} />
        <Noreo variant="wave" size={18} theme={theme as "light" | "dark" | "system"} />
      </div>
    </div>
  );
}
