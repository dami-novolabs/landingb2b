import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: ReactNode;
  background?: "cream" | "cream-50" | "near-black";
  container?: "wide" | "narrow";
  className?: string;
  id?: string;
};

const backgroundClasses = {
  cream: "bg-novo-cream",
  "cream-50": "bg-novo-cream-50",
  "near-black": "bg-novo-near-black",
} as const;

const containerClasses = {
  wide: "mx-auto max-w-[1280px] px-8",
  narrow: "mx-auto max-w-[880px] px-8",
} as const;

export function SectionWrapper({
  children,
  background = "cream",
  container = "wide",
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        backgroundClasses[background],
        className,
      )}
    >
      <div className={containerClasses[container]}>{children}</div>
    </section>
  );
}
