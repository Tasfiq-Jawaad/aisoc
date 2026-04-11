export const CopyButton = ({
  onClick,
  copied,
}: {
  onClick: () => void;
  copied: boolean;
}) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/10 hover:bg-white/15 active:bg-white/20 transition"
    aria-label={copied ? "Copied" : "Copy code"}
    title={copied ? "Copied" : "Copy"}
  >
    {copied ? (
      // simple check icon
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        className="text-emerald-400"
      >
        <path
          d="M7.5 10.5l2 2 4-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      // copy icon
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        className="text-gray-300"
      >
        <rect
          x="6"
          y="6"
          width="11"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <rect
          x="3"
          y="3"
          width="11"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.6"
        />
      </svg>
    )}
    <span>{copied ? "Copied" : "Copy"}</span>
  </button>
);
