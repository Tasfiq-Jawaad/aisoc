"use client";

import Link from "next/link";
import React, { isValidElement, useState } from "react";

const Section = ({
  title,
  subtitle,
  id,
  children,
}: {
  title: string;
  subtitle?: string;
  id: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="relative mb-8 md:mb-12">
    <div className="flex items-baseline justify-between gap-3">
      <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-sm md:text-base text-gray-400">{subtitle}</p>
      ) : null}
    </div>
    <div className="mt-5 text-gray-300 leading-relaxed">{children}</div>
  </section>
);

const SubSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mt-8">
    <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
    <div className="mt-3 space-y-3 text-gray-300">{children}</div>
  </div>
);

const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.95em] text-gray-100">
    {children}
  </code>
);

const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-5 space-y-2 text-gray-300">
    {items.map((li, i) => (
      <li key={i}>{li}</li>
    ))}
  </ul>
);

const Divider = () => (
  <div className="my-10 md:my-14 relative">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-0.5 w-24 [background:#eb5b6c80] blur-sm" />
  </div>
);

const CopyButton = ({
  onClick,
  copied,
}: {
  onClick: () => void;
  copied: boolean;
}) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/10 hover:bg-white/15 active:bg-white/20 transition"
    aria-label={copied ? "Copied" : "Copy code"}
    title={copied ? "Copied" : "Copy"}
  >
    {copied ? (
      // simple check icon
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        className="text-emerald-400"
      >
        <path
          d="M7.5 10.5l2 2 4-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      // copy icon
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        className="text-gray-300"
      >
        <rect
          x="6"
          y="6"
          width="11"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <rect
          x="3"
          y="3"
          width="11"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.6"
        />
      </svg>
    )}
    <span>{copied ? "Copied" : "Copy"}</span>
  </button>
);

