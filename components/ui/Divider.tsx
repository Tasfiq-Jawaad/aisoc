import { cn } from "@/lib/utils";

/**
 * Horizontal section divider with a soft accent highlight in the centre.
 * Used between sections across the site.
 */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("my-10 md:my-14 relative", className)}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-0.5 w-24 [background:#eb5b6c80] blur-sm" />
    </div>
  );
}
