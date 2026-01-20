import React from "react";
import { Menu, Github, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 z-40 top-4">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between px-4 py-3 border rounded-2xl border-zinc-700/40 bg-zinc-900/40 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
            <span className="text-xs tracking-widest uppercase text-zinc-300">FELIX ANGGA RESKY</span>
          </div>

          <div className="hidden gap-6 text-sm md:flex text-zinc-300">
            <a href="#projects" className="transition-colors hover:text-zinc-100">Projects</a>
            <a href="#stack" className="transition-colors hover:text-zinc-100">Stack</a>
            <a href="#contact" className="transition-colors hover:text-zinc-100">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a href="mailto:felixangga077@gmail.com" className="p-2 transition-colors rounded-lg hover:bg-white/5" aria-label="Mail">
              <Mail className="w-5 h-5 text-zinc-200" />
            </a>
            <a href="https://github.com/FelixStillLearning" className="p-2 transition-colors rounded-lg hover:bg-white/5" aria-label="GitHub">
              <Github className="w-5 h-5 text-zinc-200" />
            </a>
            <button className="p-2 transition-colors rounded-lg cursor-target hover:bg-white/5 md:hidden" aria-label="Menu">
              <Menu className="w-5 h-5 text-zinc-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
