"use client";

import { ReactNode } from "react";

export default function ParallaxShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-accent selection:text-white">
      {/* Subtle grid pattern for texture (Linear style) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />


      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
