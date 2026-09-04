import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) observer.unobserve(node);
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return [ref, isInView];
}
