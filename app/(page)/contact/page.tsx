import Link from "next/link";

export const metadata = {
  title: "Contact us | Artificial Intelligence Society",
  description:
    "Contact the Leeds Artificial Intelligence Society. Find our email, website, socials, and key information for collaborations and sponsorships.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Header */}
      <section className="relative mb-8 md:mb-12">
        <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full [background:#eb5b6c22] blur-[72px]" />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Contact us
        </h1>
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          We’d love to hear from you—whether it’s about events, sponsorship,
          workshops, collaborations, or general questions.
        </p>
        <div className="mt-3 h-1 w-24 rounded-full [background:#eb5b6c99]" />
      </section>

      {/* Key contacts */}
      <section
        aria-labelledby="key-contacts"
        className="grid gap-5 sm:grid-cols-2"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[color:#eb5b6c0d] to-transparent blur-3xl pointer-events-none" />
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2
            id="key-contacts"
            className="text-white font-semibold text-lg mb-3"
          >
            Primary contact
          </h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <IconMail />
              <div className="min-w-0">
                <div className="text-gray-500">Email</div>
                <a
                  href="mailto:committee@leedsaisoc.co.uk"
                  className="text-white hover:opacity-90 transition break-words"
                >
                  committee@leedsaisoc.co.uk
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <IconGlobe />
              <div className="min-w-0">
                <div className="text-gray-500">Website</div>
                <Link
                  href="https://leedsaisoc.co.uk"
                  className="[color:#eb5b6c] hover:text-white break-words"
                >
                  https://leedsaisoc.co.uk
                </Link>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <IconGlobe />
              <div className="min-w-0">
                <div className="text-gray-500">Engage</div>
                <Link
                  href="https://engage.luu.org.uk/groups/4GQD2/artificial-intelligence-society/"
                  className="[color:#eb5b6c] hover:text-white break-words"
                >
                  https://engage.luu.org.uk/groups/4GQD2/artificial-intelligence-society/
                </Link>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <IconPin />
              <div className="min-w-0">
                <div className="text-gray-500">Location</div>
                <p className="text-gray-300">
                  Leeds University Union, Lifton Place, Leeds, LS2 9JZ
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-white font-semibold text-lg mb-4">Socials</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                name: "Instagram",
                href: "https://instagram.com/leedsaisoc",
                hint: "Follow",
                icon: IconInstagram,
              },
              {
                name: "LinkedIn",
                href: "https://linkedin.com/company/leedsaisoc",
                hint: "Connect",
                icon: IconLinkedIn,
              },
              {
                name: "X (Twitter)",
                href: "https://x.com/LeedsAISoc",
                hint: "Follow",
                icon: IconX,
              },
              {
                name: "Youtube",
                href: "https://youtube.com/@leedsaisoc",
                hint: "Subscribe",
                icon: IconYouTube,
              },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <span className="flex items-center gap-3 text-gray-200">
                  <s.icon className="h-5 w-5 opacity-90 [color:#eb5b6c]" />
                  <span className="truncate">{s.name}</span>
                </span>
                <span className="text-xs text-gray-400 group-hover:text-white">
                  {s.hint} →
                </span>
              </Link>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
            <p className="text-xs sm:text-sm text-gray-400">
              Prefer email? Reach us at{" "}
              <a
                href="mailto:committee@leedsaisoc.co.uk"
                className="text-white hover:opacity-90"
              >
                committee@leedsaisoc.co.uk
              </a>
              .
            </p>
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center rounded-lg border [border-color:#eb5b6c66] [background:#eb5b6c1a] [color:#ff909c] hover:[background:#eb5b6c33] px-3 py-1.5 text-xs font-medium transition"
            >
              See events
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-10 md:my-12 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-0.5 w-24 [background:#eb5b6c80] blur-sm" />
      </div>

      {/* todo: Contact form issue 6 */}
      {/* <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
        <h2 className="text-white font-semibold text-lg mb-3">
          Send us a message
        </h2>
        <form action="#" method="post" className="grid gap-3 sm:gap-4">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="relative">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 sm:px-4 py-3 text-sm sm:text-base text-gray-100 placeholder-gray-400 outline-none transition focus:[border-color:#eb5b6c99] focus:ring-2 focus:[--ring-color:#eb5b6c33] focus:[box-shadow:0_0_0_3px_var(--ring-color)]"
                required
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
            </div>
            <div className="relative">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@leeds.ac.uk"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 sm:px-4 py-3 text-sm sm:text-base text-gray-100 placeholder-gray-400 outline-none transition focus:[border-color:#eb5b6c99] focus:ring-2 focus:[--ring-color:#eb5b6c33] focus:[box-shadow:0_0_0_3px_var(--ring-color)]"
                required
                inputMode="email"
                autoComplete="email"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
            </div>
          </div>

          <div className="relative">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              rows={5}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 sm:px-4 py-3 text-sm sm:text-base text-gray-100 placeholder-gray-400 outline-none transition focus:[border-color:#eb5b6c99] focus:ring-2 focus:[--ring-color:#eb5b6c33] focus:[box-shadow:0_0_0_3px_var(--ring-color)]"
              required
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="text-gray-500 text-xs sm:text-sm">
              We usually reply within 3–5 working days.
            </p>
            <button
              type="submit"
              className="rounded-xl [background:#eb5b6c] hover:[background:#ff6b7b] text-black font-semibold px-4 py-3 text-sm sm:text-base transition"
            >
              Send message
            </button>
          </div>
        </form>
      </section> */}
    </main>
  );
}

/* ---Icon components --- */
function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden
    >
      <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.1-.5 7.1 5 7.1-5H4.1Zm15.4 1.9-6.9 4.85a2 2 0 0 1-2.2 0L3.5 7.9v9.6c0 .55.45 1 .999 1h15c.55 0 1-.45 1-1V7.9Z" />
    </svg>
  );
}
function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden
    >
      <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 2c1.4 0 2.68.38 3.8 1.03-.48.3-1.2.74-2.04 1.12-.58.26-1.25.5-1.96.66-.3-.47-.63-.92-.98-1.32-.52-.62-1.1-1.1-1.64-1.43A7.96 7.96 0 0 1 12 4Zm-6.32 3.3c.64.15 1.52.35 2.37.43.1.62.3 1.3.58 1.98-.92.3-1.88.5-2.73.57a7.98 7.98 0 0 1-.22-2.98Zm.47 4.78c.84-.06 1.86-.26 2.85-.58.3.6.65 1.2 1.03 1.78-.8.74-1.58 1.36-2.26 1.77a8.04 8.04 0 0 1-1.62-2.97Zm3.86 4.82c.5-.4 1.17-.96 1.9-1.63.72.57 1.5 1.08 2.3 1.48-.44 1.02-.95 1.97-1.46 2.7a7.99 7.99 0 0 1-2.74-2.55Zm4.83 2.23c.37-.65.73-1.4 1.05-2.2.7.2 1.42.32 2.12.34a7.98 7.98 0 0 1-3.17 1.86Zm4.39-3.75c-.93-.05-1.94-.23-2.88-.53.3-.66.55-1.36.75-2.06.98-.17 1.9-.44 2.63-.77a7.95 7.95 0 0 1-.5 3.36ZM15 12c-.12.5-.27 1-.44 1.5a12.5 12.5 0 0 1-2.56-1.6c.25-.37.47-.75.67-1.13.9-.1 1.74-.3 2.47-.6.1.61.04 1.19-.14 1.83Zm1.9-3.27c-.6.26-1.3.48-2.05.62-.17-.6-.42-1.2-.7-1.76.92-.28 1.7-.65 2.27-.98.21.58.35 1.17.48 1.76ZM9.1 6.2c.37.46.74 1.01 1.07 1.6-.68.12-1.37.18-2.03.18-.1-.73-.04-1.41.1-2.03.26.05.56.13.86.25Z" />
    </svg>
  );
}
function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden
    >
      <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.21 11.6 7.52 11.86.28.23.69.23.97 0C12.79 21.6 20 15.25 20 10c0-4.42-3.58-8-8-8Zm0 11.5A3.5 3.5 0 1 1 12 6a3.5 3.5 0 0 1 0 7.5Z" />
    </svg>
  );
}
function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden
    >
      <path d="M18.244 3H21l-6.5 7.43L22 21h-6.758l-4.41-5.373L5.77 21H3l6.97-7.963L2 3h6.758l4.05 4.94L18.244 3Zm-2.37 16h1.708L8.25 5h-1.7l9.324 14Z" />
    </svg>
  );
}
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
    </svg>
  );
}
function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.07c.67-1.26 2.3-2.6 4.73-2.6 5.05 0 5.98 3.3 5.98 7.58V24h-5v-7.7c0-1.83-.03-4.18-2.55-4.18-2.56 0-2.95 2-2.95 4.05V24h-5V8Z" />
    </svg>
  );
}
function IconDiscord(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden
    >
      <path d="M20.3 4.37A17.4 17.4 0 0 0 15.95 3l-.2.37c2.01.5 3.1 1.22 4.27 2.22a13.3 13.3 0 0 0-9.99 0C10.2 4.59 11.3 3.87 13.3 3.37L13.11 3a17.4 17.4 0 0 0-4.36 1.37C6.35 6.1 5 9.24 5 12.5c0 0 1.16 2 4.24 2.1 0 0 .51-.61.93-1.13-1.77-.52-2.45-1.62-2.45-1.62s.14.1.4.25c.02.01.03.02.05.03.05.03.08.05.08.05.02.01.03.02.05.03.63.35 1.26.6 1.85.77.95.26 2 .36 3.1.36 1.1 0 2.15-.1 3.1-.36.6-.17 1.23-.42 1.86-.77.02-.01.03-.02.05-.03 0 0 .03-.02.08-.05.02-.01.03-.02.05-.03.26-.15.4-.25.4-.25s-.69 1.1-2.46 1.62c.42.52.92 1.13.92 1.13 3.07-.1 4.24-2.1 4.24-2.1 0-3.26-1.36-6.4-3.75-8.13ZM9.7 13.7c-.64 0-1.16-.58-1.16-1.28 0-.71.52-1.28 1.16-1.28.64 0 1.16.57 1.16 1.28 0 .7-.52 1.28-1.16 1.28Zm4.6 0c-.64 0-1.16-.58-1.16-1.28 0-.71.52-1.28 1.16-1.28.64 0 1.16.57 1.16 1.28 0 .7-.52 1.28-1.16 1.28Z" />
    </svg>
  );
}

function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      {/* Outer shape */}
      <path d="M23.5 7.2c-.2-1.7-1.4-3-3.1-3.2C18.4 3.7 15 3.7 12 3.7s-6.4 0-8.4.3C1.9 4.2.7 5.6.5 7.2.2 9.2.2 12 .2 12s0 2.8.3 4.8c.2 1.7 1.4 3 3.1 3.2 2 .3 5.4.3 8.4.3s6.4 0 8.4-.3c1.7-.2 2.9-1.5 3.1-3.2.2-2 .3-4.8.3-4.8s-.1-2.8-.3-4.8zM9.8 15.6V8.4L15.6 12l-5.8 3.6z" />
    </svg>
  );
}
