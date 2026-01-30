"use client";

import { useRouter } from "next/navigation";
import { CaretLeftIcon } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface SubPageHeaderProps {
  title: string;
  rightIcon?: ReactNode;
  rightAction?: () => void;
}

export const SubPageHeader = ({
  title,
  rightIcon,
  rightAction,
}: SubPageHeaderProps) => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-30 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => router.push("/home")}
          className="size-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all active:scale-95"
        >
          <CaretLeftIcon size={20} weight="bold" />
        </button>
        <h1 className="text-sm font-bold text-text-primary dark:text-white uppercase tracking-widest">
          {title}
        </h1>
        {rightIcon ? (
          <button
            onClick={rightAction}
            className="size-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md active:scale-95 transition-all"
          >
            {rightIcon}
          </button>
        ) : (
          <div className="size-10" />
        )}
      </div>
    </header>
  );
};
