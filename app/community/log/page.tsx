"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { XIcon, CheckIcon, ShieldIcon } from "@phosphor-icons/react";
import { communityCategories } from "@/data/data";

export default function CommunityLog() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("recovery");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        title: title.trim(),
        content: content.trim(),
        category:
          communityCategories.find((c) => c.id === selectedCategory)?.label ||
          "Recovery",
        timestamp: new Date().toISOString(),
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Community post payload:", payload);

      router.push("/community");
    } catch {
      setSubmitError("Failed to share your post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto">
      <header className="w-full px-4 pt-5 pb-4 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 sticky top-0">
        <button
          onClick={() => router.back()}
          aria-label="Cancel"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <XIcon size={24} />
        </button>
        <h2 className="text-lg font-bold">New Post</h2>
        <button
          onClick={handleSubmit}
          disabled={!title.trim() || !content.trim() || isSubmitting}
          aria-label="Post to community"
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
            title.trim() && content.trim()
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-gray-100 dark:bg-gray-800 text-gray-400"
          }`}
        >
          <CheckIcon size={24} weight="bold" />
        </button>
      </header>

      <main className="flex-1 w-full px-5 pb-8 flex flex-col gap-6 overflow-y-auto no-scrollbar">
        {submitError && (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <p className="text-sm text-red-600 dark:text-red-400 text-center">
              {submitError}
            </p>
          </div>
        )}

        {/* Title Input */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-base font-semibold text-gray-900 dark:text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Category Selection */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Topic
          </label>
          <div className="flex flex-wrap gap-2">
            {communityCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border-2 ${
                    isSelected
                      ? `bg-white dark:bg-white/10 ${cat.color} border-current shadow-md scale-[1.02]`
                      : "bg-white dark:bg-surface-dark border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-100 dark:hover:border-gray-800"
                  }`}
                >
                  <Icon
                    size={16}
                    weight={isSelected ? "fill" : "duotone"}
                    className={`${cat.color} ${isSelected ? "opacity-100" : "opacity-70"}`}
                  />
                  <span
                    className={`transition-all duration-300 ${
                      isSelected
                        ? `${cat.bg} ${cat.color} dark:bg-opacity-20 px-1.5 py-0.5 rounded-lg`
                        : ""
                    }`}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts, experiences, or encouragement..."
            rows={6}
            className="w-full p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all leading-relaxed"
          />
        </div>

        {/* Safety Tip */}
        <div className="p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 flex gap-3">
          <div className="p-1.5 h-fit rounded-full bg-primary/10 text-primary">
            <ShieldIcon size={18} weight="fill" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
              Community Guideline
            </span>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Your posts are shared anonymously by default to protect your
              sanctuary. Please be kind and supportive.
            </p>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!title.trim() || !content.trim() || isSubmitting}
          className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all mt-2 ${
            title.trim() && content.trim()
              ? "bg-primary text-white hover:bg-primary/90 active:scale-[0.98] shadow-lg shadow-primary/20"
              : "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Sharing..." : "Post to Community"}
        </button>
      </main>
    </div>
  );
}
