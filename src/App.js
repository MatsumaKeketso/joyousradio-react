import "./App.css";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import { useEffect, useState } from "react";
import { RadioService } from "./services/radio";
import Appbar from "./components/Appbar";
import Layout from "./components/layout";

const App = () => {
  const [playing, setPlaying] = useState(false);
  const playAudio = () => {
    RadioService.play();
    setPlaying(true);
  };
  const pauseAudio = () => {
    RadioService.pause();
    setPlaying(false);
  };
  return (
    <Layout pageName="home">
      <Stack pt={5} alignItems={"center"} spacing={5}>
        <Box sx={{ width: 200, height: 200, margin: "auto" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={require("../src/assets/h.jpg")}
          />
        </Box>
        <Typography variant="h2" textAlign={"center"}>
          Listen to the radio
        </Typography>
        <Stack>
          <Divider />
          <Typography variant="subtitle1" textAlign={"center"}>
            Stream Sermons and Songs of Worship from the most talented
            musicians.
          </Typography>
          <Divider />
        </Stack>

        {playing ? (
          <IconButton
            onClick={() => {
              pauseAudio();
            }}
            sx={{ alignSelf: "center" }}
          >
            <Avatar sx={{ width: 200, height: 200 }}>
              <PauseRounded sx={{ width: 150, height: 150 }} />
            </Avatar>
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              playAudio();
            }}
            sx={{ alignSelf: "center" }}
          >
            <Avatar sx={{ width: 200, height: 200 }}>
              <PlayArrowRoundedIcon sx={{ width: 150, height: 150 }} />
            </Avatar>
          </IconButton>
        )}

        <Divider />
        <Stack flex={1} spacing={2} direction={{ xs: "column", sm: "row" }}>
          <Stack flex={1}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 200, sm: "100%" },
                overflow: "hidden",
                borderRadius: 4,
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={require("./assets/bgs/image002.jpg")}
              />
            </Box>
          </Stack>
          <Stack flex={1} spacing={2}>
            <Typography variant="h4">About Us</Typography>
            <Typography variant="body2">
              Joyous Radio is part of the UAFC–HOPE to You Church, which is a
              Non-Profit Organization, based in Dube Village, Soweto, South
              Africa. Joyous Radio was launched on the 18th of July 2011, in
              celebration of the Nelson Mandela Day.
            </Typography>
            <Typography variant="body2">
              The founding members of Joyous Radio are Pastor Sipho Mahlangu and
              his wife Nthabiseng Mahlangu. Sipho and Nthabiseng took Christ
              literally when He said in Mark 16:15, “Go into all the world and
              preach the gospel to all creation”. They both are READY to spread
              the Word of God, heal the sick by the Power of the Holy Spirit,
              help and encourage others. Their mission is a God-birthed passion
              to bring people into a vital saving relationship with Jesus
              Christ. Sipho has been evangelizing on the radio since the year
              2010. His aim in life is to bring glory to his Lord and Saviour
              Jesus Christ by being a faithful witness of Him.
            </Typography>
            <Typography variant="body2">
              The on-air programs cater to a wide range of listeners. The daily
              morning and afternoon drive programs are entertaining yet
              informative and often include interviews on a broad spectrum of
              community issues.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default App;
