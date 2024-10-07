"use client";

import { ReactNode, useEffect, useState } from "react";
import { MdiInformation } from "./MdiInformation";
import { clsx } from "clsx";

export type ExpandableSectionProps = {
  children?: ReactNode;
  toggler?: ReactNode;
};

export function ExpandableSection({
  toggler,
  children,
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (expanded) {
      setTimeout(() => setOpacity(1), 50);
    } else {
      setTimeout(() => setOpacity(0), 50);
    }
  }, [expanded, setOpacity]);

  return (
    <div>
      <div onClick={() => setExpanded(val => !val)}>
        {toggler || (
          <div
            className={clsx(
              "uppercase flex items-center gap-2 text-gray-500",
              "cursor-pointer",
              expanded && "text-gray-700",
              "transition-colors"
            )}
          >
            <MdiInformation className="text-[2rem]"></MdiInformation>
            <span className="font-bold">Sources</span>
          </div>
        )}
      </div>

      <div
        className={clsx(
          expanded ? "block" : "hidden",
          "transition-opacity duration-300",
        )}
        style={{ opacity }}
      >
        {children}
      </div>
    </div>
  );
}
