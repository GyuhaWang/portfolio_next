import { useEffect, useRef } from "react";

const useIntersectionObserver = (onVisible: () => void, options = {}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.9, ...options }
    );

    const target = targetRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [onVisible, options]);

  return { targetRef };
};

export default useIntersectionObserver;
