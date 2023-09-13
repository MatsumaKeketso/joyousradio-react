import React, { useEffect } from "react";

import Appbar from "./Appbar";
import { Container, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

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
    <Stack flex={1} height={"100%"} width={"100%"} sx={{ overflowX: "hidden" }}>
      <Appbar pageName={getPageName()} />
      <Stack flex={1} height={"100%"} width={"100%"}>
        {children}
      </Stack>
      {getPageName() !== "/" && <Footer />}
    </Stack>
  );
}

export default Layout;
