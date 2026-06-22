import {
  ArrowRight,
  Check,
  Gift,
  GraduationCap,
  Mail,
  Megaphone,
  Network,
  Presentation,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generalContactEmail } from "@/lib/data/committee";

const stats = [
  { value: "500+", label: "Active members" },
  { value: "1,600+", label: "CS students within direct reach" },
  { value: "3", label: "Flagship annual events" },
  { value: "13+", label: "Organisations partnered with" },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Recruit technical talent",
    body: "Get in front of students who build with AI—computer scientists, engineers and machine-learning enthusiasts looking for placements, internships and graduate roles.",
  },
  {
    icon: Network,
    title: "Reach early adopters across industries",
    body: "Run a hands-on workshop and put your tools in the hands of future professionals across business, law, medicine and beyond—the people who will champion and adopt them in their careers.",
  },
  {
    icon: Megaphone,
    title: "Brand visibility & impact",
    body: "Place your brand in front of an engaged, AI-curious community at a Russell Group university—and support student-led AI education while you do it.",
  },
];

const tiers = [
  {
    name: "Bronze",
    tagline: "Community",
    featured: false,
    intro: "A simple way to back the society and reach our members.",
    benefits: [
      "Logo on our sponsors page",
      "A social media shout-out",
      "One opportunity post to members each term",
    ],
    inherits: null,
  },
  {
    name: "Silver",
    tagline: "Partner",
    featured: false,
    intro: "Greater visibility plus a chance to meet members in person.",
    benefits: [
      "Logo on event banners & slides",
      "Feature in our newsletter",
      "Host one workshop or tech talk a year",
      "Logo on event merchandise",
    ],
    inherits: "Bronze",
  },
  {
    name: "Gold",
    tagline: "Headline",
    featured: true,
    intro: "Our closest partnership.",
    benefits: [
      "Headline branding at a flagship event (hack_ai_thon / Leeds AI Week / Leeds AI Conference)",
      "Sponsor a hackathon challenge + a seat on the judging panel",
      "Priority recruiting & CV access through our network",
      "A dedicated committee liaison",
    ],
    inherits: "Silver",
  },
];

const alaCarte = [
  {
    icon: Trophy,
    title: "Sponsor the hackathon",
    body: "Fund prizes or set a challenge for Leeds hack_ai_thon.",
  },
  {
    icon: Presentation,
    title: "Host a workshop or tech talk",
    body: "Put your tools and team in front of an engaged audience.",
  },
  {
    icon: Sparkles,
    title: "Back a conference session",
    body: "Support a session at Leeds AI Week or the Leeds AI Conference.",
  },
  {
    icon: Gift,
    title: "Provide prizes or swag",
    body: "Offer prizes, merchandise or refreshments for our events.",
  },
];

const flagshipEvents = [
  {
    title: "Leeds AI Week",
    image: "/sponsors/leeds_ai_week.jpg",
    description:
      "An annual, week-long exploration of AI across business, education, climate, engineering, software and healthcare. Expert panels, hands-on workshops and a full-day conference. (Season 2 comming soon)",
    scale: "500+ attendees",
    href: "https://www.leedsaiweek.co.uk",
  },
  {
    title: "Leeds <hack_ai_thon>",
    image: "/sponsors/hackaithon.jpg",
    description:
      "The first student-led, AI-themed hackathon in Yorkshire. An annual day of building AI-powered solutions across every skill level. (2027 session coming soon)",
    scale: "≈150–200 attendees",
    href: null,
  },

  {
    title: "Leeds AI Conference",
    image: "/sponsors/leeds_ai_conference.svg",
    description:
      "A new conference bringing together students and professionals across disciplines to get ready for an AI-driven workplace, with practical sessions on AI tools, workflows and literacy.",
    scale: "Coming soon",
    href: null,
  },
  {
    title: "Workshops & Tech Talks",
    image: "/sponsors/workshops_tech_talks.JPG",
    description: "Serie of workshops and tech-talks throughout the year.",
    scale: "50+ per session",
    href: "/events",
  },
];

