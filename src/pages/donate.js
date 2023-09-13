import React from "react";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import { Container, Stack, Typography } from "@mui/material";
import SectionHeader from "../components/sectionHeader";

function Donate() {
  return (
    <Layout>
      <Stack pb={10}>
        <PageHeader
          imageURl={
            "https://images.unsplash.com/photo-1580695315705-51afbcc21de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          pageName={"Donate"}
        ></PageHeader>
        <Container>
          <SectionHeader title={"Donate"} />
          <Stack spacing={5}>
            <Typography textAlign={"center"} variant="h4">
              <span>Joyous</span> Radio
            </Typography>
            <Typography>
              Joyous Radio is donor driven and we welcome your financial
              support. This station exists because of the support of the public.
              We acknowledge and appreciate all our partners in all forms.
            </Typography>
            <Typography>
              We need your support through donations so that we can continue the
              wonder and surprise in the music and local-interest programming
              that is refreshing, engaging, and helps expand perspectives.
            </Typography>
            <Stack textAlign={"center"}>
              <Typography variant="h5">Donate by Bank Transfer</Typography>
              <Typography>Please make the donation to:</Typography>
            </Stack>
            <Stack spacing={2} textAlign={"center"}>
              <Stack>
                <Typography variant="body1">
                  <span>Account Holder</span>
                </Typography>
                <Typography variant="h5">Joyous Radio</Typography>
              </Stack>
              <Stack>
                <Typography variant="body1">
                  <span>Bank Name</span>
                </Typography>
                <Typography variant="h5">First National Bank (FNB)</Typography>
              </Stack>
              <Stack>
                <Typography variant="body1">
                  <span>Account Number</span>
                </Typography>
                <Typography variant="h5">62872008216</Typography>
              </Stack>
              <Stack>
                <Typography variant="body1">
                  <span>Branch Code</span>
                </Typography>
                <Typography variant="h5">250 655</Typography>
              </Stack>
              <Stack>
                <Typography variant="body1">
                  <span>FNB SWIFT Code</span>
                </Typography>
                <Typography variant="h5">FIRNZAJJ</Typography>
              </Stack>
            </Stack>
            <Typography textAlign={"center"}>
              Please include the reference <b>“DONATION”</b>
            </Typography>
            <Typography>
              Faithful people find a way to remain faithful. In these
              challenging times Christians need to find a way to remain faithful
              in their giving responsibility to the Lord and their church in
              order that their church’s mission would thrive and not suffer.
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </Layout>
  );
}

export default Donate;
