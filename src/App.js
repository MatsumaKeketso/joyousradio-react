import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide>
          <Stack
            p={2}
            overflow={"hidden"}
            height={"100vh"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            sx={{
              background:
                "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
              backgroundSize: "cover",
            }}
          >
            <Box sx={{ height: 200 }} alignItems={"center"}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={require("./assets/download.png")}
              />
            </Box>
            <Typography variant="h5" textTransform={"uppercase"}>
              Listen to Joyous Radio From wherever you are
            </Typography>
            <Typography variant="body2">
              A leading christian station with a mission to shate the Good News
              of Jesus Christ
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            p={2}
            overflow={"hidden"}
            height={"100vh"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            textAlign={"center"}
            sx={{
              background:
                "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
              backgroundSize: "cover",
            }}
          >
            <Box sx={{ height: 200 }} alignItems={"center"}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={require("./assets/download.png")}
              />
            </Box>
            <Typography variant="h5" textTransform={"uppercase"}>
              Stream sermons and songs of worship from the most talented
              musicians
            </Typography>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default App;
