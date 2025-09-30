import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leeds hack_ai_thon | Leeds Artificial Intelligence Society",
  description:
    "The Leeds Artificial Intelligence Society presents, the first student-led AI-themed hackathon at the University of Leeds. Unleash your innovation. Build AI‑powered apps to improve how we learn, teach, and support students.",
  openGraph: {
    url: "https://www.leedsaisoc.co.uk/hack_ai_thon/",
    siteName: "Leeds hack_ai_thon",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    {
      displayName: "Overview",
      url: "hack_ai_thon",
    },
    {
      displayName: "Register",
      url: "hack_ai_thon/register",
    },
    {
      displayName: "Theme",
      url: "hack_ai_thon#theme",
    },
    {
      displayName: "Ideas",
      url: "hack_ai_thon#ideas",
    },
    {
      displayName: "Faq",
      url: "hack_ai_thon#faq",
    },
    {
      displayName: "Contact",
      url: "contact",
    },
    {
      displayName: "AISoc",
      url: "",
    },
  ];

  return (
    <div className="min-h-dvh w-full bg-[#0b1424] overflow-x-hidden">
      <div className="pt-6">
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
          <div className="md:hidden flex items-center justify-between px-2 md:px-0">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white"
              aria-label="Home"
            >
              AI Society
            </Link>

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
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-blue-900 transition-all duration-300 group-hover:w-full"></span>
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
    </div>
  );
}
