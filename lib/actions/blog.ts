"use server";

import { createClient } from "@/utils/supabase/server";

export async function getBlogPostBySlug(slug: string) {
  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select(
      `
      *,
      author:authors (
        name,
        profile_url,
        linkedin_url,
        github_url
      )
    `,
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error.message);
    return null;
  }

  return post;
}

export async function getAllBlogPosts() {
  const supabase = await createClient();

  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select(
      `
      id,
      slug,
      title,
      excerpt,
      published_at,
      author:authors (
        name
      )
    `,
    )
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error.message);
    return [];
  }

  return posts;
}
