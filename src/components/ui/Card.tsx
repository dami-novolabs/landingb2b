import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardElement = "div" | "article";

type CardProps = {
  children: ReactNode;
  variant?: "default" | "subtle";
  className?: string;
  as?: CardElement;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">;

export function Card({
  children,
  variant = "default",
  className,
  as: Component = "div",
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-md border border-novo-line p-7 transition-[border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:p-10",
        "hover:border-novo-charcoal",
        variant === "default" ? "bg-novo-white" : "bg-novo-cream-50",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
