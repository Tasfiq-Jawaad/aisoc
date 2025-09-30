import Image from "next/image";
import Link from "next/link";

type Member = {
  name: string;
  role: string;
  email: string;
  image: string;
};

const committee: Member[] = [
  {
    name: "Mohammad Tasfiq Jawaad",
    role: "President",
    email: "sc23mtj@leeds.ac.uk",
    image: "/people/president.jpg",
  },
  {
    name: "Mustafa Syed",
    role: "Secretary",
    email: "sc22ms@leeds.ac.uk",
    image: "/people/secretary.jpg",
  },
  {
    name: "George Baker",
    role: "Treasurer",
    email: "G.W.Baker@leeds.ac.uk",
    image: "/people/treasurer.jpg",
  },
  {
    name: "Omar Choudhry",
    role: "Chair",
    email: "O.Choudhry@leeds.ac.uk",
    image: "/people/chair.jpg",
  },
  {
    name: "Mohammed Butt",
    role: "EPS Outreach Officer",
    email: "mn22mrb@leeds.ac.uk",
    image: "/people/outreach.jpg",
  },
];

export const metadata = {
  title: "Leeds AI Society — Committee",
  description:
    "Meet the committee of the Leeds Artificial Intelligence Society: roles, photos, and contact emails.",
};

export default function CommitteePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Header */}
      <section className="relative mb-8 md:mb-12">
        <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full [background:#eb5b6c22] blur-[72px]" />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Committee
        </h1>
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          The students behind the Leeds Artificial Intelligence Society. Reach
          out to us for collaborations, sponsorships, or questions.
        </p>
        <div className="mt-3 h-1 w-24 rounded-full [background:#eb5b6c99]" />
      </section>

      {/* Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {committee.map((m, i) => (
          <article
            key={`${m.email}-${i}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={m.image}
                alt={`${m.name} — ${m.role}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center rounded-full [background:#eb5b6c1a] [color:#ff909c] [border-color:#eb5b6c4d] border px-3 py-1 text-xs font-semibold backdrop-blur">
                  {m.role}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5">
              <h2 className="text-white font-bold text-lg md:text-xl tracking-tight">
                {m.name}
              </h2>

              <div className="mt-2 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-80"
                    aria-hidden
                  >
                    <path
                      d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.1-.5 7.1 5 7.1-5H4.1Zm15.4 1.9-6.9 4.85a2 2 0 0 1-2.2 0L3.5 7.9v9.6c0 .55.45 1 .999 1h15c.55 0 1-.45 1-1V7.9Z"
                      fill="currentColor"
                    />
                  </svg>
                  <Link
                    href={`mailto:${m.email}`}
                    className="text-white/90 hover:text-white transition break-words"
                  >
                    {m.email}
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                <Link
                  href={`mailto:${m.email}`}
                  className="inline-flex items-center justify-center rounded-lg border [border-color:#eb5b6c66] [background:#eb5b6c1a] [color:#ff909c] hover:[background:#eb5b6c33] px-3 py-1.5 text-sm font-medium transition"
                >
                  Contact
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Divider + note */}
      <div className="my-10 md:my-14 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-0.5 w-24 [background:#eb5b6c80] blur-sm" />
      </div>

      <p className="text-gray-500 text-sm">
        Want to get involved?{" "}
        <Link href="/events" className="[color:#eb5b6c] hover:text-white">
          Join our events
        </Link>{" "}
        or email{" "}
        <Link
          href="mailto:committee@leedsaisoc.co.uk"
          className="text-white hover:opacity-90 transition"
        >
          committee@leedsaisoc.co.uk
        </Link>
        .
      </p>
    </main>
  );
}
