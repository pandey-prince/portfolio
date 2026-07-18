"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayClass?: "d1" | "d2" | "d3" | "d4" | "d5" | "";
  as?: "div" | "article" | "section" | "li";
  onReveal?: () => void;
};

export default function Reveal({
  children,
  className = "",
  delayClass = "",
  as = "div",
  onReveal,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in");
            onReveal?.();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onReveal]);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`r ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
