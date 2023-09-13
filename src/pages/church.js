import React from "react";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import { Button, Container, Stack, Typography } from "@mui/material";
import SectionHeader from "../components/sectionHeader";

function Church() {
  return (
    <Layout>
      <PageHeader
        imageURl={
          "https://images.unsplash.com/photo-1600038734220-7e3c079bf982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        }
        pageName={"Church"}
      />
      <Container>
        <Stack spacing={3} textAlign={"center"} pb={10}>
          <SectionHeader title={"Collaboration"} />
          <Typography variant="h4">UAFC HOPE to You Church</Typography>
          <Typography>
            Joyous Radio is part of the UAFC HOPE to You Church, which is a
            Non-Profit Organization based in Soweto.
          </Typography>
          <Button
            variant="contained"
            href="http://uafcdube.org.za/about.html"
            target="_blank"
            sx={{ alignSelf: "center" }}
          >
            Go to UAFC HOPE to You Church Website{" "}
          </Button>
        </Stack>
      </Container>
    </Layout>
  );
}

export default Church;
