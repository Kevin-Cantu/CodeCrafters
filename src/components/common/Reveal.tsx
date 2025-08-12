"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  delayMs?: number; // e.g. 0, 100, 200
  y?: number; // translateY when hidden
  once?: boolean;
}

export default function Reveal({
  as: Tag = "div",
  children,
  delayMs = 0,
  y = 16,
  once = true,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as any}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${y}px)`,
        transition: `opacity 600ms ease ${delayMs}ms, transform 600ms ease ${delayMs}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
