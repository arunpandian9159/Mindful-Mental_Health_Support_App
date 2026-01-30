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

export const moodChartData = [3, 5, 4, 6, 5, 7, 6];

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
