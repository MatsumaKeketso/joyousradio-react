import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

function Appbar(props) {
  const { pageName } = props;
  const links = [
    "/",
    "about",
    "donate",
    "church",
    "gallery",
    "contact",
    "live",
  ];
  useEffect(() => {}, []);
  return (
    <AppBar color="inherit" variant="outlined">
      <Container>
        <Toolbar variant="dense">
          <Stack flex={1}>
            <Box sx={{ width: 80 }} alignItems={"center"}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={require("../assets/h.jpg")}
              />
            </Box>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            {links.map((link, i) => {
              return (
                <Button
                  key={i}
                  size="small"
                  variant={pageName == link ? "contained" : "text"}
                  href={link === "/" ? link : `/${link}`}
                >
                  <Typography variant="button">
                    {link === "/" ? "home" : link}
                  </Typography>
                </Button>
              );
            })}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
