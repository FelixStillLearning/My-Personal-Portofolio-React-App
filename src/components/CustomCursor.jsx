import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const radius = useSpring(6, { stiffness: 300, damping: 20 });
  const scale = useSpring(1, { stiffness: 250, damping: 18 });
  const opacity = useSpring(0.6, { stiffness: 120, damping: 15 });

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleHover = (e) => {
      const t = e.target;
      const isInteractive = t.closest("a, button, [role='button'], input, textarea, select, .cursor-target");
      scale.set(isInteractive ? 1.8 : 1);
      radius.set(isInteractive ? 10 : 6);
      opacity.set(isInteractive ? 0.3 : 0.6);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHover);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [x, y, radius, scale, opacity]);

  return (
    <motion.div
      className="fixed z-[70] pointer-events-none"
      style={{ x, y }}
    >
      <motion.div
        className="rounded-full border border-zinc-300/50 bg-white/5 backdrop-blur-sm"
        style={{ width: radius, height: radius, scale, opacity }}
      />
    </motion.div>
  );
};

export default CustomCursor;
