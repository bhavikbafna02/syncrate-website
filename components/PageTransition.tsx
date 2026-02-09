"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => setShow(true), 350);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${show ? "opacity-100" : "opacity-0"}`}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
