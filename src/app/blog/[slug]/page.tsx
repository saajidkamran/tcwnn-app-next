import { notFound } from "next/navigation";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import ShareButtons from "@/app/blog/[slug]/ShareButtons"; // client component
import { blogPosts } from "@/app/lib/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const lines = (post.description || "").split("\n");

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
      <Typography variant="h3" fontWeight="bold" mb={2}>
        {post.title}
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        mb={2}
        display="block"
      >
        {post.date} • {post.readTime}
      </Typography>

      <Image
        src={post.image} // works with string (/public) or imported image
        alt={post.title}
        width={1600}
        height={900}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 12,
          marginBottom: 24,
        }}
        priority
      />

      <Box sx={{ mb: 4 }}>
        {lines.map((line, i) => {
          const t = line.trim();
          if (t.startsWith("- ")) {
            return (
              <Typography
                key={i}
                component="li"
                variant="body1"
                sx={{ ml: 4, mb: 1, lineHeight: 1.8 }}
              >
                {t.slice(2)}
              </Typography>
            );
          }
          const boldParts = t.split(/\*\*(.*?)\*\*/g);
          return (
            <Typography key={i} variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              {boldParts.map((part, j) =>
                j % 2 ? (
                  <strong key={j}>{part}</strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </Typography>
          );
        })}
      </Box>

      <ShareButtons title={post.title} />
    </Box>
  );
}
