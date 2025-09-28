import Image from "next/image";

export default function LandingWireframeNeon() {
  return (
    <main className="p-2 xxs:p-4">
      <section className="relative mx-auto flex flex-col lg:flex-row max-lg:items-center justify-center items-stretch gap-16">
        <div className="relative max-w-5xl flex-1">
          <div className="relative rounded-xl border border-white/10 bg-white/10 p-6 h-full">
            <h1 className="text-2xl xxs:text-3xl xl:text-5xl font-extrabold tracking-tight text-white">
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

          <svg
            aria-hidden
            className="pointer-events-none absolute -bottom-[63px] max-lg:left-1/2 max-lg:rotate-z-90 lg:bottom-14 lg:-right-[63px] transform -scale-x-100 lg:scale-x-100"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <path
              d="M0 64 L0 64 L0 0 L0 64 C32 64 48 50.6667 64 32 C32 32 24 32 0 0"
              fill="rgba(255,255,255,0.10)"
            />
            <path
              d="M0 0 C24 32 32 32 64 32 C48 50.6667 32 64 1.5 64"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Mascot and logo */}
        <div className="flex-1 w-full max-w-70 md:max-w-[calc(10rem+10rem-5rem)] aspect-square flex items-end relative ">
          <div className="relative z-10 flex h-full aspect-square items-center justify-center [perspective:1000px]">
            <div className="relative h-full w-full [transform-style:preserve-3d] animate-flip-hold">
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <Image
                  src="/mascot.png"
                  alt="Mascot of the Artificial Intelligence Society"
                  fill
                />
              </div>
              {/* Back */}
              <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden]">
                <Image
                  src={"/logo.png"}
                  alt="Logo of the Artificial Intelligence Society"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
