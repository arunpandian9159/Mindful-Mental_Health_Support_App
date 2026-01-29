"use client";

export const StatusBar = ({ lightText = false }: { lightText?: boolean }) => (
  <div
    className={`h-12 w-full flex justify-between items-center px-6 pt-2 z-20 absolute top-0 left-0 ${lightText ? "text-white" : "text-black dark:text-white"}`}
  >
    <span className="text-sm font-semibold">9:41</span>
    <div className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[18px]">
        signal_cellular_alt
      </span>
      <span className="material-symbols-outlined text-[18px]">wifi</span>
      <span className="material-symbols-outlined text-[18px]">
        battery_full
      </span>
    </div>
  </div>
);
