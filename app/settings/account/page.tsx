"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeftIcon,
  UserIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  LockKeyIcon,
  CameraIcon,
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@phosphor-icons/react";
import { currentUser } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";

export default function AccountSettings() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: "sarah@gmail.com", // Dummy data
    phone: "+91 91595 65585", // Dummy data
    password: "mindful@secret123", // Dummy data
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSaving(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const formFields = [
    {
      id: "name",
      label: "Full Name",
      icon: UserIcon,
      value: formData.name,
      type: "text",
    },
    {
      id: "email",
      label: "Email Address",
      icon: EnvelopeSimpleIcon,
      value: formData.email,
      type: "email",
    },
    {
      id: "phone",
      label: "Phone Number",
      icon: PhoneIcon,
      value: formData.phone,
      type: "tel",
    },
    {
      id: "password",
      label: "Password",
      icon: LockKeyIcon,
      value: formData.password,
      type: "password",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark items-center">
      {/* Header */}
      <div className="w-full px-6 py-4 pt-6 flex items-center gap-4 z-10 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md justify-center">
        <div className="w-full max-w-2xl flex items-center gap-4">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="flex items-center justify-center w-8 h-8 rounded-full -ml-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <ArrowLeftIcon size={24} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Account Settings
          </h1>
        </div>
      </div>

      <main className="flex-1 w-full max-w-2xl px-6 pb-20 pt-4 overflow-y-auto no-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-10"
        >
          {/* Avatar Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all" />
            <div className="relative size-32 rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden bg-gray-100 dark:bg-surface-dark">
              <Image
                src={currentUser.avatar}
                alt={currentUser.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <CameraIcon size={32} className="text-white" weight="bold" />
              </div>
            </div>
            <button className="absolute bottom-0 right-0 size-10 bg-primary text-white rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
              <CameraIcon size={20} weight="bold" />
            </button>
          </div>
          <p className="mt-4 text-sm font-medium text-primary hover:underline cursor-pointer">
            Change Profile Photo
          </p>
        </motion.div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {formFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex flex-col gap-1.5"
              >
                <label
                  htmlFor={field.id}
                  className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1"
                >
                  {field.label}
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                    <field.icon size={20} weight="duotone" />
                  </div>
                  <input
                    id={field.id}
                    type={
                      field.id === "password"
                        ? showPassword
                          ? "text"
                          : "password"
                        : field.type
                    }
                    value={field.value}
                    onChange={(e) =>
                      handleInputChange(field.id, e.target.value)
                    }
                    className={`w-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl py-4 pl-12 ${field.id === "password" ? "pr-12" : "pr-4"} text-gray-900 dark:text-white shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium`}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                  {field.id === "password" && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors focus:outline-none"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeSlashIcon size={20} />
                      ) : (
                        <EyeIcon size={20} />
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <button
              type="submit"
              disabled={isSaving}
              className="w-full relative overflow-hidden bg-primary text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              <span
                className={`flex items-center justify-center gap-2 ${isSaving ? "opacity-0" : "opacity-100"}`}
              >
                Save Changes
              </span>

              {isSaving && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </button>
          </motion.div>
        </form>
      </main>

      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-10 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold"
          >
            <div className="size-6 bg-white/20 rounded-full flex items-center justify-center">
              <CheckIcon size={14} weight="bold" />
            </div>
            Profile updated successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
