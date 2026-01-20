import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../data/constants";

const TechMarquee = () => {
  return (
    <section id="stack" className="relative py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-mono tracking-widest text-zinc-400 uppercase">Tech Stack</h2>
          <span className="text-zinc-500 text-sm">Marquee</span>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 20, ease: "linear" }}
          className="flex gap-6"
        >
          {[...techStack, ...techStack].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/50 px-4 py-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
              <span className="text-sm text-zinc-200">{t.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
