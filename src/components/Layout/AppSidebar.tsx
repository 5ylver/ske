"use client";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import { useSidebar } from "./SidebarProvider";
import Image from "next/image";

export const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsMobileSidebarOpen } = useSidebar();

  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

  const handleLogout = async () => {
    await router.push("/login");
    closeMobileSidebar();
  };

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      // icon: DashboardIcon,
      isActive: pathname === "/dashboard",
    },
  ];

  return (
    <aside className="px-[24px] py-[20px] h-full border-r border-[#C9C9C966] sticky top-0 flex flex-col bg-sidebar text-slate-800">
      <div className="flex items-center justify-center">
        <button
          className="cursor-pointer mt-5"
          onClick={() => router.push("/dashboard")}
        >
          <Image
            src="/logo.png"
            width={225}
            height={20}
            className="mt-[20px]"
            alt="Logo"
          />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <ul className="space-y-[10px] mt-[40px]">
          {routes.map(({ href, label, icon: Icon, isActive }) => (
            <li key={href}>
              <Link href={href} onClick={closeMobileSidebar}>
                <div
                  className={`flex items-center py-[10px] px-[24px] hover:bg-primary/15 rounded-[15px] cursor-pointer ${
                    isActive ? "border-2 border-primary text-primary" : ""
                  }`}
                >
                  {/* <Icon
                    color={isActive ? "#4c0bd1" : "#707070"}
                    width={22}
                    height={22}
                  /> */}
                  <Image src="./file.svg" width={22} height={22} alt="Icon" />
                  <span
                    className={`pl-[13px] font-medium text-[18px] ${
                      isActive ? "text-primary" : ""
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mb-[20px] px-[24px] hover:bg-primary/15 rounded-lg cursor-pointer"
          onClick={handleLogout}
        >
          <p className="flex items-center p-[10px]">
            {/* <LogOutIcon color="#FF5757" width={30} height={32} /> */}
            <Image src="./file.svg" width={22} height={22} alt="Icon" />
            <span className="pl-[13px] text-base font-medium text-red text-[18px]">
              Logout
            </span>
          </p>
        </button>
      </div>
    </aside>
  );
};
