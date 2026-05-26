/**
 * Handles smooth scrolling to a target page selector with a consistent offset.
 * Used to avoid duplicating layout offsets across various UI components.
 */
export const scrollToSection = (id: string, offset: number = 80): void => {
  const targetElement = document.querySelector(id);
  if (targetElement) {
    const elementPosition = (targetElement as HTMLElement).offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
