import { useState, useEffect } from "react";

const useResponsiveMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize to set the initial state
    handleResize();

    // Cleanup the listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]); // Only re-run if isMenuOpen changes

  return [isMenuOpen, setIsMenuOpen];
};

export default useResponsiveMenu;
