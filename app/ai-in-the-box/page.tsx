"use client";

import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  MapPin,
  Terminal,
  TerminalSquare,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// --- CSS Styles ---
const GLOBAL_STYLES = `
  .gpu-accelerated {
    transform: translateZ(0);
    will-change: transform, opacity;
  }

  /* Entrance Animations */
  .reveal-base {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal-active {
    opacity: 1;
    transform: translateY(0);
  }

  /* Floating Elements */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  /* Pulse Glow */
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }

  .glow-effect {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    z-index: -1;
    animation: pulse-glow 8s ease-in-out infinite;
  }

  /* --- BACKGROUND STYLES --- */
  @keyframes ambient-drift {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(4%, -6%) scale(1.05); }
    66% { transform: translate(-3%, 5%) scale(0.95); }
    100% { transform: translate(0, 0) scale(1); }
  }

  .aurora-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    will-change: transform;
    animation: ambient-drift 25s ease-in-out infinite alternate;
  }
  
  .aurora-1 { 
    width: 60vw; height: 60vh; 
    background: rgba(16, 185, 129, 0.2); 
    top: -10%; left: -10%; 
    animation-duration: 30s; 
  }
  
  .aurora-2 { 
    width: 70vw; height: 70vh; 
    background: rgba(13, 148, 136, 0.15); 
    bottom: -20%; right: -10%; 
    animation-duration: 25s; 
    animation-direction: alternate-reverse; 
  }
  
  .aurora-3 { 
    width: 50vw; height: 50vh; 
    background: rgba(6, 78, 59, 0.25); 
    top: 30%; left: 20%; 
    animation-duration: 35s; 
  }
  
  .blueprint-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(52, 211, 153, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(52, 211, 153, 0.05) 1px, transparent 1px),
      radial-gradient(circle at center, rgba(52, 211, 153, 0.2) 1.5px, transparent 1.5px);
    background-size: 60px 60px, 60px 60px, 60px 60px;
    background-position: -1px -1px, -1px -1px, 29px 29px;
  }
`;

// --- Custom Hooks ---
const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
};

// --- Components ---

