import React, { useState } from "react";
import Layout from "../components/layout";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import { PauseCircle, PlayCircle } from "@mui/icons-material";
import { RadioService } from "../services/radio";

function Live() {
  const [playing, setPlaying] = useState(false);
  return (
    <Layout>
      <Stack>
        <Container>
          <Stack spacing={5} py={10} textAlign={"center"}>
            <Stack pt={10}>
              <Typography variant="h6">
                <b>Live Radio</b>
              </Typography>
              <Typography variant="h2">
                <span>Joyous</span> Radio
              </Typography>
            </Stack>
            <Stack>
              <IconButton
                onClick={() => {
                  if (playing) {
                    setPlaying(false);
                    RadioService.pause();
                  } else {
                    setPlaying(true);
                    RadioService.play();
                  }
                }}
                sx={{ alignSelf: "center" }}
                size="large"
              >
                {playing ? (
                  <PauseCircle sx={{ width: 200, height: 200 }} />
                ) : (
                  <PlayCircle sx={{ width: 200, height: 200 }} />
                )}
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Layout>
  );
}

export default Live;
