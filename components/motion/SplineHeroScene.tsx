"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const GlbHeroViewer = dynamic(() => import("./GlbHeroViewer"), {
  ssr: false,
});

const GLB_MODEL_URL = "/src/tech_node_portrait_3d.glb";

function CyberWireframeOrb({ faded }: { faded: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
        faded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient radial glow */}
      <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px]" />

      {/* Rotating orbital wireframe rings */}
      <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
        <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border border-cyan-400/25 shadow-[0_0_40px_rgba(6,182,212,0.12)]" />
        <div className="absolute inset-4 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-dashed border-sky-400/30" />
        <div className="absolute inset-10 animate-[spin_22s_linear_infinite] rounded-full border border-teal-400/25" />

        {/* Central geometric cube/diamond wireframe */}
        <svg
          viewBox="0 0 160 160"
          className="h-44 w-44 drop-shadow-[0_0_24px_rgba(6,182,212,0.35)] sm:h-52 sm:w-52"
          fill="none"
        >
          <polygon
            points="80,14 138,48 138,112 80,146 22,112 22,48"
            stroke="rgba(56, 189, 248, 0.55)"
            strokeWidth="1.5"
            fill="rgba(6, 182, 212, 0.05)"
          />
          <polygon
            points="80,32 122,56 122,104 80,128 38,104 38,56"
            stroke="rgba(20, 184, 166, 0.6)"
            strokeWidth="1.2"
          />
          <line
            x1="80"
            y1="14"
            x2="80"
            y2="146"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="1"
          />
          <line
            x1="22"
            y1="48"
            x2="138"
            y2="112"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="1"
          />
          <line
            x1="138"
            y1="48"
            x2="22"
            y2="112"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="1"
          />
          <circle
            cx="80"
            cy="80"
            r="10"
            fill="rgba(6, 182, 212, 0.25)"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}

export function SplineHeroScene() {
  const [modelLoaded, setModelLoaded] = React.useState(false);
  const [modelFailed, setModelFailed] = React.useState(false);

  const handleLoaded = React.useCallback(() => setModelLoaded(true), []);
  const handleError = React.useCallback(() => setModelFailed(true), []);

  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl sm:h-[420px] lg:h-[480px]">
      {/* Subtle architectural corner marker */}
      <div className="pointer-events-none absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#090A0F]/75 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-300 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Interactive 3D Node · Drag to Rotate
      </div>

      {/* Instantaneous CSS/SVG geometric wireframe orb fallback */}
      <CyberWireframeOrb faded={modelLoaded && !modelFailed} />

      {/* Local GLB 3D Model */}
      {!modelFailed && (
        <div
          className={`relative z-10 h-full w-full transition-opacity duration-700 ${
            modelLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <GlbHeroViewer
            src={GLB_MODEL_URL}
            onLoaded={handleLoaded}
            onError={handleError}
          />
        </div>
      )}
    </div>
  );
}
