"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  ChatCircleTextIcon,
  CaretRightIcon,
  ClockIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { articles, recoveryStories } from "@/data/data";
import { BottomNav } from "@/components/BottomNav";

export default function EducationalHub() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"articles" | "stories">(
    "articles",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredStories = recoveryStories.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <div className="max-w-md mx-auto px-6 pt-12">
        <header className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-text-primary dark:text-white mb-2">
            Resources
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Learn and find inspiration for your journey
          </p>
        </header>

        {/* Search Bar */}
        <div className="relative mb-8">
          <MagnifyingGlassIcon
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search articles or stories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-soft"
          />
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 dark:bg-gray-800/50 p-1.5 rounded-2xl mb-8">
          <button
            onClick={() => setActiveTab("articles")}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === "articles"
                ? "bg-white dark:bg-surface-dark text-primary shadow-sm"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <BookOpenIcon
              size={18}
              weight={activeTab === "articles" ? "fill" : "regular"}
            />
            Articles
          </button>
          <button
            onClick={() => setActiveTab("stories")}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === "stories"
                ? "bg-white dark:bg-surface-dark text-primary shadow-sm"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <ChatCircleTextIcon
              size={18}
              weight={activeTab === "stories" ? "fill" : "regular"}
            />
            Recovery Stories
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {activeTab === "articles" ? (
            <div className="grid gap-4">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() =>
                    router.push(`/resources/article/${article.id}`)
                  }
                  className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft cursor-pointer hover:border-primary/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-1 rounded-md">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400 text-[10px] font-bold">
                      <ClockIcon size={14} />
                      {article.readingTime} MIN READ
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-text-primary dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      By {article.author}
                    </span>
                    <CaretRightIcon size={16} className="text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  onClick={() => router.push(`/resources/story/${story.id}`)}
                  className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft cursor-pointer hover:border-primary/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-2">
                      {story.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold text-gray-500 bg-gray-100 dark:bg-gray-800/50 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-[10px] font-bold">
                      <ClockIcon size={14} />
                      {story.readingTime} MIN READ
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-text-primary dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 italic">
                    &quot;{story.excerpt}&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {story.author} • {story.location}
                    </span>
                    <CaretRightIcon size={16} className="text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      <BottomNav />
    </div>
  );
}
