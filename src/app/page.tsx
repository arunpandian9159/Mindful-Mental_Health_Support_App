"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="flex-1 flex flex-col items-center justify-start pt-0 pb-6 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[55vh] relative overflow-hidden rounded-b-[3rem] shadow-[0_10px_40px_-10px_rgba(93,155,213,0.2)]"
        >
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-10000 ease-linear transform hover:scale-110"
            style={{ backgroundImage: "/welcomepage.png" }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 mix-blend-overlay"></div>
          </div>
        </motion.div>

        <div className="w-full px-8 mt-10 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-serif text-[#101519] dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-3"
          >
            You&apos;re not alone.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[#566370] dark:text-gray-400 text-base font-normal leading-relaxed max-w-70"
          >
            We&apos;re here, one step at a time.
          </motion.p>
        </div>
      </div>

      <div className="w-full px-6 pb-10 pt-4 flex flex-col gap-3 z-10">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={() => router.push("/onboarding/features")}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary hover:bg-primary/90 transition-all text-white text-[17px] font-bold leading-normal tracking-wide shadow-lg active:scale-95"
        >
          <span className="truncate">Get Started</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          onClick={() => router.push("/home")}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-transparent border-2 border-primary/30 hover:bg-primary/5 transition-all text-primary text-[17px] font-bold leading-normal tracking-wide active:scale-95"
        >
          <span className="truncate">Explore as Guest</span>
        </motion.button>
      </div>
    </div>
  );
}
