import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Paper, Chip } from "@mui/material";

const API_URL = process.env.API_URL!; // e.g. https://api.tcwnn.ai

// Revalidate every 5 minutes (ISR)
export const revalidate = 300;

async function getPosts() {
  const res = await fetch(`${API_URL}/blogs-list`, {
    // caches on the server; regenerates per `revalidate`
    next: { revalidate },
  });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json() as Promise<
    Array<{
      slug: string;
      title: string;
      date: string;
      readTime: string;
      image: string;
      description: string;
      tags: string[];
    }>
  >;
}

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", p: 4 }}>
      <Typography variant="h3" fontWeight={900} textAlign="center" mb={4}>
        TCWNN Blog
      </Typography>

      {posts.map((post) => (
        <Paper
          key={post.slug}
          sx={{ p: 4, mb: 5, borderRadius: 2, cursor: "pointer" }}
        >
          <Link
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "2px solid #c2bdae",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={240}
                  height={240}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="caption" sx={{ color: "#888" }}>
                  {post.date} • {post.readTime}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800, mt: 0.5, mb: 1 }}
                >
                  {post.title}
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                  {post.tags?.map((t) => (
                    <Chip
                      key={t}
                      size="small"
                      label={t}
                      sx={{
                        background: "#faf3dd",
                        color: "#a66f00",
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>

                <Typography variant="body1" sx={{ color: "#444" }}>
                  {post.description?.slice(0, 250)}
                  {post.description?.length > 250 ? "..." : ""}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      ))}
    </Box>
  );
}
