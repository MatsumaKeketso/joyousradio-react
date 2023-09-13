import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

function SectionHeader({ title }) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={2}
      // width={"100%"}
      p={5}
      flex={1}
    >
      <Divider sx={{ flex: 1 }} />
      <Typography
        variant="subtitle1"
        color={"GrayText"}
        letterSpacing={3}
        textTransform={"uppercase"}
      >
        {title}
      </Typography>
      <Divider sx={{ flex: 1 }} />
    </Stack>
  );
}

export default SectionHeader;
