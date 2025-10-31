import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Placeholder data.
const upcoming = [
  {
    title: "AI On Your Own Device: Running AI Models Locally!",
    date: "2025-11-05",
    time: "16:00-18:00",
    location: "Sir William Henry Bragg (GR.18)",
    badge: "Workshop",
    image: "/events/AI On Your Own Device.png",
    url: "https://engage.luu.org.uk/events/3R4HB/ai-on-your-own-device-running-ai-models-locally",
  },
  {
    title: "Unlocking AI's Superpowers: An Introduction to Tool Calling & MCP",
    date: "2025-11-12",
    time: "16:00-18:00",
    location: "Sir William Henry Bragg (GR.18)",
    badge: "Workshop",
    image: "/events/Unlocking AI's Superpowers.png",
    url: "https://engage.luu.org.uk/events/XKFYX/unlocking-ais-superpowers-an-introduction-to-tool-calling-mcp",
  },
  {
    title: "Talk to the Future II: Power Up Your AI Chatbot",
    date: "2025-11-19",
    time: "16:00-18:00",
    location: "Sir William Henry Bragg (GR.18)",
    badge: "Workshop",
    image: "/events/Talk to the Future II.gif",
  },
];

const past = [
  {
    title: "Leeds <hack_ai_thon>",
    date: "2025-10-11",
    time: "10:00-20:00",
    location: "Helix, Level 7, EC Stoner building, University of Leeds",
    badge: "Hackathon",
    image: "/events/Leeds <hack_ai_thon>.gif",
    url: "https://engage.luu.org.uk/events/KMC8B/leeds-hack-ai-thon",
  },
  {
    title: "Talk to the Future I: Build Your First AI Chatbot (Rerun - GIAG)",
    date: "2025-10-01",
    time: "17:00–18:30",
    location: "Sir William Bragg SR (GR.18)",
    badge: "Workshop",
    image: "/events/Talk to the Future I (rerun).gif",
    url: "https://engage.luu.org.uk/events/2G8F7/talk-to-the-future-i-build-your-first-ai-chatbot-rerun-giag",
  },
  {
    title: "Talk to the Future I: Build Your First AI Chatbot",
    date: "2025-09-30",
    time: "17:00–18:30",
    location: "Helix, Level 7, EC Stoner building, University of Leeds",
    badge: "Workshop",
    image: "/events/Talk to the Future I.gif",
    url: "https://engage.luu.org.uk/events/YRD32/talk-to-the-future-i-build-your-first-ai-chatbot",
  },

  {
    title: "Weekly AI Journal Club",
    date: "Last: 30 Jul 2025",
    time: "15:00–16:00",
    location: "Sir William Henry Bragg Buliding",
    badge: "Research study",
    image: "",
    url: "https://engage.luu.org.uk/events/76TFT/weekly-ai-journal-club",
  },
  {
    title: "AI Workshop 6: AI Project Showcase (Online)",
    date: "2025-05-03",
    time: "11:00–12:00",
    location: "Online Microsoft Teams",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/M29W6/ai-workshop-6-ai-project-showcase-online",
  },
  {
    title: "AI Workshop 6: AI Project Showcase",
    date: "29 April 2025",
    time: "17:00–18:00",
    location: "Clarendon Building Cluster GR.07",
    badge: "Project showcase",
    image: "",
    url: "https://engage.luu.org.uk/events/8V99H/ai-workshop-6-ai-project-showcase",
  },
  {
    title: "AI Society AGM",
    date: "28 April 2025",
    time: "13:00–14:00",
    location:
      "Hybrid (Sir William Henry Bragg Building 2.10 and Microsoft Teams)",
    badge: "Meeting",
    image: "/logo.svg",
    url: "https://engage.luu.org.uk/events/8V99H/ai-workshop-6-ai-project-showcase",
  },
  {
    title: "Running AI Locally: DeepSeek-R1 on Your Machine",
    date: "23 April 2025",
    time: "11:00–13:00",
    location: "Online Microsoft Teams",
    badge: "Workshop",
    image: "/events/Running AI Locally.gif",
    url: "https://engage.luu.org.uk/events/J4RR3/running-ai-locally-deepseek-r1-on-your-machine",
  },
  {
    title: "AI Workshop 5: AI Mini-Hackathon (Online)",
    date: "15 March 2025",
    time: "11:00–12:00",
    location: "Online Microsoft Teams",
    badge: "Hackathon",
    image: "",
    url: "https://engage.luu.org.uk/events/WPP46/ai-workshop-5-ai-mini-hackathon-online",
  },
  {
    title: "AI Workshop 4: Ethics of AI (Online)",
    date: "08 March 2025",
    time: "11:00–12:00",
    location: "Online Microsoft Teams",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/V6MYT/ai-workshop-4-ethics-of-ai-online",
  },
  {
    title: "AI Workshop 3: Neural Networks (Online)",
    date: "01 March 2025",
    time: "11:00–12:00",
    location: "Online Microsoft Teams",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/79BYC/ai-workshop-3-neural-networks-online",
  },
  {
    title: "AI^2 - Understanding DeepSeek",
    date: "26 February 2025",
    time: "16:00–18:00",
    location: "Sir William Henry Bragg Building GR.18",
    badge: "Research study",
    image: "",
    url: "https://engage.luu.org.uk/events/G7KBX/ai2-understanding-deepseek",
  },
  {
    title: "AI Workshop 5: AI Mini-Hackathon",
    date: "25 February 2025",
    time: "17:00–18:00",
    location: "Clarendon Building Cluster GR.07",
    badge: "Hackathon",
    image: "",
    url: "https://engage.luu.org.uk/events/4GQBF/ai-workshop-5-ai-mini-hackathon",
  },
  {
    title: "AI Workshop 2: Building a Machine Learning Pipeline (Online)",
    date: "22 February 2025",
    time: "11:00–12:00",
    location: "Online Microsoft Teams",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/XHWCX/ai-workshop-2-building-a-machine-learning-pipeline-online",
  },
  {
    title: "AI Workshop 4: Ethics of AI",
    date: "18 February 2025",
    time: "17:00–18:00",
    location: "Clarendon Building Cluster GR.07",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/R6KC7/ai-workshop-4-ethics-of-ai",
  },
  {
    title: "AI Workshop 1: Introduction to AI (Online)",
    date: "15 February 2025",
    time: "11:00–12:00",
    location: "Online Microsoft Teams",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/K7PVQ/ai-workshop-1-introduction-to-ai-online",
  },
  {
    title: "AI Workshop 3: Neural Networks",
    date: "11 February 2025",
    time: "17:00–18:00",
    location: "Clarendon Building Cluster GR.07",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/9PJ3Y/ai-workshop-3-neural-networks",
  },
  {
    title: "AI Workshop 2: Building a Machine Learning Pipeline",
    date: "04 February 2025",
    time: "17:00–18:00",
    location: "Clarendon Building Cluster GR.07",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/GXWWT/ai-workshop-2-building-a-machine-learning-pipeline",
  },
  {
    title: "AI Workshop 1: Introduction to AI",
    date: "28 January 2025",
    time: "17:00–18:00",
    location: "Sir William Henry Bragg Building",
    badge: "Workshop",
    image: "",
    url: "https://engage.luu.org.uk/events/3XJK4/ai-workshop-1-introduction-to-ai",
  },
];

