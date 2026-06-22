import { cn } from "@/lib/utils";

type PillVariant = "accent" | "neutral";

const variants: Record<PillVariant, string> = {
  accent: "[background:#eb5b6c1a] [color:#ff909c] [border-color:#eb5b6c4d]",
  neutral: "bg-white/5 text-gray-300 border-white/20",
};

/**
 * Small rounded label/badge (e.g. event tags, role chips, section eyebrows).
 */
export function Pill({
  variant = "accent",
  className,
  children,
}: {
  variant?: PillVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
