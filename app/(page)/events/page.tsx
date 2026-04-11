import EventGrid from "@/components/event/EventGrid";
import { getPastEvents, getUpcomingEvents } from "@/lib/actions/event";
import { Metadata } from "next";
import Link from "next/link";

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents();
  const pastEvents = await getPastEvents();

  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Page header with subtle brand glow */}
      <section className="relative mb-8 md:mb-12">
        <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full [background:#eb5b6c22] blur-[72px]" />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Events
        </h1>
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          Workshops, talks, panels, hackathons, and socials. Here’s what’s
          coming up—and what you might have missed.
        </p>
        <div className="mt-3 h-1 w-24 rounded-full [background:#eb5b6c99]" />
      </section>

      {/* Upcoming */}
      <section aria-labelledby="upcoming-heading" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[color:#eb5b6c0d] to-transparent blur-3xl pointer-events-none" />
        <div className="flex items-center justify-between gap-3 mb-5 md:mb-7">
          <h2
            id="upcoming-heading"
            className="text-xl md:text-3xl font-extrabold tracking-tight text-white"
          >
            Upcoming
          </h2>
          <Link
            href="/"
            className="text-sm md:text-base [color:#eb5b6c] hover:text-white transition"
          >
            Back to home →
          </Link>
        </div>

        <EventGrid
          events={upcomingEvents}
          emptyText="No upcoming events right now."
        />
      </section>

      {/* Divider */}
      <div className="my-10 md:my-14 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-0.5 w-24 [background:#eb5b6c80] blur-sm" />
      </div>

      {/* Past */}
      <section aria-labelledby="past-heading">
        <div className="flex items-center justify-between gap-3 mb-5 md:mb-7">
          <h2
            id="past-heading"
            className="text-xl md:text-3xl font-extrabold tracking-tight text-white"
          >
            Past
          </h2>
          <Link
            href="#top"
            className="text-sm md:text-base [color:#eb5b6c] hover:text-white transition"
          >
            Back to top ↑
          </Link>
        </div>

        <EventGrid events={pastEvents} emptyText="No past events yet." isPast />
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Events | Artificial Intelligence Society",
  description:
    "Explore all events from the Artificial Intelligence Society at the University of Leeds. Find upcoming workshops, talks, panels, hackathons, and socials, plus an archive of past events with details and links.",
  openGraph: {
    type: "website",
    url: "https://www.leedsaisoc.co.uk/events",
    siteName: "Leeds AI Society",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
};
