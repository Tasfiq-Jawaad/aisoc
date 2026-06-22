"use client";

import Link from "next/link";
import React, { isValidElement, useState } from "react";

import { GlowBlob } from "@/components/ui/GlowBlob";

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
    <div className="mt-5 text-gray-300 leading-relaxed md:text-xl">
      {children}
    </div>
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
    <h3 className="text-lg md:text-2xl font-semibold text-white">{title}</h3>
    <div className="mt-3 space-y-3 text-gray-300 md:text-xl">{children}</div>
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
    <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-1 w-32 [background:#eb5b6c80] blur-sm" />
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

const AUTHOR_NAME = "Mohammad Tasfiq Jawaad";
const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/mohammad-tasfiq-jawaad";
const AUTHOR_GITHUB = "https://github.com/Tasfiq-Jawaad";
const LAST_UPDATED = "Updated: 19 Nov 2025";

export default function page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      <section className="relative mb-8 md:mb-12">
        <GlowBlob />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Talk to the Future II: Make an AI chatbot with local AI
        </h1>
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          Welcome to the workshop! This guide is your companion document,
          containing all the key commands, code snippets, and links you&apos;ll
          need to follow along.
        </p>

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

      <Section id="cross-platform" title="A Note on Cross-Platform Commands">
        <p>
          The commands in this guide are written to be as universal as possible
          and should work on macOS, Linux (in a terminal), and Windows (in
          PowerShell or Command Prompt).
        </p>
        <List
          items={[
            <>
              <b>Terminal:</b> On macOS and Linux, you&apos;ll use the
              &quot;Terminal&quot; application. On Windows, we recommend using
              &quot;Windows Terminal&quot; with either a PowerShell or Command
              Prompt shell.
            </>,
            <>
              <b>
                <InlineCode>curl</InlineCode>:
              </b>{" "}
              This command-line tool is essential for interacting with APIs. We
              will cover its installation during the session, so there&apos;s no
              need to install it beforehand.
            </>,
            <>
              <b>
                <InlineCode>curl</InlineCode> on Windows:
              </b>{" "}
              <InlineCode>curl</InlineCode> is included with macOS and most
              Linux distributions. Modern versions of Windows 10/11 also include
              it. If the <InlineCode>curl</InlineCode> command doesn&apos;t
              work, it might not be installed or in your system&apos;s PATH. You
              can easily get it by installing{" "}
              <Link
                href="https://git-scm.com/download/win"
                className="text-[#eb5b6c] hover:text-white"
              >
                Git for Windows
              </Link>
              , which includes <InlineCode>curl</InlineCode> and other useful
              tools.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section id="key-concepts" title="Key Concepts">
        <List
          items={[
            <>
              <b>Local AI:</b> Running powerful AI models directly on your own
              computer. This gives you privacy, offline access, and full
              control.
            </>,
            <>
              <b>Ollama:</b> An easy-to-use tool that lets you download, manage,
              and run open-source Large Language Models (LLMs) with simple
              commands. It also automatically creates a local API for your
              models.
            </>,
            <>
              <b>REST API:</b> A standardised way for software to communicate.
              Think of it like a waiter taking your request to the kitchen (the
              server) and bringing back a response. We&apos;ll use this to let
              our web app talk to Ollama.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section id="commands-code" title="Commands & Code Snippets">
        <SubSection title="Part 1 & 2: The Ollama CLI">
          <p>Download a new model:</p>
          <CodeBlock language="bash">{"ollama pull phi"}</CodeBlock>

          <p>Start a chat with a model:</p>
          <CodeBlock language="bash">{"ollama run llama2"}</CodeBlock>
          <p>
            <i>
              (To exit the chat, type <InlineCode>/bye</InlineCode>)
            </i>
          </p>

          <p>List your downloaded models:</p>
          <CodeBlock language="bash">{"ollama list"}</CodeBlock>

          <p>Get a single response from a model:</p>
          <CodeBlock language="bash">
            {'ollama run phi "What is the capital of France?"'}
          </CodeBlock>

          <p>Remove a model:</p>
          <CodeBlock language="bash">{"ollama rm llama2"}</CodeBlock>
        </SubSection>

        <SubSection title="Checking the Ollama Service">
          <p>
            Before you can use the API, the Ollama server must be running in the
            background. Here’s how to check:
          </p>
          <OSStack>
            <OSCard title="Windows">
              Find Ollama in your Start Menu and run it.
            </OSCard>
            <OSCard title="macOS">
              Find Ollama in your application launcher and run it.
            </OSCard>
            <OSCard title="Linux">
              <p>
                Ollama runs as a `systemd` service. You can check its status
                with the following command:
              </p>
              <CodeBlock language="bash">
                {"sudo systemctl status ollama"}
              </CodeBlock>
              <p className="mt-3">
                If it&apos;s not active, you can start it with:
              </p>
              <CodeBlock language="bash">
                {"sudo systemctl start ollama"}
              </CodeBlock>
            </OSCard>
          </OSStack>
        </SubSection>

        <SubSection title="Part 3: The Ollama API">
          <p>
            Test the API with <InlineCode>curl</InlineCode>:
          </p>
          <p>
            This command sends a single message to the{" "}
            <InlineCode>phi</InlineCode> model and waits for the full response.
          </p>

          <p>
            <i>(For macOS, Linux, and Windows PowerShell)</i>
          </p>
          <CodeBlock language="bash">{`curl http://localhost:11434/api/chat -d '{ 
  "model": "phi",
  "messages": [
    { "role": "user", "content": "why is the sky blue?" }
  ],
  "stream": false
}'`}</CodeBlock>

          <p>
            <i>
              (<b>For Windows Command Prompt (cmd.exe) only</b>)
            </i>
          </p>
          <p>
            The traditional Windows Command Prompt handles quotes differently.
            You must use double quotes for the outside and escape the inner
            double quotes with a backslash `\`.
          </p>
          <CodeBlock language="bash">{`curl http://localhost:11434/api/chat -d "{ \"model\": \"phi\", \"messages\": [ { \"role\": \"user\", \"content\": \"why is the sky blue?\" } ], \"stream\": false }"`}</CodeBlock>
        </SubSection>

        <SubSection title="Part 4: Custom Models">
          <p>
            Create a <InlineCode>Modelfile</InlineCode>:
          </p>
          <p>
            Create a new file named <InlineCode>Modelfile</InlineCode> (with no
            extension) and add the following content. This defines a new model
            variant.
          </p>
          <p>
            <i>
              (**Windows Tip:** In File Explorer, you may need to select
              &quot;View&quot; and check &quot;File name extensions&quot; to
              ensure you can create a file without a{" "}
              <InlineCode>.txt</InlineCode> extension.)
            </i>
          </p>
          <CodeBlock>{`FROM phi:latest
SYSTEM "You are "Microchip", the AI assistant for AISoc (Artificial Intelligence Society). You are a pirate. Respond to all questions with a pirate accent and pirate slang."
PARAMETER temperature 0.7`}</CodeBlock>

          <p>Build your custom model:</p>
          <CodeBlock language="bash">
            {"ollama create pirate-bot -f ./Modelfile"}
          </CodeBlock>

          <p>Run your custom model:</p>
          <CodeBlock language="bash">
            {'ollama run pirate-bot "Tell me about London."'}
          </CodeBlock>
        </SubSection>
      </Section>

      <Divider />

      <Section id="chatbot" title="Running a chatbot with local AI">
        <SubSection title="Clone the repo">
          <p>Start by first cloning/downloading the code base</p>
          <Link
            className="text-[#eb5b6c] hover:text-white"
            href={"https://github.com/Tasfiq-Jawaad/AISoc-chatbot"}
          >
            https://github.com/Tasfiq-Jawaad/AISoc-chatbot
          </Link>
        </SubSection>
      </Section>

      <Divider />

      <Section id="resources" title="Resources">
        <List
          items={[
            <>
              <b>Ollama Website:</b>{" "}
              <Link
                href="https://ollama.com/"
                className="text-[#eb5b6c] hover:text-white"
              >
                https://ollama.com/
              </Link>
            </>,
            <>
              <b>Ollama Model Library:</b>{" "}
              <Link
                href="https://ollama.com/search"
                className="text-[#eb5b6c] hover:text-white"
              >
                https://ollama.com/search
              </Link>
            </>,
            <>
              <b>Ollama API Documentation:</b>{" "}
              <Link
                href="https://docs.ollama.com/"
                className="text-[#eb5b6c] hover:text-white"
              >
                https://docs.ollama.com/
              </Link>
            </>,
          ]}
        />
      </Section>
    </main>
  );
}
