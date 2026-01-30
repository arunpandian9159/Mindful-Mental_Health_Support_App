"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  SignOutIcon,
  CaretRightIcon,
  BellIcon,
  ShieldIcon,
  HandPointingIcon,
} from "@phosphor-icons/react";
import { currentUser } from "@/data/data";
import { BottomNav } from "@/components/BottomNav";
import { motion } from "framer-motion";

export default function Profile() {
  const router = useRouter();

  const menuItems = [
    {
      title: "Accessibility",
      description: "Display and interaction settings",
      icon: HandPointingIcon,
      href: "/settings",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Notifications",
      description: "Manage your reminders",
      icon: BellIcon,
      href: "/settings/notifications",
      color:
        "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
    {
      title: "Data Privacy",
      description: "Manage your personal data",
      icon: ShieldIcon,
      href: "/settings/privacy",
      color:
        "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark items-center pb-32">
      {/* Hero Section */}
      <div className="w-full max-w-5xl px-6 pt-20 pb-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative size-32 mb-6"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative size-32 rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden bg-gray-100">
            <Image
              src={currentUser.avatar}
              alt={currentUser.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 size-8 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hello, {currentUser.name}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto text-sm leading-relaxed">
            Your mindful sanctuary is always here for you. Find peace in every
            step.
          </p>
        </motion.div>
      </div>

      {/* Profile Menu */}
      <div className="w-full max-w-2xl px-6 flex flex-col gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-bold text-gray-900 dark:text-white px-2"
        >
          App Settings
        </motion.h2>

        <div className="flex flex-col gap-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => router.push(item.href)}
                className="group flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft hover:shadow-lg hover:border-primary/20 transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`size-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}
                  >
                    <Icon size={26} weight="duotone" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[16px] text-gray-900 dark:text-white mb-0.5">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {item.description}
                    </span>
                  </div>
                </div>
                <CaretRightIcon
                  size={20}
                  className="text-gray-400 group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            );
          })}
        </div>

        {/* Danger Zone / Logout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={() => alert("Logging out...")}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl text-red-500 font-bold bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all active:scale-[0.98]"
          >
            <SignOutIcon size={24} weight="bold" />
            <span>Logout Account</span>
          </button>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
