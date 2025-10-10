"use client";

import "../hack.css";
import "./hack-register.css";

export default function HackathonRegisterPage() {
  return (
    <main className="relative overflow-hidden bg-[#0b1424] text-white">
      {/* Header */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <h1 className="font-mono tracking-[0.02em] text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="hack-title-dim">Team Registration </span>
          <br />
          <span className="hack-title-dim">Leeds</span>
          <span className="hack-title-accent">{` <hack_ai_thon>`}</span>
        </h1>
        <h2 className="font-mono tracking-[0.02em] text-xl md:text-3xl font-extrabold leading-tight mt-10">
          Due to high volume of interest, registration is now closed.
        </h2>
      </section>
    </main>
  );
}
