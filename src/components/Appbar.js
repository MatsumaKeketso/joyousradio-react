import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
export const links = [
  "/",
  "about",
  "donate",
  "church",
  "gallery",
  "contact",
  "live",
];
function Appbar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { pageName } = props;

  useEffect(() => {}, []);
  return (
    <AppBar
      color={pageName === "/" ? "transparent" : "inherit"}
      variant="outlined"
    >
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <Stack>
          <Box p={5} sx={{ height: 150 }} alignItems={"center"}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src={require("../assets/h.jpg")}
            />
          </Box>
          <Stack p={4} direction={"column"} spacing={1}>
            {links.map((link, i) => {
              return (
                <Button
                  key={i}
                  size="small"
                  variant={pageName == link ? "contained" : "text"}
                  href={link === "/" ? link : `/${link}`}
                >
                  <Typography
                    variant="button"
                    color={pageName == link ? "white" : "GrayText"}
                  >
                    {link === "/" ? "home" : link}
                  </Typography>
                </Button>
              );
            })}
          </Stack>
        </Stack>
      </SwipeableDrawer>
      <Container>
        <Toolbar variant="dense">
          <Stack flex={1}>
            <Box sx={{ width: 80 }} alignItems={"center"}>
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
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            {links.map((link, i) => {
              return (
                <Button
                  key={i}
                  size="small"
                  variant={pageName == link ? "contained" : "text"}
                  href={link === "/" ? link : `/${link}`}
                >
                  <Typography
                    variant="button"
                    color={pageName == link ? "white" : "GrayText"}
                  >
                    {link === "/" ? "home" : link}
                  </Typography>
                </Button>
              );
            })}
          </Stack>
          <Stack sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
            <IconButton
              onClick={() => {
                setOpenDrawer(true);
              }}
            >
              <Menu sx={{ color: pageName === "/" ? "white" : "black" }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
