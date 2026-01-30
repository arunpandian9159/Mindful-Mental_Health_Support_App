import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Zod schema for validation
const ReminderSettingsSchema = z.object({
  dailyCheckIn: z.boolean().optional(),
  checkInTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)")
    .optional(),
  journalReminder: z.boolean().optional(),
  journalTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)")
    .optional(),
  moodTracking: z.boolean().optional(),
  moodTrackingFrequency: z.enum(["daily", "twice", "thrice"]).optional(),
  weeklyReport: z.boolean().optional(),
  reportDay: z.string().optional(),
});

interface ReminderSettings {
  dailyCheckIn: boolean;
  checkInTime: string;
  journalReminder: boolean;
  journalTime: string;
  moodTracking: boolean;
  moodTrackingFrequency: "daily" | "twice" | "thrice";
  weeklyReport: boolean;
  reportDay: string;
}

// Mock database for reminders
let reminderSettings: ReminderSettings = {
  dailyCheckIn: true,
  checkInTime: "09:00",
  journalReminder: true,
  journalTime: "20:00",
  moodTracking: true,
  moodTrackingFrequency: "daily",
  weeklyReport: true,
  reportDay: "sunday",
};

export async function GET() {
  return NextResponse.json({
    success: true,
    data: reminderSettings,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body against schema
    const validationResult = ReminderSettingsSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request body",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // Safely merge validated data into settings
    reminderSettings = {
      ...reminderSettings,
      ...validationResult.data,
    };

    return NextResponse.json({
      success: true,
      message: "Reminder settings updated successfully",
      data: reminderSettings,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update reminder settings",
      },
      { status: 400 },
    );
  }
}

export async function DELETE() {
  // Reset to defaults
  reminderSettings = {
    dailyCheckIn: true,
    checkInTime: "09:00",
    journalReminder: true,
    journalTime: "20:00",
    moodTracking: true,
    moodTrackingFrequency: "daily",
    weeklyReport: true,
    reportDay: "sunday",
  };

  return NextResponse.json({
    success: true,
    message: "Reminder settings reset to defaults",
    data: reminderSettings,
  });
}
