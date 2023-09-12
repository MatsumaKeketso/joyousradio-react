import "./App.css";
import "swiper/css";
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
import { Swiper, SwiperSlide } from "swiper/react";
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
      <Stack height={"100%"} flex={1} pt={5} alignItems={"center"} spacing={5}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ width: "100%", height: "100%" }}
        >
          <SwiperSlide style={{ width: "100%", height: "100%" }}>
            <Stack
              p={2}
              overflow={"hidden"}
              bgcolor={"red"}
              height={"90vh"}
              width={"100vw"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              Slide 1
            </Stack>
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Stack>
    </Layout>
  );
};

export default App;
