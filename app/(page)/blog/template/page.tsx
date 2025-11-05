import Link from "next/link";

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

export default function page() {
  const AUTHOR_NAME = "Author";
  const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/author-details-go-here";
  const AUTHOR_GITHUB = "https://github.com/author-details-go-here";
  const LAST_UPDATED = "5 Nov 2025";
  const READ_TIME = "5 mins";

  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Title, subtitle, author meta data */}
      <section className="relative mb-8 md:mb-12">
        <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full [background:#eb5b6c22] blur-[72px]" />
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Title
        </h1>
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          Subtitle
        </p>

        {/* Author meta row */}
        <div className="mt-3 flex flex-col flex-wrap items-start gap-3 text-sm text-gray-400">
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

          <span className="inline-flex items-center gap-2">
            <span>Updated: {LAST_UPDATED}</span>
            <span aria-hidden className="text-gray-600">
              •
            </span>
            <span>Read time: {READ_TIME}</span>
          </span>
        </div>

        <div className="mt-3 h-1 w-24 rounded-full [background:#eb5b6c99]" />
      </section>

      {/* Table of contents */}
      <section
        aria-labelledby="toc-heading"
        className="relative mb-8 md:mb-12 rounded-lg border border-white/10 bg-white/[0.03] p-4"
      >
        <h2
          id="toc-heading"
          className="text-sm font-semibold uppercase tracking-wide text-gray-300"
        >
          On this page
        </h2>
        <ol className="mt-3 space-y-2 text-gray-400" type="1">
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#first"
            >
              1. First topic
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#"
            >
              2. Second topic
            </Link>
          </li>
          <li>
            <Link
              className="[color:#eb5b6c] hover:text-white transition"
              href="#"
            >
              3. Third topic
            </Link>
          </li>
        </ol>
      </section>

      <Section id="first" title="First topic">
        <SubSection title="first_topic first_subsection">
          <p>This is an example of a paragraph</p>
          <List
            items={[
              <>This is an example of a list</>,
              <>This is an example of a list</>,
              <>This is an example of a list</>,
            ]}
          />
        </SubSection>

        <SubSection title="first_topic first_subsection">
          <p className="text-gray-400">
            This is an example of <InlineCode>inline code</InlineCode>
          </p>
        </SubSection>
      </Section>
    </main>
  );
}
