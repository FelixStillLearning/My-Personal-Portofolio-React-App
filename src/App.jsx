import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import TechMarquee from "./components/TechMarquee";
import Starfield from "./components/Starfield";
import Noise from "./components/Noise";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#ededed] relative cursor-none">
      {/* environmental layers */}
      <Starfield />
      <Noise />
      <CustomCursor />

      {/* navigation */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* bento grid */}
      <BentoGrid />

      {/* tech marquee */}
      <TechMarquee />

      {/* footer */}
      <footer id="contact" className="relative py-16">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="p-6 border rounded-2xl border-zinc-700/40 bg-zinc-900/40 backdrop-blur-md">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg text-zinc-100">Let’s build something inevitable.</h4>
                <p className="mt-1 text-sm text-zinc-400">Currently open for Internship opportunities and challenging projects.</p>
              </div>
              <a
                href="https://www.linkedin.com/in/felix-angga-resky/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm transition-colors border rounded-full cursor-target border-zinc-700/50 bg-white/5 text-zinc-100 hover:bg-white/10"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* gradient to fade bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent" />
    </div>
  );
}

export default App;
