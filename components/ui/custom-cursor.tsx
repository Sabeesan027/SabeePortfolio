"use client";

import * as React from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicking, setIsClicking] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging spring for outer ring (Bato / Lando Norris style)
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    // Only activate on devices with a fine pointer (mouse/trackpad), not touchscreens
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsTouchDevice(false);
    } else {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, input, textarea, [role='button'], .cursor-pointer, [data-cursor-hover]"
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Spring Trailing Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.75 : 1,
          borderColor: isHovered ? "rgba(6, 182, 212, 0.85)" : "rgba(255, 255, 255, 0.35)",
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.12)" : "transparent",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="h-9 w-9 rounded-full border border-white/35 backdrop-blur-[1px] shadow-[0_0_16px_rgba(6,182,212,0.2)]"
      />

      {/* Inner Precision Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.4 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? "#38BDF8" : "#06B6D4",
        }}
        transition={{ duration: 0.1 }}
        className="h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.9)]"
      />
    </div>
  );
}