const CodeBlock = ({
  language,
  children,
}: {
  language?: string;
  children: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);
  // Stringify children content for copying
  const raw =
    typeof children === "string"
      ? children
      : Array.isArray(children)
      ? children.join("")
      : isValidElement(children)
      ? (() => {
          const c = children as unknown;
          // Narrow: React elements have props
          if (
            typeof c === "object" &&
            c !== null &&
            "props" in c &&
            typeof (c as { props?: unknown }).props === "object" &&
            (c as { props?: { children?: unknown } }).props !== null
          ) {
            const maybeChildren = (c as { props: { children?: unknown } }).props
              .children;
            return typeof maybeChildren === "string" ? maybeChildren : "";
          }
          return "";
        })()
      : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(raw as string);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  const langLabel = (language || "text").toLowerCase();

  return (
    <div className="relative mt-3 rounded-md ring-1 ring-white/10 bg-black/60">
      {/* Top bar with language label and copy button */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <span className="text-xs font-medium tracking-wide text-gray-300">
          {langLabel}
        </span>
        <CopyButton onClick={handleCopy} copied={copied} />
      </div>

      <pre className="overflow-x-auto p-4 text-gray-100">
        <code className={`block text-sm leading-relaxed language-${langLabel}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

const OSCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
    <div className="text-sm font-semibold text-gray-300">{title}</div>
    <div className="mt-2 text-gray-300">{children}</div>
  </div>
);

const OSStack = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 space-y-4">{children}</div>
);

// Configurable author meta (you can also pass these as props if you prefer)
const AUTHOR_NAME = "Mohammad Tasfiq Jawaad";
const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/mohammad-tasfiq-jawaad";
const AUTHOR_GITHUB = "https://github.com/Tasfiq-Jawaad";
const LAST_UPDATED = "Updated: 5 Nov 2025";

export default function LocalAIWorkshopBlogStyled() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Page header with subtle brand glow (matching Events page) */}
      <section className="relative mb-8 md:mb-12">
        <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full [background:#eb5b6c22] blur-[72px]" />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Local AI on Your Device: Hands‑On with Ollama & LM Studio
        </h1>
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          Learn the core ideas behind running AI models locally, then follow
          step‑by‑step instructions on Windows, macOS, or Linux to run models,
          structure outputs, call local APIs, and query your own documents.
        </p>

        {/* Author meta row */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <span className="inline-flex items-center gap-2">
            <span className="text-gray-300 font-medium">{AUTHOR_NAME}</span>
            <span aria-hidden className="text-gray-600">
              •
            </span>
            <Link
              href={AUTHOR_LINKEDIN}
              className="[color:#eb5b6c] hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <span aria-hidden className="text-gray-600">
              •
            </span>
            <Link
              href={AUTHOR_GITHUB}
              className="[color:#eb5b6c] hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </span>
          <span aria-hidden className="text-gray-600">
            •
          </span>
          <span>{LAST_UPDATED}</span>
        </div>

        <div className="mt-3 h-1 w-24 rounded-full [background:#eb5b6c99]" />
      </section>

      {/* Table of contents */}
      {/* <section
        aria-labelledby="toc-heading"
        className="relative mb-8 md:mb-12 rounded-lg border border-white/10 bg-white/[0.03] p-4"
      >
        <h2
          id="toc-heading"
          className="text-sm font-semibold uppercase tracking-wide text-gray-300"
        >
          On this page
        </h2>
        <ol className="mt-3 space-y-2 text-gray-400">
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#theory"
            >
              1. Theory: Plain‑English Foundations
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#setup"
            >
              2. Setup (Per‑OS)
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#first-run"
            >
              3. Your First Run (Per‑OS)
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#formatting"
            >
              4. Making Models Obey Formats
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#apis"
            >
              5. Local APIs (Per‑OS where different)
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#rag"
            >
              6. Tiny RAG: Ask Over Your Docs (Per‑OS notes)
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#customization"
            >
              7. Customization with Modelfiles (Ollama)
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#lmstudio"
            >
              8. LM Studio Tips & Comparisons
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#troubleshooting"
            >
              9. Troubleshooting
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#exercises"
            >
              10. Try‑It‑Now Exercises
            </Link>
          </li>
        </ol>
      </section> */}

      <Section id="theory" title="Local AI fundamentails">
        <SubSection title="Model size (parameters: 7B, 13B, 70B)">
          <p>
            Parameters are tiny “knobs” a model uses to represent patterns in
            language. More knobs (7B → 13B → 70B) often means better reasoning
            but higher memory and slower responses.
          </p>
          <List
            items={[
              <>
                <strong>7–8B</strong>: Great on laptops (e.g., Llama 3 8B
                Instruct, Qwen2.5 7B Instruct).
              </>,
              <>
                <strong>13B</strong>: Better reasoning; needs more memory (Llama
                3 13B Instruct).
              </>,
              <>
                <strong>70B</strong>: Very capable; usually impractical locally.
              </>,
            ]}
          />
        </SubSection>

        <SubSection title="Tokens and context window">
          <p>
            Models read/write in <strong>tokens</strong> (small text chunks).
            The <strong>context window</strong> is the model’s short‑term
            memory—your instructions + any pasted docs + the model’s reply. If
            you exceed it, older parts fall off.
          </p>
          <p className="text-gray-400">
            Example: A <strong>4k token</strong> window fits roughly 2.5–3k
            words combined (prompt + answer).
          </p>
        </SubSection>

        <SubSection title="Quantization (Q2, Q3, Q4, Q5, Q8)">
          <p>
            Quantization compresses a model so it fits and runs faster—like
            saving a high‑res photo as a smaller JPEG. You lose a bit of
            fidelity but gain speed and lower memory use.
          </p>
          <List
            items={[
              <>
                Start with <strong>Q4</strong> for balance on laptops.
              </>,
              <>
                Tight memory? Try <strong>Q3</strong>.
              </>,
              <>
                More headroom and quality? Try <strong>Q5/Q8</strong>.
              </>,
            ]}
          />
          <p className="text-gray-400">
            Flavors like <InlineCode>Q4_K_M</InlineCode> are just different
            compression strategies.
          </p>
        </SubSection>

        <SubSection title="Precision types (FP16, BF16, INT8, INT4)">
          <p>
            Precision describes how detailed the model’s numbers are.{" "}
            <strong>FP16/BF16</strong> are higher‑detail (common in GPU stacks).
            <strong> INT8/INT4</strong> are smaller/faster (common in local{" "}
            <InlineCode>GGUF</InlineCode> files).
          </p>
        </SubSection>

        <SubSection title="Model files: GGUF vs safetensors">
          <p>
            <strong>GGUF</strong> is for llama.cpp tools (Ollama, LM Studio).
            <strong> safetensors</strong> is for PyTorch/Transformers; not
            directly loaded here. For this guide, choose <strong>GGUF</strong>.
          </p>
        </SubSection>

        <SubSection title="Base vs Instruct/Chat models">
          <p>
            <strong>Base</strong> models are book‑smart but not very obedient.{" "}
            <strong>Instruct/Chat</strong> models are tuned to follow
            directions—use these for everyday tasks and assistants.
          </p>
        </SubSection>

        <SubSection title="Fine‑tuning, instruction‑tuning, distillation, adapters (LoRA/QLoRA)">
          <List
            items={[
              <>
                <strong>Fine‑tuning</strong>: Teach a specialty (e.g., legal
                summaries).
              </>,
              <>
                <strong>Instruction‑tuning</strong>: Improves following
                directions.
              </>,
              <>
                <strong>Distillation</strong>: Big teacher → small student; fast
                yet capable.
              </>,
              <>
                <strong>Adapters (LoRA/QLoRA)</strong>: Snap‑on skill modules;
                QLoRA works on quantized bases.
              </>,
            ]}
          />
        </SubSection>

        <SubSection title="Embeddings, vector DBs, and RAG">
          <p>
            <strong>Embeddings</strong> turn text into vectors; a{" "}
            <strong>vector DB</strong> (Chroma/FAISS) finds similar chunks.{" "}
            <strong>RAG</strong> retrieves those chunks and feeds them to the
            model, grounding answers in your sources for fewer hallucinations.
          </p>
        </SubSection>

        <SubSection title="Creativity knobs: temperature, top_p, top_k">
          <p>
            <strong>Temperature</strong> controls creativity (lower = safer,
            higher = more adventurous). <strong>top_p</strong> and{" "}
            <strong>top_k</strong> limit candidate next words. For strict
            formats like JSON, lower temperature helps.
          </p>
        </SubSection>

        <SubSection title="RAM and the KV cache">
          <p>
            Models must fit in memory, and while generating they build a{" "}
            <strong>KV cache</strong> that grows with prompt and output length.
            Longer contexts and replies use more memory.
          </p>
          <List
            items={[
              <>
                <strong>8 GB RAM</strong>: 7–8B at Q4, keep context 2–4k tokens.
              </>,
              <>
                <strong>16 GB RAM</strong>: 7–13B at Q4 is comfortable.
              </>,
              <>
                <strong>32 GB RAM</strong>: 13B at Q4/Q5; larger if you accept
                slower speeds.
              </>,
            ]}
          />
        </SubSection>

        <SubSection title="Local vs cloud">
          <p>
            Local is private, offline, and cost‑predictable. Cloud offers the
            biggest, most capable models. Many prototype and handle private data
            locally, then use cloud for the toughest reasoning.
          </p>
        </SubSection>
      </Section>

      <Divider />

      <Section id="setup" title="Setup (Per‑OS)">
        <SubSection title="Install Ollama">
          <OSStack>
            <OSCard title="Windows (PowerShell)">
              <List
                items={[
                  <>
                    Download and run the installer from{" "}
                    <Link
                      className="[color:#eb5b6c] hover:text-white transition"
                      href="https://ollama.com/download"
                    >
                      https://ollama.com/download
                    </Link>
                    .
                  </>,
                  <>Open PowerShell or Command Prompt.</>,
                  <>
                    Verify the install:
                    <CodeBlock language="bash">{`ollama --version
ollama ps`}</CodeBlock>
                  </>,
                ]}
              />
            </OSCard>

            <OSCard title="macOS (Terminal)">
              <List
                items={[
                  <>Install Homebrew if you don’t have it (brew.sh).</>,
                  <>
                    Install and verify:
                    <CodeBlock language="bash">{`brew install ollama
ollama --version
ollama ps`}</CodeBlock>
                  </>,
                ]}
              />
            </OSCard>

            <OSCard title="Linux (Shell)">
              <List
                items={[
                  <>
                    Install via script:
                    <CodeBlock language="bash">{`curl -fsSL https://ollama.com/install.sh | sh`}</CodeBlock>
                  </>,
                  <>
                    Verify:
                    <CodeBlock language="bash">{`ollama --version
ollama ps`}</CodeBlock>
                  </>,
                ]}
              />
            </OSCard>
          </OSStack>
        </SubSection>

        <SubSection title="Install LM Studio">
          <OSStack>
            <OSCard title="Windows">
              <p>
                Download the installer from{" "}
                <Link
                  className="[color:#eb5b6c] hover:text-white transition"
                  href="https://lmstudio.ai"
                >
                  https://lmstudio.ai
                </Link>{" "}
                and follow the prompts. Launch from Start Menu.
              </p>
            </OSCard>

            <OSCard title="macOS">
              <p>
                Download the app from{" "}
                <Link
                  className="[color:#eb5b6c] hover:text-white transition"
                  href="https://lmstudio.ai"
                >
                  https://lmstudio.ai
                </Link>
                , drag to Applications, then open it.
              </p>
            </OSCard>

            <OSCard title="Linux">
              <p>
                Download the Linux build from{" "}
                <Link
                  className="[color:#eb5b6c] hover:text-white transition"
                  href="https://lmstudio.ai"
                >
                  https://lmstudio.ai
                </Link>{" "}
                and follow distro‑specific instructions provided on their site.
              </p>
            </OSCard>
          </OSStack>
        </SubSection>

        <SubSection title="Prerequisites & Tips">
          <List
            items={[
              <>Have 10–20 GB free disk space for multiple models.</>,
              <>Close heavy apps to free RAM before loading models.</>,
              <>
                If Python isn’t installed: Windows (Microsoft Store or
                python.org), macOS (Xcode tools or pyenv), Linux (distro
                package).
              </>,
            ]}
          />
        </SubSection>
      </Section>
    </main>
  );
}
