import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface CursorGlowProps {
  isDarkMode: boolean;
}

export default function CursorGlow({ isDarkMode }: CursorGlowProps) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 45, stiffness: 400, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250); // Offset half the width (500px / 2)
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Disable on mobile/touch devices
  if (!mounted) return null;

  return (
    <motion.div
      style={{
        left: glowX,
        top: glowY,
      }}
      className={`fixed pointer-events-none z-30 w-[500px] h-[500px] rounded-full blur-[140px] hidden md:block transition-colors duration-500`}
      animate={{
        backgroundColor: isDarkMode ? "rgba(139, 92, 246, 0.06)" : "rgba(139, 92, 246, 0.025)",
      }}
    />
  );
}
