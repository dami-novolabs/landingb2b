import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "mb-6 block font-mono text-mono-s uppercase tracking-[0.08em] text-novo-graphite",
        className,
      )}
    >
      {children}
    </span>
  );
}