const partners = [
  { name: "Vercel", logo: "/sponsors/vercel_logo.png" },
  { name: "Leaning Tech", logo: "/sponsors/leaning_tech_logo.png" },
  { name: "Helix", logo: "/sponsors/helix_logo.png" },
  { name: "Litmus", logo: "/sponsors/litmus_logo.png" },
  { name: "HR180", logo: "/sponsors/hr180_logo.png" },
  { name: "The Bigger Boat", logo: "/sponsors/the_bigger_boat_logo.jpg" },
  {
    name: "Haynes Motor Museum",
    logo: "/sponsors/haynes_motor_museum_logo.png",
  },
  { name: "LIDA", logo: "/sponsors/lida_logo.jpeg" },
  { name: "LITE", logo: "/sponsors/lite_logo.jpg" },
  { name: "Flotilla World", logo: "/sponsors/flotilla_world_logo.jpeg" },
  { name: "Hark", logo: "/sponsors/hark_logo.png" },
  { name: "BCS", logo: "/sponsors/bcs_logo.png" },
];

const mailto = `mailto:${generalContactEmail}?subject=Sponsorship%20enquiry%20%E2%80%94%20Leeds%20AI%20Society`;

export default function SponsorPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Hero */}
      <section className="relative mb-12 md:mb-16">
        <div className="hero-glow" />
        <GlowBlob />
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
          Partner with the Leeds Artificial Intelligence Society
        </h1>
        <p className="mt-4 text-gray-300 text-base md:text-xl max-w-2xl">
          The official student-led AI society at the University of Leeds. We
          connect ambitious sponsors with an engaged, AI-driven student
          community through recruitment, hands-on workshops and our flagship
          events.
        </p>
        <div className="mt-3 h-1 w-24 rounded-full [background:#eb5b6c99]" />

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={mailto}>
            <Mail className="h-4 w-4" /> Get in touch
          </Button>
          <Button href="#packages" variant="ghost">
            View packages <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* At-a-glance stats */}
      <section className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[color:#eb5b6c0d] to-transparent blur-3xl pointer-events-none" />
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 text-center"
          >
            <div className="text-3xl md:text-4xl font-extrabold tracking-tight [color:#ff909c]">
              {s.value}
            </div>
            <div className="mt-2 text-sm md:text-base text-gray-300">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      <Divider className="my-12 md:my-16" />

      {/* Who we are */}
      <section className="relative">
        <SectionHeading
          eyebrow="Who we are"
          title="An interdisciplinary AI community"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-lg md:text-2xl font-semibold text-white leading-snug">
              An interdisciplinary community spanning computer science,
              engineering, business, law, medicine and many more; from those
              building AI to those putting it to work in their own fields.
            </p>
            <p className="mt-5 text-gray-300 text-base md:text-lg">
              That breadth is our strength: we offer sponsors both deep
              technical talent and a wide audience of future professionals
              learning to apply AI in the real world. We bring everyone
              together—from complete beginners to seasoned builders—around
              talks, workshops, socials and hackathons.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-white font-bold text-lg">Our reach</h3>
            <ul className="mt-4 space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 shrink-0 [color:#eb5b6c]" />
                <span>500+ active members (cross-discipline)</span>
              </li>
              <li className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 [color:#eb5b6c]" />
                <span>
                  Direct access to 1,600+ Computer Science undergraduate and
                  master&apos;s students
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Network className="mt-0.5 h-5 w-5 shrink-0 [color:#eb5b6c]" />
                <span>
                  Partnerships with multiple schools at Leeds, Leeds University
                  Union and an active alumni network
                </span>
              </li>
            </ul>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm text-gray-400">
              Based at the University of Leeds—a Russell Group university ranked
              77th in the world (QS 2026) and home to 39,000+ students.
            </p>
          </div>
        </div>
      </section>

      <Divider className="my-12 md:my-16" />

      {/* Why partner */}
      <section className="relative">
        <SectionHeading
          eyebrow="Why partner with us"
          title="One society, multi-discipline audiences"
        />
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <GlowBlob className="-top-10 -right-10 left-auto h-32 w-32 [background:#eb5b6c1a] blur-2xl" />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl [background:#eb5b6c1a] [color:#ff909c] border [border-color:#eb5b6c4d]">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-white font-bold text-lg md:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 text-gray-300 text-sm md:text-base">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Divider className="my-12 md:my-16" />

      {/* Packages */}
      <section id="packages" className="relative scroll-mt-24">
        <SectionHeading
          eyebrow="Sponsorship packages"
          title="Annual partnership tiers"
        />
        <p className="-mt-4 mb-8 text-gray-300 text-base md:text-lg max-w-3xl">
          These tiers are a starting point—we&apos;re always happy to tailor a
          bespoke package around your goals and budget.{" "}
          <Link href={mailto} className="[color:#eb5b6c] hover:text-white">
            Get in touch for pricing.
          </Link>
        </p>

        <div className="grid gap-5 md:gap-6 lg:grid-cols-3 items-start">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative overflow-hidden rounded-2xl border bg-white/5 p-6 md:p-7 ${
                t.featured
                  ? "[border-color:#eb5b6c80] ring-1 ring-[color:#eb5b6c66]"
                  : "border-white/10"
              }`}
            >
              {t.featured && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:#eb5b6c14] to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex items-center rounded-full [background:#eb5b6c] text-black px-3 py-1 text-xs font-bold">
                    Most popular
                  </span>
                </>
              )}
              <div className="relative">
                <div className="text-sm font-semibold uppercase tracking-wide [color:#ff909c]">
                  {t.tagline}
                </div>
                <h3 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{t.intro}</p>

                {t.inherits && (
                  <p className="mt-5 text-sm font-semibold text-gray-200">
                    Everything in {t.inherits}, plus:
                  </p>
                )}
                <ul className="mt-3 space-y-3">
                  {t.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm md:text-base text-gray-200"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 [color:#eb5b6c]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={mailto}
                  variant={t.featured ? "primary" : "ghost"}
                  className="mt-6 w-full"
                >
                  Enquire about {t.name}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* À la carte */}
        <h3 className="mt-12 mb-5 text-xl md:text-2xl font-extrabold tracking-tight text-white">
          Prefer a one-off? Support a single event
        </h3>
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {alaCarte.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg [background:#eb5b6c1a] [color:#ff909c]">
                <a.icon className="h-5 w-5" />
              </span>
              <h4 className="mt-3 text-white font-bold">{a.title}</h4>
              <p className="mt-1 text-sm text-gray-400">{a.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Divider className="my-12 md:my-16" />

      {/* Flagship events */}
      <section className="relative">
        <SectionHeading
          eyebrow="What we do"
          title="Our flagship annual events"
        />
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
          {flagshipEvents.map((e) => (
            <article
              key={e.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              <div className="relative h-44 md:h-48 w-full overflow-hidden bg-[#0b1424]">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  // SVG placeholders (e.g. the upcoming conference) bypass the
                  // image optimizer, which rejects SVGs by default.
                  unoptimized={e.image.endsWith(".svg")}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <Pill className="absolute left-3 top-3">{e.scale}</Pill>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-bold text-lg md:text-xl tracking-tight text-white">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-300">
                  {e.description}
                </p>
                {e.href ? (
                  <Link
                    href={e.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium [color:#eb5b6c] hover:text-white transition"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium [color:#eb5b6c] hover:text-white transition">
                    More information on 26/27 edition coming soon.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Attendance figures are typical or expected for upcoming editions.
        </p>
      </section>

      <Divider className="my-12 md:my-16" />

      {/* We've worked with */}
      <section className="relative">
        <SectionHeading
          eyebrow="We've worked with"
          title="Companies & institutions we've partnered with"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex h-24 md:h-28 items-center justify-center"
              title={p.name}
            >
              <div className="relative h-full w-full">
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider className="my-12 md:my-16" />

      {/* Contact CTA */}
      <section className="relative">
        <div className="relative overflow-hidden rounded-2xl border [border-color:#eb5b6c33] bg-gradient-to-br from-[color:#eb5b6c1a] via-white/5 to-transparent p-7 md:p-10 text-center">
          <div className="hero-glow" />
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-300 text-base md:text-lg">
            Tell us what you&apos;re hoping to achieve and we&apos;ll put
            together a package that fits. We typically reply within a few
            working days.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button href={mailto}>
              <Mail className="h-4 w-4" /> {generalContactEmail}
            </Button>
            <Button href="/committee" variant="ghost">
              Meet the committee <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Sponsor us | Artificial Intelligence Society",
  description:
    "Partner with the Leeds Artificial Intelligence Society. Reach an interdisciplinary student AI community at the University of Leeds through recruitment, workshops, and our flagship events including Leeds hack_ai_thon and Leeds AI Week.",
  openGraph: {
    type: "website",
    url: "https://www.leedsaisoc.co.uk/sponsor",
    siteName: "Leeds AI Society",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
};
