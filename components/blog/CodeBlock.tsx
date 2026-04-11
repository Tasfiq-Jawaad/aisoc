"use client";

import { isValidElement, useState } from "react";
import { CopyButton } from "./CopyButton";

export const CodeBlock = ({
  language,
  children,
}: {
  language?: string;
  children: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);
  // Stringify children content for copying
  const raw =
    typeof children === "string"
      ? children
      : Array.isArray(children)
        ? children.join("")
        : isValidElement(children)
          ? (() => {
              const c = children as unknown;
              // Narrow: React elements have props
              if (
                typeof c === "object" &&
                c !== null &&
                "props" in c &&
                typeof (c as { props?: unknown }).props === "object" &&
                (c as { props?: { children?: unknown } }).props !== null
              ) {
                const maybeChildren = (c as { props: { children?: unknown } })
                  .props.children;
                return typeof maybeChildren === "string" ? maybeChildren : "";
              }
              return "";
            })()
          : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(raw as string);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  const langLabel = (language || "text").toLowerCase();

  return (
    <div className="relative mt-3 rounded-md ring-1 ring-white/10 bg-black/60">
      {/* Top bar with language label and copy button */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <span className="text-xs font-medium tracking-wide text-gray-300">
          {langLabel}
        </span>
        <CopyButton onClick={handleCopy} copied={copied} />
      </div>

      <pre className="overflow-x-auto p-4 text-gray-100">
        <code className={`block text-sm leading-relaxed language-${langLabel}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};
