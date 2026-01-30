"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CaretLeftIcon,
  PillIcon,
  ClockIcon,
  CalendarIcon,
  UserIcon,
  PhoneIcon,
  HashIcon,
  WarningIcon,
  ArrowUpIcon,
  CheckCircleIcon,
  PencilSimpleIcon,
} from "@phosphor-icons/react";
import { userMedications, commonMedications, doseHistory } from "@/data/data";
import { BottomNav } from "@/components/BottomNav";

export default function MedicationDetail() {
  const { id } = useParams();
  const router = useRouter();

  // Find user medication and linked common medication data
  const userMed = userMedications.find((m) => m.id === id);
  const commonMed = commonMedications.find(
    (m) => m.id === userMed?.medicationId,
  );

  if (!userMed) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 text-center">
        <WarningIcon size={48} className="text-red-500 mb-4" />
        <h1 className="text-2xl font-serif font-bold text-text-primary dark:text-white mb-2">
          Medication Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          We couldn&apos;t find the record you&apos;re looking for.
        </p>
        <button
          onClick={() => router.push("/medication")}
          className="text-primary font-bold"
        >
          Go Back
        </button>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-30 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="size-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all active:scale-95"
          >
            <CaretLeftIcon size={20} weight="bold" />
          </button>
          <h1 className="text-sm font-bold text-text-primary dark:text-white uppercase tracking-widest">
            Details
          </h1>
          <button className="size-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary transition-all active:scale-95">
            <PencilSimpleIcon size={20} weight="bold" />
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 pt-24 space-y-8">
        {/* Header Hero */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="size-24 rounded-4xl bg-primary/10 mx-auto flex items-center justify-center text-primary mb-4 shadow-soft">
            <PillIcon size={48} weight="fill" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-text-primary dark:text-white">
            {userMed.customName}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            {userMed.dosage} • {commonMed?.name || "Medication"}
          </p>
        </motion.section>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-surface-dark p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Frequency
              </p>
              <div className="flex items-center gap-2">
                <ClockIcon size={18} className="text-primary" />
                <span className="font-bold text-text-primary dark:text-white">
                  {commonMed?.frequency || "Daily"}
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft font-bold">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                Reminders
              </p>
              <div className="flex items-center gap-2">
                <span className="text-text-primary dark:text-white">
                  {userMed.reminderTimes.join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Supply & Refill */}
          <section className="bg-white dark:bg-surface-dark p-6 rounded-4xl border border-gray-100 dark:border-gray-800 shadow-soft">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-text-primary dark:text-white">
                Supply & Refill
              </h3>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${userMed.currentSupply <= 5 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
              >
                {userMed.currentSupply} pills left
              </span>
            </div>

            <div className="space-y-4">
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(userMed.currentSupply / userMed.pillsPerBottle) * 100}%`,
                  }}
                  className={`h-full ${userMed.currentSupply <= 5 ? "bg-red-500" : "bg-primary"}`}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                    <CalendarIcon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Next Refill
                    </p>
                    <p className="font-bold text-text-primary dark:text-white">
                      {new Date(userMed.refillDate).toLocaleDateString(
                        undefined,
                        { month: "long", day: "numeric", year: "numeric" },
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                    <ArrowUpIcon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Auto Refill
                    </p>
                    <p className="font-bold text-text-primary dark:text-white">
                      {userMed.autoRefill ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prescription Info */}
          <section className="bg-white dark:bg-surface-dark p-6 rounded-4xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-4">
            <h3 className="font-bold text-text-primary dark:text-white mb-2">
              Prescription Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <UserIcon size={20} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Prescribed By
                  </p>
                  <p className="font-medium text-text-primary dark:text-white">
                    {userMed.prescribedBy}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon size={20} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Pharmacy
                  </p>
                  <p className="font-medium text-text-primary dark:text-white">
                    {userMed.pharmacy}
                  </p>
                  <p className="text-sm text-primary font-bold mt-0.5">
                    {userMed.pharmacyPhone}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HashIcon size={20} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Prescription #
                  </p>
                  <p className="font-medium text-text-primary dark:text-white">
                    {userMed.prescriptionNumber}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dose History */}
          <section className="pb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-text-primary dark:text-white">
                Dose History
              </h3>
              <button className="text-xs font-bold text-primary">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {doseHistory
                .filter((d) => d.medicationId === userMed.id)
                .map((dose) => (
                  <div
                    key={dose.id}
                    className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-10 rounded-xl flex items-center justify-center ${
                          dose.status === "taken"
                            ? "bg-green-50 text-green-500 dark:bg-green-900/10"
                            : "bg-red-50 text-red-500 dark:bg-red-900/10"
                        }`}
                      >
                        {dose.status === "taken" ? (
                          <CheckCircleIcon size={20} weight="fill" />
                        ) : (
                          <ClockIcon size={20} weight="fill" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary dark:text-white">
                          {dose.status === "taken"
                            ? "Dose taken"
                            : "Dose missed"}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(dose.scheduledTime).toLocaleDateString(
                            undefined,
                            {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            },
                          )}{" "}
                          at{" "}
                          {new Date(dose.scheduledTime).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                    {dose.takenTime && (
                      <span className="text-[10px] font-bold text-gray-400 italic">
                        at{" "}
                        {new Date(dose.takenTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </section>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
}
