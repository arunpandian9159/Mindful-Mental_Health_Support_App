import {
  CircleHalfIcon,
  TextTIcon,
  EarIcon,
  BellIcon,
  ShieldIcon,
  DropIcon,
  FootprintsIcon,
  BrainIcon,
  SmileySadIcon,
  SmileyMehIcon,
  SmileyBlankIcon,
  SmileyIcon,
  SmileyWinkIcon,
  SunIcon,
  MoonIcon,
  CalendarIcon,
  HeartIcon,
  NotebookIcon,
  TrashIcon,
  DownloadIcon,
  EyeSlashIcon,
  LockKeyIcon,
  UserIcon,
} from "@phosphor-icons/react";

// ============================================================
// USER DATA
// ============================================================

export const currentUser = {
  name: "Sarah",
  avatar: "/profileimage.png",
};

// ============================================================
// HOME PAGE DATA
// ============================================================

export const moodOptions = [
  {
    icon: SmileySadIcon,
    color: "text-red-400",
    bg: "bg-red-50",
    label: "Very Sad",
  },
  {
    icon: SmileyMehIcon,
    color: "text-red-400",
    bg: "bg-red-50",
    label: "Sad",
  },
  {
    icon: SmileyBlankIcon,
    color: "text-gray-400",
    bg: "bg-gray-50",
    label: "Neutral",
  },
  {
    icon: SmileyIcon,
    color: "text-green-400",
    bg: "bg-green-50",
    label: "Good",
  },
  {
    icon: SmileyWinkIcon,
    color: "text-green-400",
    bg: "bg-green-50",
    label: "Great",
  },
];

export const suggestedContent = {
  title: "5-Minute Breathing",
  description: "Reset your focus and calm your mind.",
  duration: "5 min",
  image: "/breathingexercise.png",
  href: "/tools/breathing",
};

export const dailyGoalsProgress = {
  completed: 3,
  total: 5,
};

export const journalPrompt = {
  text: "What are you grateful for today?",
  href: "/journal",
};

// ============================================================
// COMMUNITY PAGE DATA
// ============================================================

export interface CommunityPost {
  id: string;
  author: string;
  time: string;
  title: string;
  content: string;
  bg: string;
  likes?: number;
  comments?: number;
}

export const communityPosts: CommunityPost[] = [
  {
    id: "#492",
    author: "Member #492",
    time: "2h ago",
    title: "Finally managed to go grocery shopping today.",
    content:
      "It was overwhelming at first, but I focused on my list and got through it.",
    bg: "bg-blue-50",
    likes: 12,
    comments: 4,
  },
  {
    id: "#128",
    author: "Anonymous",
    time: "5h ago",
    title: "The breathing exercise really helped with my panic attack.",
    content:
      "Just wanted to share a small win. Box breathing is a game changer.",
    bg: "bg-green-50",
    likes: 12,
    comments: 4,
  },
  {
    id: "#773",
    author: "Member #773",
    time: "1d ago",
    title: "Feeling a bit low today, looking for some encouragement.",
    content:
      "Woke up with heavy thoughts. Any kind words would be appreciated.",
    bg: "bg-purple-50",
    likes: 12,
    comments: 4,
  },
];

// ============================================================
// MOOD PAGE DATA
// ============================================================

// Heatmap data - 7 weeks of mood data (0-5 scale, 0 = no data)
export const heatmapData = [
  [3, 4, 5, 4, 3, 4, 5], // Week 1
  [4, 3, 4, 5, 4, 5, 4], // Week 2
  [5, 4, 3, 4, 5, 4, 3], // Week 3
  [3, 4, 5, 4, 3, 2, 4], // Week 4
  [4, 5, 4, 3, 4, 5, 4], // Week 5
  [2, 3, 4, 5, 4, 3, 4], // Week 6
  [4, 5, 4, 4, 5, 4, 5], // Week 7
];

// Mood color mapping for heatmap cells
export const moodColorMap: Record<number, string> = {
  0: "bg-gray-100 dark:bg-gray-800",
  1: "bg-red-200 dark:bg-red-900/40",
  2: "bg-orange-200 dark:bg-orange-900/40",
  3: "bg-yellow-200 dark:bg-yellow-900/40",
  4: "bg-green-200 dark:bg-green-900/40",
  5: "bg-emerald-300 dark:bg-emerald-800/50",
};

export const getMoodColor = (value: number): string => {
  return moodColorMap[value] || moodColorMap[0];
};

