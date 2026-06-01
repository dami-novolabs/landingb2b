import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string | ReactNode;
  lead?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header
      className={cn(
        "mb-12 md:mb-16",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow className={cn(isCenter && "mx-auto")}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mb-6 font-display text-display-l tracking-[-0.03em] text-novo-black",
          isCenter && "mx-auto",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "max-w-[56ch] text-body-l text-novo-charcoal",
            isCenter && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}
