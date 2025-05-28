"use client";

import { useSidebar } from "./SidebarProvider";

export const Header = () => {
  const { setIsMobileSidebarOpen } = useSidebar();

  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <button
        onClick={() => setIsMobileSidebarOpen(true)}
        className="lg:hidden"
      >
        {/* <Menu size={24} /> */}
      </button>
      <h1 className="text-xl font-semibold">App</h1>
    </header>
  );
};
