"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, TextTIcon } from "@phosphor-icons/react";
import { textSizeOptions } from "@/data/data";

const STORAGE_KEY = "text_size_preference";

export default function TextSizeSettings() {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState("medium");
  const [isSaving, setIsSaving] = useState(false);

  // Load saved preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && textSizeOptions.some((o) => o.id === saved)) {
        setSelectedSize(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const handleSizeSelect = (sizeId: string) => {
    setSelectedSize(sizeId);
  };

  const handleKeyDown = (event: React.KeyboardEvent, sizeId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSizeSelect(sizeId);
    } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      const currentIndex = textSizeOptions.findIndex(
        (o) => o.id === selectedSize,
      );
      const nextIndex = (currentIndex + 1) % textSizeOptions.length;
      setSelectedSize(textSizeOptions[nextIndex].id);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      const currentIndex = textSizeOptions.findIndex(
        (o) => o.id === selectedSize,
      );
      const prevIndex =
        (currentIndex - 1 + textSizeOptions.length) % textSizeOptions.length;
      setSelectedSize(textSizeOptions[prevIndex].id);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      localStorage.setItem(STORAGE_KEY, selectedSize);
      // Apply to document for immediate effect
      document.documentElement.dataset.textSize = selectedSize;
      router.back();
    } catch (error) {
      console.error("Failed to save text size:", error);
      alert("Failed to save. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto">
      <header className="px-6 py-4 pt-6 flex items-center gap-4 z-10 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="flex items-center justify-center w-8 h-8 rounded-full -ml-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Text Size
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-10 pt-2 no-scrollbar">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
          Choose a text size that is comfortable for you to read.
        </p>

        <span id="text-size-group-label" className="sr-only">
          Text size options
        </span>
        <div
          className="flex flex-col gap-3"
          role="radiogroup"
          aria-labelledby="text-size-group-label"
        >
          {textSizeOptions.map((option) => (
            <div
              key={option.id}
              role="radio"
              tabIndex={selectedSize === option.id ? 0 : -1}
              aria-checked={selectedSize === option.id}
              onClick={() => handleSizeSelect(option.id)}
              onKeyDown={(e) => handleKeyDown(e, option.id)}
              className={`bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-soft border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${selectedSize === option.id ? "border-primary ring-1 ring-primary" : "border-gray-100 dark:border-gray-800 hover:border-primary/20"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center">
                    <TextTIcon
                      size={
                        option.id === "small"
                          ? 18
                          : option.id === "medium"
                            ? 22
                            : option.id === "large"
                              ? 26
                              : 30
                      }
                      className="text-gray-600 dark:text-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`font-bold text-gray-900 dark:text-white ${option.size}`}
                    >
                      {option.label}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {option.example}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedSize === option.id ? "border-primary bg-primary" : "border-gray-300 dark:border-gray-600"}`}
                >
                  {selectedSize === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            Preview
          </h3>
          <p
            className={`text-gray-600 dark:text-gray-400 leading-relaxed ${textSizeOptions.find((o) => o.id === selectedSize)?.size}`}
          >
            This is how your text will appear throughout the app. Adjust the
            size until it feels comfortable.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full mt-6 py-4 rounded-2xl bg-primary text-white font-bold text-base hover:bg-primary/90 active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </main>
    </div>
  );
}
