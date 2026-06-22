import { BlockRenderer } from "@/components/blog/BlockRenderer";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { getBlogPostBySlug } from "@/lib/actions/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  const post = await getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const author = Array.isArray(post.author) ? post.author[0] : post.author;

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(post.published_at));

  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Page header */}
      <section className="relative mb-8 md:mb-12">
        <GlowBlob />

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          {post.title}
        </h1>

        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          {post.excerpt}
        </p>

        {/* Author meta row */}
        {author && (
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2">
              <span className="text-gray-300 font-medium">{author.name}</span>

              {author.linkedin_url && (
                <>
                  <span aria-hidden className="text-gray-600">
                    •
                  </span>
                  <Link
                    href={author.linkedin_url}
                    className="[color:#eb5b6c] hover:text-white transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </Link>
                </>
              )}

              {author.github_url && (
                <>
                  <span aria-hidden className="text-gray-600">
                    •
                  </span>
                  <Link
                    href={author.github_url}
                    className="[color:#eb5b6c] hover:text-white transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Link>
                </>
              )}
            </span>

            <span aria-hidden className="text-gray-600">
              •
            </span>
            <span>Updated: {formattedDate}</span>
          </div>
        )}

        <div className="mt-3 h-1 w-24 rounded-full [background:#eb5b6c99]" />
      </section>

      {/* Render the database JSON content dynamically */}
      <BlockRenderer blocks={post.content} />
    </main>
  );
}
