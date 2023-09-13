import React from "react";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import { Box, Container, Stack } from "@mui/material";
import { Image } from "antd";

function Gallery() {
  const gallery = [
    require("../assets/gallery/1.jpg"),
    require("../assets/gallery/2.jpg"),
    require("../assets/gallery/3.jpg"),
    require("../assets/gallery/4.jpg"),
    "../assets/gallery/5.jpg",
    "../assets/gallery/6.jpg",
    "../assets/gallery/7.jpg",
    "../assets/gallery/8.jpg",
    "../assets/gallery/9.jpg",
    "../assets/gallery/10.jpg",
    "../assets/gallery/11.jpg",
    "../assets/gallery/12.jpg",
    "../assets/gallery/13.jpg",
    "../assets/gallery/14.jpg",
    "../assets/gallery/15.jpg",
    "../assets/gallery/16.jpg",
    "../assets/gallery/17.jpg",
    "../assets/gallery/18.jpg",
    "../assets/gallery/19.jpg",
    "../assets/gallery/20.jpg",
    "../assets/gallery/21.jpg",
    "../assets/gallery/22.jpg",
    "../assets/gallery/23.jpg",
    "../assets/gallery/24.jpg",
    "../assets/gallery/25.jpg",
    "../assets/gallery/26.jpg",
    "../assets/gallery/27.jpg",
    "../assets/gallery/28.jpg",
    "../assets/gallery/29.jpg",
    "../assets/gallery/30.jpg",
    "../assets/gallery/31.jpg",
    "../assets/gallery/32.jpg",
    "../assets/gallery/33.jpg",
    "../assets/gallery/34.jpg",
    "../assets/gallery/35.jpg",
    "../assets/gallery/36.jpg",
    "../assets/gallery/37.jpg",
    "../assets/gallery/38.jpg",
    "../assets/gallery/39.jpg",
    "../assets/gallery/40.jpg",
    "../assets/gallery/41.jpg",
    "../assets/gallery/42.jpg",
    "../assets/gallery/43.jpg",
    "../assets/gallery/44.jpg",
    "../assets/gallery/45.jpg",
    "../assets/gallery/46.jpg",
    "../assets/gallery/47.jpg",
    "../assets/gallery/48.jpg",
    "../assets/gallery/49.jpg",
    "../assets/gallery/50.jpg",
    "../assets/gallery/51.jpg",
    "../assets/gallery/52.jpg",
    "../assets/gallery/53.jpg",
    "../assets/gallery/54.jpg",
    "../assets/gallery/55.jpg",
    "../assets/gallery/56.jpg",
    "../assets/gallery/57.jpg",
    "../assets/gallery/58.jpg",
  ];
  return (
    <Layout>
      <PageHeader
        imageURl={require("../assets/bgs/land.jpg")}
        pageName={"Gallery"}
      />
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          gap={2}
          py={5}
        >
          {Array(58)
            .fill()
            .map((path, i) => {
              // const picture = require(path);
              return (
                <Box
                  bgcolor={"red"}
                  sx={{
                    width: { xs: 150, md: 230 },
                    height: { xs: 150, md: 230 },
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    width={"100%"}
                    height={"100%"}
                    objectFit={"cover"}
                    src={require(`../assets/gallery/${i + 1}.jpg`)}
                    alt={`image${i + 1}`}
                  />
                </Box>
              );
            })}
        </Stack>
      </Container>
    </Layout>
  );
}

export default Gallery;
