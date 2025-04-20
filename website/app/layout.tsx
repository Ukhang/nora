import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: 'Nora',
  description:
    'Nora is a compact, smooth, minimal, and customizable loader component for React. It provides beautiful animations, multiple variants, and theme support to enhance user experience.',
  keywords: [
    'React loader',
    'Minimal loader',
    'Smooth animation loader',
    'Customizable loader',
    'React spinner',
    'Compact loader',
    'Loading indicator',
    'Nora loader',
    'React UI components',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[88vw] h-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
