import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonSecondaryBaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonSecondaryAsLink = ButtonSecondaryBaseProps & {
  href: string;
  onClick?: never;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonSecondaryAsButton = ButtonSecondaryBaseProps & {
  href?: undefined;
  onClick?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "onClick">;

export type ButtonSecondaryProps = ButtonSecondaryAsLink | ButtonSecondaryAsButton;

const linkClasses = cn(
  "inline-block border-b border-current bg-transparent pb-1",
  "text-[15px] font-medium text-novo-black",
  "transition-all duration-200 ease-in-out",
  "hover:border-novo-accent hover:text-novo-accent",
);

export function ButtonSecondary(props: ButtonSecondaryProps) {
  const { children, className, ...rest } = props;
  const classes = cn(linkClasses, className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<ButtonSecondaryAsLink, "children" | "className"> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { onClick, ...buttonRest } = rest as Omit<
    ButtonSecondaryAsButton,
    "children" | "className"
  >;
  return (
    <button type="button" onClick={onClick} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
