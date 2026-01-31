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
  ShieldIcon,
  HandHeartIcon,
  BellIcon,
  StarIcon,
  ChartLineUpIcon,
  ChatCircleIcon,
  PillIcon,
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
  description:
    "Reset your focus and calm your mind with this guided mindfulness practice.",
  duration: "5 MIN",
  image: "/squarebreathing.jpeg",
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

export interface CommunityCategory {
  id: string;
  label: string;
  icon: Icon;
  color: string;
  bg: string;
}

export const communityCategories: CommunityCategory[] = [
  {
    id: "recovery",
    label: "Recovery",
    icon: HandHeartIcon,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    id: "coping",
    label: "Coping",
    icon: ShieldIcon,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "support",
    label: "Support",
    icon: UsersIcon,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "mindfulness",
    label: "Mindfulness",
    icon: FlowerLotusIcon,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export interface CommunityPost {
  id: string;
  author: string;
  time: string;
  category: string;
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
    category: "Coping",
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
    category: "Mindfulness",
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
    category: "Support",
    title: "Feeling a bit low today, looking for some encouragement.",
    content:
      "Woke up with heavy thoughts. Any kind words would be appreciated.",
    bg: "bg-purple-50",
    likes: 12,
    comments: 4,
  },
  {
    id: "#821",
    author: "Member #821",
    time: "3h ago",
    category: "Recovery",
    title: "Celebrated 30 days of consistent recovery today.",
    content:
      "Taking it one day at a time. The small wins really do add up over time.",
    bg: "bg-rose-50",
    likes: 24,
    comments: 8,
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
    image: "/squarebreathing.jpeg",
    href: "/tools/breathing",
  },
  {
    id: "muscle-relaxation",
    title: "Muscle Relaxation",
    description: "Release tension from your body.",
    type: "video",
    duration: "15 min",
    image: "/musclerelaxation.jpeg",
    href: "/tools/muscle-relaxation",
  },
  {
    id: "grounding-5-4-3-2-1",
    title: "Grounding-5 4 3 2 1",
    description: "Quickly calm your mind using your senses.",
    type: "audio",
    duration: "5 min",
    image: "/Grounding5-4-3-2-1.jpeg",
    href: "/tools/grounding-54321",
  },
  {
    id: "body-scan-meditation",
    title: "Body Scan Meditation",
    description: "Release physical tension and stress.",
    type: "audio",
    duration: "12 min",
    image: "/BodyScanMeditation.jpeg",
    href: "/tools/body-scan",
  },
  {
    id: "thought-challenging",
    title: "Thought Challenging",
    description: "Identify and reframe negative thoughts.",
    type: "audio",
    duration: "10 min",
    image: "/ThoughtChallenging.jpeg",
    href: "/tools/thought-challenge",
  },
  {
    id: "gratitude-journaling",
    title: "Gratitude Journaling",
    description: "Shift your focus toward the positive.",
    type: "audio",
    duration: "5 min",
    image: "/GratitudeJournaling.jpeg",
    href: "/tools/gratitude",
  },
  {
    id: "box-breathing-4-4-4-4",
    title: "Box Breathing (4-4-4-4)",
    description: "Advanced rhythm for deep calm.",
    type: "audio",
    duration: "4 min",
    image: "/BoxBreathing4-4-4-4.jpeg",
    href: "/tools/box-breathing",
  },
  {
    id: "mindful-walking",
    title: "Mindful Walking",
    description: "Meditation in gentle movement.",
    type: "audio",
    duration: "15 min",
    image: "/MindfulWalking.jpeg",
    href: "/tools/walking",
  },
  {
    id: "worry-time",
    title: "Worry Time",
    description: "Contain your worries to a set time.",
    type: "audio",
    duration: "15 min",
    image: "/WorryTime.jpeg",
    href: "/tools/worry-time",
  },
  {
    id: "self-compassion",
    title: "Self-Compassion",
    description: "Be kind to yourself in tough times.",
    type: "audio",
    duration: "5 min",
    image: "/Self-Compassion.jpeg",
    href: "/tools/self-compassion",
  },
  {
    id: "stop-technique",
    title: "STOP Technique",
    description: "Pause before you react to stress.",
    type: "audio",
    duration: "2 min",
    image: "/STOPTechnique.jpeg",
    href: "/tools/stop-technique",
  },
  {
    id: "metta-meditation",
    title: "Metta Meditation",
    description: "Build compassion for self and others.",
    type: "audio",
    duration: "10 min",
    image: "/MettaMeditation.jpeg",
    href: "/tools/metta",
  },
  {
    id: "behavioral-activation",
    title: "Behavioral Activation",
    description: "Plan activities to boost your mood.",
    type: "audio",
    duration: "15 min",
    image: "/BehavioralActivation.jpeg",
    href: "/tools/behavior-activation",
  },
  {
    id: "ice-cube-grounding",
    title: "Ice Cube Grounding",
    description: "Intense physical grounding for panic.",
    type: "audio",
    duration: "3 min",
    image: "/IceCubeGrounding.jpeg",
    href: "/tools/ice-grounding",
  },
  {
    id: "values-clarification",
    title: "Values Clarification",
    description: "Find meaning in what matters most.",
    type: "audio",
    duration: "20 min",
    image: "/ValuesClarification.jpeg",
    href: "/tools/values",
  },
  {
    id: "safe-place-visuals",
    title: "Safe Place Visuals",
    description: "Create a mental refuge of calm.",
    type: "audio",
    duration: "10 min",
    image: "/SafePlaceVisual.jpeg",
    href: "/tools/safe-place",
  },
  {
    id: "journaling-prompts",
    title: "Journaling Prompts",
    description: "Prompts to process deep emotions.",
    type: "audio",
    duration: "15 min",
    image: "/JournalingPrompt.jpeg",
    href: "/journal",
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
// USER GOALS DATA
// ============================================================

export interface UserGoal {
  id: string;
  title: string;
  targetCount: number;
  currentCount: number;
  unit: string;
  frequency: "daily" | "weekly";
  category: string;
  icon: Icon;
  color: string;
  bg: string;
  isCompleted: boolean;
  history: { date: string; completed: boolean }[];
}

export const userGoals: UserGoal[] = [
  {
    id: "goal_001",
    title: "Drink Water",
    targetCount: 8,
    currentCount: 5,
    unit: "cups",
    frequency: "daily",
    category: "Physical",
    icon: DropIcon,
    color: "text-blue-500",
    bg: "bg-blue-50",
    isCompleted: false,
    history: [
      { date: "2026-01-29", completed: true },
      { date: "2026-01-28", completed: true },
      { date: "2026-01-27", completed: false },
    ],
  },
  {
    id: "goal_002",
    title: "Morning Meditation",
    targetCount: 10,
    currentCount: 10,
    unit: "mins",
    frequency: "daily",
    category: "Mindfulness",
    icon: BrainIcon,
    color: "text-orange-500",
    bg: "bg-orange-50",
    isCompleted: true,
    history: [
      { date: "2026-01-29", completed: true },
      { date: "2026-01-28", completed: true },
      { date: "2026-01-27", completed: true },
    ],
  },
  {
    id: "goal_003",
    title: "Daily Journal",
    targetCount: 1,
    currentCount: 1,
    unit: "session",
    frequency: "daily",
    category: "Reflection",
    icon: NotebookIcon,
    color: "text-purple-500",
    bg: "bg-purple-50",
    isCompleted: true,
    history: [
      { date: "2026-01-29", completed: true },
      { date: "2026-01-28", completed: false },
      { date: "2026-01-27", completed: true },
    ],
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

// ============================================================
// MEDICATION REMINDERS DATA
// ============================================================

export interface CommonMedication {
  id: string;
  name: string;
  category: string;
  commonDosages: string[];
  frequency: string;
  bestTakenWith: string;
  commonSideEffects: string[];
  warningPeriod: number;
}

export const commonMedications: CommonMedication[] = [
  {
    id: "med_001",
    name: "Sertraline (Zoloft)",
    category: "SSRI",
    commonDosages: ["25mg", "50mg", "100mg", "150mg", "200mg"],
    frequency: "Once daily",
    bestTakenWith: "Food or without",
    commonSideEffects: ["Nausea", "Dry mouth", "Drowsiness", "Insomnia"],
    warningPeriod: 7,
  },
  {
    id: "med_002",
    name: "Escitalopram (Lexapro)",
    category: "SSRI",
    commonDosages: ["5mg", "10mg", "20mg"],
    frequency: "Once daily",
    bestTakenWith: "Morning or evening",
    commonSideEffects: ["Nausea", "Fatigue", "Dry mouth"],
    warningPeriod: 7,
  },
  {
    id: "med_003",
    name: "Fluoxetine (Prozac)",
    category: "SSRI",
    commonDosages: ["10mg", "20mg", "40mg", "60mg"],
    frequency: "Once daily",
    bestTakenWith: "Morning recommended",
    commonSideEffects: ["Insomnia", "Anxiety", "Nausea"],
    warningPeriod: 7,
  },
  {
    id: "med_004",
    name: "Bupropion (Wellbutrin)",
    category: "NDRI",
    commonDosages: ["100mg", "150mg", "300mg"],
    frequency: "Once or twice daily",
    bestTakenWith: "Morning to avoid insomnia",
    commonSideEffects: ["Dry mouth", "Insomnia", "Headache"],
    warningPeriod: 7,
  },
  {
    id: "med_005",
    name: "Venlafaxine (Effexor)",
    category: "SNRI",
    commonDosages: ["37.5mg", "75mg", "150mg", "225mg"],
    frequency: "Once or twice daily",
    bestTakenWith: "With food",
    commonSideEffects: ["Nausea", "Dizziness", "Dry mouth"],
    warningPeriod: 7,
  },
];

export interface UserMedication {
  id: string;
  medicationId: string;
  customName: string;
  dosage: string;
  prescribedBy: string;
  startDate: string;
  endDate: string | null;
  reminderTimes: string[];
  pillsPerDose: number;
  currentSupply: number;
  pillsPerBottle: number;
  refillDate: string;
  pharmacy: string;
  pharmacyPhone: string;
  prescriptionNumber: string;
  autoRefill: boolean;
  notes: string;
}

export const userMedications: UserMedication[] = [
  {
    id: "user_med_001",
    medicationId: "med_001",
    customName: "My morning pill",
    dosage: "50mg",
    prescribedBy: "Dr. Smith",
    startDate: "2025-01-15",
    endDate: null,
    reminderTimes: ["08:00"],
    pillsPerDose: 1,
    currentSupply: 25,
    pillsPerBottle: 30,
    refillDate: "2026-02-10",
    pharmacy: "CVS Pharmacy",
    pharmacyPhone: "555-0123",
    prescriptionNumber: "RX123456",
    autoRefill: false,
    notes: "Take with breakfast",
  },
];

export interface DoseHistory {
  id: string;
  medicationId: string;
  scheduledTime: string;
  takenTime: string | null;
  status: "taken" | "missed";
  notes: string | null;
}

export const doseHistory: DoseHistory[] = [
  {
    id: "dose_001",
    medicationId: "user_med_001",
    scheduledTime: "2026-01-30T08:00:00Z",
    takenTime: "2026-01-30T08:15:00Z",
    status: "taken",
    notes: "Felt fine",
  },
  {
    id: "dose_002",
    medicationId: "user_med_001",
    scheduledTime: "2026-01-29T08:00:00Z",
    takenTime: null,
    status: "missed",
    notes: "Forgot - was rushing",
  },
  {
    id: "dose_003",
    medicationId: "user_med_001",
    scheduledTime: "2026-01-28T08:00:00Z",
    takenTime: "2026-01-28T08:05:00Z",
    status: "taken",
    notes: null,
  },
];

export const refillAlerts = [
  {
    type: "low_supply",
    message: "You have 7 days of medication left. Time to request a refill.",
    actionRequired: true,
    priority: "medium",
  },
  {
    type: "critical_supply",
    message: "Only 3 days of medication remaining! Request refill immediately.",
    actionRequired: true,
    priority: "high",
  },
  {
    type: "refill_ready",
    message: "Your refill is ready for pickup at CVS Pharmacy.",
    actionRequired: false,
    priority: "low",
  },
];

// ============================================================
// EDUCATIONAL HUB DATA
// ============================================================

export interface Article {
  id: string;
  title: string;
  category: string;
  readingTime: number;
  author: string;
  datePublished: string;
  tags: string[];
  summary: string;
  content: string;
  keyTakeaways: string[];
  relatedArticles: string[];
}

export const articles: Article[] = [
  {
    id: "article_001",
    title: "Understanding Depression: More Than Just Sadness",
    category: "Understanding Depression",
    readingTime: 5,
    author: "Dr. Sarah Mitchell, Clinical Psychologist",
    datePublished: "2025-12-15",
    tags: ["Basics", "Symptoms", "Science"],
    summary:
      "Depression is a complex medical condition affecting mood, energy, and daily functioning. Learn about the different types of depression and how it affects the brain.",
    content:
      "Depression is more than feeling sad or going through a rough patch. It's a serious mental health condition that requires understanding, treatment, and a good amount of self-compassion...\n\nWhat makes depression different from normal sadness?\n\nWhile everyone feels sad sometimes, depression is persistent and interferes with daily life. Key differences include:\n\n• Duration: Symptoms last for weeks or months, not just days\n• Intensity: Feelings are more severe than typical sadness\n• Impact: Affects work, relationships, and basic self-care\n• Physical symptoms: Changes in sleep, appetite, and energy\n\nThe brain chemistry behind depression:\n\nDepression involves changes in neurotransmitters like serotonin, dopamine, and norepinephrine. These chemical messengers affect mood, motivation, and pleasure. Understanding this helps reduce stigma - depression is a medical condition, not a personal weakness...",
    keyTakeaways: [
      "Depression is a medical condition, not a character flaw",
      "It affects both mind and body",
      "Treatment is available and effective",
      "Recovery is possible with proper support",
    ],
    relatedArticles: ["article_002", "article_003"],
  },
  {
    id: "article_002",
    title: "The Science of Small Wins: Why Tiny Goals Matter",
    category: "Self-Care",
    readingTime: 4,
    author: "Dr. James Chen, Behavioral Therapist",
    datePublished: "2026-01-10",
    tags: ["Goals", "Motivation", "CBT"],
    summary:
      "When depression makes everything feel impossible, breaking tasks into microscopic steps can create momentum. Learn the psychology behind small victories.",
    content:
      "When you're experiencing depression, even simple tasks can feel overwhelming. The idea of 'just take a shower' or 'go for a run' might seem impossible. This is where the power of small wins comes in.\n\nWhy small goals work:\n\n1. They're achievable: Instead of 'exercise for 30 minutes,' try 'put on workout clothes'\n2. They build momentum: Each completion releases dopamine, motivating the next step\n3. They reduce overwhelm: Breaking tasks down makes them less intimidating\n4. They provide proof: Each small win is evidence you CAN do things\n\nExamples of micro-goals:\n\n• Instead of 'clean the house' → 'clear one surface'\n• Instead of 'eat healthy' → 'eat one piece of fruit'\n• Instead of 'reconnect with friends' → 'send one text message'\n• Instead of 'get outside' → 'stand by an open window for 2 minutes'\n\nThe key is celebrating these wins without judgment. If all you did today was brush your teeth, that's a victory...",
    keyTakeaways: [
      "Tiny goals are still goals - they count",
      "Momentum builds from small actions",
      "Progress isn't linear, and that's okay",
      "Celebrate every step forward",
    ],
    relatedArticles: ["article_004", "article_006"],
  },
  {
    id: "article_003",
    title: "Medication and Therapy: Finding What Works for You",
    category: "Treatment Options",
    readingTime: 7,
    author: "Dr. Amanda Rodriguez, Psychiatrist",
    datePublished: "2025-11-20",
    tags: ["Medication", "Therapy", "Treatment"],
    summary:
      "Explore the different treatment options for depression, from therapy to medication to lifestyle changes. There's no one-size-fits-all approach.",
    content:
      "One of the most common questions people ask is: 'Do I need medication, therapy, or both?' The honest answer is: it depends on you.\n\nTypes of therapy for depression:\n\n• Cognitive Behavioral Therapy (CBT): Focuses on changing negative thought patterns\n• Interpersonal Therapy (IPT): Addresses relationship patterns\n• Dialectical Behavior Therapy (DBT): Teaches emotional regulation skills\n• Acceptance and Commitment Therapy (ACT): Focuses on values and mindfulness\n\nHow antidepressants work:\n\nAntidepressants adjust brain chemistry to improve mood. Common types include:\n\n• SSRIs (like Prozac, Zoloft): Most commonly prescribed, fewer side effects\n• SNRIs (like Effexor, Cymbalta): Affect both serotonin and norepinephrine\n• NDRIs (like Wellbutrin): Can help with energy and focus\n• Atypical antidepressants: Different mechanisms for specific symptoms\n\nWhat the research shows:\n\n• Therapy alone: Effective for mild to moderate depression\n• Medication alone: Can be effective but recurrence rates are higher\n• Combined approach: Most effective for moderate to severe depression\n\nImportant to know:\n\n• It may take 4-6 weeks to feel medication effects\n• Finding the right medication may require trying different options\n• Side effects often improve after the first few weeks\n• Never stop medication suddenly - always taper with medical guidance...",
    keyTakeaways: [
      "Multiple treatment options exist",
      "Combination therapy is often most effective",
      "Finding the right approach takes time",
      "Work closely with healthcare providers",
    ],
    relatedArticles: ["article_001", "article_008"],
  },
  {
    id: "article_004",
    title: "Sleep and Depression: The Complex Relationship",
    category: "Self-Care",
    readingTime: 6,
    author: "Dr. Lisa Thompson, Sleep Specialist",
    datePublished: "2025-12-28",
    tags: ["Sleep", "Health", "Self-Care"],
    summary:
      "Depression disrupts sleep, and poor sleep worsens depression. Learn strategies to break this cycle and improve your rest.",
    content:
      "The relationship between sleep and depression is bidirectional - each affects the other. About 75% of people with depression experience insomnia.\n\nHow depression affects sleep:\n\n• Difficulty falling asleep (racing thoughts, anxiety)\n• Waking up frequently during the night\n• Early morning awakening and inability to fall back asleep\n• Hypersomnia (sleeping too much but still feeling tired)\n\nHow poor sleep worsens depression:\n\n• Reduces emotional regulation ability\n• Impairs concentration and decision-making\n• Decreases motivation and energy\n• Affects hormone balance and immune function\n\nSleep hygiene strategies:\n\n1. Consistent schedule: Go to bed and wake at the same time daily\n2. Create a wind-down routine: 30-60 minutes of calm activities before bed\n3. Optimize environment: Cool (65-68°F), dark, and quiet\n4. Limit screens: Blue light affects melatonin 1-2 hours before sleep\n5. Watch caffeine and alcohol: Both interfere with sleep quality\n\nWhen to seek help:\n\nIf sleep problems persist despite good sleep hygiene, talk to your doctor. Sleep disorders like sleep apnea or restless leg syndrome can mimic or worsen depression symptoms...",
    keyTakeaways: [
      "Sleep and mood are interconnected",
      "Consistent sleep schedule helps",
      "Environmental factors matter",
      "Professional help available for persistent issues",
    ],
    relatedArticles: ["article_002", "article_007"],
  },
  {
    id: "article_005",
    title: "When to Seek Emergency Help: Crisis Resources",
    category: "Crisis Support",
    readingTime: 3,
    author: "National Crisis Center",
    datePublished: "2026-01-15",
    tags: ["Crisis", "Safety", "Emergency"],
    summary:
      "Know the warning signs of a mental health crisis and where to get immediate help. You don't have to face these moments alone.",
    content:
      "If you're having thoughts of suicide or self-harm, immediate help is available. You are not alone, and these feelings can pass with proper support.\n\nImmediate warning signs:\n\n• Talking about wanting to die or hurt oneself\n• Looking for ways to end one's life\n• Talking about feeling hopeless or having no reason to live\n• Expressing unbearable pain or feeling trapped\n• Talking about being a burden to others\n• Increasing use of alcohol or drugs\n• Withdrawing from friends and activities\n• Extreme mood swings\n• Giving away possessions\n\nImmediate crisis resources:\n\n• 988 Suicide & Crisis Lifeline: Call or text 988 (24/7, free, confidential)\n• Crisis Text Line: Text HOME to 741741\n• Emergency Services: Call 911 or go to nearest emergency room\n• SAMHSA National Helpline: 1-800-662-4357 (substance abuse)\n\nWhat happens when you call:\n\n• Trained counselor answers immediately\n• They listen without judgment\n• They help you work through the crisis\n• They can connect you to local resources\n• Your call is confidential\n\nFor safety planning:\n\nCreate a list of:\n1. Warning signs you're entering crisis\n2. Coping strategies that help\n3. People who can support you\n4. Professionals to contact\n5. Ways to make environment safer\n\nRemember: Suicidal thoughts are symptoms of depression, not character flaws. They can be treated. Reaching out is strength, not weakness.",
    keyTakeaways: [
      "Crisis help is available 24/7",
      "You are not a burden - you matter",
      "These feelings can pass with support",
      "Reaching out is an act of courage",
    ],
    relatedArticles: ["article_001", "article_003"],
  },
];

export interface RecoveryStory {
  id: string;
  title: string;
  author: string;
  location: string;
  duration: string;
  tags: string[];
  readingTime: number;
  excerpt: string;
  story: string;
  keyMoments: string[];
  adviceForOthers: string[];
}

export const recoveryStories: RecoveryStory[] = [
  {
    id: "story_001",
    title: "From Rock Bottom to Rediscovering Joy",
    author: "Marcus, 34",
    location: "Seattle, WA",
    duration: "3 years into recovery",
    tags: ["Medication", "Therapy", "Male perspective", "Work"],
    readingTime: 6,
    excerpt:
      "I didn't realize how deep I was until I couldn't get out of bed for a week. Here's how I found my way back.",
    story:
      "Three years ago, I was a shell of myself. I'd wake up exhausted, drag myself through work, and collapse back into bed. Everything felt pointless. I'd lost interest in my hobbies, stopped calling friends, and convinced myself I was just 'going through a phase.'\n\nThe turning point came when I missed a week of work. Not because I was physically sick, but because I literally couldn't get out of bed. My boss called, concerned. My mom called, worried. I knew something was seriously wrong.\n\nSeeking help:\n\nCalling a therapist was the hardest phone call I've ever made. I felt like I was admitting defeat. My first session, I mostly cried. But Dr. Patel just listened. No judgment. No quick fixes. Just... presence.\n\nShe explained that depression was affecting my brain chemistry - it wasn't weakness or laziness. That single conversation lifted so much shame.\n\nThe medication journey:\n\nI was hesitant about antidepressants. I'd heard horror stories about side effects. But Dr. Patel helped me understand it was like wearing glasses for your brain - just helping it function better.\n\nThe first medication (Zoloft) didn't work for me. The second (Wellbutrin) made me anxious. The third (Lexapro) was the one. It took about 6 weeks, but I started noticing small changes:\n\n• I could focus at work again\n• Food started tasting good\n• I laughed at a joke on TV (first time in months)\n\nTherapy breakthroughs:\n\nCBT taught me to recognize my negative thought patterns. I learned that my brain was lying to me when it said 'everyone would be better off without you' or 'you're worthless.'\n\nWe worked on:\n• Challenging catastrophic thinking\n• Building a routine (even when I didn't feel like it)\n• Identifying triggers\n• Practicing self-compassion\n\nThe lifestyle changes:\n\nI started small:\n• 5-minute walks became 20-minute walks\n• Frozen dinners became simple home-cooked meals\n• Isolation became coffee with one friend per week\n\nWhere I am now:\n\nI'm not 'cured' - depression is something I manage. I still have hard days. But now:\n\n• I have tools to cope\n• I recognize warning signs early\n• I don't feel ashamed asking for help\n• I've rebuilt relationships\n• Work is fulfilling again\n• I feel things - joy, sadness, excitement - instead of numbness\n\nWhat I wish I'd known:\n\n1. It's not linear - I had setbacks, and that's normal\n2. The right medication/therapy combo takes time to find\n3. Small actions compound into big changes\n4. You're not weak for needing help - you're brave for seeking it\n5. Recovery is possible, even when it feels impossible\n\nIf you're reading this from that dark place I was in: please hold on. The version of you that can feel joy again exists. I'm living proof.",
    keyMoments: [
      "Recognizing I needed help",
      "First therapy session",
      "Finding the right medication",
      "First genuine laugh after months",
      "Rebuilding my first friendship",
    ],
    adviceForOthers: [
      "Don't wait for rock bottom - seek help when you first notice symptoms",
      "Be patient with the medication process",
      "Therapy is work, but it's worth it",
      "Celebrate tiny victories",
      "Recovery isn't linear - setbacks don't erase progress",
    ],
  },
  {
    id: "story_002",
    title: "A Mother's Journey: Managing Depression While Raising Kids",
    author: "Jennifer, 41",
    location: "Austin, TX",
    duration: "5 years into recovery",
    tags: ["Motherhood", "Therapy", "Support groups", "Female perspective"],
    readingTime: 7,
    excerpt:
      "Postpartum depression turned into something more. Learning to be a mom while healing myself was the hardest thing I've ever done.",
    story:
      "When my second child was born, I expected the same joy I felt with my first. Instead, I felt... nothing. Then the anxiety came. Then the intrusive thoughts. Then the guilt for not feeling how a 'good mother' should feel.\n\nThe shame spiral:\n\nI had a beautiful family, a supportive partner, a comfortable home. What right did I have to be depressed? This thinking kept me silent for almost a year. I smiled through playdates while dying inside.\n\nThe moment everything changed:\n\nOne afternoon, my 5-year-old asked, 'Mommy, why are you always so sad?' My heart shattered. I was failing the people I loved most, and they could see it.\n\nThat night, I told my husband everything. I expected judgment. Instead, he held me and said, 'Let's get you help tomorrow.'\n\nFinding the right support:\n\nI started therapy and joined a support group for moms with depression. Hearing other mothers share similar experiences was life-changing. I wasn't alone. I wasn't a bad mom. I was a good mom dealing with an illness.\n\nMy therapist specialized in maternal mental health. She taught me:\n• Self-care isn't selfish - it's necessary\n• Asking for help makes you strong, not weak\n• Your kids need a healing mom, not a perfect one\n• It's okay to not enjoy every moment of motherhood\n\nBuilding my support village:\n\nI learned to:\n• Accept help from family and friends\n• Be honest about my struggles\n• Take breaks without guilt\n• Prioritize sleep (even if it meant asking for help)\n\nThe medication decision:\n\nI was terrified of taking antidepressants while breastfeeding. My doctor explained the research: untreated depression posed more risks than the medication. The relief I felt after starting Zoloft was immense.\n\nCreating sustainable routines:\n\nWith kids, elaborate self-care isn't realistic. I focused on:\n• 10-minute morning meditation (while kids watched cartoons)\n• Walking with the stroller (exercise + fresh air)\n• One text per day to a friend (connection)\n• Bedtime was MY time (even if just 30 minutes)\n\nThe transformation:\n\nRecovery has been gradual but real:\n• I genuinely enjoy time with my kids now\n• I can be present instead of lost in dark thoughts\n• I model mental health care for my children\n• My marriage is stronger (we communicate better)\n• I've reconnected with parts of myself I thought I'd lost\n\nWhat I tell other struggling moms:\n\n1. Postpartum depression can start anytime in the first year (or beyond)\n2. Maternal mental health matters as much as physical health\n3. Your kids benefit when you take care of yourself\n4. Support groups are game-changers\n5. There's no shame in medication\n6. Recovery looks different for everyone\n7. You're not alone, even when it feels that way\n\nTo any mom reading this while struggling: You are enough. Your kids are lucky to have you. Getting help doesn't make you weak - it makes you wise. I promise, it gets better.",
    keyMoments: [
      "My daughter asking why I was always sad",
      "Telling my husband the truth",
      "First support group meeting",
      "Starting medication despite fears",
      "First day I felt genuine joy with my kids",
    ],
    adviceForOthers: [
      "Don't wait until you're in crisis",
      "Find a therapist who specializes in maternal mental health",
      "Support groups connect you with people who understand",
      "Self-care is essential, not selfish",
      "Model mental health care for your children",
    ],
  },
  {
    id: "story_003",
    title: "College, Depression, and Finding My Way",
    author: "Aisha, 22",
    location: "Boston, MA",
    duration: "2 years into recovery",
    tags: ["College", "Young adult", "Peer support", "Academic pressure"],
    readingTime: 5,
    excerpt:
      "Depression hit during sophomore year. Between therapy, medication, and campus resources, I not only survived - I learned to thrive.",
    story:
      "Sophomore year was supposed to be exciting. Instead, I stopped going to classes, ghosted my friends, and spent entire weekends in bed. My grades tanked. My roommate was concerned. I was... nothing. Just numb.\n\nThe wake-up call:\n\nFailing two midterms in one week forced me to face reality. I couldn't ignore this anymore. I dragged myself to campus counseling services.\n\nNavigating campus resources:\n\nMy university's mental health center was overbooked (3-week wait), but they connected me with:\n• A crisis counselor for immediate support\n• Online therapy through campus partnership (TalkSpace)\n• A peer support group\n• Academic accommodations office\n\nThe academic accommodations:\n\nI didn't know this existed! I got:\n• Extended deadlines for assignments\n• Ability to take exams in a private room\n• Excused absences with doctor's notes\n• Reduced course load without penalty\n\nThis took SO much pressure off.\n\nFinding my people:\n\nThe peer support group changed everything. Meeting other students dealing with depression made me feel less alone. We normalized talking about mental health. We studied together, checked in on each other, and celebrated wins together.\n\nOne friend from group, Maya, became my accountability partner. We'd text each morning: 'What's your one goal today?' Even if it was 'attend one class' or 'eat breakfast,' we celebrated it.\n\nTherapy insights:\n\nMy therapist helped me understand perfectionism was feeding my depression. I'd set impossible standards, fail to meet them, then spiral into shame. Learning to accept 'good enough' was revolutionary.\n\nWe worked on:\n• Challenging all-or-nothing thinking\n• Building self-compassion\n• Creating realistic goals\n• Developing a routine\n\nMedication journey:\n\nI started Lexapro after a few months of therapy. I was scared of:\n• Side effects\n• Becoming a 'different person'\n• Stigma\n• Dependency\n\nReality: The medication helped clear the fog. I was still ME, just... capable of functioning. No zombie feelings. Just relief.\n\nRebuilding my life:\n\nGradually, I:\n• Started attending classes (even if late was better than absent)\n• Joined one club (outdoor adventure club - got me outside)\n• Rebuilt friendships (honest conversations about my struggles)\n• Found a major I actually cared about (switched from pre-med to psychology)\n\nWhere I am now:\n\nI'm graduating this year. My GPA recovered. I have genuine friendships. I'm applying to grad programs. I still see my therapist monthly. I still take medication. And that's okay.\n\nDepressiontaught me:\n• Grades don't define your worth\n• It's okay to change paths\n• Asking for help is strength\n• Mental health is as important as physical health\n• You can struggle and still succeed\n\nTo college students struggling:\n\n1. Use campus resources - they exist for you\n2. Talk to professors - most are understanding\n3. Find your support system\n4. It's okay to take longer to graduate\n5. Your mental health matters more than any grade\n6. This phase won't last forever\n\nYou're not failing at college. You're navigating a real illness while trying to build your future. That takes incredible strength. I see you. I believe in you.",
    keyMoments: [
      "Failing midterms forced me to get help",
      "First peer support group meeting",
      "Getting academic accommodations",
      "Switching majors to something I love",
      "Rebuilding friendship with vulnerability",
    ],
    adviceForOthers: [
      "Campus resources are there - use them",
      "Academic accommodations can save your semester",
      "Peer support groups provide understanding others can't",
      "It's okay to adjust your timeline",
      "Mental health is as important as your GPA",
    ],
  },
];
// ============================================================
// NOTIFICATIONS DATA
// ============================================================

export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "system" | "goal" | "community" | "mood" | "medication";
  isUnread: boolean;
  icon: Icon;
  color: string;
  bgColor: string;
}

export const notifications: Notification[] = [
    {
    id: "1",
    title: "Medication Low",
    description:
      "You have 7 days of medication left. Time to request a refill.",
    time: "3h ago",
    type: "medication",
    isUnread: true,
    icon: PillIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    id: "2",
    title: "Critical Supply",
    description:
      "Only 3 days of medication remaining! Request refill immediately.",
    time: "1d ago",
    type: "medication",
    isUnread: true,
    icon: PillIcon,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    id: "3",
    title: "Mood Check-in",
    description: "Time for your morning reflection. How are you feeling today?",
    time: "5m ago",
    type: "mood",
    isUnread: true,
    icon: SunIcon,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    id: "4",
    title: "Goal Reached!",
    description: "You've completed your daily hydration goal. Great job!",
    time: "2h ago",
    type: "goal",
    isUnread: true,
    icon: StarIcon,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    id: "5",
    title: "Community Love",
    description: "Someone liked your post in the Recovery circle.",
    time: "5h ago",
    type: "community",
    isUnread: false,
    icon: HeartIcon,
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    id: "6",
    title: "New Comment",
    description: "Member #492 commented on your coping strategy.",
    time: "Yesterday",
    type: "community",
    isUnread: false,
    icon: ChatCircleIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: "7",
    title: "Weekly Insight",
    description:
      "Your mood has been improving steadily this week. View summary.",
    time: "2 days ago",
    type: "mood",
    isUnread: false,
    icon: ChartLineUpIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    id: "8",
    title: "System Update",
    description: "Mindful version 2.0 is here with new wellness tools!",
    time: "1 week ago",
    type: "system",
    isUnread: false,
    icon: BellIcon,
    color: "text-gray-500",
    bgColor: "bg-gray-50 dark:bg-gray-800",
  },
  {
    id: "9",
    title: "Refill Ready",
    description: "Your refill is ready for pickup at CVS Pharmacy.",
    time: "2d ago",
    type: "medication",
    isUnread: false,
    icon: PillIcon,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
];
