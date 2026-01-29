"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Smiley, Leaf, ChatCircle, User } from "@phosphor-icons/react";

export const BottomNav = () => {
  const pathname = usePathname();

  const getColor = (path: string) =>
    pathname === path
      ? "text-primary"
      : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200";

  const navItems = [
    { href: "/home", label: "Home", icon: House },
    { href: "/mood", label: "Mood", icon: Smiley },
    { href: "/tools", label: "Tools", icon: Leaf },
    { href: "/community", label: "Comm.", icon: ChatCircle },
    { href: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 px-6 pb-6 pt-2">
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
