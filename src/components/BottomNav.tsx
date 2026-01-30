"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HouseIcon,
  SmileyIcon,
  LeafIcon,
  UserIcon,
  SirenIcon,
} from "@phosphor-icons/react";

export const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/home", label: "Home", icon: HouseIcon },
    { href: "/mood", label: "Mood", icon: SmileyIcon },
    { href: "/tools", label: "Tools", icon: LeafIcon },
    { href: "/profile", label: "Profile", icon: UserIcon },
  ];

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 flex justify-center pointer-events-none">
      <nav className="glass rounded-full px-4 py-2 flex items-center gap-2 shadow-2xl max-w-sm w-full justify-between pointer-events-auto">
        {/* Left items */}
        <div className="flex items-center gap-1 flex-1 justify-around">
          {navItems.slice(0, 2).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Icon size={22} weight={isActive ? "fill" : "regular"} />
              </Link>
            );
          })}
        </div>

        {/* SOS Center Button */}
        <button
          onClick={() => router.push("/crisis")}
          className="flex items-center justify-center size-14 rounded-full bg-accent-orange text-white shadow-lg active:scale-90 transition-all hover:rotate-12 group"
        >
          <SirenIcon
            size={28}
            weight="fill"
            className="group-hover:animate-pulse"
          />
        </button>

        {/* Right items */}
        <div className="flex items-center gap-1 flex-1 justify-around">
          {navItems.slice(2, 4).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Icon size={22} weight={isActive ? "fill" : "regular"} />
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
