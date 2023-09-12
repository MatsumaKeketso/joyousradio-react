import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

function SectionHeader() {
  return (
    <Stack>
      <Divider />
      <Typography>About</Typography>
      <Divider />
    </Stack>
  );
}

export default SectionHeader;
