"use client";
import { Box, Container, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import robot from "@/app/assets/banner-image-1.jpg";
import FeaturedLinks from "./FeaturedLinks";

const AnimatedYellowBar = styled(motion.div)({
  width: "120px",
  height: "6px",
  background: "linear-gradient(90deg, #d4af37 0%, #f9d976 100%)",
  boxShadow: "0 0 10px rgba(212,175,55,0.5)",
  borderRadius: "3px",
  marginBottom: "1.5rem",
});

const homeStyle = {
  backgroundColor: "#fff",
  backgroundImage: `url(${robot.src})`, // <-- use .src
  backgroundRepeat: "no-repeat",
  backgroundPosition: { xs: "center 60%", md: "right center" },
  backgroundSize: { xs: "500px", md: "1000px", lg: "1600px", xl: "2000px" },
  marginTop: "60px",
  minHeight: "90vh",
  display: "flex",
  marginLeft: { xs: 0, md: "10rem" },
  marginRight: { xs: 0, md: "12rem" },
  alignItems: "center",
};

export default function Hero() {
  return (
    <Box id="home" sx={homeStyle}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: { xs: 6, md: 0 },
        }}
      >
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "600px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <AnimatedYellowBar
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            />

            <Typography
              variant="h2"
              component="h1"
              fontWeight={800}
              sx={{
                fontSize: {
                  xs: "2.4rem",
                  sm: "3rem",
                  md: "3.8rem",
                  lg: "4.2rem",
                },
                lineHeight: 1.2,
                color: "#111",
                mb: 3,
              }}
            >
              TCWNN – <br /> The Coin With No Name
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem" },
                color: "#555",
                maxWidth: "100%",
                lineHeight: 1.8,
                mb: 4,
                fontWeight: 500,
              }}
            >
              DRIVING THE FUTURE — SIMPLIFYING AI DEVELOPMENT TO POWER <br />
              THE NEXT WAVE OF INTELLIGENT AUTOMATION.
            </Typography>

            <AnimatedYellowBar
              initial={{ width: 0 }}
              animate={{ width: "50px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            />
            <FeaturedLinks />
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}> */}
            {/* <Button
                variant="outlined"
                sx={{
                  borderColor: "#000",
                  color: "#000",
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: "0.9rem",
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#fff",
                  },
                }}
              >
                BUY NOW
              </Button> */}
            {/* </motion.div> */}
          </Box>
        </motion.div>
        {/* Right Side: Token Purchase Card */}
        {/* Right Side: Token Purchase Card */}
        <Box
          sx={{
            mt: { xs: 12, md: 5 }, // ⬅️ Here: increase top margin on mobile
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            maxWidth: { xs: "300px", md: "auto" }, // <-- shrink on small screens
          }}
        >
          {/* <HeroRightCard /> */}
        </Box>
      </Container>
    </Box>
  );
}
