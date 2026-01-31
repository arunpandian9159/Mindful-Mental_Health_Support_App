"use client";

import { useState } from "react";
import { SubPageHeader } from "@/components/SubPageHeader";
import { BottomNav } from "@/components/BottomNav";
import {
  notifications as initialNotifications,
  Notification,
} from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";
import { BellIcon, ChecksIcon, TrashIcon } from "@phosphor-icons/react";

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => n.isUnread).length;
  const filteredNotifications =
    filter === "all" ? notifications : notifications.filter((n) => n.isUnread);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isUnread: false })));
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, isUnread: false } : n)),
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-20 bg-background-light dark:bg-background-dark items-center">
      <SubPageHeader
        title="Notifications"
        rightIcon={
          unreadCount > 0 ? <ChecksIcon size={20} weight="bold" /> : undefined
        }
        rightAction={markAllAsRead}
      />

      <main className="flex-1 overflow-y-auto no-scrollbar w-full max-w-2xl px-4 pt-24">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-primary text-white shadow-md"
                : "bg-white dark:bg-surface-dark text-gray-500 border border-gray-100 dark:border-gray-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              filter === "unread"
                ? "bg-primary text-white shadow-md"
                : "bg-white dark:bg-surface-dark text-gray-500 border border-gray-100 dark:border-gray-800"
            }`}
          >
            Unread
            {unreadCount > 0 && (
              <span
                className={`size-5 rounded-full flex items-center justify-center text-[10px] ${
                  filter === "unread"
                    ? "bg-white text-primary"
                    : "bg-primary text-white"
                }`}
              >
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                    notification.isUnread
                      ? "bg-white dark:bg-surface-dark border-primary/20 shadow-sm"
                      : "bg-gray-50/50 dark:bg-gray-800/30 border-transparent text-gray-500"
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div
                    className={`shrink-0 size-12 rounded-xl ${notification.bgColor} flex items-center justify-center ${notification.color}`}
                  >
                    <notification.icon size={24} weight="fill" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3
                        className={`text-sm font-bold truncate ${notification.isUnread ? "text-text-primary dark:text-white" : "text-gray-500"}`}
                      >
                        {notification.title}
                      </h3>
                      <span className="text-[10px] whitespace-nowrap ml-2 opacity-60 font-medium">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed line-clamp-2">
                      {notification.description}
                    </p>
                  </div>

                  {notification.isUnread && (
                    <div className="absolute top-4 right-4 size-2 rounded-full bg-primary" />
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notification.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 transition-all"
                  >
                    <TrashIcon size={16} />
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="size-20 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-300 mb-4">
                  <BellIcon size={40} weight="light" />
                </div>
                <h3 className="text-lg font-bold text-text-primary dark:text-white mb-1">
                  No notifications
                </h3>
                <p className="text-sm text-gray-500">
                  You&apos;re all caught up!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
