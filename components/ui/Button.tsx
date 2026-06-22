import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition";

const variants: Record<ButtonVariant, string> = {
  primary: "[background:#eb5b6c] hover:[background:#ff6b7b] text-black",
  ghost:
    "border [border-color:#eb5b6c66] [background:#eb5b6c1a] [color:#ff909c] hover:[background:#eb5b6c33]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "rounded-lg px-3 py-1.5 text-sm",
  md: "rounded-xl px-5 py-3 text-sm md:text-base",
};

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** When provided, renders a Next.js `Link` instead of a `<button>`. */
  href?: string;
  children: React.ReactNode;
};

/**
 * Brand button used for primary and secondary (ghost) actions.
 * Renders a Next.js `Link` when `href` is provided, otherwise a `<button>`.
 * Padding/rounding can be fine-tuned per call site via `className`.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
