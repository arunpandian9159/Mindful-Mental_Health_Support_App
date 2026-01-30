"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CaretLeftIcon,
  PillIcon,
  InfoIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import { commonMedications } from "@/data/data";

export default function AddMedication() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    medicationId: "",
    customName: "",
    dosage: "",
    frequency: "Once daily",
    reminderTime: "08:00",
    startDate: new Date().toISOString().split("T")[0],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const selectedMed = commonMedications.find(
    (m) => m.id === formData.medicationId,
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
      <div className="max-w-md mx-auto px-6 pt-12">
        <header className="flex items-center gap-4 mb-8">
          <button
            onClick={() => (step > 1 ? prevStep() : router.back())}
            className="size-10 rounded-xl bg-white dark:bg-surface-dark shadow-soft flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all active:scale-95"
          >
            <CaretLeftIcon size={20} weight="bold" />
          </button>
          <h1 className="text-2xl font-serif font-bold text-text-primary dark:text-white">
            {step === 1 ? "Choose Medication" : "Reminder Settings"}
          </h1>
        </header>

        {/* Progress Indicator */}
        <div className="flex gap-2 mb-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                i <= step ? "bg-primary" : "bg-gray-200 dark:bg-gray-800"
              }`}
            />
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {step === 1 ? (
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Select from common medications or add custom
              </p>
              <div className="grid gap-3">
                {commonMedications.map((med) => (
                  <button
                    key={med.id}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        medicationId: med.id,
                        customName: med.name,
                        dosage: med.commonDosages[0],
                      });
                      nextStep();
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.medicationId === med.id
                        ? "bg-primary/5 border-primary"
                        : "bg-white dark:bg-surface-dark border-gray-100 dark:border-gray-800 hover:border-primary/20"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-text-primary dark:text-white">
                          {med.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {med.category}
                        </p>
                      </div>
                      <PillIcon size={20} className="text-primary/40" />
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => nextStep()}
                  className="p-4 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-transparent text-gray-500 dark:text-gray-400 font-medium hover:border-primary/40 hover:text-primary transition-all"
                >
                  + Add Custom Medication
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-text-primary dark:text-white block mb-2">
                    Dosage
                  </label>
                  <select
                    value={formData.dosage}
                    onChange={(e) =>
                      setFormData({ ...formData, dosage: e.target.value })
                    }
                    className="w-full p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                  >
                    {selectedMed ? (
                      selectedMed.commonDosages.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))
                    ) : (
                      <option value="50mg">50mg</option>
                    )}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-text-primary dark:text-white block mb-2">
                    Reminder Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Once daily", "Twice daily"].map((f) => (
                      <button
                        key={f}
                        onClick={() =>
                          setFormData({ ...formData, frequency: f })
                        }
                        className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                          formData.frequency === f
                            ? "bg-primary text-white border-primary"
                            : "bg-white dark:bg-surface-dark border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-bold text-text-primary dark:text-white block mb-2">
                      Time
                    </div>
                    <div className="relative">
                      <input
                        type="time"
                        value={formData.reminderTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            reminderTime: e.target.value,
                          })
                        }
                        className="w-full p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-text-primary dark:text-white block mb-2">
                      Start Date
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            startDate: e.target.value,
                          })
                        }
                        className="w-full p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20 flex gap-3">
                  <InfoIcon size={20} className="text-primary shrink-0" />
                  <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
                    Best taken with:{" "}
                    <strong>
                      {selectedMed?.bestTakenWith || "No special instructions"}
                    </strong>
                    . Common side effects:{" "}
                    {selectedMed?.commonSideEffects.join(", ") || "None listed"}
                    .
                  </p>
                </div>
              </div>

              <button
                onClick={() => router.push("/medication")}
                className="w-full py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <CheckIcon size={20} weight="bold" />
                Save Reminder
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
