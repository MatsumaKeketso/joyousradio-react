import React from "react";
import Layout from "./layout";
import { Breadcrumbs, Container, Link, Stack, Typography } from "@mui/material";

function PageHeader({ pageName, imageURl }) {
  return (
    <Stack
      height={"40vh"}
      justifyContent={"flex-end"}
      p={3}
      color={"white"}
      sx={{
        background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${imageURl})`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Stack alignItems={"center"} spacing={3}>
          <Typography variant="h2" textAlign={"center"}>
            {pageName === "Church" ? (
              <>
                <span>Joyous Radio</span> and UAFC HOPE to You Church"
              </>
            ) : (
              "Joyous Radio"
            )}{" "}
          </Typography>
          <Breadcrumbs sx={{ color: "white" }}>
            <Link href="/" underline="hover" color={"white"}>
              Home
            </Link>
            <Link underline="none" color={"white"}>
              {pageName}
            </Link>
          </Breadcrumbs>
        </Stack>
      </Container>
    </Stack>
  );
}

export default PageHeader;
