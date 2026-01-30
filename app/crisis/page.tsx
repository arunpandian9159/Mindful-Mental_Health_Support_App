"use client";

import { useRouter } from "next/navigation";
import {
  HeartIcon,
  CaretRightIcon,
  ChatCircleDotsIcon,
  ShieldIcon,
  HeadphonesIcon,
  PhoneCallIcon,
} from "@phosphor-icons/react";
import { emergencyContact, crisisHotlines } from "@/data/data";
import { SubPageHeader } from "@/components/SubPageHeader";

export default function CrisisSupport() {
  const router = useRouter();

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark font-display antialiased selection:bg-red/30 selection:text-deep-red items-center">
      {/* Background Blobs */}
      <div className="absolute -top-[10%] -right-[10%] h-112.5 w-112.5 rounded-full bg-red/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[30%] -left-[15%] h-100 w-100 rounded-full bg-primary/15 blur-[90px] pointer-events-none"></div>
      <div className="absolute -bottom-[10%] right-[5%] h-75 w-75 rounded-full bg-red/10 blur-[80px] pointer-events-none"></div>

      <SubPageHeader title="Support & Crisis" />

      <main className="relative z-10 flex flex-1 flex-col overflow-y-auto no-scrollbar px-6 pt-4 pb-8 w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <h1 className="text-[#101519] dark:text-white text-3xl font-bold leading-tight mb-3">
            We&apos;re holding space for you.
          </h1>
          <p className="text-[#57748e] dark:text-gray-400 text-base font-normal leading-relaxed max-w-70">
            It&apos;s okay to not be okay right now. Reach out for a helping
            hand.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <button
            onClick={() => router.push("tel:" + emergencyContact.phone)}
            className="group relative flex w-full items-center gap-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-red-500 p-5 shadow-sm transition-transform active:scale-[0.98]"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
              <HeartIcon size={30} weight="fill" />
            </div>
            <div className="flex flex-1 flex-col text-left">
              <span className="text-[#101519] dark:text-white text-lg font-bold leading-tight">
                Message my Support Person
              </span>
              <span className="text-[#57748e] dark:text-gray-400 text-sm font-medium mt-1">
                Let {emergencyContact.name} know you need help
              </span>
            </div>
            <div className="shrink-0 text-red-500 group-hover:translate-x-1 transition-transform">
              <CaretRightIcon size={24} weight="bold" />
            </div>
          </button>

          <a
            className="group relative flex w-full items-center gap-4 rounded-xl bg-white dark:bg-gray-800 p-5 shadow-sm border border-gray-100 dark:border-gray-700 transition-transform active:scale-[0.98]"
            href={`tel:${crisisHotlines.nationalHotline.number}`}
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <PhoneCallIcon size={30} weight="fill" />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-[#101519] dark:text-white text-lg font-bold leading-tight">
                Call Hotline
              </span>
              <span className="text-red text-sm font-semibold mt-1">
                Available 24/7, Confidential
              </span>
            </div>
            <div className="shrink-0 text-gray-300 group-hover:translate-x-1 transition-transform">
              <CaretRightIcon size={24} weight="bold" />
            </div>
          </a>

          <a
            className="group relative flex w-full items-center gap-4 rounded-xl bg-white dark:bg-gray-800 p-5 shadow-sm border border-gray-100 dark:border-gray-700 transition-transform active:scale-[0.98]"
            href={`sms:${crisisHotlines.textSupport.number}`}
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ChatCircleDotsIcon size={30} weight="fill" />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-[#101519] dark:text-white text-lg font-bold leading-tight">
                Text Support
              </span>
              <span className="text-red text-sm font-semibold mt-1">
                Text {crisisHotlines.textSupport.keyword} to{" "}
                {crisisHotlines.textSupport.number}
              </span>
            </div>
            <div className="shrink-0 text-gray-300 group-hover:translate-x-1 transition-transform">
              <CaretRightIcon size={24} weight="bold" />
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center gap-3 rounded-xl bg-primary/10 border border-primary/20 p-6 text-center transition-transform active:scale-[0.98] group">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-white group-hover:bg-primary/90 transition-colors">
              <ShieldIcon size={24} weight="fill" />
            </div>
            <span className="text-primary text-sm font-bold leading-tight">
              View My
              <br />
              Safety Plan
            </span>
          </button>
          <button
            onClick={() => router.push("/tools/breathing")}
            className="flex flex-col items-center justify-center gap-3 rounded-xl bg-coral/15 border border-coral/30 p-6 text-center transition-transform active:scale-[0.98] group"
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-coral text-white group-hover:bg-coral transition-colors">
              <HeadphonesIcon size={24} weight="fill" />
            </div>
            <span className="text-coral text-sm font-bold leading-tight">
              Gentle
              <br />
              Self-Care
            </span>
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-[#57748e] dark:text-gray-500 font-medium italic">
          2-minute guided relaxation track available
        </p>

        <div className="flex-1 min-h-8"></div>

        <div className="mt-auto pt-6 pb-4">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40 rounded-2xl p-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              If you are in immediate coral,
            </p>
            <a
              className="inline-block mt-1 text-lg font-extrabold text-red-600 dark:text-red-400 underline decoration-2 underline-offset-4 active:opacity-80"
              href="tel:100"
            >
              Call 100 immediately
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
