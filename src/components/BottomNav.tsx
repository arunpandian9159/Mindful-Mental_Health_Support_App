"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const BottomNav = () => {
  const pathname = usePathname();
  const getFill = (path: string) =>
    pathname === path ? "'FILL' 1" : "'FILL' 0";
  const getColor = (path: string) =>
    pathname === path
      ? "text-primary"
      : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200";

  const navItems = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/mood", label: "Mood", icon: "sentiment_satisfied" },
    { href: "/tools", label: "Tools", icon: "spa" },
    { href: "/community", label: "Comm.", icon: "forum" },
    { href: "/profile", label: "Profile", icon: "person" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 px-6 pb-6 pt-2">
      <div className="flex items-center justify-between max-w-lg mx-auto h-14">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 w-12 transition-colors ${getColor(item.href)}`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: getFill(item.href) }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
