"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  PillIcon,
  PlusIcon,
  BellIcon,
  CaretRightIcon,
  CheckCircleIcon,
  WarningIcon,
  ClockIcon,
} from "@phosphor-icons/react";
import { userMedications, doseHistory, refillAlerts } from "@/data/data";
import { BottomNav } from "@/components/BottomNav";
import { SubPageHeader } from "@/components/SubPageHeader";

export default function MedicationDashboard() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <SubPageHeader
        title="Medication"
        rightIcon={<PlusIcon size={20} weight="bold" />}
        rightAction={() => router.push("/medication/add")}
      />
      <div className="max-w-md mx-auto px-6 pt-24">
        {/* Refill Alerts */}
        {refillAlerts.length > 0 && (
          <motion.section
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <BellIcon
                size={20}
                weight="fill"
                className="text-accent-orange"
              />
              <h2 className="text-lg font-bold text-text-primary dark:text-white">
                Alerts
              </h2>
            </div>
            <div className="space-y-3">
              {refillAlerts.map((alert, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex gap-3 ${
                    alert.priority === "high"
                      ? "bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-900/20"
                      : "bg-orange-50 border-orange-100 dark:bg-orange-900/10 dark:border-orange-900/20"
                  }`}
                >
                  <WarningIcon
                    size={20}
                    className={
                      alert.priority === "high"
                        ? "text-red-500"
                        : "text-orange-500"
                    }
                  />
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {alert.message}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Active Medications */}
          <section>
            <h2 className="text-lg font-bold text-text-primary dark:text-white mb-4">
              Active Medications
            </h2>
            <div className="space-y-4">
              {userMedications.map((med) => (
                <motion.div
                  key={med.id}
                  variants={itemVariants}
                  onClick={() => router.push(`/medication/${med.id}`)}
                  className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft flex items-center justify-between cursor-pointer hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                      <PillIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary dark:text-white group-hover:text-primary transition-colors">
                        {med.customName}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {med.dosage} • {med.reminderTimes.join(", ")}
                      </p>
                    </div>
                  </div>
                  <CaretRightIcon size={20} className="text-gray-400" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Dose History Summary */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-text-primary dark:text-white">
                Recent Activity
              </h2>
              <button className="text-sm font-medium text-primary">
                View History
              </button>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft overflow-hidden">
              {doseHistory.map((dose, idx) => (
                <div
                  key={dose.id}
                  className={`p-4 flex items-center justify-between ${
                    idx !== doseHistory.length - 1
                      ? "border-b border-gray-50 dark:border-gray-800"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-8 rounded-full flex items-center justify-center ${
                        dose.status === "taken"
                          ? "bg-green-50 text-green-500 dark:bg-green-900/20"
                          : "bg-red-50 text-red-500 dark:bg-red-900/20"
                      }`}
                    >
                      {dose.status === "taken" ? (
                        <CheckCircleIcon size={18} />
                      ) : (
                        <ClockIcon size={18} />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary dark:text-white">
                        {userMedications.find((m) => m.id === dose.medicationId)
                          ?.customName || "Medication"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(dose.scheduledTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        • {new Date(dose.scheduledTime).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      dose.status === "taken"
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {dose.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
      <BottomNav />
    </div>
  );
}