// Day labels for heatmap
export const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Chart data (0-5 scale)
export const moodChartData = [3, 5, 4, 5, 5, 5, 5];

export const moodStats = {
  averageScore: 4.2,
  percentChange: "+12%",
};

export interface MoodHistoryEntry {
  id: number;
  emoji: string;
  label: string;
  time: string;
  bgColor: string;
}

export const moodHistory: MoodHistoryEntry[] = [
  {
    id: 1,
    emoji: "😊",
    label: "Feeling Great",
    time: "Today, 9:00 AM",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    id: 2,
    emoji: "🙂",
    label: "Feeling Okay",
    time: "Yesterday, 8:45 PM",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
];

// Activity tags for mood logging
export interface ActivityTag {
  id: string;
  label: string;
  emoji: string;
}

export const activityTags: ActivityTag[] = [
  { id: "work", label: "Work", emoji: "💼" },
  { id: "exercise", label: "Exercise", emoji: "🏃" },
  { id: "social", label: "Social", emoji: "👥" },
  { id: "sleep", label: "Sleep", emoji: "😴" },
  { id: "food", label: "Food", emoji: "🍽️" },
  { id: "nature", label: "Nature", emoji: "🌿" },
  { id: "meditation", label: "Meditation", emoji: "🧘" },
  { id: "music", label: "Music", emoji: "🎵" },
];

// ============================================================
// SETTINGS PAGE DATA
// ============================================================

export interface SettingsItem {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  description: string;
  type: "toggle" | "nav";
  key: string;
  href?: string;
}

export const settingsItems: SettingsItem[] = [
  {
    title: "High Contrast",
    icon: CircleHalfIcon,
    description: "Enhance visibility with higher contrast colors",
    type: "toggle",
    key: "high-contrast",
  },
  {
    title: "Text Size",
    icon: TextTIcon,
    description: "Adjust the size of the text",
    type: "nav",
    key: "text-size",
    href: "/settings/text-size",
  },
  {
    title: "Screen Reader",
    icon: EarIcon,
    description: "Optimize for screen reader support",
    type: "toggle",
    key: "screen-reader",
  },
  {
    title: "Notifications",
    icon: BellIcon,
    description: "Manage your daily check-in alerts",
    type: "nav",
    key: "notifications",
    href: "/settings/notifications",
  },
  {
    title: "Data Privacy",
    icon: ShieldIcon,
    description: "Manage your personal data and privacy",
    type: "nav",
    key: "data-privacy",
    href: "/settings/privacy",
  },
];

export interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  enabled: boolean;
  time?: string;
}

export const notificationSettings: NotificationSetting[] = [
  {
    id: "morning-checkin",
    title: "Morning Check-in",
    description: "Daily reminder to log your mood",
    icon: SunIcon,
    enabled: true,
    time: "09:00",
  },
  {
    id: "evening-reflection",
    title: "Evening Reflection",
    description: "Wind down with a journal prompt",
    icon: MoonIcon,
    enabled: true,
    time: "20:00",
  },
  {
    id: "weekly-summary",
    title: "Weekly Summary",
    description: "Get insights on your weekly progress",
    icon: CalendarIcon,
    enabled: true,
  },
  {
    id: "wellness-tips",
    title: "Wellness Tips",
    description: "Receive helpful mental health tips",
    icon: HeartIcon,
    enabled: false,
  },
  {
    id: "journal-reminder",
    title: "Journal Reminder",
    description: "Remember to write in your journal",
    icon: NotebookIcon,
    enabled: true,
    time: "21:00",
  },
];

export interface PrivacyItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  type: "toggle" | "action";
  danger?: boolean;
}

export const privacyItems: PrivacyItem[] = [
  {
    id: "anonymous-profile",
    title: "Anonymous Profile",
    description: "Hide your identity in the community",
    icon: EyeSlashIcon,
    type: "toggle",
  },
  {
    id: "data-encryption",
    title: "Data Encryption",
    description: "Your data is encrypted at rest",
    icon: LockKeyIcon,
    type: "toggle",
  },
  {
    id: "activity-visible",
    title: "Activity Visible",
    description: "Allow others to see your activity status",
    icon: UserIcon,
    type: "toggle",
  },
  {
    id: "download-data",
    title: "Download My Data",
    description: "Export all your personal data",
    icon: DownloadIcon,
    type: "action",
  },
  {
    id: "delete-account",
    title: "Delete Account",
    description: "Permanently delete your account and data",
    icon: TrashIcon,
    type: "action",
    danger: true,
  },
];

