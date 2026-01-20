import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/constants";

const BentoGrid = () => {
  return (
    <section id="projects" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-mono tracking-widest text-zinc-400 uppercase">Selected Projects</h2>
          <span className="text-zinc-500 text-sm">04</span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {projects.map((p, idx) => (
            <BentoCard key={p.id} project={p} large={idx % 3 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ project, large }) => {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.a
      ref={ref}
      href={project.link}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-700/40 bg-zinc-900/40 backdrop-blur-sm transition-shadow hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] focus:outline-none cursor-target ${
        large ? "md:col-span-3" : "md:col-span-3"
      }`}
      style={{
        background:
          "radial-gradient(200px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 40%)",
      }}
    >
      <div className="relative aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
      </div>
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-2">
          {project.tags.map((t) => (
            <span key={t} className="text-[10px] font-mono tracking-wider text-zinc-300/80">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-zinc-100 text-xl font-medium">{project.title}</h3>
            <p className="text-zinc-400 text-sm mt-1">{project.description}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-zinc-200 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
        </div>
      </div>
    </motion.a>
  );
};

export default BentoGrid;
