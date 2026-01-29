"use client";

import { CellSignalHigh, WifiHigh, BatteryFull } from "@phosphor-icons/react";

export const StatusBar = ({ lightText = false }: { lightText?: boolean }) => (
  <div
    className={`h-12 w-full flex justify-between items-center px-6 pt-2 z-20 absolute top-0 left-0 ${lightText ? "text-white" : "text-black dark:text-white"}`}
  >
    <span className="text-sm font-semibold">9:41</span>
    <div className="flex items-center gap-1.5">
      <CellSignalHigh size={18} weight="bold" />
      <WifiHigh size={18} weight="bold" />
      <BatteryFull size={18} weight="bold" />
    </div>
  </div>
);
