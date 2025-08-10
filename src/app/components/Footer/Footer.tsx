"use client";
import Link from "next/link";
import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import XLogo from "@/app/assets/images/icons/x.webp";
import BskyLogo from "@/app/assets/images/icons/bluesky.webp";
import TikTokLogo from "@/app/assets/images/icons/tiktok.webp";
import DisCordLogo from "@/app/assets/images/icons/dis.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #f5f0e6 0%, #f0ede4 100%)",
        color: "#333",
        padding: "2rem 1rem",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.95rem",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <p style={{ marginBottom: "0.5rem", fontWeight: 400 }}>
        © {new Date().getFullYear()} <strong>TCWNN</strong>. All rights
        reserved.
      </p>

      <Link
        href="/terms-and-conditions"
        style={{
          color: "#bfa14d",
          textDecoration: "underline",
          fontWeight: 500,
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e: any) => (e.currentTarget.style.color = "#222")}
        onMouseLeave={(e: any) => (e.currentTarget.style.color = "#bfa14d")}
      >
        Terms & Conditions
      </Link>

      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 0.5, sm: 1.5 },
          mt: 2,
        }}
      >
        <IconButton
          href="https://www.facebook.com/profile.php?id=61575060900437"
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/tcwnninfo/" target="_blank">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://t.me/+xwFFyWTlGQ9jNmJk" target="_blank">
          <TelegramIcon />
        </IconButton>
        <IconButton
          href="https://discord.com/invite/gRgdruzWEQ"
          target="_blank"
        >
          <Image
            src={DisCordLogo}
            alt="Discord"
            width={20}
            height={20}
            priority
          />
        </IconButton>
        <IconButton href="https://x.com/TcwnnNews" target="_blank">
          <Image src={XLogo} alt="X" width={20} height={20} priority />
        </IconButton>
        <IconButton href="https://www.tiktok.com/@tcwnn" target="_blank">
          <Image
            src={TikTokLogo}
            alt="TikTok"
            width={20}
            height={20}
            priority
          />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/company/106832679/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://bsky.app/profile/tcwnn.bsky.social"
          target="_blank"
        >
          <Image src={BskyLogo} alt="Bluesky" width={20} height={20} priority />
        </IconButton>
      </Box>
    </footer>
  );
};

export default Footer;
