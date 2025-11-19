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
const LAST_UPDATED = "Updated: 19 Nov 2025";

export default function page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Page header */}
      <section className="relative mb-8 md:mb-12">
        <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full [background:#eb5b6c22] blur-[72px]" />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Getting Started with Local AI: An Introduction to Ollama CLI and API
        </h1>
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          Explore Ollama: a comprehensive guide detailing installation,
          fundamental CLI commands, API usage, and a practical API demonstration
          for building chatbots, emphasizing local AI's capabilities and
          privacy.
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

      <Section id="ollama-intro" title="Getting started with Ollama">
        <SubSection title="What is Ollama?">
          <p>
            Ollama is a lightweight, extensible framework that dramatically
            simplifies the process of downloading, setting up, and running LLMs
            on your local machine. It bundles model weights, configurations, and
            data into a single package, managed by a{" "}
            <InlineCode>Modelfile</InlineCode>. With Ollama, you can be up and
            running with open-source models like Llama, Mistral, and Phi in a
            matter of minutes (depending on your download speed, but you only
            need to download once).
          </p>
        </SubSection>

        <SubSection title="Installation">
          <p>
            Ollama provides a simple, one-click installation for macOS and
            Windows, and a single command for Linux.
          </p>
          <OSStack>
            <OSCard title="macOS & Windows">
              Download the installer from the official website of Ollama
              <Link
                className="text-[#eb5b6c] hover:text-white"
                href={"https://ollama.com/download"}
              >
                https://ollama.com/download
              </Link>
              .
            </OSCard>

            <OSCard title="Linux">
              Run the following command in your terminal:
              <CodeBlock language="bash">
                curl -fsSL https://ollama.com/install.sh | sh
              </CodeBlock>
            </OSCard>
          </OSStack>

          <p>
            Once installed, Ollama will run in the background, ready to receive
            commands.
          </p>
        </SubSection>
      </Section>

      <Divider />

      <Section id="ollama-cli" title="Ollama CLI">
        The Ollama Command Line Interface (CLI) is the primary way to interact
        with the framework.
        <SubSection title="Accessing the CLI">
          After installation, you can interact with Ollama through your system's
          command line interface.
          <OSStack>
            <OSCard title="Windows">
              Open the Command Prompt or PowerShell. You can find these by
              searching for them in the Start Menu.
            </OSCard>
            <OSCard title="macOS">
              Open the Terminal app. You can find it by searching for it using
              Spotlight/Application launcher.
            </OSCard>
            <OSCard title="Linux">
              <p>
                If you're using Linux, you should already know how to open your
                terminal. You can enable and start Ollama as a systemd service
                for automatic startup and background operation.
              </p>
              <CodeBlock language="bash">
                sudo systemctl enable ollama --now
              </CodeBlock>
              <p className="mt-3">
                Or only start the service when you want to with:
              </p>
              <CodeBlock language="bash">sudo systemctl start ollama</CodeBlock>
            </OSCard>
          </OSStack>
          <p className="mt-3">
            Once you have your terminal open, you can start using the{" "}
            <InlineCode>ollama</InlineCode> commands. Here are the essential
            commands to get you started.
          </p>
        </SubSection>
        <SubSection title="Pulling a Model">
          Before you can use a model, you need to download it from the Ollama
          library. Let's pull <InlineCode>phi</InlineCode>, a good small model
          for getting started.
          <CodeBlock language="bash">ollama pull phi</CodeBlock>
          <p className="mt-3">
            You can find a list of available models on the official website of
            Ollama{" "}
            <Link
              href={"https://ollama.com/search"}
              className="text-[#eb5b6c] hover:text-white"
            >
              https://ollama.com/search
            </Link>
          </p>
        </SubSection>
        <SubSection title="Running a Model">
          To start a chat session with your downloaded model, use the{" "}
          <InlineCode>run</InlineCode> command.
          <CodeBlock language="bash">ollama run phi</CodeBlock>
          <p className="mt-3">
            You can now chat with the model directly in your terminal. To exit,
            type <InlineCode>/bye</InlineCode>.
          </p>
        </SubSection>
        <SubSection title="Listing Models">
          To see all the models you have downloaded, use the `list` command.
          <CodeBlock language="bash">ollama ls</CodeBlock>
          <p className="mt-3">
            This will show you a table of your local models, their size, and
            when they were last updated.
          </p>
        </SubSection>
      </Section>

      <Divider />

      <Section id="ollama-api" title="Ollama API">
        While the interactive chat is useful, the real power of Ollama comes
        from its ability to be integrated into other applications. Ollama
        provides a local REST API that runs automatically on port{" "}
        <InlineCode>11434</InlineCode>.
        <br />
        We can use a simple <InlineCode>curl</InlineCode> command to send a
        request to the API for a one-off text generation task.
        <SubSection title={"A Note on `curl` for different Operating Systems"}>
          <OSStack>
            <OSCard title="macOS/Linux">
              The following command should work as is in your terminal.
            </OSCard>
            <OSCard title="Windows (PowerShell)">
              The command is the same.
            </OSCard>
            <OSCard title="Windows (Command Prompt)">
              You may need to escape the double quotes within the JSON payload
              or save the JSON to a file.
            </OSCard>
          </OSStack>
          <p className="mt-3">
            Once you have your terminal open, you can start using the{" "}
            <InlineCode>ollama</InlineCode> commands. Here are the essential
            commands to get you started.
          </p>
          <CodeBlock language="bash">
            {`curl http://localhost:11434/api/generate -d '{
    "model": "phi",
    "prompt": "What is the capital of the United Kingdom?",
    "stream": false
  }'`}
          </CodeBlock>
          <p className="mt-3">
            This command sends a request to the{" "}
            <InlineCode>/api/generate</InlineCode> endpoint with a simple
            prompt. <InlineCode>stream: false</InlineCode> tells Ollama to wait
            for the full response before returning it. You will see a JSON
            response containing the generated text.
          </p>

          <br />

          <p>
            This is interesting, because, if we can send an api request from our
            termincal, we can do the same from our applications! (We will see an
            example below)
          </p>
        </SubSection>
      </Section>

      <Divider />

      <Section id="ollama-modelfile" title="Customising Models with Modelfile">
        Ollama's most significant capability lies in the ability to customize
        and create your own models using a <InlineCode>Modelfile</InlineCode>. A
        Modelfile is essentially a blueprint that defines how a model should be
        built or modified, allowing for significant flexibility.
        <SubSection title={"Modelfile Basics"}>
          A <InlineCode>Modelfile</InlineCode> is a simple text file, similar to
          a <InlineCode>Dockerfile</InlineCode>, that uses a set of instructions
          to define your model. Here are some common instructions:
          <br /> <br />
          <List
            items={[
              <>
                <InlineCode>FROM</InlineCode>: Defines the base model to use
                when creating a model.
              </>,
              <>
                <InlineCode>PARAMETER</InlineCode>: Sets model parameters like{" "}
                <InlineCode>temperature</InlineCode>,{" "}
                <InlineCode>top_k</InlineCode>,<InlineCode>top_p</InlineCode>,
                etc.
              </>,
              <>
                <InlineCode>MESSAGE</InlineCode>: Allows you to specify a
                message history for the model to use when responding. Use
                multiple iterations of the MESSAGE command to build up a
                conversation which will guide the model to answer in a similar
                way.
              </>,
              <>
                <InlineCode>SYSTEM</InlineCode>: Specifies the system message to
                be used in the template, if applicable.
              </>,
              <>
                <InlineCode>ADAPTER</InlineCode>: (Advanced) Specifies LoRA
                adapters for fine-tuning.
              </>,
            ]}
          />
        </SubSection>
      </Section>

      <p>
        I'll be delivering an{" "}
        <Link
          className="text-[#eb5b6c] hover:text-white"
          href={`${process.env.NEXT_PUBLIC_URL}/event-instruction/ollama-local-ai-introduction`}
        >
          interactive session
        </Link>{" "}
        at the Leeds Artificial Intelligence Society soon, where we’ll get to
        explore many of these topics hands-on.
      </p>
    </main>
  );
}
