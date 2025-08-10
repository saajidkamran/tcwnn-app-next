"use client";
import { Box, Container, styled, Typography, useTheme } from "@mui/material";
import { motion, Variants } from "framer-motion";
import image1 from "@/app/assets/images/phases/p1.jpg";
import image2 from "@/app/assets/images/phases/p2.jpg";
import image3 from "@/app/assets/images/phases/p3.jpg";
import image4 from "@/app/assets/images/phases/p4.jpg";
import image5 from "@/app/assets/images/phases/p5.jpg";
import Image from "next/image";
const roadmapData = [
  {
    phase: "① Phase 1 Concept & Research Q2 2025",
    items: [
      "Finalise tokenomics",
      "Smart contract development Partnerships",
      "Marketing Launch",
      "Pre-Sale opens",
      "Finalise Team",
      "HLD/LLD Completed",
    ],
    image: image1,
  },
  {
    phase: "② Phase 2 MVP Q4 2025",
    items: [
      "Release Demo version of AI Bot Builder",
      "Conduct security audits",
      "Launch Influencer Marketing campaign",
      "Pre-Sale Ends",
      "Increase Social Media presence",
    ],
    image: image2,
  },
  {
    phase: "③ Phase 3 Beta Launch Q1 2026",
    items: [
      "Token Launch",
      "Public Beta launch with AI model marketplace, staking, and governance",
      "DEX – CEX Listings",
    ],
    image: image3,
  },
  {
    phase: "④ Phase 4 Ecosystem Expansion Q2 2026",
    items: [
      "Cross Chain functionality",
      "Expand bot capabilities",
      "Onboard businesses",
      "Integrate third-party APIs.",
    ],
    image: image4,
  },
  {
    phase: "⑤ Phase 5 Global Adoption & Scaling Q4 2026",
    items: [
      "Secure further DEX/CEX listings",
      "Global marketing campaigns",
      "Mass adoption strategies.",
    ],
    image: image5,
  },
];

const textVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};
// Yellow underline bar
const AnimatedYellowBar = styled(motion.div)({
  width: "32px",
  height: "6px",
  background: "linear-gradient(90deg, #d4af37 0%, #f9d976 100%)",
  boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
  borderRadius: "3px",
  marginBottom: "1.5rem",
});

const RoadmapSection = () => {
  const theme = useTheme();

  return (
    <Container
      id="roadmap"
      sx={{
        // px: { xs: 2, md: 10 },
        py: 8,
        backgroundColor: "#fff",
      }}
      maxWidth="xl"
    >
      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { xs: 5, md: 2 },
        }}
      >
        <Box>
          <Typography
            component={motion.p}
            variants={textVariant}
            fontWeight={800}
            custom={1}
            fontSize={{ xs: "1rem", md: "1.5rem" }}
            color="gray"
            maxWidth="600px"
          >
            Roadmap
          </Typography>
          <AnimatedYellowBar
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
          />
          <Typography
            component={motion.h2}
            variants={textVariant}
            custom={0}
            fontWeight={700}
            fontSize={{ xs: "2rem", md: "2.8rem" }}
            lineHeight={1.3}
            mb={2}
          >
            The TCWNN Roadmap: <br />
            Milestones Toward a Smarter Tomorrow
          </Typography>
          <AnimatedYellowBar
            initial={{ width: 0 }}
            animate={{ width: "50px" }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
          />
          <Typography
            component={motion.p}
            variants={textVariant}
            custom={1}
            fontSize={{ xs: "1rem", md: "1.1rem" }}
            color="gray"
            mb={6}
            maxWidth="500px"
          >
            We’ve mapped out a clear path for TCWNN—backed by expert insight and
            focused execution. Our roadmap lays out the key milestones ahead as
            we build a powerful, AI-driven ecosystem on the Solana blockchain.
            Take a look at what’s coming.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 4,
            width: "100%",
          }}
        >
          {roadmapData.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(212, 175, 55, 0.3)",
                  "0 0 20px rgba(212, 175, 55, 0.6)",
                  "0 0 0px rgba(212, 175, 55, 0.3)",
                ],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.3,
                ease: "easeOut",
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{
                marginBottom: "2rem",
                padding: "1rem",
                borderRadius: "12px",
                background: "#fafafa",
                width: "100%", // full width on small
                maxWidth: "20rem", // cap on large screens
                flex: "1 1 100%", // allow full width on wrap
                border: "solid #d4af37",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={700} mb={1}>
                  {phase.phase}
                </Typography>
                <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                  {phase.items.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>

              {phase.image && (
                <Box mt={2}>
                  <Image
                    src={phase.image}
                    alt={phase.phase}
                    style={{
                      width: "100%",
                      height: theme.spacing(25),
                      borderRadius: "8px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  />
                </Box>
              )}
            </motion.div>
          ))}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "30px",
              mt: 6,
            }}
          >
            <motion.a
              href="#join-whitelist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ boxShadow: "0 0 0px rgba(212, 175, 55, 0.5)" }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(212, 175, 55, 0.4)",
                  "0 0 15px rgba(212, 175, 55, 0.8)",
                  "0 0 0px rgba(212, 175, 55, 0.4)",
                ],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{
                background: "linear-gradient(135deg, #f0c14b, #d4af37)",
                color: "#000",
                padding: "0.8rem 2rem",
                fontWeight: 600,
                borderRadius: "50px",
                border: "none",
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Typography fontSize={15}>BE ON THE LIST</Typography>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                →
              </motion.span>
            </motion.a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RoadmapSection;
