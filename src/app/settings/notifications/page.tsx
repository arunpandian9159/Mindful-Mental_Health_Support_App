"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, BellIcon } from "@phosphor-icons/react";
import { notificationSettings, type NotificationSetting } from "@/data/data";

export default function NotificationSettings() {
  const router = useRouter();
  const [notifications, setNotifications] =
    useState<NotificationSetting[]>(notificationSettings);
  const [masterToggle, setMasterToggle] = useState(true);

  const handleToggle = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n)),
    );
  };

  const handleToggleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(id);
    }
  };

  const handleMasterToggle = () => {
    const newState = !masterToggle;
    setMasterToggle(newState);
    setNotifications((prev) => prev.map((n) => ({ ...n, enabled: newState })));
  };

  const handleMasterKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleMasterToggle();
    }
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
          Notifications
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-10 pt-2 no-scrollbar">
        {/* Master Toggle */}
        <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BellIcon size={28} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">
                  All Notifications
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Enable or disable all reminders
                </p>
              </div>
            </div>
            <div
              role="switch"
              tabIndex={0}
              aria-checked={masterToggle}
              aria-label="Toggle all notifications"
              onClick={handleMasterToggle}
              onKeyDown={handleMasterKeyDown}
              className={`w-14 h-7 rounded-full relative cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                masterToggle ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${
                  masterToggle ? "translate-x-7" : "left-0.5"
                }`}
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
          Customize individual notifications
        </p>

        <div className="flex flex-col gap-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 transition-all ${
                !masterToggle ? "opacity-50" : "hover:border-primary/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center">
                    <notification.icon
                      size={22}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                        {notification.title}
                      </h3>
                      {notification.time &&
                        notification.enabled &&
                        masterToggle && (
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                            {notification.time}
                          </span>
                        )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {notification.description}
                    </p>
                  </div>
                </div>
                <div
                  role="switch"
                  tabIndex={masterToggle ? 0 : -1}
                  aria-checked={notification.enabled}
                  aria-label={`Toggle ${notification.title}`}
                  aria-disabled={!masterToggle}
                  onClick={() => masterToggle && handleToggle(notification.id)}
                  onKeyDown={(e) =>
                    masterToggle && handleToggleKeyDown(e, notification.id)
                  }
                  className={`w-12 h-6 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    masterToggle ? "cursor-pointer" : "cursor-not-allowed"
                  } ${
                    notification.enabled && masterToggle
                      ? "bg-primary"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${
                      notification.enabled && masterToggle
                        ? "translate-x-6"
                        : "left-0.5"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
          <p className="text-xs text-blue-600 dark:text-blue-400 leading-relaxed text-center">
            💡 Tip: Consistent reminders can help build healthy mental wellness
            habits.
          </p>
        </div>
      </main>
    </div>
  );
}
