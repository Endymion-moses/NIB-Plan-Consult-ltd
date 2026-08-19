import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children, direction = "left", className = "" }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const startingPosition = direction === "right" ? "translate-x-8" : "-translate-x-8";
  return <div ref={elementRef} className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${isVisible ? "translate-x-0 opacity-100" : `${startingPosition} opacity-0`} ${className}`}>{children}</div>;
};

export default ScrollReveal;
