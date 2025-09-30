import { Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    {
      displayName: "Home",
      url: "",
    },
    {
      displayName: "Committee",
      url: "committee",
    },
    {
      displayName: "Membership",
      url: "membership",
    },
    {
      displayName: "Events",
      url: "events",
    },
    {
      displayName: "Contact",
      url: "contact",
    },
    {
      displayName: "<hack_ai_thon>",
      url: "hack_ai_thon",
    },
  ];

  return (
    <div className="min-h-dvh w-full overflow-x-clip overflow-y-visible">
      <div className="p-6">
        {/* Top Nav */}
        <nav className="relative mx-auto max-w-5xl py-3">
          {/* Toggle (hidden checkbox) */}
          <input
            id="menu-toggle"
            type="checkbox"
            className="menu-toggle"
            aria-label="Toggle menu"
          />

          {/* Bar: brand + hamburger */}
          <div className="md:hidden flex items-center justify-end px-2 md:px-0">
            {/* Hamburger button (label controls the checkbox) */}
            <label
              htmlFor="menu-toggle"
              className="hamburger md:hidden"
              aria-hidden="true"
            >
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          {/* Desktop nav */}
          <div className="mt-2 hidden md:block">
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg md:text-xl">
              {navLinks.map((item) => (
                <Link
                  key={item.displayName}
                  href={`/${item.url}`}
                  className="group relative px-1 text-gray-300 transition-colors hover:text-white"
                >
                  {item.displayName}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-red-500 to-red-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <div className="mobile-menu md:hidden">
            <div className="mobile-menu-inner">
              {navLinks.map((item) => (
                <Link
                  key={item.displayName}
                  href={`/${item.url}`}
                  className="mobile-link"
                >
                  {item.displayName}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      {children}

      {/* Footer */}
      <footer className="pb-2 xxs:pb-4 relative mt-10 md:mt-16 border-t border-white/10 pt-8 md:pt-10">
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
                <Link
                  href={"https://instagram.com/leedsaisoc"}
                  aria-label={"Instagram"}
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white transition"
                >
                  <Instagram />
                </Link>
                <Link
                  href={"https://linkedin.com/company/leedsaisoc"}
                  aria-label={"Instagram"}
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white transition"
                >
                  <Linkedin />
                </Link>

                <Link
                  href={"https://x.com/LeedsAISoc"}
                  aria-label={"X"}
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white transition"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M18.244 3H21l-6.5 7.43L22 21h-6.758l-4.41-5.373L5.77 21H3l6.97-7.963L2 3h6.758l4.05 4.94L18.244 3Zm-2.37 16h1.708L8.25 5h-1.7l9.324 14Z" />
                  </svg>
                </Link>
                <Link
                  href={"https://www.youtube.com/@leedsaisoc"}
                  aria-label={"Youtube"}
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white transition"
                >
                  <Youtube />
                </Link>
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
                    <Link
                      href="/events"
                      className="hover:text-white transition"
                    >
                      Events
                    </Link>
                  </li>
                  <li className="break-words">
                    <Link
                      href="/hack_ai_thon"
                      className="hover:text-white transition"
                    >
                      Leeds &lt;hack_ai_thon&gt;
                    </Link>
                  </li>
                  {/* todo: issue 5 */}
                  {/* <li>
                    <Link href="#" className="hover:text-white transition">
                      Projects
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/committee"
                      className="hover:text-white transition"
                    >
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
                    <Link
                      href="/contact"
                      className="hover:text-white transition"
                    >
                      Sponsor us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/membership"
                      className="hover:text-white transition"
                    >
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
    </div>
  );
}
