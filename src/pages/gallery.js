import React from "react";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import { Box, Container, Stack } from "@mui/material";
import { Image } from "antd";

function Gallery() {
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
