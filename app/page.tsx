"use client"
import { motion } from "framer-motion";
import { TracingBeam } from "../components/ui/tracing-beam";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TracingBeam className="px-6">
      <AuroraBackground >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 bg-no-repeat"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Welcome to Policy Pilot.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Save time and money through programmatic validation.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Let's get started.
        </button>
      </motion.div>
      </AuroraBackground>
      <MacbookScroll></MacbookScroll>
      </TracingBeam>
    </main>
  );
}
