import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mindful - Your Companion in Mental Wellness",
  description:
    "A compassionate application for mental health support and depression management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${raleway.variable} ${lora.variable} antialiased`}>
        <div className="min-h-screen bg-background-light dark:bg-background-dark shadow-2xl relative overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
