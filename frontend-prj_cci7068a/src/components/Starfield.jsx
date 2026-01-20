import React, { useEffect, useRef } from "react";

// Simple parallax starfield using canvas (plain JS)
const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.8 + 0.2,
      r: Math.random() * 1.4 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx.globalAlpha = s.z * 0.8;
        ctx.fillStyle = "#e5e7eb"; // zinc-200
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let scrollY = window.scrollY;
    const onScroll = () => {
      const dy = window.scrollY - scrollY;
      scrollY = window.scrollY;
      for (const s of stars) {
        s.y -= dy * s.z * 0.08;
        if (s.y < -2) s.y = height + 2;
        if (s.y > height + 2) s.y = -2;
      }
      draw();
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      draw();
    };

    draw();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-[0.55]"
      style={{ filter: "blur(0.4px)" }}
    />
  );
};

export default Starfield;
