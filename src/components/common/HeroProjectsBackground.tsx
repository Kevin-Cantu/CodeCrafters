"use client";

import { motion } from "framer-motion";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const easeOutCubic = [0.16, 1, 0.3, 1] as const;

export function HeroProjectsBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black" />

      {/* animated squares pattern (subtle) */}
      <AnimatedGridPattern
        width={50}
        height={50}
        numSquares={56}
        maxOpacity={0.12}
        duration={4}
        repeatDelay={1.2}
        className="z-0 text-slate-400/60 [mask-image:radial-gradient(900px_circle_at_center,black,transparent)]"
      />

      {/* shine blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easeOutCubic }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-12 h-80 w-80 rounded-full bg-purple-200/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: easeOutCubic }}
      />

      {/* very subtle line grid on top for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(60,60,60,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,60,60,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
    </div>
  );
}
