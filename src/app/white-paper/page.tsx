import { Box, Container, Typography, Button } from "@mui/material";
import AbstractImage from "../assets/whitepaper/abstract.jpg";
import EraBeforeUXImage from "../assets/whitepaper/ai.png";
import OurSolutionImage from "../assets/whitepaper/solution.png";
import TCWNNGraphImage from "../assets/whitepaper/supply.png";
import PIECHART from "../assets/whitepaper/pie.png";
import FUTURE from "../assets/whitepaper/regular.png";
import FinalImage from "../assets/whitepaper/future.png";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import Image from "next/image";

const WhitePaper = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      mb={8}
      id="white-paper"
    >
      <Container maxWidth="lg">
        {/* ABSTRACT */}
        {/* ABSTRACT */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mb={8}
        >
          {/* Left side - Text */}
          <Box flex={1} pr={{ md: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Abstract
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              The Coin With No Name (TCWNN) is a next-generation{" "}
              <strong>
                Solana-based crypto token powering an AI-driven bot development
                ecosystem
              </strong>
              . It allows users to{" "}
              <strong>
                seamlessly build, deploy, and monetize AI-powered automation
                solutions
              </strong>{" "}
              without technical barriers.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              There are a few ChatBot builders around and there are companies
              that will charge you 1000’s to build a Bot for you...
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Unlike traditional AI bot platforms that are{" "}
              <strong>expensive, centralized, and complex</strong>, TCWNN is
              built on <strong>three core principles</strong>:
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Speed & Low Costs</strong> – Powered by Solana, ensuring{" "}
              <strong>lightning-fast transactions</strong> at near-zero fees.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>No-Code AI Development</strong> – Enabling anyone to{" "}
              <strong>create AI bots effortlessly</strong> without programming
              skills.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Decentralized AI Economy</strong> – TCWNN tokens fuel
              transactions, access to AI models, and premium bot features.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              By bridging <strong>blockchain, AI, and automation</strong>, TCWNN
              democratizes AI bot development, making it accessible to
              businesses, developers, and enthusiasts, in fact everybody
              worldwide.
            </Typography>
          </Box>

          {/* Right side - Image */}
          <Box flexShrink={0} mt={{ xs: 4, md: 0 }}>
            <Image src={AbstractImage} alt="Abstract" width={350} priority />
          </Box>
        </Box>

        {/* White Paper Download */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{
              textAlign: "center",
            }}
          >
            TCWNN White-Paper
          </Typography>
          <Button
            variant="contained"
            href="https://img1.wsimg.com/blobby/go/3b55c4c6-2342-43b6-b1f4-ab43a7137fac/downloads/a0103ba2-a921-4dcd-9ce4-eb1156550bb2/TCWNN-WebWhitePaper.pdf?ver=1744809214196"
            target="_blank"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: "50px",
              border: "2px solid #d4af37",
              color: "#d4af37",
              background: "transparent",
              "&:hover": {
                background: "linear-gradient(90deg, #d4af37, #f9d976)",
                color: "#111",
                boxShadow: "0 6px 18px rgba(212, 175, 55, 0.5)",
                transform: "scale(1.03)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            Download White Paper
          </Button>
        </Box>

        {/* THE AI AUTOMATION INDUSTRY */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mb={10}
        >
          {/* Left side - Text */}
          <Box flex={1} pr={{ md: 6 }} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              THE AI AUTOMATION INDUSTRY IS RAPIDLY GROWING, BUT CURRENT
              SOLUTIONS FACE CRITICAL BARRIERS
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Complexity & Cost:</strong> Developing AI-powered
              automation requires specialized expertise and substantial
              financial investment, making it inaccessible to many businesses
              and individuals.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Poor UI/UX & User Access:</strong> Most AI automation
              platforms are forced upon users; they are not part of us.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Centralization Risks:</strong> Most AI automation
              platforms are owned and controlled by large corporations, limiting
              innovation, restricting access, and raising concerns over data
              privacy and security.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Scalability & Infrastructure Constraints:</strong>{" "}
              Traditional cloud-based AI services suffer from high fees, slow
              processing speeds, and inefficiencies that limit their ability to
              handle large-scale automation needs.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Interoperability Issues:</strong> Many AI solutions are
              siloed, making integration with existing workflows and
              applications challenging and inefficient.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Limited Customization & Flexibility:</strong> Most AI
              automation tools offer rigid, pre-configured solutions, preventing
              businesses from tailoring AI-driven automation to their unique
              needs.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Security & Trust Concerns:</strong> Centralized AI
              models pose risks of data breaches, unauthorized access, and
              biased decision-making, reducing trust in AI-driven automation.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              •{" "}
              <strong>
                High Transaction Costs in Traditional AI Services:
              </strong>{" "}
              Many AI platforms charge high fees for API calls, AI model access,
              and automation execution, making them economically unfeasible for
              small businesses and independent developers.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Slow Adoption of Decentralized AI:</strong> While
              blockchain and AI have the potential to revolutionize automation,
              current decentralized AI projects face adoption barriers due to
              complex onboarding processes, lack of developer-friendly tools,
              and limited use cases.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              These obstacles prevent businesses and individuals from leveraging{" "}
              <strong>AI-driven automation to its full potential</strong>.
            </Typography>
          </Box>

          {/* Right side - Image */}
          <Box flexShrink={0} mt={{ xs: 6, md: 0 }}>
            <Image
              src={EraBeforeUXImage}
              alt="Era Before Good UX"
              width={400}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </Box>
        </Box>

        {/* OUR SOLUTION */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mb={10}
        >
          {/* Left side - Image */}
          <Box flexShrink={0} textAlign="center" mb={{ xs: 4, md: 0 }}>
            <Image
              src={OurSolutionImage}
              alt="Our Solution"
              width={500}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </Box>

          {/* Right side - Text */}
          <Box flex={1} pl={{ md: 6 }} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                // textShadow: "0 0 8px rgba(85, 83, 75, 0.5)",
                textAlign: "center",
              }}
              gutterBottom
            >
              Our Solution
            </Typography>

            <Typography
              variant="h6"
              fontWeight={700}
              mt={2}
              mb={4}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              TCWNN transforms AI bot development by offering:
            </Typography>

            {[
              "No-Code/Low-Code AI Bot Builder – Users can create AI bots with drag-and-drop simplicity, supported by vibe coding principles for intuitive, modular workflow assembly.",
              "Decentralized AI Marketplace – Anyone can license, sell, and monetize AI models.",
              "Blockchain-Powered AI Economy – TCWNN tokens facilitate transactions, staking, and governance.",
              "Ultra-Low Transaction Fees – Leveraging Solana to reduce operational costs and increase adoption.",
            ].map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                color="text.secondary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  fontSize: "1rem",
                  "& strong": { color: "#d4af37" },
                }}
              >
                <CheckCircleIcon sx={{ color: "#d4af37", mt: "4px" }} />
                {item}
              </Typography>
            ))}

            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{
                fontSize: "1rem",
                mt: 4,
                "& strong": { color: "#d4af37" },
              }}
            >
              TCWNN is not just a token — it is the <strong>fuel</strong> for an
              AI-driven <strong>automated economy</strong>, allowing users to
              build, deploy, and <strong>monetize AI bots effortlessly</strong>.
            </Typography>
          </Box>
        </Box>

        {/* TOKEN SUPPLY & DISTRIBUTION */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mb={10}
        >
          {/* Left side - Text */}
          <Box flex={1} pr={{ md: 6 }} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              TOKEN SUPPLY & DISTRIBUTION
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              The total supply of TCWNN tokens is fixed at{" "}
              <strong>1,500,000,000 (1.5 billion)</strong>, ensuring scarcity
              and long-term value appreciation. The token distribution is
              structured as follows:
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              1. Public Sale – <strong>600,000,000</strong> (40.00%)
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              2. Team & Development – <strong>300,000,000</strong> (20.00%)
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              3. Partnerships & Ecosystem Growth – <strong>225,000,000</strong>{" "}
              (15.00%)
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              4. Reserve Fund – <strong>150,000,000</strong> (10.00%)
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              5. Marketing & Community Rewards – <strong>150,000,000</strong>{" "}
              (10.00%)
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              6. Liquidity Pool – <strong>75,000,000</strong> (5.00%)
            </Typography>
          </Box>

          {/* Right side - Image */}
          <Box flexShrink={0} mt={{ xs: 6, md: 0 }} textAlign="center">
            <Image
              src={TCWNNGraphImage}
              alt="Token Supply Growth"
              width={300}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </Box>
        </Box>

        {/* TOKEN DISTRIBUTION PIE CHART */}
        <Box textAlign="center" mt={8}>
          <Image
            src={PIECHART} // << update this path
            alt="Token Distribution Pie Chart"
            width={900}
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </Box>
        {/* BURN MECHANISM */}
        <Box textAlign={{ xs: "center", md: "left" }} mt={10} mb={8}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            BURN MECHANISM
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            To create a deflationary aspect and increase token value over time,
            TCWNN integrates a burn mechanism:
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            • <strong>Transaction Fees:</strong> A small percentage of each
            transaction is burned.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            • <strong>AI Model Usage Fees:</strong> A portion of TCWNN tokens
            used for premium AI services is permanently removed from
            circulation.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            • <strong>Subscription Burn:</strong> Monthly subscription payments
            in TCWNN tokens will have a burn percentage.
          </Typography>

          <Link href="/burn-mechanism">
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                textTransform: "none",
                borderRadius: "50px",
              }}
            >
              FIND OUT MORE
            </Button>
          </Link>
        </Box>

        {/* STAKING & REWARDS */}
        <Box textAlign={{ xs: "center", md: "left" }} mb={10}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            STAKING & REWARDS
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Users can stake TCWNN tokens to earn rewards and discounts on
            platform fees. Stakers will receive:
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            • A percentage of transaction fees redistributed.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            • Exclusive access to premium AI tools and features.
          </Typography>
        </Box>
        {/* AI BOT BUILDER PLATFORM FEATURES + REVENUE MODEL */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="flex-start"
          justifyContent="space-between"
          mt={8}
          mb={10}
        >
          {/* AI BOT BUILDER PLATFORM FEATURES */}
          <Box flex={1} pr={{ md: 6 }} mb={{ xs: 6, md: 0 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              AI BOT BUILDER PLATFORM FEATURES
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              TCWNN tokens will be the primary currency for:
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>AI Model Licensing:</strong> Access to various AI
              engines.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Bot Hosting & Deployment:</strong> Decentralized hosting
              for AI bots.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Marketplace Payments:</strong> Buying and selling AI bot
              templates.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Enterprise Integrations:</strong> AI-powered solutions
              for businesses.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • <strong>Developer Incentives:</strong> Rewards for contributing
              open-source AI models.
            </Typography>
          </Box>

          {/* REVENUE MODEL */}
          <Box flex={1} pl={{ md: 6 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              REVENUE MODEL
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              TCWNN will generate revenue through:
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • Platform transaction fees.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • AI service subscriptions.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • API integrations for businesses.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              • Token staking and governance participation.
            </Typography>
          </Box>
        </Box>
        {/* REGULATORY & COMPLIANCE */}
        <Box textAlign="center" mt={8} mb={8}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Regulatory & Compliance
          </Typography>
        </Box>
        <Box mb={10}>
          {/* Two sections side by side */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            mb={8}
          >
            {/* Left side: Smart Contract Audits + Regulatory Compliance */}
            <Box flex={1} maxWidth="700px">
              {/* Optional: limit width for nice look */}
              <Typography variant="subtitle2" fontWeight={700} gutterBottom>
                SMART CONTRACT AUDITS
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                All TCWNN smart contracts undergo rigorous security audits by
                leading blockchain security firms, ensuring a safe and reliable
                ecosystem.
              </Typography>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                gutterBottom
                sx={{ mt: 4 }}
              >
                REGULATORY COMPLIANCE
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                The project is committed to full compliance with relevant
                financial regulations and will operate within legal frameworks
                to ensure long-term sustainability.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* FINAL CONCLUSION */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mt={10}
          mb={10}
        >
          {/* Left side - Text */}
          <Box flex={1} pr={{ md: 6 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              TCWNN
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              The Coin With No Name (TCWNN) is more than just another Crypto —
              it’s the foundation of a decentralized, democratic, intelligent
              automation revolution. By combining the power of AI with the
              efficiency of blockchain, TCWNN democratizes AI Bot or Agent
              development, removing technical and financial barriers that have
              long hindered innovation.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              With a seamless, low-cost ecosystem powered by Solana, businesses,
              developers, and individuals can unlock new levels of automation,
              scalability, and customization. Through tokenized incentives,
              staking rewards, and a decentralized marketplace, TCWNN ensures a
              sustainable and equitable future for AI-driven automation.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              This is more than just technology — it’s a movement. A future
              where AI is open, accessible, and powered by the community.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              <strong>
                Be part of the next wave of AI Innovation. The future runs on
                TCWNN. 🚀
              </strong>
            </Typography>

            {/* Website & Community Links */}
            <Box mt={4}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Website & Community Links:
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                • Official Website:{" "}
                <a
                  href="https://www.tcwnn.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://tcwnn.ai
                </a>
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                • Facebook:{" "}
                <a
                  href="https://www.facebook.com/TCWNN1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/TCWNN1
                </a>
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                • Telegram:{" "}
                <a
                  href="https://t.me/tcwnn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://t.me/tcwnn
                </a>
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                • Discord:{" "}
                <a
                  href="https://discord.com/invite/gRgdruzWEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://discord.com/invite/gRgdruzWEQ
                </a>
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                • X:{" "}
                <a
                  href="https://www.x.com/@TcwnnInfo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.x.com/@TcwnnInfo
                </a>
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                • TikTok:{" "}
                <a
                  href="https://www.tiktok.com/@tcwnn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.tiktok.com/@tcwnn
                </a>
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                • LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/106832679/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/company/106832679/
                </a>
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                • BlueSky: tcwnn.bsky.social
              </Typography>
            </Box>
          </Box>

          {/* Right side - Image */}
          <Box flexShrink={0} mt={{ xs: 6, md: 0 }} textAlign="center">
            <Image
              src={FUTURE} // replace with correct path!
              alt="TCWNN Future"
              width={400}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </Box>
        </Box>

        {/* FINAL CONCLUSION */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          mt={10}
          mb={10}
        >
          {/* Left side: Image */}
          <Box flexShrink={0} mb={{ xs: 4, md: 0 }}>
            <Image src={FinalImage} alt="TCWNN Future Panel" priority />
          </Box>

          {/* Right side: Text + Button */}
          <Box flex={1} textAlign="center" ml={{ md: 8 }}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>
              THE FUTURE RUNS ON TCWNN
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              1,250,000 Token Giveaway
            </Typography>

            <Button
              variant="outlined"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: "50px",
                border: "2px solid #d4af37",
                color: "#d4af37",
                background: "transparent",
                "&:hover": {
                  background: "linear-gradient(90deg, #d4af37, #f9d976)",
                  color: "#111",
                  boxShadow: "0 6px 18px rgba(212, 175, 55, 0.5)",
                  transform: "scale(1.03)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              JOIN THE PRE-SALE
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhitePaper;
