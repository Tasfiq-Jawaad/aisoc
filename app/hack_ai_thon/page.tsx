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
      </section>
    </main>
  );
}
