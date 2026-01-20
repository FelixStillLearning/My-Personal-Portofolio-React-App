import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="relative overflow-hidden isolate py-28 md:py-36">
      {/* Spline background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.45]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" />
      </div>

      <div className="max-w-6xl px-4 mx-auto">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-5xl font-semibold tracking-tight md:text-7xl text-zinc-100"
          >
            Engineering Intelligence into Reality.
          </motion.h1>
          
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 text-lg leading-relaxed text-zinc-400"
          >
            Informatics Student passionate about Computer Vision and IoT with robust Backend Engineering. Architecting the infrastructure that makes intelligent systems
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 text-sm transition-colors border rounded-full cursor-target border-zinc-700/50 bg-white/5 text-zinc-100 hover:bg-white/10"
            >
              Explore Work
            </a>
            <span className="font-mono text-xs text-zinc-400"> AVAILABLE FOR WORK</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle gradient edges */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#09090b] to-transparent" />
    </section>
  );
};

export default Hero;
