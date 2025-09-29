import Link from "next/link";
import "../hack.css";
import "./hack-register.css";

export default function HackathonRegisterPage() {
  return (
    <main className="relative overflow-hidden bg-[#0b1424] text-white">
      {/* Header */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-6">
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
      </section>

      {/* Form Card */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <form
          action="#"
          method="post"
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-8"
        >
          {/* Registrant */}
          <div className="space-y-1">
            <h2 className="font-mono text-xl md:text-2xl font-bold">
              Your details
            </h2>
            <p className="text-blue-200/70 text-sm">
              Please use your University of Leeds email.
            </p>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">Full name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Alex Johnson"
                className="hack-input"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-blue-200/80">Student email</label>
              <input
                type="email"
                name="email"
                placeholder="abc12345@leeds.ac.uk"
                className="hack-input"
                inputMode="email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* Team option */}
          <div className="mt-8 space-y-2">
            <h3 className="font-mono text-lg font-bold">Team preference</h3>
            <fieldset className="grid gap-3 md:grid-cols-3">
              <label className="hack-radio-tile">
                <input
                  type="radio"
                  name="teamSize"
                  value="solo"
                  defaultChecked
                  className="hack-radio"
                />
                <span className="hack-radio-label">Solo (1)</span>
                <span className="hack-radio-desc">
                  I’ll participate by myself
                </span>
              </label>

              <label className="hack-radio-tile">
                <input
                  type="radio"
                  name="teamSize"
                  value="two"
                  className="hack-radio"
                />
                <span className="hack-radio-label">Team of 2</span>
                <span className="hack-radio-desc">
                  My teammate will join me
                </span>
              </label>

              <label className="hack-radio-tile">
                <input
                  type="radio"
                  name="teamSize"
                  value="three"
                  className="hack-radio"
                />
                <span className="hack-radio-label">Team of 3</span>
                <span className="hack-radio-desc">Two teammates with me</span>
              </label>

              <label className="hack-radio-tile md:col-span-3">
                <input
                  type="radio"
                  name="teamSize"
                  value="match"
                  className="hack-radio"
                />
                <span className="hack-radio-label">Form a team on the day</span>
                <span className="hack-radio-desc">
                  I’d like help finding teammates at the venue
                </span>
              </label>
            </fieldset>
          </div>

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
                <span>
                  Open to University of Leeds students only. Please bring your
                  student ID on the day.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80 mt-1.5" />
                <span>It’s free to join. Food and refreshments provided.</span>
              </li>
              <li className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80 mt-1.5" />
                <span>
                  AI‑generated code is allowed. Be transparent about your use of
                  AI tools.
                </span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button type="submit" className="hack-cta">
                <span className="hack-cta-glow" aria-hidden />
                <span className="hack-cta-label">Submit registration</span>
              </button>

              <Link href="/hackathon" className="hack-cta-ghost">
                <span className="hack-cta-ghost-glow" aria-hidden />
                <span className="hack-cta-label">Back to overview</span>
              </Link>
            </div>

            {/* Small reassurance line */}
            <p className="mt-3 text-blue-200/60 text-xs sm:text-sm">
              You can edit or complete teammate details later.
            </p>
          </div>

          {/* Event diary summary */}
          <div className="mt-8 text-blue-200/70 text-sm">
            Event: Saturday, 11 Oct 2025 · 10:00–20:00 · Helix, EC Stoner ·
            University of Leeds
          </div>
        </form>
      </section>
    </main>
  );
}
