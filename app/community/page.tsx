"use client";

import { BottomNav } from "@/components/BottomNav";
import { SubPageHeader } from "@/components/SubPageHeader";

import { HeartIcon, ChatCircleIcon, PlusIcon } from "@phosphor-icons/react";
import { communityPosts, communityCategories } from "@/data/data";
import { useRouter } from "next/navigation";

export default function Community() {
  const posts = communityPosts;
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden pb-24 bg-background-light dark:bg-background-dark items-center">
      <SubPageHeader title="Community" 
        rightIcon={<PlusIcon size={20} weight="bold" />}
        rightAction={() => router.push("/community/log")}/>
      <header className="sticky top-16 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 pt-2 w-full flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar w-full justify-start md:justify-center">
            <button className="shrink-0 h-9 px-5 rounded-full bg-primary text-white text-sm font-medium shadow-md">
              All
            </button>
            {communityCategories.map((cat) => (
              <button
                key={cat}
                className="shrink-0 h-9 px-5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-primary/5 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 flex-1 w-full max-w-5xl">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-soft border border-gray-100 dark:border-gray-700 hover:border-primary/20 transition-all cursor-pointer group h-fit"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full h-10 w-10 flex items-center justify-center text-primary font-bold text-xs ${post.bg} dark:bg-opacity-10`}
                >
                  {post.id}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold group-hover:text-primary transition-colors">
                    {post.author}
                  </span>
                  <span className="text-xs text-gray-500">{post.time}</span>
                </div>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-wide uppercase">
                {post.category}
              </span>
            </div>
            <h3 className="text-base font-bold mb-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {post.content}
            </p>

            <div className="flex gap-4 mt-6 pt-4 border-t border-gray-50 dark:border-white/5">
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors">
                <HeartIcon size={20} weight="bold" />
                <span className="text-xs font-bold">12</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors">
                <ChatCircleIcon size={20} weight="bold" />
                <span className="text-xs font-bold">4</span>
              </button>
            </div>
          </article>
        ))}
      </main>
     <BottomNav />
    </div>
  );
}
