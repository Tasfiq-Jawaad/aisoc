"use client";

import { CodeBlock } from "@/components/blog/CodeBlock";
import { Divider } from "@/components/blog/Divider";
import { InlineCode } from "@/components/blog/InlineCode";
import { List } from "@/components/blog/List";
import { OSCard } from "@/components/blog/OSCard";
import { OSStack } from "@/components/blog/OSStack";
import { Section } from "@/components/blog/Section";
import { SubSection } from "@/components/blog/SubSection";
import Link from "next/link";

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
          for building chatbots, emphasizing local AI&apos;s capabilities and
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
          After installation, you can interact with Ollama through your
          system&apos;s command line interface.
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
                If you&apos;re using Linux, you should already know how to open
                your terminal. You can enable and start Ollama as a systemd
                service for automatic startup and background operation.
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
          library. Let&apos;s pull <InlineCode>phi</InlineCode>, a good small
          model for getting started.
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
        Ollama&apos;s most significant capability lies in the ability to
        customize and create your own models using a{" "}
        <InlineCode>Modelfile</InlineCode>. A Modelfile is essentially a
        blueprint that defines how a model should be built or modified, allowing
        for significant flexibility.
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
        I&apos;ll be delivering an{" "}
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
