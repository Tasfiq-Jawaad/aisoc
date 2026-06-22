import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { committee } from "@/lib/data/committee";

export const metadata = {
  title: "Committee | Artificial Intelligence Society",
  description:
    "Meet the committee of the Leeds Artificial Intelligence Society.",
};

export default function CommitteePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Header */}
      <SectionHeading
        level="page"
        glow
        title="Committee"
        description="The students behind the Leeds Artificial Intelligence Society. Reach out to us for collaborations, sponsorships, or questions."
      />

      {/* Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {committee.map((m, i) => (
          <article
            key={`${m.email}-${i}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={m.image}
                alt={`${m.name} — ${m.role}`}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute -left-2 -top-2 md:-left-3 md:-top-3 ">
                <Pill>{m.role}</Pill>
              </div>
            </div>

            {/* Content */}
            <div className="pt-4 md:pt-5">
              <h2 className="text-white font-bold text-lg md:text-xl tracking-tight">
                {m.name}
              </h2>

              <div className="mt-4 text-gray-300 text-sm">
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
                <Button
                  href={`mailto:${m.email}`}
                  variant="ghost"
                  size="sm"
                  className="font-medium"
                >
                  Contact
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Divider + note */}
      <Divider />

      <p className="text-gray-500 text-sm">
        Want to get involved?{" "}
        <Link href="/events" className="[color:#eb5b6c] hover:text-white">
          Join our events
        </Link>{" "}
        or email{" "}
        <Link
          href="mailto:aisociety@leeds.ac.uk"
          className="text-white hover:opacity-90 transition"
        >
          aisociety@leeds.ac.uk
        </Link>
        .
      </p>
    </main>
  );
}
