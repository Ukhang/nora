'use client';

import { useTheme } from 'next-themes';
import { Nora } from 'nora';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`min-h-[100vh] w-full ${
      theme === "dark" ? "bg-neutral-800" : ""
    }`}>
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
        <Nora />
        <Nora variant="dots" theme={"dark"} />
        <Nora variant="pulse" size={10} />
        <Nora variant="orbit" />
        <Nora variant="drop" />
        <Nora variant="fade" />
        <Nora variant="dual-ring" />
        <Nora variant="pulse-ring" />
        <Nora variant="bars" size={14} />
        <Nora variant="ripple" size={28} />
        <Nora variant="rolling" size={10} />
        <Nora variant="wave" size={18} />
      </div>
    </div>
  );
}
