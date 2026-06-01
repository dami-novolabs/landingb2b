import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonPrimaryBaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonPrimaryAsLink = ButtonPrimaryBaseProps & {
  href: string;
  onClick?: never;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonPrimaryAsButton = ButtonPrimaryBaseProps & {
  href?: undefined;
  onClick?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "onClick">;

export type ButtonPrimaryProps = ButtonPrimaryAsLink | ButtonPrimaryAsButton;

const buttonClasses = cn(
  "inline-flex items-center gap-2 rounded-[4px] bg-novo-black px-7 py-3.5",
  "text-[15px] font-medium tracking-[0.01em] text-novo-cream",
  "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
  "hover:-translate-y-px hover:bg-novo-charcoal hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
  "active:translate-y-0 active:duration-[80ms]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-novo-accent",
);

export function ButtonPrimary(props: ButtonPrimaryProps) {
  const { children, className, ...rest } = props;
  const classes = cn(buttonClasses, className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<ButtonPrimaryAsLink, "children" | "className"> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { onClick, ...buttonRest } = rest as Omit<
    ButtonPrimaryAsButton,
    "children" | "className"
  >;
  return (
    <button type="button" onClick={onClick} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
