import EventGrid from "@/components/event/EventGrid";
import { getUpcomingEvents } from "@/lib/actions/event";
import HomeChatbot from "@/components/HomeChatbot";
import Image from "next/image";
import Link from "next/link";

export default async function LandingWireframeNeon() {
  const upcomingEvent = await getUpcomingEvents();

  return (
    <main className="p-2 xxs:p-4 overflow-x-clip overflow-y-visible">
      {/* Hero */}
      <section className="relative w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16">
        {/* Background accents (subtle) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft diagonal sweep */}
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full [background:#eb5b6c22] blur-[90px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full [background:#eb5b6c1a] blur-[80px]" />
        </div>

        <div className="relative max-w-5xl flex-1 w-full min-w-0">
          <div className="rounded-xl border border-white/10 bg-white/10 p-6 border-gap h-full">
            <HomeChatbot />
          </div>

          <svg
            aria-hidden
            className="pointer-events-none absolute top-full max-lg:-translate-y-px max-lg:left-1/2 max-lg:rotate-z-90 lg:top-24 lg:-right-[63.5px] transform -scale-x-100 lg:scale-x-100"
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
          <div className="relative z-10 flex h-full aspect-square items-center justify-center perspective-[1000px]">
            <div className="relative h-full w-full transform-3d animate-flip-hold">
              {/* Front */}
              <div className="absolute inset-0 backface-hidden">
                <Image
                  src="/mascot.svg"
                  alt="Mascot of the Artificial Intelligence Society"
                  fill
                />
              </div>
              {/* Back */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden">
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
            className="underline decoration-[#eb5b6c80] text-[#eb5b6c] hover:text-[#ff6b7b]"
          >
            what we do.
          </Link>
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="relative mx-auto max-w-7xl py-8 md:py-14">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-[#eb5b6c0d] to-transparent blur-3xl pointer-events-none" />
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
          <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-white">
            Upcoming Events
          </h3>
          <Link
            href="/events"
            className="text-sm md:text-base text-[#eb5b6c] hover:text-white transition inline-flex items-center gap-2"
          >
            View all events <span aria-hidden>→</span>
          </Link>
        </div>

        <EventGrid events={upcomingEvent} emptyText="No upcoming events" />

        <div className="mt-10 md:mt-12 relative">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-0.5 w-24 [background:#eb5b6c80] blur-sm" />
        </div>
      </section>
    </main>
  );
}
