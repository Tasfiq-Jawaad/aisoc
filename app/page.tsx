import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function LandingWireframeNeon() {
  const upcomingEvent = [
    {
      title: "Intro to Machine Learning Workshop",
      date: "2025-10-12",
      time: "17:00–19:00",
      location: "EC Stoner, LT B",
      badge: "Workshop",
      image: "/placeholder-event-1.jpg",
    },
    {
      title: "AI Ethics: Panel with Industry & Academia",
      date: "2025-10-24",
      time: "18:00–20:00",
      location: "Roger Stevens, LT 08",
      badge: "Panel",
      image: "/placeholder-event-2.jpg",
    },
    {
      title: "Hack the North: AI Mini-Hack",
      date: "2025-11-08",
      time: "09:00–21:00",
      location: "Nexus Building",
      badge: "Hackathon",
      image: "/placeholder-event-3.jpg",
    },
  ];

  return (
    <main className="p-2 xxs:p-4 overflow-x-clip overflow-y-visible">
      {/* Hero */}
      <section className="relative mx-auto flex flex-col lg:flex-row max-lg:items-center justify-center items-stretch gap-16">
        {/* Background accents (subtle) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft diagonal sweep */}
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full [background:#eb5b6c22] blur-[90px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full [background:#eb5b6c1a] blur-[80px]" />
        </div>

        <div className="relative max-w-5xl flex-1">
          <div className="rounded-xl border border-white/10 bg-white/10 p-6 border-gap h-full">
            <h1 className="text-2xl xxs:text-3xl xl:text-5xl font-extrabold tracking-tight text-white">
              Leeds Artificial Intelligence Society |
            </h1>
            {/* tiny accent bar */}
            <div className="mt-2 h-1 w-20 rounded-full [background:#eb5b6c99]" />

            <p className="mt-5 text-lg text-gray-400">
              Your home for all things artificial intelligence at the University
              of Leeds
            </p>

            <div className="mt-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Chat here..."
                  aria-label="Chat here"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none transition focus:[border-color:#eb5b6c99] focus:ring-2 focus:[--ring-color:#eb5b6c33] focus:[box-shadow:0_0_0_3px_var(--ring-color)]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
                {/* animated scan line */}
                <div className="scan-container">
                  <div className="scan-line"></div>
                  <div className="scan-highlight"></div>
                </div>
              </div>
            </div>
          </div>

          <svg
            aria-hidden
            className="pointer-events-none absolute top-full max-lg:-translate-y-[1px] max-lg:left-1/2 max-lg:rotate-z-90 lg:top-24 lg:-right-[63.5px] transform -scale-x-100 lg:scale-x-100"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <path
              d="M0 64 L0 64 L0 0 L0 64 C32 64 48 50.6667 64 32 C32 32 24 32 0 0"
              fill="rgba(255,255,255,0.10)"
            />
            <path
              d="M0 0 C24 32 32 32 64 32 C48 50.6667 32 64 1.5 64"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Mascot and logo */}
        <div className="flex-1 w-full max-w-70 md:max-w-[calc(10rem+10rem-5rem)] aspect-square flex items-end relative">
          <div className="relative z-10 flex h-full aspect-square items-center justify-center [perspective:1000px]">
            <div className="relative h-full w-full [transform-style:preserve-3d] animate-flip-hold">
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <Image
                  src="/mascot.svg"
                  alt="Mascot of the Artificial Intelligence Society"
                  fill
                />
              </div>
              {/* Back */}
              <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden]">
                <Image
                  src={"/logo.svg"}
                  alt="Logo of the Artificial Intelligence Society"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative text-center max-w-4xl mx-auto my-[52px]">
        <div className="hero-glow translate-x-1/2" />
        <h2 className="text-lg xxs:text-2xl font-extrabold tracking-tight text-white">
          Welcome to the Artificial Intelligence Society of the University of
          Leeds
        </h2>
        <p className="mt-5 text-base md:text-[20px] text-gray-300">
          We are the official student-led society for all things Artificial
          Inteligence at the University of Leeds. Whether you&apos;re an expert,
          beginer or just curious about AI, this is the right place for you.
          Find out more about{" "}
          <Link
            href="https://engage.luu.org.uk/groups/4GQD2/artificial-intelligence-society"
            className="underline decoration-[color:#eb5b6c80] [color:#eb5b6c] hover:[color:#ff6b7b]"
          >
            what we do.
          </Link>
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="relative mx-auto max-w-7xl py-8 md:py-14">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[color:#eb5b6c0d] to-transparent blur-3xl pointer-events-none" />
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
          <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-white">
            Upcoming Events
          </h3>
          <Link
            href="#"
            className="text-sm md:text-base [color:#eb5b6c] hover:text-white transition inline-flex items-center gap-2"
          >
            View all <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {upcomingEvent.map((e, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-b from-transparent via-[color:#eb5b6c1a] to-[color:#eb5b6c1a]" />
              <div className="relative h-40 md:h-44 w-full overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute left-3 top-3">
                  <span className="inline-flex items-center rounded-full [background:#eb5b6c1a] [color:#ff909c] [border-color:#eb5b6c4d] border px-3 py-1 text-xs font-semibold backdrop-blur">
                    {e.badge}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <h4 className="text-white font-bold text-lg md:text-xl tracking-tight">
                  {e.title}
                </h4>
                <div className="mt-3 flex flex-col gap-1 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full [background:#eb5b6c]" />
                    <span>
                      {new Date(e.date).toLocaleDateString(undefined, {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span>{e.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="opacity-80"
                      aria-hidden
                    >
                      <path
                        d="M12 2C7.03 2 3 6.03 3 11c0 6.08 8.28 11 9 11 .72 0 9-4.92 9-11 0-4.97-4.03-9-9-9zM12 13.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 8.5 12 8.5s2.5 1.12 2.5 2.5S13.38 13.5 12 13.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>{e.location}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href="#"
                    className="[color:#eb5b6c] hover:text-white text-sm font-medium inline-flex items-center gap-2"
                  >
                    Details <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-lg border [border-color:#eb5b6c66] [background:#eb5b6c1a] [color:#ff909c] hover:[background:#eb5b6c33] px-3 py-1.5 text-sm transition"
                  >
                    RSVP
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-0.5 w-24 [background:#eb5b6c80] blur-sm" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-10 md:mt-16 border-t border-white/10 pt-8 md:pt-10">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-28 w-28 sm:h-40 sm:w-40 rounded-full [background:#eb5b6c33] blur-[64px]" />
          <div className="absolute right-1/5 bottom-0 h-32 w-32 sm:h-44 sm:w-44 rounded-full [background:#eb5b6c1a] blur-[72px]" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4">
          <div className="grid grid-cols-1 gap-8 sm:gap-5 lg:grid-cols-4">
            {/* Brand / About */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 sm:h-14 sm:w-14">
                  <Image
                    src="/logo.svg"
                    alt="AI Society Logo"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <span className="text-white font-extrabold tracking-tight text-lg sm:text-xl">
                  Artificial Intelligence Society
                </span>
              </div>

              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                Building a curious, collaborative, and creative community around
                AI at the University of Leeds. From beginner workshops to
                hackathons, panels, and socials—everyone is welcome.
              </p>

              {/* Socials: larger tap targets on mobile */}
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3">
                {[
                  { name: "X", href: "#" },
                  { name: "Instagram", href: "#" },
                  { name: "LinkedIn", href: "#" },
                  { name: "Discord", href: "#" },
                ].map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    aria-label={s.name}
                    className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white transition"
                  >
                    <span className="text-sm font-semibold">{s.name[0]}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/5" />
                    <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition [box-shadow:0_0_24px_0_#eb5b6c66]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2">
              <div className="max-[430px]:col-span-2">
                <h5 className="text-white font-semibold text-base sm:text-lg">
                  Explore
                </h5>
                <ul className="mt-3 space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Events
                    </Link>
                  </li>
                  <li className="break-words">
                    <Link href="#" className="hover:text-white transition">
                      Leeds &lt;hack_ai_thon&gt;
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Committee
                    </Link>
                  </li>
                </ul>
              </div>

              {/* todo: magic number needs to be removed after all links are added */}
              <div className="max-[430px]:col-span-2">
                <h5 className="text-white font-semibold text-base sm:text-lg">
                  Contact
                </h5>

                {/* Other links */}
                <ul className="mt-3 space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <Link
                      href="mailto:committee@leedsaisoc.co.uk"
                      className="hover:text-white transition"
                    >
                      committee@leedsaisoc.co.uk
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Sponsor us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Join the society
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-span-2">
                <h5 className="text-white font-semibold text-base sm:text-lg">
                  Stay in the loop
                </h5>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  Get updates on events, workshops, and hackathons.
                </p>
                <form
                  className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
                  action="#"
                  method="post"
                >
                  <div className="relative flex-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@leeds.ac.uk"
                      aria-label="Email address"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3 sm:px-4 py-3 text-sm sm:text-base text-gray-100 placeholder-gray-400 outline-none transition focus:[border-color:#eb5b6c99] focus:ring-2 focus:[--ring-color:#eb5b6c33] focus:[box-shadow:0_0_0_3px_var(--ring-color)]"
                      required
                      inputMode="email"
                      autoComplete="email"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
                  </div>
                  <button
                    type="submit"
                    className="rounded-xl [background:#eb5b6c] hover:[background:#ff6b7b] text-black font-semibold px-4 py-3 text-sm sm:text-base transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 sm:mt-10 border-t border-white/10 pt-4 sm:pt-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4">
              <p className="text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} Artificial Intelligence Society.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Leeds Artificial Intelligence Society | University of Leeds",
  description:
    "Workshops, panels, hackathons, and community for AI enthusiasts at the University of Leeds.",
  alternates: {
    canonical: "https://leedsaisoc.co.uk/",
  },
  openGraph: {
    type: "website",
    url: "https://leedsaisoc.co.uk/",
    title: "Leeds AI Society",
    description:
      "Your home for all things AI at the University of Leeds: events, workshops, hackathons.",
    siteName: "Leeds AI Society",
    images: [
      {
        url: "https://www.leedsaisoc.co.uk/logo.png",
        width: 1200,
        height: 630,
        alt: "Leeds AI Society",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LeedsAISoc",
    title: "Leeds AI Society",
    description:
      "Workshops, panels, hackathons, and community for AI enthusiasts.",
    images: ["https://www.leedsaisoc.co.uk/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
