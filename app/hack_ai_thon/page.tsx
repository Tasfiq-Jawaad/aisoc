import Link from "next/link";
import "./hack.css";

export default function HackathonPage() {
  return (
    <main className="relative overflow-hidden bg-[#0b1424] text-white">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-12 md:pt-24 md:pb-16">
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/hack_ai_thon/register" className="hack-btn-primary">
              Register now
            </Link>
          </div>
        </div>

        {/* Key details bar */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DetailCard
            icon={<CalendarIcon />}
            title="When"
            text="11 Oct 2025 · 10:00–20:00"
          />
          <DetailCard
            icon={<PinIcon />}
            title="Where"
            text="Helix, EC Stoner · University of Leeds"
          />
          <DetailCard
            icon={<UsersIcon />}
            title="Who"
            text="UoL students only · Teams of 1–3"
          />
          <DetailCard icon={<TicketIcon />} title="Ticket" text="Free" />
        </div>
      </section>

      {/* THEME */}
      <section
        id="about"
        className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <h2 className="font-mono text-2xl md:text-3xl font-bold">
                Theme: AI in Education
              </h2>
              <p className="mt-3 text-blue-100/80 text-base md:text-lg">
                Build a real application that uses AI to make a meaningful
                difference in learning and student experience. You don’t have to
                be an AI expert—focus on solving a real problem and use AI where
                it helps.
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
            <div className="relative w-full sm:w-auto">
              <div className="hack-theme-chip">AI × Education</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS / USE CASES */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <h3 className="font-mono text-xl md:text-2xl font-bold">Build for…</h3>
        <div className="mt-5 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TrackCard
            title="Students"
            items={[
              "Study copilots & revision planners",
              "Note summarisation & concept linking",
              "Accessibility & assistive tools",
              "Wellbeing nudges and check‑ins",
            ]}
          />
          <TrackCard
            title="Educators"
            items={[
              "Lecture material assistants",
              "Assessment & feedback support",
              "Interactive content generation",
              "Insights on learning gaps",
            ]}
          />
          <TrackCard
            title="University"
            items={[
              "Signal early wellbeing/engagement risk",
              "Smarter outreach & comms",
              "Feedback analysis & themes",
              "Service discovery chatbots",
            ]}
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

      {/* IDEA STARTERS */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <h3 className="font-mono text-xl md:text-2xl font-bold">
          Idea starters
        </h3>
        <div className="mt-5 grid gap-5 md:gap-6 md:grid-cols-2">
          {[
            {
              title: "Study Copilot",
              desc: "Personalised study plan + adaptive revision using your module outcomes and timetable.",
            },
            {
              title: "Lecture Lens",
              desc: "Upload slides to generate interactive summaries, quizzes and examples tailored to the cohort.",
            },
            {
              title: "Wellbeing Signals",
              desc: "Aggregate calendar, LMS and check‑in data to nudge support earlier—privacy‑first.",
            },
            {
              title: "Feedback Whisperer",
              desc: "Analyse student feedback to surface themes, sentiment and ‘what to do next’.",
            },
            {
              title: "Skills Match",
              desc: "Suggest societies, projects or mentors based on goals and history to boost belonging.",
            },
            {
              title: "Integrity Assistant",
              desc: "Guide students on ethical AI use, citations and originality with real‑time checks.",
            },
          ].map((idea, i) => (
            <IdeaCard key={i} {...idea} />
          ))}
        </div>
      </section>

      {/* TEAM / PRIZES / PERKS */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid gap-5 md:grid-cols-3">
          <StatCard
            title="Teams"
            lines={["1–3 members", "Form on the day or bring your crew"]}
          />
          <StatCard
            title="Prizes"
            lines={["Cash prizes for Top 3", "Certificates for all"]}
          />
          <StatCard
            title="Perks"
            lines={["Free to join", "Food & refreshments provided"]}
          />
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
                Helix, EC Stoner · University of Leeds · UoL students only
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/hack_ai_thon/register" className="hack-btn-primary">
                Grab your spot
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
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <FAQ
            q="Do I need to know AI?"
            a="No. Focus on a useful app; use AI where it helps—APIs, no‑code, or your own model."
          />
          <FAQ
            q="Can I come solo?"
            a="Yes. Teams are 1–3. You can form a team on the day."
          />
          <FAQ
            q="What should I bring?"
            a="Laptop, charger, student ID. Optional: datasets, Figma, API keys."
          />
          <FAQ
            q="IP & ethics?"
            a="You keep your IP. Use only data you have rights to. Be transparent if synthetic or AI‑generated."
          />
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function DetailCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm flex items-center gap-3">
      <div className="hack-icon">{icon}</div>
      <div>
        <div className="text-blue-200/70 text-xs uppercase tracking-wider">
          {title}
        </div>
        <div className="text-sm md:text-base">{text}</div>
      </div>
    </div>
  );
}

function TrackCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl group-hover:bg-blue-400/15 transition" />
      <h4 className="font-mono text-lg font-bold">{title}</h4>
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

function IdeaCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm hover:border-blue-300/30 transition">
      <h4 className="font-mono font-bold">{title}</h4>
      <p className="mt-2 text-blue-100/80">{desc}</p>
    </article>
  );
}

function StatCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h4 className="font-mono text-lg font-bold">{title}</h4>
      <ul className="mt-2 space-y-1 text-blue-100/80">
        {lines.map((l, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="font-mono font-semibold">{q}</div>
      <p className="mt-2 text-blue-100/80">{a}</p>
    </div>
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
function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 13a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-9 8a7 7 0 0 1 14 0H3Zm16-9a3 3 0 1 0-2.83-4H17a4 4 0 0 1 0 8h-.17A3 3 0 0 0 19 12Z" />
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
