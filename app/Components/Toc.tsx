"use client";

import { clsx } from "clsx";
import styles from "./Toc.module.css";
import { useEffect, useRef, useState } from "react";

export type TocItem = {
  title: string;
  href: string;
};

export type TocProps = {
  items: TocItem[];
  className?: string;
  top?: number;
};

export function Toc({ className, items, top }: TocProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const containerEl = containerRef.current;
    if (!el || !containerEl) {
      return;
    }
    if (top === undefined) {
      return;
    }
    const onScroll = () => {
      const { top: currentTop } = containerEl.getBoundingClientRect();
      if (currentTop < top) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [top, setFixed]);

  return (
    <div ref={containerRef} className="w-56">
      <div
        ref={ref}
        className={clsx(
          "text-[#08193C] transition-transform duration-100 ease-linear",
          "w-56",
          styles["toc"],
          className,
        )}
        style={{
          position: fixed ? "fixed" : "static",
          top: fixed ? top : undefined,
        }}
      >
        <h4>ON THIS PAGE</h4>
        <hr className="border-[#08193C] border-[1px] w-full" />
        <ul className="mt-4">
          {items.map(item => (
            <li key={item.title}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
