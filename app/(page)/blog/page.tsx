import { getAllBlogPosts } from "@/lib/actions/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog | Leeds AI Society",
  description: "Explore our latest articles, tutorials, and updates.",
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-4 py-8 md:py-12">
      {/* Page header */}
      <section className="relative mb-12 md:mb-16">
        <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full [background:#eb5b6c22] blur-[72px]" />

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Our Blog
        </h1>

        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          Explore our latest guides, tutorials, and thoughts on artificial
          intelligence, built for the community.
        </p>

        <div className="mt-5 h-1 w-24 rounded-full [background:#eb5b6c99]" />
      </section>

      {/* Blog posts grid */}
      {posts.length === 0 ? (
        <p className="text-gray-400 text-lg">
          No posts found. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {posts.map((post) => {
            const rawAuthor = post.author as unknown as
              | { name: string }
              | { name: string }[]
              | null;

            const authorName = Array.isArray(rawAuthor)
              ? rawAuthor[0]?.name
              : rawAuthor?.name;

            const formattedDate = new Intl.DateTimeFormat("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(post.published_at));

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              >
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white transition-colors group-hover:text-[#eb5b6c]">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm md:text-base text-gray-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                  <span className="font-medium text-gray-300">
                    {authorName || "Unknown Author"}
                  </span>
                  <span aria-hidden>•</span>
                  <time dateTime={post.published_at}>{formattedDate}</time>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
