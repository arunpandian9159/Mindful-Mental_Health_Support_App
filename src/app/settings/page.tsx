"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeftIcon,
  CaretRightIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import { settingsItems } from "@/data/data";

export default function Settings() {
  const router = useRouter();
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    "high-contrast": false,
    "screen-reader": false,
  });

  const handleToggle = (itemKey: string) => {
    setToggleStates((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const handleToggleKeyDown = (event: React.KeyboardEvent, itemKey: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(itemKey);
    }
  };

  const handleNavClick = (href?: string) => {
    if (href) {
      router.push(href);
    }
  };

  const handleNavKeyDown = (event: React.KeyboardEvent, href?: string) => {
    if ((event.key === "Enter" || event.key === " ") && href) {
      event.preventDefault();
      handleNavClick(href);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto">
      <div className="px-6 py-4 pt-16 flex items-center gap-4 z-10 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="flex items-center justify-center w-8 h-8 rounded-full -ml-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Accessibility
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-10 pt-2 no-scrollbar">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
          Customize your display and interaction settings to better suit your
          needs.
        </p>

        <div className="flex flex-col gap-4">
          {settingsItems.map((item) => (
            <div
              key={item.key}
              role={item.type === "nav" ? "button" : undefined}
              tabIndex={item.type === "nav" ? 0 : undefined}
              onClick={
                item.type === "nav"
                  ? () => handleNavClick(item.href)
                  : undefined
              }
              onKeyDown={
                item.type === "nav"
                  ? (e) => handleNavKeyDown(e, item.href)
                  : undefined
              }
              aria-label={
                item.type === "nav" ? `Navigate to ${item.title}` : undefined
              }
              className={`bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 flex items-center justify-between group transition-all hover:border-primary/20 ${item.type === "nav" ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" : ""}`}
            >
              <div className="flex items-center gap-4 pr-2">
                <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300">
                  <item.icon size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-[16px] text-gray-900 dark:text-white leading-tight mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.type === "toggle" ? (
                <div
                  role="switch"
                  tabIndex={0}
                  aria-checked={toggleStates[item.key] || false}
                  aria-label={`Toggle ${item.title}`}
                  onClick={() => handleToggle(item.key)}
                  onKeyDown={(e) => handleToggleKeyDown(e, item.key)}
                  className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${toggleStates[item.key] ? "bg-primary" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300"}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${toggleStates[item.key] ? "translate-x-6" : "left-0.5"}`}
                  ></div>
                </div>
              ) : (
                <CaretRightIcon size={20} className="text-gray-400" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 flex flex-col items-center text-center">
          <HeartIcon size={32} weight="fill" className="text-primary mb-2" />
          <h3 className="font-bold text-sm text-primary mb-1">
            Empowering Accessibility
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-55">
            We aim to make mental health support available to everyone,
            regardless of their visual or physical abilities.
          </p>
        </div>
      </div>
    </div>
  );
}
