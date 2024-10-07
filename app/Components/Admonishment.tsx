import { ReactNode } from "react";

export type AdmonishmentProps = {
  title?: string;
  children?: ReactNode;
};

export function Admonishment({ title = "Summary", children }: AdmonishmentProps) {
  return (
    <div className="p-6 border-l-4 border-l-[#5932a6] my-8">
      {title && <div className="uppercase font-bold text-[#5932a6]">{title}</div>}

      <div className="mt-4 mb-4">{children}</div>
    </div>
  );
}
