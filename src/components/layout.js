import React, { useEffect } from "react";
import Appbar from "./Appbar";
import { Container, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

function Layout(props) {
  const { children, pageName } = props;
  const location = useLocation();
  const getPageName = () => {
    if (location.pathname === "/") {
      return location.pathname;
    } else {
      const removeSpecial = location.pathname.replace("/", "");
      return removeSpecial;
    }
  };
  useEffect(() => {
    console.log(getPageName());
  }, []);
  return (
    <Stack>
      <Appbar pageName={getPageName()} />
      <Container>{children}</Container>
    </Stack>
  );
}

export default Layout;
