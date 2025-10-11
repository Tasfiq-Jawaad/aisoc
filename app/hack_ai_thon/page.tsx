import {
  Award,
  Handshake,
  Ticket,
  Trophy,
  Users,
  Utensils,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./hack.css";

export default function HackathonPage() {
  return (
    <main className="relative bg-[#0b1424] text-white">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="relative">
          <div className="absolute -inset-x-4 -top-8 h-48 hack-hero-glow" />
          <h1 className="font-mono tracking-[0.02em] text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="hack-title-dim">Leeds </span>
            <span className="hack-title-accent">{`<hack_ai_thon>`}</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-blue-200/80 max-w-3xl">
            Unleash your innovation. Build AI‑powered apps to improve how we
            learn, teach, and support students.
          </p>

          <p className="mt-4 text-lg md:text-xl text-blue-200/80 max-w-3xl">
            Powered by{" "}
            <Link target="_blank" href={"https://www.plato.ac/"}>
              Plato
            </Link>{" "}
            &{" "}
            <Link
              target="_blank"
              href={"https://digitaleducation.leeds.ac.uk/"}
            >
              Digital Education of University of Leeds
            </Link>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/hack_ai_thon/register" className="hack-btn-primary">
              Check in
            </Link>
            <a href="#theme" className="hack-btn-ghost">
              Learn more
            </a>
          </div>
        </div>

        {/* Inline key details strip */}
        <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3 text-sm md:text-base">
          <div>
            <DetailInline
              icon={<CalendarIcon />}
              text="11 Oct 2025 · 10:00–20:00"
            />
            <SeparatorDot />
          </div>
          <div>
            <DetailInline
              icon={<PinIcon />}
              text="Helix, EC Stoner · University of Leeds"
            />
            <SeparatorDot />
          </div>
          <div>
            <DetailInline icon={<TicketIcon />} text="Free to join" />
            <SeparatorDot />
          </div>
        </div>
      </section>

      {/* TEAM / PRIZES / PERKS */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h4 className="font-mono text-lg font-bold">Teams</h4>
            <ul className="mt-2 space-y-1 text-blue-100/80">
              <li className="flex items-center gap-2">
                <span className="hack-icon h-7 w-7">
                  <Users className="h-4 w-4" />
                </span>
                <span>1–3 members</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="hack-icon h-7 w-7">
                  <Handshake className="h-4 w-4" />
                </span>
                <span>Form on the day or bring your teammates</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ">
            <h4 className="font-mono text-lg font-bold">Prizes</h4>
            <ul className="mt-2 space-y-1 text-blue-100/80">
              <li className="flex items-center gap-2">
                <span className="hack-icon aspect-square w-9">
                  <Trophy className="h-4 w-4" />
                </span>
                <span>
                  Cash prizes and trophies for all members of the Top 3
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="hack-icon h-7 w-7">
                  <Award className="h-4 w-4" />
                </span>
                <span>Certificates for all</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h4 className="font-mono text-lg font-bold">Perks</h4>
            <ul className="mt-2 space-y-1 text-blue-100/80">
              <li className="flex items-center gap-2">
                <span className="hack-icon h-7 w-7">
                  <Ticket className="h-4 w-4" />
                </span>
                <span>Free to join</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="hack-icon h-7 w-7">
                  <Utensils className="h-4 w-4" />
                </span>
                <span>Food &amp; refreshments provided</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="special-category"
        className="relative max-w-7xl mx-auto px-4 md:px-6 py-0"
      >
        <h3 className="font-mono text-xl md:text-2xl font-bold">
          Special prize category
        </h3>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h4 className="font-mono text-lg font-bold">
              Most Creative Application of AI (1 team)
            </h4>
            <ul className="mt-2 space-y-1 text-blue-100/80">
              <li className="flex items-center gap-2">
                <span className="hack-icon aspect-square w-9">
                  <Trophy className="h-4 w-4" />
                </span>
                <span>Cash prizes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="hack-icon h-7 w-7">
                  <Award className="h-4 w-4" />
                </span>
                <span>Certificates</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ">
            <h4 className="font-mono text-lg font-bold">
              Best Technical Implementation (1 team)
            </h4>
            <ul className="mt-2 space-y-1 text-blue-100/80">
              <li className="flex items-center gap-2">
                <span className="hack-icon aspect-square w-9">
                  <Trophy className="h-4 w-4" />
                </span>
                <span>Cash prizes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="hack-icon h-7 w-7">
                  <Award className="h-4 w-4" />
                </span>
                <span>Certificates</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THEME */}
      <section
        id="theme"
        className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
          <div className="w-full">
            <div className="flex flex-wrap justify-between">
              <h2 className="font-mono text-2xl md:text-3xl font-bold">
                Theme: AI in Education
              </h2>
              <div className="relative w-fit">
                <div className="hack-theme-chip text-nowrap">
                  AI × Education
                </div>
              </div>
            </div>
            <p className="mt-5 text-blue-100/80 text-base md:text-lg">
              Build a real application that uses AI to make a meaningful
              difference in learning and student experience. You don’t have to
              be an AI expert—focus on solving a real problem and use AI where
              it helps. Build for any platform—web, mobile, desktop, cli,
              embedded or any other platform.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Access & Inclusion",
                "Learning Outcomes",
                "Time-saving",
                "Wellbeing",
                "Community & Belonging",
                "Academic Integrity",
              ].map((b) => (
                <span key={b} className="hack-badge">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section
        id="sponsors"
        className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10"
      >
        <h3 className="font-mono text-xl md:text-2xl font-bold">Powered by</h3>
        <div className="relative mt-5 grid gap-10 md:gap-16 grid-cols-1 md:grid-cols-2 items-center">
          {/* Image Column */}
          <div className="relative w-full aspect-[1898/686]">
            <Image
              src="/plato_logo.png"
              alt="Logo of Plato Academic Ltd"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Separator Line (only visible on medium screens and up) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Text Column */}
          <div className="relative w-full aspect-[1898/686]">
            <Image
              src="/digital_education.png"
              alt="Logo of Digital Education"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* TRACKS / USE CASES */}
      <section
        id="ideas"
        className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10"
      >
        <h3 className="font-mono text-xl md:text-2xl font-bold">Build for…</h3>
        <div className="mt-5 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TrackCard
            title="Students"
            items={[
              "Study copilots & revision planners",
              "Note summarisation & concept linking",
              "Accessibility & assistive tools",
              "Wellbeing nudges and check‑ins",
              "etc",
            ]}
          />
          <TrackCard
            title="Educators"
            items={[
              "Lecture material assistants",
              "Assessment & feedback support",
              "Interactive content generation",
              "Insights on learning gaps",
              "etc",
            ]}
          />
          <TrackCard
            title="University"
            items={[
              "Signal early wellbeing/engagement risk",
              "Smarter outreach & comms",
              "Feedback analysis & themes",
              "Service discovery chatbots",
              "etc",
            ]}
          />
        </div>
        <p className="mt-3 text-blue-100/80 text-base md:text-lg">
          Build application for students, educators or institiotion or a
          combination of above. Pick from example challenges or bring your own
          ideas.
        </p>
      </section>

      <section
        id="judging"
        className="relative max-w-7xl mx-auto px-4 md:px-6 pb-16"
      >
        <h3 className="font-mono text-xl md:text-2xl font-bold">
          Judging criteria
        </h3>

        <div className="mt-5 space-y-3">
          <FAQItem
            q="Impact & Relevance"
            a="We are looking for projects that solve a significant, real-world problem in education. We will assess your solution's usefulness, practicality, and potential to make a meaningful and scalable impact for its target users."
          />
          <FAQItem
            q="Technical Execution"
            a="We will assess the quality of your project's build and execution. We want to see a functional prototype, sophisticated use of AI, and effective implementation of technology. Your code's quality and robustness are key."
          />
          <FAQItem
            q="Innovation & Creativity"
            a="We will evaluate the originality and creativity of your solution. We are looking for novel ideas, unique approaches to the problem, and a high-quality user experience. A well-designed, intuitive interface is something we highly value."
          />
          <FAQItem
            q="Strategic Application of AI"
            a="This assesses how cleverly AI is applied as a core, value-adding component of your solution. We value the purpose and intelligence of the AI's integration over the raw performance of any specific model."
          />
        </div>
      </section>

      {/* AI EXPECTATIONS */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
          <h3 className="font-mono text-xl md:text-2xl font-bold">
            No need to be an AI expert
          </h3>
          <p className="mt-3 text-blue-100/80">
            We’re judging the usefulness, impact, and execution of your app—not
            whether you trained a model from scratch. Use whatever gets you to a
            great solution:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="hack-li">
              Use LLM APIs (OpenAI, Claude, Gemini, etc.)
            </li>
            <li className="hack-li">
              No‑code / low‑code (Bubble, Glide, etc.)
            </li>
            <li className="hack-li">
              Fine‑tune or bring your own model if you want
            </li>
            <li className="hack-li">AI‑generated code is allowed</li>
          </ul>
          <div className="mt-4 text-blue-200/80 text-sm">
            Tip: Scope small, ship fast. A sharp demo beats an unfinished big
            vision.
          </div>
        </div>
      </section>

      {/* SCHEDULE + CTA */}
      <section
        id="register"
        className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14"
      >
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-400/10 via-blue-500/10 to-blue-700/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono text-xl md:text-2xl font-bold">
                Saturday, 11 Oct 2025 · 10:00–20:00
              </h3>
              <p className="mt-2 text-blue-100/80">
                Helix, EC Stoner · University of Leeds · Leeds students only
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/hack_ai_thon/check-in" className="hack-btn-primary">
                Check in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative max-w-7xl mx-auto px-4 md:px-6 pb-16"
      >
        <h3 className="font-mono text-xl md:text-2xl font-bold">FAQ</h3>

        <div className="mt-5 space-y-3">
          <FAQItem
            q="Do I need to be an expert in AI?"
            a="You'll make AI powered application. You can choose to bring your own model, use locally running LLMs, use API or no-code tools. All skill level welcome. Focus on a useful app; use AI where it helps."
            defaultOpen
          />
          <FAQItem
            q="What are the platform I can build for?"
            a="Web, mobile, desktop, CLI, embedded, or any other platform. There are no restrictions"
          />
          <FAQItem
            q="Can I come solo?"
            a="Yes. Teams are 1–3. You can form a team on the day."
          />
          <FAQItem
            q="What should I bring?"
            a="Laptop, charger, student ID. Optional: datasets, Figma, API keys."
          />
          <FAQItem
            q="IP & ethics?"
            a="You keep your IP. Use only data you have rights to. Be transparent if synthetic or AI‑generated."
          />
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function TrackCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl group-hover:bg-blue-400/15 transition" />
      <h4 className="font-mono text-lg font-bold">{title}</h4>
      <small>For example...</small>
      <ul className="mt-3 space-y-2 text-blue-100/80 text-sm">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
function FAQItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="hack-accordion"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="hack-accordion-summary">
        <span className="font-mono font-semibold">{q}</span>
        <span className="hack-accordion-icon" aria-hidden />
      </summary>
      <div className="hack-accordion-panel">
        <p className="text-blue-100/80">{a}</p>
      </div>
    </details>
  );
}
/* ---------- Icons (inline, SSR-safe) ---------- */

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm12 7H5v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9Z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}
function TicketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M3 7a2 2 0 0 1 2-2h6v3a2 2 0 1 0 2 0V5h6a2 2 0 0 1 2 2v3h-2a2 2 0 1 0 0 4h2v3a2 2 0 0 1-2 2h-6v-3a2 2 0 1 0-2 0v3H5a2 2 0 0 1-2-2v-3h2a2 2 0 1 0 0-4H3V7Z" />
    </svg>
  );
}

/* ---------- Lean components ---------- */

function DetailInline({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
      <span className="hack-icon h-7 w-7">{icon}</span>
      <span className="text-blue-100/90">{text}</span>
    </span>
  );
}
function SeparatorDot() {
  return <span className="mx-1 md:mx-2 text-blue-300/40">·</span>;
}

export const metadata: Metadata = {
  title: "Leeds hack_ai_thon | Leeds Artificial Intelligence Society",
  description:
    "The Leeds Artificial Intelligence Society presents, the first student-led AI-themed hackathon at the University of Leeds. Unleash your innovation. Build AI‑powered apps to improve how we learn, teach, and support students.",
  openGraph: {
    url: "https://www.leedsaisoc.co.uk/hack_ai_thon",
    siteName: "Leeds hack_ai_thon",
  },
  robots: {
    index: true,
    follow: true,
  },
};
