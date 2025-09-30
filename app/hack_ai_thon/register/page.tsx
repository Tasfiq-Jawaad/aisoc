"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import "../hack.css";
import "./hack-register.css";
import { submitRegistration } from "./submit";

type TeamPref = "solo" | "team_2" | "team_3" | "match";
type State = { error?: string };

export default function HackathonRegisterPage() {
  const [teamPref, setTeamPref] = useState<TeamPref>("solo");

  const [state, action, pending] = useActionState<State, FormData>(
    async (_prev, fd) => {
      const result = await submitRegistration(fd);
      if (result.ok) {
        window.location.href = `/hack_ai_thon/register/success`;
        return {};
      }
      return { error: result.message };
    },
    {}
  );

  const teammate1Note =
    teamPref === "team_3"
      ? "Required for Team of 3."
      : teamPref === "team_2"
      ? "Required for Team of 2."
      : "Optional.";

  const teammate2Note =
    teamPref === "team_3" ? "Required for Team of 3." : "Optional.";

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
        <p className="mt-3 text-blue-200/80">
          One person registers on behalf of the team. You can join solo, bring
          1–2 teammates, or ask to form a team on the day.
        </p>
        {/* Event summary */}
        <div className="mt-4 text-blue-200/70">
          Event: Saturday, 11 Oct 2025 · 10:00–20:00 · Helix, EC Stoner ·
          University of Leeds
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
            <h2 className="font-mono text-xl md:text-2xl font-bold">
              Contestant 1
            </h2>
            <p className="text-blue-200/70 text-sm">
              Use your university email.
            </p>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">Full name</label>
              <input
                type="text"
                name="first_name"
                placeholder="e.g., Alex Johnson"
                className="hack-input"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">Student email</label>
              <input
                type="email"
                name="first_email"
                placeholder="e.g., abc12345@leeds.ac.uk"
                className="hack-input"
                inputMode="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">
                Dietary requirements
              </label>
              <input
                type="text"
                name="first_diet"
                placeholder="e.g., Vegetarian / Vegan / Halal / None"
                className="hack-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">
                Accessibility needs
              </label>
              <input
                type="text"
                name="first_disability"
                placeholder="e.g., Wheelchair access, captions"
                className="hack-input"
              />
            </div>
          </div>

          {/* Team preference */}
          <div className="mt-8 space-y-2">
            <h3 className="font-mono text-lg font-bold">Team preference</h3>
            <fieldset className="grid gap-3 md:grid-cols-3">
              <label className="hack-radio-tile">
                <input
                  type="radio"
                  name="team_pref"
                  value="solo"
                  checked={teamPref === "solo"}
                  onChange={() => setTeamPref("solo")}
                  className="hack-radio"
                />
                <span className="hack-radio-label">Team of 1</span>
              </label>

              <label className="hack-radio-tile">
                <input
                  type="radio"
                  name="team_pref"
                  value="team_2"
                  checked={teamPref === "team_2"}
                  onChange={() => setTeamPref("team_2")}
                  className="hack-radio"
                />
                <span className="hack-radio-label">Team of 2</span>
              </label>

              <label className="hack-radio-tile">
                <input
                  type="radio"
                  name="team_pref"
                  value="team_3"
                  checked={teamPref === "team_3"}
                  onChange={() => setTeamPref("team_3")}
                  className="hack-radio"
                />
                <span className="hack-radio-label">Team of 3</span>
              </label>

              <label className="hack-radio-tile md:col-span-3">
                <input
                  type="radio"
                  name="team_pref"
                  value="match"
                  checked={teamPref === "match"}
                  onChange={() => setTeamPref("match")}
                  className="hack-radio"
                />
                <span className="hack-radio-label">Form a team on the day</span>
                <span className="hack-radio-desc">
                  Team matching at the venue
                </span>
              </label>
            </fieldset>
          </div>

          {/* Team member #1 */}
          {(teamPref === "team_2" || teamPref === "team_3") && (
            <>
              <div className="mt-8 space-y-1">
                <h3 className="font-mono text-lg font-bold">Contestant 2</h3>
                <p className="text-blue-200/70 text-sm">{teammate1Note}</p>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-blue-200/80">Full name</label>
                  <input
                    type="text"
                    name="second_name"
                    placeholder="e.g., Pat Taylor"
                    className="hack-input"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-blue-200/80">
                    Student email
                  </label>
                  <input
                    type="email"
                    name="second_email"
                    placeholder="e.g., abc23456@leeds.ac.uk"
                    className="hack-input"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-blue-200/80">
                    Dietary requirements
                  </label>
                  <input
                    type="text"
                    name="second_diet"
                    placeholder="e.g., Vegetarian / Vegan / Halal / None"
                    className="hack-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-blue-200/80">
                    Accessibility needs
                  </label>
                  <input
                    type="text"
                    name="second_disability"
                    placeholder="e.g., Wheelchair access, captions"
                    className="hack-input"
                  />
                </div>
              </div>
            </>
          )}

          {/* Team member #2 */}
          {teamPref === "team_3" && (
            <>
              <div className="mt-8 space-y-1">
                <h3 className="font-mono text-lg font-bold">Contestant 3</h3>
                <p className="text-blue-200/70 text-sm">{teammate2Note}</p>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-blue-200/80">Full name</label>
                  <input
                    type="text"
                    name="third_name"
                    placeholder="e.g., Sam Lee"
                    className="hack-input"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-blue-200/80">
                    Student email
                  </label>
                  <input
                    type="email"
                    name="third_email"
                    placeholder="e.g., abc34567@leeds.ac.uk"
                    className="hack-input"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-blue-200/80">
                    Dietary requirements
                  </label>
                  <input
                    type="text"
                    name="third_diet"
                    placeholder="e.g., Vegetarian / Vegan / Halal / None"
                    className="hack-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-blue-200/80">
                    Accessibility needs
                  </label>
                  <input
                    type="text"
                    name="third_disability"
                    placeholder="e.g., Wheelchair access, captions"
                    className="hack-input"
                  />
                </div>
              </div>
            </>
          )}

          {/* Teammates */}
          <div className="mt-8 space-y-1">
            <h3 className="font-mono text-lg font-bold">Teammates</h3>
            <p className="text-blue-200/70 text-sm">
              Only fill these if you’ve chosen Team of 2 or 3.
            </p>
          </div>

          {/* This section is purely visual for now; functionality will be added later. */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">
                Teammate #1 (optional)
              </label>
              <input
                type="text"
                name="mate1"
                placeholder="Jamie Lee"
                className="hack-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">
                Teammate #2 (optional)
              </label>
              <input
                type="text"
                name="mate2"
                placeholder="Sam Patel"
                className="hack-input"
              />
            </div>
          </div>

          {/* Extras */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">
                Dietary requirements (optional)
              </label>
              <input
                type="text"
                name="diet"
                placeholder="Vegetarian / Vegan / Halal / None"
                className="hack-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">
                Accessibility needs (optional)
              </label>
              <input
                type="text"
                name="access"
                placeholder="Wheelchair access, captions, etc."
                className="hack-input"
              />
            </div>
          </div>

          {/* Policies */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
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
          </div>

          {/* Actions */}
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button type="submit" className="hack-cta" disabled={pending}>
                <span className="hack-cta-glow" aria-hidden />
                <span className="hack-cta-label">
                  {pending ? "Submitting…" : "Submit registration"}
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

            <p className="mt-3 text-blue-200/60 text-xs sm:text-sm">
              Participant details can be updated later. Contact{" "}
              <Link href={"mailto:committee@leedsaisoc.co.uk"}>
                committee@leedsaisoc.co.uk
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
