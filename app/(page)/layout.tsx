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
      url: "concact",
    },
    {
      displayName: "<hack_ai_thon>",
      url: "hack_ai_thon",
    },
  ];

  return (
    <div className="min-h-dvh w-full">
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
    </div>
  );
}
