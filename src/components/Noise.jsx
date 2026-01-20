import React from "react";

const Noise = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.03%27/></svg>')",
        backgroundRepeat: "repeat",
        mixBlendMode: "soft-light",
      }}
    />
  );
};

export default Noise;