// 1. Countdown Timer Component
const CountdownTimer = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-05-02T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="h-24" />;

  return (
    <div className="flex gap-4 md:gap-8 justify-center mt-12 mb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-emerald-950/50 backdrop-blur-md border border-emerald-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-b from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-3xl md:text-5xl font-black text-emerald-400 font-mono">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-emerald-200/50 text-xs md:text-sm font-mono uppercase tracking-widest mt-3">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

// 2. Emerald Mesh & Blueprint Background
const BackgroundCanvas = React.memo(() => {
  return (
    <div className="fixed inset-0 -z-50 bg-[#01140e] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden gpu-accelerated">
        <div className="aurora-orb aurora-1" />
        <div className="aurora-orb aurora-2" />
        <div className="aurora-orb aurora-3" />
      </div>
      <div className="blueprint-grid gpu-accelerated" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(1,20,14,0.8)_120%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
});
BackgroundCanvas.displayName = "BackgroundCanvas";

// --- Main Page Component ---
export default function AIInTheBoxHackathon() {
  const { ref: heroRef, isIntersecting: heroVisible } = useIntersectionObserver(
    { threshold: 0.1 },
  );
  const { ref: aboutRef, isIntersecting: aboutVisible } =
    useIntersectionObserver({ threshold: 0.2 });
  const { ref: prizeRef, isIntersecting: prizeVisible } =
    useIntersectionObserver({ threshold: 0.2 });
  const { ref: sponsorRef, isIntersecting: sponsorVisible } =
    useIntersectionObserver({ threshold: 0.2 });
  const { ref: logisticsRef, isIntersecting: logisticsVisible } =
    useIntersectionObserver({ threshold: 0.2 });

  const navLinks = [
    {
      displayName: "Overview",
      url: "hack_ai_thon",
    },
    {
      displayName: "Submit",
      url: "hack_ai_thon/submit",
    },
    {
      displayName: "Theme",
      url: "hack_ai_thon#theme",
    },
    {
      displayName: "Sponsors",
      url: "hack_ai_thon#sponsors",
    },
    {
      displayName: "Ideas",
      url: "hack_ai_thon#ideas",
    },
    {
      displayName: "Faq",
      url: "hack_ai_thon#faq",
    },
    {
      displayName: "Contact",
      url: "contact",
    },
    {
      displayName: "AISoc",
      url: "",
    },
  ];

  return (
    <main className="min-h-dvh w-full relative font-sans selection:bg-emerald-500/30 text-white">
      <style>{GLOBAL_STYLES}</style>
      <BackgroundCanvas />

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="min-h-dvh flex flex-col items-center justify-center relative px-4 pb-12"
      >
        {/* Top Nav */}
        <nav className="relative w-full md:mx-auto max-w-5xl py-6">
          {/* Toggle (hidden checkbox) */}
          <input
            id="menu-toggle"
            type="checkbox"
            className="menu-toggle"
            aria-label="Toggle menu"
          />

          {/* Bar: brand + hamburger */}
          <div className="md:hidden flex items-center justify-end px-2 md:px-0">
            {/* Hamburger button (label controls the checkbox) */}
            <label
              htmlFor="menu-toggle"
              className="hamburger md:hidden"
              aria-hidden="true"
            >
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          {/* Desktop nav */}
          <div className="mt-2 hidden md:block">
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg md:text-xl">
              {navLinks.map((item) => (
                <Link
                  key={item.displayName}
                  href={`/${item.url}`}
                  className="group relative px-1 text-gray-300 transition-colors hover:text-white"
                >
                  {item.displayName}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <div className="mobile-menu md:hidden">
            <div className="mobile-menu-inner">
              {navLinks.map((item) => (
                <Link
                  key={item.displayName}
                  href={`/${item.url}`}
                  className="mobile-link"
                >
                  {item.displayName}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div
          className={`text-center z-10 max-w-5xl reveal-base grow flex flex-col items-center justify-center ${heroVisible ? "reveal-active" : ""}`}
        >
          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-sm">
            <Terminal size={14} className="text-emerald-400" />
            <span className="font-mono text-emerald-400 tracking-widest uppercase">
              // HACKATHON_2026
            </span>
          </div>

          <h1 className="text-[12vw] md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-6">
            AI IN THE
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-300 via-emerald-400 to-teal-200">
              BOX
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-emerald-100/70 font-mono tracking-wide uppercase text-sm md:text-base mt-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-emerald-400" size={18} />
              <span>2–3 May 2026</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-emerald-500/50" />
            <div className="flex items-center gap-3">
              <MapPin className="text-emerald-400" size={18} />
              <span>Helix, Level 7, E C Stoner Building, Leeds</span>
            </div>
          </div>

          <CountdownTimer />

          <Link href="/register" className="inline-block mt-4">
            <button className="group relative flex items-center gap-4 px-8 py-5 rounded-full bg-emerald-500 text-emerald-950 font-bold uppercase tracking-wider overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Secure Your Spot</span>
              <ChevronRight
                size={20}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section ref={aboutRef} className="py-24 px-4 relative">
        <div
          className={`max-w-6xl mx-auto reveal-base ${aboutVisible ? "reveal-active" : ""}`}
        >
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Step into the future.
            </h2>
            <p className="text-lg text-emerald-100/70 leading-relaxed">
              Unleash your creativity at AI in the Box. This immersive 24-hour
              hackathon challenges you to design, build, and showcase innovative
              artificial intelligence applications from the ground up. Whether
              you are developing smart assistants, predictive models, or
              generative AI tools, this is your opportunity to bring your
              boldest ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm hover:bg-emerald-900/40 transition-colors">
              <TerminalSquare className="text-emerald-400 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3">Build Cutting-Edge AI</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                Work collaboratively to create functional, AI-driven
                applications. Solve real-world problems and demo a complete
                project built entirely from scratch in just 24 hours.
              </p>
            </div>

            <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm hover:bg-emerald-900/40 transition-colors">
              <Users className="text-emerald-400 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3">Teams of Four</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                Hack alone or form squads of up to 4 members. Bring your own
                team, or meet fellow tech enthusiasts and form a new team on the
                day of the event.
              </p>
            </div>

            <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm hover:bg-emerald-900/40 transition-colors">
              <Globe className="text-emerald-400 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3">Network & Learn</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                You won't be building in isolation. Connect with industry
                experts, technical mentors, and fellow student developers
                throughout the entirety of the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZE SECTION */}
      <section ref={prizeRef} className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className={`relative rounded-3xl border border-emerald-500/20 bg-emerald-950/20 backdrop-blur-xl p-8 md:p-16 overflow-hidden reveal-base ${prizeVisible ? "reveal-active" : ""}`}
          >
            <div className="glow-effect bg-emerald-500/20 w-[300px] h-[300px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 text-emerald-400 font-mono uppercase tracking-widest text-sm">
                  <Trophy size={16} />
                  <span>The Rewards</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Build to <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-300 to-teal-400">
                    Win.
                  </span>
                </h2>
                <p className="text-lg text-emerald-100/60 leading-relaxed">
                  Compete for your share of over £2,000 in total prizes, awarded
                  across multiple hackathon categories and technical challenges!
                </p>
              </div>

              <div className="relative flex justify-center items-center animate-float">
                <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-3xl scale-150" />
                <div className="relative border border-emerald-400/30 bg-emerald-900/50 rounded-full w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                  <span className="text-2xl font-mono text-emerald-400/80 mb-2 uppercase tracking-widest">
                    Prize Pool
                  </span>
                  <span className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    £2k
                  </span>
                </div>
                <div className="absolute top-10 -left-4 bg-emerald-950 border border-emerald-500/30 px-4 py-2 rounded-full text-xs font-mono text-emerald-300 flex items-center gap-2 shadow-xl">
                  <Zap size={12} /> Innovation
                </div>
                <div className="absolute bottom-10 -right-4 bg-emerald-950 border border-emerald-500/30 px-4 py-2 rounded-full text-xs font-mono text-emerald-300 flex items-center gap-2 shadow-xl">
                  <Code2 size={12} /> Technical Depth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION LOGISTICS SECTION (Terminal Theme) */}
      <section ref={logisticsRef} className="py-24 px-4 relative">
        <div
          className={`max-w-4xl mx-auto reveal-base ${logisticsVisible ? "reveal-active" : ""}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Registration Protocol
            </h2>
            <p className="text-emerald-100/60">
              Spaces are strictly limited. Secure your spot early.
            </p>
          </div>

          <div className="bg-[#02140e] border border-emerald-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            {/* Terminal Header */}
            <div className="bg-emerald-950/80 px-4 py-3 border-b border-emerald-500/30 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="mx-auto text-emerald-500/50 text-xs font-mono tracking-widest uppercase">
                register.sh
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-10 font-mono text-sm md:text-base space-y-6">
              <div className="space-y-2">
                <p className="text-emerald-500/70">~ $ ./check_eligibility</p>
                <p className="text-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0 w-5 h-5 mt-0.5" />
                  <span>
                    <strong className="text-emerald-300">
                      Open to all university students.
                    </strong>{" "}
                    Valid university ID required on the day.
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-emerald-500/70">~ $ ./get_pricing</p>
                <p className="text-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0 w-5 h-5 mt-0.5" />
                  <span>
                    <strong className="text-emerald-300">
                      £0.00 (Completely Free).
                    </strong>{" "}
                    There is no registration fee to participate.
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-emerald-500/70">
                  ~ $ ./team_formation --rules
                </p>
                <div className="text-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0 w-5 h-5 mt-0.5" />
                  <div>
                    <span className="block mb-2">
                      <strong className="text-emerald-300">
                        Individual Registration Required.
                      </strong>{" "}
                      Even if you plan to participate as a group, every single
                      team member must secure their own ticket individually.
                    </span>
                    <span className="block text-emerald-100/60 text-sm">
                      {" "}
                      Once registered, you will be sent instructions on how to
                      form a team. You can also make changes or find teammates
                      on the day!
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-emerald-400 animate-pulse">_</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/register">
              <button className="px-8 py-4 rounded-full border border-emerald-500 text-emerald-400 font-mono uppercase tracking-widest hover:bg-emerald-500 hover:text-emerald-950 transition-colors duration-300">
                Execute Registration
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SPONSOR SECTION */}
      <section ref={sponsorRef} className="py-24 px-4 relative overflow-hidden">
        <div
          className={`max-w-4xl mx-auto text-center reveal-base ${sponsorVisible ? "reveal-active" : ""}`}
        >
          <p className="text-emerald-500/80 font-mono text-sm uppercase tracking-[0.3em] mb-8">
            Headline Sponsor
          </p>

          <div className="group relative p-1 rounded-2xl bg-linear-to-b from-emerald-500/40 to-transparent transition-all duration-500 hover:from-emerald-400/60 mx-auto max-w-2xl cursor-pointer">
            <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#021c14] border border-emerald-900/50 rounded-xl p-12 md:p-20 flex flex-col items-center justify-center gap-6 overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(52,211,153,1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
              <Cpu className="text-emerald-400/50 w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                Leaning <br className="md:hidden" /> Technologies
              </h3>
              <p className="text-emerald-100/40 font-mono text-sm tracking-widest uppercase mt-4">
                Powering the next generation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
