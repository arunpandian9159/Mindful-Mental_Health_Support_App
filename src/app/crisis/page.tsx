"use client";

import { useRouter } from "next/navigation";

import {
  XIcon,
  SirenIcon,
  PhoneCallIcon,
  ChatIcon,
  ShieldPlusIcon,
  LeafIcon,
} from "@phosphor-icons/react";
import { emergencyContact, crisisHotlines } from "@/data/data";

export default function CrisisSupport() {
  const router = useRouter();

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background blobs for calming effect */}
      <div className="absolute -top-[20%] -right-[10%] h-125 w-125 rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[40%] -left-[10%] h-75 w-75 rounded-full bg-coral/10 blur-[80px] pointer-events-none"></div>

      <header className="relative z-10 flex items-center justify-between px-6 pt-12 pb-2">
        <div className="w-10"></div>
        <h2 className="text-lg font-bold">Immediate Support</h2>
        <button
          onClick={() => router.back()}
          className="flex size-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-lg hover:bg-black/10 transition-colors"
        >
          <XIcon size={20} />
        </button>
      </header>

      <main className="relative z-10 flex flex-1 flex-col overflow-y-auto no-scrollbar px-6 pt-4 pb-6">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="size-20 bg-danger/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <SirenIcon size={40} className="text-danger" weight="fill" />
          </div>
          <h1 className="text-3xl font-bold mb-3">You are not alone.</h1>
          <p className="text-gray-500 max-w-70">
            Help is available right now. Connect with someone who understands.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <a
            href={`tel:${crisisHotlines.nationalHotline.number}`}
            className="flex w-full items-center gap-4 rounded-xl bg-coral p-5 shadow-lg active:scale-95 transition-transform"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-black/10 text-black">
              <PhoneCallIcon size={32} weight="fill" />
            </div>
            <div className="flex flex-1 flex-col text-black">
              <span className="text-lg font-bold">Call National Hotline</span>
              <span className="text-sm font-medium opacity-80">
                {crisisHotlines.nationalHotline.number} -{" "}
                {crisisHotlines.nationalHotline.description}
              </span>
            </div>
          </a>

          <a
            href={`sms:${crisisHotlines.textSupport.number}`}
            className="flex w-full items-center gap-4 rounded-xl bg-primary p-5 shadow-lg active:scale-95 transition-transform"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
              <ChatIcon size={32} weight="fill" />
            </div>
            <div className="flex flex-1 flex-col text-white">
              <span className="text-lg font-bold">Text Support Line</span>
              <span className="text-sm font-medium opacity-80">
                Text {crisisHotlines.textSupport.keyword} to{" "}
                {crisisHotlines.textSupport.number}
              </span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-surface-dark p-6 text-center shadow-soft border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldPlusIcon size={32} weight="fill" />
            </div>
            <span className="font-bold text-sm">
              View My
              <br />
              Safety Plan
            </span>
          </button>

          <button
            onClick={() => router.push("/tools/breathing")}
            className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-surface-dark p-6 text-center shadow-soft border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all"
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <LeafIcon size={32} weight="fill" />
            </div>
            <span className="font-bold text-sm">
              Start Grounding
              <br />
              Exercise
            </span>
          </button>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-dashed border-gray-200 dark:border-gray-700">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Emergency Contact
          </h4>
          <div className="flex justify-between items-center">
            <span className="font-medium">
              {emergencyContact.name} ({emergencyContact.role})
            </span>
            <a
              href={`tel:${emergencyContact.phone}`}
              className="text-primary font-bold"
            >
              Call
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