export interface TextSizeOption {
  id: string;
  label: string;
  size: string;
  example: string;
}

export const textSizeOptions: TextSizeOption[] = [
  { id: "small", label: "Small", size: "text-sm", example: "14px" },
  { id: "medium", label: "Medium", size: "text-base", example: "16px" },
  { id: "large", label: "Large", size: "text-lg", example: "18px" },
  { id: "extra-large", label: "Extra Large", size: "text-xl", example: "20px" },
];

// ============================================================
// TOOLS PAGE DATA
// ============================================================

export const toolCategories = [
  "All",
  "Mindfulness",
  "Relaxation",
  "Cognitive",
  "Physical",
];

export interface WellnessTool {
  id: string;
  title: string;
  description: string;
  type: "audio" | "video";
  duration: string;
  image: string;
  href: string;
}

export const wellnessTools: WellnessTool[] = [
  {
    id: "square-breathing",
    title: "Square Breathing",
    description: "Reduce anxiety with box breathing.",
    type: "audio",
    duration: "5 min",
    image: "/squarebreathing.png",
    href: "/tools/breathing",
  },
  {
    id: "muscle-relaxation",
    title: "Muscle Relaxation",
    description: "Release tension from your body.",
    type: "video",
    duration: "15 min",
    image: "/musclerelaxation.png",
    href: "/tools/muscle-relaxation",
  },
];

export interface MuscleGroup {
  id: number;
  name: string;
  duration: number;
  instruction: string;
}

export const muscleGroups: MuscleGroup[] = [
  {
    id: 1,
    name: "Hands & Arms",
    duration: 60,
    instruction:
      "Clench your fists tightly, hold for 5 seconds, then release slowly.",
  },
  {
    id: 2,
    name: "Shoulders",
    duration: 45,
    instruction:
      "Raise your shoulders toward your ears, hold, then drop them down.",
  },
  {
    id: 3,
    name: "Face",
    duration: 30,
    instruction:
      "Scrunch your face tightly, including forehead and jaw, then relax.",
  },
  {
    id: 4,
    name: "Chest & Back",
    duration: 60,
    instruction:
      "Take a deep breath, hold it while tensing your chest, then exhale slowly.",
  },
  {
    id: 5,
    name: "Abdomen",
    duration: 45,
    instruction:
      "Tighten your stomach muscles as if bracing for impact, then release.",
  },
  {
    id: 6,
    name: "Legs & Feet",
    duration: 60,
    instruction:
      "Curl your toes and tense your leg muscles, hold, then relax completely.",
  },
];

export interface BreathingStep {
  title: string;
  desc: string;
}

export const breathingSteps: BreathingStep[] = [
  { title: "Inhale", desc: "Slowly breathe in for 4 seconds" },
  { title: "Hold", desc: "Gently hold your breath for 4 seconds" },
  { title: "Exhale", desc: "Slowly release for 4 seconds" },
  { title: "Rest", desc: "Pause for 4 seconds before next cycle" },
];

// ============================================================
// JOURNAL PAGE DATA
// ============================================================

export interface JournalEntry {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  mood: "neutral" | "satisfied" | "sad" | "happy";
}

export const journalEntries: JournalEntry[] = [
  {
    id: 1,
    date: "Today, 9:30 AM",
    title: "Morning Reflection",
    excerpt:
      "Woke up feeling a bit anxious about the presentation today, but the breathing exercise helped...",
    mood: "neutral",
  },
  {
    id: 2,
    date: "Yesterday, 8:45 PM",
    title: "Grateful Heart",
    excerpt:
      "Spent time with family and enjoyed a quiet dinner. Feeling much better than this morning.",
    mood: "satisfied",
  },
];

// ============================================================
// GOALS PAGE DATA
// ============================================================

export interface GoalInspiration {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  color: string;
  bg: string;
}

export const goalInspirations: GoalInspiration[] = [
  {
    title: "Hydrate",
    icon: DropIcon,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Walk",
    icon: FootprintsIcon,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    title: "Meditate",
    icon: BrainIcon,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

// ============================================================
// CRISIS PAGE DATA
// ============================================================

export interface EmergencyContact {
  name: string;
  role: string;
  phone: string;
}

export const emergencyContact: EmergencyContact = {
  name: "Dr. Emily Chen",
  role: "Therapist",
  phone: "5550123",
};

export const crisisHotlines = {
  nationalHotline: {
    number: "988",
    description: "Available 24/7, Confidential",
  },
  textSupport: {
    number: "741741",
    keyword: "HOME",
  },
};
