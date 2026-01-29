"use client";

import { useRouter } from "next/navigation";
import { HandHeart } from "@phosphor-icons/react";

export const GlobalHelpFAB = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/crisis")}
      className="fixed bottom-24 left-6 z-40 flex items-center gap-2 bg-danger text-white px-4 py-3 rounded-full shadow-fab hover:scale-105 transition-transform active:scale-95"
    >
      <HandHeart size={24} weight="fill" />
      <span className="font-bold text-sm">Get Help</span>
    </button>
  );
};
