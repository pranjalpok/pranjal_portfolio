import { useEffect, useRef, useState } from "react";

export default function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return undefined;
    }

    const step = (timestamp) => {
      if (startRef.current === null) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => frameRef.current && cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, target, duration]);

  return value;
}
