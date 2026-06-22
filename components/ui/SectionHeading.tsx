import { cn } from "@/lib/utils";

import { GlowBlob } from "./GlowBlob";

/**
 * Heading block with the brand accent bar, shared across pages.
 *
 * - `level="page"` → large `h1` page title (optionally with a glow blob and
 *   a description), as used on Committee / Events / Contact.
 * - `level="section"` → `h2` section title with an optional uppercase eyebrow,
 *   as used within longer pages.
 */
export function SectionHeading({
  title,
  eyebrow,
  description,
  level = "section",
  glow = false,
  className,
}: {
  title: React.ReactNode;
  eyebrow?: React.ReactNode;
  description?: React.ReactNode;
  level?: "page" | "section";
  glow?: boolean;
  className?: string;
}) {
  const isPage = level === "page";

  return (
    <div
      className={cn(
        "relative",
        isPage ? "mb-8 md:mb-12" : "mb-8 md:mb-10",
        className,
      )}
    >
      {glow && <GlowBlob />}
      {eyebrow && (
        <div className="text-sm font-semibold uppercase tracking-wide [color:#ff909c]">
          {eyebrow}
        </div>
      )}
      {isPage ? (
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
      ) : (
        <h2 className="mt-1 text-2xl md:text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          {description}
        </p>
      )}
      <div className="mt-3 h-1 w-24 rounded-full [background:#eb5b6c99]" />
    </div>
  );
}
