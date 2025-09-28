export default function LandingWireframeNeon() {
  return (
    <main className="p-2 xxs:p-4">
      <section className="relative mx-auto">
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h1 className="text-2xl xxs:text-3xl font-extrabold tracking-tight text-white">
              Leeds Artificial Intelligence Society |
            </h1>
            <p className="mt-5 text-lg text-gray-400">
              Your home for all things artificial intelligence at the University
              of Leeds
            </p>

            <div className="mt-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Chat here..."
                  aria-label="Chat here"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
