"use client";

import { useEffect, useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X"; // or use a custom X svg

export default function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Safe on client only
    setUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(title);

  return (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        alignItems: "center",
        gap: 2,
        py: 1,
        borderTop: "1px solid #eee",
      }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#000", letterSpacing: "0.5px" }}>
        Share this post:
      </Typography>

      <Tooltip title="Share on Facebook" arrow>
        <IconButton
          component="a"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ backgroundColor: "#f5f5f5", borderRadius: "50%", p: "8px", "&:hover": { backgroundColor: "#e1e1e1" } }}
          disabled={!url}
        >
          <FacebookIcon sx={{ color: "#1877F2" }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Share on X" arrow>
        <IconButton
          component="a"
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ backgroundColor: "#f5f5f5", borderRadius: "50%", p: "8px", "&:hover": { backgroundColor: "#e1e1e1" } }}
          disabled={!url}
        >
          <XIcon sx={{ color: "#000" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
