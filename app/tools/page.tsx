"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import {
  MagnifyingGlassIcon,
  HandHeartIcon,
  HeadphonesIcon,
  PlayIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { toolCategories, wellnessTools } from "@/data/data";
import { motion } from "framer-motion";
import { SubPageHeader } from "@/components/SubPageHeader";

export default function WellnessLibrary() {
  const router = useRouter();
  const categories = ["All", ...toolCategories];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filteredTools = wellnessTools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "All") return matchesSearch;

    // Categorization logic based on ID or description
    const toolId = tool.id.toLowerCase();
    if (activeTab === "Mindfulness")
      return (
        matchesSearch &&
        (toolId.includes("breathing") ||
          toolId.includes("grounding") ||
          toolId.includes("meditation") ||
          toolId.includes("thought") ||
          toolId.includes("metta") ||
          toolId.includes("visual") ||
          toolId.includes("stop"))
      );
    if (activeTab === "Relaxation")
      return (
        matchesSearch &&
        (toolId.includes("relax") ||
          toolId.includes("breathing") ||
          toolId.includes("safe") ||
          toolId.includes("body-scan"))
      );
    if (activeTab === "Cognitive")
      return (
        matchesSearch &&
        (toolId.includes("thought") ||
          toolId.includes("gratitude") ||
          toolId.includes("worry") ||
          toolId.includes("compassion") ||
          toolId.includes("values") ||
          toolId.includes("journal") ||
          toolId.includes("behavior"))
      );
    if (activeTab === "Physical")
      return (
        matchesSearch &&
        (toolId.includes("muscle") ||
          toolId.includes("walking") ||
          toolId.includes("ice"))
      );

    return matchesSearch;
  });

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col items-center">
      <SubPageHeader title="Wellness Library" />
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 w-full max-w-5xl">
        <div className="px-4 py-2 sticky bg-background-light dark:bg-background-dark z-10 pb-4 flex justify-center">
          <div className="relative flex items-center w-full max-w-2xl h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 focus-within:border-primary/50 transition-colors">
            <div className="grid place-items-center h-full w-12 text-slate-400">
              <MagnifyingGlassIcon size={20} />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm md:text-base text-slate-700 dark:text-slate-200 pr-2 bg-transparent placeholder-slate-400 font-medium"
              placeholder="Search tools..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar px-4 pb-4 flex md:justify-center">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === cat ? "bg-primary text-white shadow-md font-bold" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/5"}`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => router.push("/crisis")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500 text-white shadow-md hover:scale-105 transition-transform"
            >
              <HandHeartIcon size={18} weight="bold" />
              <span className="text-sm font-bold">Crisis</span>
            </button>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <h3 className="text-slate-900 dark:text-white font-bold text-lg md:text-xl mt-2 mb-1 transition-all">
            {activeTab === "All" ? "All Tools" : `${activeTab} Tools`}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTools.map((tool) => (
              <motion.div
                layout
                key={tool.id}
                onClick={() => router.push(tool.href)}
                className="group relative flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 cursor-pointer hover:border-primary/30 transition-all hover:scale-[1.01]"
              >
                <div className="shrink-0 relative overflow-hidden rounded-xl">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    width={80}
                    height={80}
                    className="size-20 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="flex flex-col flex-1 justify-center min-w-0">
                  <h4 className="text-slate-900 dark:text-white text-base font-semibold leading-tight mb-1 truncate">
                    {tool.title}
                  </h4>
                  <div className="flex items-center gap-2 text-primary dark:text-primary/80 text-[10px] font-bold uppercase tracking-wider">
                    {tool.type === "audio" ? (
                      <HeadphonesIcon size={14} weight="bold" />
                    ) : (
                      <VideoCameraIcon size={14} weight="bold" />
                    )}
                    <span>
                      {tool.type} • {tool.duration}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 line-clamp-1">
                    {tool.description}
                  </p>
                </div>
                <div className="shrink-0 pr-1">
                  <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <PlayIcon size={18} weight="fill" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filteredTools.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                No tools matches your criteria.
              </p>
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