export default function EventsPage() {
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

        <EventGrid items={upcoming} emptyText="No upcoming events right now." />
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

        <EventGrid items={past} emptyText="No past events yet." isPast />
      </section>
    </main>
  );
}

type EventItem = {
  title: string;
  date: string; // ISO
  time: string;
  location: string;
  badge: string;
  image: string;
  url?: string;
};

function EventGrid({
  items,
  emptyText,
  isPast = false,
}: {
  items: EventItem[];
  emptyText: string;
  isPast?: boolean;
}) {
  if (!items?.length) {
    return <p className="text-gray-500 text-sm md:text-base">{emptyText}</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {items.map((e, i) => (
        <article
          key={`${e.title}-${i}`}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

          {/* subtle hover tint for upcoming; muted for past */}
          <div
            className={`pointer-events-none absolute inset-0 opacity-0 transition duration-300 ${
              isPast
                ? "bg-gradient-to-b from-transparent via-white/0 to-white/0"
                : "bg-gradient-to-b from-transparent via-[color:#eb5b6c1a] to-[color:#eb5b6c1a]"
            } group-hover:opacity-100`}
          />

          {/* Image */}
          <div className="relative h-40 md:h-44 w-full overflow-hidden">
            {e.image && (
              <Image
                src={e.image}
                alt={e.title}
                fill
                className={`object-contain scale-105 transition-transform duration-500 ${
                  isPast ? "" : "group-hover:scale-110"
                }`}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            )}
            <div className="absolute left-3 top-3">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur border ${
                  isPast
                    ? "bg-white/5 text-gray-300 border-white/20"
                    : "[background:#eb5b6c1a] [color:#ff909c] [border-color:#eb5b6c4d]"
                }`}
              >
                {e.badge}
              </span>
            </div>
            {isPast && (
              <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-white/5 text-gray-300 border border-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                Past
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-4 md:p-5">
            <h3
              className={`font-bold text-lg md:text-xl tracking-tight ${
                isPast ? "text-gray-200" : "text-white"
              }`}
            >
              {e.title}
            </h3>

            <div className="mt-3 flex flex-col gap-1 text-sm text-gray-300">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full ${
                    isPast ? "bg-gray-400" : "[background:#eb5b6c]"
                  }`}
                />
                <span>
                  {formatDate(e.date)} <span className="text-gray-500">•</span>{" "}
                  {e.time}
                </span>
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
              {e?.url ? (
                <Link
                  href={e.url}
                  className={`text-sm font-medium inline-flex items-center gap-2 transition ${
                    isPast
                      ? "text-gray-400 hover:text-white"
                      : "[color:#eb5b6c] hover:text-white"
                  }`}
                >
                  Details <span aria-hidden>→</span>
                </Link>
              ) : (
                <p
                  className={`text-sm font-medium inline-flex items-center gap-2 transition ${
                    isPast
                      ? "text-gray-400 hover:text-white"
                      : "[color:#eb5b6c] hover:text-white"
                  }`}
                >
                  More details soon
                </p>
              )}

              {/* {isPast ? (
                <span className="text-xs text-gray-500">Ended</span>
              ) : (
                <Link
                  href={e.url}
                  className="rounded-lg border [border-color:#eb5b6c66] [background:#eb5b6c1a] [color:#ff909c] hover:[background:#eb5b6c33] px-3 py-1.5 text-sm transition"
                >
                  RSVP
                </Link>
              )} */}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function formatDate(iso: string) {
  if (iso === "TBA") return iso;
  if (iso.startsWith("Last")) return iso;
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
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
