"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { moodOptions } from "@/data/data";

const activityTags = [
  { id: "work", label: "Work", emoji: "💼" },
  { id: "exercise", label: "Exercise", emoji: "🏃" },
  { id: "social", label: "Social", emoji: "👥" },
  { id: "sleep", label: "Sleep", emoji: "😴" },
  { id: "food", label: "Food", emoji: "🍽️" },
  { id: "nature", label: "Nature", emoji: "🌿" },
  { id: "meditation", label: "Meditation", emoji: "🧘" },
  { id: "music", label: "Music", emoji: "🎵" },
];

export default function MoodLog() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  };

  const handleSubmit = async () => {
    if (selectedMood === null) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    router.push("/mood");
  };

  const handleMoodKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedMood(index);
    }
  };

  const handleActivityKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleActivity(id);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto">
      <header className="w-full px-4 pt-12 pb-4 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 sticky top-0">
        <button
          onClick={() => router.back()}
          aria-label="Cancel"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <XIcon size={24} />
        </button>
        <h2 className="text-lg font-bold">Log Mood</h2>
        <button
          onClick={handleSubmit}
          disabled={selectedMood === null || isSubmitting}
          aria-label="Save mood"
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
            selectedMood !== null
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-gray-100 dark:bg-gray-800 text-gray-400"
          }`}
        >
          <CheckIcon size={24} weight="bold" />
        </button>
      </header>

      <main className="flex-1 w-full px-6 pb-10 flex flex-col gap-8 overflow-y-auto no-scrollbar">
        {/* Mood Selection */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            How are you feeling?
          </h3>
          <div className="flex justify-between items-center gap-2">
            {moodOptions.map((mood, index) => {
              const Icon = mood.icon;
              const isSelected = selectedMood === index;
              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedMood(index)}
                  onKeyDown={(e) => handleMoodKeyDown(e, index)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl cursor-pointer transition-all flex-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    isSelected
                      ? `${mood.bg} ring-2 ring-primary scale-105`
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  aria-pressed={isSelected}
                  aria-label={mood.label}
                >
                  <Icon
                    size={36}
                    weight={isSelected ? "fill" : "regular"}
                    className={isSelected ? mood.color : "text-gray-400"}
                  />
                  <span
                    className={`text-xs font-medium ${
                      isSelected
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {mood.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity Tags */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            What have you been doing?
          </h3>
          <div className="flex flex-wrap gap-2">
            {activityTags.map((activity) => {
              const isSelected = selectedActivities.includes(activity.id);
              return (
                <div
                  key={activity.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleActivity(activity.id)}
                  onKeyDown={(e) => handleActivityKeyDown(e, activity.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    isSelected
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/20"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="text-base">{activity.emoji}</span>
                  <span className="text-sm font-medium">{activity.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Add a note (optional)
          </h3>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's on your mind?"
            rows={4}
            className="w-full p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={selectedMood === null || isSubmitting}
          className={`w-full py-4 rounded-2xl font-bold text-base transition-all ${
            selectedMood !== null
              ? "bg-primary text-white hover:bg-primary/90 active:scale-[0.98]"
              : "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Saving..." : "Save Mood Entry"}
        </button>
      </main>
    </div>
  );
}
