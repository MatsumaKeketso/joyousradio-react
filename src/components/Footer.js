import {
  ArrowForward,
  Email,
  Facebook,
  Phone,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { links } from "./Appbar";

function Footer() {
  return (
    <Stack bgcolor={"#171717"} sx={{ color: "white" }}>
      <Stack
        sx={{
          color: "white",
          background:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            alignItems={"center"}
            p={5}
            py={10}
            spacing={3}
          >
            <Box sx={{ width: 200 }} alignItems={"center"}>
              <a href="/">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={require("../assets/JR-stroke.png")}
                />
              </a>
            </Box>
            <Stack>
              <Typography variant="h4">2 Corinthians 9:7 (AMP)</Typography>
              <Typography>
                "Let each one give [thoughtfully and with purpose] just as he
                has decided in his heart, not grudgingly or under compulsion,
                for God loves a cheerful giver [and delights in the one whose
                heart is in his gift]."
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Container>
        <Stack
          py={5}
          spacing={2}
          flex={1}
          direction={{ xs: "column", sm: "column", md: "row" }}
        >
          <Stack flex={1} spacing={4}>
            <Box sx={{ width: 190 }} alignItems={"center"}>
              <a href="/">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={require("../assets/JR-stroke.png")}
                />
              </a>
            </Box>
            <Stack>
              <Typography variant="h6">
                "Jesus Christ is the same yesterday, today and forever more."
              </Typography>
              <Typography variant="caption">Hebrews 13:8</Typography>
            </Stack>
            <Stack direction={"row"}>
              <IconButton
                href="https://web.facebook.com/JoyousRadio/?_rdc=1&_rdr"
                target="_blank"
              >
                <Facebook sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                href="https://twitter.com/JoyousRadio"
                target={"_blank"}
              >
                <Twitter sx={{ color: "white" }} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack flex={1}>
            <Typography variant="h5">Quick Links</Typography>
            <List>
              {links.map((link) => {
                return (
                  <ListItem disableGutters disablePadding key={link}>
                    <ListItemButton href={link === "/" ? link : `/${link}`}>
                      <ListItemIcon>
                        <ArrowForward sx={{ color: "white" }} />
                      </ListItemIcon>
                      <ListItemText
                        sx={{ textTransform: "capitalize" }}
                        primary={link === "/" ? "Home" : link}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Stack>
          <Stack flex={1}>
            <Typography variant="h5">Contact Info</Typography>
            <List>
              <ListItem disableGutters disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Phone sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={"087 943 8100"} />
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Phone sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={"086 502 3213"} />
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Email sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={"admin@joyousradio.co.za"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Container>
      <Stack p={5}>
        <Typography textAlign={"center"}>
          Copyright ©2021 All rights reserved | This website is designed by
          Keketso Matsuma
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Footer;
