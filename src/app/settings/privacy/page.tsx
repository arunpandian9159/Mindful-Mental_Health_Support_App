"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { privacyItems } from "@/data/data";

const STORAGE_KEY = "privacy_settings";
const defaultToggleStates: Record<string, boolean> = {
  "anonymous-profile": true,
  "data-encryption": true,
  "activity-visible": false,
};

// Helper to get initial state from localStorage
const getInitialToggleStates = (): Record<string, boolean> => {
  if (typeof window === "undefined") return defaultToggleStates;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...defaultToggleStates, ...JSON.parse(saved) };
    }
  } catch {
    /* ignore */
  }
  return defaultToggleStates;
};

export default function PrivacySettings() {
  const router = useRouter();
  // Use lazy initialization to avoid calling setState in useEffect
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>(
    getInitialToggleStates,
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip first render to avoid writing initial state back to localStorage
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toggleStates));
    } catch {
      /* ignore */
    }
  }, [toggleStates]);

  const handleToggle = (itemId: string) => {
    if (itemId === "data-encryption") return;
    setToggleStates((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleToggleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(itemId);
    }
  };

  const handleActionClick = (itemId: string) => {
    if (itemId === "download-data")
      alert("Your data download will begin shortly.");
    else if (
      itemId === "delete-account" &&
      confirm("Are you sure? This cannot be undone.")
    )
      alert("Account deletion initiated.");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto">
      <header className="px-6 py-4 pt-16 flex items-center gap-4 z-10 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="flex items-center justify-center w-8 h-8 rounded-full -ml-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Data Privacy
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-10 pt-2 no-scrollbar">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 mb-6">
          <div className="size-12 rounded-xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
            <ShieldCheckIcon
              size={28}
              className="text-green-600 dark:text-green-400"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-green-800 dark:text-green-300 text-sm">
              Your Data is Protected
            </h3>
            <p className="text-xs text-green-600 dark:text-green-400">
              End-to-end encryption keeps your journal and moods private.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
          Control how your personal data is stored, shared, and managed.
        </p>

        <div className="flex flex-col gap-4">
          {privacyItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-soft border transition-all ${item.danger ? "border-red-100 dark:border-red-900/30" : "border-gray-100 dark:border-gray-800 hover:border-primary/20"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 pr-2">
                  <div
                    className={`size-10 rounded-xl flex items-center justify-center ${item.danger ? "bg-red-50 dark:bg-red-900/20" : "bg-gray-50 dark:bg-white/5"}`}
                  >
                    <item.icon
                      size={24}
                      className={
                        item.danger
                          ? "text-red-500"
                          : "text-gray-600 dark:text-gray-300"
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3
                      className={`font-bold text-base leading-tight mb-0.5 ${item.danger ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-white"}`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                      {item.id === "data-encryption"
                        ? "Always encrypted (cannot be disabled)"
                        : item.description}
                    </p>
                  </div>
                </div>
                {item.type === "toggle" ? (
                  item.id === "data-encryption" ? (
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon
                        size={20}
                        className="text-green-500"
                        weight="fill"
                      />
                      <span className="text-xs text-green-600 font-medium">
                        Active
                      </span>
                    </div>
                  ) : (
                    <div
                      role="switch"
                      tabIndex={0}
                      aria-checked={toggleStates[item.id] || false}
                      aria-label={`Toggle ${item.title}`}
                      onClick={() => handleToggle(item.id)}
                      onKeyDown={(e) => handleToggleKeyDown(e, item.id)}
                      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${toggleStates[item.id] ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm transition-transform ${toggleStates[item.id] ? "translate-x-6" : "translate-x-0"}`}
                      />
                    </div>
                  )
                ) : (
                  <button
                    onClick={() => handleActionClick(item.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${item.danger ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"}`}
                  >
                    {item.id === "download-data" ? "Download" : "Delete"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-center">
            Your privacy matters. We never sell your data. Read our{" "}
            <Link href="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
