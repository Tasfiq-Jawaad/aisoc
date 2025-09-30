import Link from "next/link";
import "../hack-register.css";

export default function RegisterSuccessPage() {
  return (
    <main className="relative overflow-hidden bg-[#0b1424] text-white min-h-screen">
      {/* Background theme */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hack-bg-circuits" />
        <div className="hack-vignette" />
      </div>

      {/* Header */}
      <section className="relative max-w-3xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-6">
        <h1 className="font-mono tracking-[0.02em] text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="hack-title-dim">Registration </span>
          <span className="hack-title-accent">{`<success>`}</span>
        </h1>
        <p className="mt-3 text-blue-200/80">
          You’re in! We’ve received your submission for Leeds
          &lt;hack_ai_thon&gt;.
        </p>
      </section>

      {/* Card */}
      <section className="relative max-w-3xl mx-auto px-4 md:px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="hack-success-icon" aria-hidden>
              <CheckIcon />
            </div>
            <div>
              <h2 className="font-mono text-xl md:text-2xl font-bold">
                Thanks for registering
              </h2>
              <p className="mt-2 text-blue-100/80">
                We’ll email you event details and any updates before the day.
              </p>
              <ul className="mt-4 space-y-2 text-blue-100/80">
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                  <span>When: Saturday, 11 Oct 2025 · 10:00–20:00</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                  <span>Where: Helix, EC Stoner · University of Leeds</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                  <span>Who: Leeds students · Teams of 1–3</span>
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-blue-200/85 text-sm">
                  Need to change details (team members, dietary, etc.)? Email us
                  at{" "}
                  <a
                    href="mailto:committee@leedsaisoc.co.uk"
                    className="underline decoration-blue-300/50 hover:text-white"
                  >
                    committee@leedsaisoc.co.uk
                  </a>
                  .
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link href="/hack_ai_thon" className="hack-cta">
                  <span className="hack-cta-glow" aria-hidden />
                  <span className="hack-cta-label">Back to overview</span>
                </Link>
              </div>

              <p className="mt-4 text-blue-200/60 text-xs sm:text-sm">
                Tip: You can form teams on the day if you registered solo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Inline icon */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <path
        d="M7 12.5l3.2 3.2L17.5 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
