"use client";

import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "@/app/assets/images/banner-images/mainimg.jpg";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import XLogo from "@/app/assets/images/icons/x.webp"; // <-- adjust your path
import BskyLogo from "@/app/assets/images/icons/bluesky.webp"; // <-- adjust your path
import TikTokLogo from "@/app/assets/images/icons/tiktok.webp"; // <-- adjust your path
import DisCordLogo from "@/app/assets/images/icons/dis.jpg"; // <-- adjust your path
import Image from "next/image";

const navItems = [
  "HOME",
  "WHITE PAPER",
  "ROADMAP",
  "PRE-SALE",
  "THE TEAM",
  "BURN MECHANISM",
  "BLOG",
];

const NavLink = styled(motion(MuiLink))(({ theme }) => ({
  color: "#000",
  textDecoration: "none",
  fontWeight: 500,
  margin: theme.spacing(0, 2),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -2,
    left: 0,
    height: 2,
    width: "0%",
    backgroundColor: "#d4af37",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const pathname = usePathname();
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const target = document.getElementById("join-whitelist");
    if (!target) {
      setShowNav(true); // Always show NavBar if #join-whitelist is not present
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(!entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  // go to a section on the home page
  const goTo = (id: string) => {
    // full pages
    if (["burn-mechanism", "blog", "white-paper"].includes(id)) {
      router.push(`/${id}`);
      setDrawerOpen(false);
      return;
    }

    // go home and jump to section (use a hash)
    console.log("pathname", pathname);
    if (pathname !== "/") {
      router.push(`/#${id}`); // no .then
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navItems.map((text, index) => {
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  const id = text.toLowerCase().replace(/\s+/g, "-");
                  goTo(id);
                }}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#fafafa" : "#f0f0f0",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                  transition: "background-color 0.3s ease",
                }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    sx: { fontWeight: 500, color: "#000" },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AnimatePresence>
        {showNav && !drawerOpen && (
          <motion.div
            key="navbar"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              position: "sticky",
              top: 0,
              zIndex: 9999,
            }}
          >
            <AppBar
              position="static"
              elevation={0}
              sx={{
                top: 0,
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <Container sx={{ px: { xs: 2, md: 0 } }} maxWidth="xl">
                <Toolbar
                  disableGutters
                  sx={{
                    minHeight: 8, // ↓ from default 64
                    px: 1, // less side padding
                    py: 0,
                  }}
                >
                  {isMobile && (
                    <IconButton
                      edge="start"
                      onClick={toggleDrawer(true)}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      marginX: "auto",
                    }}
                  >
                    <Image
                      src={logo}
                      alt="TCWNN Logo"
                      width={70}
                      height={10}
                      priority
                    />

                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 900, fontSize: "1.8rem" }}
                    >
                      TCWNN
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      flexGrow: 1,
                      justifyContent: "center",
                    }}
                  >
                    {navItems.map((item) => {
                      const id = item.toLowerCase().replace(/\s+/g, "-");
                      return (
                        <NavLink
                          key={item}
                          onClick={() => {
                            goTo(id);
                          }}
                          sx={{ cursor: "pointer" }}
                        >
                          {item}
                        </NavLink>
                      );
                    })}
                  </Box>

                  <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
                    <IconButton
                      size="small"
                      href="https://www.facebook.com/profile.php?id=61575060900437"
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                    >
                      <FacebookIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href="https://www.instagram.com/tcwnninfo/"
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                    >
                      <InstagramIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href="https://t.me/+xwFFyWTlGQ9jNmJk"
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                    >
                      <TelegramIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href="https://discord.com/invite/gRgdruzWEQ"
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image src={DisCordLogo} alt="X" width={20} height={20} />
                    </IconButton>
                    <IconButton
                      size="small"
                      href="https://x.com/TcwnnNews"
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image src={XLogo} alt="X" width={20} height={20} />
                    </IconButton>

                    <IconButton
                      size="small"
                      href="https://www.tiktok.com/@tcwnn"
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image src={TikTokLogo} alt="X" width={20} height={20} />
                    </IconButton>
                    <IconButton
                      size="small"
                      href="https://www.linkedin.com/company/106832679/"
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                    >
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href="https://bsky.app/profile/tcwnn.bsky.social"
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image src={BskyLogo} alt="X" width={20} height={20} />
                    </IconButton>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </motion.div>
        )}
      </AnimatePresence>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
