import { useState, useEffect } from "react";

interface NavItem {
  href: string;
}

/**
 * Tracks the currently active section based on the window's scroll position.
 * Optimized with passive event listeners for high scroll performance.
 */
export function useActiveSection(navItems: NavItem[], offset: number = 120): string {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, offset]);

  return activeSection;
}
