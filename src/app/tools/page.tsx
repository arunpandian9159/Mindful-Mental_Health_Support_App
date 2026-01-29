"use client";

import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import { StatusBar } from "@/components/StatusBar";
import {
  MagnifyingGlassIcon,
  HandHeartIcon,
  HeadphonesIcon,
  PlayIcon,
  VideoCameraIcon,
  ArrowLeftIcon,
} from "@phosphor-icons/react";
import Image from "next/image";

export default function WellnessLibrary() {
  const router = useRouter();

  const categories = [
    "All",
    "Mindfulness",
    "Relaxation",
    "Cognitive",
    "Physical",
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <StatusBar />
      <header className="flex items-center justify-between px-4 pt-12 pb-2 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 sticky top-0">
        <button
          onClick={() => router.push("/")}
          className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">
          Wellness Library
        </h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="px-4 py-2 sticky top-14 bg-background-light dark:bg-background-dark z-10 pb-4">
          <div className="relative flex items-center w-full h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 focus-within:border-primary/50 transition-colors">
            <div className="grid place-items-center h-full w-12 text-slate-400">
              <MagnifyingGlassIcon size={20} />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-slate-700 dark:text-slate-200 pr-2 bg-transparent placeholder-slate-400 font-medium"
              placeholder="Search tools..."
              type="text"
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar px-4 pb-4">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-primary text-white shadow-md" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/5"}`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => router.push("/crisis")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral text-white shadow-md hover:scale-105 transition-transform"
            >
              <HandHeartIcon size={18} weight="bold" />
              <span className="text-sm font-bold">Crisis</span>
            </button>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <h3 className="text-slate-900 dark:text-white font-bold text-lg mt-2 mb-1">
            Recommended for you
          </h3>

          <div
            onClick={() => router.push("/tools/breathing")}
            className="group relative flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 cursor-pointer hover:border-primary/30 transition-all"
          >
            <div className="shrink-0 relative overflow-hidden rounded-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGnaZvYW9aR4QCHOZ0Zgz1lMcFz5IznniJmXozsMrM2WP2i-qaOUMju8aR9yvIbdJYHQjxSJZDW8Q97yFAWCyp3MtieA-MvBohsWL2uJAR9cWvEKZQslnWH0m8Zn_mVZZ77Z5ZiBK_0RIBb0MIS_kn2WLLBCA5uiUmjZN4etZeJ_XmAznRPjNXePu7ds5T2oqBLpaUG1EU7s6aDn6Z05fP4IhjrfOBZ-YGfJoVKdKAMQpeJQ8W5oalITNibOr_7IWkEQYaehpvi8AW"
                alt="Square Breathing"
                width={80}
                height={80}
                className="size-20 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="flex flex-col flex-1 justify-center min-w-0">
              <h4 className="text-slate-900 dark:text-white text-base font-semibold leading-tight mb-1 truncate">
                Square Breathing
              </h4>
              <div className="flex items-center gap-2 text-primary dark:text-primary/80 text-xs font-semibold uppercase tracking-wide">
                <HeadphonesIcon size={16} weight="bold" />
                <span>Audio • 5 min</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 line-clamp-1">
                Reduce anxiety with box breathing.
              </p>
            </div>
            <div className="shrink-0 pr-2">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <PlayIcon size={20} weight="fill" />
              </div>
            </div>
          </div>

          <div className="group relative flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 cursor-pointer hover:border-primary/30 transition-all">
            <div className="shrink-0 relative overflow-hidden rounded-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSuF3YmaEuNg0ohb4exDIWDNVRbBAJoWFGfnb3wS3uixJY5JdSCaslOZIAMQoCJa5ZbtSuGwDRqapVPmSHnrmrHHdqLbjmLeSoGacAVv3InGG5tdGKjXhqVMG1Mrqh58ex93RYnimYQsx-M0TENo3dtx5HgkjXBdNBrFqGDnwnhmQvaNddjYmQoUlb17E3Z3jUWCPvhsjOGf6E3ubL-_fP-Exf_w5y42hegDnZZmyEWamKtQ_cur1kbj9HNDTfLBBQa-groQpfBK6j"
                alt="Muscle Relaxation"
                width={80}
                height={80}
                className="size-20 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="flex flex-col flex-1 justify-center min-w-0">
              <h4 className="text-slate-900 dark:text-white text-base font-semibold leading-tight mb-1 truncate">
                Muscle Relaxation
              </h4>
              <div className="flex items-center gap-2 text-violet-500 dark:text-violet-400 text-xs font-semibold uppercase tracking-wide">
                <VideoCameraIcon size={16} weight="bold" />
                <span>Video • 15 min</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 line-clamp-1">
                Release tension from your body.
              </p>
            </div>
            <div className="shrink-0 pr-2">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <PlayIcon size={20} weight="fill" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
