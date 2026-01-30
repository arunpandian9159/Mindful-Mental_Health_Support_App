"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HouseIcon,
  SmileyIcon,
  LeafIcon,
  ChatCircleIcon,
  UserIcon,
} from "@phosphor-icons/react";

export const BottomNav = () => {
  const pathname = usePathname();

  const getColor = (path: string) =>
    pathname === path
      ? "text-primary"
      : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200";

  const navItems = [
    { href: "/home", label: "Home", icon: HouseIcon },
    { href: "/mood", label: "Mood", icon: SmileyIcon },
    { href: "/tools", label: "Tools", icon: LeafIcon },
    { href: "/community", label: "Comm.", icon: ChatCircleIcon },
    { href: "/profile", label: "Profile", icon: UserIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-md bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 px-6 pb-safe pt-2">
      <div className="flex items-center justify-between max-w-lg mx-auto h-14">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 w-12 transition-colors ${getColor(item.href)}`}
            >
              <Icon
                size={24}
                weight={isActive ? "fill" : "regular"}
                className="transition-all"
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
