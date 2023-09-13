import React from "react";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import SectionHeader from "../components/sectionHeader";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function About() {
  return (
    <Layout>
      <Stack pb={20}>
        <PageHeader
          pageName={"About"}
          imageURl={
            "https://images.unsplash.com/photo-1491566102020-21838225c3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1261&q=80"
          }
        />
        <SectionHeader title="About Us" />
        <Container>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={4}
            flex={1}
          >
            <Stack spacing={5} flex={1}>
              <Box sx={{ width: "100%", height: 500 }} alignItems={"center"}>
                <a href="/">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={
                      "https://joyousradio-84921.web.app/assets/img/gallery/image002.jpg"
                    }
                  />
                </a>
              </Box>
              <Typography>
                <b>Joyous Radio</b> is part of the UAFC–HOPE to You Church,
                which is a Non-Profit Organization, based in Dube Village,
                Soweto, South Africa. Joyous Radio was launched on the 18th of
                July 2011, in celebration of the Nelson Mandela Day.
              </Typography>
              <Typography>
                The founding members of Joyous Radio are Pastor Sipho Mahlangu
                and his wife Nthabiseng Mahlangu. Sipho and Nthabiseng took
                Christ literally when He said in Mark 16:15, “Go into all the
                world and preach the gospel to all creation”. They both are
                READY to spread the Word of God, heal the sick by the Power of
                the Holy Spirit, help and encourage others. Their mission is a
                God-birthed passion to bring people into a vital saving
                relationship with Jesus Christ. Sipho has been evangelizing on
                the radio since the year 2010. His aim in life is to bring glory
                to his Lord and Saviour Jesus Christ by being a faithful witness
                of Him.
              </Typography>
              <Typography>
                Joyous Radio is a member of the National Community Radio Forum,
                the national organizing body in South Africa. Joyous Radio is
                also a member of the Association of Christian Media.
              </Typography>
              <Typography>
                The on-air programs cater to a wide range of listeners. The
                daily morning and afternoon drive programs are entertaining yet
                informative and often include interviews on a broad spectrum of
                community issues.
              </Typography>
            </Stack>
            <Stack spacing={3} width={300}>
              <Typography variant="h4">Founding Members</Typography>
              <Stack spacing={2} direction={"row"} alignItems={"center"}>
                <Box sx={{ width: 90, height: 90 }} alignItems={"center"}>
                  <a href="/">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={
                        "https://joyousradio-84921.web.app/assets/img/gallery/pastor.jpg"
                      }
                    />
                  </a>
                </Box>
                <Typography variant="h6">PR SS Mahlangu</Typography>
              </Stack>
              <Stack spacing={2} direction={"row"} alignItems={"center"}>
                <Box sx={{ width: 90, height: 90 }} alignItems={"center"}>
                  <a href="/">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={
                        "https://joyousradio-84921.web.app/assets/img/gallery/wife.jpg"
                      }
                    />
                  </a>
                </Box>
                <Typography variant="h6">PR N Mahlangu</Typography>
              </Stack>
              <Stack>
                <Typography variant="h5">Our Mission</Typography>
                <Typography>
                  To create compelling media that inspires and encourages you to
                  have a meaningful relationship with Christ.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={5} alignItems={"center"}>
            <Box sx={{ height: 400 }} alignItems={"center"}>
              <a href="/">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={require("../assets/h.jpg")}
                />
              </a>
            </Box>
            <Typography variant="h5">
              The Christian internet radio that restores our hearts and comfort
              our souls
            </Typography>
            <Stack alignItems={"center"} spacing={3} direction={"row"}>
              <Typography>To listen live click</Typography>
              <Button variant="contained">Click Here</Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Layout>
  );
}

export default About;
