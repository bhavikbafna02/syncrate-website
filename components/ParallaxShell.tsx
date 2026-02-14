 "use client";

 import { ReactNode, useEffect, useState } from "react";

 type ParallaxShellProps = {
   children: ReactNode;
   /**
    * Base intensity for background movement.
    * Feel free to tweak per page if needed.
    */
   strength?: number;
 };

 export default function ParallaxShell({
   children,
   strength = 0.18,
 }: ParallaxShellProps) {
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
     const handleScroll = () => {
       setScrollY(window.scrollY || window.pageYOffset || 0);
     };

     handleScroll();
     window.addEventListener("scroll", handleScroll, { passive: true });

     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const slow = scrollY * strength * 0.3;
   const medium = scrollY * strength * 0.6;
   const fast = scrollY * strength;

   return (
     <div className="relative min-h-screen overflow-hidden">
       {/* Parallax background layers */}
       <div className="pointer-events-none fixed inset-0 -z-10">
         <div
           className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/12 blur-3xl"
           style={{
             transform: `translate3d(0, ${slow}px, 0)`,
             transition: "transform 80ms linear",
           }}
         />
         <div
           className="absolute top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-indigo-500/14 blur-3xl"
           style={{
             transform: `translate3d(0, ${medium}px, 0)`,
             transition: "transform 80ms linear",
           }}
         />
         <div
           className="absolute bottom-[-20%] left-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-3xl"
           style={{
             transform: `translate3d(0, ${fast}px, 0)`,
             transition: "transform 80ms linear",
           }}
         />
         <div
           className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
           style={{
             transform: `translate3d(0, ${slow * 0.6}px, 0)`,
             opacity: 0.9,
             transition: "transform 80ms linear, opacity 200ms ease-out",
           }}
         />
       </div>

       {/* Foreground content with a very subtle opposing parallax */}
       <div
         className="relative z-10"
         style={{
           transform: `translate3d(0, ${scrollY * -0.03}px, 0)`,
           transition: "transform 80ms linear",
         }}
       >
         {children}
       </div>
     </div>
   );
 }

