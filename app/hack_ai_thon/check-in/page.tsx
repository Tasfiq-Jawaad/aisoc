"use client";

import Link from "next/link";
import { useActionState } from "react";
import "../hack.css";
import "../register/hack-register.css";
import { submitCheckin } from "../register/submit";

type State = { error?: string; success?: string };

export default function HackathonCheckinPage() {
  const [state, action, pending] = useActionState<State, FormData>(
    async (_prev, fd) => {
      const result = await submitCheckin(fd);
      if (result.ok) {
        return { success: result.message };
      }
      return { error: result.message };
    },
    {}
  );

  return (
    <main className="relative overflow-hidden bg-[#0b1424] text-white">
      {/* Header */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <h1 className="font-mono tracking-[0.02em] text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="hack-title-dim">Check in</span>
          <br />
          <span className="hack-title-dim">Leeds</span>
          <span className="hack-title-accent">{` <hack_ai_thon>`}</span>
        </h1>
        <p className="mt-3 text-blue-200/80">Each participant must check in.</p>
        {/* Event summary */}
        <div className="mt-4 text-blue-200/70">
          Check in starts: 10:00 am 11/10/2025
        </div>
      </section>

      {/* Form */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <form
          action={action}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-8"
        >
          {/* Primary participant */}
          <div className="space-y-1">
            <h2 className="font-mono text-xl md:text-2xl font-bold">Email</h2>
            <p className="text-blue-200/70 text-sm">
              Please enter the email you used to register
            </p>
          </div>

          <div className="mt-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">Student email</label>
              <input
                type="email"
                name="email"
                placeholder="e.g., abc12345@leeds.ac.uk"
                className="hack-input"
                inputMode="email"
                autoComplete="email"
                required
              />
            </div>
            <button></button>
          </div>

          {/* Actions */}
          <div className="mt-1">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button type="submit" className="hack-cta" disabled={pending}>
                <span className="hack-cta-glow" aria-hidden />
                <span className="hack-cta-label">
                  {pending ? "Checking in…" : "Check in"}
                </span>
              </button>

              <Link href="/hack_ai_thon" className="hack-cta-ghost">
                <span className="hack-cta-ghost-glow" aria-hidden />
                <span className="hack-cta-label">Back to overview</span>
              </Link>
            </div>

            {state?.error && (
              <p className="mt-3 text-red-300/80 text-sm">
                Error: {state.error}
              </p>
            )}

            {state?.success && (
              <p className="mt-3 hack-input">✅ {state.success}</p>
            )}

            <p className="mt-3 text-blue-200/60 text-xs sm:text-sm">
              If you encounter any problem, please contact any of the volunteer,
              or email{" "}
              <Link href={"mailto:committee@leedsaisoc.co.uk"}>
                committee@leedsaisoc.co.uk
              </Link>
            </p>
          </div>

          {/* Policies */}
          {/* <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <ul className="text-blue-200/80 text-sm space-y-2">
              <li className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80 mt-1.5" />
                <span>Open to students of Leeds only.</span>
              </li>
              <li className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80 mt-1.5" />
                <span>It’s free to join. Food and refreshments provided.</span>
              </li>
            </ul>
          </div> */}
        </form>
      </section>
    </main>
  );
}
