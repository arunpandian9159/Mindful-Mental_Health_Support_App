"use client";

import { BottomNav } from "@/components/BottomNav";
import { StatusBar } from "@/components/StatusBar";
import { HeartIcon, ChatCircleIcon, PlusIcon } from "@phosphor-icons/react";

export default function Community() {
  const posts = [
    {
      id: "#492",
      author: "Member #492",
      time: "2h ago",
      title: "Finally managed to go grocery shopping today.",
      content:
        "It was overwhelming at first, but I focused on my list and got through it.",
      bg: "bg-blue-50",
    },
    {
      id: "#128",
      author: "Anonymous",
      time: "5h ago",
      title: "The breathing exercise really helped with my panic attack.",
      content:
        "Just wanted to share a small win. Box breathing is a game changer.",
      bg: "bg-green-50",
    },
    {
      id: "#773",
      author: "Member #773",
      time: "1d ago",
      title: "Feeling a bit low today, looking for some encouragement.",
      content:
        "Woke up with heavy thoughts. Any kind words would be appreciated.",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden pb-24 bg-background-light dark:bg-background-dark">
      <StatusBar />
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 pt-10">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold flex-1 text-center">Community</h1>
        </div>
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar w-full">
          <button className="shrink-0 h-9 px-5 rounded-full bg-primary text-white text-sm font-medium shadow-md">
            All
          </button>
          <button className="shrink-0 h-9 px-5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-primary/5 transition-colors">
            Recovery
          </button>
          <button className="shrink-0 h-9 px-5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-primary/5 transition-colors">
            Coping
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-4 p-4 flex-1">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-soft border border-gray-100 dark:border-gray-700 hover:border-primary/20 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-4">
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

      <div className="fixed bottom-24 right-6 h-14 w-14 rounded-full bg-primary text-white shadow-fab flex items-center justify-center z-40 hover:scale-105 active:scale-95 transition-transform">
        <PlusIcon size={28} weight="bold" />
      </div>

      <BottomNav />
    </div>
  );
}
