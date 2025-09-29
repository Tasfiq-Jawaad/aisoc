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
            <Link href="#register" className="hack-btn-primary">
              Register now
            </Link>
            <a href="#about" className="hack-btn-ghost">
              Learn more
            </a>
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
