"use client";

import { useRouter } from "next/navigation";
import { StatusBar } from "@/components/StatusBar";
import {
  CircleHalf,
  TextT,
  Ear,
  Bell,
  Shield,
  ArrowLeft,
  CaretRight,
  Heart,
} from "@phosphor-icons/react";

export default function Settings() {
  const router = useRouter();

  const settingsItems = [
    {
      title: "High Contrast",
      icon: CircleHalf,
      description: "Enhance visibility with higher contrast colors",
      type: "toggle",
    },
    {
      title: "Text Size",
      icon: TextT,
      description: "Adjust the size of the text",
      type: "nav",
    },
    {
      title: "Screen Reader",
      icon: Ear,
      description: "Optimize for screen reader support",
      type: "toggle",
    },
    {
      title: "Notifications",
      icon: Bell,
      description: "Manage your daily check-in alerts",
      type: "nav",
    },
    {
      title: "Data Privacy",
      icon: Shield,
      description: "Manage your personal data and privacy",
      type: "nav",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto">
      <StatusBar />
      <div className="px-6 py-4 pt-16 flex items-center gap-4 z-10 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center w-8 h-8 rounded-full -ml-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={24} />
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
              key={item.title}
              className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 flex items-center justify-between group transition-all hover:border-primary/20"
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
                <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer hover:bg-gray-300 transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm transition-transform"></div>
                </div>
              ) : (
                <CaretRight size={20} className="text-gray-400" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 flex flex-col items-center text-center">
          <Heart size={32} weight="fill" className="text-primary mb-2" />
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
