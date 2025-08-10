"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";

import forbesLogo from "@/app/assets/banner-image-1.jpg";
import twitterLogo from "@/app/assets/banner-image-1.jpg";
import techEuLogo from "@/app/assets/banner-image-1.jpg";
import commonwealthLogo from "@/app/assets/banner-image-1.jpg";
import cointelegraphLogo from "@/app/assets/banner-image-1.jpg";

const links = [
  {
    label: "Forbes Business Council",
    href: "https://www.forbes.com/councils/forbesbusinesscouncil/people/skywee/",
    logo: forbesLogo,
    tooltip: "Featured in Forbes Business Council",
  },
  {
    label: "SkyWee on X",
    href: "https://x.com/OfficialSkyWee1/status/1922977941375549684",
    logo: twitterLogo,
    tooltip: "Tweet from SkyWee on X (Twitter)",
  },
  {
    label: "Tech.eu: Blockchain & AI",
    href: "https://tech.eu/2025/06/10/blockchain-and-ai-are-finally-hooking-up-and-why-it-matters/",
    logo: techEuLogo,
    tooltip: "Tech.eu article on Blockchain & AI",
  },
  {
    label: "The Digital Commonwealth",
    href: "http://www.thedigitalcommonwealth.com/posts/ai-and-crypto---the-twain-finally-meet",
    logo: commonwealthLogo,
    tooltip: "AI & Crypto: The Twain Finally Meet",
  },
  {
    label: "Cointelegraph: Sky Wee",
    href: "https://cointelegraph.com/magazine/danger-signs-bitcoin-retail-abandons-institutions-sky-wee/?utm_source=rss_feed&utm_medium=full_rss&utm_campaign=rss_partner_inbound",
    logo: cointelegraphLogo,
    tooltip: "Sky Wee featured in Cointelegraph",
  },
  {
    label: "Forbes: Sky Wee",
    href: "https://www.forbes.com/sites/amyguttman/2025/06/18/how-a-streamer-pivoted-from-gaming-to-build-a-web3-empire/",
    logo: cointelegraphLogo,
    tooltip: "Sky Wee featured in Forbes",
  },
];

const FeaturedLinks: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
    >
      <Box
        sx={{
          marginTop: { xs: "200px", xl: "0", md: "0" },
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {links.map((link, i) => (
          <Tooltip key={i} title={link.tooltip} arrow>
            <Typography
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 2,
                py: 0.7,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#333",
                background: "rgba(255, 255, 255, 0.75)",
                borderRadius: "50px",
                border: "1px solid rgba(212,175,55, 0.25)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backdropFilter: "blur(6px)",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                whiteSpace: "nowrap",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                "&:hover": {
                  background: "#111",
                  color: "#fff",
                  borderColor: "#d4af37",
                  //   boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                  boxShadow:
                    "0 0 0 1px #d4af37, 0 4px 12px rgba(212,175,55,0.4)",
                },
              }}
            >
              <Box
              // component="img"
              // src={link.logo}
              // alt={link.label}
              // sx={{
              //   width: 18,
              //   height: 18,
              //   borderRadius: "50%",
              //   backgroundColor: "#fff", // helps dark logos show
              //   padding: "2px",
              //   objectFit: "contain",
              //   boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              //   transition: "all 0.3s ease",
              //   filter: "grayscale(60%) brightness(0.9)",
              //   "&:hover": {
              //     filter: "none",
              //   },
              // }}
              />

              {link.label}
            </Typography>
          </Tooltip>
        ))}
      </Box>
    </motion.div>
  );
};

export default FeaturedLinks;
