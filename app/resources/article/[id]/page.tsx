"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ClockIcon,
  UserIcon,
  CalendarIcon,
  TagIcon,
  LightbulbIcon,
} from "@phosphor-icons/react";
import { articles } from "@/data/data";
import { SubPageHeader } from "@/components/SubPageHeader";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article)
    return <div className="p-10 text-center">Article not found</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <SubPageHeader title={article.category} backPath="/resources" />
      <div className="max-w-2xl mx-auto">
        <main className="px-6 pt-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <h1 className="text-[24px] md:text-3xl font-serif font-bold text-text-primary dark:text-white leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-4 py-3 border-y border-gray-50 dark:border-gray-800">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-[13px] font-medium">
                <UserIcon size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-[13px] font-medium">
                <ClockIcon size={16} />
                <span>{article.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-[13px] font-medium">
                <CalendarIcon size={16} />
                <span>{article.datePublished}</span>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 font-medium italic mb-6 border-l-4 border-primary/20 pl-4 py-2 bg-primary/5 rounded-r-xl">
                {article.summary}
              </p>
              <div className="whitespace-pre-line text-[16px] text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
                {article.content}
              </div>
            </div>

            <section className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-4xl border border-blue-100 dark:border-blue-900/20 mt-8">
              <div className="flex items-center gap-2 mb-3">
                <LightbulbIcon
                  size={20}
                  className="text-primary"
                  weight="fill"
                />
                <h3 className="text-[18px] font-bold text-text-primary dark:text-white">
                  Key Takeaways
                </h3>
              </div>
              <ul className="space-y-2.5">
                {article.keyTakeaways.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 leading-snug"
                  >
                    <span className="size-5 rounded-full bg-primary text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-wrap gap-2 pt-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[11px] font-bold flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <TagIcon size={12} />
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
