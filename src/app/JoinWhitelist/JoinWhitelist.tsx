"use client";
import { useState } from "react";
import {
  Box,
  
  Button,
  TextField,
  styled,
  CircularProgress,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
// import Lottie from "lottie-react";
// import celebrationAnimation from "../assets/calebration.json"; // adjust path if needed
import axios from "axios";
import MotionTypography from "@/app/components/animations";

// Luxurious styling for components
const MotionBox = motion(Box);
// const MotionTypography = motion(Typography);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


// Luxurious Yellow Bar Styling
const AnimatedYellowBar = styled(motion.div)({
  width: "150px",
  height: "8px",
  background: "linear-gradient(90deg, #d4af37 0%, #f9d976 100%)",
  boxShadow: "0 0 12px rgba(212, 175, 55, 0.8)",
  borderRadius: "5px",
  marginBottom: "2rem",
  marginLeft: "auto",
  marginRight: "auto",
});

// Email validation function
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const JoinWhitelist = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/save-email", {
        email,
        firstName,
        lastName,
      });

      setError("");
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 409) {
        setError("This email is already registered.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const textFieldStyle = {
    // background: "#fff",
    // borderRadius: "12px",
    // boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
    "& .MuiInputBase-root": {
      fontSize: "1rem",
      fontFamily: "'Lora', serif",
      // color: "#333",
      padding: "10px 14px",
      borderRadius: "12px",
    },
    // "& .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#e0e0e0",
    // },
    // "&:hover .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#d4af37",
    // },
    // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#d4af37",
    //   boxShadow: "0 0 4px rgba(212, 175, 55, 0.4)",
    // },
  };

  const buttonStyle = {
    fontWeight: 700,
    px: 5,
    py: 1.2,
    fontSize: "1rem",
    background: "linear-gradient(90deg, #d4af37 0%, #f9d976 100%)",
    color: "#000",
    borderRadius: "40px",
    boxShadow: "0 4px 14px rgba(212, 175, 55, 0.4)",
    textTransform: "uppercase",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      background: "linear-gradient(90deg, #f9d976 0%, #d4af37 100%)",
      color: "#000",
      boxShadow: "0 6px 20px rgba(212, 175, 55, 0.5)",
    },
  };

  return (
    <MotionBox
      id="join-whitelist"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      sx={{
        backgroundColor: "#f7f7f7",
        py: { xs: 10, md: 12 },
        px: { xs: 3, md: 5 },
        textAlign: "center",
      }}
    >
      {!submitted ? (
        <>
          <MotionTypography
            variant="overline"
            color="textSecondary"
            letterSpacing={2}
            variants={childVariants}
            sx={{ fontWeight: 600 }}
          >
            JOIN NOW
          </MotionTypography>

          <MotionTypography
            variant="h4"
            fontWeight={700}
            mt={2}
            variants={childVariants}
            sx={{ fontFamily: "'Playfair Display', serif" }}
          >
            Join the Whitelist
          </MotionTypography>

          <MotionTypography
            variant="h5"
            fontWeight={700}
            mb={2}
            variants={childVariants}
            sx={{ fontFamily: "'Playfair Display', serif", color: "#333" }}
          >
            10,000 TCWNN for the first 1000 people
          </MotionTypography>

          <AnimatedYellowBar
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
          />

          <MotionTypography
            variant="body1"
            maxWidth="700px"
            mx="auto"
            mb={2}
            variants={childVariants}
            sx={{
              fontSize: "1.2rem",
              color: "#555",
              lineHeight: 1.5,
              fontFamily: "'Lora', serif",
            }}
          >
            “PLUS - A chance to win 250,000 TCWNN.
            <br />
            We’ll send you a link to claim your tokens when the pre-sale starts.
            Check your Junk folder for the confirmation email. Be Lucky!”
          </MotionTypography>

          <MotionBox
            mt={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3} // increased for better vertical rhythm
            variants={childVariants}
          >
            {/* Row: First & Last Name */}
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={2}
              width="100%"
              maxWidth={600}
              justifyContent="center"
            >
              <TextField
                placeholder="Enter your first name"
                size="small"
                fullWidth
                sx={textFieldStyle}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                placeholder="Enter your last name"
                size="small"
                fullWidth
                sx={textFieldStyle}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>

            {/* Row: Email */}
            <Box width="100%" maxWidth={600}>
              <TextField
                placeholder="Enter your email address"
                size="small"
                fullWidth
                sx={textFieldStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error}
                helperText={error}
              />
            </Box>

            {/* Row: Button */}
            <Box mt={1}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={buttonStyle}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  "SIGN UP"
                )}
              </Button>
            </Box>
          </MotionBox>
        </>
      ) : (
        <MotionBox
          key="success"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            py: { xs: 10, md: 12 },
            px: { xs: 3, md: 5 },
            textAlign: "center",
            minHeight: "200px",
          }}
        >
          <Box sx={{ maxWidth: 200, mx: "auto", mb: 2 }}>
            {/* <Lottie animationData={celebrationAnimation} loop={true} /> */}
          </Box>

          <MotionTypography
            variant="h6"
            fontWeight={600}
            mb={2}
            variants={childVariants}
            sx={{ fontFamily: "'Lora', serif", color: "#333" }}
          >
            Hello there,
          </MotionTypography>

          <MotionTypography
            variant="body1"
            maxWidth="600px"
            mx="auto"
            variants={childVariants}
            sx={{
              fontSize: "1.1rem",
              color: "#555",
              fontFamily: "'Lora', serif",
              lineHeight: 1.6,
            }}
          >
            Thanks so much for connecting with us, subscriber! You are in the
            draw for 250,000 TCWNN tokens. You will receive an email with a
            onetime link to claim your 10,000 FREE tokens when the pre-sale
            starts. We'll make sure to keep you in the loop, and include you in
            any special announcements, deals, and offers.
          </MotionTypography>
        </MotionBox>
      )}
    </MotionBox>
  );
};

export default JoinWhitelist;
