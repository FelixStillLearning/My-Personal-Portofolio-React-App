import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

// Lazy load ALL components except critical Navbar
const Hero = lazy(() => import("./components/Hero"));
const BentoGrid = lazy(() => import("./components/BentoGrid"));
const TechMarquee = lazy(() => import("./components/TechMarquee"));
const Starfield = lazy(() => import("./components/Starfield"));
const Noise = lazy(() => import("./components/Noise"));
const CustomCursor = lazy(() => import("./components/CustomCursor"));

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#ededed] relative cursor-none">
      {/* environmental layers - deferred for performance */}
      <Suspense fallback={null}>
        <Starfield />
        <Noise />
        <CustomCursor />
      </Suspense>

      {/* navigation - critical, load immediately */}
      <Navbar />

      {/* hero - lazy loaded with Suspense */}
      <Suspense
        fallback={
          <div className="relative py-28 md:py-36 flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-zinc-700 border-t-zinc-400 rounded-full animate-spin"></div>
              <span className="text-sm text-zinc-500 animate-pulse">Loading experience...</span>
            </div>
          </div>
        }
      >
        <Hero />
      </Suspense>

      {/* bento grid - below fold, lazy loaded */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <BentoGrid />
      </Suspense>

      {/* tech marquee - below fold, lazy loaded */}
      <Suspense fallback={null}>
        <TechMarquee />
      </Suspense>

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
