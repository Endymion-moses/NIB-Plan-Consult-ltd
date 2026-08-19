import { useEffect, useRef, useState } from "react";

const StatCounter = ({ value, title, subtitle }) => {
  const containerRef = useRef(null);
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(String(target), "");
  const [hasStarted, setHasStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!element || reduceMotion || typeof IntersectionObserver === "undefined") {
      setHasStarted(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.45 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const frameId = requestAnimationFrame(() => {
        setCount(target);
        setProgress(100);
      });
      return () => cancelAnimationFrame(frameId);
    }

    const duration = 1400;
    const startTime = performance.now();
    let frameId;

    const animate = (now) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - (1 - elapsed) ** 3;
      setCount(Math.round(target * easedProgress));
      setProgress(easedProgress * 100);

      if (elapsed < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, target]);

  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference * (1 - progress / 100);

  return (
    <article ref={containerRef} className="flex h-full flex-col items-center rounded-2xl border border-white bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 w-40" role="img" aria-label={`${value} ${title}`}>
        <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160" aria-hidden="true">
          <circle cx="80" cy="80" r={radius} fill="none" stroke="currentColor" strokeWidth="9" className="text-blue-100" />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
            className="text-blue-600"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-blue-900">{count}{suffix}</span>
        </div>
      </div>
      <h3 className="mt-5 text-lg font-bold text-blue-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
    </article>
  );
};

export default StatCounter;
