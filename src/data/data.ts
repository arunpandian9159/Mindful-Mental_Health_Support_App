import {
  Icon,
  CircleHalfIcon,
  TextTIcon,
  EarIcon,
  DropIcon,
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
  BriefcaseIcon,
  UsersIcon,
  ForkKnifeIcon,
  LeafIcon,
  FlowerLotusIcon,
  MusicNotesIcon,
  BicycleIcon,
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
    color: "text-orange-400",
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
    color: "text-green-300",
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

export const communityCategories = [
  "Recovery",
  "Coping",
  "Support",
  "Mindfulness",
];

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

// Mood color mapping for heatmap cells (Emerald scale)
export const moodColorMap: Record<number, string> = {
  0: "bg-gray-100 dark:bg-gray-800",
  1: "bg-emerald-50 dark:bg-emerald-900/10",
  2: "bg-emerald-100 dark:bg-emerald-900/20",
  3: "bg-emerald-300 dark:bg-emerald-700/40",
  4: "bg-emerald-500 dark:bg-emerald-500/60",
  5: "bg-emerald-700 dark:bg-emerald-400/80",
};

export const getMoodColor = (value: number): string => {
  return moodColorMap[value] || moodColorMap[0];
};

// Day labels for heatmap and chart
export const dayLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// Mood level labels for chart Y-axis
export const moodLevels = ["Bad", "Low", "Okay", "Good", "Great"];

// Chart data (1-5 scale) - values chosen to match the screenshot curve
export const moodChartData = [2.5, 4.2, 3.5, 4.5, 4.8, 5.0, 4.2, 3.5];

export const moodStats = {
  averageScore: 4.2,
  percentChange: "+12%",
  consistency: "85%",
  topMood: "Happy",
  entriesCount: 14,
};

export interface MoodHistoryEntry {
  id: number;
  icon: Icon;
  label: string;
  time: string;
  level: number; // 1-5
  color: string;
  bgColor: string;
}

export const moodHistory: MoodHistoryEntry[] = [
  {
    id: 1,
    icon: SmileyWinkIcon,
    label: "Feeling Great",
    time: "Today, 9:00 AM",
    level: 5,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    id: 2,
    icon: SmileyIcon,
    label: "Feeling Good",
    time: "Yesterday, 8:45 PM",
    level: 4,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 3,
    icon: SmileyBlankIcon,
    label: "Feeling Okay",
    time: "Yesterday, 1:20 PM",
    level: 3,
    color: "text-gray-400",
    bgColor: "bg-gray-100 dark:bg-gray-800",
  },
  {
    id: 4,
    icon: SmileySadIcon,
    label: "Feeling Low",
    time: "Jan 28, 4:30 PM",
    level: 1,
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
];

// Activity tags for mood logging
export interface ActivityTag {
  id: string;
  label: string;
  icon: Icon; // Changed icon type to Icon
  color: string;
  bg: string;
}

export const activityTags: ActivityTag[] = [
  {
    id: "work",
    label: "Work",
    icon: BriefcaseIcon,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "exercise",
    label: "Exercise",
    icon: BicycleIcon,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "social",
    label: "Social",
    icon: UsersIcon,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    id: "sleep",
    label: "Sleep",
    icon: MoonIcon,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    id: "food",
    label: "Food",
    icon: ForkKnifeIcon,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    id: "nature",
    label: "Nature",
    icon: LeafIcon,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "meditation",
    label: "Meditation",
    icon: FlowerLotusIcon,
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    id: "music",
    label: "Music",
    icon: MusicNotesIcon,
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
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
    title: "Account",
    icon: UserIcon,
    description: "Manage your personal information",
    type: "nav",
    key: "account",
    href: "/settings/account",
  },
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
  mood: "neutral" | "satisfied" | "sad" | "happy" | "anxious" | "productive";
  tags: string[];
}

export const journalEntries: JournalEntry[] = [
  {
    id: 1,
    date: "Today, 9:30 AM",
    title: "Morning Reflection",
    excerpt:
      "Woke up feeling a bit anxious about the presentation today, but I took some time to...",
    mood: "anxious",
    tags: ["work", "anxiety"],
  },
  {
    id: 2,
    date: "Yesterday, 8:45 PM",
    title: "Grateful Heart",
    excerpt:
      "Spent time with family and enjoyed a quiet dinner. Feeling much better than this morning.",
    mood: "happy",
    tags: ["grateful", "family"],
  },
  {
    id: 3,
    date: "Yesterday, 2:15 PM",
    title: "Deep Work Session",
    excerpt:
      "Managed to get through all the high-priority tasks today. Focus was surprisingly high.",
    mood: "productive",
    tags: ["work", "mental-clarity"],
  },
];

// ============================================================
// GOALS PAGE DATA
// ============================================================

export interface GoalInspiration {
  title: string;
  subtext: string;
  icon: Icon;
  color: string;
  bg: string;
}

export const goalInspirations: GoalInspiration[] = [
  {
    title: "Hydrate",
    subtext: "8 cups daily",
    icon: DropIcon,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Read",
    subtext: "15 mins before bed",
    icon: NotebookIcon,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "Meditate",
    subtext: "10 mins morning",
    icon: BrainIcon,
    color: "text-orange-500",
    bg: "bg-orange-50",
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
