"use client";

import { Box, Typography, Paper, Chip } from "@mui/material";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {blogPosts} from "@/app/lib/blogPosts"

const AnimatedYellowBar = styled(motion.div)({
  width: "120px",
  height: "6px",
  background: "linear-gradient(90deg, #d4af37 0%, #f9d976 100%)",
  boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
  borderRadius: "3px",
  marginBottom: "2.5rem",
  marginLeft: "auto",
  marginRight: "auto",
});

const BlogContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  maxWidth: 1100,
  margin: "0 auto",
}));

const BlogTitle = styled(Typography)({
  fontWeight: 900,
  fontSize: "3rem",
  textAlign: "center",
  color: "#000",
  marginBottom: "1rem",
  fontFamily: "'Poppins', sans-serif",
  letterSpacing: "1px",
});

const BlogCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(5),
  borderRadius: 20,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  alignItems: "flex-start",
  background: "#fff",
  border: "1px solid rgb(201, 194, 178)",
  boxShadow: "0 10px 35px rgba(197, 184, 155, 0.16)",
  cursor: "pointer",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Thumb = styled("div")(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: 16,
  overflow: "hidden",
  border: "2px solid rgb(194, 189, 174)", // fixed missing space
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 180,
  },
}));

const BlogTextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

const TagRow = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  marginBottom: 10,
});

const HoverLink = styled(MuiLink)<MuiLinkProps>({
  fontWeight: 600,
  color: "#bfa037",
  fontSize: "1rem",
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  textDecoration: "none",
  transition: "color 0.3s ease, transform 0.3s ease",
  "&:hover": { color: "#ffcc00", transform: "translateX(6px)" },
});

export default function BlogListPage() {
  const router = useRouter();

  return (
    <BlogContainer>
      <BlogTitle>TCWNN Blog</BlogTitle>

      <AnimatedYellowBar
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      />

      {blogPosts.map((post, index) => (
        <BlogCard
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          onClick={() => router.push(`/blog/${post.slug}`)}
        >
          <Thumb>
            <Image
              src={post.image}
              alt={post.title}
              width={240}
              height={240}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority={index < 2}
            />
          </Thumb>

          <BlogTextBox>
            <Typography
              variant="caption"
              sx={{ color: "#888", fontSize: "0.9rem", mb: 0.5 }}
            >
              {post.date} • {post.readTime}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "#1a1a1a",
                fontFamily: "'Poppins', sans-serif",
                mb: "0.7rem",
              }}
            >
              {post.title}
            </Typography>

            <TagRow>
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: "#faf3dd",
                    color: "#a66f00",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                  }}
                />
              ))}
            </TagRow>

            <Typography
              variant="body1"
              sx={{
                color: "#444",
                fontSize: "1rem",
                lineHeight: 1.7,
                mb: "0.75rem",
              }}
            >
              {post.description.slice(0, 250)}
              {post.description.length > 250 ? "..." : ""}
            </Typography>

            {/* Explicit link for accessibility & SEO */}
            <HoverLink
              component={Link}
              href={`/blog/${post.slug}`}
              onClick={(e: any) => e.stopPropagation()}
            >
              Continue Reading →
            </HoverLink>
          </BlogTextBox>
        </BlogCard>
      ))}
    </BlogContainer>
  );
}
