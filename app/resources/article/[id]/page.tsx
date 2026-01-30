"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CaretLeftIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  TagIcon,
  LightbulbIcon,
} from "@phosphor-icons/react";
import { articles } from "@/data/data";

export default function ArticleDetail() {
  const { id } = useParams();
  const router = useRouter();
  const article = articles.find((a) => a.id === id);

  if (!article)
    return <div className="p-10 text-center">Article not found</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <div className="max-w-2xl mx-auto">
        <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-30 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-2xl mx-auto px-6 h-16 flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="size-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all active:scale-95"
            >
              <CaretLeftIcon size={20} weight="bold" />
            </button>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest truncate">
              {article.category}
            </h2>
          </div>
        </header>

        <main className="px-6 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-primary dark:text-white leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-4 py-4 border-y border-gray-50 dark:border-gray-800">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <UserIcon size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <ClockIcon size={18} />
                <span>{article.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon size={18} />
                <span>{article.datePublished}</span>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium italic mb-8 border-l-4 border-primary/20 pl-4 py-2 bg-primary/5 rounded-r-xl">
                {article.summary}
              </p>
              <div className="whitespace-pre-line text-lg text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
                {article.content}
              </div>
            </div>

            <section className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-900/20 mt-12">
              <div className="flex items-center gap-2 mb-4">
                <LightbulbIcon
                  size={24}
                  className="text-primary"
                  weight="fill"
                />
                <h3 className="text-xl font-bold text-text-primary dark:text-white">
                  Key Takeaways
                </h3>
              </div>
              <ul className="space-y-3">
                {article.keyTakeaways.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="size-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-wrap gap-2 pt-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium flex items-center gap-1.5"
                >
                  <TagIcon size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
