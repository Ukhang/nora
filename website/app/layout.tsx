import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: 'Noreo',
  description:
    'noreo is a compact, smooth, minimal, and customizable loader component for React. It provides beautiful animations, multiple variants, and theme support to enhance user experience.',
  keywords: [
    'React loader',
    'Minimal loader',
    'Smooth animation loader',
    'Customizable loader',
    'React spinner',
    'Compact loader',
    'Loading indicator',
    'noreo loader',
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
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`font-sans antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mx-auto h-auto scroll-smooth">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
