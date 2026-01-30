import { NextRequest, NextResponse } from "next/server";

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

    // Validate and update settings
    reminderSettings = {
      ...reminderSettings,
      ...body,
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
