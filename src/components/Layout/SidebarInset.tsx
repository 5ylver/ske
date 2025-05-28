"use client";
import { useEffect } from "react";
import { useSidebar } from "./SidebarProvider";

export const SidebarInset = ({ children }: { children: React.ReactNode }) => {
  const { isMobileSidebarOpen, setIsMobileSidebarOpen } = useSidebar();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileSidebarOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setIsMobileSidebarOpen]);

  return (
    <div className="flex-1 relative">
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
      <div className="h-full">{children}</div>
    </div>
  );
};
