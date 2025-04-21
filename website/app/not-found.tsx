import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "500: page not found"
}

export default function NotFound() {
  return (
    <div className="min-h-[100vh] px-2 sm:py-28 py-36 flex flex-col gap-4 items-center">
      <div className="text-center flex flex-col items-center justify-center w-fit gap-2">
        <h2 className="text-7xl font-bold pr-1">404</h2>
        <p className="text-muted-foreground text-md font-medium">
          Page not found {":("}
        </p>
      </div> 
    </div>
  );
}
