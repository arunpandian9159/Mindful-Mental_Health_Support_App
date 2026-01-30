"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  PrinterIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";

interface PrivacySectionProps {
  title: string;
  children: React.ReactNode;
}

const PrivacySection = ({ title, children }: PrivacySectionProps) => (
  <section className="mb-10 last:mb-0">
    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
      {title}
    </h2>
    <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

export default function PrivacyPolicyPage() {
  const router = useRouter();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/20 dark:border-white/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push("/onboarding/privacy")}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group"
            aria-label="Go back"
          >
            <ArrowLeftIcon
              size={24}
              className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors"
            />
          </button>

          <div className="flex items-center gap-2">
            <ShieldCheckIcon size={24} weight="fill" className="text-primary" />
            <span className="font-serif text-lg font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </span>
          </div>

          <button
            onClick={handlePrint}
            className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group print:hidden"
            aria-label="Print policy"
          >
            <PrinterIcon
              size={24}
              className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors"
            />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Your Privacy & Safety
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Last Updated: January 30, 2026
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <PrivacySection title="1. Introduction">
            <p>
              Welcome to Mindful. We are committed to protecting your personal
              information and your right to privacy. If you have any questions
              or concerns about our policy, or our practices with regards to
              your personal information, please contact us.
            </p>
            <p>
              When you use our mobile application, and more generally, use any
              of our services, we appreciate that you are trusting us with your
              personal information. We take your privacy very seriously.
            </p>
          </PrivacySection>

          <PrivacySection title="2. Information We Collect">
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the App, express an interest in obtaining
              information about us or our products and services, or otherwise
              when you contact us.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email address, and profile
                picture if provided.
              </li>
              <li>
                <strong>Health & Mood Data:</strong> Mood logs, journal entries,
                and wellness goals.
              </li>
              <li>
                <strong>Usage Data:</strong> How you interact with our tools and
                features.
              </li>
              <li>
                <strong>Device Information:</strong> Device type, OS version,
                and unique identifiers.
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection title="3. How We Use Your Information">
            <p>
              We use personal information collected via our App for a variety of
              business purposes described below. We process your personal
              information for these purposes in reliance on our legitimate
              business interests, in order to enter into or perform a contract
              with you, with your consent, and/or for compliance with our legal
              obligations.
            </p>
            <p>
              Specifically, we use your data to provide personalized mood
              insights, track your wellness progress, and ensure the security of
              your account.
            </p>
          </PrivacySection>

          <PrivacySection title="4. Data Security & Encryption">
            <p>
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process.
            </p>
            <p>
              However, despite our safeguards and efforts to secure your
              information, no electronic transmission over the Internet or
              information storage technology can be guaranteed to be 100%
              secure, so we cannot promise or guarantee that hackers,
              cybercriminals, or other unauthorized third parties will not be
              able to defeat our security and improperly collect, access, steal,
              or modify your information.
            </p>
          </PrivacySection>

          <PrivacySection title="5. Your Privacy Rights">
            <p>
              In some regions (like the EEA and UK), you have certain rights
              under applicable data protection laws. These may include the right
              (i) to request access and obtain a copy of your personal
              information, (ii) to request rectification or erasure; (iii) to
              restrict the processing of your personal information; and (iv) if
              applicable, to data portability.
            </p>
          </PrivacySection>

          <PrivacySection title="6. Contact Us">
            <p>
              If you have questions or comments about this policy, you may email
              us at:
            </p>
            <p className="font-semibold text-primary underline">
              privacy@mindful-app.com
            </p>
          </PrivacySection>
        </div>

        {/* Footer info for print */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-sm text-gray-400">
          <p>© 2026 Mindful Mental Health Support. All rights reserved.</p>
        </div>
      </main>

      {/* Floating Back to App Button (Mobile only, hidden on print) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden print:hidden">
        <button
          onClick={() => router.push("/onboarding/privacy")}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all font-bold"
        >
          <ArrowLeftIcon size={20} weight="bold" />
          Back to App
        </button>
      </div>
    </div>
  );
}
