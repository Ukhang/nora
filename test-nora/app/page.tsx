"use client";

import { Nora } from "nora";

export default function Home() {
  return (
   <div className="px-4 py-8 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 max-w-[800px] w-full mx-auto gap-6">
      <Nora />
      <Nora variant="dots" />
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
  );
}
