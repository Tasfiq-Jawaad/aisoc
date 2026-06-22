import { cn } from "@/lib/utils";

/**
 * Decorative, non-interactive brand glow blob.
 * Defaults to the top-left header position; override placement/size/colour
 * via `className`.
 */
export function GlowBlob({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full [background:#eb5b6c22] blur-[72px]",
        className,
      )}
    />
  );
}
