"use client";

import { useEffect, useRef } from "react";

export default function StackedCards() {
  const stackAreaRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const stackArea = stackAreaRef.current;
    if (!stackArea || !cards.length) return;

    function rotateCards() {
      let angle = 0;
      cards.forEach((card, index) => {
        if (!card) return;
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle = angle - 10;
          card.style.zIndex = String(cards.length - index);
        }
      });
    }

    function onScroll() {
      const distance = window.innerHeight * 0.3;
      const topVal = stackArea!.getBoundingClientRect().top;
      let index = -1 * (topVal / distance + 1);
      index = Math.floor(index);

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;
        if (i <= index) {
          card.classList.add("away");
        } else {
          card.classList.remove("away");
        }
      }
      rotateCards();
    }

    // Initial layout
    rotateCards();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const setCardRef =
    (i: number) =>
    (el: HTMLDivElement | null): void => {
      if (el) cardRefs.current[i] = el;
    };

  return (
    <>
      {/* Styles (move to CSS file if preferred) */}
      <style>{`
        .left {
          height: 100vh;
          flex-basis: 50%;
          position: sticky;
          top: 0;
          left: 0;
        }
        .right {
          height: 100vh;
          flex-basis: 50%;
          position: sticky;
          top: 0;
        }
        .left {
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          flex-direction: column;
        }
        .card {
          width: 350px;
          height: 350px;
          border-radius: 25px;
          margin-bottom: 10px;
          position: absolute;
          top: calc(50% - 175px);
          left: calc(50% - 175px);
          transition: 0.5s ease-in-out;
          box-sizing: border-box;
          padding: 35px;
          display: flex;
          flex-direction: column;
        }
        .sub {
          font-family: poppins, sans-serif;
          font-size: 20px;
          font-weight: 700;
        }
        .content {
          font-family: poppins, sans-serif;
          font-size: 44px;
          font-weight: 700;
          line-height: 54px;
        }
        .away {
          transform-origin: bottom left;
        }
      `}</style>

      <div
        id="ideas"
        className="relative max-w-7xl w-full h-[calc(180dvh+100vh)] mx-auto px-4 md:px-6 py-10 md:py-12 flex flex-col"
        ref={stackAreaRef}
      >
        <div className="h-[100dvh] flex flex-col justify-center gap-5">
          <h3 className="title font-mono text-2xl md:text-3xl lg:text-5xl  font-bold">
            Unleash your innovation
          </h3>
          <p className="sub-title font-mono text-xl md:text-2xl">
            Chose from an example or bring your idea.
            <br />
          </p>
        </div>

        <div className="right sticky top-0 basic-1/2 h-[100dvh]">
          <article
            className={`card top-[calc(50%-150px)] group rounded-2xl border border-white/10 p-5 md:p-6 backdrop-blur-sm overflow-hidden absolute w-[300px] h-[300px] bg-[#17202F] flex flex-col justify-center`}
            style={{
              transform: `rotate(0deg)`,
              zIndex: `3`,
            }} // negative for -rotate
            ref={setCardRef(0)}
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl group-hover:bg-blue-400/15 transition" />
            <h4 className="font-mono text-lg font-bold">Students</h4>
            <ul className="mt-3 space-y-2 text-blue-100/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Study copilots & revision planners</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Note summarisation & concept linking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Accessibility & assistive tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Wellbeing nudges and check‑ins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>etc</span>
              </li>
            </ul>
          </article>

          <article
            className={`card top-[calc(50%-150px)] group rounded-2xl border border-white/10 p-5 md:p-6 backdrop-blur-sm overflow-hidden absolute w-[300px] h-[300px] bg-[#17202F] flex flex-col justify-center`}
            style={{
              transform: `rotate(10deg)`,
              zIndex: `2`,
            }} // negative for -rotate
            ref={setCardRef(1)}
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl group-hover:bg-blue-400/15 transition" />
            <h4 className="font-mono text-lg font-bold">Educators</h4>
            <ul className="mt-3 space-y-2 text-blue-100/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Lecture material assistants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Assessment & feedback support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Interactive content generation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Insights on learning gaps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>etc</span>
              </li>
            </ul>
          </article>

          <article
            className={`card top-[calc(50%-150px)] group rounded-2xl border border-white/10 p-5 md:p-6 backdrop-blur-sm overflow-hidden absolute w-[300px] h-[300px] bg-[#17202F] flex flex-col justify-center`}
            style={{
              transform: `rotate(20deg)`,
              zIndex: `1`,
            }} // negative for -rotate
            ref={setCardRef(2)}
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl group-hover:bg-blue-400/15 transition" />
            <h4 className="font-mono text-lg font-bold">Universities</h4>
            <ul className="mt-3 space-y-2 text-blue-100/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Signal early wellbeing/engagement risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Smarter outreach & comms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Feedback analysis & themes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>Service discovery chatbots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                <span>etc</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}
