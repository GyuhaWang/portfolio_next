"use client";

import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({scrollX:0, scrollY:0});
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); 

    const updateScrollPosition = () => {
      setScrollPosition({scrollX: window.scrollX, scrollY:window.scrollY});
    };

    window.addEventListener("scroll", updateScrollPosition);

    
    updateScrollPosition();

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  if (!hasMounted) return {scrollX:0, scrollY:0}; 

  return scrollPosition;
};

export default useScrollPosition;
